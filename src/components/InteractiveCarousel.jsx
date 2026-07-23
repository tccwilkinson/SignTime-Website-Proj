import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Lock, FileText, Send, Smartphone, GitPullRequest, ShieldCheck, Plus, X, ArrowRight } from 'lucide-react';

export default function InteractiveCarousel({ onOpenDemo }) {
  const [openCard, setOpenCard] = useState(null);
  const trackRef = useRef(null);

  const scrollTrack = (direction) => {
    if (trackRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const cards = [
    {
      id: '2fa',
      title: 'Two-Factor Authentication',
      bgCollapsed: '#0D1730',
      textColor: '#fff',
      border: '1px solid rgba(255,255,255,0.15)',
      icon: <Lock size={36} color="#fff" />,
      desc: 'Every signer verifies with a second factor before a document can be completed — no extra software required, no signature left unverified.',
      linkText: 'About security ›'
    },
    {
      id: 'templates',
      title: 'Templates',
      bgCollapsed: 'var(--coral)',
      textColor: '#fff',
      border: 'none',
      icon: <FileText size={36} color="#fff" />,
      desc: 'Create commonly used documents as reusable templates and request signatures in as little as one minute.',
      linkText: 'Learn about Templates ›'
    },
    {
      id: 'bulksend',
      title: 'Bulk Sending Documents',
      bgCollapsed: 'var(--sky)',
      textColor: 'var(--navy)',
      border: 'none',
      icon: <Send size={36} color="var(--navy)" />,
      desc: 'Send a document to hundreds of signers at once with a single CSV upload — no manual entry required.',
      linkText: 'Learn about Bulk Sending ›'
    },
    {
      id: 'sms',
      title: 'Signature Requests via SMS',
      bgCollapsed: '#0D1730',
      textColor: '#fff',
      border: '1px solid rgba(255,255,255,0.15)',
      icon: <Smartphone size={36} color="#fff" />,
      desc: 'Send signature requests by text instead of email — reach signers wherever they are most likely to respond.',
      linkText: 'Learn about SMS Requests ›'
    },
    {
      id: 'workflows',
      title: 'Internal Approval Workflows',
      bgCollapsed: 'var(--coral)',
      textColor: '#fff',
      border: 'none',
      icon: <GitPullRequest size={36} color="#fff" />,
      desc: 'Route a document for internal sign-off before it goes out to signers. Ensure your legal team approves every contract version automatically.',
      linkText: 'Learn about Workflows ›'
    },
    {
      id: 'guarantor',
      title: 'Guarantor Agreements',
      bgCollapsed: 'var(--sky)',
      textColor: 'var(--navy)',
      border: 'none',
      icon: <ShieldCheck size={36} color="var(--navy)" />,
      desc: 'Support complex multi-party agreements requiring co-signers, guarantors, or legal witness sign-offs.',
      linkText: 'Learn about Guarantor Feature ›'
    }
  ];

  return (
    <section id="carousel" style={{ position: 'relative', background: 'var(--navy)', padding: '64px 0 56px' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '24px', marginBottom: '36px', flexWrap: 'wrap' }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, lineHeight: 1.2, margin: 0, maxWidth: '640px' }}>
            Transforming the entire contract and signing process with SignTime
          </h2>
          
          <button
            onClick={onOpenDemo}
            style={{
              color: '#fff',
              fontSize: '15px',
              fontWeight: 700,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              whiteSpace: 'nowrap'
            }}
          >
            See All Features <ArrowRight size={16} />
          </button>
        </div>

        {/* Carousel Container with Controls */}
        <div style={{ position: 'relative' }}>
          
          {/* Scroll Left Button */}
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

          {/* Scroll Right Button */}
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

          {/* Horizontal Scroll Track */}
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
            {cards.map((card) => {
              const isOpen = openCard === card.id;

              return (
                <div
                  key={card.id}
                  onClick={() => setOpenCard(isOpen ? null : card.id)}
                  style={{
                    position: 'relative',
                    flex: '0 0 270px',
                    height: '380px',
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
                          style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 0 }}
                        >
                          <X size={20} />
                        </button>
                      </div>
                      <p style={{ color: '#B7C0D6', fontSize: '13px', lineHeight: 1.6, marginTop: '16px' }}>
                        {card.desc}
                      </p>
                    </div>

                    <div>
                      <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', marginBottom: '14px' }}></div>
                      <span onClick={onOpenDemo} style={{ color: 'var(--coral)', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}>
                        {card.linkText}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
