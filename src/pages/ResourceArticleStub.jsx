import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, FileText, CheckCircle2, ShieldCheck, Zap, Layers, Users, Sparkles } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';

const articlesData = {
  'automate-contract-approvals': {
    title: 'How to Automate Contract Approvals Before They Go Out for Signature',
    category: 'Workflow Automation',
    readTime: '6 min read',
    subtitle: 'Route every contract to the right internal approvers automatically — before it ever reaches external signers.',
    sections: [
      {
        heading: 'Why Internal Approvals Are the Real Contract Bottleneck',
        content: `Before a contract is sent to a client or vendor for signature, internal stakeholders (Legal, Finance, Executive leadership) must review and approve terms. In many companies, this process happens manually over email, leading to lost threads, version control confusion, and days of unnecessary delay.`
      },
      {
        heading: 'Step-by-Step: Setting Up Automated Approval Workflows',
        content: `With SignTime internal approval workflows, you can define precise condition rules:
- **Rule-Based Routing**: Trigger legal review for any deal over $50,000 or custom contract clauses.
- **Sequential Approvals**: Automatically forward documents to Department Head -> Legal -> CFO in order.
- **Instant Dispatch**: Once all internal approvals are complete, the document is automatically dispatched to external signers without manual intervention.`
      },
      {
        heading: 'Audit-Ready Compliance',
        content: `Every internal approval action is recorded with full timestamps, user identifiers, and IP addresses within the document's tamper-evident audit log. This guarantees complete internal compliance and transparency.`
      }
    ],
    takeaways: [
      'Eliminate manual email chasing for internal contract approvals',
      'Enforce departmental authority controls on custom contract terms',
      'Maintain an unbroken audit trail from internal sign-off to final signature'
    ]
  },
  'bulk-sending-100-contracts': {
    title: 'Bulk Sending: Getting 100 Contracts Out in One Click',
    category: 'Workflow Automation',
    readTime: '5 min read',
    subtitle: 'A practical walkthrough of sending a large batch of documents from a single CSV upload.',
    sections: [
      {
        heading: 'The Power of Batch Operations',
        content: `Sending standardized agreements like annual policy updates, contractor renewals, or NDA mass dispatches one by one is time-consuming and error-prone. Bulk Sending lets you upload a single CSV file with recipient details and auto-fill field values to generate and send hundreds of personalized requests in seconds.`
      },
      {
        heading: 'How Bulk Send Works',
        content: `1. Select your reusable document template with pre-placed signature and input fields.
2. Download the pre-formatted CSV template tailored to your document's dynamic fields.
3. Populate recipient emails, names, and custom data (e.g. employee IDs, custom rates).
4. Upload the CSV and click Launch. SignTime dispatches individual signing requests instantly.`
      },
      {
        heading: 'Batch Tracking & Status Management',
        content: `Monitor signature progress for all recipients from a single unified batch dashboard. Resend reminders to non-responders with one click.`
      }
    ],
    takeaways: [
      'Save dozens of hours on high-volume document mailings',
      'Ensure 100% field accuracy with CSV data validation',
      'Track individual completion status across all recipients in real time'
    ]
  },
  'legally-binding-esignatures-us': {
    title: 'What Makes an E-Signature Legally Binding in the U.S.?',
    category: 'E-Signature Best Practices',
    readTime: '7 min read',
    subtitle: 'A plain-English breakdown of the ESIGN Act, UETA, and what actually holds up in court.',
    sections: [
      {
        heading: 'The Legal Foundation: ESIGN Act & UETA',
        content: `In the United States, electronic signatures have enjoyed full federal and state recognition for over two decades under the federal ESIGN Act (2000) and state Uniform Electronic Transactions Act (UETA) statutes.`
      },
      {
        heading: 'The 5 Essential Legal Criteria',
        content: `For an electronic signature to be legally binding and enforceable, it must meet five key criteria:
1. **Intent to Sign**: Signers must demonstrate clear intent to execute the agreement.
2. **Consent to Do Business Electronically**: Signers must opt-in to electronic delivery.
3. **Association of Signature**: Signature marks must be cryptographically bound to the document.
4. **Tamper-Evident Record**: Any modifications post-signature must invalidate the seal.
5. **Retention & Audit Trail**: Both parties must receive access to the executed copy and audit log.`
      }
    ],
    takeaways: [
      'Electronic signatures are granted full legal standing equivalent to wet-ink signatures under U.S. law',
      'SignTime provides UETA & ESIGN Act compliant tamper-evident audit trails with every document'
    ]
  },
  'templates-vs-one-off-documents': {
    title: 'Templates vs. One-Off Documents: When to Use Each',
    category: 'E-Signature Best Practices',
    readTime: '4 min read',
    subtitle: 'How to decide what belongs in a reusable template versus a document you build from scratch.',
    sections: [
      {
        heading: 'Standardizing Repeat Workflows with Templates',
        content: `If your team sends the same document structure more than twice a month (such as NDAs, offer letters, or client onboarding forms), setting up a template saves up to 90% of prep time. Fields, roles, and default email messaging are pre-configured.`
      },
      {
        heading: 'When One-Off Sending Makes Sense',
        content: `One-off uploads are ideal for bespoke contracts, heavily negotiated legal agreements, or custom proposals where field placement varies for each unique transaction.`
      }
    ],
    takeaways: [
      'Use templates for high-frequency standardized documents',
      'Use one-off dispatches for custom, heavily negotiated contracts'
    ]
  },
  'esign-act-ueta-explained': {
    title: 'ESIGN Act and UETA, Explained for Non-Lawyers',
    category: 'Compliance & Security',
    readTime: '6 min read',
    subtitle: 'The two laws behind every legally binding e-signature in the United States.',
    sections: [
      {
        heading: 'Federal vs. State E-Signature Law',
        content: `The federal ESIGN Act covers interstate and foreign commerce, while UETA applies at the state level. Together, they establish that contracts cannot be denied legal effect solely because they are electronic.`
      },
      {
        heading: 'What SignTime Does Behind the Scenes',
        content: `SignTime ensures compliance by generating cryptographically sealed PKI signatures, recording IP addresses, email verifications, and timestamps for every signer.`
      }
    ],
    takeaways: [
      'ESIGN and UETA ensure electronic records carry full legal weight',
      'Cryptographic sealing guarantees document integrity'
    ]
  },
  'what-an-audit-trail-proves': {
    title: 'What an Audit Trail Actually Proves',
    category: 'Compliance & Security',
    readTime: '5 min read',
    subtitle: 'Timestamped, tamper-evident, and built for the moment someone asks "can you prove that?"',
    sections: [
      {
        heading: 'Components of a Robust Audit Trail',
        content: `An audit trail is an automated record of every action performed on a document. Key components include signer email address, IP address, device & browser metadata, timestamp (UTC), and document hash verification.`
      }
    ],
    takeaways: [
      'Audit trails provide court-admissible evidence of signing activity',
      'Digital checksums prevent post-signature alterations'
    ]
  },
  'esignatures-for-construction': {
    title: 'E-Signatures for Construction: Lien Waivers, Change Orders, and Field Signing',
    category: 'Industry Solutions',
    readTime: '6 min read',
    subtitle: 'Getting subcontractor sign-off on a jobsite tablet, even without an email address on file.',
    sections: [
      {
        heading: 'Accelerating Construction Workflows',
        content: `Construction projects move fast, and waiting days for printed lien waivers or change orders halts progress. SignTime allows field managers to collect signatures on tablets or phones directly on site.`
      }
    ],
    takeaways: [
      'Mobile-friendly signing for jobsite superintendents and subcontractors',
      'Instant delivery of executed lien waivers and change orders'
    ]
  },
  'esignatures-for-real-estate': {
    title: 'E-Signatures for Real Estate: Closing Leases Without the Back-and-Forth',
    category: 'Industry Solutions',
    readTime: '5 min read',
    subtitle: 'How independent brokerages and relocation teams cut signing friction out of every lease.',
    sections: [
      {
        heading: 'Seamless Tenant & Property Onboarding',
        content: `Real estate transactions require rapid response times. Reusable lease templates and SMS signature links let tenants review and execute agreements from their phones within minutes.`
      }
    ],
    takeaways: [
      'Close lease agreements 80% faster with mobile and SMS signing',
      'Automated tenant document archiving'
    ]
  }
};

function titleFromSlug(slug) {
  if (!slug) return 'Resource Guide & Documentation';
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export default function ResourceArticleStub() {
  const { slug } = useParams();
  const { open } = useDemoModal();
  
  const article = articlesData[slug] || {
    title: titleFromSlug(slug),
    category: 'Resource Guide',
    readTime: '5 min read',
    subtitle: 'Comprehensive guide and operational best practices for U.S. business teams evaluating e-signature automation and contract compliance.',
    sections: [
      {
        heading: 'Overview & Key Objectives',
        content: `This guide outlines effective strategies for streamlining e-signature workflows, enforcing organizational compliance, and scaling document management with flat-rate pricing.`
      },
      {
        heading: 'Best Practices & Implementation Steps',
        content: `1. Standardize document templates for frequent agreements.\n2. Configure role-based approval controls.\n3. Utilize automated reminders and full audit trail archiving.`
      }
    ],
    takeaways: [
      'Streamline operations with standardized document workflows',
      'Maintain full audit-trail compliance under U.S. ESIGN & UETA guidelines'
    ]
  };

  return (
    <div style={{ background: '#fff', color: 'var(--ink)', minHeight: '80vh' }}>
      {/* Header Section */}
      <section style={{ background: 'radial-gradient(circle at 50% -10%, #DCEAFC 0%, #fff 65%)', padding: '3.5rem 0 2.5rem', borderBottom: '1px solid var(--line)' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <Link
            to="/resources"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--slate)', fontSize: '0.88rem', fontWeight: 600, textDecoration: 'none', marginBottom: '1.5rem' }}
          >
            <ArrowLeft size={14} /> Back to Resources &amp; Guides
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span className="badge-sky" style={{ fontSize: '12px', fontWeight: 700 }}>{article.category}</span>
            <span style={{ fontSize: '13px', color: 'var(--slate)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={14} /> {article.readTime}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem', lineHeight: 1.25, letterSpacing: '-0.02em' }}>
            {article.title}
          </h1>

          <p style={{ fontSize: '1.1rem', color: 'var(--slate)', lineHeight: 1.6, margin: 0 }}>
            {article.subtitle}
          </p>
        </div>
      </section>

      {/* Article Content Section */}
      <section style={{ background: '#fff', padding: '3.5rem 0 5rem' }}>
        <div className="container" style={{ maxWidth: '780px' }}>

          {/* Key Takeaways Box */}
          {article.takeaways && (
            <div style={{ background: '#FAFBFD', border: '1px solid var(--line)', borderLeft: '4px solid var(--coral)', borderRadius: '12px', padding: '1.8rem', marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--navy)', fontWeight: 800, marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={18} color="var(--coral)" /> Key Takeaways
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem', color: 'var(--ink)', padding: 0, margin: 0 }}>
                {article.takeaways.map((t, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: 1.4 }}>
                    <CheckCircle2 size={16} color="var(--emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Sections Body */}
          {article.sections.map((sec, idx) => (
            <div key={idx} style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.8rem', letterSpacing: '-0.01em' }}>
                {sec.heading}
              </h2>
              <div style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--ink)', whiteSpace: 'pre-line' }}>
                {sec.content}
              </div>
            </div>
          ))}

          {/* CTA Banner */}
          <div style={{ textAlign: 'center', background: 'var(--navy)', color: '#fff', padding: '2.8rem 2rem', borderRadius: '16px', boxShadow: 'var(--shadow-subtle)', marginTop: '3.5rem' }}>
            <h2 style={{ fontSize: '1.55rem', fontWeight: 800, marginBottom: '0.8rem', color: '#fff' }}>
              Ready to streamline your document workflow?
            </h2>
            <p style={{ color: '#9BAAC7', marginBottom: '1.8rem', fontSize: '0.98rem', maxWidth: '520px', margin: '0 auto 1.8rem' }}>
              Unlimited users, flat-rate pricing, and enterprise-grade security for U.S. teams.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <a href="https://app.signtime.com/register" className="btn btn-coral" style={{ padding: '14px 28px', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                Start Free Trial <ArrowRight size={16} />
              </a>
              <a href="https://support.signtime.com/hc/en-us/requests/new" target="_blank" rel="noreferrer" className="btn btn-outline-navy" style={{ padding: '14px 28px', fontSize: '14px', color: '#fff', borderColor: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>
                Contact Us Today
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
