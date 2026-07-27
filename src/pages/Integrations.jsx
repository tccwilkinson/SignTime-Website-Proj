import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Code2, Webhook, Send, Building2 } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';

const integrations = [
  {
    icon: <Cloud size={32} color="#fff" />,
    bg: 'var(--navy)',
    title: 'Salesforce',
    desc: 'Request signatures and track document status directly from a Salesforce record — no separate login, no manual status updates. Built for teams that already run their pipeline through Salesforce.',
  },
  {
    icon: <Code2 size={32} color="#fff" />,
    bg: 'var(--coral)',
    title: 'Web API',
    desc: 'A full REST API to trigger signature requests, check document status, and pull completed documents programmatically — embed SignTime directly into your own product or internal tools.',
  },
  {
    icon: <Webhook size={32} color="#fff" />,
    bg: 'var(--navy)',
    title: 'Webhooks',
    desc: 'Get notified the moment a document is sent, viewed, or completed, so your own systems stay in sync without polling for status.',
  },
];

const proofPoints = [
  {
    title: 'Embedded directly into another product',
    body: 'One partner built its own document workflow product on top of SignTime\'s API — proof that SignTime\'s platform is flexible enough to run underneath somebody else\'s interface, not just SignTime\'s own.',
  },
  {
    title: 'SMS delivery, connected to an order management system',
    body: "Another integration paired SignTime's SMS signature requests with a company's existing order management system, triggering signature requests automatically as orders moved through the pipeline — no manual document handling required.",
  },
];

export default function Integrations() {
  const { open } = useDemoModal();

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'radial-gradient(circle at 50% -10%, #DCEAFC 0%, #fff 55%)', padding: '4.5rem 0 3rem' }}>
        <div className="container" style={{ maxWidth: '760px', textAlign: 'center' }}>
          <div className="st-subpage-badge" style={{ marginBottom: '1.5rem' }}>
            <span className="badge-sky cute-badge-pulse">Integrations &amp; API</span>
          </div>
          <h1 className="st-subpage-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
            Connect SignTime to the Tools You Already Run On
          </h1>
          <p className="st-subpage-subhead" style={{ fontSize: '1.15rem', lineHeight: 1.6, color: 'var(--slate)', marginBottom: '2rem' }}>
            Native Salesforce integration, a full Web API, and webhooks — for unlimited users, at one flat price. No middleware required.
          </p>
          <div className="st-subpage-subhead" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={open} className="btn btn-coral hero-btn-primary" style={{ padding: '16px 32px', fontSize: '15px' }}>
              Start Free Trial — No Credit Card Required <ArrowRight size={18} className="hero-cta-arrow" />
            </button>
            <Link to="/contact" className="btn btn-outline-navy hero-btn-secondary" style={{ padding: '16px 32px', fontSize: '15px' }}>
              Book a 15-Minute Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Integration cards */}
      <section style={{ background: '#fff', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {integrations.map((item, idx) => (
              <div
                key={item.title}
                className={`hover-card cute-card-hover st-subpage-card-${(idx % 3) + 1}`}
                style={{ border: '1px solid var(--line)', borderRadius: '14px', padding: '32px', background: '#fff' }}
              >
                <div
                  className="cute-icon-spin"
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    background: item.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--slate)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flat-price reinforcement */}
      <section style={{ background: 'var(--navy)', padding: '1.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: '#fff', fontSize: '1rem', fontWeight: 600, margin: 0 }}>
            Every integration is included for <span style={{ color: 'var(--coral)' }}>unlimited users</span> at one flat price — the API isn't a paid add-on.
          </p>
        </div>
      </section>

      {/* Proof points */}
      <section style={{ background: 'var(--sky)', padding: '4.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem' }}>
              Built to embed, not just to bolt on
            </h2>
            <p style={{ color: 'var(--slate)', fontSize: '1.05rem' }}>
              Two examples of teams that used SignTime's API and SMS delivery as building blocks for their own workflows.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
            {proofPoints.map((p) => (
              <div key={p.title} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '14px', padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <Send size={20} color="var(--coral)" />
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--navy)', margin: 0 }}>{p.title}</h3>
                </div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--slate)' }}>{p.body}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link
              to="/partners"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--navy)', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}
            >
              <Building2 size={18} /> See how partners build on SignTime's API →
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section style={{ background: '#fff', padding: '4.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem' }}>
            One flat price. However many people — or systems — need it.
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={open} className="btn btn-coral" style={{ padding: '16px 32px', fontSize: '15px' }}>
              Start Free Trial — No Credit Card Required <ArrowRight size={18} />
            </button>
            <Link to="/contact" className="btn btn-outline-navy" style={{ padding: '16px 32px', fontSize: '15px' }}>
              Book a 15-Minute Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
