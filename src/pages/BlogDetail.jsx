import { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getBlogPostBySlug, blogPosts } from '../data/blogPosts';

export default function BlogDetail() {
  const { slug } = useParams();
  const [scrollProgress, setScrollProgress] = useState(0);

  const post = useMemo(() => {
    return getBlogPostBySlug(slug) || blogPosts[0];
  }, [slug]);

  // Related posts in same category or adjacent
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return blogPosts
      .filter((p) => p.slug !== post.slug)
      .slice(0, 3);
  }, [post]);

  // Reading progress indicator hook
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) {
    return (
      <div className="container" style={{ padding: '5rem 0', textAlign: 'center' }}>
        <h2>Article Not Found</h2>
        <Link to="/blog" className="btn btn-coral" style={{ marginTop: '1rem', textDecoration: 'none' }}>
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Top Reading Progress Line */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '4px',
          background: 'linear-gradient(90deg, var(--coral) 0%, #FF9E64 100%)',
          width: `${scrollProgress}%`,
          zIndex: 9999,
          transition: 'width 0.1s ease-out',
        }}
      />

      {/* Article Header Shell (Title & Metadata) */}
      <section style={{ background: 'radial-gradient(circle at 50% -10%, #DCEAFC 0%, #fff 65%)', padding: '3.5rem 0 2.5rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          {/* Breadcrumb Navigation */}
          <div style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--slate)', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <Link to="/resources" style={{ color: 'var(--slate)', textDecoration: 'none' }}>Resources</Link>
            <span>/</span>
            <Link to="/blog" style={{ color: 'var(--slate)', textDecoration: 'none' }}>Blog</Link>
            <span>/</span>
            <span style={{ color: 'var(--navy)', fontWeight: 700 }}>{post.category}</span>
          </div>

          {/* Metadata Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.2rem', flexWrap: 'wrap' }}>
            <span className="badge-sky" style={{ background: '#fff', color: 'var(--navy)', fontWeight: 800, fontSize: '0.78rem' }}>
              {post.category}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--slate)', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <Calendar size={14} color="var(--navy)" /> {post.date}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--slate)', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <Clock size={14} color="var(--navy)" /> {post.readingTime}
            </span>
          </div>

          {/* Main Title with Smooth Fade-in */}
          <h1 className="st-fade-in" style={{ fontSize: 'clamp(2.1rem, 4.2vw, 3rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1.2rem', lineHeight: 1.25, letterSpacing: '-0.02em' }}>
            {post.title}
          </h1>
        </div>
      </section>

      {/* Main Article Body Container */}
      <section style={{ background: '#fff', padding: '2.5rem 0 5rem' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          
          {/* Top Bar with Back Link */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1.5rem', borderBottom: '1px solid var(--line)', marginBottom: '3rem' }}>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', fontWeight: 700, color: 'var(--coral)', textDecoration: 'none' }}>
              <ArrowLeft size={16} /> Back to All Articles
            </Link>
          </div>

          {/* Formatted Article Content with Spaced Headers & Paragraphs */}
          <div className="formatted-article-body">
            <style>{`
              .formatted-article-body {
                font-family: var(--font-body);
                font-size: 1.08rem;
                line-height: 1.88;
                color: #2D3748;
              }
              .formatted-article-body p {
                margin-bottom: 1.85rem;
                letter-spacing: -0.003em;
              }
              .formatted-article-body h2 {
                font-family: var(--font-heading);
                font-size: 1.65rem;
                font-weight: 800;
                color: var(--navy);
                margin-top: 2.8rem;
                margin-bottom: 1.2rem;
                line-height: 1.35;
                letter-spacing: -0.015em;
                padding-bottom: 8px;
                border-bottom: 2px solid var(--sky);
              }
              .formatted-article-body h3 {
                font-family: var(--font-heading);
                font-size: 1.35rem;
                font-weight: 700;
                color: var(--navy);
                margin-top: 2.4rem;
                margin-bottom: 1rem;
                line-height: 1.4;
              }
              .formatted-article-body h4 {
                font-family: var(--font-heading);
                font-size: 1.15rem;
                font-weight: 700;
                color: var(--ink);
                margin-top: 2rem;
                margin-bottom: 0.8rem;
              }
              .formatted-article-body ul, .formatted-article-body ol {
                margin-top: 0.8rem;
                margin-bottom: 2rem;
                padding-left: 1.6rem;
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
              }
              .formatted-article-body li {
                line-height: 1.75;
                color: #2D3748;
              }
              .formatted-article-body blockquote {
                margin: 2.2rem 0;
                padding: 1.4rem 1.8rem;
                background: var(--sky);
                border-left: 4px solid var(--coral);
                border-radius: 8px;
                font-size: 1.05rem;
                font-style: italic;
                color: var(--navy);
                line-height: 1.7;
              }
              .formatted-article-body strong {
                color: var(--navy);
                font-weight: 700;
              }
            `}</style>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Embedded Key Takeaways Box */}
          <div
            className="st-fade-in"
            style={{
              background: 'linear-gradient(135deg, #FAFBFD 0%, var(--sky) 100%)',
              border: '1px solid var(--line)',
              borderRadius: '18px',
              padding: '28px',
              margin: '3.5rem 0',
              boxShadow: 'var(--shadow-subtle)',
            }}
          >
            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={20} color="var(--emerald)" /> Key Takeaways for Your Business
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.94rem', color: 'var(--navy)' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--coral)', fontWeight: 800 }}>•</span>
                <span><strong>Unlimited Signers &amp; Team Members:</strong> Scale your document sending without per-seat upcharges.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--coral)', fontWeight: 800 }}>•</span>
                <span><strong>Legally Enforceable:</strong> Built on ESIGN Act &amp; UETA compliance with tamper-proof audit trails.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--coral)', fontWeight: 800 }}>•</span>
                <span><strong>Seamless Automation:</strong> Native Salesforce integration, Web API, and automated approval workflows.</span>
              </li>
            </ul>
          </div>

          {/* Bottom Article Navigation */}
          <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <Link to="/blog" className="btn btn-outline-navy" style={{ padding: '12px 24px', fontSize: '14px', borderRadius: '24px' }}>
              ← View All Articles
            </Link>

            <a href="https://app.signtime.com/register?chosen_plan=Otameshi" className="btn btn-coral" style={{ padding: '12px 24px', fontSize: '14px', textDecoration: 'none', borderRadius: '24px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              Start Free Trial <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section style={{ background: '#FAFBFD', padding: '4rem 0' }}>
          <div className="container" style={{ maxWidth: '1040px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1.8rem' }}>
              Related Guides &amp; Articles
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.id}
                  to={`/blog/${rPost.slug}`}
                  className="hover-card"
                  style={{
                    background: '#fff',
                    border: '1px solid var(--line)',
                    borderRadius: '16px',
                    padding: '24px',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--coral)', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.04em' }}>
                      {rPost.category}
                    </div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '8px', lineHeight: 1.35 }}>
                      {rPost.title}
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--slate)', lineHeight: 1.5, marginBottom: '14px' }}>
                      {rPost.excerpt}
                    </p>
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Read Article →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section style={{ background: 'var(--navy)', padding: '4.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Start signing contracts faster today
          </h2>
          <p style={{ color: '#9BAAC7', fontSize: '1.05rem', marginBottom: '2rem' }}>
            Try SignTime free with unlimited users and no credit card required.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a href="https://app.signtime.com/register?chosen_plan=Otameshi" className="btn btn-coral" style={{ padding: '14px 28px', fontSize: '15px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              Start Free Trial <ArrowRight size={16} />
            </a>
            <a href="https://support.signtime.com/hc/en-us/requests/new" target="_blank" rel="noreferrer" className="btn btn-outline-navy" style={{ padding: '14px 28px', fontSize: '15px', color: '#fff', borderColor: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
