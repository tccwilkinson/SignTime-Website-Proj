import { Link, useParams } from 'react';
import { ArrowLeft, ArrowRight, Clock, FileText, Construction, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';

function titleFromSlug(slug) {
  if (!slug) return 'Resource Guide & Documentation';
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export default function ResourceArticleStub() {
  const { slug } = useParams();
  const { open } = useDemoModal();
  const title = titleFromSlug(slug);

  return (
    <div style={{ background: '#fff', color: 'var(--ink)' }}>
      {/* Top Under Construction Banner */}
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
          <strong>Draft Guide Notice:</strong> Layout &amp; article design are 100% formatted. Final editorial copy for <em>"{title}"</em> is currently being prepared.
        </span>
      </div>

      <section style={{ background: 'radial-gradient(circle at 50% -10%, #DCEAFC 0%, #fff 65%)', padding: '3.5rem 0 2.5rem', borderBottom: '1px solid var(--line)' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <Link
            to="/resources"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--slate)', fontSize: '0.88rem', fontWeight: 600, textDecoration: 'none', marginBottom: '1.5rem' }}
          >
            <ArrowLeft size={14} /> Back to Resources &amp; Guides
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span className="badge-sky" style={{ fontSize: '12px' }}>Resource Guide</span>
            <span style={{ fontSize: '13px', color: 'var(--slate)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={14} /> 5 min read
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem', lineHeight: 1.2 }}>
            {title}
          </h1>

          <p style={{ fontSize: '1.1rem', color: 'var(--slate)', lineHeight: 1.6 }}>
            Comprehensive guide and operational best practices for U.S. business teams evaluating e-signature automation and contract compliance.
          </p>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '3.5rem 0 5rem' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          {/* Article Formatting Preview */}
          <div style={{ background: '#FAFBFD', border: '1px solid var(--line)', borderRadius: '12px', padding: '2rem', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--navy)', fontWeight: 700, marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FileText size={18} color="var(--coral)" /> Article Outline &amp; Structure (100% Formatted)
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--slate)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="var(--emerald)" /> Executive Summary &amp; Overview
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="var(--emerald)" /> Regulatory Compliance &amp; Audit Trail Standards
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="var(--emerald)" /> Implementation Checklist for Operations &amp; Legal
              </li>
            </ul>
          </div>

          <div style={{ textAlign: 'center', background: 'var(--navy)', color: '#fff', padding: '2.5rem 2rem', borderRadius: '16px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.8rem' }}>
              Ready to automate your team's document workflows?
            </h2>
            <p style={{ color: '#9BAAC7', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Unlimited users, flat-rate pricing, and enterprise-grade security.
            </p>
            <button onClick={open} className="btn btn-coral" style={{ padding: '14px 28px', fontSize: '14px' }}>
              Start Free Trial <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
