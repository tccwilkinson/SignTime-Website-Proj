import React from 'react';
import { Shield, Zap, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ onOpenDemo }) {
  return (
    <footer id="contact" style={{ background: '#090E1A', borderTop: '1px solid var(--navy-light)', color: '#9BAAC7', paddingTop: '4rem', paddingBottom: '3rem' }}>
      <div className="container">
        
        {/* Main Footer Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Brand Info */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <svg width="28" height="28" viewBox="0 0 34 34" fill="none">
                <circle cx="17" cy="17" r="11.5" fill="var(--sky)" stroke="#fff" strokeWidth="2.2" />
                <path d="M17 6.5v3M17 24.5v3M27.5 17h-3M9.5 17h-3" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round" />
                <path d="M17.3 16.7 Q20.5 13 25.5 7.5 Q21.8 14.3 17.9 17.4 Z" fill="var(--navy)" />
                <circle cx="17" cy="17" r="1.9" fill="var(--navy)" />
              </svg>
              <span style={{ fontSize: '20px', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-heading)' }}>
                SignTime
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '320px', marginBottom: '1.5rem', color: '#9BAAC7' }}>
              Combining unlimited users with workflow automation — empowering digital teams to send, sign, and manage contracts effortlessly.
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

          {/* Product Links */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Product</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><a href="#features" className="f-link">Signer Sequencing</a></li>
              <li><a href="#features" className="f-link">PAdES Signature</a></li>
              <li><a href="#features" className="f-link">SMS Requests</a></li>
              <li><a href="#features" className="f-link">Bulk Sending</a></li>
              <li><a href="#features" className="f-link">Templates</a></li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Solutions</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><a href="#security" className="f-link">Real Estate & Relocation</a></li>
              <li><a href="#security" className="f-link">Education & Schools</a></li>
              <li><a href="#security" className="f-link">Healthcare & Fitness</a></li>
              <li><a href="#security" className="f-link">Sales & Legal Teams</a></li>
            </ul>
          </div>

          {/* Security & Company */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Security</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><a href="#security" className="f-link">ESIGN & UETA Compliance</a></li>
              <li><a href="#security" className="f-link">Audit Trails</a></li>
              <li><a href="#security" className="f-link">Privacy Policy</a></li>
              <li><a href="#security" className="f-link">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1.8rem',
            display: 'flex',
            justify: 'space-between',
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
            <span onClick={onOpenDemo} style={{ color: 'var(--coral)', cursor: 'pointer', fontWeight: 600 }}>Privacy</span>
            <span onClick={onOpenDemo} style={{ color: 'var(--coral)', cursor: 'pointer', fontWeight: 600 }}>Security</span>
            <span onClick={onOpenDemo} style={{ color: 'var(--coral)', cursor: 'pointer', fontWeight: 600 }}>Contact Us</span>
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
