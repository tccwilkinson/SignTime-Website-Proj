import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Lock, FileText, KeyRound, UserCheck, MailCheck, Server, CheckCircle2 } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';
import ComplianceGrid from '../components/ComplianceGrid';
import TodoFlag from '../components/TodoFlag';

const coreProtections = [
  { icon: <ShieldCheck size={32} color="#fff" />, bg: 'var(--coral)', title: 'ESIGN & UETA Compliant' },
  { icon: <Lock size={32} color="#fff" />, bg: 'var(--coral)', title: 'Multi-Factor Authentication' },
  { icon: <FileText size={32} color="#fff" />, bg: 'var(--coral)', title: 'Full Audit Trail' },
  { icon: <KeyRound size={32} color="#fff" />, bg: 'var(--coral)', title: 'Encrypted In Transit & At Rest' },
  { icon: <UserCheck size={32} color="#fff" />, bg: 'var(--coral)', title: 'Role-Based Access Controls' },
  { icon: <MailCheck size={32} color="#fff" />, bg: 'var(--coral)', title: 'Anti-Phishing Mail Routing' },
];

const detailSections = [
  {
    icon: <ShieldCheck size={22} color="var(--navy)" />,
    title: 'Legally binding under U.S. law',
    desc: 'Every signature complies with the federal ESIGN Act and state UETA statutes, backed by digital certificates and long-term validation — so agreements hold up in court, not just in your inbox.',
  },
  {
    icon: <Lock size={22} color="var(--coral)" />,
    title: 'Multi-factor authentication',
    desc: 'Signers and account users verify with a second factor before a document can be completed or accessed, closing the door on credential-based account takeovers.',
  },
  {
    icon: <FileText size={22} color="var(--navy)" />,
    title: 'Full, timestamped audit trail',
    desc: 'Every action — sent, viewed, signed, completed — is recorded with a certified timestamp and compiled into a downloadable certificate for legal review.',
  },
  {
    icon: <KeyRound size={22} color="var(--coral)" />,
    title: 'Encrypted in transit and at rest',
    desc: 'Documents are encrypted end-to-end, both while moving between signers and while stored in your account, so a document is never readable outside an authorized session.',
  },
  {
    icon: <UserCheck size={22} color="var(--navy)" />,
    title: 'Role-based access controls',
    desc: 'Split access by team, department, or location, and restrict document visibility within a team based on each member’s role — so people only see what they need to.',
  },
  {
    icon: <Server size={22} color="var(--coral)" />,
    title: 'Built on AWS infrastructure',
    desc: 'SignTime runs on Amazon Web Services, inheriting the physical security, redundancy, and uptime guarantees of enterprise-grade cloud infrastructure.',
  },
];

const currentCerts = [
  { name: 'ESIGN Act & UETA', desc: 'U.S. federal and state laws that make electronic signatures legally binding.' },
];

const inProgressCerts = [
  { name: 'SOC 2 Type II', desc: "Audit confirming a company's security controls actually work." },
  { name: 'ISO/IEC 27001', desc: 'International certification confirming a formal security management system.' },
  { name: 'HIPAA / BAA', desc: 'Compliance with U.S. healthcare privacy law and signed business associate agreements.' },
  { name: 'CCPA / CPRA', desc: 'Enhanced data protection for California residents.' },
  { name: 'PCI DSS', desc: 'Safeguards for credit and debit card data in every monetary transaction.' },
  { name: 'EU–US Data Privacy Framework', desc: 'Required for handling documentation that moves between the EU and U.S.' },
];

export default function Security() {
  const { open } = useDemoModal();

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'radial-gradient(circle at 50% -10%, #DCEAFC 0%, #fff 55%)', padding: '4.5rem 0 3rem' }}>
        <div className="container" style={{ maxWidth: '760px', textAlign: 'center' }}>
          <div className="st-subpage-badge" style={{ marginBottom: '1.5rem' }}>
            <span className="badge-sky cute-badge-pulse">Security &amp; Compliance</span>
          </div>
          <h1 className="st-subpage-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
            Safe, secure, and legally binding
          </h1>
          <p className="st-subpage-subhead" style={{ fontSize: '1.15rem', lineHeight: 1.6, color: 'var(--slate)', marginBottom: '2rem' }}>
            SignTime signatures comply with the U.S. ESIGN Act and state UETA statutes. Every signature is protected by multi-factor authentication, encrypted in transit and at rest, and backed by a complete, timestamped audit trail — for unlimited users, at one flat price.
          </p>
          <div className="st-subpage-subhead" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a href="https://app.signtime.com/register?chosen_plan=Otameshi" className="btn btn-coral" style={{ padding: '16px 32px', fontSize: '15px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              Start Free Trial — No Credit Card Required <ArrowRight size={18} className="hero-cta-arrow" />
            </a>
            <a href="https://support.signtime.com/hc/en-us/requests/new" target="_blank" rel="noreferrer" className="btn btn-outline-navy" style={{ padding: '16px 32px', fontSize: '15px', textDecoration: 'none' }}>
              Contact Us Today
            </a>
          </div>
        </div>
      </section>

      {/* Core protections marquee */}
      <section style={{ background: 'var(--navy)', padding: '3.5rem 0' }}>
        <div className="container">
          <ComplianceGrid items={coreProtections} />
        </div>
      </section>

      {/* Detail grid */}
      <section style={{ padding: '4.5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem' }}>
              How SignTime protects every signature
            </h2>
            <p style={{ color: 'var(--slate)', fontSize: '1.05rem' }}>
              Every plan — including Free — includes the same security foundation. There's no "security tier" you have to upgrade into.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {detailSections.map((item) => (
              <div
                key={item.title}
                className="hover-card"
                style={{ border: '1px solid var(--line)', borderRadius: '14px', padding: '28px', background: '#fff' }}
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
                    marginBottom: '18px',
                  }}
                >
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--slate)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications: Current vs In Progress */}
      <section style={{ background: 'var(--sky)', padding: '4.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem' }}>
              Certifications
            </h2>
            <p style={{ color: 'var(--slate)', fontSize: '1.05rem' }}>
              We don't claim marks we haven't earned. Here's exactly where SignTime stands today.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', maxWidth: '1000px', margin: '0 auto' }}>
            {/* Current */}
            <div style={{ background: '#fff', border: '1px solid var(--emerald)', borderRadius: '16px', padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
                <CheckCircle2 size={22} color="var(--emerald)" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy)', margin: 0 }}>Current</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {currentCerts.map((c) => (
                  <li key={c.name}>
                    <div style={{ fontWeight: 700, color: 'var(--ink)', marginBottom: '4px' }}>{c.name}</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--slate)', lineHeight: 1.5 }}>{c.desc}</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* In Progress */}
            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '16px', padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
                <ShieldCheck size={22} color="var(--coral)" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy)', margin: 0 }}>In Progress</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {inProgressCerts.map((c) => (
                  <li key={c.name}>
                    <div style={{ fontWeight: 700, color: 'var(--ink)', marginBottom: '4px' }}>{c.name}</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--slate)', lineHeight: 1.5 }}>{c.desc}</div>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '1.2rem' }}>
                <TodoFlag>none of these certifications are held yet — confirm target dates with Jim before implying any are complete</TodoFlag>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section style={{ background: 'var(--navy)', padding: '4.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Security shouldn't be a reason to pay more per seat
          </h2>
          <p style={{ color: '#9BAAC7', fontSize: '1.05rem', marginBottom: '2rem' }}>
            Every SignTime plan — unlimited users, one flat price — includes the full security foundation above.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a href="https://app.signtime.com/register?chosen_plan=Otameshi" className="btn btn-coral" style={{ padding: '16px 32px', fontSize: '15px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              Start Free Trial — No Credit Card Required <ArrowRight size={18} />
            </a>
            <a href="https://support.signtime.com/hc/en-us/requests/new" target="_blank" rel="noreferrer" className="btn btn-outline-navy" style={{ padding: '16px 32px', fontSize: '15px', color: '#fff', borderColor: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
