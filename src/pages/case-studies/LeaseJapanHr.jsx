import CaseStudyTemplate from '../../components/CaseStudyTemplate';

export default function LeaseJapanHr() {
  return (
    <CaseStudyTemplate
      industry="Real Estate & Relocation"
      title="H&R Consultants Switches E-Signature Providers for a Simpler, Faster Workflow"
      subhead="A leasing and relocation consultancy was already using an established e-signature provider — but its team found the day-to-day experience of getting a lease signed was slower than it needed to be."
      metrics={[
        { value: 'Switched', label: 'from an established e-signature provider' },
      ]}
      sections={[
        {
          heading: 'The problem: a well-known tool, a clunky workflow',
          body: [
            "H&R Consultants wasn't struggling with a lack of features — it was struggling with day-to-day usability. Getting a lease agreement from draft to fully signed took more steps and more back-and-forth than the team felt it should.",
          ],
        },
        {
          heading: 'The fix: an easier tool to actually use',
          body: [
            "The switch to SignTime came down to ease of use — a simpler signing flow that took less training and fewer steps to get a lease agreement executed, with support for teams working across languages.",
          ],
        },
        {
          heading: 'The result',
          body: [
            'The switching narrative itself is the proof point: a team already on an established e-signature platform still found enough of an improvement in day-to-day usability to move — and to reduce the friction for teams that need accessibility across languages.',
          ],
        },
      ]}
    />
  );
}
