import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useDemoModal } from '../../context/DemoModalContext';
import TodoFlag from '../../components/TodoFlag';

function titleFromSlug(slug) {
  if (!slug) return 'Solution';
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export default function SolutionDetail({ category, basePath }) {
  const { slug } = useParams();
  const { open } = useDemoModal();

  return (
    <>
      <section style={{ background: 'radial-gradient(circle at 50% -10%, #DCEAFC 0%, #fff 55%)', padding: '3.5rem 0 3rem' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <Link
            to={basePath}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--slate)', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', marginBottom: '1.5rem' }}
          >
            <ArrowLeft size={14} /> All {category}
          </Link>
          <div className="st-subpage-badge" style={{ marginBottom: '1.2rem' }}>
            <span className="badge-sky cute-badge-pulse">{category}</span>
          </div>
          <h1 className="st-subpage-title" style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.4rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem' }}>
            {titleFromSlug(slug)}
          </h1>
          <div className="st-subpage-subhead">
            <TodoFlag>page content not yet written — scaffolded route, pending review</TodoFlag>
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '3rem 0 4rem' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="st-subpage-card-1 cute-card-hover" style={{ border: '1px dashed var(--line)', borderRadius: '14px', padding: '32px', textAlign: 'center', color: 'var(--slate)', marginBottom: '2.5rem', background: '#FAFBFD' }}>
            This solutions page is routable and ready for content — copy will follow once the rest of the site is reviewed.
          </div>
          <div className="st-subpage-card-2" style={{ textAlign: 'center' }}>
            <button onClick={open} className="btn btn-coral" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Start Free Trial — No Credit Card Required <ArrowRight size={16} className="hero-cta-arrow" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
