import { AlertTriangle } from 'lucide-react';

/**
 * Visible marker for unconfirmed facts (pricing, certifications, logos, etc.)
 * that must be signed off before launch. Renders inline, highlighted, and
 * impossible to miss or mistake for real copy.
 */
export default function TodoFlag({ children }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        background: '#FFF3B0',
        color: '#7A5900',
        padding: '2px 8px',
        borderRadius: '4px',
        fontSize: '0.78rem',
        fontWeight: 700,
        border: '1px solid #E6C200',
        lineHeight: 1.4,
      }}
    >
      <AlertTriangle size={12} strokeWidth={2.5} />
      {`TODO: ${children}`}
    </span>
  );
}
