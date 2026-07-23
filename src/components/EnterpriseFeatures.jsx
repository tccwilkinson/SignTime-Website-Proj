import React from 'react';
import { Users, FileCode, Scan, ShieldCheck, Code2, Send, ArrowRight } from 'lucide-react';

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
      title: 'ScanTime Integration',
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
    <section id="features" style={{ padding: '5.5rem 0', background: '#fff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem' }}>
            Built for the Modern U.S. Enterprise
          </h2>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.6, color: 'var(--slate)' }}>
            We tore down the limitations of legacy e-signature tools to build a platform that scales seamlessly with your business workflow.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="hover-card"
              style={{
                border: '1px solid var(--line)',
                borderRadius: '14px',
                padding: '28px',
                background: '#fff'
              }}
            >
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
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button onClick={onOpenDemo} className="btn btn-coral" style={{ padding: '14px 32px', fontSize: '15px' }}>
            See All Plans & Specs <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
