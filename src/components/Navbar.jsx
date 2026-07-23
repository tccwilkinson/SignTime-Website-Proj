import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Shield, Layers, FileText, Users, Code, Briefcase, GraduationCap, Building, Stethoscope, HeartPulse } from 'lucide-react';

export default function Navbar({ onOpenDemo }) {
  const [activeDropdown, setActiveDropdown] = useState(null); // 'product' | 'solutions' | 'resources' | null
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <div ref={navRef} style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 40px',
          background: 'var(--navy)',
          boxShadow: scrolled ? '0 10px 30px rgba(20, 33, 62, 0.35)' : '0 2px 24px rgba(20, 33, 62, 0.25)',
          transition: 'box-shadow 0.3s ease'
        }}
      >
        {/* Left Brand & Menu Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
          
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <svg width="30" height="30" viewBox="0 0 34 34" fill="none">
              <circle cx="17" cy="17" r="11.5" fill="var(--sky)" stroke="#fff" strokeWidth="2.2" />
              <path d="M17 6.5v3M17 24.5v3M27.5 17h-3M9.5 17h-3" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round" />
              <path d="M17.3 16.7 Q20.5 13 25.5 7.5 Q21.8 14.3 17.9 17.4 Z" fill="var(--navy)" />
              <path d="M17.3 16.7L24.3 9.3" stroke="var(--navy)" strokeWidth="0.8" strokeLinecap="round" />
              <circle cx="17" cy="17" r="1.9" fill="var(--navy)" />
            </svg>
            <div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#fff', lineHeight: 1.1, fontFamily: 'var(--font-heading)' }}>
                SignTime
              </div>
              <div style={{ fontSize: '11px', color: '#9BAAC7', fontWeight: 500 }}>
                Intuitive e-signatures
              </div>
            </div>
          </a>

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
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeDropdown === 'product' ? 'var(--coral)' : '#fff',
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
                    left: '-24px',
                    width: '780px',
                    background: '#fff',
                    border: '1px solid var(--line)',
                    borderRadius: '12px',
                    boxShadow: 'var(--shadow-lg)',
                    padding: '24px',
                    display: 'flex',
                    gap: '16px',
                    zIndex: 50,
                    animation: 'fadeIn 0.2s ease-out'
                  }}
                >
                  <div className="st-col">
                    <h4>Signing & Verification</h4>
                    <a href="#features">Signer Sequencing</a>
                    <a href="#features">Guarantor Feature</a>
                    <a href="#features">Long-Term Signature (PAdES)</a>
                    <a href="#features">Signature Certificates</a>
                    <a href="#features">Handwritten Signatures</a>
                    <a href="#features">SMS Signature Requests</a>
                  </div>
                  <div className="st-col">
                    <h4>Workflow Automation</h4>
                    <a href="#features">Internal Approval Workflows</a>
                    <a href="#features">Create & Manage Templates</a>
                    <a href="#features">Bulk Sending Documents</a>
                    <a href="#features">Attachments</a>
                  </div>
                  <div className="st-col">
                    <h4>Document Management</h4>
                    <a href="#features">Multiple File Format Support</a>
                    <a href="#features">Timestamps</a>
                    <a href="#features">Document Search & Tagging</a>
                    <a href="#features">Share Documents & Files</a>
                  </div>
                  <div className="st-col">
                    <h4>Teams & Security</h4>
                    <a href="#features">Multiple Teams</a>
                    <a href="#features">Member Role Management</a>
                    <a href="#features">Two-Factor Authentication</a>
                    <a href="#features">Customized Branding</a>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => toggleDropdown('solutions')}
                className={`st-trigger ${activeDropdown === 'solutions' ? 'st-active' : ''}`}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeDropdown === 'solutions' ? 'var(--coral)' : '#fff',
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
                    left: '-24px',
                    width: '580px',
                    background: '#fff',
                    border: '1px solid var(--line)',
                    borderRadius: '12px',
                    boxShadow: 'var(--shadow-lg)',
                    padding: '24px',
                    display: 'flex',
                    gap: '16px',
                    zIndex: 50,
                    animation: 'fadeIn 0.2s ease-out'
                  }}
                >
                  <div className="st-col">
                    <h4>Use Case</h4>
                    <a href="#features">eSignatures</a>
                    <a href="#features">Approval Workflows</a>
                    <a href="#features">Templates</a>
                    <a href="#features">Bulk Sending</a>
                    <a href="#features" style={{ color: 'var(--coral)', fontWeight: 600 }}>All use cases ›</a>
                  </div>
                  <div className="st-col">
                    <h4>Industry</h4>
                    <a href="#features">Real Estate & Relocation</a>
                    <a href="#features">Education</a>
                    <a href="#features">Professional Services</a>
                    <a href="#features">Healthcare</a>
                    <a href="#features" style={{ color: 'var(--coral)', fontWeight: 600 }}>All industries ›</a>
                  </div>
                  <div className="st-col">
                    <h4>Team</h4>
                    <a href="#features">Sales</a>
                    <a href="#features">HR</a>
                    <a href="#features">Legal</a>
                    <a href="#features">Operations</a>
                    <a href="#features" style={{ color: 'var(--coral)', fontWeight: 600 }}>All teams ›</a>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => toggleDropdown('resources')}
                className={`st-trigger ${activeDropdown === 'resources' ? 'st-active' : ''}`}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeDropdown === 'resources' ? 'var(--coral)' : '#fff',
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
                    left: '-24px',
                    width: '540px',
                    background: '#fff',
                    border: '1px solid var(--line)',
                    borderRadius: '12px',
                    boxShadow: 'var(--shadow-lg)',
                    padding: '24px',
                    display: 'flex',
                    gap: '16px',
                    zIndex: 50,
                    animation: 'fadeIn 0.2s ease-out'
                  }}
                >
                  <div className="st-col">
                    <h4>Learn</h4>
                    <a href="#security">Tips & How to Use</a>
                    <a href="#security">FAQ & Knowledge Center</a>
                    <a href="#security">Blog & Customer Stories</a>
                  </div>
                  <div className="st-col">
                    <h4>News</h4>
                    <a href="#security">Press Releases</a>
                    <a href="#security">Product Updates</a>
                  </div>
                  <div className="st-col">
                    <h4>Get Started</h4>
                    <a href="#contact">Onboarding Services</a>
                    <a href="#contact">Contact Support</a>
                  </div>
                </div>
              )}
            </div>

            <a href="#carousel" className="nav-link" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>Features</a>
          </div>
        </div>

        {/* Right CTA Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '22px', fontSize: '14px' }}>
          <span onClick={onOpenDemo} style={{ color: 'var(--coral)', fontWeight: 600, cursor: 'pointer' }}>
            Contact Us
          </span>
          <span onClick={onOpenDemo} style={{ color: '#9BAAC7', cursor: 'pointer', fontWeight: 500 }}>
            Login
          </span>
          <button onClick={onOpenDemo} className="btn btn-coral" style={{ padding: '10px 20px', fontSize: '14px' }}>
            Start Free Today
          </button>

          {/* Mobile drawer toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-btn"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '6px',
              padding: '6px',
              color: '#fff',
              cursor: 'pointer',
              display: 'none'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Decorative gradient strip */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, var(--coral), var(--navy) 50%, var(--sky))' }}></div>

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
            gap: '1.2rem',
            overflowY: 'auto'
          }}
        >
          <a href="#features" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Product Features</a>
          <a href="#security" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Security & Compliance</a>
          <a href="#carousel" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Interactive Carousel</a>
          <button onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }} className="btn btn-coral" style={{ width: '100%', marginTop: '1rem' }}>
            Start Free Today
          </button>
        </div>
      )}

      {/* Styles */}
      <style>{`
        .st-col { flex: 1; padding: 0 12px; border-right: 1px solid var(--line); }
        .st-col:last-child { border-right: none; }
        .st-col h4 { font-size: 11px; text-transform: uppercase; letter-spacing: .04em; color: var(--coral); margin: 0 0 12px; font-weight: 700; }
        .st-col a { display: block; font-size: 13px; color: var(--ink); text-decoration: none; margin-bottom: 8px; line-height: 1.4; transition: color 0.15s ease; }
        .st-col a:hover { color: var(--coral); }
        .mobile-link { color: #fff; font-size: 1.1rem; font-weight: 600; text-decoration: none; padding-bottom: 0.8rem; border-bottom: 1px solid rgba(255,255,255,0.1); }
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
