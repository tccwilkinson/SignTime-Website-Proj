import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, FileText, Zap, Lock, Sparkles, Building2 } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';
import { getFeatureContent } from '../data/features';
import TodoFlag from '../components/TodoFlag';
import './FeatureDetail.css';

function titleFromSlug(slug) {
  if (!slug) return 'Feature Specification';
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

const FALLBACK_BULLETS = [
  {
    title: 'Seamless Integration',
    desc: 'Works out of the box with your existing document templates, PDFs, and Office files.'
  },
  {
    title: 'Real-Time Tracking',
    desc: 'Receive automatic notifications and status updates as signers complete their steps.'
  },
  {
    title: 'Mobile & Browser Compatible',
    desc: 'Signers can view and sign on iPhone, Android, iPad, or desktop without downloading an app.'
  }
];

export default function FeatureDetail() {
  const { slug } = useParams();
  const { open } = useDemoModal();
  const content = getFeatureContent(slug);
  const featureTitle = content?.title || titleFromSlug(slug);
  const subhead = content?.tagline || content?.subhead || (
    <>
      Streamline digital contract execution with SignTime's enterprise-grade <strong>{featureTitle}</strong> capability. Designed for speed, security, and compliance across all your business teams.
    </>
  );
  const bullets = content?.bullets || FALLBACK_BULLETS;
  const isRichContent = Boolean(content?.intro);

  return (
    <div style={{ background: '#fff', color: 'var(--ink)' }}>
      {/* Hero Banner */}
      <section style={{ background: 'radial-gradient(circle at 50% -10%, #DCEAFC 0%, #fff 65%)', padding: '4.5rem 0 3.5rem', borderBottom: '1px solid var(--line)' }}>
        <div className="container" style={{ maxWidth: '840px', textAlign: 'center' }}>
          <Link
            to="/features"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--slate)', fontSize: '0.88rem', fontWeight: 600, textDecoration: 'none', marginBottom: '1.5rem' }}
          >
            <ArrowLeft size={14} /> Back to All Features
          </Link>

          <div className="st-subpage-badge" style={{ marginBottom: '1.2rem' }}>
            <span className="badge-sky cute-badge-pulse" style={{ fontSize: '12px' }}>Product Feature Specification</span>
          </div>

          <h1 className="st-subpage-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1.2rem', lineHeight: 1.15 }}>
            {featureTitle}
          </h1>

          <p className="st-subpage-subhead" style={{ fontSize: '1.15rem', color: 'var(--slate)', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto 2rem' }}>
            {subhead}
          </p>

          <div className="st-subpage-subhead" style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button onClick={open} className="btn btn-coral" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Try {featureTitle} Free <ArrowRight size={16} />
            </button>
            <Link to="/pricing" className="btn btn-outline-navy" style={{ padding: '14px 28px', fontSize: '15px' }}>
              View Pricing Tiers
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive Details */}
      <section style={{ padding: '4.5rem 0' }}>
        <div className="container" style={{ maxWidth: '860px' }}>

          {isRichContent ? (
            <div className="fd-rich" style={{ marginBottom: '3.5rem' }}>
              <div className="fd-rich-intro">
                {content.intro.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {content.howItWorks && (
                <div>
                  <h2 className="fd-rich-heading">How it works</h2>
                  <ol className="fd-rich-steps">
                    {content.howItWorks.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}

              {content.calloutBeforeWhoUsesIt && (
                <div className="fd-rich-callout">
                  <h3 className="fd-rich-callout-heading">{content.calloutBeforeWhoUsesIt.heading}</h3>
                  {content.calloutBeforeWhoUsesIt.body && <p>{content.calloutBeforeWhoUsesIt.body}</p>}
                  {content.calloutBeforeWhoUsesIt.flaggedBody && (
                    <p><TodoFlag>{content.calloutBeforeWhoUsesIt.flaggedBody}</TodoFlag></p>
                  )}
                </div>
              )}

              {content.whoUsesIt && (
                <div>
                  <h2 className="fd-rich-heading">Who uses it</h2>
                  <ul className="fd-rich-audience">
                    {content.whoUsesIt.map((item) => (
                      <li key={item.label}>
                        <strong>{item.label}</strong> {item.desc}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {content.scenario && (
                <div>
                  <h2 className="fd-rich-heading">{content.scenario.heading}</h2>
                  <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--slate)', margin: 0 }}>
                    {content.scenario.body}
                  </p>
                </div>
              )}

              {content.combinedWith && (
                <div className="fd-rich-callout">
                  <h3 className="fd-rich-callout-heading">
                    Combined with{' '}
                    <Link to={content.combinedWith.linkTo}>{content.combinedWith.linkLabel}</Link>
                  </h3>
                  <p>{content.combinedWith.body}</p>
                </div>
              )}

              {content.closingLine && <p className="fd-rich-closing">{content.closingLine}</p>}
            </div>
          ) : (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '3.5rem' }}>
                <div className="st-subpage-card-1 cute-card-hover" style={{ background: '#FAFBFD', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 800, color: 'var(--navy)', marginBottom: '8px' }}>
                    <Zap size={20} color="var(--coral)" className="cute-icon-spin" /> Automated Speed
                  </div>
                  <p style={{ fontSize: '0.92rem', color: 'var(--slate)', lineHeight: 1.5, margin: 0 }}>
                    Cuts contract turnaround time down to minutes with zero manual intervention required.
                  </p>
                </div>

                <div className="st-subpage-card-2 cute-card-hover" style={{ background: '#FAFBFD', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 800, color: 'var(--navy)', marginBottom: '8px' }}>
                    <ShieldCheck size={20} color="var(--emerald)" className="cute-icon-spin" /> Legal Compliance
                  </div>
                  <p style={{ fontSize: '0.92rem', color: 'var(--slate)', lineHeight: 1.5, margin: 0 }}>
                    Backed by 100% court-admissible PAdES &amp; ESIGN Act legal audit trails.
                  </p>
                </div>

                <div className="st-subpage-card-3 cute-card-hover" style={{ background: '#FAFBFD', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 800, color: 'var(--navy)', marginBottom: '8px' }}>
                    <Building2 size={20} color="var(--celadon-blue, #0282A9)" className="cute-icon-spin" /> Unlimited Team Access
                  </div>
                  <p style={{ fontSize: '0.92rem', color: 'var(--slate)', lineHeight: 1.5, margin: 0 }}>
                    Included across all SignTime plans without per-seat licenses or user caps.
                  </p>
                </div>
              </div>

              {/* Capabilities List */}
              <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '16px', padding: '2.5rem', boxShadow: 'var(--shadow-subtle)', marginBottom: '3.5rem' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1.5rem' }}>
                  Key Capabilities of {featureTitle}
                </h2>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.98rem', color: 'var(--ink)' }}>
                  {bullets.map((bullet) => (
                    <li key={bullet.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={18} color="var(--emerald)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <div>
                        <strong>{bullet.title}:</strong> {bullet.desc}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* CTA Banner */}
          <div style={{ background: 'var(--navy)', color: '#fff', borderRadius: '16px', padding: '3rem 2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.8rem' }}>
              Experience {featureTitle} in Action
            </h2>
            <p style={{ color: '#9BAAC7', marginBottom: '1.8rem', fontSize: '1rem', maxWidth: '520px', margin: '0 auto 1.8rem' }}>
              Get started with SignTime today. No credit card required to start your free trial.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button onClick={open} className="btn btn-coral" style={{ padding: '14px 28px', fontSize: '15px' }}>
                Start Free Trial <ArrowRight size={16} />
              </button>
              <Link to="/contact" className="btn btn-outline-navy" style={{ padding: '14px 28px', fontSize: '15px', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
                Book Demo
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
