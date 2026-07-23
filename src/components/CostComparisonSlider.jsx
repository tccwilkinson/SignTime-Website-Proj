import { useState } from 'react';
import { TrendingDown } from 'lucide-react';
import TodoFlag from './TodoFlag';

const SIGNTIME_FLAT_RATE = 59;
const COMPETITOR_PER_SEAT_RATE = 40;

export default function CostComparisonSlider() {
  const [users, setUsers] = useState(10);

  const signTimeCost = SIGNTIME_FLAT_RATE;
  const competitorCost = users * COMPETITOR_PER_SEAT_RATE;
  const savings = Math.max(competitorCost - signTimeCost, 0);

  return (
    <div
      className="hover-card"
      style={{
        background: '#fff',
        border: '1px solid var(--line)',
        borderRadius: '20px',
        padding: '2.5rem',
        boxShadow: 'var(--shadow-subtle)',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 2rem' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.6rem' }}>
          See what per-seat pricing really costs
        </h3>
        <p style={{ color: 'var(--slate)', fontSize: '0.95rem', lineHeight: 1.6 }}>
          Drag the slider to match your team size. SignTime's price never moves — unlimited users, one flat rate.
        </p>
      </div>

      <div style={{ maxWidth: '480px', margin: '0 auto 2.5rem' }}>
        <label
          htmlFor="team-size"
          style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.6rem' }}
        >
          <span>Team size</span>
          <span>{users} {users === 1 ? 'signer' : 'signers'}</span>
        </label>
        <input
          id="team-size"
          type="range"
          min={1}
          max={100}
          step={1}
          value={users}
          onChange={(e) => setUsers(Number(e.target.value))}
          className="cost-slider"
          aria-valuetext={`${users} signers`}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--slate)', marginTop: '0.4rem' }}>
          <span>1</span>
          <span>100+</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '2rem' }}>
        <div style={{ border: '1px solid var(--line)', borderRadius: '14px', padding: '24px', textAlign: 'center' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.8rem' }}>
            SignTime (flat rate)
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--navy)' }}>
            ${signTimeCost}<span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--slate)' }}>/mo</span>
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--slate)', marginTop: '0.4rem' }}>for your whole team</div>
        </div>

        <div style={{ border: '1px solid var(--coral)', background: 'rgba(232,96,76,0.04)', borderRadius: '14px', padding: '24px', textAlign: 'center' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--coral)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.8rem' }}>
            Typical per-seat competitor
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--navy)' }}>
            ${competitorCost.toLocaleString()}<span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--slate)' }}>/mo</span>
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--slate)', marginTop: '0.4rem' }}>at ${COMPETITOR_PER_SEAT_RATE}/user/mo</div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          background: 'var(--sky)',
          borderRadius: '12px',
          padding: '16px',
          fontWeight: 700,
          color: 'var(--navy)',
          marginBottom: '1.2rem',
        }}
      >
        <TrendingDown size={20} color="var(--coral)" />
        You'd save ${savings.toLocaleString()}/mo with SignTime at this team size
      </div>

      <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--slate)' }}>
        Illustrative estimate. <TodoFlag>{`confirm SignTime flat rate (placeholder $${SIGNTIME_FLAT_RATE}/mo) and typical competitor per-seat rate (placeholder $${COMPETITOR_PER_SEAT_RATE}/user/mo) with Jim before publishing`}</TodoFlag>
      </div>
    </div>
  );
}
