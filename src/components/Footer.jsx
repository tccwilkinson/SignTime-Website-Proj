import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';
import SignTimeLogo from './SignTimeLogo';

export default function Footer() {
  const { open } = useDemoModal();

  return (
    <footer id="contact" style={{ background: '#090E1A', borderTop: '1px solid var(--navy-light)', color: '#9BAAC7', paddingTop: '4rem', paddingBottom: '3rem' }}>
      <div className="container">

        {/* Main Footer Columns — mirrors the Nav: Product / Solutions / Resources / Company */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Brand Info */}
          <div style={{ gridColumn: 'span 2' }}>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '1rem', textDecoration: 'none' }}>
              <SignTimeLogo textColor="#ffffff" iconColor="#ffffff" />
            </Link>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '320px', marginBottom: '1.5rem', color: '#9BAAC7' }}>
              Unlimited users, one flat price — e-signatures and workflow automation for U.S. teams, without the per-seat markup.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={14} color="var(--coral)" /> support@signtime.com
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={14} color="var(--coral)" /> +1 (800) 555-SIGN
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Product</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><Link to="/features" className="f-link">All Features</Link></li>
              <li><Link to="/pricing" className="f-link">Pricing</Link></li>
              <li><Link to="/integrations" className="f-link">Integrations</Link></li>
              <li><Link to="/security" className="f-link">Security & Compliance</Link></li>
              <li><Link to="/partners" className="f-link">Partner Program</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Solutions</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><Link to="/solutions/industry/real-estate-relocation" className="f-link">Real Estate & Relocation</Link></li>
              <li><Link to="/solutions/industry/education" className="f-link">Education & Schools</Link></li>
              <li><Link to="/solutions/industry/healthcare" className="f-link">Healthcare</Link></li>
              <li><Link to="/solutions/team/sales" className="f-link">Sales & Legal Teams</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Resources</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><Link to="/customers" className="f-link">Customer Success Stories</Link></li>
              <li><Link to="/resources" className="f-link">Blog & Guides</Link></li>
              <li><Link to="/news" className="f-link">News & Updates</Link></li>
              <li><Link to="/features" className="f-link">SignTime vs. DocuSign vs. PandaDoc</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><Link to="/contact" className="f-link">Contact Us</Link></li>
              <li><Link to="/security" className="f-link">ESIGN & UETA Compliance</Link></li>
              <li><span onClick={open} className="f-link" style={{ cursor: 'pointer' }}>Privacy Policy</span></li>
              <li><span onClick={open} className="f-link" style={{ cursor: 'pointer' }}>Terms of Service</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1.8rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem'
          }}
        >
          <div>
            © {new Date().getFullYear()} SignTime Inc. All rights reserved. Built for modern U.S. enterprises.
          </div>
          <div style={{ display: 'flex', gap: '1.2rem' }}>
            <span onClick={open} style={{ color: 'var(--coral)', cursor: 'pointer', fontWeight: 600 }}>Privacy</span>
            <span onClick={open} style={{ color: 'var(--coral)', cursor: 'pointer', fontWeight: 600 }}>Security</span>
            <Link to="/contact" style={{ color: 'var(--coral)', fontWeight: 600, textDecoration: 'none' }}>Contact Us</Link>
          </div>
        </div>

      </div>

      <style>{`
        .f-link {
          color: #9BAAC7;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .f-link:hover {
          color: var(--coral);
        }
      `}</style>
    </footer>
  );
}
