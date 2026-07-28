// Per-feature content for /features/:slug and /integrations/:slug (rendered by FeatureDetail.jsx).
// Keys match the exact slugs linked from the Navbar's Product mega menu.
export const featureContent = {
  'signer-sequencing': {
    title: 'Signer Sequencing',
    subhead:
      "Control the exact order in which signers complete a document, so multi-party approvals and countersignatures always happen in the right sequence — never out of order.",
    bullets: [
      {
        title: 'Sequential Routing',
        desc: 'Assign each signer a position in the signing order, and SignTime automatically routes the document to the next person only after the previous step is complete.'
      },
      {
        title: 'No Premature Signatures',
        desc: "Downstream signers can't view or sign a document until everyone ahead of them in the sequence has finished, protecting the integrity of multi-step approvals."
      },
      {
        title: 'Full Visibility',
        desc: "Track exactly who's signed, who's next, and where a document is stuck at any point in the sequence."
      }
    ]
  },

  'guarantor-feature': {
    title: 'Guarantor Feature',
    subhead:
      "Collect a co-signer's contact information right in the signing flow, and SignTime automatically routes the document to them — no manual follow-up required.",
    bullets: [
      {
        title: 'Built for Multi-Party Agreements',
        desc: 'Popular with schools, landlords, and lenders who need a guarantor or co-signer on file — the primary signer simply enters their contact details during signing.'
      },
      {
        title: 'Automatic Routing',
        desc: 'As soon as the primary signer submits guarantor contact information, the document is sent to that person automatically — no extra step for your team.'
      },
      {
        title: 'Works Beyond Its Original Use Case',
        desc: "Just as useful for HR teams collecting emergency contacts, or any workflow that needs a secondary party's signature on file."
      }
    ]
  },

  'pades-long-term-signature': {
    title: 'Long-Term Signature (PAdES)',
    subhead:
      'Signatures built on the PAdES standard stay independently verifiable for years — even after the original signing certificate expires.',
    bullets: [
      {
        title: 'Long-Term Validity',
        desc: "Signed documents remain cryptographically verifiable long after signing, so you're never stuck with a signature that can't be authenticated years later."
      },
      {
        title: 'Industry-Standard Format',
        desc: 'Built on PAdES (PDF Advanced Electronic Signatures), a widely recognized standard for durable, tamper-evident digital signatures.'
      },
      {
        title: 'No Extra Steps Required',
        desc: "Long-term signature validity is built into every document by default — there's nothing extra for you or your signers to configure."
      }
    ]
  },

  'signature-certificates': {
    title: 'Signature Certificates',
    subhead:
      'Every completed document comes with its own certificate of completion — a timestamped record of exactly who signed, when, and from where.',
    bullets: [
      {
        title: 'Complete Audit Trail',
        desc: "Each certificate captures every signer's name, signing timestamp, and IP address, creating a clear record of the entire signing process."
      },
      {
        title: 'Delivered Automatically',
        desc: 'Certificates are generated and sent to every party the moment a document is fully signed — no extra request needed.'
      },
      {
        title: 'Built for Verification',
        desc: 'If a signature is ever questioned, the certificate gives you everything you need to confirm it was completed properly.'
      }
    ]
  },

  'handwritten-signatures': {
    title: 'Handwritten Signatures',
    subhead:
      'Let signers draw a natural, handwritten signature with a finger, stylus, or mouse — on any device, no special hardware required.',
    bullets: [
      {
        title: 'Natural Signing Experience',
        desc: 'Signers draw their signature directly on screen, so the finished document looks and feels like it was signed by hand.'
      },
      {
        title: 'Works on Any Device',
        desc: 'Fully supported on desktop, tablet, and mobile — signers can complete a document from whatever device is closest at hand.'
      },
      {
        title: 'Still Fully Verifiable',
        desc: "A handwritten look doesn't mean less security — every signature is still backed by SignTime's full audit trail and certificate of completion."
      }
    ]
  },

  'sms-signature-requests': {
    title: 'SMS Signature Requests',
    subhead:
      'Deliver signature requests by text message instead of email, so signers get them instantly — no inbox clutter, no missed notifications.',
    bullets: [
      {
        title: 'Instant Delivery',
        desc: "Send a signing link straight to a signer's phone with a single click — no email required, no app to install."
      },
      {
        title: 'Faster Completion',
        desc: 'Text messages get opened far faster than email, which means signature requests get completed faster too.'
      },
      {
        title: 'International-Ready',
        desc: "Supports delivery to international phone numbers, so you can reach signers wherever they're located."
      }
    ]
  },

  'internal-approval-workflows': {
    title: 'Internal Approval Workflows',
    subhead:
      'Route a contract to the right internal stakeholders for sign-off automatically, before it ever goes out for signature.',
    bullets: [
      {
        title: 'Automatic Routing',
        desc: 'Define who needs to approve a document internally, and SignTime routes it to each approver in order — no manual forwarding.'
      },
      {
        title: "Nothing Goes Out Unapproved",
        desc: 'A document stays internal until every required approval is complete, so nothing reaches external signers before it should.'
      },
      {
        title: 'Full Visibility',
        desc: 'See exactly which approver a document is waiting on at any point in the process.'
      }
    ]
  },

  'templates-management': {
    title: 'Create & Manage Templates',
    subhead:
      'Turn the documents you send over and over — NDAs, offer letters, standard agreements — into reusable templates, and send a signature request in under a minute.',
    bullets: [
      {
        title: 'Set It Up Once',
        desc: "Upload a document once, define signer and viewer roles, input fields, and tags, and it's ready to reuse indefinitely."
      },
      {
        title: 'Shared Across Your Team',
        desc: 'Because SignTime is priced per organization, not per user, every template is available to your whole team — no extra seats needed to share one.'
      },
      {
        title: 'Consistent Every Time',
        desc: 'Standardize the documents your business sends most often, so every signer gets the same accurate, on-brand experience.'
      }
    ]
  },

  'bulk-sending-documents': {
    title: 'Bulk Sending Documents',
    subhead:
      'Send a customized document to hundreds or thousands of signers at once, with a single CSV upload — no manual entry, no copy-pasting.',
    bullets: [
      {
        title: 'Personalized at Scale',
        desc: 'Each recipient gets their own customized version of the document — names, terms, and custom fields populated automatically from your CSV.'
      },
      {
        title: 'Built for Recurring Sends',
        desc: 'Ideal for annual contract renewals, mass employment agreements, or any document you need to send to a large group on a schedule.'
      },
      {
        title: 'Simple Import Process',
        desc: 'Upload your template, import your recipient list and field values, and your documents are on their way — no technical setup required.'
      }
    ]
  },

  'document-attachments': {
    title: 'Attachments',
    subhead:
      "Request a driver's license, proof of purchase, or any other supporting file directly from a signer — no separate email thread required.",
    bullets: [
      {
        title: 'Request Anything, In-Flow',
        desc: 'Add an attachment request directly to the signing process, so signers upload what you need at the same time they sign.'
      },
      {
        title: 'Everything Stays Together',
        desc: "Uploaded attachments are stored alongside the signed document, so you're never hunting through email for a missing file."
      },
      {
        title: 'Fewer Back-and-Forth Emails',
        desc: 'Replace scattered email chains for collecting IDs and supporting paperwork with one clean, built-in step.'
      }
    ]
  },

  'multiple-file-format-support': {
    title: 'Multiple File Format Support',
    subhead:
      'Send Word, Excel, PowerPoint, and image files for signature directly — no need to convert everything to PDF first.',
    bullets: [
      {
        title: 'Beyond PDF',
        desc: 'Most e-signature platforms stop at PDF. SignTime also supports Word, Excel, PowerPoint, and JPG files, so you can work with documents in their native format.'
      },
      {
        title: 'Add Fields Directly',
        desc: 'Drop in signature fields, date stamps, and other form elements directly on the file you already have — no manual conversion step.'
      },
      {
        title: 'One Platform for Every Document Type',
        desc: "Whether it's a spreadsheet, a report, or a scanned image, SignTime handles it the same way — quickly and without extra tools."
      }
    ]
  },

  'legal-timestamps': {
    title: 'Timestamps',
    subhead:
      'Every step of the signing process — from creation to completion — is automatically timestamped, giving you a reliable record of exactly when everything happened.',
    bullets: [
      {
        title: 'Automatic, Every Time',
        desc: "Timestamps are applied at every stage of a document's lifecycle without any action required from you or your signers."
      },
      {
        title: 'A Verifiable Record',
        desc: "Each timestamp becomes part of the document's permanent activity history, giving you proof of exactly when each step took place."
      },
      {
        title: 'Always Accessible',
        desc: "Log into your SignTime account any time to review a document's full timestamped history."
      }
    ]
  },

  'document-search-tagging': {
    title: 'Document Search & Tagging',
    subhead:
      'Find any document in seconds — search by amount, client name, date, or your own custom tags — instead of digging through folders.',
    bullets: [
      {
        title: 'Search That Actually Works',
        desc: 'Look up any document by amount, client name, contract date, or status, and get to what you need immediately.'
      },
      {
        title: 'Custom Tags for Your Workflow',
        desc: 'Tag documents and templates with your own labels — order IDs, client IDs, document type — so they match the systems you already use.'
      },
      {
        title: 'Templates Inherit Your Tags',
        desc: 'Set a tag structure once on a template, and every document created from it stays organized automatically.'
      }
    ]
  },

  'share-documents-files': {
    title: 'Share Documents & Files',
    subhead:
      'Share a completed agreement or a scanned document with anyone — no email attachment required, and access can be revoked any time.',
    bullets: [
      {
        title: 'Share With One Click',
        desc: 'Send a secure link to a completed document or a file imported through ScanTime — no need to download and re-attach anything to an email.'
      },
      {
        title: 'Keep Everyone in the Loop',
        desc: 'Give clients, partners, and stakeholders access to the documents they need, without adding them to your SignTime organization.'
      },
      {
        title: 'Revoke Access Anytime',
        desc: 'Change your mind about who should see a shared document? Revoke access in a click, whenever you need to.'
      }
    ]
  },

  'multiple-teams': {
    title: 'Multiple Teams',
    subhead:
      'Working across more than one organization or department? Switch between them from a single dashboard, without losing track of what belongs where.',
    bullets: [
      {
        title: 'One Login, Every Organization',
        desc: 'Join multiple SignTime organizations and switch between them instantly — no separate logins, no juggling accounts.'
      },
      {
        title: 'Keep Departments Separate',
        desc: 'Templates, documents, and workflows stay cleanly separated by organization, so nothing gets mixed up between teams.'
      },
      {
        title: 'Scales With Your Structure',
        desc: 'Whether you manage one department or several, SignTime adapts to however your organization is actually structured.'
      }
    ]
  },

  'member-role-management': {
    title: 'Member Role Management',
    subhead:
      'Control what each team member can see and do inside SignTime, based on the role they’re assigned.',
    bullets: [
      {
        title: 'Granular Permissions',
        desc: 'Assign roles that determine whether someone can send documents, only view them, or manage account settings.'
      },
      {
        title: 'Reduce Internal Risk',
        desc: "Limit sensitive document access to only the people who actually need it, without restricting the rest of your team's workflow."
      },
      {
        title: 'Easy to Manage',
        desc: "Update a team member's role any time from your dashboard as their responsibilities change."
      }
    ]
  },

  'two-factor-authentication': {
    title: 'Two-Factor Authentication',
    subhead:
      'Add a second layer of verification to every login and every signature, so accounts and agreements stay protected.',
    bullets: [
      {
        title: 'Protects Every Login',
        desc: 'Require a second verification step beyond a password, for every user on your account.'
      },
      {
        title: 'Protects Every Signature',
        desc: 'Signers can be required to verify their identity with a second factor before completing a document, not just your team members.'
      },
      {
        title: 'No Extra Software Required',
        desc: 'Two-factor authentication works out of the box — no separate app or hardware key required to get started.'
      }
    ]
  },

  'customized-branding': {
    title: 'Customized Branding',
    subhead:
      'Put your logo, colors, and sender address on every signature request, so signers see your brand — not ours — from start to finish.',
    bullets: [
      {
        title: 'Fully On-Brand Emails',
        desc: "Your logo and company colors appear on every signature request, and outgoing messages can be tailored to match your company's tone."
      },
      {
        title: 'Send From Your Own Address',
        desc: "Documents go out from your own email domain, so every request looks like it came directly from your company."
      },
      {
        title: 'Reduces Phishing Risk',
        desc: "Signers are far more likely to recognize and trust a request that consistently looks like it's from your business — making it harder for scammers to imitate."
      }
    ]
  },

  'web-api': {
    title: 'Web API',
    subhead:
      'Connect SignTime directly to your internal systems and trigger signature requests programmatically — no manual document handling required.',
    bullets: [
      {
        title: 'Full REST API',
        desc: 'Trigger signature requests, check document status, and pull completed documents programmatically, directly from your own tools.'
      },
      {
        title: 'Build Custom Workflows',
        desc: 'Use the API to embed SignTime into your existing product or internal systems, instead of working around a separate tool.'
      },
      {
        title: 'Included With Prime',
        desc: 'Full API access is included with our Prime plan, along with hands-on support from our team as you build out your integration.'
      }
    ]
  },

  salesforce: {
    title: 'Salesforce Integration',
    subhead: 'Request signatures and track document status without ever leaving Salesforce.',
    bullets: [
      {
        title: 'No Second Login',
        desc: 'Send and manage signature requests directly from a Salesforce record — no separate SignTime login required.'
      },
      {
        title: 'Status Updates in Salesforce',
        desc: 'Document status updates automatically in Salesforce as signers complete each step, so your team always has the latest information.'
      },
      {
        title: 'Built for Sales Teams',
        desc: "Ideal for teams that already run their entire pipeline through Salesforce and don't want to manage a second system."
      }
    ]
  },

  'google-drive': {
    title: 'Google Drive Integration',
    subhead:
      'Automatically save every completed document to a Google Drive folder you choose — no manual downloading or uploading.',
    bullets: [
      {
        title: 'Automatic Filing',
        desc: "Once a document is fully signed, a copy is saved directly to the Google Drive folder you've designated — no manual export needed."
      },
      {
        title: 'Stays in Sync With Your Files',
        desc: 'Keep your completed agreements alongside the rest of your business files, right where your team already looks for them.'
      },
      {
        title: 'One-Time Setup',
        desc: 'Connect your Google Drive account once, and every future completed document is filed automatically.'
      }
    ]
  }
};

export function getFeatureContent(slug) {
  return featureContent[slug] || null;
}
