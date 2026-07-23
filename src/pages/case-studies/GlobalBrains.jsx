import CaseStudyTemplate from '../../components/CaseStudyTemplate';

export default function GlobalBrains() {
  return (
    <CaseStudyTemplate
      industry="Professional & Financial Services"
      title="Global Brains Cuts NDA Turnaround From Three Weeks to One Day"
      subhead="A venture capital firm signs NDAs constantly — with founders, portfolio companies, and co-investors — and a three-week cycle time was slowing down every deal behind it."
      metrics={[
        { value: '3 weeks → 1 day', label: 'contract cycle time' },
        { value: '~50%', label: 'less NDA-related workload' },
      ]}
      sections={[
        {
          heading: 'The problem: NDAs are high-volume, and slow',
          body: [
            'For a venture capital firm, the NDA is the most common document in the building — signed before nearly every conversation that matters. Global Brains was seeing contract cycles stretch up to three weeks, with General Affairs staff absorbing most of that workload manually.',
          ],
        },
        {
          heading: 'The fix: same-day NDAs, less manual handling',
          body: [
            'Moving NDA generation and signing onto SignTime cut cycle time from three weeks down to same-day or next-day turnaround, and reduced the General Affairs team\'s NDA-related workload by roughly half.',
          ],
        },
        {
          heading: 'Built-in audit trail',
          body: [
            "Every NDA carries a complete, timestamped audit trail by default — the kind of paper trail a venture firm's legal counterparts expect to see without having to ask for it.",
          ],
        },
      ]}
    />
  );
}
