export default function ComplianceGrid({ items, marquee = true, textColor = 'var(--text-inverse)' }) {
  const displayItems = marquee ? [...items, ...items] : items;

  return (
    <div className={marquee ? 'marquee-mask' : undefined} style={marquee ? { margin: '0 -1.5rem' } : undefined}>
      <div
        className={marquee ? 'marquee-track' : undefined}
        style={{
          gap: '44px',
          ...(marquee
            ? { animationDuration: '28s' }
            : { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }),
        }}
      >
        {displayItems.map((item, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
              width: '140px',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: '88px',
                height: '88px',
                borderRadius: '50%',
                background: item.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              {item.icon}
            </div>
            <div style={{ fontSize: '12.5px', fontWeight: 700, color: textColor, textAlign: 'center', lineHeight: 1.3 }}>
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
