import { Link } from 'react-router-dom';
import { Construction } from 'lucide-react';

export default function PageStub({ title }) {
  return (
    <section style={{ padding: '6rem 0', background: 'var(--sky)', minHeight: '50vh' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '560px' }}>
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '16px',
            background: '#fff',
            border: '1px solid var(--line)',
            boxShadow: 'var(--shadow-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem'
          }}
        >
          <Construction size={28} color="var(--coral)" />
        </div>
        <h1 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '0.8rem' }}>
          {title}
        </h1>
        <p style={{ color: 'var(--slate)', marginBottom: '2rem' }}>
          This page is being built next. Check back soon.
        </p>
        <Link to="/" className="btn btn-outline-navy" style={{ padding: '12px 28px' }}>
          Back to Home
        </Link>
      </div>
    </section>
  );
}
