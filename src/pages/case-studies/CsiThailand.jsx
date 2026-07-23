import CaseStudyTemplate from '../../components/CaseStudyTemplate';

export default function CsiThailand() {
  return (
    <CaseStudyTemplate
      industry="Professional & Financial Services"
      title="C.S.I. Thailand Cuts Internal Approval Time From Two Weeks to One Day"
      subhead="An international operations team needed internal sign-off to stop being the slowest step in an otherwise fast-moving contract process."
      metrics={[
        { value: '2 weeks → 1 day', label: 'internal approval time' },
      ]}
      sections={[
        {
          heading: 'The problem: internal approval, the real bottleneck',
          body: [
            'The contract itself wasn\'t the slow part — getting internal sign-off before it could go out was. C.S.I. Thailand was seeing internal approvals take up to two weeks, even on routine agreements.',
          ],
        },
        {
          heading: 'The fix: approval workflows and bulk sending, together',
          body: [
            "Internal approval workflows routed documents to the right approver automatically, and bulk sending combined with SignTime's API integration let the team push high volumes of approved contracts out without manual handling.",
          ],
        },
        {
          heading: 'The result: proof SignTime works internationally',
          body: [
            "Internal approval time dropped from two weeks to one day. As an international operation, C.S.I. Thailand's result is proof that SignTime's workflow holds up outside a single home market.",
          ],
        },
      ]}
    />
  );
}
