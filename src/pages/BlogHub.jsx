import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, ArrowRight, BookOpen, ArrowUpDown } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const POSTS_PER_PAGE = 12;

export default function BlogHub() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest'); // 'newest' | 'oldest' | 'longest' | 'shortest'
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  // Normalized categories list
  const categories = useMemo(() => {
    const set = new Set();
    blogPosts.forEach((p) => {
      if (p.category) {
        p.category.split('|').forEach((c) => set.add(c.trim()));
      }
    });
    return ['All', ...Array.from(set).slice(0, 8)];
  }, []);

  // Filter and sort posts based on user controls
  const processedPosts = useMemo(() => {
    let result = blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        (post.category && post.category.toLowerCase().includes(selectedCategory.toLowerCase()));
      const matchesSearch =
        !search ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Apply Sorting
    return result.sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.rawDate || b.date) - new Date(a.rawDate || a.date);
      }
      if (sortBy === 'oldest') {
        return new Date(a.rawDate || a.date) - new Date(b.rawDate || b.date);
      }
      if (sortBy === 'longest') {
        return (b.wordCount || 0) - (a.wordCount || 0);
      }
      if (sortBy === 'shortest') {
        return (a.wordCount || 0) - (b.wordCount || 0);
      }
      return 0;
    });
  }, [search, selectedCategory, sortBy]);

  const displayedPosts = processedPosts.slice(0, visibleCount);
  const hasMore = visibleCount < processedPosts.length;

  return (
    <>
      {/* Hero Header */}
      <section style={{ background: 'radial-gradient(circle at 50% -10%, #DCEAFC 0%, #fff 65%)', padding: '3.5rem 0 2.5rem' }}>
        <div className="container" style={{ maxWidth: '840px', textAlign: 'center' }}>
          <div className="st-subpage-badge" style={{ marginBottom: '1rem' }}>
            <span className="badge-sky cute-badge-pulse" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <BookOpen size={14} /> Resources &amp; Articles
            </span>
          </div>
          <h1 className="st-subpage-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Blog
          </h1>
          <p className="st-subpage-subhead" style={{ fontSize: '1.15rem', lineHeight: 1.6, color: 'var(--slate)', marginBottom: '2rem', maxWidth: '680px', margin: '0 auto 2rem' }}>
            Practical guides on digital contract management, workflow automation, e-signature compliance, and closing deals faster.
          </p>

          {/* Search Bar */}
          <div style={{ maxWidth: '540px', margin: '0 auto 1.8rem', position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--slate)' }} />
            <input
              type="text"
              placeholder="Search articles by title or keyword..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setVisibleCount(POSTS_PER_PAGE);
              }}
              style={{
                width: '100%',
                padding: '13px 16px 13px 48px',
                borderRadius: '30px',
                border: '1px solid var(--line)',
                background: '#fff',
                fontSize: '0.94rem',
                color: 'var(--navy)',
                outline: 'none',
                boxShadow: 'var(--shadow-subtle)',
                transition: 'border-color 0.2s',
              }}
            />
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(POSTS_PER_PAGE);
                }}
                style={{
                  padding: '6px 16px',
                  borderRadius: '20px',
                  border: selectedCategory === cat ? 'none' : '1px solid var(--line)',
                  background: selectedCategory === cat ? '#3B97D3' : '#fff',
                  color: selectedCategory === cat ? '#fff' : 'var(--navy)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Articles Grid Section */}
      <section style={{ background: '#FAFBFD', padding: '3.5rem 0 5rem' }}>
        <div className="container" style={{ maxWidth: '1040px' }}>
          
          {/* Header Row with Title AND Sort Dropdown on the SAME level */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '12px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy)', margin: 0 }}>
              {selectedCategory === 'All' ? 'Articles' : `${selectedCategory} Articles`}
              <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--slate)', marginLeft: '10px' }}>
                ({processedPosts.length})
              </span>
            </h2>

            {/* Sort By Filter (Updated options without "First", placed on same line as Articles header) */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff', border: '1px solid var(--line)', borderRadius: '24px', padding: '6px 16px', boxShadow: 'var(--shadow-subtle)' }}>
              <ArrowUpDown size={15} color="var(--navy)" />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', whiteSpace: 'nowrap' }}>Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setVisibleCount(POSTS_PER_PAGE);
                }}
                style={{
                  border: 'none',
                  background: 'transparent',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--navy)',
                  outline: 'none',
                  cursor: 'pointer',
                  paddingRight: '4px',
                }}
              >
                <option value="newest">Date: Newest</option>
                <option value="oldest">Date: Oldest</option>
                <option value="longest">Length: Longest</option>
                <option value="shortest">Length: Shortest</option>
              </select>
            </div>
          </div>

          {displayedPosts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', background: '#fff', borderRadius: '16px', border: '1px dashed var(--line)' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--navy)', marginBottom: '0.5rem' }}>No articles found</h3>
              <p style={{ color: 'var(--slate)', fontSize: '0.95rem' }}>Try adjusting your search query or selecting another category.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
              {displayedPosts.map((post, idx) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="hover-card st-fade-in"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: '#fff',
                    border: '1px solid var(--line)',
                    borderRadius: '16px',
                    padding: '24px',
                    textDecoration: 'none',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    animationDelay: `${(idx % 12) * 40}ms`,
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '12px' }}>
                      <span className="badge-sky" style={{ fontSize: '0.72rem', padding: '0.25rem 0.65rem' }}>
                        {post.category || 'Article'}
                      </span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--slate)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={12} /> {post.readingTime}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.08rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '10px', lineHeight: 1.35 }}>
                      {post.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--slate)', lineHeight: 1.5, marginBottom: '16px' }}>
                      {post.excerpt}
                    </p>
                  </div>

                  <div style={{ paddingTop: '12px', borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--slate)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--coral)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      Read Article →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {hasMore && (
            <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
              <button
                onClick={() => setVisibleCount((prev) => prev + POSTS_PER_PAGE)}
                className="btn btn-outline-navy"
                style={{ padding: '14px 32px', fontSize: '15px', borderRadius: '30px' }}
              >
                Load More Articles ({processedPosts.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: 'var(--navy)', padding: '4.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Ready to streamline your document workflow?
          </h2>
          <p style={{ color: '#9BAAC7', fontSize: '1.05rem', marginBottom: '2rem' }}>
            Unlimited users, flat-rate pricing, and ESIGN Act compliance for growing teams.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a href="https://app.signtime.com/register?chosen_plan=Otameshi" className="btn btn-coral" style={{ padding: '14px 28px', fontSize: '15px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              Start Free Trial — No Credit Card Required <ArrowRight size={16} />
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
