import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Code2, Palette } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';

const capabilities = [
  {
    icon: <Palette size={28} color="#fff" />,
    bg: 'var(--navy)',
    title: 'White-Label Branding',
    desc: 'Ship an e-signature experience under your own name and logo — signers never see SignTime.',
  },
  {
    icon: <Code2 size={28} color="#fff" />,
    bg: 'var(--coral)',
    title: 'Full API Access',
    desc: "Build your own interface on top of SignTime's signing, workflow, and document infrastructure.",
  },
  {
    icon: <Layers size={28} color="#fff" />,
    bg: 'var(--navy)',
    title: 'OEM Partnership Support',
    desc: 'Dedicated onboarding for partners embedding SignTime into a product they sell under their own brand.',
  },
];

export default function Partners() {
  const { open } = useDemoModal();

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'radial-gradient(circle at 50% -10%, #DCEAFC 0%, #fff 55%)', padding: '4.5rem 0 3rem' }}>
        <div className="container" style={{ maxWidth: '760px', textAlign: 'center' }}>
          <div className="st-subpage-badge" style={{ marginBottom: '1.5rem' }}>
            <span className="badge-sky cute-badge-pulse">Partner Program</span>
          </div>
          <h1 className="st-subpage-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
            Build Your Own Branded E-Signature Product on SignTime
          </h1>
          <p className="st-subpage-subhead" style={{ fontSize: '1.15rem', lineHeight: 1.6, color: 'var(--slate)', marginBottom: '2rem' }}>
            White-label and OEM partners use SignTime's signing, workflow, and API infrastructure to power products they sell under their own brand.
          </p>
          <div className="st-subpage-subhead" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a href="https://app.signtime.com/register" className="btn btn-coral" style={{ padding: '16px 32px', fontSize: '15px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              Start Free Trial — No Credit Card Required <ArrowRight size={18} className="hero-cta-arrow" />
            </a>
            <a href="https://support.signtime.com/hc/en-us/requests/new" target="_blank" rel="noreferrer" className="btn btn-outline-navy" style={{ padding: '16px 32px', fontSize: '15px', textDecoration: 'none' }}>
              Talk to Our Partnerships Team
            </a>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ background: '#fff', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="hover-card"
                style={{ border: '1px solid var(--line)', borderRadius: '14px', padding: '28px', background: '#fff', textAlign: 'center' }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    background: c.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 18px',
                  }}
                >
                  {c.icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '10px' }}>{c.title}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--slate)' }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BerryMobile partner spotlight */}
      <section style={{ background: 'var(--sky)', padding: '4.5rem 0' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="badge-sky" style={{ marginBottom: '1.2rem', background: '#fff' }}>Partner Spotlight</div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.1rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1.2rem' }}>
            BerryMobile Launched Its Own Branded E-Signature Service on Top of SignTime
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--slate)', marginBottom: '1.2rem' }}>
            BerryMobile wanted to offer its customers a branded e-signature product without building signing infrastructure from scratch. Using SignTime's white-label and API capabilities, BerryMobile built "a2sign" — its own e-signature service, running entirely on SignTime's platform underneath.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--slate)', margin: 0 }}>
            Signers interact only with the a2sign brand. Behind the scenes, every signature, workflow, and document runs on SignTime's infrastructure — proof that a partner can launch a fully-branded product on top of SignTime without customers ever knowing SignTime is there.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section style={{ background: 'var(--navy)', padding: '4.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Have a product idea that needs e-signature infrastructure underneath it?
          </h2>
          <p style={{ color: '#9BAAC7', fontSize: '1.05rem', marginBottom: '2rem' }}>
            Let's talk about what a white-label or OEM partnership with SignTime could look like.
          </p>
          <a href="https://support.signtime.com/hc/en-us/requests/new" target="_blank" rel="noreferrer" className="btn btn-coral" style={{ padding: '16px 32px', fontSize: '15px', display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
            Talk to Our Partnerships Team <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
