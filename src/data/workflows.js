// SignTime — US workflow diagrams
// Each entry powers one animated step-through diagram.
// `category` maps to the /solutions/:category/:slug route structure.

export const workflows = [
  // ─────────────────────────────────────────────────────────────
  // INDUSTRY
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'construction',
    category: 'industry',
    title: 'Construction',
    subtitle: 'Subcontractor agreements, routed and signed without leaving your system',
    intro:
      'Prime contractors send subcontract agreements and itemized statements straight from their existing system. Internal approvals run automatically, and the subcontractor signs from a phone in the field.',
    lanes: ['Your company', 'Subcontract-or'],
    steps: [
      { n: 1, lane: 'Your company', title: 'Create and send', body: 'Your project team creates the subcontract agreement in your existing system and dispatches it via the SignTime API.' },
      { n: 2, lane: 'Your company', title: 'Route for approval', body: 'The agreement and itemized statement enter automated internal approval routing powered by SignTime.' },
      { n: 3, lane: 'Your company', title: 'Internal sign-off', body: 'Project Manager, Operations Manager, and Division Director approve in sequence. Any rejection returns it to the sender.' },
      { n: 4, lane: 'Subcontract-or', title: 'Sign from the field', body: 'The subcontractor\'s owner receives the document link by SMS, reviews it, and signs from a phone. No app, no account, no printer.' },
      { n: 5, lane: 'Your company', title: 'Execute and store', body: 'The executed agreement is cryptographically sealed and archived in the SignTime cloud with a full audit trail.' },
      { n: 6, lane: 'Your company', title: 'Sync back', body: 'The executed document link writes back to your system of record automatically through SignTime.' },
    ],
    features: ['Web API', 'Internal approval workflow', 'SMS signature requests', 'Audit trail'],
    outcome: 'Agreements that took a week of mailing and chasing close the same day.',
  },

  {
    slug: 'real-estate-leasing',
    category: 'industry',
    title: 'Real Estate — Leasing',
    subtitle: 'Lease, disclosures, and application signed by everyone who needs to sign',
    intro:
      'A lease involves more than two parties. Agent, tenant, co-signer, and owner each sign in turn — and nobody has to be in the same room.',
    lanes: ['Your company', 'Agent', 'Tenant', 'Owner'],
    steps: [
      { n: 1, lane: 'Your company', title: 'Prepare and send', body: 'Prepare the lease agreement, required disclosures, and rental application. Set the agent as Signer 1 and the owner as Signer 2, then send via SignTime.' },
      { n: 2, lane: 'Agent', title: 'Review and delegate', body: 'The agent reviews the package and delegates the tenant portion to the applicant in one click.' },
      { n: 3, lane: 'Tenant', title: 'Sign — and add a co-signer', body: 'The tenant signs. If a co-signer or guarantor is required, SignTime automatically routes it to them without restarting.' },
      { n: 4, lane: 'Agent', title: 'Delegate to owner', body: 'The signed lease is delegated seamlessly to the property owner for countersignature.' },
      { n: 5, lane: 'Owner', title: 'Countersign', body: 'The owner signs from wherever they are — no office visit, no scanning required.' },
      { n: 6, lane: 'Your company', title: 'Store and manage', body: 'The complete executed package is managed securely in the cloud, searchable and retrievable via SignTime.' },
    ],
    features: ['Guarantor', 'Delegation', 'Sequential signing', 'Templates'],
    outcome: 'A relocating couple can both sign from two different cities on the same afternoon.',
  },

  {
    slug: 'real-estate-sales',
    category: 'industry',
    title: 'Real Estate — Sales',
    subtitle: 'Purchase agreements and disclosures, approved internally before they reach the client',
    intro:
      'Brokerage and purchase agreements go through internal review first, then out to buyer and seller together — so nothing reaches a client before it is right.',
    lanes: ['Your company', 'Buyer & Seller'],
    steps: [
      { n: 1, lane: 'Your company', title: 'Send the package', body: 'Your agent sends the brokerage agreement, purchase agreement, and required disclosures via SignTime.' },
      { n: 2, lane: 'Your company', title: 'Internal approval', body: 'Internal approval workflow runs through SignTime — a second set of eyes before anything leaves the office.' },
      { n: 3, lane: 'Buyer & Seller', title: 'Request signatures', body: 'Once approved, signature requests dispatch automatically to buyer and seller by email or SMS.' },
      { n: 4, lane: 'Buyer & Seller', title: 'Both parties sign', body: 'Buyer and seller each sign securely from any device.' },
      { n: 5, lane: 'Your company', title: 'Execute and store', body: 'The executed transaction file is archived in the SignTime cloud with full legal timestamps.' },
    ],
    features: ['Internal approval workflow', 'SMS signature requests', 'Multiple signers', 'Audit trail'],
    outcome: 'Catch the error before the client sees it, not after.',
  },

  {
    slug: 'property-management',
    category: 'industry',
    title: 'Property Management',
    subtitle: 'Service agreements across an agency network, new and renewal',
    intro:
      'Bulk-send service applications with sequential control numbers across your entire agency network, and let residents sign on a tablet at the desk or on their own phone.',
    lanes: ['Your company', 'Agency network', 'Resident'],
    steps: [
      { n: 1, lane: 'Your company', title: 'Bulk send', body: 'Send service applications in bulk via SignTime with sequential control numbers assigned automatically.' },
      { n: 2, lane: 'Agency network', title: 'Distributed access', body: 'Every agency in your network works from their own workspace with role-based access.' },
      { n: 3, lane: 'Agency network', title: 'Complete and forward', body: 'Agency staff enter property details and forward directly to the resident via SignTime.' },
      { n: 4, lane: 'Resident', title: 'Sign on any device', body: 'The resident completes and signs the application on a phone or on a tablet at the leasing desk.' },
      { n: 5, lane: 'Your company', title: 'Service begins', body: 'Your service team receives real-time notification via SignTime and onboarding starts immediately.' },
    ],
    renewalNote: {
      title: 'At renewal',
      steps: [
        'Your team sends current service terms to the responsible agency for confirmation via SignTime',
        'The agency confirms and signs',
        'The resident updates any changed information and signs',
      ],
    },
    features: ['Bulk send', 'Templates', 'Group management', 'Tablet signing'],
    outcome: 'Hundreds of renewals handled without a single piece of paper.',
  },

  {
    slug: 'manufacturing',
    category: 'industry',
    title: 'Manufacturing & Quality Assurance',
    subtitle: 'Controlled documents signed off across every production line',
    intro:
      'Quality plans, standards, SOPs, audit reports, and inspection certificates need documented sign-off from named people. SignTime routes each document to the right chain and keeps the record.',
    lanes: ['QA department', 'Production lines'],
    steps: [
      { n: 1, lane: 'QA department', title: 'Issue the document', body: 'QA staff issue quality plans, standards, SOPs, audit reports, or inspection certificates from a SignTime template.' },
      { n: 2, lane: 'QA department', title: 'Route by line', body: 'Each document routes via SignTime to the correct approval chain for its production line.' },
      { n: 3, lane: 'Production lines', title: 'Sequential sign-off', body: 'Line supervisors and inspectors sign in order. Every signature is timestamped and attributable.' },
      { n: 4, lane: 'QA department', title: 'Retain the record', body: 'Executed documents are retained in SignTime with a tamper-evident audit trail ready for inspection.' },
    ],
    features: ['Sequential signing', 'Templates', 'Advanced search', 'Detailed audit logs'],
    outcome: 'When an auditor asks who approved revision 4, you have the answer in seconds.',
  },

  {
    slug: 'education',
    category: 'industry',
    title: 'Higher Education',
    subtitle: 'Hundreds of instructor agreements in one click',
    intro:
      'A university sending adjunct and instructor agreements one at a time each term loses days to it. One CSV import replaces the entire process.',
    lanes: ['University', 'Instructors'],
    steps: [
      { n: 1, lane: 'University', title: 'Build the list', body: 'Export the term\'s instructor list — roughly 300 people — as a CSV file.' },
      { n: 2, lane: 'University', title: 'Import and merge', body: 'Import the CSV against your agreement template in SignTime. Fields populate automatically.' },
      { n: 3, lane: 'University', title: 'Send in one click', body: 'All 300 signature requests go out simultaneously via SignTime.' },
      { n: 4, lane: 'Instructors', title: 'Each instructor signs', body: 'Every instructor receives their own personalized agreement link and signs from any device.' },
      { n: 5, lane: 'University', title: 'Track completion', body: 'Track who has signed and who has not from the SignTime dashboard, and send automated reminders.' },
    ],
    features: ['CSV bulk send', 'Templates', 'Reminders', 'Status tracking'],
    outcome: 'Signature requests that used to be sent one at a time now go to hundreds of people at once.',
    proof: 'Based on a live SignTime deployment at a major university campus.',
  },

  // ─────────────────────────────────────────────────────────────
  // TEAM
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'human-resources',
    category: 'team',
    title: 'Human Resources',
    subtitle: 'From offer letter to first day, without a printer',
    intro:
      'Offer letters, employment agreements, consent forms, equipment loan forms, emergency contacts — all of onboarding, sent as one package and signed on a phone.',
    lanes: ['HR', 'Approvers', 'Candidate'],
    steps: [
      { n: 1, lane: 'HR', title: 'Prepare the offer', body: 'HR creates the offer approval request with the draft offer letter attached.' },
      { n: 2, lane: 'Approvers', title: 'Internal approval', body: 'HR Director, hiring manager, and department head approve in sequence via SignTime.' },
      { n: 3, lane: 'HR', title: 'Prepare for signature', body: 'Approved documents move forward via SignTime automatically, with signature fields placed on the offer letter.' },
      { n: 4, lane: 'Candidate', title: 'Candidate signs', body: 'The candidate signs by email or SMS — most sign within minutes of receiving it.' },
      { n: 5, lane: 'HR', title: 'Store and notify', body: 'The executed package is stored in SignTime and HR is notified. Download to your HRIS as needed.' },
    ],
    documents: ['Offer letters', 'Employment agreements', 'Consent forms', 'Confidentiality agreements', 'Equipment loan forms', 'Emergency contact forms'],
    features: ['Bulk send', 'Templates', 'SMS', 'Delegation', 'Signer ID attachment', 'Internal approval workflow'],
    outcome: 'Offer out, offer signed, same day — before your candidate takes another call.',
  },

  {
    slug: 'sales',
    category: 'team',
    title: 'Sales',
    subtitle: 'Quotes and contracts approved internally, signed by whoever actually has authority',
    intro:
      'Your contact at the account is often not the person who can sign. Delegation lets them pass it to the right person without you having to know the org chart.',
    lanes: ['Your company', 'Approvers', 'Client contact', 'Client signer'],
    steps: [
      { n: 1, lane: 'Your company', title: 'Send the document', body: 'Your rep sends the quote, service agreement, statement of work, or invoice via SignTime.' },
      { n: 2, lane: 'Approvers', title: 'Internal approval first', body: 'Before it reaches the client, it routes through internal approval via SignTime — pricing and terms get a second review.' },
      { n: 3, lane: 'Client contact', title: 'Your contact reviews', body: 'Your contact at the account receives it, reviews it, and confirms it is correct.' },
      { n: 4, lane: 'Client signer', title: 'Delegated to the signer', body: 'They delegate it to the person with signing authority — their director, their CFO, whoever it needs to be.' },
      { n: 5, lane: 'Your company', title: 'Closed and stored', body: 'The executed agreement is stored in SignTime and the deal is closed.' },
    ],
    documents: ['NDAs', 'Quotes', 'Service agreements', 'Statements of work', 'Delivery notes', 'Invoices'],
    features: ['Delegation', 'Internal approval workflow', 'Salesforce integration', 'Templates'],
    outcome: 'No more "let me find out who signs this" — the deal routes itself.',
  },

  {
    slug: 'finance-operations',
    category: 'team',
    title: 'Finance & Operations',
    subtitle: 'Purchase orders and vendor agreements with approval built in',
    intro:
      'Quotes, purchase orders, itemized statements, delivery notes, and work reports all follow the same path: internal approval, then external signature, then the archive.',
    lanes: ['Your company', 'Approvers', 'Vendor'],
    steps: [
      { n: 1, lane: 'Your company', title: 'Create and send', body: 'Create the quote, purchase order, itemized statement, or work report and send through SignTime.' },
      { n: 2, lane: 'Approvers', title: 'Approval before send', body: 'The document routes to internal approval via SignTime before it reaches the signer.' },
      { n: 3, lane: 'Vendor', title: 'Vendor reviews', body: 'The vendor contact reviews and delegates to their owner or officer for signature.' },
      { n: 4, lane: 'Vendor', title: 'Signed and returned', body: 'The signer reviews, signs, and downloads their copy.' },
      { n: 5, lane: 'Your company', title: 'Archived', body: 'The executed document is stored in the SignTime cloud, tagged and searchable.' },
    ],
    documents: ['Quotes', 'Purchase orders', 'Itemized statements', 'Delivery notes', 'Work reports', 'Vendor agreements'],
    features: ['Internal approval workflow', 'Delegation', 'Document tagging', 'Advanced search'],
    outcome: 'Every dollar committed has a signature and a timestamp behind it.',
  },

  {
    slug: 'legal-corporate',
    category: 'team',
    title: 'Legal & Corporate Governance',
    subtitle: 'Board consents and officer appointments, in order or all at once',
    intro:
      'Corporate records need signatures from specific people, sometimes in a specific order. SignTime handles both patterns from the same template.',
    lanes: ['Corporate secretary', 'Directors'],
    variants: [
      {
        title: 'When order matters',
        steps: [
          { n: 1, title: 'Upload the packet', body: 'Upload board minutes and consents via SignTime; attach files to the signature template.' },
          { n: 2, title: 'Turn on sequential signing', body: 'Enable sequential signing and long-term signature validation.' },
          { n: 3, title: 'Route in order', body: 'Director 1, then Director 2, then the Chair — each notified only when it is their turn.' },
        ],
      },
      {
        title: 'When order does not matter',
        steps: [
          { n: 1, title: 'Import the roster', body: 'Import the director roster as a CSV against the consent template.' },
          { n: 2, title: 'Bulk send', body: 'Send to every director at once via SignTime with long-term signature validation enabled.' },
          { n: 3, title: 'Collect in parallel', body: 'All directors sign independently. Track completion in one view.' },
        ],
      },
    ],
    documents: ['Board minutes', 'Written consents', 'Officer appointments', 'NDAs'],
    features: ['Sequential signing', 'Bulk send', 'Long-term signature validation', 'Audit trail'],
    outcome: 'A clean corporate record without chasing five calendars.',
  },

  // ─────────────────────────────────────────────────────────────
  // USE CASE
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'internal-approval',
    category: 'use-case',
    title: 'Internal Approval Before Sending',
    subtitle: 'Four eyes on every document before it leaves your company',
    intro:
      'It is hard to catch a mistake in your own work. Internal approval puts a second reviewer in front of every document — before a client ever sees it.',
    lanes: ['Sender', 'Approvers', 'Signer'],
    variants: [
      {
        title: 'When approvers also sign',
        steps: [
          { n: 1, title: 'Set the signing order', body: 'Sender uploads the document and enables sequential signing in SignTime.' },
          { n: 2, title: 'Sign in sequence', body: 'Signer 1, Signer 2, Signer 3 — each notified by email or SMS when it reaches them.' },
          { n: 3, title: 'Close externally', body: 'Set the counterparty as the final signer, and the document goes out and closes in the same flow.' },
        ],
      },
      {
        title: 'When approvers only review',
        steps: [
          { n: 1, title: 'Turn on internal approval', body: 'Sender enables internal approval in SignTime and names the approvers.' },
          { n: 2, title: 'Approve or reject', body: 'Approvers review simultaneously or in sequence. Any of them can reject and return it.' },
          { n: 3, title: 'Release to the signer', body: 'Only once approved does the signature request go out. Documents awaiting approval do not count toward your send volume.' },
        ],
      },
    ],
    features: ['Internal approval workflow', 'Sequential signing', 'Approval history', 'Email & SMS notification'],
    outcome: 'The document history records exactly who approved what, and when.',
  },

  {
    slug: 'bulk-send',
    category: 'use-case',
    title: 'Bulk Send',
    subtitle: 'One CSV, hundreds of personalized agreements',
    intro:
      'When the same agreement goes to many people with different details, import a CSV against your template and send every one of them at once.',
    lanes: ['Sender', 'Recipients'],
    steps: [
      { n: 1, lane: 'Sender', title: 'Build the template', body: 'Create the agreement once as a SignTime template with custom fields for the details that change.' },
      { n: 2, lane: 'Sender', title: 'Import the CSV', body: 'Import your recipient list. A field used four times in the document only needs to be entered once in the CSV.' },
      { n: 3, lane: 'Sender', title: 'Merge and send', body: 'Every recipient gets their own personalized document via SignTime in one click.' },
      { n: 4, lane: 'Recipients', title: 'Sign independently', body: 'Each recipient signs on their own device, on their own time.' },
      { n: 5, lane: 'Sender', title: 'Track and remind', body: 'See who has signed at a glance and send reminders by email or SMS.' },
    ],
    features: ['CSV bulk send', 'Templates', 'Custom fields', 'Reminders'],
    outcome: 'Three hundred agreements sent in the time it used to take to send three.',
  },

  {
    slug: 'delegation',
    category: 'use-case',
    title: 'Delegation',
    subtitle: 'Send it to your contact. They send it to whoever actually signs.',
    intro:
      'You should not need to know your client\'s reporting structure to close a deal. Delegation lets your contact pass the document to the right signer without restarting anything.',
    lanes: ['Sender', 'Recipient', 'Actual signer'],
    steps: [
      { n: 1, lane: 'Sender', title: 'Send to your contact', body: 'Send the agreement to the person you actually know at the account via SignTime.' },
      { n: 2, lane: 'Recipient', title: 'They review it', body: 'Your contact reviews the document and confirms the details are correct.' },
      { n: 3, lane: 'Recipient', title: 'They delegate', body: 'If they cannot sign for the company, they delegate to the person who can — internally, in one click.' },
      { n: 4, lane: 'Actual signer', title: 'The right person signs', body: 'The authorized signer receives it, signs, and the agreement executes.' },
      { n: 5, lane: 'Sender', title: 'Full chain recorded', body: 'The audit trail records the delegation and the final signature.' },
    ],
    features: ['Delegation', 'Guarantor', 'Audit trail'],
    outcome: 'No back-and-forth email chain trying to find the right person.',
  },

  {
    slug: 'salesforce',
    category: 'use-case',
    title: 'Salesforce Integration',
    subtitle: 'Send and track every document without leaving Salesforce',
    intro:
      'Send documents directly from any Salesforce object, run your approval workflow, and see signature status on the record itself.',
    lanes: ['Salesforce', 'Customer'],
    steps: [
      { n: 1, lane: 'Salesforce', title: 'Send from the record', body: 'Send documents directly from any Salesforce object screen — opportunity, account, contract.' },
      { n: 2, lane: 'Salesforce', title: 'Populate and start', body: 'Salesforce field values populate your SignTime template and the workflow begins.' },
      { n: 3, lane: 'Salesforce', title: 'Approve internally', body: 'The internal approval workflow runs via SignTime, fixed per template. A rejection returns it to the sender.' },
      { n: 4, lane: 'Customer', title: 'Customer signs', body: 'On approval, the document is sent automatically to the customer by email or SMS.' },
      { n: 5, lane: 'Salesforce', title: 'Status on the record', body: 'Check signature status from the Salesforce object page or list view. No swivel-chairing.' },
    ],
    documents: ['NDAs', 'Quotes', 'Service agreements', 'Delivery notes', 'Invoices'],
    features: ['Salesforce integration', 'Internal approval workflow', 'Templates', 'Status sync'],
    outcome: 'No separate document tool to check. It is all on the opportunity.',
    legalNote: 'Salesforce, Sales Cloud, and others are trademarks of Salesforce, Inc., used with permission.',
  },

  {
    slug: 'sms-signing',
    category: 'use-case',
    title: 'SMS Signature Requests',
    subtitle: 'For signers who do not check email',
    intro:
      'Some people you need a signature from do not have a work email, do not check it, or are not at a desk. Send the request to their phone instead.',
    lanes: ['Sender', 'Signer'],
    steps: [
      { n: 1, lane: 'Sender', title: 'Send by SMS', body: 'Choose SMS instead of email when sending via SignTime. No email address required.' },
      { n: 2, lane: 'Sender', title: 'Secure link delivered', body: 'The signer receives a secure document link via SignTime on their phone.' },
      { n: 3, lane: 'Signer', title: 'Review and sign', body: 'They review and sign directly on the phone — no app, no account, no download.' },
      { n: 4, lane: 'Sender', title: 'Closed fast', body: 'Because people see texts immediately, SMS requests close dramatically faster than email.' },
    ],
    features: ['SMS signature requests', 'SMS reminders', 'Mobile signing'],
    outcome: 'Field crews, contractors, and customers on the move sign in minutes, not days.',
  },

  // ─────────────────────────────────────────────────────────────
  // COMPARISON — homepage or "why SignTime"
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'before-and-after',
    category: 'comparison',
    title: 'Before and After',
    subtitle: 'What the same agreement costs each way',
    intro: 'The same contract, two paths.',
    comparison: {
      before: {
        label: 'The paper process',
        duration: 'Over a week to close',
        steps: [
          { title: 'Print', cost: 'Paper' },
          { title: 'Assemble', cost: 'Staff time' },
          { title: 'Sign and notarize', cost: 'Staff time, notary fees' },
          { title: 'Package', cost: 'Envelopes' },
          { title: 'Mail or courier', cost: 'Postage' },
          { title: 'Client reviews, signs, returns', cost: 'Days of waiting' },
          { title: 'File and store', cost: 'Storage costs' },
        ],
      },
      after: {
        label: 'With SignTime',
        duration: 'As fast as 5 minutes to close',
        steps: [
          { title: 'Upload', detail: 'DOC, PDF, or XLS — about a minute', cost: 'No paper, no postage' },
          { title: 'Send', detail: 'Email or SMS to the signer', cost: null },
          { title: 'Sign', detail: 'Any device, anywhere', cost: null },
          { title: 'Stored in the cloud', detail: 'Searchable, with a full audit trail', cost: 'No storage fees' },
        ],
      },
    },
    outcome: 'Median time from send to signed: under an hour. Many close in under five minutes.',
  },
];

export const workflowsByCategory = (category) =>
  workflows.filter((w) => w.category === category);

export const workflowBySlug = (slug) =>
  workflows.find((w) => w.slug === slug);
