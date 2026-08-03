import { useRef, useState, useEffect, useCallback } from 'react';
import { PenLine, CheckCircle2 } from 'lucide-react';

export default function SignaturePad({ onSignChange }) {
  const canvasRef = useRef(null);
  const drawingRef = useRef(false);
  const lastPointRef = useRef(null);
  const [hasSignature, setHasSignature] = useState(false);

  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 3;
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--coral').trim();
  }, []);

  useEffect(() => {
    setupCanvas();
    const onResize = () => {
      setupCanvas();
      setHasSignature(false);
      onSignChange?.(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [setupCanvas, onSignChange]);

  const getPoint = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const startDraw = (e) => {
    canvasRef.current.setPointerCapture(e.pointerId);
    drawingRef.current = true;
    lastPointRef.current = getPoint(e);
  };

  const draw = (e) => {
    if (!drawingRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    const point = getPoint(e);
    ctx.beginPath();
    ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y);
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
    lastPointRef.current = point;

    if (!hasSignature) {
      setHasSignature(true);
      onSignChange?.(true);
    }
  };

  const stopDraw = () => {
    drawingRef.current = false;
    lastPointRef.current = null;
  };

  const clear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
    setHasSignature(false);
    onSignChange?.(false);
  };

  return (
    <div className="hero-sigpad">
      <div className={`hero-sigpad-label-row${hasSignature ? ' is-signed' : ''}`}>
        <span className="hero-sigpad-label">
          {hasSignature ? <CheckCircle2 size={14} /> : <PenLine size={14} />}
          {hasSignature ? 'Now make it legally binding!' : 'Sign here!'}
        </span>
        {hasSignature && (
          <button type="button" className="hero-sigpad-clear" onClick={clear}>
            Clear
          </button>
        )}
      </div>

      <div className="hero-sigpad-field">
        <canvas
          ref={canvasRef}
          className="hero-sigpad-canvas"
          onPointerDown={startDraw}
          onPointerMove={draw}
          onPointerUp={stopDraw}
          onPointerLeave={stopDraw}
          onPointerCancel={stopDraw}
          aria-label="Signature pad — draw with your mouse or finger to sign"
          role="img"
        />
        <div className="hero-sigpad-line" aria-hidden="true" />
      </div>
    </div>
  );
}
