import CaseStudyTemplate from '../../components/CaseStudyTemplate';

export default function Rotoworks() {
  return (
    <CaseStudyTemplate
      industry="Staffing & Recruiting"
      title="Rotoworks Cuts Contract Turnaround From a Month to 1–3 Days"
      subhead="An IT staffing and recruiting firm was losing candidates and clients to slow paperwork — contracts that used to take up to a month to finalize were costing placements."
      metrics={[
        { value: '1 month → 1–3 days', label: 'contract turnaround time' },
      ]}
      sections={[
        {
          heading: 'The problem: paperwork slower than the placement',
          body: [
            'In IT staffing, speed matters — a candidate or a client can move on before a contract is finalized. Rotoworks was regularly seeing contracts take up to a month to fully execute, well past the pace its recruiting business needed to move at.',
          ],
        },
        {
          heading: 'The fix: e-signatures built for a staffing workflow',
          body: [
            'Moving contracts, offer letters, and client agreements onto SignTime cut turnaround from up to a month down to 1–3 days. Recruiters send documents the moment terms are agreed, instead of waiting on a mail or in-person signing process.',
          ],
        },
        {
          heading: 'The result',
          body: [
            "For a staffing business, a contract that closes in days instead of weeks is the difference between winning a placement and losing it to a faster-moving competitor. Rotoworks' team now treats contract turnaround as a non-issue.",
          ],
        },
      ]}
    />
  );
}
