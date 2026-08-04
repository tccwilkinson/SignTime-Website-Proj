import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, FileText, Zap, Lock, Sparkles, Building2 } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';
import { getFeatureContent } from '../data/features';

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
  const subhead = content?.subhead || (
    <>
      Streamline digital contract execution with SignTime's enterprise-grade <strong>{featureTitle}</strong> capability. Designed for speed, security, and compliance across all your business teams.
    </>
  );
  const bullets = content?.bullets || FALLBACK_BULLETS;

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
            <a href="https://app.signtime.com/register" className="btn btn-coral" style={{ padding: '14px 28px', fontSize: '15px', textDecoration: 'none' }}>
              Try for Free Today <ArrowRight size={16} />
            </a>
            <Link to="/pricing" className="btn btn-outline-navy" style={{ padding: '14px 28px', fontSize: '15px' }}>
              View Pricing Tiers
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive Details */}
      <section style={{ padding: '4.5rem 0' }}>
        <div className="container" style={{ maxWidth: '860px' }}>

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

          {/* CTA Banner */}
          <div style={{ background: 'var(--navy)', color: '#fff', borderRadius: '16px', padding: '3rem 2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.8rem' }}>
              Experience {featureTitle} in Action
            </h2>
            <p style={{ color: '#9BAAC7', marginBottom: '1.8rem', fontSize: '1rem', maxWidth: '520px', margin: '0 auto 1.8rem' }}>
              Get started with SignTime today. No credit card required to start your free trial.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <a href="https://app.signtime.com/register" className="btn btn-coral" style={{ padding: '14px 28px', fontSize: '15px', textDecoration: 'none' }}>
                Start Free Trial <ArrowRight size={16} />
              </a>
              <a href="https://support.signtime.com/hc/en-us/requests/new" target="_blank" rel="noreferrer" className="btn btn-outline-navy" style={{ padding: '14px 28px', fontSize: '15px', color: '#fff', borderColor: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>
                Contact Us
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
