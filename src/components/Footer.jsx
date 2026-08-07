import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Youtube, Facebook, Twitter, Instagram } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';
import SignTimeLogo from './SignTimeLogo';

export default function Footer() {
  const { open } = useDemoModal();

  return (
    <footer id="contact" style={{ background: 'var(--surface-dark-deep)', borderTop: '1px solid var(--navy-light)', color: '#9BAAC7', paddingTop: '4rem', paddingBottom: '3rem' }}>
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
              <a href="mailto:support+privacy@signtime.com" className="f-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={14} color="var(--coral)" /> support+privacy@signtime.com
              </a>
              <a
                href="https://www.youtube.com/channel/UCgGfqo7Z4wRk7qhg0z4a_MQ"
                target="_blank"
                rel="noreferrer"
                className="f-link"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Youtube size={14} color="var(--coral)" /> YouTube
              </a>
              <a
                href="https://www.facebook.com/signtimekk"
                target="_blank"
                rel="noreferrer"
                className="f-link"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Facebook size={14} color="var(--coral)" /> Facebook
              </a>
              <a
                href="https://twitter.com/SignTime_JP"
                target="_blank"
                rel="noreferrer"
                className="f-link"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Twitter size={14} color="var(--coral)" /> Twitter
              </a>
              <a
                href="https://www.instagram.com/signtimekk/"
                target="_blank"
                rel="noreferrer"
                className="f-link"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Instagram size={14} color="var(--coral)" /> Instagram
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Product</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><Link to="/features" className="f-link">All Features</Link></li>
              <li><Link to="/pricing" className="f-link">Pricing</Link></li>
              <li><Link to="/integrations" className="f-link">Integrations</Link></li>
              <li><Link to="/security" className="f-link">Security &amp; Compliance</Link></li>
              <li><Link to="/partners" className="f-link">Partner Program</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Solutions</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><Link to="/solutions/use-case" className="f-link">By Workflow</Link></li>
              <li><Link to="/solutions/industry/real-estate-relocation" className="f-link">Real Estate</Link></li>
              <li><Link to="/solutions/team/sales" className="f-link">Sales &amp; Accounting</Link></li>
              <li><Link to="/solutions/industry/education" className="f-link">Education</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Resources</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><Link to="/resources" className="f-link">Learn</Link></li>
              <li><Link to="/news" className="f-link">News &amp; Updates</Link></li>
              <li><Link to="/blog" className="f-link">Blog</Link></li>
              <li><Link to="/customers" className="f-link">Customer Success Stories</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><a href="https://support.signtime.com/hc/en-us/requests/new" target="_blank" rel="noreferrer" className="f-link">Contact Us</a></li>
              <li><Link to="/privacy" className="f-link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="f-link">Terms of Service</Link></li>
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
            © {new Date().getFullYear()} SignTime Inc. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.2rem' }}>
            <Link to="/privacy" style={{ color: 'var(--coral)', fontWeight: 600, textDecoration: 'none' }}>Privacy</Link>
            <Link to="/security" style={{ color: 'var(--coral)', fontWeight: 600, textDecoration: 'none' }}>Security</Link>
            <a href="https://support.signtime.com/hc/en-us/requests/new" target="_blank" rel="noreferrer" style={{ color: 'var(--coral)', fontWeight: 600, textDecoration: 'none' }}>Contact Us</a>
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
