// TEMPORARY — Step 1 preview only. Not part of the app; remove before Step 2.
import WorkflowDiagram from '../components/WorkflowDiagram';
import { workflowBySlug } from '../data/workflows';

export default function WorkflowPreview() {
  const workflow = workflowBySlug('construction');

  return (
    <div style={{ padding: '4rem 1.5rem', maxWidth: 1100, margin: '0 auto' }}>
      <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy)', marginBottom: '0.5rem' }}>{workflow.title}</h1>
      <p style={{ color: 'var(--slate)', marginBottom: '3rem', maxWidth: '60ch' }}>{workflow.intro}</p>
      <WorkflowDiagram workflow={workflow} />
    </div>
  );
}
