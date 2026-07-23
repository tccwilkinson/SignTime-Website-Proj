import CaseStudyTemplate from '../../components/CaseStudyTemplate';

export default function KcDat() {
  return (
    <CaseStudyTemplate
      industry="Real Estate & Relocation"
      title="K.C. DAT Cuts International Moving Contracts From Days to Minutes With Mobile Signing"
      subhead="An international moving and relocation company, headquartered in Singapore with cross-border operations, needed signers to complete paperwork from wherever they were — often mid-move, on a phone."
      metrics={[
        { value: '90%', label: 'faster document turnaround' },
        { value: '20% → 0%', label: 'form error rate' },
      ]}
      sections={[
        {
          heading: 'The problem: signers on the move, forms full of errors',
          body: [
            "K.C. DAT's customers are relocating internationally — often mid-move, without easy access to a printer or a desktop computer. Paper-based and PDF-print-sign-scan workflows meant slow turnaround and a form error rate around 20%, since handwritten fields were easy to fill in wrong or skip entirely.",
          ],
        },
        {
          heading: 'The fix: mobile-first signing',
          body: [
            "Moving the entire contract flow to SignTime's mobile signing experience let customers complete and sign paperwork from a phone, wherever they were in transit. Structured fields replaced blank handwritten sections, cutting the form error rate to zero.",
          ],
        },
        {
          heading: 'The result: faster contracts, no hidden costs',
          body: [
            'Document turnaround dropped by roughly 90%. And because SignTime charges one flat rate regardless of how many people across K.C. DAT\'s Singapore and cross-border teams need access, there were no hidden per-seat costs to budget around as the team grew.',
          ],
        },
      ]}
    />
  );
}
