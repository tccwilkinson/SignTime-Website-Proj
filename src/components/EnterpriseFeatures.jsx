import React from 'react';
import { Users, FileCode, Scan, ShieldCheck, Code2, Send, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';
import Button from './ui/Button';

export default function EnterpriseFeatures({ onOpenDemo }) {
  const cards = [
    {
      icon: <Users size={22} color="var(--navy)" />,
      color: 'var(--navy)',
      title: 'Unlimited Users, Period.',
      desc: 'Eliminate the "per-seat" pricing trap. Add your entire sales, HR, and legal teams without your invoice increasing a single cent.'
    },
    {
      icon: <FileCode size={22} color="var(--coral)" />,
      color: 'var(--coral)',
      title: 'Native Office Support',
      desc: 'Stop converting everything to PDF. SignTime natively supports .xlsx, .docx, and other primary office files for frictionless document preparation.'
    },
    {
      icon: <Scan size={22} color="var(--navy)" />,
      color: 'var(--navy)',
      title: 'SignTime with ST Integration',
      desc: 'Seamlessly integrate physical documents into your digital workflow. Scan, digitize, and manage contracts in one centralized ecosystem.'
    },
    {
      icon: <ShieldCheck size={22} color="var(--coral)" />,
      color: 'var(--coral)',
      title: 'Enterprise-Grade Security',
      desc: 'Sleep easy with mandatory Two-Factor Authentication (2FA), advanced anti-phishing protocols, and court-admissible, tamper-evident audit trails.'
    },
    {
      icon: <Code2 size={22} color="var(--navy)" />,
      color: 'var(--navy)',
      title: 'Salesforce & Web API',
      desc: 'Connect SignTime directly to your tech stack. Trigger contracts via our native Salesforce integration or leverage our robust REST Web-API.'
    },
    {
      icon: <Send size={22} color="var(--coral)" />,
      color: 'var(--coral)',
      title: 'SMS & Bulk CSV Sending',
      desc: 'Reach signers where they are. Deliver contracts instantly via SMS, and dispatch thousands of documents simultaneously using bulk CSV uploads.'
    }
  ];

  return (
    <Section id="features" variant="panel">
      <Reveal>
        <SectionHeader
          eyebrow="Enterprise Platform"
          heading="Built for the Modern"
          accent="U.S. Enterprise"
          subhead="We tore down the limitations of legacy e-signature tools to build a platform that scales seamlessly with your business workflow."
          style={{ maxWidth: '680px', margin: '0 auto 3.5rem auto' }}
        />
      </Reveal>

      {/* 6-Card Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}
      >
        {cards.map((card, idx) => (
          <Reveal key={idx} delay={(idx % 3) * 90}>
            <Card>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'var(--sky)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px'
                }}
              >
                {card.icon}
              </div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '10px' }}>
                {card.title}
              </h3>

              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--slate)' }}>
                {card.desc}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Button variant="primary" to="/pricing">
          See All Plans &amp; Specs <ArrowRight size={16} />
        </Button>
      </div>
    </Section>
  );
}
