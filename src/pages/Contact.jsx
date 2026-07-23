import { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, Phone } from 'lucide-react';

const steps = ['Your Info', 'A Few Details', 'Schedule'];

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  border: '1px solid var(--line)',
  borderRadius: 'var(--radius-sm)',
  fontSize: '0.95rem',
  color: 'var(--ink)',
  outline: 'none',
};

const labelStyle = {
  fontSize: '0.85rem',
  fontWeight: 600,
  color: 'var(--navy)',
  display: 'block',
  marginBottom: '0.4rem',
};

export default function Contact() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    countryCode: '+1',
    phone: '',
    teamSize: '',
    useCase: '',
    preferredTime: '',
  });

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section style={{ background: 'var(--sky)', padding: '4rem 0', minHeight: '70vh' }}>
      <div className="container" style={{ maxWidth: '640px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.8rem', letterSpacing: '-0.02em' }}>
            Book a 15-Minute Demo
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--slate)' }}>
            See how unlimited users at one flat price works for your team — no pressure, no commitment.
          </p>
        </div>

        <div
          className="hover-card"
          style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '16px', padding: '2.5rem', boxShadow: 'var(--shadow-subtle)' }}
        >
          {!submitted ? (
            <>
              {/* Step indicator */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '2rem' }}>
                {steps.map((label, idx) => {
                  const n = idx + 1;
                  const active = n === step;
                  const done = n < step;
                  return (
                    <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          background: active || done ? 'var(--coral)' : 'var(--sky)',
                          color: active || done ? '#fff' : 'var(--slate)',
                          border: active || done ? 'none' : '1px solid var(--line)',
                        }}
                      >
                        {done ? <CheckCircle size={16} /> : n}
                      </div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, color: active ? 'var(--navy)' : 'var(--slate)' }}>{label}</span>
                      {n < steps.length && <div style={{ width: '24px', height: '1px', background: 'var(--line)' }} />}
                    </div>
                  );
                })}
              </div>

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <div>
                      <label style={labelStyle}>Full Name</label>
                      <input style={inputStyle} type="text" required placeholder="e.g. Alex Turner" value={form.name} onChange={update('name')} />
                    </div>
                    <div>
                      <label style={labelStyle}>Work Email</label>
                      <input style={inputStyle} type="email" required placeholder="alex@company.com" value={form.email} onChange={update('email')} />
                    </div>
                    <div>
                      <label style={labelStyle}>Company</label>
                      <input style={inputStyle} type="text" required placeholder="Acme Corp" value={form.company} onChange={update('company')} />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <div>
                      <label style={labelStyle}>Phone Number</label>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <select
                          value={form.countryCode}
                          onChange={update('countryCode')}
                          style={{ ...inputStyle, width: '90px', flex: 'none' }}
                        >
                          <option value="+1">+1 (US)</option>
                          <option value="+44">+44 (UK)</option>
                          <option value="+61">+61 (AU)</option>
                          <option value="+81">+81 (JP)</option>
                        </select>
                        <input
                          style={inputStyle}
                          type="tel"
                          required
                          placeholder="(555) 123-4567"
                          value={form.phone}
                          onChange={update('phone')}
                        />
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Team Size</label>
                      <select style={inputStyle} required value={form.teamSize} onChange={update('teamSize')}>
                        <option value="" disabled>Select team size</option>
                        <option value="1-10">1–10</option>
                        <option value="11-50">11–50</option>
                        <option value="51-200">51–200</option>
                        <option value="200+">200+</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>What are you looking to solve?</label>
                      <select style={inputStyle} required value={form.useCase} onChange={update('useCase')}>
                        <option value="" disabled>Select one</option>
                        <option value="replacing-per-seat">Replacing a per-seat e-signature tool</option>
                        <option value="workflow-automation">Automating approval workflows</option>
                        <option value="compliance">Compliance & audit trail requirements</option>
                        <option value="integrations">Salesforce or API integration</option>
                        <option value="other">Something else</option>
                      </select>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <div>
                      <label style={labelStyle}>Preferred Time</label>
                      <select style={inputStyle} required value={form.preferredTime} onChange={update('preferredTime')}>
                        <option value="" disabled>Select a preferred window</option>
                        <option value="morning">Morning (9am–12pm)</option>
                        <option value="afternoon">Afternoon (12pm–4pm)</option>
                        <option value="evening">Evening (4pm–6pm)</option>
                      </select>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--slate)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Phone size={14} /> We'll call {form.countryCode} {form.phone || '(your number)'} to confirm.
                    </div>
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                  {step > 1 ? (
                    <button type="button" onClick={back} className="btn btn-outline-navy" style={{ padding: '12px 20px' }}>
                      <ArrowLeft size={16} /> Back
                    </button>
                  ) : (
                    <span />
                  )}

                  {step < 3 ? (
                    <button type="button" onClick={next} className="btn btn-coral" style={{ padding: '12px 24px' }}>
                      Next <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-coral" style={{ padding: '12px 24px' }}>
                      Book My Demo <ArrowRight size={16} />
                    </button>
                  )}
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
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid var(--emerald)',
                  color: 'var(--emerald)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.2rem',
                }}
              >
                <CheckCircle size={32} />
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.6rem' }}>
                You're all set, {form.name.split(' ')[0] || 'there'}!
              </h2>
              <p style={{ color: 'var(--slate)', lineHeight: 1.6 }}>
                We'll call {form.countryCode} {form.phone} during your {form.preferredTime} window to confirm your demo. A calendar invite is on its way to {form.email}.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
