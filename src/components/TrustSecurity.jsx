import React from 'react';
import { ShieldCheck, Lock, FileText, KeyRound, UserCheck, MailCheck, ArrowRight } from 'lucide-react';
import ComplianceGrid from './ComplianceGrid';
import Reveal from './Reveal';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Button from './ui/Button';
import './TrustSecurity.css';

const securityItems = [
  { icon: <ShieldCheck size={32} color="#fff" />, bg: 'var(--navy-light)', title: 'ESIGN & UETA Compliant' },
  { icon: <Lock size={32} color="#fff" />, bg: 'var(--navy-light)', title: 'Multi-Factor Authentication' },
  { icon: <FileText size={32} color="#fff" />, bg: 'var(--navy-light)', title: 'Full Audit Trail' },
  { icon: <KeyRound size={32} color="#fff" />, bg: 'var(--navy-light)', title: 'Encrypted In Transit & At Rest' },
  { icon: <UserCheck size={32} color="#fff" />, bg: 'var(--navy-light)', title: 'Role-Based Access Controls' },
  { icon: <MailCheck size={32} color="#fff" />, bg: 'var(--navy-light)', title: 'Anti-Phishing Mail Routing' },
];

export default function TrustSecurity() {
  return (
    <Section id="security" variant="panel">
      <Reveal as="div" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '40px', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
        <SectionHeader
          align="left"
          eyebrow="Security & Compliance"
          heading="Safe, secure, and"
          accent="legally binding"
          accentBreak
          subhead="SignTime signatures comply with the U.S. ESIGN Act and state UETA statutes. Every signature is protected by multi-factor authentication, encrypted in transit and at rest, and backed by a complete, timestamped audit trail."
          style={{ margin: 0 }}
        />

        <Button variant="secondary" to="/security">
          Security & compliance specs <ArrowRight size={18} />
        </Button>
      </Reveal>

      {/* Security Badge Marquee */}
      <ComplianceGrid items={securityItems} />

      <div style={{ textAlign: 'center', fontSize: '12px', color: 'var(--text-inverse-muted)', marginTop: '2.5rem' }}>
        Reflects capabilities described by SignTime today — replace with formal certification marks (SOC 2, ISO 27001, etc.) once verified and audited.
      </div>
    </Section>
  );
}
