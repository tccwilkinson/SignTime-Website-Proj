import React from 'react';
import './Section.css';

const VARIANTS = {
  light: { bg: 'var(--section-bg-light)', fg: 'var(--section-fg-light)', fgMuted: 'var(--section-fg-muted-light)', border: 'var(--section-border-light)' },
  panel: { bg: 'var(--section-bg-panel)', fg: 'var(--section-fg-dark)', fgMuted: 'var(--section-fg-muted-dark)', border: 'var(--section-border-panel)' },
  deep: { bg: 'var(--section-bg-deep)', fg: 'var(--section-fg-dark)', fgMuted: 'var(--section-fg-muted-dark)', border: 'var(--section-border-deep)' }
};

export default function Section({
  variant = 'light',
  as: Tag = 'section',
  id,
  className = '',
  style = {},
  children,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.light;

  return (
    <Tag
      id={id}
      className={`ui-section ${className}`.trim()}
      style={{
        background: v.bg,
        color: v.fg,
        '--sec-fg': v.fg,
        '--sec-fg-muted': v.fgMuted,
        '--sec-border': v.border,
        ...style
      }}
      {...rest}
    >
      <div className="ui-section-inner">{children}</div>
    </Tag>
  );
}
