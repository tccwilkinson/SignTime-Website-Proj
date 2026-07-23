import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import TodoFlag from '../../components/TodoFlag';

export default function SolutionCategoryHub({ category, basePath, items }) {
  return (
    <section style={{ background: '#fff', padding: '3.5rem 0', minHeight: '60vh' }}>
      <div className="container" style={{ maxWidth: '760px' }}>
        <Link
          to="/solutions"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--slate)', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', marginBottom: '1.5rem' }}
        >
          <ArrowLeft size={14} /> All Solutions
        </Link>
        <div className="badge-sky" style={{ marginBottom: '1.2rem' }}>Solutions</div>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '2rem', letterSpacing: '-0.02em' }}>
          {category}
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {items.map((item) => (
            <Link
              key={item.slug}
              to={`${basePath}/${item.slug}`}
              className="hover-card"
              style={{ display: 'block', border: '1px solid var(--line)', borderRadius: '14px', padding: '22px', background: '#fff', textDecoration: 'none' }}
            >
              <h2 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', margin: 0 }}>{item.name}</h2>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: '2rem' }}>
          <TodoFlag>content for these {category.toLowerCase()} pages is pending — routes are scaffolded, copy to follow after review</TodoFlag>
        </div>
      </div>
    </section>
  );
}
