import CaseStudyTemplate from '../../components/CaseStudyTemplate';

export default function CodeChrysalis() {
  return (
    <CaseStudyTemplate
      industry="Education"
      title="Code Chrysalis Cuts Annual E-Signature Costs by 40% With Flat-Rate Pricing"
      subhead="A coding school with a growing HR and admissions team was paying for every additional seat on its old e-signature tool — and rationing access to stay within budget."
      metrics={[
        { value: '~40%', label: 'lower annual e-signature costs' },
        { value: 'Unlimited', label: 'staff access, no per-seat limit' },
      ]}
      sections={[
        {
          heading: 'The problem: per-seat pricing limited who could sign',
          body: [
            "Code Chrysalis's previous e-signature tool charged per user. That meant only a handful of admissions and HR staff had accounts, and everyone else had to route documents through them — creating a bottleneck for something as routine as an enrollment agreement or an offer letter.",
          ],
        },
        {
          heading: 'The fix: unlimited users, one flat price',
          body: [
            "Switching to SignTime's flat-rate plan meant every staff member who needed to send or sign a document could get an account — admissions, HR, and operations — without the bill changing. Annual costs dropped by approximately 40% in the process.",
          ],
        },
        {
          heading: 'The result',
          body: [
            'Removing the per-seat ceiling didn\'t just cut costs — it removed the access bottleneck entirely. Staff send enrollment agreements and employment contracts directly, without waiting on a small pool of licensed users.',
          ],
        },
      ]}
    />
  );
}
