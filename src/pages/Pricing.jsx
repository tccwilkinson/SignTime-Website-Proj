import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';
import CostComparisonSlider from '../components/CostComparisonSlider';

const includedInEveryPlan = [
  'Unlimited users',
  'Multi-format uploads (PDF, Word, Excel, PowerPoint)',
  'Any-order & sequential signing',
  'Multi-party signing',
  'Handwritten signatures',
  'Mobile signing (iPhone/Android)',
  'Document search & audit trails',
  'Multi-Factor Login Authentication',
];

// Helper icon components
const CheckBadge = ({ footnote }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '50%', background: '#22B8E6', color: '#fff', fontSize: '11px', fontWeight: 800 }}>
      ✓
    </span>
    {footnote && <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--slate)' }}>{footnote}</span>}
  </span>
);

const CrossBadge = () => (
  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '50%', background: '#FFA3A3', color: '#fff', fontSize: '11px', fontWeight: 800 }}>
    ×
  </span>
);

export default function Pricing() {
  const { open } = useDemoModal();
  const [billingCycle, setBillingCycle] = useState('annual'); // 'annual' | 'monthly'

  // Section toggle state
  const [sectionsOpen, setSectionsOpen] = useState({
    forSigners: true,
    security: false,
    customBranding: false,
    systemIntegration: false,
    scannerStorage: false,
  });

  const toggleSection = (key) => {
    setSectionsOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const setAllSections = (isOpen) => {
    setSectionsOpen({
      forSigners: isOpen,
      security: isOpen,
      customBranding: isOpen,
      systemIntegration: isOpen,
      scannerStorage: isOpen,
    });
  };

  // Extra signature send steps per tier (+1 step = +50 sends & +5,000 JPY / +$33 USD per month)
  const [extraSteps, setExtraSteps] = useState({
    SignTime: 0,
    'Prime Start': 0,
    Prime: 0,
  });

  const handleAddStep = (tierName) => {
    setExtraSteps((prev) => ({
      ...prev,
      [tierName]: prev[tierName] + 1,
    }));
  };

  const handleSubStep = (tierName) => {
    setExtraSteps((prev) => ({
      ...prev,
      [tierName]: Math.max(0, prev[tierName] - 1),
    }));
  };

  const tiers = [
    {
      name: 'SignTime',
      basePriceAnnual: 86,
      basePriceMonthly: 59,
      periodAnnual: '$936 / year',
      periodMonthly: 'billed monthly',
      description: 'Cost-effective e-signature for small and mid-sized teams',
      cta: { label: 'Start Free Trial', kind: 'demo' },
      highlight: true,
      badge: 'Most Popular',
      users: 'Unlimited',
      features: [
        'Unlimited users',
        'Sign using iPhone or Android',
        'Multi-factor login authentication',
        'Detailed audit trail & document search',
        'Reusable templates',
      ],
    },
    {
      name: 'Prime Start',
      basePriceAnnual: 167,
      basePriceMonthly: 199,
      periodAnnual: 'per month, billed annually',
      periodMonthly: 'per month, billed monthly',
      description: 'Easy, cost-effective e-signature and document management for growing teams',
      cta: { label: 'Contact Sales', kind: 'contact' },
      highlight: false,
      users: 'Unlimited',
      features: [
        'Everything in SignTime',
        'In-person signing & delegation of authority',
        'Internal workflows & workflow per template',
        'Third party additional signers & multi-departments',
        'IP restrictions, MFA for signers & anti-phishing',
        'Corporate logo, email & domain branding',
        'File import with timestamp',
      ],
    },
    {
      name: 'Prime',
      basePriceAnnual: 369,
      basePriceMonthly: 429,
      periodAnnual: 'per month, billed annually',
      periodMonthly: 'per month, billed monthly',
      description: 'Everything in Prime Start, plus API access for system integration',
      cta: { label: 'Contact Sales', kind: 'contact' },
      highlight: false,
      users: 'Unlimited',
      features: [
        'Everything in Prime Start',
        'Full WEB-API access',
        'Google Drive & Salesforce integrations',
        'Blockchain integration',
        'Dedicated onboarding & 99.99% SLA',
      ],
    },
  ];

  const allOpen = Object.values(sectionsOpen).every(Boolean);

  return (
    <>
      {/* Hero Header (Compact & High Impact) */}
      <section style={{ background: 'radial-gradient(circle at 50% -10%, #DCEAFC 0%, #fff 60%)', padding: '3rem 0 2rem' }}>
        <div className="container" style={{ maxWidth: '760px', textAlign: 'center' }}>
          <h1 className="st-subpage-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.7rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.8rem', letterSpacing: '-0.02em' }}>
            Transparent Pricing for E-Signatures
          </h1>
          <p className="st-subpage-subhead" style={{ fontSize: '1.05rem', lineHeight: 1.5, color: 'var(--slate)', margin: '0 auto 1.5rem', maxWidth: '640px' }}>
            Scalable plans with <strong>unlimited users</strong>. One flat rate with no per-seat fees.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="st-subpage-subhead" style={{ display: 'inline-flex', alignItems: 'center', background: '#EAF2FC', borderRadius: '30px', padding: '4px' }}>
            <button
              onClick={() => setBillingCycle('annual')}
              style={{
                background: billingCycle === 'annual' ? '#3B97D3' : 'transparent',
                color: billingCycle === 'annual' ? '#fff' : 'var(--navy)',
                border: 'none',
                padding: '8px 20px',
                borderRadius: '24px',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Annual (Save 20%)
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              style={{
                background: billingCycle === 'monthly' ? '#3B97D3' : 'transparent',
                color: billingCycle === 'monthly' ? '#fff' : 'var(--navy)',
                border: 'none',
                padding: '8px 20px',
                borderRadius: '24px',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Monthly
            </button>
          </div>
        </div>
      </section>

      {/* Flat-price reinforcement banner */}
      <section style={{ background: 'var(--sky)', padding: '0.8rem 0', borderTop: '1px solid var(--skyline)', borderBottom: '1px solid var(--skyline)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.88rem', color: 'var(--navy)', margin: 0, fontWeight: 600 }}>
            ⚡ All plans include <strong>unlimited users</strong>. Press <strong>+ / -</strong> to scale signature sends (+5,000 yen / +$33 USD / mo).
          </p>
        </div>
      </section>

      {/* Tier Cards Grid (Compact & Impactful) */}
      <section style={{ padding: '2.5rem 0 2rem', background: '#fff' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '20px',
              alignItems: 'stretch',
              marginBottom: '2.5rem',
            }}
          >
            {tiers.map((tier) => {
              const addonUSD = extraSteps[tier.name] * 33;
              const currentPrice = billingCycle === 'annual' ? tier.basePriceAnnual + addonUSD : tier.basePriceMonthly + addonUSD;
              const sendsCount = 50 + extraSteps[tier.name] * 50;

              return (
                <div
                  key={tier.name}
                  className="hover-card"
                  style={{
                    background: tier.highlight ? 'var(--navy)' : '#fff',
                    border: tier.highlight ? '2px solid var(--navy)' : '1px solid var(--line)',
                    borderRadius: '16px',
                    padding: '24px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    boxShadow: tier.highlight ? 'var(--shadow-lg)' : 'var(--shadow-subtle)',
                  }}
                >
                  {tier.badge && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-12px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'var(--coral)',
                        color: '#fff',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '3px 14px',
                        borderRadius: 'var(--radius-full)',
                        boxShadow: 'var(--shadow-coral)',
                      }}
                    >
                      {tier.badge}
                    </div>
                  )}

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: tier.highlight ? '#fff' : 'var(--navy)', marginBottom: '0.3rem', textAlign: 'center' }}>
                    {tier.name}
                  </h3>

                  <p style={{ fontSize: '0.85rem', lineHeight: 1.4, color: tier.highlight ? '#B7C0D6' : 'var(--slate)', marginBottom: '1rem', textAlign: 'center', minHeight: '36px' }}>
                    {tier.description}
                  </p>

                  <div style={{ textAlign: 'center', marginBottom: '0.2rem' }}>
                    <span style={{ fontSize: '2.2rem', fontWeight: 800, color: tier.highlight ? '#fff' : 'var(--navy)' }}>
                      {tier.name === 'SignTime' ? `$${currentPrice}` : `from $${currentPrice}`}
                    </span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: tier.highlight ? '#9BAAC7' : 'var(--slate)' }}>
                      /mo
                    </span>
                  </div>

                  <div style={{ fontSize: '0.78rem', color: tier.highlight ? '#9BAAC7' : 'var(--slate)', marginBottom: '1rem', textAlign: 'center' }}>
                    {billingCycle === 'annual' ? tier.periodAnnual : tier.periodMonthly}
                    {extraSteps[tier.name] > 0 && (
                      <div style={{ color: tier.highlight ? '#34D399' : 'var(--emerald)', fontWeight: 700, marginTop: '2px' }}>
                        +{extraSteps[tier.name] * 50} sends (+${addonUSD}/mo)
                      </div>
                    )}
                  </div>

                  {/* Pressable +/- Signature Sends Control */}
                  <div
                    style={{
                      background: tier.highlight ? 'rgba(255,255,255,0.06)' : '#F8FAFC',
                      border: tier.highlight ? '1px solid rgba(255,255,255,0.12)' : '1px solid var(--line)',
                      borderRadius: '10px',
                      padding: '8px 12px',
                      marginBottom: '1.2rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: tier.highlight ? '#fff' : 'var(--navy)' }}>
                      Sends:
                    </span>

                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <button
                        onClick={() => handleSubStep(tier.name)}
                        disabled={extraSteps[tier.name] === 0}
                        aria-label={`Decrease sends for ${tier.name}`}
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '5px',
                          border: extraSteps[tier.name] === 0 ? '1px solid #D0E1F0' : '1px solid #3B97D3',
                          background: extraSteps[tier.name] === 0 ? '#EAF2FC' : '#DCEAFC',
                          color: extraSteps[tier.name] === 0 ? '#9BAAC7' : 'var(--navy)',
                          fontWeight: 800,
                          fontSize: '14px',
                          cursor: extraSteps[tier.name] === 0 ? 'not-allowed' : 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        -
                      </button>

                      <span style={{ fontSize: '0.85rem', fontWeight: 800, color: tier.highlight ? '#fff' : 'var(--navy)', minWidth: '24px', textAlign: 'center' }}>
                        {sendsCount}
                      </span>

                      <button
                        onClick={() => handleAddStep(tier.name)}
                        aria-label={`Increase sends for ${tier.name}`}
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '5px',
                          border: 'none',
                          background: '#3B97D3',
                          color: '#fff',
                          fontWeight: 800,
                          fontSize: '14px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 2px 4px rgba(59, 151, 211, 0.3)',
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {tier.cta.kind === 'demo' ? (
                    <a
                      href="https://app.signtime.com/register"
                      className={tier.highlight ? 'btn btn-coral' : 'btn btn-navy'}
                      style={{ width: '100%', padding: '10px', marginBottom: '1.2rem', fontSize: '0.88rem', textDecoration: 'none', textAlign: 'center', display: 'block' }}
                    >
                      {tier.cta.label}
                    </a>
                  ) : (
                    <a
                      href="https://app.spirinc.com/t/HPmpyrOr23Q6FzsvpKMzl/as/xzemB6rMWXD2Ig4tbNUM4/confirm-guest?utm_source=price&utm_medium=spir&utm_campaign=salesforce"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-navy"
                      style={{ width: '100%', padding: '10px', marginBottom: '1.2rem', textAlign: 'center', fontSize: '0.88rem', textDecoration: 'none', display: 'block' }}
                    >
                      {tier.cta.label}
                    </a>
                  )}

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', padding: 0, margin: 0 }}>
                    {tier.features.map((f) => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: tier.highlight ? '#fff' : 'var(--ink)' }}>
                        <Check size={16} color={tier.highlight ? 'var(--coral)' : 'var(--emerald)'} style={{ flexShrink: 0, marginTop: '1px' }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Compact Feature Matrix Table with Expand/Collapse & Footnotes */}
          <div style={{ maxWidth: '960px', margin: '0 auto 2.5rem', overflowX: 'auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '10px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)', margin: 0 }}>
                Feature Matrix & Tier Differences
              </h3>

              <button
                onClick={() => setAllSections(!allOpen)}
                style={{
                  background: '#EAF2FC',
                  color: '#3B97D3',
                  border: 'none',
                  padding: '6px 14px',
                  borderRadius: '16px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <SlidersHorizontal size={14} />
                {allOpen ? 'Collapse All Sections' : 'Expand All Sections'}
              </button>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--line)', background: '#fff' }}>
              <thead>
                <tr style={{ background: '#FAFBFD', borderBottom: '1px solid var(--line)' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.88rem', color: 'var(--navy)', width: '38%' }}>Capabilities</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center', fontSize: '1rem', fontWeight: 800, color: 'var(--navy)', width: '20%' }}>SignTime</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center', fontSize: '1rem', fontWeight: 800, color: 'var(--navy)', width: '20%' }}>Prime Start</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center', fontSize: '1rem', fontWeight: 800, color: 'var(--navy)', width: '20%' }}>Prime</th>
                </tr>
              </thead>
              <tbody>

                {/* Section 1: For Signers */}
                <tr style={{ background: '#EAF2FC', cursor: 'pointer' }} onClick={() => toggleSection('forSigners')}>
                  <td colSpan={4} style={{ padding: '10px 16px', fontWeight: 800, color: 'var(--navy)', fontSize: '0.9rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span>For Signers</span>
                      <ChevronDown size={16} style={{ transform: sectionsOpen.forSigners ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s' }} />
                    </div>
                  </td>
                </tr>

                {sectionsOpen.forSigners && (
                  <>
                    <tr style={{ borderBottom: '1px solid var(--line)', background: '#fff' }}>
                      <td style={{ padding: '10px 16px', fontWeight: 600, fontSize: '0.85rem', color: 'var(--ink)' }}>
                        Free Signature Sends
                      </td>
                      {tiers.map((tier) => {
                        const sendsCount = 50 + extraSteps[tier.name] * 50;
                        return (
                          <td key={tier.name} style={{ padding: '10px 16px', textAlign: 'center' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                              <button
                                onClick={() => handleSubStep(tier.name)}
                                disabled={extraSteps[tier.name] === 0}
                                style={{
                                  width: '22px',
                                  height: '22px',
                                  borderRadius: '4px',
                                  border: extraSteps[tier.name] === 0 ? '1px solid #D0E1F0' : '1px solid #3B97D3',
                                  background: extraSteps[tier.name] === 0 ? '#EAF2FC' : '#DCEAFC',
                                  color: extraSteps[tier.name] === 0 ? '#9BAAC7' : 'var(--navy)',
                                  fontWeight: 800,
                                  fontSize: '13px',
                                  cursor: extraSteps[tier.name] === 0 ? 'not-allowed' : 'pointer',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                -
                              </button>

                              <div style={{ fontSize: '0.82rem', color: 'var(--navy)', fontWeight: 700, whiteSpace: 'nowrap' }}>
                                {sendsCount} <span style={{ fontSize: '0.72rem', color: 'var(--slate)', fontWeight: 500 }}>/mo</span>
                              </div>

                              <button
                                onClick={() => handleAddStep(tier.name)}
                                style={{
                                  width: '22px',
                                  height: '22px',
                                  borderRadius: '4px',
                                  border: 'none',
                                  background: '#3B97D3',
                                  color: '#fff',
                                  fontWeight: 800,
                                  fontSize: '13px',
                                  cursor: 'pointer',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                +
                              </button>
                            </div>
                          </td>
                        );
                      })}
                    </tr>

                    <tr style={{ borderBottom: '1px solid var(--line)' }}>
                      <td style={{ padding: '10px 16px', fontWeight: 600, fontSize: '0.85rem', color: 'var(--ink)' }}>In-Person Signing</td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CrossBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge footnote="**" /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge footnote="**" /></td>
                    </tr>

                    <tr style={{ borderBottom: '1px solid var(--line)' }}>
                      <td style={{ padding: '10px 16px', fontWeight: 600, fontSize: '0.85rem', color: 'var(--ink)' }}>Delegation of Signature Authority</td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CrossBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                    </tr>

                    <tr style={{ borderBottom: '1px solid var(--line)' }}>
                      <td style={{ padding: '10px 16px', fontWeight: 600, fontSize: '0.85rem', color: 'var(--ink)' }}>Sign Using iPhone or Android Phone</td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                    </tr>

                    <tr style={{ borderBottom: '1px solid var(--line)' }}>
                      <td style={{ padding: '10px 16px', fontWeight: 600, fontSize: '0.85rem', color: 'var(--ink)' }}>Third Party Additional Signer</td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CrossBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                    </tr>

                    <tr style={{ borderBottom: '1px solid var(--line)' }}>
                      <td style={{ padding: '10px 16px', fontWeight: 600, fontSize: '0.85rem', color: 'var(--ink)' }}>One Company, Multiple Departments</td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CrossBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge footnote="**" /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                    </tr>

                    <tr style={{ borderBottom: '1px solid var(--line)' }}>
                      <td style={{ padding: '10px 16px', fontWeight: 600, fontSize: '0.85rem', color: 'var(--ink)' }}>Internal Workflows</td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CrossBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                    </tr>

                    <tr style={{ borderBottom: '1px solid var(--line)' }}>
                      <td style={{ padding: '10px 16px', fontWeight: 600, fontSize: '0.85rem', color: 'var(--ink)' }}>Workflow Settings per Template</td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CrossBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                    </tr>
                  </>
                )}

                {/* Section 2: Security */}
                <tr style={{ background: '#EAF2FC', cursor: 'pointer' }} onClick={() => toggleSection('security')}>
                  <td colSpan={4} style={{ padding: '10px 16px', fontWeight: 800, color: 'var(--navy)', fontSize: '0.9rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span>Security</span>
                      <ChevronDown size={16} style={{ transform: sectionsOpen.security ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s' }} />
                    </div>
                  </td>
                </tr>

                {sectionsOpen.security && (
                  <>
                    <tr style={{ borderBottom: '1px solid var(--line)' }}>
                      <td style={{ padding: '10px 16px', fontWeight: 600, fontSize: '0.85rem', color: 'var(--ink)' }}>IP Address Restrictions</td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CrossBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                    </tr>

                    <tr style={{ borderBottom: '1px solid var(--line)' }}>
                      <td style={{ padding: '10px 16px', fontWeight: 600, fontSize: '0.85rem', color: 'var(--ink)' }}>Multi-Factor Login Authentication</td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                    </tr>

                    <tr style={{ borderBottom: '1px solid var(--line)' }}>
                      <td style={{ padding: '10px 16px', fontWeight: 600, fontSize: '0.85rem', color: 'var(--ink)' }}>Multi-Factor Authentication for Signer</td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CrossBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                    </tr>

                    <tr style={{ borderBottom: '1px solid var(--line)' }}>
                      <td style={{ padding: '10px 16px', fontWeight: 600, fontSize: '0.85rem', color: 'var(--ink)' }}>Anti-Phishing Customization</td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CrossBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                    </tr>

                    <tr style={{ borderBottom: '1px solid var(--line)' }}>
                      <td style={{ padding: '10px 16px', fontWeight: 600, fontSize: '0.85rem', color: 'var(--ink)' }}>Detailed Audit Trail</td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                    </tr>

                    <tr style={{ borderBottom: '1px solid var(--line)' }}>
                      <td style={{ padding: '10px 16px', fontWeight: 600, fontSize: '0.85rem', color: 'var(--ink)' }}>Identity Verification / Card Support*</td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CrossBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                    </tr>

                    <tr style={{ borderBottom: '1px solid var(--line)' }}>
                      <td style={{ padding: '10px 16px', fontWeight: 600, fontSize: '0.85rem', color: 'var(--ink)' }}>Blockchain integration</td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CrossBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CrossBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge footnote="**" /></td>
                    </tr>
                  </>
                )}

                {/* Section 3: Custom Branding */}
                <tr style={{ background: '#EAF2FC', cursor: 'pointer' }} onClick={() => toggleSection('customBranding')}>
                  <td colSpan={4} style={{ padding: '10px 16px', fontWeight: 800, color: 'var(--navy)', fontSize: '0.9rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span>Custom Branding</span>
                      <ChevronDown size={16} style={{ transform: sectionsOpen.customBranding ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s' }} />
                    </div>
                  </td>
                </tr>

                {sectionsOpen.customBranding && (
                  <>
                    <tr style={{ borderBottom: '1px solid var(--line)' }}>
                      <td style={{ padding: '10px 16px', fontWeight: 600, fontSize: '0.85rem', color: 'var(--ink)' }}>Corporate Logo</td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CrossBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                    </tr>

                    <tr style={{ borderBottom: '1px solid var(--line)' }}>
                      <td style={{ padding: '10px 16px', fontWeight: 600, fontSize: '0.85rem', color: 'var(--ink)' }}>Email Subject and Message Customization</td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CrossBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                    </tr>

                    <tr style={{ borderBottom: '1px solid var(--line)' }}>
                      <td style={{ padding: '10px 16px', fontWeight: 600, fontSize: '0.85rem', color: 'var(--ink)' }}>Corporate Domain Integration</td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CrossBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                    </tr>
                  </>
                )}

                {/* Section 4: System Integration */}
                <tr style={{ background: '#EAF2FC', cursor: 'pointer' }} onClick={() => toggleSection('systemIntegration')}>
                  <td colSpan={4} style={{ padding: '10px 16px', fontWeight: 800, color: 'var(--navy)', fontSize: '0.9rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span>System Integration</span>
                      <ChevronDown size={16} style={{ transform: sectionsOpen.systemIntegration ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s' }} />
                    </div>
                  </td>
                </tr>

                {sectionsOpen.systemIntegration && (
                  <>
                    <tr style={{ borderBottom: '1px solid var(--line)' }}>
                      <td style={{ padding: '10px 16px', fontWeight: 600, fontSize: '0.85rem', color: 'var(--ink)' }}>WEB-API</td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CrossBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CrossBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                    </tr>

                    <tr style={{ borderBottom: '1px solid var(--line)' }}>
                      <td style={{ padding: '10px 16px', fontWeight: 600, fontSize: '0.85rem', color: 'var(--ink)' }}>Google Drive Integration</td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CrossBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CrossBadge /></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                    </tr>

                    <tr style={{ borderBottom: '1px solid var(--line)' }}>
                      <td style={{ padding: '10px 16px', fontWeight: 600, fontSize: '0.85rem', color: 'var(--ink)' }}>SignTime for Salesforce</td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><a href="https://app.spirinc.com/t/HPmpyrOr23Q6FzsvpKMzl/as/xzemB6rMWXD2Ig4tbNUM4/confirm-guest?utm_source=price&utm_medium=spir&utm_campaign=salesforce" target="_blank" rel="noreferrer" style={{ color: 'var(--coral)', fontWeight: 700, textDecoration: 'none', fontSize: '0.85rem' }}>Contact Us!</a></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><a href="https://app.spirinc.com/t/HPmpyrOr23Q6FzsvpKMzl/as/xzemB6rMWXD2Ig4tbNUM4/confirm-guest?utm_source=price&utm_medium=spir&utm_campaign=salesforce" target="_blank" rel="noreferrer" style={{ color: 'var(--coral)', fontWeight: 700, textDecoration: 'none', fontSize: '0.85rem' }}>Contact Us!</a></td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}><a href="https://app.spirinc.com/t/HPmpyrOr23Q6FzsvpKMzl/as/xzemB6rMWXD2Ig4tbNUM4/confirm-guest?utm_source=price&utm_medium=spir&utm_campaign=salesforce" target="_blank" rel="noreferrer" style={{ color: 'var(--coral)', fontWeight: 700, textDecoration: 'none', fontSize: '0.85rem' }}>Contact Us!</a></td>
                    </tr>
                  </>
                )}

                {/* Section 5: Scanner Storage */}
                <tr style={{ background: '#EAF2FC', cursor: 'pointer' }} onClick={() => toggleSection('scannerStorage')}>
                  <td colSpan={4} style={{ padding: '10px 16px', fontWeight: 800, color: 'var(--navy)', fontSize: '0.9rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span>Scanner Storage</span>
                      <ChevronDown size={16} style={{ transform: sectionsOpen.scannerStorage ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s' }} />
                    </div>
                  </td>
                </tr>

                {sectionsOpen.scannerStorage && (
                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '10px 16px', fontWeight: 600, fontSize: '0.85rem', color: 'var(--ink)' }}>File Import (with Timestamp)</td>
                    <td style={{ padding: '10px 16px', textAlign: 'center' }}><CrossBadge /></td>
                    <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                    <td style={{ padding: '10px 16px', textAlign: 'center' }}><CheckBadge /></td>
                  </tr>
                )}

              </tbody>
            </table>

            {/* Footnote matching user screenshot */}
            <div style={{ marginTop: '10px', fontSize: '0.82rem', color: 'var(--slate)', fontStyle: 'normal' }}>
              *Coming soon **Additional fee applies
            </div>
          </div>

          {/* Included in Every Plan summary list */}
          <div
            style={{
              maxWidth: '760px',
              margin: '0 auto',
              textAlign: 'center',
              borderTop: '1px solid var(--line)',
              paddingTop: '2rem',
            }}
          >
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              Included in every SignTime plan
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px 20px' }}>
              {includedInEveryPlan.map((f) => (
                <span key={f} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--ink)', fontWeight: 500 }}>
                  <Check size={15} color="var(--emerald)" /> {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost comparison slider */}
      <section style={{ padding: '1rem 0 3rem', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <CostComparisonSlider />
        </div>
      </section>

      {/* Legal / compliance reassurance */}
      <section style={{ background: 'var(--navy)', padding: '2.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '620px' }}>
          <p style={{ color: '#fff', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '0.4rem' }}>
            Every plan includes <strong>UETA &amp; ESIGN Act compliant audit trails</strong>, bulk document digitization, and secure cloud archiving.
          </p>
          <Link to="/security" style={{ color: 'var(--coral)', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none' }}>
            See our full security & compliance specs →
          </Link>
        </div>
      </section>

      {/* Closing CTA */}
      <section style={{ background: '#fff', padding: '3.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.8rem' }}>
            One flat price. However many people need it.
          </h2>
          <p style={{ color: 'var(--slate)', fontSize: '1rem', marginBottom: '1.8rem' }}>
            No credit card required to start. Cancel anytime.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a href="https://app.signtime.com/register" className="btn btn-coral" style={{ padding: '14px 28px', fontSize: '14px', textDecoration: 'none' }}>
              Start Free Trial — No Credit Card Required <ArrowRight size={16} />
            </a>
            <a href="https://app.spirinc.com/t/HPmpyrOr23Q6FzsvpKMzl/as/xzemB6rMWXD2Ig4tbNUM4/confirm-guest?utm_source=price&utm_medium=spir&utm_campaign=salesforce" target="_blank" rel="noreferrer" className="btn btn-outline-navy" style={{ padding: '14px 28px', fontSize: '14px', textDecoration: 'none' }}>
              Book a 15-Minute Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}


