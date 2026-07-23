import CaseStudyTemplate from '../../components/CaseStudyTemplate';

export default function TempleUniversityJapan() {
  return (
    <CaseStudyTemplate
      industry="Education"
      title="Temple University Japan Replaces 300 Individual Contracts With One Bulk Send"
      subhead="Temple University's Japan campus needed a faster way to get hundreds of employment and vendor contracts signed each term — without emailing them out one at a time."
      metrics={[
        { value: '300+', label: 'contracts sent in a single bulk send' },
        { value: '1', label: 'template, reused every term' },
      ]}
      quote={{
        text: 'SignTime offers the same functionality as competing services, but at a more affordable price point.',
        attribution: 'Temple University, Japan Campus',
      }}
      sections={[
        {
          heading: 'The problem: 300 contracts, one at a time',
          body: [
            "Temple University's Japan campus was sending contracts to staff and vendors individually — drafting, attaching, and tracking each one by hand. At the start of every term, that meant repeating the same process roughly 300 times.",
          ],
        },
        {
          heading: 'The fix: templates and bulk sending',
          body: [
            'The university built its standard contracts as reusable SignTime templates, then used bulk sending to push all 300+ documents out in a single batch instead of one email at a time. What used to be a term-long slog now happens in one sitting.',
          ],
        },
        {
          heading: 'Why it stuck',
          body: [
            "Temple's team compared SignTime directly against the e-signature tools they'd used before and found the same core functionality — templates, bulk send, audit trails — at a lower price per year. For an institution processing hundreds of contracts a term, that gap adds up fast.",
          ],
        },
      ]}
      relatedNote="Laurus International School saw a similar result in its HR department — digitizing 150–200 employment contracts a year and eliminating scan-related data entry errors using the same template and bulk-send workflow."
    />
  );
}
