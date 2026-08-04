import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './WorkflowDiagram.css';

const ROW_H_DESKTOP = 116;
const ROW_H_MOBILE = 60;
const VERTICAL_X = 50;
const AUTO_ADVANCE_MS = 2500;
const DESKTOP_BREAKPOINT = 900;

function cx(...parts) {
  return parts.filter(Boolean).join(' ');
}

function useIsDesktop(breakpoint = DESKTOP_BREAKPOINT) {
  const query = `(min-width: ${breakpoint}px)`;
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = (e) => setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [query]);

  return isDesktop;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return reduced;
}

// Layout is computed analytically (no DOM measurement): x lives in a 0–100
// unit (% of track width), y in real px. The SVG viewBox is set to match
// these units 1:1 per orientation, so lines always meet the nodes exactly.
function computeLayout(steps, lanes, isDesktop) {
  const N = steps.length;
  const hasLanes = Array.isArray(lanes) && lanes.length > 0 && steps.every((s) => s.lane);
  const orientation = isDesktop ? 'horizontal' : 'vertical';
  const laneCount = orientation === 'horizontal' && hasLanes ? lanes.length : 1;
  const rowHeight = orientation === 'horizontal' ? ROW_H_DESKTOP : ROW_H_MOBILE;
  const trackHeight = orientation === 'horizontal' ? laneCount * rowHeight : N * rowHeight;

  const nodes = steps.map((step, i) => {
    if (orientation === 'horizontal') {
      const x = N > 1 ? (i / (N - 1)) * 100 : 50;
      const row = hasLanes ? Math.max(lanes.indexOf(step.lane), 0) : 0;
      return { x, y: row * rowHeight + rowHeight / 2 };
    }
    return { x: VERTICAL_X, y: i * rowHeight + rowHeight / 2 };
  });

  return { orientation, hasLanes, laneCount, rowHeight, trackHeight, nodes };
}

function stepState(i, activeIndex) {
  if (i === activeIndex) return 'active';
  if (i < activeIndex) return 'complete';
  return 'future';
}

function DiagramLines({ nodes, activeIndex, trackHeight }) {
  return (
    <svg className="wd-lines" viewBox={`0 0 100 ${trackHeight}`} preserveAspectRatio="none" aria-hidden="true">
      {nodes.slice(0, -1).map((p, i) => {
        const p2 = nodes[i + 1];
        const len = Math.hypot(p2.x - p.x, p2.y - p.y) || 1;
        const drawn = activeIndex > i;
        return (
          <g key={i}>
            <line x1={p.x} y1={p.y} x2={p2.x} y2={p2.y} className="wd-line-track" vectorEffect="non-scaling-stroke" />
            <line
              x1={p.x}
              y1={p.y}
              x2={p2.x}
              y2={p2.y}
              className={cx('wd-line-draw', drawn && 'is-drawn')}
              vectorEffect="non-scaling-stroke"
              style={{ strokeDasharray: len, strokeDashoffset: drawn ? 0 : len }}
            />
          </g>
        );
      })}
    </svg>
  );
}

function StepFlow({ steps, lanes }) {
  const uid = useId();
  const rootRef = useRef(null);
  const nodeRefs = useRef([]);
  const isDesktop = useIsDesktop();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasEntered || isPaused) return undefined;
    if (activeIndex >= steps.length - 1) return undefined;
    const timer = setTimeout(() => {
      setActiveIndex((i) => Math.min(i + 1, steps.length - 1));
    }, AUTO_ADVANCE_MS);
    return () => clearTimeout(timer);
  }, [hasEntered, isPaused, activeIndex, steps.length]);

  const jumpTo = (index) => {
    const clamped = Math.max(0, Math.min(steps.length - 1, index));
    setIsPaused(true);
    setActiveIndex(clamped);
  };

  const handleNodeKeyDown = (e, i) => {
    let next = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = Math.min(steps.length - 1, i + 1);
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = Math.max(0, i - 1);
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = steps.length - 1;
    if (next === null) return;
    e.preventDefault();
    jumpTo(next);
    nodeRefs.current[next]?.focus();
  };

  const layout = useMemo(() => computeLayout(steps, lanes, isDesktop), [steps, lanes, isDesktop]);
  const activeStep = steps[activeIndex];

  return (
    <div className="wd-diagram" ref={rootRef}>
      {layout.orientation === 'horizontal' ? (
        <div className="wd-lanes-row horizontal">
          {layout.hasLanes && (
            <div className="wd-lane-labels">
              {lanes.map((l) => (
                <div key={l} className="wd-lane-label" style={{ height: layout.rowHeight }}>
                  {l}
                </div>
              ))}
            </div>
          )}
          <div className="wd-track" style={{ height: layout.trackHeight }}>
            <DiagramLines nodes={layout.nodes} activeIndex={activeIndex} trackHeight={layout.trackHeight} />
            <div className="wd-tablist" role="tablist" aria-label="Workflow steps">
              {steps.map((step, i) => {
                const p = layout.nodes[i];
                const state = stepState(i, activeIndex);
                return (
                  <div key={i} className="wd-node-pos" style={{ left: `${p.x}%`, top: `${p.y}px` }}>
                    <button
                      ref={(el) => (nodeRefs.current[i] = el)}
                      type="button"
                      role="tab"
                      id={`wd-tab-${uid}-${i}`}
                      aria-selected={i === activeIndex}
                      aria-controls={`wd-panel-${uid}`}
                      tabIndex={i === activeIndex ? 0 : -1}
                      className={`wd-node is-${state}`}
                      onClick={() => jumpTo(i)}
                      onKeyDown={(e) => handleNodeKeyDown(e, i)}
                    >
                      <span className="wd-node-dot">{step.n ?? i + 1}</span>
                      <span className="wd-node-title">{step.title}</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="wd-lanes-row vertical" style={{ height: layout.trackHeight }}>
          <div className="wd-vertical-rail">
            <DiagramLines nodes={layout.nodes} activeIndex={activeIndex} trackHeight={layout.trackHeight} />
            {steps.map((step, i) => {
              const p = layout.nodes[i];
              const state = stepState(i, activeIndex);
              return (
                <span key={i} aria-hidden="true" className={`wd-rail-dot is-${state}`} style={{ top: `${p.y}px` }}>
                  {step.n ?? i + 1}
                </span>
              );
            })}
          </div>
          <div className="wd-vertical-steps" role="tablist" aria-label="Workflow steps">
            {steps.map((step, i) => {
              const state = stepState(i, activeIndex);
              return (
                <button
                  key={i}
                  ref={(el) => (nodeRefs.current[i] = el)}
                  type="button"
                  role="tab"
                  id={`wd-tab-${uid}-${i}`}
                  aria-selected={i === activeIndex}
                  aria-controls={`wd-panel-${uid}`}
                  tabIndex={i === activeIndex ? 0 : -1}
                  className={`wd-node is-${state}`}
                  style={{ height: layout.rowHeight }}
                  onClick={() => jumpTo(i)}
                  onKeyDown={(e) => handleNodeKeyDown(e, i)}
                >
                  {step.lane && <span className="wd-node-lane-tag">{step.lane}</span>}
                  <span className="wd-node-title">{step.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="wd-controls">
        <button
          type="button"
          className="wd-nav-btn"
          onClick={() => jumpTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Previous step"
        >
          <ChevronLeft size={18} />
        </button>
        <span className="wd-counter">
          {activeIndex + 1} of {steps.length}
        </span>
        <button
          type="button"
          className="wd-nav-btn"
          onClick={() => jumpTo(activeIndex + 1)}
          disabled={activeIndex === steps.length - 1}
          aria-label="Next step"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="wd-detail" role="tabpanel" id={`wd-panel-${uid}`} aria-labelledby={`wd-tab-${uid}-${activeIndex}`}>
        <div className="wd-detail-inner" key={activeIndex}>
          {activeStep.lane && <span className="wd-detail-lane">{activeStep.lane}</span>}
          <h4 className="wd-detail-title">{activeStep.title}</h4>
          <p className="wd-detail-body">{activeStep.body}</p>
        </div>
      </div>
    </div>
  );
}

function StaticStepList({ steps }) {
  return (
    <ol className="wd-static-list">
      {steps.map((step, i) => (
        <li key={i} className="wd-static-item">
          <span className="wd-static-dot">{step.n ?? i + 1}</span>
          <div className="wd-static-body">
            {step.lane && <span className="wd-static-lane">{step.lane}</span>}
            <h4 className="wd-static-title">{step.title}</h4>
            <p className="wd-static-text">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function VariantWorkflow({ lanes, variants, reduceMotion }) {
  const [active, setActive] = useState(0);

  return (
    <div className="wd-root">
      <div className="wd-tabs" role="tablist" aria-label="Workflow variants">
        {variants.map((v, i) => (
          <button
            key={v.title}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={cx('wd-tab', i === active && 'is-active')}
            onClick={() => setActive(i)}
          >
            {v.title}
          </button>
        ))}
      </div>
      {reduceMotion ? (
        <StaticStepList steps={variants[active].steps} key={active} />
      ) : (
        <StepFlow steps={variants[active].steps} lanes={lanes} key={active} />
      )}
    </div>
  );
}

function ComparisonTrack({ kind, track, revealed, reduceMotion, delay = 0 }) {
  const N = track.steps.length;
  const xs = track.steps.map((_, i) => (N > 1 ? (i / (N - 1)) * 100 : 50));
  const minWidth = Math.max(N * 118, 320);

  return (
    <div className={`wd-ctrack wd-ctrack-${kind}`}>
      <div className="wd-ctrack-head">
        <span className="wd-ctrack-label">{track.label}</span>
        <span className="wd-ctrack-duration">{track.duration}</span>
      </div>
      <div className="wd-ctrack-scroll">
        <div className="wd-ctrack-line-wrap" style={{ minWidth }}>
          <svg className="wd-lines" viewBox="0 0 100 1" preserveAspectRatio="none" aria-hidden="true">
            <line x1="0" y1="0.5" x2="100" y2="0.5" className="wd-line-track" vectorEffect="non-scaling-stroke" />
            <line
              x1="0"
              y1="0.5"
              x2="100"
              y2="0.5"
              className={cx('wd-line-draw', revealed && 'is-drawn')}
              vectorEffect="non-scaling-stroke"
              style={{
                strokeDasharray: 100,
                strokeDashoffset: revealed ? 0 : 100,
                transitionDelay: reduceMotion ? '0ms' : `${delay}ms`,
              }}
            />
          </svg>
          <div className="wd-ctrack-nodes">
            {track.steps.map((step, i) => (
              <div
                key={i}
                className={cx('wd-cnode', revealed && 'is-revealed')}
                style={{ left: `${xs[i]}%`, transitionDelay: reduceMotion ? '0ms' : `${delay + i * 90}ms` }}
              >
                <span className="wd-cnode-dot">{i + 1}</span>
                <span className="wd-cnode-title">{step.title}</span>
                {step.detail && <span className="wd-cnode-detail">{step.detail}</span>}
                {step.cost && <span className="wd-cnode-cost">{step.cost}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ComparisonDiagram({ comparison, reduceMotion }) {
  const rootRef = useRef(null);
  const [revealed, setRevealed] = useState(reduceMotion);

  useEffect(() => {
    if (reduceMotion) {
      setRevealed(true);
      return undefined;
    }
    const el = rootRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <div className="wd-comparison" ref={rootRef}>
      <ComparisonTrack kind="before" track={comparison.before} revealed={revealed} reduceMotion={reduceMotion} delay={0} />
      <ComparisonTrack
        kind="after"
        track={comparison.after}
        revealed={revealed}
        reduceMotion={reduceMotion}
        delay={reduceMotion ? 0 : 450}
      />
    </div>
  );
}

export default function WorkflowDiagram({ workflow }) {
  const reduceMotion = usePrefersReducedMotion();

  if (!workflow) return null;

  if (workflow.comparison) {
    return <ComparisonDiagram comparison={workflow.comparison} reduceMotion={reduceMotion} />;
  }

  if (workflow.variants && workflow.variants.length > 0) {
    return <VariantWorkflow lanes={workflow.lanes} variants={workflow.variants} reduceMotion={reduceMotion} />;
  }

  return (
    <div className="wd-root">
      {reduceMotion ? (
        <StaticStepList steps={workflow.steps} />
      ) : (
        <StepFlow steps={workflow.steps} lanes={workflow.lanes} />
      )}
    </div>
  );
}
