import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';
import SignTimeLogo from './SignTimeLogo';

export default function Navbar() {
  const { open } = useDemoModal();
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

  const closeMenus = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
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

          {/* Logo matching user screenshot with white pen icon & white text */}
          <Link to="/" onClick={closeMenus} style={{ textDecoration: 'none' }}>
            <SignTimeLogo textColor="#ffffff" iconColor="#ffffff" />
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
                    <Link to="/features/signer-sequencing" onClick={closeMenus}>Signer Sequencing</Link>
                    <Link to="/features/guarantor-feature" onClick={closeMenus}>Guarantor Feature</Link>
                    <Link to="/features/pades-long-term-signature" onClick={closeMenus}>Long-Term Signature (PAdES)</Link>
                    <Link to="/features/signature-certificates" onClick={closeMenus}>Signature Certificates</Link>
                    <Link to="/features/handwritten-signatures" onClick={closeMenus}>Handwritten Signatures</Link>
                    <Link to="/features/sms-signature-requests" onClick={closeMenus}>SMS Signature Requests</Link>
                  </div>
                  <div className="st-col">
                    <h4>Workflow Automation</h4>
                    <Link to="/features/internal-approval-workflows" onClick={closeMenus}>Internal Approval Workflows</Link>
                    <Link to="/features/templates-management" onClick={closeMenus}>Create & Manage Templates</Link>
                    <Link to="/features/bulk-sending-documents" onClick={closeMenus}>Bulk Sending Documents</Link>
                    <Link to="/features/document-attachments" onClick={closeMenus}>Attachments</Link>
                  </div>
                  <div className="st-col">
                    <h4>Document Management</h4>
                    <Link to="/features/multiple-file-format-support" onClick={closeMenus}>Multiple File Format Support</Link>
                    <Link to="/features/legal-timestamps" onClick={closeMenus}>Timestamps</Link>
                    <Link to="/features/document-search-tagging" onClick={closeMenus}>Document Search & Tagging</Link>
                    <Link to="/features/share-documents-files" onClick={closeMenus}>Share Documents & Files</Link>
                  </div>
                  <div className="st-col">
                    <h4>Teams & Security</h4>
                    <Link to="/features/multiple-teams" onClick={closeMenus}>Multiple Teams</Link>
                    <Link to="/features/member-role-management" onClick={closeMenus}>Member Role Management</Link>
                    <Link to="/features/two-factor-authentication" onClick={closeMenus}>Two-Factor Authentication</Link>
                    <Link to="/features/customized-branding" onClick={closeMenus}>Customized Branding</Link>
                  </div>
                  <div className="st-col">
                    <h4>Integrations</h4>
                    <Link to="/integrations/web-api" onClick={closeMenus}>Web API</Link>
                    <Link to="/integrations/salesforce" onClick={closeMenus}>Salesforce Integration</Link>
                    <Link to="/integrations/google-drive" onClick={closeMenus}>Google Drive Integration</Link>
                    <Link to="/partners" onClick={closeMenus} style={{ color: 'var(--coral)', fontWeight: 600 }}>Partner program ›</Link>
                  </div>
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
                    <Link to="/solutions/use-case/esignatures" onClick={closeMenus}>eSignatures</Link>
                    <Link to="/solutions/use-case/approval-workflows" onClick={closeMenus}>Approval Workflows</Link>
                    <Link to="/solutions/use-case/templates" onClick={closeMenus}>Templates</Link>
                    <Link to="/solutions/use-case/bulk-sending" onClick={closeMenus}>Bulk Sending</Link>
                    <Link to="/solutions/use-case" onClick={closeMenus} style={{ color: 'var(--coral)', fontWeight: 600 }}>All use cases ›</Link>
                  </div>
                  <div className="st-col">
                    <h4>Industry</h4>
                    <Link to="/solutions/industry/real-estate-relocation" onClick={closeMenus}>Real Estate & Relocation</Link>
                    <Link to="/solutions/industry/education" onClick={closeMenus}>Education</Link>
                    <Link to="/solutions/industry/professional-services" onClick={closeMenus}>Professional Services</Link>
                    <Link to="/solutions/industry/healthcare" onClick={closeMenus}>Healthcare</Link>
                    <Link to="/solutions/industry" onClick={closeMenus} style={{ color: 'var(--coral)', fontWeight: 600 }}>All industries ›</Link>
                  </div>
                  <div className="st-col">
                    <h4>Team</h4>
                    <Link to="/solutions/team/sales" onClick={closeMenus}>Sales</Link>
                    <Link to="/solutions/team/hr" onClick={closeMenus}>HR</Link>
                    <Link to="/solutions/team/legal" onClick={closeMenus}>Legal</Link>
                    <Link to="/solutions/team/operations" onClick={closeMenus}>Operations</Link>
                    <Link to="/solutions/team" onClick={closeMenus} style={{ color: 'var(--coral)', fontWeight: 600 }}>All teams ›</Link>
                  </div>
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
                    <Link to="/resources" onClick={closeMenus}>Tips & Best Practices</Link>
                    <Link to="/resources" onClick={closeMenus}>Compliance & Security Guides</Link>
                    <Link to="/customers" onClick={closeMenus}>Customer Success Stories</Link>
                  </div>
                  <div className="st-col">
                    <h4>News</h4>
                    <Link to="/news" onClick={closeMenus}>Press Releases</Link>
                    <Link to="/news" onClick={closeMenus}>Product Updates</Link>
                  </div>
                  <div className="st-col">
                    <h4>Get Started</h4>
                    <Link to="/contact" onClick={closeMenus}>Onboarding Services</Link>
                    <Link to="/contact" onClick={closeMenus}>Contact Support</Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/pricing" className="nav-link" onClick={closeMenus} style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
              Pricing
            </Link>
          </div>
        </div>

        {/* Right CTA Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '22px', fontSize: '14px' }}>
          <Link to="/contact" onClick={closeMenus} style={{ color: 'var(--coral)', fontWeight: 600, textDecoration: 'none' }}>
            Contact Us
          </Link>
          <span style={{ color: '#9BAAC7', cursor: 'pointer', fontWeight: 500 }}>
            Login
          </span>
          <button onClick={open} className="btn btn-coral" style={{ padding: '10px 20px', fontSize: '14px' }}>
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
          <Link to="/features" className="mobile-link" onClick={closeMenus}>Features</Link>
          <Link to="/pricing" className="mobile-link" onClick={closeMenus}>Pricing</Link>
          <Link to="/security" className="mobile-link" onClick={closeMenus}>Security & Compliance</Link>
          <Link to="/customers" className="mobile-link" onClick={closeMenus}>Customer Stories</Link>
          <Link to="/contact" className="mobile-link" onClick={closeMenus}>Contact Us</Link>
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
