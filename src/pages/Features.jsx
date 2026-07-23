import { Link } from 'react-router-dom';
import { ArrowRight, Send, ShieldCheck, ListOrdered, Stamp, PenTool, FileText, Type, FileSignature, GitBranch, Clock, FileLock2, Layers, Search, Tag, Share2, KeyRound, Users, Building2, Code2, Cloud, HardDrive } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';
import FlipCardCarousel from '../components/FlipCardCarousel';

const sendAndSign = [
  { id: 'sms', title: 'SMS Signature Requests', icon: <Send size={36} color="#fff" />, bgCollapsed: '#0D1730', textColor: '#fff', border: '1px solid rgba(255,255,255,0.15)', desc: "Send a signing link straight to a signer's phone — no email required, no app to install." },
  { id: 'guarantor', title: 'Guarantor & Co-Signer Collection', icon: <ShieldCheck size={36} color="#fff" />, bgCollapsed: 'var(--coral)', textColor: '#fff', border: 'none', desc: "Signers enter their guarantor's contact info during signing, and the document is automatically routed to them — no chasing down co-signer details. Built for enrollment forms, leases, and HR onboarding." },
  { id: 'sequencing', title: 'Signer Sequencing', icon: <ListOrdered size={36} color="var(--navy)" />, bgCollapsed: 'var(--sky)', textColor: 'var(--navy)', border: 'none', desc: 'Set the exact order signers complete a document, so approvals and countersignatures always happen in the right sequence.' },
  { id: 'stamps', title: 'Stamps & Seals', icon: <Stamp size={36} color="#fff" />, bgCollapsed: '#0D1730', textColor: '#fff', border: '1px solid rgba(255,255,255,0.15)', desc: 'Create, upload, and apply digital stamps or corporate seals to any document — useful for notarized workflows and branded approvals.' },
  { id: 'handwritten', title: 'Handwritten Signatures', icon: <PenTool size={36} color="#fff" />, bgCollapsed: 'var(--coral)', textColor: '#fff', border: 'none', desc: 'Sign with a finger, stylus, or mouse for a natural, handwritten look on any device.' },
  { id: 'attachments', title: 'Secure Signer Attachments', icon: <FileText size={36} color="var(--navy)" />, bgCollapsed: 'var(--sky)', textColor: 'var(--navy)', border: 'none', desc: 'Collect supporting documents — photo IDs, POs, certificates — encrypted and attached directly in the signing flow.' },
  { id: 'fonts', title: 'Custom Fonts', icon: <Type size={36} color="#fff" />, bgCollapsed: '#0D1730', textColor: '#fff', border: '1px solid rgba(255,255,255,0.15)', desc: "Specify font types and font sizes for text, date, and initial fields to match your document's format." },
  { id: 'branding', title: 'Custom Branding', icon: <Building2 size={36} color="#fff" />, bgCollapsed: 'var(--coral)', textColor: '#fff', border: 'none', desc: 'Put your logo, domain, and sender name on every signature request, so signers see your brand, not ours.' },
];

const automateWorkflows = [
  { id: 'approval-routing', title: 'Internal Approval Routing', icon: <GitBranch size={36} color="#fff" />, bgCollapsed: '#0D1730', textColor: '#fff', border: '1px solid rgba(255,255,255,0.15)', desc: 'Route contracts to the right stakeholders for sign-off — automatically — before anything goes out for signature.' },
  { id: 'expiration', title: 'Signature Expiration Dates', icon: <Clock size={36} color="#fff" />, bgCollapsed: 'var(--coral)', textColor: '#fff', border: 'none', desc: 'Set a deadline for signing, so stale requests expire automatically instead of sitting open indefinitely.' },
  { id: 'templates', title: 'Reusable Templates', icon: <FileSignature size={36} color="var(--navy)" />, bgCollapsed: 'var(--sky)', textColor: 'var(--navy)', border: 'none', desc: "Turn your most-used documents into templates and send a signature request in under a minute." },
  { id: 'bulk-send', title: 'Bulk Sending', icon: <Send size={36} color="#fff" />, bgCollapsed: '#0D1730', textColor: '#fff', border: '1px solid rgba(255,255,255,0.15)', desc: 'Send a document to hundreds of signers at once with a single CSV upload — no manual entry required.' },
];

const stayCompliant = [
  { id: 'audit-trail', title: 'Court-Ready Audit Trails', icon: <ShieldCheck size={36} color="#fff" />, bgCollapsed: '#0D1730', textColor: '#fff', border: '1px solid rgba(255,255,255,0.15)', desc: 'Every signature is tamper-evident and stays legally valid for 10 years — backed by the globally recognized PAdES standard.' },
  { id: 'password', title: 'Password-Protected Documents', icon: <FileLock2 size={36} color="#fff" />, bgCollapsed: 'var(--coral)', textColor: '#fff', border: 'none', desc: 'Restrict access to a signed document with a password, so sensitive agreements stay confidential after they’re signed.' },
  { id: 'certificates', title: 'Signature Certificates', icon: <FileSignature size={36} color="var(--navy)" />, bgCollapsed: 'var(--sky)', textColor: 'var(--navy)', border: 'none', desc: 'Every completed document comes with a downloadable certificate recording signer identity and completion date — ready for legal review.' },
  { id: 'timestamps', title: 'Certified Timestamps', icon: <Clock size={36} color="#fff" />, bgCollapsed: '#0D1730', textColor: '#fff', border: '1px solid rgba(255,255,255,0.15)', desc: 'Every document import gets a certified timestamp, proving exactly when a file entered your record.' },
  { id: 'teams', title: 'Multiple Teams', icon: <Users size={36} color="#fff" />, bgCollapsed: 'var(--coral)', textColor: '#fff', border: 'none', desc: 'Split access securely by department, team, or location, so each group only sees what’s relevant to them.' },
  { id: 'roles', title: 'Role-Based Permissions', icon: <Layers size={36} color="var(--navy)" />, bgCollapsed: 'var(--sky)', textColor: 'var(--navy)', border: 'none', desc: 'Restrict document access within a team based on each member’s role.' },
  { id: '2fa', title: 'Two-Factor Authentication', icon: <KeyRound size={36} color="#fff" />, bgCollapsed: '#0D1730', textColor: '#fff', border: '1px solid rgba(255,255,255,0.15)', desc: 'Add a second verification step for users and signers, so every login and every signature is protected.' },
];

const connectYourTools = [
  { id: 'office-files', title: 'Native Office File Support', icon: <FileText size={36} color="#fff" />, bgCollapsed: '#0D1730', textColor: '#fff', border: '1px solid rgba(255,255,255,0.15)', desc: 'Send Word, Excel, and PowerPoint files for signature directly — add form fields without converting anything first. Most tools stop at PDF.' },
  { id: 'search', title: 'Powerful Document Search', icon: <Search size={36} color="#fff" />, bgCollapsed: 'var(--coral)', textColor: '#fff', border: 'none', desc: 'Find any document instantly by name, tag, party, status, company, contract date, or amount.' },
  { id: 'tagging', title: 'Custom Tagging', icon: <Tag size={36} color="var(--navy)" />, bgCollapsed: 'var(--sky)', textColor: 'var(--navy)', border: 'none', desc: 'Organize documents with your own tags — customer ID, order ID, employee ID — so records match the systems you already use.' },
  { id: 'sharing', title: 'Share Documents Externally', icon: <Share2 size={36} color="#fff" />, bgCollapsed: '#0D1730', textColor: '#fff', border: '1px solid rgba(255,255,255,0.15)', desc: 'Share documents stored in SignTime with people outside your organization, without giving them full account access.' },
  { id: 'api', title: 'Web API', icon: <Code2 size={36} color="#fff" />, bgCollapsed: 'var(--coral)', textColor: '#fff', border: 'none', desc: 'Connect SignTime directly to your internal systems and trigger signature requests programmatically.' },
  { id: 'salesforce', title: 'Salesforce Integration', icon: <Cloud size={36} color="var(--navy)" />, bgCollapsed: 'var(--sky)', textColor: 'var(--navy)', border: 'none', desc: 'Request signatures and track document status without leaving Salesforce.' },
  { id: 'gdrive', title: 'Google Drive Integration', icon: <HardDrive size={36} color="#fff" />, bgCollapsed: '#0D1730', textColor: '#fff', border: '1px solid rgba(255,255,255,0.15)', desc: 'Automatically save completed documents to a designated Google Drive folder.' },
];

function CategorySection({ id, eyebrow, heading, description, items, background }) {
  return (
    <section id={id} style={{ background, padding: '4.5rem 0', scrollMarginTop: '96px' }}>
      <div className="container">
        <div style={{ maxWidth: '640px', marginBottom: '2.5rem' }}>
          <div className="badge-sky" style={{ marginBottom: '1rem' }}>{eyebrow}</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.3rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.8rem' }}>
            {heading}
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--slate)' }}>{description}</p>
        </div>
        <FlipCardCarousel items={items} />
      </div>
    </section>
  );
}

export default function Features() {
  const { open } = useDemoModal();

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'radial-gradient(circle at 50% -10%, #DCEAFC 0%, #fff 55%)', padding: '4.5rem 0 3.5rem' }}>
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <div className="badge-sky" style={{ marginBottom: '1.5rem' }}>Full feature list</div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
            Every E-Signature Feature Your Team Needs. <span className="gradient-text-coral">No Per-User Fees.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.6, color: 'var(--slate)', marginBottom: '2rem' }}>
            Unlimited users, unlimited documents, one flat price — with the workflows, integrations, and compliance U.S. teams expect.
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

      {/* Flat-price reinforcement */}
      <section style={{ background: 'var(--navy)', padding: '1.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: '#fff', fontSize: '1rem', fontWeight: 600, margin: 0 }}>
            Every feature below is included for <span style={{ color: 'var(--coral)' }}>unlimited users</span> at one flat price — no per-seat upcharges, ever.
          </p>
        </div>
      </section>

      <CategorySection
        id="send-sign"
        eyebrow="Send & Sign"
        heading="Get signatures however your signers prefer"
        description="From SMS requests to guarantor collection to handwritten signatures — built for the way U.S. contracts actually get signed."
        items={sendAndSign}
        background="#fff"
      />

      <CategorySection
        id="automate-workflows"
        eyebrow="Automate Workflows"
        heading="Cut the manual steps out of every contract"
        description="Route approvals, reuse templates, and send in bulk — so your team spends time closing deals, not chasing signatures."
        items={automateWorkflows}
        background="var(--sky)"
      />

      <CategorySection
        id="stay-compliant"
        eyebrow="Stay Compliant"
        heading="Every signature holds up — in court and in an audit"
        description="ESIGN Act and UETA-compliant by default, with certified timestamps, role-based access, and two-factor authentication built in."
        items={stayCompliant}
        background="#fff"
      />

      <CategorySection
        id="connect-your-tools"
        eyebrow="Connect Your Tools"
        heading="Works with the stack you already run on"
        description="Native Office file support, a full Web API, and direct Salesforce and Google Drive integrations — no middleware required."
        items={connectYourTools}
        background="var(--sky)"
      />

      {/* Closing CTA */}
      <section style={{ background: 'var(--navy)', padding: '4.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Everything above. One price. However many people need it.
          </h2>
          <p style={{ color: '#9BAAC7', fontSize: '1.05rem', marginBottom: '2rem' }}>
            See exactly what unlimited users at one flat price looks like for your team.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={open} className="btn btn-coral" style={{ padding: '16px 32px', fontSize: '15px' }}>
              Start Free Trial — No Credit Card Required <ArrowRight size={18} />
            </button>
            <Link to="/contact" className="btn btn-outline-navy" style={{ padding: '16px 32px', fontSize: '15px', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
              Book a 15-Minute Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
