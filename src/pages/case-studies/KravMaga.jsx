import CaseStudyTemplate from '../../components/CaseStudyTemplate';

export default function KravMaga() {
  return (
    <CaseStudyTemplate
      industry="Professional & Financial Services"
      title="99% of Applications Digitized With a Native Salesforce Integration"
      subhead="A multi-location fitness and martial arts studio chain runs enrollment, waivers, and membership paperwork through Salesforce — and needed e-signatures that lived inside that system, not bolted on beside it."
      metrics={[
        { value: '99%', label: 'of applications digitized' },
        { value: 'Native', label: 'Salesforce integration' },
      ]}
      sections={[
        {
          heading: 'The problem: signatures living outside the CRM',
          body: [
            "The business runs its entire member and enrollment pipeline through Salesforce. Every signature workflow that lived outside it — a separate e-signature portal, a separate login, a separate status to check — was friction for staff already juggling a CRM-first process.",
          ],
        },
        {
          heading: "The fix: signatures inside Salesforce, not next to it",
          body: [
            "SignTime's native Salesforce integration let the team request signatures and track completion status without ever leaving Salesforce. Enrollment forms, waivers, and membership agreements route and complete inside the same system staff already use for everything else.",
          ],
        },
        {
          heading: 'The result',
          body: [
            '99% of applications now complete digitally, with signature status visible directly on the Salesforce record — no second system to check, no status update to manually sync.',
          ],
        },
      ]}
    />
  );
}
