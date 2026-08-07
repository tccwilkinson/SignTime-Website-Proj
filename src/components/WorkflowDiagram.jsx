import { useEffect, useId, useMemo, useRef, useState } from 'react';
import {
  ChevronLeft, ChevronRight, RotateCcw, Building2, User, Zap,
  Send, CheckCircle2, PenTool, Upload, Archive, Bell, Smartphone,
  Printer, Package, Stamp, Share2, Route, FileText,
} from 'lucide-react';
import './WorkflowDiagram.css';

const ROW_H_DESKTOP = 96;
const ROW_H_MOBILE = 84;
const AUTO_ADVANCE_MS = 2500;
const DESKTOP_BREAKPOINT = 900;

const ACTOR_META = {
  internal: { Icon: Building2, label: 'Internal approval step' },
  external: { Icon: User, label: 'External signer step' },
  system: { Icon: Zap, label: 'Automated step' },
};

// Ordered title/body keyword rules, checked first (most specific to a step's
// own action), then a lane-based fallback, then a generic default. Icons are
// monochrome and inherit the card's current state color (currentColor) — no
// separate color system, no field added to workflows.js.
const TITLE_ICON_RULES = [
  [/sign-off/i, CheckCircle2],
  [/sign\b|signed|signing|countersign|co-signer/i, PenTool],
  [/approv|review|reject/i, CheckCircle2],
  [/route|routing/i, Route],
  [/deleg/i, Share2],
  [/upload|import|csv|roster/i, Upload],
  [/bulk|merge/i, Archive],
  [/store|archiv|retain|file and store/i, Archive],
  [/track|remind|notify|status/i, Bell],
  [/sms|secure link|phone/i, Smartphone],
  [/print/i, Printer],
  [/mail|courier|package|assemble/i, Package],
  [/notar/i, Stamp],
  [/distribute|forward|network/i, Share2],
  [/send|sent\b/i, Send],
];

const LANE_ICON_RULES = [
  [/signtime|salesforce/i, Zap],
  [/qa department|university|your company|^hr$/i, Building2],
];

function getStepIcon(step) {
  const haystack = `${step.title || ''} ${step.body || ''}`;
  for (const [pattern, Icon] of TITLE_ICON_RULES) {
    if (pattern.test(haystack)) return Icon;
  }
  if (step.lane) {
    for (const [pattern, Icon] of LANE_ICON_RULES) {
      if (pattern.test(step.lane)) return Icon;
    }
    return User;
  }
  return FileText;
}

function cx(...parts) {
  return parts.filter(Boolean).join(' ');
}

function ActorBadge({ actor }) {
  const meta = ACTOR_META[actor];
  if (!meta) return null;
  const { Icon, label } = meta;
  return (
    <span className="wd-actor-badge" aria-label={label} title={label}>
      <Icon size={11} />
    </span>
  );
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

// Layout is computed analytically (no DOM measurement). Horizontal mode:
// each step gets an equal-width column (x expressed as a column-center
// percentage, never a track-edge point) and a lane row (y in real px, rows
// are a fixed height). Connector segments are derived from the same two
// values, kept in ONE axis's unit each (never mixed), which is what makes
// the fill-state math correct — see WorkflowDiagram.css / ConnectorLayer.
function computeLayout(steps, lanes, isDesktop) {
  const N = steps.length;
  const orientation = isDesktop ? 'horizontal' : 'vertical';
  const rowHeight = orientation === 'horizontal' ? ROW_H_DESKTOP : ROW_H_MOBILE;
  const trackHeight = rowHeight;

  const nodes = steps.map((step, i) => {
    if (orientation === 'horizontal') {
      const colCenter = ((i + 0.5) / N) * 100;
      return { x: colCenter, y: rowHeight / 2, row: 0, col: i };
    }
    return { x: 50, y: i * rowHeight + rowHeight / 2, row: i, col: 0 };
  });

  const segments =
    orientation === 'horizontal'
      ? nodes.slice(0, -1).map((p, i) => {
          const p2 = nodes[i + 1];
          return { from: i, bars: [{ kind: 'h', y: p.y, x1: p.x, x2: p2.x }] };
        })
      : [];

  const laneRuns = [];
  if (orientation === 'vertical' && Array.isArray(lanes)) {
    let runStart = 0;
    for (let i = 1; i <= N; i += 1) {
      if (i === N || steps[i].lane !== steps[runStart].lane) {
        laneRuns.push({ lane: steps[runStart].lane, startIndex: runStart, count: i - runStart });
        runStart = i;
      }
    }
  }

  return { orientation, hasLanes: false, laneCount: 1, rowHeight, trackHeight, nodes, segments, laneRuns };
}

function stepState(i, activeIndex) {
  if (i === activeIndex) return 'active';
  if (i < activeIndex) return 'complete';
  return 'future';
}

function ConnectorLayer({ layout, activeIndex }) {
  return (
    <div className="wd-conn-layer" aria-hidden="true">
      {layout.segments.map((seg) => {
        const drawn = activeIndex > seg.from;
        return seg.bars.map((bar, bi) => {
          const delay = `${bi * 110}ms`;
          if (bar.kind === 'h') {
            const left = Math.min(bar.x1, bar.x2);
            const width = Math.abs(bar.x2 - bar.x1);
            const origin = bar.x2 >= bar.x1 ? 'left' : 'right';
            return (
              <div
                key={`${seg.from}-${bi}`}
                className="wd-conn wd-conn-h"
                style={{ top: bar.y, left: `${left}%`, width: `${width}%` }}
              >
                <div className="wd-conn-track" />
                <div
                  className={cx('wd-conn-fill', drawn && 'is-drawn')}
                  style={{ transformOrigin: origin, transitionDelay: delay }}
                />
              </div>
            );
          }
          const top = Math.min(bar.y1, bar.y2);
          const height = Math.abs(bar.y2 - bar.y1);
          const origin = bar.y2 >= bar.y1 ? 'top' : 'bottom';
          return (
            <div
              key={`${seg.from}-${bi}`}
              className="wd-conn wd-conn-v"
              style={{ top, left: `${bar.x}%`, height }}
            >
              <div className="wd-conn-track" />
              <div
                className={cx('wd-conn-fill', drawn && 'is-drawn')}
                style={{ transformOrigin: origin, transitionDelay: delay }}
              />
            </div>
          );
        });
      })}
    </div>
  );
}

function StepCard({ step, i, state, uid, nodeRef, onClick, onKeyDown, orientation }) {
  const Icon = getStepIcon(step);
  return (
    <button
      ref={nodeRef}
      type="button"
      role="tab"
      id={`wd-tab-${uid}-${i}`}
      aria-selected={state === 'active'}
      aria-controls={`wd-panel-${uid}`}
      tabIndex={state === 'active' ? 0 : -1}
      className={cx('wd-card', `is-${state}`, orientation === 'vertical' && 'is-vertical')}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      <span className="wd-card-num-wrap">
        <span className="wd-card-num">{step.n ?? i + 1}</span>
        <ActorBadge actor={step.actor} />
      </span>
      <Icon className="wd-card-icon" size={16} aria-hidden="true" />
      <span className="wd-card-body">
        {step.lane && (
          <span
            className="wd-card-lane"
            style={{
              fontSize: '0.68rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              color: state === 'active' ? '#fff' : 'var(--coral)',
              marginBottom: '2px',
              display: 'block',
              lineHeight: 1.1,
            }}
          >
            {step.lane}
          </span>
        )}
        <span className="wd-card-label">{step.title}</span>
      </span>
    </button>
  );
}

function StepFlow({ steps, lanes, reduceMotion }) {
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
    if (reduceMotion || !hasEntered || isPaused) return undefined;
    const timer = setTimeout(() => {
      setActiveIndex((i) => (i + 1) % steps.length);
    }, AUTO_ADVANCE_MS);
    return () => clearTimeout(timer);
  }, [reduceMotion, hasEntered, isPaused, activeIndex, steps.length]);

  const jumpTo = (index) => {
    const clamped = Math.max(0, Math.min(steps.length - 1, index));
    setIsPaused(true);
    setActiveIndex(clamped);
  };

  const replay = () => {
    setActiveIndex(0);
    setIsPaused(false);
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
    <div className={cx('wd-diagram', reduceMotion && 'reduce-motion')} ref={rootRef}>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'var(--navy)',
          color: '#fff',
          padding: '6px 16px',
          borderRadius: '20px',
          fontSize: '0.78rem',
          fontWeight: 700,
          marginBottom: '1rem',
          boxShadow: 'var(--shadow-subtle)',
        }}
      >
        <Zap size={14} color="var(--coral)" />
        All steps execute seamlessly through <strong>SignTime</strong> e-signatures &amp; workflow automation
      </div>
      {layout.orientation === 'horizontal' ? (
        <div className="wd-lanes-row horizontal">
          {layout.hasLanes && (
            <div className="wd-lane-labels">
              {lanes.map((l, li) => (
                <div
                  key={l}
                  className={cx('wd-lane-label', li % 2 === 1 && 'is-alt')}
                  style={{ height: layout.rowHeight }}
                >
                  {l}
                </div>
              ))}
            </div>
          )}
          <div className="wd-track" style={{ height: layout.trackHeight }}>
            {layout.hasLanes &&
              Array.from({ length: layout.laneCount }).map((_, li) => (
                <div
                  key={li}
                  className={cx('wd-band', li % 2 === 1 && 'is-alt')}
                  style={{ top: li * layout.rowHeight, height: layout.rowHeight }}
                />
              ))}
            <ConnectorLayer layout={layout} activeIndex={activeIndex} />
            <div
              className="wd-grid"
              role="tablist"
              aria-label="Workflow steps"
              style={{
                gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
                gridTemplateRows: `repeat(${layout.laneCount}, ${layout.rowHeight}px)`,
              }}
            >
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="wd-card-cell"
                  style={{ gridColumn: i + 1, gridRow: layout.nodes[i].row + 1 }}
                >
                  <StepCard
                    step={step}
                    i={i}
                    state={stepState(i, activeIndex)}
                    uid={uid}
                    orientation="horizontal"
                    nodeRef={(el) => (nodeRefs.current[i] = el)}
                    onClick={() => jumpTo(i)}
                    onKeyDown={(e) => handleNodeKeyDown(e, i)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="wd-lanes-row vertical">
          <div className="wd-vertical-track" style={{ height: layout.trackHeight }}>
            {layout.laneRuns.map((run, ri) => (
              <div
                key={run.lane + run.startIndex}
                className={cx('wd-band', 'is-vertical', ri % 2 === 1 && 'is-alt')}
                style={{ top: run.startIndex * layout.rowHeight, height: run.count * layout.rowHeight }}
              />
            ))}
            <div className="wd-vconn" style={{ top: layout.rowHeight / 2, height: layout.trackHeight - layout.rowHeight }}>
              <div className="wd-conn-track" />
              <div
                className={cx('wd-conn-fill', 'is-drawn')}
                style={{
                  transformOrigin: 'top',
                  transform: `scaleY(${steps.length > 1 ? activeIndex / (steps.length - 1) : 0})`,
                }}
              />
            </div>
            <div className="wd-vertical-steps" role="tablist" aria-label="Workflow steps">
              {steps.map((step, i) => (
                <div key={i} className="wd-vertical-step" style={{ height: layout.rowHeight }}>
                  <StepCard
                    step={step}
                    i={i}
                    state={stepState(i, activeIndex)}
                    uid={uid}
                    orientation="vertical"
                    nodeRef={(el) => (nodeRefs.current[i] = el)}
                    onClick={() => jumpTo(i)}
                    onKeyDown={(e) => handleNodeKeyDown(e, i)}
                  />
                </div>
              ))}
            </div>
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
        <button type="button" className="wd-nav-btn" onClick={replay} aria-label="Replay">
          <RotateCcw size={16} />
        </button>
      </div>

      <div className="wd-detail" role="tabpanel" id={`wd-panel-${uid}`} aria-labelledby={`wd-tab-${uid}-${activeIndex}`}>
        <div className="wd-detail-inner" key={activeIndex}>
          {activeStep.lane && <span className="wd-detail-lane">{activeStep.lane}</span>}
          {ACTOR_META[activeStep.actor] && (
            <span className="wd-detail-actor">{ACTOR_META[activeStep.actor].label}</span>
          )}
          <h4 className="wd-detail-title">{activeStep.title}</h4>
          <p className="wd-detail-body">{activeStep.body}</p>
        </div>
      </div>
    </div>
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
      <StepFlow steps={variants[active].steps} lanes={lanes} reduceMotion={reduceMotion} key={active} />
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
      <StepFlow steps={workflow.steps} lanes={workflow.lanes} reduceMotion={reduceMotion} />
    </div>
  );
}
