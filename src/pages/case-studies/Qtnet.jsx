import CaseStudyTemplate from '../../components/CaseStudyTemplate';

export default function Qtnet() {
  return (
    <CaseStudyTemplate
      industry="Technology & Software"
      title="QTnet Migrates 4,500 Contracts to SignTime With Zero Downtime, Cuts Costs 25%"
      subhead="An ICT provider running a high volume of active contracts needed to switch e-signature platforms without disrupting a single in-flight agreement — and without paying more to do it."
      metrics={[
        { value: '4,500', label: 'contracts migrated with zero downtime' },
        { value: '25%', label: 'annual cost reduction' },
      ]}
      sections={[
        {
          heading: 'The problem: an expensive platform, and a risky migration',
          body: [
            'QTnet was paying more than it needed to on its previous e-signature provider, but switching platforms meant migrating roughly 4,500 active and historical contracts without losing continuity on anything already in progress.',
          ],
        },
        {
          heading: 'The fix: a guided, zero-downtime migration',
          body: [
            'The full contract archive moved to SignTime with zero downtime — no gap where documents were unreachable, no disruption to contracts already mid-signature. Once migrated, the same unlimited-user, flat-rate pricing cut QTnet\'s annual e-signature costs by 25%.',
          ],
        },
        {
          heading: 'Why it matters for switching teams',
          body: [
            "QTnet's experience is the proof point for any team worried that switching e-signature providers is too risky: a large, active contract volume moved cleanly, and the cost savings showed up immediately afterward.",
          ],
        },
      ]}
    />
  );
}
