import React from 'react';
import { Link } from 'react-router-dom';
import { Construction, ArrowRight, ShieldCheck, ArrowLeft, FileText, CheckCircle2, Clock } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';

export default function PageStub({ title = 'Draft Page', category = 'Information' }) {
  const { open } = useDemoModal();

  return (
    <div style={{ background: '#fff', color: 'var(--ink)', minHeight: '80vh' }}>
      {/* Top Under-Construction Banner */}
      <div
        style={{
          background: 'linear-gradient(90deg, #FFF3E0, #FFE0B2)',
          borderBottom: '1px solid #FFE082',
          padding: '10px 20px',
          fontSize: '13px',
          color: '#E65100',
          fontWeight: 600,
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
        }}
      >
        <Construction size={16} />
        <span>
          <strong>Draft Page Notice:</strong> Layout &amp; structure are 100% formatted. Content for <em>{title}</em> is being finalized by our team.
        </span>
      </div>

      {/* Hero Header Section */}
      <section style={{ padding: '4.5rem 0 3.5rem', background: 'radial-gradient(circle at 50% -10%, #DCEAFC 0%, #fff 65%)', borderBottom: '1px solid var(--line)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(232, 96, 76, 0.1)', color: 'var(--coral)', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            <Clock size={14} /> Under Construction · {category}
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem', lineHeight: 1.15 }}>
            {title}
          </h1>

          <p style={{ fontSize: '1.1rem', color: 'var(--slate)', lineHeight: 1.6, maxWidth: '620px', margin: '0 auto 2rem' }}>
            We are preparing complete documentation and guides for this section. The structural design and layout are 100% complete and fully responsive.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-navy" style={{ padding: '12px 24px', fontSize: '14px' }}>
              <ArrowLeft size={16} /> Back to Homepage
            </Link>
            <button onClick={open} className="btn btn-coral" style={{ padding: '12px 24px', fontSize: '14px' }}>
              Book a 15-Min Demo <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 100% Formatted Placeholder Content Layout */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          
          <div style={{ background: '#FAFBFD', border: '1px solid var(--line)', borderRadius: '14px', padding: '2.5rem', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--navy)', fontWeight: 800, fontSize: '1.25rem', marginBottom: '1rem' }}>
              <FileText size={22} color="var(--coral)" /> Page Structure &amp; Roadmap
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--slate)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              This page has been automatically routed and formatted within SignTime's design system. Full copy, API specifications, and customer documentation are currently undergoing final editorial review.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '8px', padding: '16px' }}>
                <div style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '14px', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="var(--emerald)" /> Responsive Grid
                </div>
                <div style={{ fontSize: '12px', color: 'var(--slate)' }}>100% formatted &amp; mobile optimized</div>
              </div>

              <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '8px', padding: '16px' }}>
                <div style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '14px', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="var(--emerald)" /> Design System
                </div>
                <div style={{ fontSize: '12px', color: 'var(--slate)' }}>Matches all main pages</div>
              </div>

              <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '8px', padding: '16px' }}>
                <div style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '14px', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={16} color="var(--coral)" /> Legal Verification
                </div>
                <div style={{ fontSize: '12px', color: 'var(--slate)' }}>Compliance check in progress</div>
              </div>
            </div>
          </div>

          {/* Quick Nav Suggestions */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--navy)', fontWeight: 700, marginBottom: '1rem' }}>
              Looking for something specific?
            </h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/features" className="btn btn-outline-navy" style={{ padding: '8px 18px', fontSize: '13px' }}>Explore Features</Link>
              <Link to="/pricing" className="btn btn-outline-navy" style={{ padding: '8px 18px', fontSize: '13px' }}>View Pricing</Link>
              <Link to="/security" className="btn btn-outline-navy" style={{ padding: '8px 18px', fontSize: '13px' }}>Security &amp; Compliance</Link>
              <a href="https://support.signtime.com/hc/en-us/requests/new" target="_blank" rel="noreferrer" className="btn btn-outline-navy" style={{ padding: '8px 18px', fontSize: '13px', textDecoration: 'none' }}>Contact Support</a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
