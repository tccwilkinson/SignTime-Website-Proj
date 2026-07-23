import CaseStudyTemplate from '../../components/CaseStudyTemplate';

export default function Hccr() {
  return (
    <CaseStudyTemplate
      industry="Professional & Financial Services"
      title="HCCR Cuts Contract Time and HR Cost by 75% Across a Global Client Base"
      subhead="A firm serving clients across multiple countries needed a contract process that worked the same way regardless of where a client or a document happened to be."
      metrics={[
        { value: '75%', label: 'reduction in contract time & HR cost' },
      ]}
      quote={{
        text: 'SignTime reduced the time and HR cost of a typical contract by 75%.',
        attribution: 'HCCR',
      }}
      sections={[
        {
          heading: 'The problem: contracts across borders, on paper',
          body: [
            "With clients spread across multiple countries, HCCR's contract process depended on physical signatures, courier delays, and HR staff time spent chasing down completed paperwork — a real cost for a business built on serving international clients.",
          ],
        },
        {
          heading: 'The fix: one contract process, wherever the client is',
          body: [
            'Moving to SignTime meant every client — regardless of country — signed through the same digital process. No more couriering documents across borders or waiting days for a signature to come back.',
          ],
        },
        {
          heading: 'The result',
          body: [
            'The time and HR cost of processing a typical contract dropped by 75%, freeing staff who used to spend their time tracking down signatures to focus on client work instead.',
          ],
        },
      ]}
    />
  );
}
