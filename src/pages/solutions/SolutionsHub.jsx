import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useDemoModal } from '../../context/DemoModalContext';

const dimensions = [
  { path: '/solutions/use-case', title: 'By Use Case', desc: 'eSignatures, approval workflows, templates, and bulk sending.' },
  { path: '/solutions/industry', title: 'By Industry', desc: 'Real estate & relocation, education, professional services, and healthcare.' },
  { path: '/solutions/team', title: 'By Team', desc: 'Sales, HR, legal, and operations.' },
];

export default function SolutionsHub() {
  const { open } = useDemoModal();

  return (
    <>
      <section style={{ background: 'radial-gradient(circle at 50% -10%, #DCEAFC 0%, #fff 55%)', padding: '4.5rem 0 3rem' }}>
        <div className="container" style={{ maxWidth: '720px', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
            Solutions
          </h1>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.6, color: 'var(--slate)' }}>
            However your team finds SignTime — by what you're trying to do, the industry you're in, or the team you're on.
          </p>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '3rem 0 4.5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
            {dimensions.map((d) => (
              <Link
                key={d.path}
                to={d.path}
                className="hover-card"
                style={{ display: 'block', border: '1px solid var(--line)', borderRadius: '14px', padding: '28px', background: '#fff', textDecoration: 'none', textAlign: 'center' }}
              >
                <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '10px' }}>{d.title}</h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--slate)', marginBottom: '14px' }}>{d.desc}</p>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--coral)' }}>Browse →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--navy)', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Unlimited users. One flat price.
          </h2>
          <a href="https://app.signtime.com/register?chosen_plan=Otameshi" className="btn btn-coral" style={{ padding: '14px 28px', fontSize: '15px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
            Start Free Trial — No Credit Card Required <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
