import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';

const industries = [
  {
    id: 'education',
    name: 'Education',
    stories: [
      { slug: 'temple-university-japan', title: '300 Contracts, One Bulk Send', metric: 'Bulk-send replaced 300 individual contracts' },
      { slug: 'code-chrysalis', title: '40% Lower Costs Than Competing Tools', metric: '~40% annual cost reduction' },
    ],
  },
  {
    id: 'staffing',
    name: 'Staffing & Recruiting',
    stories: [
      { slug: 'rotoworks', title: 'Contracts in 1–3 Days Instead of a Month', metric: '1 month → 1–3 days turnaround' },
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Relocation',
    stories: [
      { slug: 'kc-dat', title: '90% Faster Signing on Mobile', metric: '90% faster document turnaround' },
      { slug: 'lease-japan-hr', title: 'Easier Switching From a Legacy Provider', metric: 'Switched from an established e-signature provider' },
    ],
  },
  {
    id: 'construction',
    name: 'Construction',
    stories: [
      { slug: 'himeno-gumi', title: 'Same-Day Contract Finalization', metric: '~1 week → same day' },
    ],
  },
  {
    id: 'technology',
    name: 'Technology & Software',
    stories: [
      { slug: 'qtnet', title: '25% Lower Annual Costs', metric: '25% annual cost reduction' },
      { slug: 'curvegrid', title: 'No More Monthly Document Caps', metric: 'Unlimited documents, no monthly limit' },
    ],
  },
  {
    id: 'energy',
    name: 'Energy',
    stories: [
      { slug: 'greenvolt', title: '1 Month to 2–3 Days', metric: 'Contract turnaround cut ~90%' },
    ],
  },
  {
    id: 'professional-services',
    name: 'Professional & Financial Services',
    stories: [
      { slug: 'global-brains', title: 'Three Weeks to One Day on NDAs', metric: '~50% less NDA workload' },
      { slug: 'hccr', title: '75% Lower Contract Costs', metric: '75% reduction in time & HR cost' },
      { slug: 'csi-thailand', title: 'Internal Approvals in One Day', metric: '2 weeks → 1 day' },
      { slug: 'krav-maga', title: '99% of Applications Digitized', metric: '99% digitization, Salesforce-integrated' },
    ],
  },
];

function CaseStudyCard({ story, industryName }) {
  return (
    <Link
      to={`/customers/${story.slug}`}
      className="hover-card"
      style={{
        display: 'block',
        border: '1px solid var(--line)',
        borderRadius: '14px',
        padding: '24px',
        background: '#fff',
        textDecoration: 'none',
      }}
    >
      <div className="badge-sky" style={{ marginBottom: '14px', fontSize: '0.75rem', padding: '0.3rem 0.8rem' }}>
        {industryName}
      </div>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '10px', lineHeight: 1.3 }}>
        {story.title}
      </h3>
      <p style={{ fontSize: '0.85rem', color: 'var(--slate)', marginBottom: '14px' }}>{story.metric}</p>
      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--coral)' }}>Read the story →</span>
    </Link>
  );
}

export default function CustomersHub() {
  const { open } = useDemoModal();

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'radial-gradient(circle at 50% -10%, #DCEAFC 0%, #fff 55%)', padding: '4.5rem 0 3rem' }}>
        <div className="container" style={{ maxWidth: '760px', textAlign: 'center' }}>
          <div className="st-subpage-badge" style={{ marginBottom: '1.2rem' }}>
            <span className="badge-sky cute-badge-pulse">Customer Success Stories</span>
          </div>
          <h1 className="st-subpage-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
            Real Results from SignTime Customers
          </h1>
          <p className="st-subpage-subhead" style={{ fontSize: '1.15rem', lineHeight: 1.6, color: 'var(--slate)', marginBottom: '2rem' }}>
            See how teams cut contract turnaround by up to 90% — without per-user fees.
          </p>
          <div className="st-subpage-subhead" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={open} className="btn btn-coral" style={{ padding: '16px 32px', fontSize: '15px' }}>
              Start Free Trial — No Credit Card Required <ArrowRight size={18} className="hero-cta-arrow" />
            </button>
            <Link to="/contact" className="btn btn-outline-navy" style={{ padding: '16px 32px', fontSize: '15px' }}>
              Book a 15-Minute Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Flat-price reinforcement + jump nav */}
      <section style={{ background: 'var(--navy)', padding: '1.5rem 0' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '10px 24px' }}>
          {industries.map((industry) => (
            <a
              key={industry.id}
              href={`#${industry.id}`}
              style={{ color: '#9BAAC7', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}
            >
              {industry.name}
            </a>
          ))}
        </div>
      </section>

      {/* Industry sections */}
      {industries.map((industry, idx) => (
        <section
          key={industry.id}
          id={industry.id}
          style={{ background: idx % 2 === 0 ? '#fff' : 'var(--sky)', padding: '3.5rem 0', scrollMarginTop: '96px' }}
        >
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 1.9rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1.5rem' }}>
              {industry.name}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {industry.stories.map((story) => (
                <CaseStudyCard key={story.slug} story={story} industryName={industry.name} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Closing CTA */}
      <section style={{ background: 'var(--navy)', padding: '4.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Join the teams cutting contract turnaround by 90%
          </h2>
          <p style={{ color: '#9BAAC7', fontSize: '1.05rem', marginBottom: '2rem' }}>
            Unlimited users. One flat price. No per-seat fees.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={open} className="btn btn-coral" style={{ padding: '16px 32px', fontSize: '15px' }}>
              Start Free Trial — No Credit Card Required <ArrowRight size={18} />
            </button>
            <Link to="/contact" className="btn btn-outline-navy" style={{ padding: '16px 32px', fontSize: '15px', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
              Book a 15-Minute Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
