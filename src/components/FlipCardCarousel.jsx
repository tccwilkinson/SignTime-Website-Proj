import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';

export default function FlipCardCarousel({ items, cardWidth = 270, cardHeight = 380 }) {
  const [openCard, setOpenCard] = useState(null);
  const trackRef = useRef(null);

  const scrollTrack = (direction) => {
    if (trackRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => scrollTrack('left')}
        aria-label="Scroll left"
        style={{
          position: 'absolute',
          top: '50%',
          left: '-20px',
          transform: 'translateY(-50%)',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: '#fff',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: 'var(--shadow-md)',
          zIndex: 10
        }}
      >
        <ChevronLeft size={22} color="var(--navy)" />
      </button>

      <button
        onClick={() => scrollTrack('right')}
        aria-label="Scroll right"
        style={{
          position: 'absolute',
          top: '50%',
          right: '-20px',
          transform: 'translateY(-50%)',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: '#fff',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: 'var(--shadow-md)',
          zIndex: 10
        }}
      >
        <ChevronRight size={22} color="var(--navy)" />
      </button>

      <div
        ref={trackRef}
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '20px',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          padding: '10px 4px 20px 4px',
          scrollbarWidth: 'none'
        }}
      >
        {items.map((card) => {
          const isOpen = openCard === card.id;

          return (
            <div
              key={card.id}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              aria-label={card.title}
              onClick={() => setOpenCard(isOpen ? null : card.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setOpenCard(isOpen ? null : card.id);
                }
                if (e.key === 'Escape' && isOpen) {
                  setOpenCard(null);
                }
              }}
              style={{
                position: 'relative',
                flex: `0 0 ${cardWidth}px`,
                height: `${cardHeight}px`,
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: isOpen ? '0 20px 40px rgba(0,0,0,0.4)' : '0 6px 20px rgba(0,0,0,0.2)'
              }}
            >
              {/* Collapsed Front Face */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  padding: '26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: card.bgCollapsed,
                  border: card.border,
                  opacity: isOpen ? 0 : 1,
                  transform: isOpen ? 'scale(1.04)' : 'scale(1)',
                  pointerEvents: isOpen ? 'none' : 'auto',
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                  zIndex: isOpen ? 1 : 2
                }}
              >
                <div>{card.icon}</div>
                <div
                  style={{
                    color: card.textColor,
                    fontSize: '16px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  {card.title}
                  <span style={{ fontSize: '20px', fontWeight: 700 }}><Plus size={18} /></span>
                </div>
              </div>

              {/* Expanded Back Face */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  padding: '26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: '#0D1730',
                  border: '1px solid var(--coral)',
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'scale(1)' : 'scale(0.96)',
                  pointerEvents: isOpen ? 'auto' : 'none',
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                  zIndex: isOpen ? 2 : 1
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ color: '#fff', fontSize: '17px', fontWeight: 700, maxWidth: '180px' }}>
                      {card.title}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenCard(null);
                      }}
                      aria-label="Close"
                      style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 0 }}
                    >
                      <X size={20} />
                    </button>
                  </div>
                  <p style={{ color: '#B7C0D6', fontSize: '13px', lineHeight: 1.6, marginTop: '16px' }}>
                    {card.desc}
                  </p>
                </div>

                {card.linkText && (
                  <div>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', marginBottom: '14px' }}></div>
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        card.onLinkClick?.();
                      }}
                      style={{ color: 'var(--coral)', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}
                    >
                      {card.linkText}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
