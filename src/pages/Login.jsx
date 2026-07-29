import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowRight, CheckCircle2, ShieldCheck, Eye, EyeOff, KeyRound } from 'lucide-react';
import SignTimeLogo from '../components/SignTimeLogo';
import { useDemoModal } from '../context/DemoModalContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const { open } = useDemoModal();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setLoggedIn(true);
    }, 900);
  };

  return (
    <div
      style={{
        minHeight: '85vh',
        background: 'radial-gradient(circle at 50% 0%, #DCEAFC 0%, #F4F7FC 60%, #fff 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1.5rem',
      }}
    >
      <div className="container" style={{ maxWidth: '440px', width: '100%' }}>
        
        {/* Card Header Logo */}
        <div style={{ textAlign: 'center', marginBottom: '1.8rem' }} className="st-subpage-badge">
          <Link to="/" style={{ display: 'inline-block', textDecoration: 'none' }}>
            <SignTimeLogo textColor="var(--navy)" iconColor="var(--coral)" />
          </Link>
        </div>

        {/* Login Box */}
        <div
          className="hover-card st-subpage-card-1"
          style={{
            background: '#fff',
            border: '1px solid var(--line)',
            borderRadius: '16px',
            padding: '2.5rem 2rem',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.4rem' }}>
              Sign in to SignTime
            </h1>
            <p style={{ fontSize: '0.9rem', color: 'var(--slate)' }}>
              Enter your corporate credentials to access your e-signature workspace
            </p>
          </div>

          {/* Sandbox Notice Banner */}
          <div
            style={{
              background: '#EAF2FC',
              border: '1px solid #B8D5F2',
              borderRadius: '10px',
              padding: '10px 14px',
              fontSize: '0.8rem',
              color: 'var(--navy)',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '1.5rem',
            }}
          >
            <ShieldCheck size={18} color="#3B97D3" style={{ flexShrink: 0 }} />
            <span>
              <strong>Demo Portal:</strong> Enter any work email to explore the interactive sandbox.
            </span>
          </div>

          {loggedIn ? (
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.12)',
                  color: 'var(--emerald)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                }}
              >
                <CheckCircle2 size={32} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                Welcome back!
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--slate)', marginBottom: '1.5rem' }}>
                You have successfully authenticated as <strong>{email || 'user@signtime.com'}</strong>.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  onClick={open}
                  className="btn btn-coral"
                  style={{ width: '100%', padding: '12px', fontSize: '14px', justifyContent: 'center' }}
                >
                  Open Interactive App Demo <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => setLoggedIn(false)}
                  className="btn btn-outline-navy"
                  style={{ width: '100%', padding: '10px', fontSize: '13px' }}
                >
                  Sign in with another account
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              
              {/* SSO Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => handleLogin({ preventDefault: () => {} })}
                  className="btn"
                  style={{
                    background: '#F8FAFC',
                    border: '1px solid var(--line)',
                    color: 'var(--navy)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    padding: '10px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  Continue with Google
                </button>

                <button
                  type="button"
                  onClick={() => handleLogin({ preventDefault: () => {} })}
                  className="btn"
                  style={{
                    background: '#F8FAFC',
                    border: '1px solid var(--line)',
                    color: 'var(--navy)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    padding: '10px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 23 23">
                    <path fill="#f35325" d="M1 1h10v10H1z"/>
                    <path fill="#81bc06" d="M12 1h10v10H12z"/>
                    <path fill="#05a6f0" d="M1 12h10v10H1z"/>
                    <path fill="#ffba08" d="M12 12h10v10H12z"/>
                  </svg>
                  Continue with Microsoft 365
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '0.5rem 0' }}>
                <div style={{ flex: 1, height: '1px', background: 'var(--line)' }} />
                <span style={{ fontSize: '0.78rem', color: 'var(--slate)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>or email</span>
                <div style={{ flex: 1, height: '1px', background: 'var(--line)' }} />
              </div>

              {/* Email Input */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>
                  Work Email Address
                </label>
                <div style={{ position: 'relative' }}>
                  <Mail size={16} color="var(--slate)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px 10px 38px',
                      borderRadius: '8px',
                      border: '1px solid var(--line)',
                      fontSize: '0.9rem',
                      color: 'var(--ink)',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--navy)' }}>
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={open}
                    style={{ background: 'none', border: 'none', color: 'var(--coral)', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}
                  >
                    Forgot password?
                  </button>
                </div>
                <div style={{ position: 'relative' }}>
                  <Lock size={16} color="var(--slate)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 38px 10px 38px',
                      borderRadius: '8px',
                      border: '1px solid var(--line)',
                      fontSize: '0.9rem',
                      color: 'var(--ink)',
                      outline: 'none',
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  >
                    {showPassword ? <EyeOff size={16} color="var(--slate)" /> : <Eye size={16} color="var(--slate)" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-coral hero-btn-primary"
                style={{ width: '100%', padding: '12px', fontSize: '14px', fontWeight: 700, marginTop: '0.5rem', justifyContent: 'center' }}
              >
                {loading ? 'Authenticating...' : 'Sign In to Workspace'} <ArrowRight size={16} className="hero-cta-arrow" />
              </button>
            </form>
          )}

          {/* Footer Card Switcher */}
          <div style={{ textAlign: 'center', marginTop: '1.8rem', paddingTop: '1.2rem', borderTop: '1px solid var(--line)', fontSize: '0.88rem', color: 'var(--slate)' }}>
            Don't have a SignTime account?{' '}
            <button
              onClick={open}
              style={{ background: 'none', border: 'none', color: 'var(--coral)', fontWeight: 700, cursor: 'pointer', padding: 0 }}
            >
              Start Free Trial
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
