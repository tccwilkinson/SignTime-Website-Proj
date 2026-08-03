import React from 'react';

export function SignTimeIcon({ size = 38, color = '#ffffff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      {/* Outer circle with gap at top right */}
      <path
        d="M 44 14 A 23 23 0 1 0 54 35"
        stroke={color}
        strokeWidth="4.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Fountain Pen Nib */}
      <path
        d="M 53 7 L 57 11 L 34 34 L 21 39 L 26 26 Z"
        fill={color}
      />

      {/* Breather hole in nib */}
      <circle cx="28.5" cy="31.5" r="2" fill="var(--navy, #143250)" />

      {/* Nib slit line */}
      <path d="M 28.5 31.5 L 21 39" stroke="var(--navy, #143250)" strokeWidth="1.4" strokeLinecap="round" />

      {/* Signature underline stroke */}
      <path
        d="M 18 40.5 L 45 40.5"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function SignTimeLogo({ size = 'medium', textColor = '#ffffff', iconColor = '#ffffff', subtitleColor }) {
  const isLarge = size === 'large';
  const iconSize = isLarge ? 48 : 38;
  const titleSize = isLarge ? '26px' : '21px';
  const subtitleSize = isLarge ? '13px' : '11px';

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', userSelect: 'none' }}>
      <SignTimeIcon size={iconSize} color={iconColor} />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            fontSize: titleSize,
            fontWeight: 800,
            color: textColor,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            fontFamily: 'var(--font-heading, "Plus Jakarta Sans", system-ui, sans-serif)',
          }}
        >
          SignTime
        </div>
        <div
          style={{
            fontSize: subtitleSize,
            fontWeight: 400,
            color: subtitleColor ?? (textColor === '#ffffff' ? 'rgba(255, 255, 255, 0.85)' : 'var(--slate)'),
            lineHeight: 1.2,
            letterSpacing: '0.01em',
            marginTop: '2px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          Intuitive e-signatures
        </div>
      </div>
    </div>
  );
}
