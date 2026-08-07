import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Download, FileText, Lock, Users, Shield, ChevronDown } from 'lucide-react';
import PageHero from './ui/PageHero';
import SignTimeLogo from './SignTimeLogo';
import SignaturePad from './SignaturePad';

export default function Hero({ onOpenDemo }) {
  const [activeStep, setActiveStep] = useState(1);
  const [fieldAdded, setFieldAdded] = useState(false);
  const [heroSigned, setHeroSigned] = useState(false);
  const signatureRef = useRef(null);

  // Subtle depth parallax on the signature backdrop, tied directly to scroll — not decorative/looping.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (signatureRef.current) {
          const offset = Math.min(window.scrollY * 0.12, 90);
          signatureRef.current.style.transform = `translateX(-50%) translateY(${offset}px)`;
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleHeroLineAnimationEnd = (e) => {
    if (e.animationName === 'heroLineReveal') {
      e.currentTarget.classList.add('is-settled');
    }
  };

  return (
    <PageHero size="full">

      {/* Professional subtle background watermark backdrop */}
      <svg
        ref={signatureRef}
        className="hero-signature-backdrop"
        viewBox="0 0 1000 260"
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '120px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(1500px, 170vw)',
          height: 'auto',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
        <text
          className="hero-signature-path"
          x="500"
          y="170"
          textAnchor="middle"
          fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif"
          fontSize="145"
          fontWeight="800"
          letterSpacing="22px"
          fill="none"
          stroke="var(--text-inverse)"
          strokeWidth="1.8"
          style={{ opacity: 0.14 }}
        >
          SIGNTIME
        </text>
      </svg>

      {/* Hero Copy */}
      <div style={{ maxWidth: 'var(--pagehero-copy-max-width)', margin: '0 auto', padding: '2rem 1.5rem 0', textAlign: 'center', position: 'relative', zIndex: 1 }}>

        <h1
          style={{
            fontFamily: 'var(--pagehero-h1-font)',
            fontSize: 'var(--pagehero-h1-size)',
            lineHeight: 'var(--pagehero-h1-line-height)',
            fontWeight: 'var(--pagehero-h1-weight)',
            color: 'var(--text-inverse)',
            margin: '0 auto 1rem',
            letterSpacing: 'var(--pagehero-h1-tracking)',
            maxWidth: 'var(--pagehero-h1-max-width)',
            textWrap: 'balance'
          }}
        >
          <span className="hero-line-mask">
            <span className="hero-line-inner line-1" onAnimationEnd={handleHeroLineAnimationEnd}>E-Signatures and Workflow Automation for</span>
          </span>
          <span className="hero-line-mask">
            <span className="hero-line-inner line-2 hero-accent-italic" onAnimationEnd={handleHeroLineAnimationEnd}>Digital Contracts</span>
          </span>
        </h1>

        <p
          className="hero-subhead"
          style={{
            fontSize: 'var(--pagehero-subhead-size)',
            lineHeight: 'var(--pagehero-subhead-line-height)',
            color: 'rgba(237, 241, 247, 0.85)',
            margin: '0 auto 2.8rem',
            maxWidth: 'var(--pagehero-subhead-max-width)'
          }}
        >
          <strong>Unlimited users, no per-seat pricing.</strong> Your whole team can send, sign, and close agreements in minutes — without paying for another seat.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <a
            href="https://app.signtime.com/register?chosen_plan=Otameshi"
            className={`btn hero-cta-primary hero-btn-primary${heroSigned ? ' hero-btn-pulse' : ''}`}
            style={{ padding: '16px 32px', fontSize: '15px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            Start Free Today <ArrowRight size={18} className="hero-cta-arrow" />
          </a>
          <a
            href="https://support.signtime.com/hc/en-us/requests/new"
            target="_blank"
            rel="noreferrer"
            className="btn hero-cta-secondary hero-btn-secondary"
            style={{ padding: '16px 32px', fontSize: '15px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            Contact Us
          </a>
        </div>

        <div className="hero-cta-secondary" style={{ fontSize: '13px', color: 'var(--text-inverse-muted)', marginBottom: '3rem' }}>
          No credit card required · Cancel anytime
        </div>

        {/* Interactive Signature Pad */}
        <SignaturePad onSignChange={setHeroSigned} />
      </div>

      {/* Interactive App Mockup Showcase */}
      <div id="hero-mockup-showcase" className="hero-mockup-wrapper" style={{ maxWidth: '1180px', margin: '0 auto', padding: '28px 1.5rem 0', position: 'relative' }}>

        <div className="hero-trust-pill">
          <Lock size={14} /> Secure &amp; Legally Binding · ESIGN &amp; UETA Compliant · AES-256 Encrypted
        </div>

        <div className="hero-product-card">

          <div
            className="hover-card"
            style={{
              position: 'relative',
              zIndex: 1,
              background: '#fff',
              border: '1px solid var(--line)',
              borderRadius: '16px',
              boxShadow: 'var(--shadow-lg)',
              overflow: 'hidden'
            }}
          >
          {/* Header Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 24px',
              borderBottom: '1px solid var(--line)',
              background: '#FAFBFD'
            }}
          >
            <div>
              <SignTimeLogo textColor="var(--navy)" iconColor="var(--coral)" />
            </div>

            <div style={{ display: 'flex', gap: '22px', fontSize: '13px', color: 'var(--slate)', fontWeight: 600 }}>
              <span style={{ color: 'var(--navy)' }}>Documents</span>
              <span>Templates</span>
              <span>Import</span>
              <span>Groups</span>
            </div>
          </div>

          {/* Workflow Step Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              padding: '12px 24px',
              background: 'var(--sky)',
              fontSize: '13px',
              color: 'var(--slate)',
              borderBottom: '1px solid var(--line)'
            }}
          >
            <span
              onClick={() => setActiveStep(1)}
              style={{
                color: activeStep === 1 ? 'var(--navy)' : 'var(--slate)',
                fontWeight: activeStep === 1 ? 700 : 500,
                cursor: 'pointer'
              }}
            >
              ① Document Setup
            </span>
            <span
              onClick={() => setActiveStep(2)}
              style={{
                color: activeStep === 2 ? 'var(--navy)' : 'var(--slate)',
                fontWeight: activeStep === 2 ? 700 : 500,
                cursor: 'pointer'
              }}
            >
              ② Add Fields
            </span>
            <span
              onClick={() => setActiveStep(3)}
              style={{
                color: activeStep === 3 ? 'var(--navy)' : 'var(--slate)',
                fontWeight: activeStep === 3 ? 700 : 500,
                cursor: 'pointer'
              }}
            >
              ③ Preview & Send
            </span>
          </div>

          {/* Canvas Workspace */}
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ width: '48px', background: '#F7F8FA', borderRight: '1px solid var(--line)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '20px 0' }}>
              <div style={{ width: '18px', height: '18px', background: 'var(--skyline)', borderRadius: '4px' }}></div>
              <div style={{ width: '18px', height: '18px', background: 'var(--skyline)', borderRadius: '4px' }}></div>
              <div style={{ width: '18px', height: '18px', background: 'var(--skyline)', borderRadius: '4px' }}></div>
            </div>

            <div style={{ flex: 1, padding: '28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
              <div>
                <div style={{ background: 'var(--navy)', color: '#fff', fontSize: '13px', fontWeight: 700, padding: '10px 16px', borderRadius: '8px 8px 0 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>Add / Edit Fields</span>
                  <span style={{ fontSize: '11px', color: '#9BAAC7' }}>Interactive Demo</span>
                </div>

                <div style={{ border: '1px solid var(--line)', borderTop: 'none', borderRadius: '0 0 8px 8px', padding: '20px', background: '#fff' }}>
                  <div style={{ height: '8px', background: '#EEF1F5', borderRadius: '4px', marginBottom: '12px', width: '90%' }}></div>
                  <div style={{ height: '8px', background: '#EEF1F5', borderRadius: '4px', marginBottom: '22px', width: '70%' }}></div>
                  <div style={{ height: '8px', background: '#EEF1F5', borderRadius: '4px', marginBottom: '24px', width: '85%' }}></div>

                  <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', alignItems: 'center' }}>
                    <div style={{ fontSize: '12px', color: 'var(--slate)', width: '50px', fontWeight: 600 }}>Date</div>
                    <div style={{ flex: 1, height: '28px', background: 'var(--sky)', borderRadius: '6px', border: '1px border-glass', padding: '0 10px', display: 'flex', alignItems: 'center', fontSize: '11px', color: 'var(--navy)' }}>
                      2026-07-23 (Auto-stamped)
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <div style={{ fontSize: '12px', color: 'var(--slate)', width: '50px', fontWeight: 600 }}>Name</div>
                    <div
                      onClick={() => setFieldAdded(!fieldAdded)}
                      style={{
                        flex: 1,
                        height: '28px',
                        background: fieldAdded ? 'rgba(16, 185, 129, 0.15)' : 'var(--sky)',
                        border: `1px solid ${fieldAdded ? 'var(--emerald)' : 'var(--skyline)'}`,
                        borderRadius: '6px',
                        padding: '0 10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '11px',
                        color: fieldAdded ? 'var(--emerald)' : 'var(--coral)',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      <span>{fieldAdded ? '✓ Field Positioned' : '+ Click to Add Signature Field'}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--navy)', marginBottom: '12px' }}>Document Details</div>
                <div style={{ fontSize: '12px', color: 'var(--slate)', marginBottom: '16px', background: '#F8FAFC', padding: '8px 12px', borderRadius: '6px' }}>
                  Name: <strong>Enterprise_Service_Agreement.pdf</strong>
                  <br />
                  128 Harborview Lane, Suite 400, Austin, TX 78701
                </div>

                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--navy)', marginBottom: '10px' }}>Recipients & Signers</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--coral)', color: '#fff', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>1</div>
                  <div style={{ fontSize: '12px', color: 'var(--slate)' }}>Jordan Mitchell — <span style={{ color: 'var(--navy)', fontWeight: 600 }}>signer@signtime.com</span></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--navy)', color: '#fff', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>2</div>
                  <div style={{ fontSize: '12px', color: 'var(--slate)' }}>Casey Reynolds — <span style={{ color: 'var(--navy)', fontWeight: 600 }}>demo@signtime.com</span></div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                  <button onClick={onOpenDemo} style={{ background: 'none', border: 'none', color: 'var(--coral)', fontSize: '12px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Download size={14} /> Download Original
                  </button>
                  <button onClick={onOpenDemo} style={{ background: 'none', border: 'none', color: 'var(--coral)', fontSize: '12px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Download size={14} /> Download Sealed PDF
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 24px', borderTop: '1px solid var(--line)', background: '#FAFBFD' }}>
            <button className="btn btn-outline-navy" style={{ padding: '8px 20px', fontSize: '13px' }}>Back</button>
            <button onClick={onOpenDemo} className="btn btn-navy" style={{ padding: '8px 24px', fontSize: '13px' }}>Next: Send Document</button>
          </div>
          </div>

        </div>
      </div>

    </PageHero>
  );
}
