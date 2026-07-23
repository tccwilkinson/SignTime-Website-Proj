import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';
import TodoFlag from '../components/TodoFlag';
import CostComparisonSlider from '../components/CostComparisonSlider';

const includedInEveryPlan = [
  'Unlimited users',
  'Multi-format uploads (PDF, Word, Excel, PowerPoint)',
  'Any-order and sequential signing',
  'Multi-party signing',
  'Handwritten signatures',
  'Mobile signing',
  'Document search & audit trails',
  'Two-factor authentication',
];

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'No time limits, no credit card required. Includes up to 10 free signature sends to get your team started.',
    cta: { label: 'Get Started', kind: 'demo' },
    highlight: false,
    features: [
      'Up to 10 signature sends',
      'Unlimited users',
      'Reusable templates',
      'Mobile signing',
    ],
  },
  {
    name: 'Entry',
    price: <TodoFlag>confirm US pricing with Jim — placeholder $59/mo</TodoFlag>,
    period: 'per month, billed annually',
    description: 'Cost-effective e-signatures for small and mid-sized teams — unlimited users, unlimited sends.',
    cta: { label: 'Get Started', kind: 'demo' },
    highlight: true,
    features: [
      'Unlimited signature sends',
      'Unlimited users',
      'Bulk CSV sending',
      'Email reminders & document revocation',
      'Audit trails & MFA',
    ],
  },
  {
    name: 'Growth',
    price: <TodoFlag>confirm US pricing with Jim — placeholder $199/mo</TodoFlag>,
    period: 'per month, billed annually',
    description: 'Advanced document management and secure e-signatures for scaling businesses.',
    cta: { label: 'Get Started', kind: 'demo' },
    highlight: false,
    features: [
      'Everything in Entry',
      'Internal approval workflows',
      'Custom branding',
      'Role-based permissions',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact for pricing',
    description: 'Built for complex, high-volume e-signature workflows and custom internal integrations. Contact our sales team for a tailored proposal.',
    cta: { label: 'Contact Sales', kind: 'contact' },
    highlight: false,
    features: [
      'Everything in Growth',
      'Full Web API access',
      'Salesforce & Google Drive integration',
      'Dedicated onboarding',
    ],
  },
];

function TierCard({ tier, onOpenDemo }) {
  return (
    <div
      className="hover-card"
      style={{
        background: tier.highlight ? 'var(--navy)' : '#fff',
        border: tier.highlight ? '1px solid var(--navy)' : '1px solid var(--line)',
        borderRadius: '16px',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {tier.highlight && (
        <div
          style={{
            position: 'absolute',
            top: '-14px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--coral)',
            color: '#fff',
            fontSize: '0.75rem',
            fontWeight: 700,
            padding: '4px 14px',
            borderRadius: 'var(--radius-full)',
          }}
        >
          Most Popular
        </div>
      )}

      <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: tier.highlight ? '#fff' : 'var(--navy)', marginBottom: '0.6rem' }}>
        {tier.name}
      </h3>

      <div style={{ marginBottom: '0.8rem' }}>
        <span style={{ fontSize: '2rem', fontWeight: 800, color: tier.highlight ? '#fff' : 'var(--navy)' }}>
          {tier.price}
        </span>
      </div>
      <div style={{ fontSize: '0.8rem', color: tier.highlight ? '#9BAAC7' : 'var(--slate)', marginBottom: '1.2rem' }}>
        {tier.period}
      </div>

      <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: tier.highlight ? '#B7C0D6' : 'var(--slate)', marginBottom: '1.5rem', minHeight: '66px' }}>
        {tier.description}
      </p>

      {tier.cta.kind === 'demo' ? (
        <button
          onClick={onOpenDemo}
          className={tier.highlight ? 'btn btn-coral' : 'btn btn-outline-navy'}
          style={{ width: '100%', padding: '12px', marginBottom: '1.5rem', ...(tier.highlight ? {} : {}) }}
        >
          {tier.cta.label}
        </button>
      ) : (
        <Link
          to="/contact"
          className="btn btn-outline-navy"
          style={{ width: '100%', padding: '12px', marginBottom: '1.5rem', textAlign: 'center' }}
        >
          {tier.cta.label}
        </Link>
      )}

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {tier.features.map((f) => (
          <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: tier.highlight ? '#fff' : 'var(--ink)' }}>
            <Check size={16} color={tier.highlight ? 'var(--coral)' : 'var(--emerald)'} style={{ flexShrink: 0, marginTop: '2px' }} />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Pricing() {
  const { open } = useDemoModal();

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'radial-gradient(circle at 50% -10%, #DCEAFC 0%, #fff 55%)', padding: '4.5rem 0 3rem' }}>
        <div className="container" style={{ maxWidth: '760px', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
            Transparent Pricing for E-Signatures & Document Workflows
          </h1>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.6, color: 'var(--slate)' }}>
            Scalable solutions with unlimited users for small businesses, growing teams, and enterprise organizations. Start free and upgrade as you grow.
          </p>
        </div>
      </section>

      {/* Flat-price reinforcement / disclaimer */}
      <section style={{ background: 'var(--sky)', padding: '1.2rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--navy)', margin: 0 }}>
            Every plan below includes <strong>unlimited users</strong> — no per-seat upcharges, ever. All prices are in USD.{' '}
            <TodoFlag>final pricing pending confirmation with Jim — figures marked below are planning placeholders</TodoFlag>
          </p>
        </div>
      </section>

      {/* Tier grid */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
              alignItems: 'stretch',
              marginBottom: '3rem',
            }}
          >
            {tiers.map((tier) => (
              <TierCard key={tier.name} tier={tier} onOpenDemo={open} />
            ))}
          </div>

          <div
            style={{
              maxWidth: '760px',
              margin: '0 auto',
              textAlign: 'center',
              borderTop: '1px solid var(--line)',
              paddingTop: '2rem',
            }}
          >
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              Included in every plan
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px 20px' }}>
              {includedInEveryPlan.map((f) => (
                <span key={f} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--ink)' }}>
                  <Check size={14} color="var(--emerald)" /> {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost comparison slider */}
      <section style={{ padding: '1rem 0 4.5rem', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <CostComparisonSlider />
        </div>
      </section>

      {/* Legal / compliance reassurance */}
      <section style={{ background: 'var(--navy)', padding: '3rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '620px' }}>
          <p style={{ color: '#fff', fontSize: '1rem', lineHeight: 1.6, marginBottom: '0.5rem' }}>
            Every plan includes <strong>UETA &amp; ESIGN Act compliant audit trails</strong>, bulk document digitization, and secure cloud archiving.
          </p>
          <Link to="/security" style={{ color: 'var(--coral)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
            See our full security & compliance specs →
          </Link>
        </div>
      </section>

      {/* Closing CTA */}
      <section style={{ background: '#fff', padding: '4.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem' }}>
            One flat price. However many people need it.
          </h2>
          <p style={{ color: 'var(--slate)', fontSize: '1.05rem', marginBottom: '2rem' }}>
            No credit card required to start. Cancel anytime.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={open} className="btn btn-coral" style={{ padding: '16px 32px', fontSize: '15px' }}>
              Start Free Trial — No Credit Card Required <ArrowRight size={18} />
            </button>
            <Link to="/contact" className="btn btn-outline-navy" style={{ padding: '16px 32px', fontSize: '15px' }}>
              Book a 15-Minute Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
