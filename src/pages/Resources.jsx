import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';

const pillars = [
  {
    id: 'workflow-automation',
    name: 'Workflow Automation',
    articles: [
      { slug: 'automate-contract-approvals', title: 'How to Automate Contract Approvals Before They Go Out for Signature', teaser: 'Route every contract to the right approver automatically — before it ever reaches a signer.' },
      { slug: 'bulk-sending-100-contracts', title: 'Bulk Sending: Getting 100 Contracts Out in One Click', teaser: 'A practical walkthrough of sending a large batch of documents from a single CSV upload.' },
    ],
  },
  {
    id: 'best-practices',
    name: 'E-Signature Best Practices',
    articles: [
      { slug: 'legally-binding-esignatures-us', title: 'What Makes an E-Signature Legally Binding in the U.S.?', teaser: 'A plain-English breakdown of the ESIGN Act, UETA, and what actually holds up in court.' },
      { slug: 'templates-vs-one-off-documents', title: 'Templates vs. One-Off Documents: When to Use Each', teaser: 'How to decide what belongs in a reusable template versus a document you build from scratch.' },
    ],
  },
  {
    id: 'compliance-security',
    name: 'Compliance & Security',
    articles: [
      { slug: 'esign-act-ueta-explained', title: 'ESIGN Act and UETA, Explained for Non-Lawyers', teaser: 'The two laws behind every legally binding e-signature in the United States.' },
      { slug: 'what-an-audit-trail-proves', title: 'What an Audit Trail Actually Proves', teaser: 'Timestamped, tamper-evident, and built for the moment someone asks "can you prove that?"' },
    ],
  },
  {
    id: 'industry-solutions',
    name: 'Industry Solutions',
    articles: [
      { slug: 'esignatures-for-construction', title: 'E-Signatures for Construction: Lien Waivers, Change Orders, and Field Signing', teaser: 'Getting subcontractor sign-off on a jobsite tablet, even without an email address on file.' },
      { slug: 'esignatures-for-real-estate', title: 'E-Signatures for Real Estate: Closing Leases Without the Back-and-Forth', teaser: 'How independent brokerages and relocation teams cut signing friction out of every lease.' },
    ],
  },
];

export default function Resources() {
  const { open } = useDemoModal();

  return (
    <>
      {/* Hero + top-of-page CTA */}
      <section style={{ background: 'radial-gradient(circle at 50% -10%, #DCEAFC 0%, #fff 55%)', padding: '3.5rem 0' }}>
        <div className="container" style={{ maxWidth: '760px', textAlign: 'center' }}>
          <div className="st-subpage-badge" style={{ marginBottom: '1.2rem' }}>
            <span className="badge-sky cute-badge-pulse">Resources &amp; Playbooks</span>
          </div>
          <h1 className="st-subpage-title" style={{ fontSize: 'clamp(2rem, 4.2vw, 2.8rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Resources
          </h1>
          <p className="st-subpage-subhead" style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--slate)', marginBottom: '1.8rem' }}>
            Guides on workflow automation, e-signature best practices, compliance, and industry-specific playbooks.
          </p>
          <div className="st-subpage-subhead">
            <button onClick={open} className="btn btn-coral hero-btn-primary" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Start Free Trial — No Credit Card Required <ArrowRight size={16} className="hero-cta-arrow" />
            </button>
          </div>
        </div>
      </section>

      {/* Pillars */}
      {pillars.map((pillar, idx) => (
        <section key={pillar.id} id={pillar.id} style={{ background: idx % 2 === 0 ? '#fff' : 'var(--sky)', padding: '3.5rem 0', scrollMarginTop: '96px' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1.5rem' }}>
              {pillar.name}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {pillar.articles.map((article) => (
                <Link
                  key={article.slug}
                  to={`/resources/${article.slug}`}
                  className="hover-card"
                  style={{ display: 'block', border: '1px solid var(--line)', borderRadius: '14px', padding: '24px', background: '#fff', textDecoration: 'none' }}
                >
                  <div className="badge-sky" style={{ marginBottom: '12px', fontSize: '0.72rem', padding: '0.3rem 0.7rem' }}>
                    {pillar.name}
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '10px', lineHeight: 1.35 }}>
                    {article.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--slate)', marginBottom: '12px' }}>{article.teaser}</p>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--coral)' }}>Read more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Closing CTA */}
      <section style={{ background: 'var(--navy)', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Unlimited users. One flat price.
          </h2>
          <button onClick={open} className="btn btn-coral" style={{ padding: '14px 28px', fontSize: '15px' }}>
            Start Free Trial — No Credit Card Required <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </>
  );
}
