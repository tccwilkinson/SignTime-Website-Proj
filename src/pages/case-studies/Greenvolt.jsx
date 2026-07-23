import CaseStudyTemplate from '../../components/CaseStudyTemplate';

export default function Greenvolt() {
  return (
    <CaseStudyTemplate
      industry="Energy"
      title="Greenvolt Cuts Contract Turnaround From a Month to 2–3 Days"
      subhead="A renewable energy group operating across Europe, North America, and Asia needed a contract process that could keep pace with deal timelines across every region it operates in."
      metrics={[
        { value: '1 month → 2–3 days', label: 'contract turnaround time' },
        { value: 'Faster', label: 'NDA execution across regions' },
      ]}
      sections={[
        {
          heading: 'The problem: deal timelines outrunning paperwork',
          body: [
            "Greenvolt's international footprint means contracts and NDAs move across time zones and legal teams constantly. Turnaround that used to take about a month was becoming a bottleneck on deals that needed to move faster.",
          ],
        },
        {
          heading: 'The fix: e-signatures that keep up with global deal flow',
          body: [
            "Standardizing on SignTime cut contract turnaround from about a month down to 2–3 days, with legally binding audit trails under the U.S. ESIGN Act and UETA giving every regional team the same compliance footing.",
          ],
        },
        {
          heading: 'The result',
          body: [
            'Faster NDA execution now accelerates deal timelines across Greenvolt\'s international operations, instead of paperwork setting the pace.',
          ],
        },
      ]}
    />
  );
}
