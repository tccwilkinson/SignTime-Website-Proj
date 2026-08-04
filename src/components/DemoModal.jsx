import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Lock, ArrowRight } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';

export default function DemoModal() {
  const { isOpen, close } = useDemoModal();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const closeModal = () => {
    close();
    setSubmitted(false);
    setFormData({ name: '', email: '', company: '' });
  };

  return (
    <div className="modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={closeModal}
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#9BAAC7',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <>
            <div style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'var(--sky)',
                  border: '1px solid var(--coral)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto',
                  color: 'var(--coral)'
                }}
              >
                <Sparkles size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.4rem', color: '#fff' }}>
                Start Your SignTime Free Account
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#9BAAC7' }}>
                Unlimited users. Instant contract creation & e-signatures.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#9BAAC7', display: 'block', marginBottom: '0.4rem' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Turner"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: 'var(--radius-sm)',
                    color: '#fff',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#9BAAC7', display: 'block', marginBottom: '0.4rem' }}>
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: 'var(--radius-sm)',
                    color: '#fff',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#9BAAC7', display: 'block', marginBottom: '0.4rem' }}>
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="Acme Corp"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: 'var(--radius-sm)',
                    color: '#fff',
                    outline: 'none'
                  }}
                />
              </div>

              <a href="https://app.signtime.com/register" className="btn btn-coral" style={{ width: '100%', marginTop: '0.8rem', padding: '0.85rem', fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                Start Free Today <ArrowRight size={18} />
              </a>

              <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#9BAAC7', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginTop: '0.4rem' }}>
                <Lock size={12} /> No credit card required. Cancel anytime.
              </div>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                color: 'var(--emerald)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.2rem auto'
              }}
            >
              <CheckCircle size={32} />
            </div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '0.6rem', color: '#fff' }}>
              Welcome to SignTime, {formData.name || 'Friend'}!
            </h3>
            <p style={{ color: '#9BAAC7', marginBottom: '1.8rem', lineHeight: 1.6 }}>
              Your workspace has been created. Confirmation and access details have been sent to <strong style={{ color: '#fff' }}>{formData.email}</strong>.
            </p>
            <button onClick={closeModal} className="btn btn-coral" style={{ padding: '0.75rem 2rem' }}>
              Close & Explore Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
