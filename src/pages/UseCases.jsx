import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { workflowBySlug } from '../data/workflows';
import WorkflowDiagram from '../components/WorkflowDiagram';
import './UseCases.css';

const VERTICALS = [
  { id: 'construction', name: 'Construction', slugs: ['construction'] },
  { id: 'real-estate', name: 'Real Estate', slugs: ['real-estate-leasing', 'real-estate-sales'] },
  { id: 'property-management', name: 'Property Management', slugs: ['property-management'] },
  { id: 'corporate-governance', name: 'Corporate Governance', slugs: ['legal-corporate'] },
  { id: 'sales-accounting', name: 'Sales & Accounting', slugs: ['sales', 'finance-operations'] },
  { id: 'manufacturing-qa', name: 'Manufacturing / QA', slugs: ['manufacturing'] },
  { id: 'education', name: 'Education', slugs: ['education'] },
  { id: 'salesforce', name: 'Salesforce', slugs: ['salesforce'] },
];

const BY_WORKFLOW = {
  id: 'by-workflow',
  name: 'By Workflow',
  slugs: ['human-resources', 'internal-approval', 'bulk-send', 'delegation', 'sms-signing'],
};

const SECTIONS = [...VERTICALS, BY_WORKFLOW];

function VerticalSection({ id, name, slugs }) {
  const workflows = slugs.map(workflowBySlug).filter(Boolean);

  return (
    <section id={id} className="uc-section">
      <h2 className="uc-h2">{name}</h2>
      {workflows.length === 1 ? (
        <>
          <p className="uc-intro">{workflows[0].intro}</p>
          <WorkflowDiagram workflow={workflows[0]} />
        </>
      ) : (
        workflows.map((workflow) => (
          <div key={workflow.slug} id={workflow.slug} className="uc-subblock">
            <h3 className="uc-h3">{workflow.title}</h3>
            <p className="uc-intro">{workflow.intro}</p>
            <WorkflowDiagram workflow={workflow} />
          </div>
        ))
      )}
    </section>
  );
}

export default function UseCases() {
  // Plain <a href="#id"> would collide with HashRouter (which reads the URL
  // hash for routing), so jump links scroll manually instead.
  const jumpTo = (id) => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  };

  // Cross-page nav links (e.g. the Navbar's Solutions menu) arrive as
  // /use-cases#some-id. React Router's classic mode doesn't auto-scroll to a
  // hash the way a plain browser anchor would, so do it manually. A single
  // scroll can land a few px short if content above the target is still
  // settling (fonts, diagram detail-panel height) when the scroll starts, so
  // a second corrective pass after things have settled keeps it accurate.
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) return undefined;
    const id = location.hash.slice(1);
    const first = setTimeout(() => jumpTo(id), 0);
    const correction = setTimeout(() => jumpTo(id), 700);
    return () => {
      clearTimeout(first);
      clearTimeout(correction);
    };
  }, [location]);

  return (
    <div className="uc-page">
      <h1 className="uc-title">Use Cases</h1>

      <nav className="uc-subnav" aria-label="Jump to section">
        <div className="uc-subnav-inner">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              type="button"
              className="uc-subnav-link"
              onClick={() => jumpTo(section.id)}
            >
              {section.name}
            </button>
          ))}
        </div>
      </nav>

      <div className="container">
        {VERTICALS.map((vertical) => (
          <VerticalSection key={vertical.id} {...vertical} />
        ))}
        <VerticalSection {...BY_WORKFLOW} />
      </div>
    </div>
  );
}
