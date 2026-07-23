import CaseStudyTemplate from '../../components/CaseStudyTemplate';

export default function Curvegrid() {
  return (
    <CaseStudyTemplate
      industry="Technology & Software"
      title="Curvegrid Drops Its Monthly Document Cap Without Raising Its Bill"
      subhead="A software company was hitting the monthly document ceiling on its previous e-signature plan on a regular basis — and paying overage fees to get past it."
      metrics={[
        { value: 'No cap', label: 'on monthly documents sent' },
        { value: 'Flat rate', label: 'regardless of volume' },
      ]}
      sections={[
        {
          heading: 'The problem: a monthly ceiling on a growing business',
          body: [
            "Curvegrid's previous provider capped how many documents the team could send each month before overage charges kicked in. As the business grew, hitting that ceiling stopped being an edge case and started being routine.",
          ],
        },
        {
          heading: 'The fix: no cap, no overage math',
          body: [
            "Switching to SignTime removed the monthly ceiling entirely. The team sends however many documents the month actually requires, at the same flat price, without checking a usage dashboard first.",
          ],
        },
        {
          heading: "Why it stuck",
          body: [
            "Curvegrid's CEO led the evaluation directly and compared cost performance against the incumbent tool. The flat-rate, no-cap model made SignTime's costs predictable in a way a per-document ceiling never could be.",
          ],
        },
      ]}
    />
  );
}
