import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';

const items = [
  {
    date: 'July 15, 2026',
    category: 'Press',
    title: 'SignTime Expands to the U.S. Market',
    teaser: 'SignTime launches its U.S.-focused e-signature and workflow automation platform, built around unlimited users at one flat price.',
  },
  {
    date: 'June 3, 2026',
    category: 'Product Update',
    title: 'SignTime Launches Native Salesforce Integration',
    teaser: 'Request signatures and track document status directly from a Salesforce record — no separate login required.',
  },
  {
    date: 'May 20, 2026',
    category: 'Company News',
    title: 'Introducing the Growth Plan',
    teaser: 'A new mid-tier plan brings internal approval workflows, custom branding, and role-based permissions to scaling teams.',
  },
  {
    date: 'April 8, 2026',
    category: 'Product Update',
    title: 'SignTime Tablet Sign: In-Person Signing on Any Device',
    teaser: 'Capture an in-person signature on a tablet at a desk, a jobsite, or a front counter — no separate hardware required.',
  },
];

const tabs = ['All', 'Press', 'Company News', 'Product Update'];

export default function News() {
  const { open } = useDemoModal();
  const [activeTab, setActiveTab] = useState('All');

  const visibleItems = activeTab === 'All' ? items : items.filter((i) => i.category === activeTab);

  return (
    <>
      <section style={{ background: 'radial-gradient(circle at 50% -10%, #DCEAFC 0%, #fff 55%)', padding: '3.5rem 0' }}>
        <div className="container" style={{ maxWidth: '760px', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 4.2vw, 2.8rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            News & Updates
          </h1>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--slate)', marginBottom: '1.8rem' }}>
            Press releases, company news, and product updates — all in one place.
          </p>
          <button onClick={open} className="btn btn-coral" style={{ padding: '14px 28px', fontSize: '15px' }}>
            Start Free Trial — No Credit Card Required <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '3rem 0 4rem' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          {/* Tabs */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '2rem', borderBottom: '1px solid var(--line)', paddingBottom: '1.2rem' }}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                aria-pressed={activeTab === tab}
                style={{
                  background: activeTab === tab ? 'var(--navy)' : 'transparent',
                  color: activeTab === tab ? '#fff' : 'var(--slate)',
                  border: activeTab === tab ? 'none' : '1px solid var(--line)',
                  borderRadius: 'var(--radius-full)',
                  padding: '8px 18px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {visibleItems.map((item) => (
              <div
                key={item.title}
                className="hover-card"
                style={{ border: '1px solid var(--line)', borderRadius: '14px', padding: '24px', background: '#fff' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--slate)' }}>{item.date}</span>
                  <span className="badge-sky" style={{ fontSize: '0.72rem', padding: '0.25rem 0.7rem' }}>{item.category}</span>
                </div>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '8px' }}>{item.title}</h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--slate)', margin: 0 }}>{item.teaser}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
