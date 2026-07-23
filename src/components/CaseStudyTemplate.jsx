import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';

export default function CaseStudyTemplate({ industry, title, subhead, metrics, quote, sections, relatedNote }) {
  const { open } = useDemoModal();

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'radial-gradient(circle at 50% -10%, #DCEAFC 0%, #fff 55%)', padding: '3.5rem 0 3rem' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <Link
            to="/customers"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--slate)', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', marginBottom: '1.5rem' }}
          >
            <ArrowLeft size={14} /> All Customer Stories
          </Link>
          <div className="badge-sky" style={{ marginBottom: '1.2rem' }}>{industry}</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            {title}
          </h1>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--slate)' }}>{subhead}</p>
        </div>
      </section>

      {/* Metrics strip */}
      <section style={{ background: '#fff', padding: '0 0 3rem' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${metrics.length}, 1fr)`, gap: '20px' }}>
            {metrics.map((m) => (
              <div key={m.label} style={{ border: '1px solid var(--line)', borderRadius: '14px', padding: '20px', textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 800, color: 'var(--coral)', marginBottom: '4px' }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--slate)', lineHeight: 1.4 }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote */}
      {quote && (
        <section style={{ background: 'var(--navy)', padding: '3.5rem 0' }}>
          <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
            <Quote size={28} color="var(--coral)" style={{ marginBottom: '1.2rem' }} />
            <p style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 600, lineHeight: 1.5, marginBottom: '1.2rem' }}>
              “{quote.text}”
            </p>
            <div style={{ color: '#9BAAC7', fontSize: '0.9rem', fontWeight: 600 }}>{quote.attribution}</div>
          </div>
        </section>
      )}

      {/* Body sections */}
      <section style={{ background: '#fff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          {sections.map((s) => (
            <div key={s.heading} style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.8rem' }}>{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--slate)', marginBottom: '1rem' }}>
                  {p}
                </p>
              ))}
            </div>
          ))}

          {relatedNote && (
            <div
              className="hover-card"
              style={{ background: 'var(--sky)', border: '1px solid var(--skyline)', borderRadius: '14px', padding: '24px', marginTop: '2rem' }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.6rem' }}>
                Also worth noting
              </div>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--ink)', margin: 0 }}>{relatedNote}</p>
            </div>
          )}
        </div>
      </section>

      {/* Closing CTA */}
      <section style={{ background: 'var(--navy)', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Unlimited users. One flat price. However many people need it.
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={open} className="btn btn-coral" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Start Free Trial — No Credit Card Required <ArrowRight size={18} />
            </button>
            <Link to="/contact" className="btn btn-outline-navy" style={{ padding: '14px 28px', fontSize: '15px', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
              Book a 15-Minute Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
