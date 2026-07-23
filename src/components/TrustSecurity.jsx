import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, FileText, KeyRound, UserCheck, MailCheck, ArrowRight } from 'lucide-react';
import ComplianceGrid from './ComplianceGrid';

const securityItems = [
  { icon: <ShieldCheck size={32} color="#fff" />, bg: 'var(--navy)', title: 'ESIGN & UETA Compliant' },
  { icon: <Lock size={32} color="#fff" />, bg: 'var(--coral)', title: 'Multi-Factor Authentication' },
  { icon: <FileText size={32} color="#fff" />, bg: 'var(--navy)', title: 'Full Audit Trail' },
  { icon: <KeyRound size={32} color="#fff" />, bg: 'var(--coral)', title: 'Encrypted In Transit & At Rest' },
  { icon: <UserCheck size={32} color="#fff" />, bg: 'var(--navy)', title: 'Role-Based Access Controls' },
  { icon: <MailCheck size={32} color="#fff" />, bg: 'var(--coral)', title: 'Anti-Phishing Mail Routing' },
];

export default function TrustSecurity() {
  return (
    <section id="security" style={{ background: 'var(--sky)', padding: '5rem 0', position: 'relative' }}>
      <div className="container">

        {/* Header Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '40px', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '640px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1.2rem', lineHeight: 1.15 }}>
              Safe, secure, and<br />legally binding
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--slate)', margin: 0 }}>
              SignTime signatures comply with the U.S. ESIGN Act and state UETA statutes. Every signature is protected by multi-factor authentication, encrypted in transit and at rest, and backed by a complete, timestamped audit trail.
            </p>
          </div>

          <Link
            to="/security"
            style={{
              fontSize: '15px',
              fontWeight: 700,
              color: 'var(--navy)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              whiteSpace: 'nowrap',
              textDecoration: 'none',
            }}
          >
            Security & compliance specs <ArrowRight size={18} color="var(--navy)" />
          </Link>
        </div>

        {/* Security Badge Marquee */}
        <ComplianceGrid items={securityItems} />

        <div style={{ textAlign: 'center', fontSize: '12px', color: 'var(--slate)', marginTop: '2.5rem' }}>
          Reflects capabilities described by SignTime today — replace with formal certification marks (SOC 2, ISO 27001, etc.) once verified and audited.
        </div>

      </div>
    </section>
  );
}
