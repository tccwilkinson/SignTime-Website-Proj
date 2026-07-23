import CaseStudyTemplate from '../../components/CaseStudyTemplate';

export default function HimenoGumi() {
  return (
    <CaseStudyTemplate
      industry="Construction"
      title="Himeno-Gumi Finalizes Contracts the Same Day Instead of a Week Later"
      subhead="A construction firm was losing a week at a time to contract finalization — time that pushed back everything scheduled after it, from material orders to crew assignments."
      metrics={[
        { value: '~1 week → same day', label: 'contract finalization time' },
      ]}
      sections={[
        {
          heading: 'The problem: a week lost before work could start',
          body: [
            'In construction, a contract sitting unsigned holds up everything downstream of it. Himeno-Gumi was routinely seeing about a week pass between drafting a contract and getting it fully executed — a week where scheduling, ordering, and staffing all had to wait.',
          ],
        },
        {
          heading: 'The fix: approval workflows and storage, included standard',
          body: [
            'SignTime brought internal approval workflows and document storage that competing tools charged extra for. Contracts route for internal sign-off and land in permanent storage automatically, without a separate add-on purchase.',
          ],
        },
        {
          heading: 'The result',
          body: [
            'Contract finalization dropped from about a week to the same day. Crews and material orders move on schedule instead of waiting on paperwork.',
          ],
        },
      ]}
    />
  );
}
