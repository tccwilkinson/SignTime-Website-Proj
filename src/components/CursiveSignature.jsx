import React, { useEffect, useState } from 'react';

export default function CursiveSignature({ width = 360 }) {
  const [percent, setPercent] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    // Start signing animation after mount
    const startTimer = setTimeout(() => {
      setPercent(100);
    }, 200);

    const completeTimer = setTimeout(() => {
      setCompleted(true);
    }, 2000);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '-0.3rem auto 1.2rem',
        position: 'relative',
        userSelect: 'none',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: `${width}px`,
          height: '90px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* The Handwritten Signature reveal container */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: `${percent}%`,
            overflow: 'hidden',
            transition: 'width 1.7s cubic-bezier(0.4, 0, 0.2, 1)',
            whiteSpace: 'nowrap',
          }}
        >
          <div
            style={{
              width: `${width}px`,
              height: '90px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: '"Caveat", "Dancing Script", "Great Vibes", cursive',
              fontSize: '4rem',
              fontWeight: 700,
              background: 'linear-gradient(90deg, #E8604C, #FF7A65, #E8604C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '0.02em',
              transform: 'rotate(-3deg)',
              filter: 'drop-shadow(0 3px 10px rgba(232, 96, 76, 0.3))',
            }}
          >
            SignTime
          </div>
        </div>

        {/* Animated Fountain Pen tip gliding across as it signs */}
        {!completed && (
          <div
            style={{
              position: 'absolute',
              top: '15px',
              left: `calc(${percent}% - 12px)`,
              transition: 'left 1.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease',
              opacity: percent > 0 ? 1 : 0,
              pointerEvents: 'none',
              zIndex: 10,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {/* Nib tip dot glow */}
              <circle cx="12" cy="20" r="3" fill="var(--coral)" />
              {/* Pen Nib Body */}
              <path d="M 12 20 L 5 4 L 19 4 Z" fill="var(--navy)" stroke="var(--coral)" strokeWidth="1.5" />
              <path d="M 12 20 L 12 10" stroke="#fff" strokeWidth="1.5" />
            </svg>
          </div>
        )}

        {/* Signature Underline Stroke revealed right as signing finishes */}
        <svg
          width={width}
          height="18"
          viewBox="0 0 340 18"
          fill="none"
          style={{
            position: 'absolute',
            bottom: '2px',
            left: 0,
            pointerEvents: 'none',
          }}
        >
          <path
            d="M 15 12 C 80 16, 220 16, 325 6"
            stroke="var(--coral)"
            strokeWidth="3.5"
            strokeLinecap="round"
            style={{
              strokeDasharray: 340,
              strokeDashoffset: percent === 100 ? 0 : 340,
              transition: 'stroke-dashoffset 0.8s ease-out 1.2s',
            }}
          />
        </svg>
      </div>
    </div>
  );
}
