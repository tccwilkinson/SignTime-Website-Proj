import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';
import SignTimeLogo from './SignTimeLogo';

export default function Navbar() {
  const { open } = useDemoModal();
  const [activeDropdown, setActiveDropdown] = useState(null); // 'product' | 'solutions' | 'resources' | null
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const threshold = isHome ? 560 : 20;
      setScrolled(window.scrollY > threshold);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const navTextColor = isHome ? 'var(--text-inverse)' : '#fff';
  const navMutedColor = isHome ? 'var(--text-inverse-muted)' : '#9BAAC7';
  const navActiveColor = isHome ? '#fff' : 'var(--coral)';

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeMenus = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <div ref={navRef} style={isHome ? { position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 } : { position: 'sticky', top: 0, zIndex: 100 }}>
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 40px',
          background: isHome
            ? (scrolled ? 'rgba(var(--surface-dark-deep-rgb), 0.82)' : 'transparent')
            : 'var(--navy)',
          backdropFilter: isHome && scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isHome && scrolled ? 'blur(12px)' : 'none',
          boxShadow: isHome
            ? 'none'
            : (scrolled ? '0 10px 30px rgba(20, 33, 62, 0.35)' : '0 2px 24px rgba(20, 33, 62, 0.25)'),
          transition: 'background 200ms ease, backdrop-filter 200ms ease, box-shadow 0.3s ease'
        }}
      >
        {/* Left Brand & Menu Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>

          {/* Logo */}
          <Link to="/" onClick={closeMenus} style={{ textDecoration: 'none' }}>
            <SignTimeLogo textColor={navTextColor} iconColor={navTextColor} subtitleColor={navMutedColor} />
          </Link>

          {/* Desktop Nav Links */}
          <div
            style={{ display: 'none', alignItems: 'center', gap: '26px', fontSize: '14px' }}
            className="desktop-menu"
          >
            {/* Product Mega Menu */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => toggleDropdown('product')}
                className={`st-trigger ${activeDropdown === 'product' ? 'st-active' : ''}`}
                aria-expanded={activeDropdown === 'product'}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeDropdown === 'product' ? navActiveColor : navTextColor,
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'color 0.15s ease'
                }}
              >
                Product <ChevronDown size={14} style={{ transform: activeDropdown === 'product' ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
              </button>

              {activeDropdown === 'product' && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 14px)',
                    left: '0',
                    width: '210px',
                    background: '#fff',
                    border: '1px solid var(--line)',
                    borderRadius: '12px',
                    boxShadow: 'var(--shadow-lg)',
                    padding: '10px 6px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    zIndex: 50,
                    animation: 'fadeIn 0.2s ease-out'
                  }}
                >
                  <Link to="/features" onClick={closeMenus} className="st-nav-item">Features</Link>
                  <Link to="/security" onClick={closeMenus} className="st-nav-item">Security</Link>
                  <Link to="/integrations" onClick={closeMenus} className="st-nav-item">Integrations</Link>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => toggleDropdown('solutions')}
                className={`st-trigger ${activeDropdown === 'solutions' ? 'st-active' : ''}`}
                aria-expanded={activeDropdown === 'solutions'}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeDropdown === 'solutions' ? navActiveColor : navTextColor,
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'color 0.15s ease'
                }}
              >
                Solutions <ChevronDown size={14} style={{ transform: activeDropdown === 'solutions' ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
              </button>

              {activeDropdown === 'solutions' && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 14px)',
                    left: '0',
                    width: '200px',
                    background: '#fff',
                    border: '1px solid var(--line)',
                    borderRadius: '12px',
                    boxShadow: 'var(--shadow-lg)',
                    padding: '10px 6px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    zIndex: 50,
                    animation: 'fadeIn 0.2s ease-out'
                  }}
                >
                  <Link to="/solutions/use-case" onClick={closeMenus} className="st-nav-item">Use Cases</Link>
                  <Link to="/solutions/industry" onClick={closeMenus} className="st-nav-item">Industries</Link>
                  <Link to="/solutions/team" onClick={closeMenus} className="st-nav-item">Teams</Link>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => toggleDropdown('resources')}
                className={`st-trigger ${activeDropdown === 'resources' ? 'st-active' : ''}`}
                aria-expanded={activeDropdown === 'resources'}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeDropdown === 'resources' ? navActiveColor : navTextColor,
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'color 0.15s ease'
                }}
              >
                Resources <ChevronDown size={14} style={{ transform: activeDropdown === 'resources' ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
              </button>

              {activeDropdown === 'resources' && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 14px)',
                    left: '0',
                    width: '220px',
                    background: '#fff',
                    border: '1px solid var(--line)',
                    borderRadius: '12px',
                    boxShadow: 'var(--shadow-lg)',
                    padding: '10px 6px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    zIndex: 50,
                    animation: 'fadeIn 0.2s ease-out'
                  }}
                >
                  <Link to="/news" onClick={closeMenus} className="st-nav-item">News</Link>
                  <Link to="/resources/manuals-support" onClick={closeMenus} className="st-nav-item">Manuals &amp; Support</Link>
                  <Link to="/resources" onClick={closeMenus} className="st-nav-item">Learn</Link>
                </div>
              )}
            </div>

            <Link to="/pricing" className="nav-link" onClick={closeMenus} style={{ color: navTextColor, textDecoration: 'none', fontWeight: 600, transition: 'color 200ms ease' }}>
              Pricing
            </Link>
          </div>
        </div>

        {/* Right CTA Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '22px', fontSize: '14px' }}>
          <Link to="/contact" onClick={closeMenus} style={{ color: isHome ? navTextColor : 'var(--coral)', fontWeight: 600, textDecoration: 'none', transition: 'color 200ms ease' }}>
            Contact Us
          </Link>
          <Link
            to="/login"
            onClick={closeMenus}
            style={{
              color: navMutedColor,
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'color 200ms ease',
              cursor: 'pointer'
            }}
          >
            Login
          </Link>
          <button
            onClick={open}
            className={isHome ? 'btn nav-cta-cream' : 'btn btn-coral'}
            style={{ padding: '10px 20px', fontSize: '14px' }}
          >
            Start Free Today
          </button>

          {/* Mobile drawer toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            className="mobile-btn"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '6px',
              padding: '6px',
              color: navTextColor,
              cursor: 'pointer',
              display: 'none'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Decorative gradient strip */}
      {!isHome && (
        <div style={{ height: '3px', background: 'linear-gradient(90deg, var(--coral), var(--navy) 50%, var(--sky))' }}></div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: '70px',
            background: 'var(--navy)',
            padding: '2rem 1.5rem',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            overflowY: 'auto'
          }}
        >
          <Link to="/pricing" className="mobile-link" onClick={closeMenus}>Pricing</Link>
          <Link to="/features" className="mobile-link" onClick={closeMenus}>Features</Link>
          <Link to="/security" className="mobile-link" onClick={closeMenus}>Security</Link>
          <Link to="/integrations" className="mobile-link" onClick={closeMenus}>Integrations</Link>
          <Link to="/solutions" className="mobile-link" onClick={closeMenus}>Solutions</Link>
          <Link to="/news" className="mobile-link" onClick={closeMenus}>News</Link>
          <Link to="/resources/manuals-support" className="mobile-link" onClick={closeMenus}>Manuals &amp; Support</Link>
          <Link to="/resources" className="mobile-link" onClick={closeMenus}>Learn</Link>
          <Link to="/contact" className="mobile-link" onClick={closeMenus}>Contact Us</Link>
          <Link to="/login" className="mobile-link" onClick={closeMenus}>Log In</Link>
          <button
            onClick={() => { setMobileMenuOpen(false); open(); }}
            className="btn btn-coral"
            style={{ width: '100%', marginTop: '1rem' }}
          >
            Start Free Today
          </button>
        </div>
      )}

      {/* Styles */}
      <style>{`
        .st-nav-item { display: block; font-size: 13.5px; font-weight: 600; color: var(--ink); text-decoration: none; padding: 8px 12px; border-radius: 6px; transition: all 0.15s ease; }
        .st-nav-item:hover { background: var(--sky); color: var(--coral); }
        .st-col { flex: 1; padding: 0 12px; border-right: 1px solid var(--line); }
        .st-col:last-child { border-right: none; }
        .st-col h4 { font-size: 11px; text-transform: uppercase; letter-spacing: .04em; color: var(--coral); margin: 0 0 12px; font-weight: 700; }
        .st-col a { display: block; font-size: 13px; color: var(--ink); text-decoration: none; margin-bottom: 8px; line-height: 1.4; transition: color 0.15s ease; }
        .st-col a:hover { color: var(--coral); }
        .mobile-link { color: #fff; font-size: 1.1rem; font-weight: 600; text-decoration: none; padding-bottom: 0.8rem; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .nav-cta-cream { background: var(--surface-light); color: var(--navy); box-shadow: none; }
        .nav-cta-cream:hover { background: #fff; color: var(--navy); transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.3); }
        @media (min-width: 860px) {
          .desktop-menu { display: flex !important; }
        }
        @media (max-width: 859px) {
          .mobile-btn { display: block !important; }
        }
      `}</style>
    </div>
  );
}
