import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, FileText, Send, Smartphone, GitPullRequest, ShieldCheck, ArrowRight } from 'lucide-react';
import FlipCardCarousel from './FlipCardCarousel';

export default function InteractiveCarousel({ onOpenDemo }) {
  const cards = [
    {
      id: '2fa',
      title: 'Two-Factor Authentication',
      bgCollapsed: '#0D1730',
      textColor: '#fff',
      border: '1px solid rgba(255,255,255,0.15)',
      icon: <Lock size={36} color="#fff" />,
      desc: 'Every signer verifies with a second factor before a document can be completed — no extra software required, no signature left unverified.',
      linkText: 'About security ›',
      onLinkClick: onOpenDemo
    },
    {
      id: 'templates',
      title: 'Templates',
      bgCollapsed: 'var(--coral)',
      textColor: '#fff',
      border: 'none',
      icon: <FileText size={36} color="#fff" />,
      desc: 'Create commonly used documents as reusable templates and request signatures in as little as one minute.',
      linkText: 'Learn about Templates ›',
      onLinkClick: onOpenDemo
    },
    {
      id: 'bulksend',
      title: 'Bulk Sending Documents',
      bgCollapsed: 'var(--sky)',
      textColor: 'var(--navy)',
      border: 'none',
      icon: <Send size={36} color="var(--navy)" />,
      desc: 'Send a document to hundreds of signers at once with a single CSV upload — no manual entry required.',
      linkText: 'Learn about Bulk Sending ›',
      onLinkClick: onOpenDemo
    },
    {
      id: 'sms',
      title: 'Signature Requests via SMS',
      bgCollapsed: '#0D1730',
      textColor: '#fff',
      border: '1px solid rgba(255,255,255,0.15)',
      icon: <Smartphone size={36} color="#fff" />,
      desc: 'Send signature requests by text instead of email — reach signers wherever they are most likely to respond.',
      linkText: 'Learn about SMS Requests ›',
      onLinkClick: onOpenDemo
    },
    {
      id: 'workflows',
      title: 'Internal Approval Workflows',
      bgCollapsed: 'var(--coral)',
      textColor: '#fff',
      border: 'none',
      icon: <GitPullRequest size={36} color="#fff" />,
      desc: 'Route a document for internal sign-off before it goes out to signers. Ensure your legal team approves every contract version automatically.',
      linkText: 'Learn about Workflows ›',
      onLinkClick: onOpenDemo
    },
    {
      id: 'guarantor',
      title: 'Guarantor Agreements',
      bgCollapsed: 'var(--sky)',
      textColor: 'var(--navy)',
      border: 'none',
      icon: <ShieldCheck size={36} color="var(--navy)" />,
      desc: 'Support complex multi-party agreements requiring co-signers, guarantors, or legal witness sign-offs.',
      linkText: 'Learn about Guarantor Feature ›',
      onLinkClick: onOpenDemo
    }
  ];

  return (
    <section id="carousel" style={{ position: 'relative', background: 'var(--navy)', padding: '64px 0 56px' }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '24px', marginBottom: '36px', flexWrap: 'wrap' }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, lineHeight: 1.2, margin: 0, maxWidth: '640px' }}>
            Transforming the entire contract and signing process with SignTime
          </h2>

          <Link
            to="/features"
            style={{
              color: '#fff',
              fontSize: '15px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              whiteSpace: 'nowrap',
              textDecoration: 'none'
            }}
          >
            See All Features <ArrowRight size={16} />
          </Link>
        </div>

        <FlipCardCarousel items={cards} />

      </div>
    </section>
  );
}
