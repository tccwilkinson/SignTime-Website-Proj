import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ExternalLink, HelpCircle, LifeBuoy, FileText, ArrowRight, ShieldCheck, Search } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';

export default function ManualsSupport() {
  const { open } = useDemoModal();

  return (
    <div style={{ background: '#fff', color: 'var(--ink)' }}>
      {/* Top External Link Notice Banner */}
      <div
        style={{
          background: 'linear-gradient(90deg, #E0F2FE, #BAE6FD)',
          borderBottom: '1px solid #7DD3FC',
          padding: '12px 20px',
          fontSize: '14px',
          color: '#0369A1',
          fontWeight: 700,
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
        }}
      >
        <ExternalLink size={18} />
        <span>
          <strong>Help Center Notice:</strong> In production, clicking "Manuals &amp; Support" will link directly to <em>support.signtime.com</em>
        </span>
      </div>

      {/* Hero Header */}
      <section style={{ background: 'radial-gradient(circle at 50% -10%, #D4EFF7 0%, #fff 65%)', padding: '4rem 0 3rem', borderBottom: '1px solid var(--line)' }}>
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <div className="st-subpage-badge" style={{ marginBottom: '1rem' }}>
            <span className="badge-sky cute-badge-pulse">Knowledge Base &amp; Technical Support</span>
          </div>
          <h1 className="st-subpage-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Manuals &amp; Support
          </h1>
          <p className="st-subpage-subhead" style={{ fontSize: '1.15rem', color: 'var(--slate)', lineHeight: 1.6, marginBottom: '2rem' }}>
            Access comprehensive product manuals, administrator guides, API references, and 24/7 technical support services.
          </p>

          <div className="st-subpage-subhead" style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://support.signtime.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-coral hero-btn-primary"
              style={{ padding: '14px 28px', fontSize: '15px' }}
            >
              Go to support.signtime.com <ExternalLink size={16} className="hero-cta-arrow" />
            </a>
            <button onClick={open} className="btn btn-outline-navy hero-btn-secondary" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Schedule Live Support Demo
            </button>
          </div>
        </div>
      </section>

      {/* Help Categories Grid */}
      <section style={{ padding: '4.5rem 0', background: 'var(--ghost-white)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.5rem' }}>
              Documentation &amp; Support Categories
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--slate)' }}>
              Everything you need to set up, manage, and scale SignTime across your organization.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            
            {/* Category 1 */}
            <div className="hover-card cute-card-hover st-subpage-card-1" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '16px', padding: '2rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--sky)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy)', marginBottom: '1.2rem' }}>
                <BookOpen size={24} className="cute-icon-spin" />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.6rem' }}>
                User Guides &amp; Manuals
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--slate)', lineHeight: 1.5, marginBottom: '1.2rem' }}>
                Step-by-step walkthroughs for document creation, signer sequencing, template management, and mobile signing.
              </p>
              <a href="https://support.signtime.com" target="_blank" rel="noreferrer" style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--coral)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Browse User Manuals <ArrowRight size={15} />
              </a>
            </div>

            {/* Category 2 */}
            <div className="hover-card cute-card-hover st-subpage-card-2" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '16px', padding: '2rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--sky)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy)', marginBottom: '1.2rem' }}>
                <FileText size={24} className="cute-icon-spin" />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.6rem' }}>
                Developer API Docs
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--slate)', lineHeight: 1.5, marginBottom: '1.2rem' }}>
                RESTful API endpoints, webhook setup guides, SDK downloads, and authentication tokens for developers.
              </p>
              <a href="https://support.signtime.com" target="_blank" rel="noreferrer" style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--coral)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                View API Reference <ArrowRight size={15} />
              </a>
            </div>

            {/* Category 3 */}
            <div className="hover-card cute-card-hover st-subpage-card-3" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '16px', padding: '2rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--sky)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy)', marginBottom: '1.2rem' }}>
                <LifeBuoy size={24} className="cute-icon-spin" />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.6rem' }}>
                Customer Support Ticket
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--slate)', lineHeight: 1.5, marginBottom: '1.2rem' }}>
                Need technical assistance? Submit a ticket to our U.S. and Japan customer support teams.
              </p>
              <Link to="/contact" style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--coral)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Contact Support <ArrowRight size={15} />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
