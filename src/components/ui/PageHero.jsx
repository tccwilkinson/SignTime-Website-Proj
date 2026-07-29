import React from 'react';

export default function PageHero({ size = 'full', className = '', style = {}, children, ...rest }) {
  const isFull = size === 'full';

  return (
    <section
      className={`ph-root ${isFull ? 'ph-backdrop-full' : 'ph-backdrop-compact'} ${className}`.trim()}
      style={{
        position: 'relative',
        zIndex: 0,
        overflow: 'hidden',
        paddingTop: isFull ? 'var(--pagehero-top-pad)' : 'var(--pagehero-compact-top-pad)',
        paddingBottom: isFull ? undefined : 'var(--pagehero-compact-bottom-pad)',
        ...style
      }}
      {...rest}
    >
      {isFull && <div className="ph-grain" aria-hidden="true" />}

      {children}

      {isFull && <div className="ph-fade-strip" aria-hidden="true" />}

      <style>{`
        .ph-backdrop-full {
          background:
            radial-gradient(ellipse 750px 600px at 25% 28%, var(--pagehero-bloom-accent) 0%, transparent 65%),
            radial-gradient(ellipse 1150px 900px at 85% 20%, var(--pagehero-bloom-slate) 0%, transparent 70%),
            radial-gradient(ellipse 1400px 1000px at 50% 45%, transparent 40%, var(--pagehero-vignette) 100%),
            linear-gradient(160deg, var(--pagehero-surface-start) 0%, var(--pagehero-surface-end) 100%);
        }

        @media (max-width: 640px) {
          .ph-backdrop-full {
            background:
              radial-gradient(ellipse 550px 450px at 25% 22%, var(--pagehero-bloom-accent) 0%, transparent 65%),
              radial-gradient(ellipse 820px 700px at 85% 18%, var(--pagehero-bloom-slate) 0%, transparent 70%),
              radial-gradient(ellipse 900px 900px at 50% 40%, transparent 35%, var(--pagehero-vignette) 100%),
              linear-gradient(160deg, var(--pagehero-surface-start) 0%, var(--pagehero-surface-end) 100%);
          }
        }

        .ph-grain {
          position: absolute;
          inset: 0;
          opacity: var(--pagehero-grain-opacity);
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        .ph-fade-strip {
          position: relative;
          z-index: 0;
          height: var(--pagehero-fade-height);
          margin-top: -1px;
          background: linear-gradient(to bottom, var(--pagehero-fade-from), var(--pagehero-fade-to));
          pointer-events: none;
        }

        .ph-backdrop-compact {
          background: radial-gradient(circle at 50% -10%, var(--pagehero-compact-bg-start) 0%, var(--pagehero-compact-bg-end) 55%);
        }
      `}</style>
    </section>
  );
}
