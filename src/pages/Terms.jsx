import { Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import TodoFlag from '../components/TodoFlag';
import './Terms.css';

const TOC_SECTIONS = [
  { id: 'consent-electronic-records', title: '1. Consent to Electronic Records and Signatures' },
  { id: 'eligibility-accounts', title: '2. Eligibility and Accounts' },
  { id: 'the-service', title: '3. The Service' },
  { id: 'your-content', title: '4. Your Content' },
  { id: 'our-intellectual-property', title: '5. Our Intellectual Property' },
  { id: 'acceptable-use', title: '6. Acceptable Use' },
  { id: 'billing-renewal', title: '7. Paid Plans, Billing, and Renewal' },
  { id: 'scanner-storage', title: '8. Scanner Storage Service (SignTime with ST)' },
  { id: 'termination', title: '9. Termination' },
  { id: 'disclaimer-of-warranties', title: '10. Disclaimer of Warranties' },
  { id: 'limitation-of-liability', title: '11. Limitation of Liability' },
  { id: 'indemnification', title: '12. Indemnification' },
  { id: 'service-availability', title: '13. Service Availability and Interruptions' },
  { id: 'dispute-resolution', title: '14. Dispute Resolution' },
  { id: 'confidentiality', title: '15. Confidentiality' },
  { id: 'general', title: '16. General' },
  { id: 'contact', title: '17. Contact' },
];

export default function Terms() {
  return (
    <>
      <PageHero size="compact">
        <div className="terms-hero-inner">
          <div className="terms-hero-badge">
            <Scale size={14} /> Legal &amp; Compliance
          </div>
          <h1 className="terms-hero-title">Terms of Service</h1>
          <div className="terms-hero-dates">
            <div>
              <strong>Effective Date:</strong> <TodoFlag>DATE</TodoFlag>
            </div>
            <div>
              <strong>Last Updated:</strong> <TodoFlag>DATE</TodoFlag>
            </div>
          </div>
        </div>
      </PageHero>

      <Section variant="light">
        <div className="terms-layout">
          <nav className="terms-toc" aria-label="Table of contents">
            <div className="terms-toc-label">On this page</div>
            <ul className="terms-toc-list">
              {TOC_SECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="terms-body">
            <p>
              These Terms of Service (the "Terms") govern your access to and use of the
              electronic signature and workflow automation services provided by SignTime, Inc.,
              a <TodoFlag>STATE</TodoFlag> corporation ("SignTime," "we," "us," or "our"),
              including our website, applications, and related services (collectively, the
              "Service").
            </p>
            <p>
              <strong>
                By creating an account, clicking to accept, or using the Service, you agree to
                these Terms.
              </strong>{' '}
              If you are entering into these Terms on behalf of a company or other organization,
              you represent that you have authority to bind that entity, and "you" refers to that
              entity.
            </p>
            <p>If you do not agree to these Terms, do not use the Service.</p>

            <hr className="terms-divider" />

            <h2 id="consent-electronic-records">1. Consent to Electronic Records and Signatures</h2>
            <p>
              The Service is designed to create legally binding electronic signatures under the
              federal Electronic Signatures in Global and National Commerce Act ("ESIGN") and
              applicable state versions of the Uniform Electronic Transactions Act ("UETA").
            </p>
            <p>By using the Service, you consent to:</p>
            <ul>
              <li>Conduct transactions and receive records electronically</li>
              <li>Use electronic signatures in place of handwritten signatures</li>
              <li>Receive notices, disclosures, and agreements from us in electronic form</li>
            </ul>
            <p>
              <strong>Hardware and software requirements.</strong> To access electronic records
              you need a current web browser, an active email account, and a device capable of
              viewing PDF documents and storing or printing records.
            </p>
            <p>
              <strong>Withdrawing consent.</strong> You may withdraw consent to receive records
              electronically by contacting us at{' '}
              <a href="mailto:support@signtime.com">
                <TodoFlag>SUPPORT EMAIL</TodoFlag>
              </a>
              . Withdrawing consent will terminate your ability to use the Service, since the
              Service operates exclusively through electronic records.
            </p>
            <p>
              <strong>Paper copies.</strong> You may request a paper copy of any electronic
              record we have provided. We may charge a reasonable fee for this.
            </p>

            <hr className="terms-divider" />

            <h2 id="eligibility-accounts">2. Eligibility and Accounts</h2>
            <p>
              You must be at least eighteen years old and capable of forming a binding contract
              to use the Service.
            </p>
            <p>
              <strong>Account registration.</strong> A usage agreement is formed when you submit
              an application through the form we prescribe and we accept it. We may decline any
              application at our discretion.
            </p>
            <p>
              <strong>Account security.</strong> You are responsible for maintaining the
              confidentiality of your login credentials and for all activity under your account.
              You may not share credentials with or permit their use by any third party. Notify
              us immediately at{' '}
              <a href="mailto:support@signtime.com">
                <TodoFlag>SUPPORT EMAIL</TodoFlag>
              </a>{' '}
              if you suspect unauthorized access.
            </p>
            <p>
              <strong>
                We are not liable for losses arising from your failure to safeguard your
                credentials.
              </strong>
            </p>
            <p>
              <strong>Multiple free accounts.</strong> Creating more than one free account is
              prohibited without our prior written approval.
            </p>
            <p>
              <strong>Your costs.</strong> You are responsible for all equipment, software,
              internet access, and telecommunications charges necessary to use the Service.
            </p>

            <hr className="terms-divider" />

            <h2 id="the-service">3. The Service</h2>
            <p>
              <strong>What the Service does.</strong> The Service allows one user to upload a
              contract or document for signature (a "Document") and other parties to review and
              sign it, producing an audit trail evidencing the signing events.
            </p>
            <p>
              <strong>What the Service does not do.</strong> The Service records the fact and
              circumstances of signing.{' '}
              <strong>
                It does not verify that a signer has legal authority to bind any party, that a
                signer is who they claim to be, or that any resulting agreement is valid or
                enforceable.
              </strong>{' '}
              Identity verification and signing authority are your responsibility.
            </p>
            <p>
              <strong>No legal advice.</strong> SignTime is not a law firm and does not provide
              legal advice. Nothing in the Service or these Terms is a substitute for advice from
              qualified counsel.
            </p>
            <p>
              <strong>Changes to the Service.</strong> We may modify, add, or remove features and
              specifications of the Service. For material changes that adversely affect core
              functionality, we will provide reasonable advance notice where practicable.
            </p>

            <hr className="terms-divider" />

            <h2 id="your-content">4. Your Content</h2>
            <p>
              <strong>You own your Documents.</strong> You retain all rights to Documents and
              other content you upload ("Your Content"). We claim no ownership of it.
            </p>
            <p>
              <strong>License to us.</strong> You grant us a limited, non-exclusive, worldwide
              license to host, store, transmit, display, and process Your Content solely as
              necessary to provide the Service, maintain security, and comply with law. This
              license ends when you delete the content or terminate your account, subject to
              retention we are legally required to maintain.
            </p>
            <p>
              <strong>Your responsibilities.</strong> You represent that you have all rights
              necessary to upload Your Content and that it does not infringe any third party's
              rights or violate any law.
            </p>

            <hr className="terms-divider" />

            <h2 id="our-intellectual-property">5. Our Intellectual Property</h2>
            <p>
              Except for Your Content, all intellectual property rights in the Service —
              including software, designs, trademarks, and documentation — belong to SignTime or
              our licensors.
            </p>
            <p>
              We grant you a limited, non-exclusive, non-transferable, revocable license to use
              the Service in accordance with these Terms. <strong>No other rights are
              granted.</strong> You may not copy, modify, reverse engineer, decompile, create
              derivative works from, or attempt to extract the source code of the Service.
            </p>

            <hr className="terms-divider" />

            <h2 id="acceptable-use">6. Acceptable Use</h2>
            <p>You may not:</p>
            <ul>
              <li>Violate any law or regulation, or use the Service for any unlawful purpose</li>
              <li>Commit, threaten, facilitate, or encourage criminal activity</li>
              <li>Submit false, fraudulent, or misleading information</li>
              <li>Impersonate any person or entity, or misrepresent your affiliation</li>
              <li>
                Infringe any third party's patent, trademark, copyright, trade secret, privacy,
                publicity, or other rights
              </li>
              <li>Defame, harass, or threaten any person</li>
              <li>
                Impose an unreasonable load on our infrastructure, or interfere with the
                operation of the Service or another user's use of it
              </li>
              <li>
                Attempt to gain unauthorized access to the Service, other accounts, or connected
                systems
              </li>
              <li>Introduce malware or any harmful code</li>
              <li>
                Scrape, crawl, or use automated means to access the Service except through our
                documented API
              </li>
              <li>Use the Service to send unsolicited bulk communications</li>
              <li>Circumvent usage limits, access controls, or billing</li>
            </ul>
            <p>
              <strong>Reselling.</strong> You may not resell, sublicense, or provide the Service
              to third parties as part of your own offering without our prior written consent.
            </p>
            <p>
              <strong>Enforcement.</strong> We may suspend or restrict access, with or without
              notice, if we determine you have violated this section, if required by law, or if
              there is a genuine risk to the Service or other users. We will restore access
              promptly if the issue is resolved.{' '}
              <strong>
                We are not liable for losses arising from a suspension made in good faith under
                this section.
              </strong>
            </p>

            <hr className="terms-divider" />

            <h2 id="billing-renewal">7. Paid Plans, Billing, and Renewal</h2>
            <p>
              <strong>Subscription term.</strong> Unless otherwise agreed in writing, paid plans
              have a term of one year, billed either annually in advance or monthly.
            </p>
            <p>
              <strong>Payment.</strong> You agree to pay all fees when due, by the method we
              prescribe. <strong>Fees are payable whether or not you actually use the
              Service.</strong> Fees are exclusive of taxes; you are responsible for any
              applicable sales, use, or similar taxes.
            </p>
            <p>
              <strong>Automatic renewal.</strong>{' '}
              <TodoFlag>
                BRACKETED — THIS SECTION MUST BE REVIEWED AGAINST CALIFORNIA'S AUTOMATIC RENEWAL
                LAW AND EQUIVALENT STATE STATUTES BEFORE PUBLICATION. Requirements typically
                include clear and conspicuous presentation of renewal terms before purchase,
                affirmative consent, an easy online cancellation mechanism, and advance renewal
                reminders for terms of one year or longer.
              </TodoFlag>
            </p>
            <p>
              Subscriptions renew automatically for successive terms unless you cancel at least{' '}
              <TodoFlag>NUMBER</TodoFlag> days before the renewal date. We will send a renewal
              reminder in advance of each renewal.
            </p>
            <p>
              <strong>Cancellation.</strong> You may cancel at any time through{' '}
              <TodoFlag>
                CANCELLATION MECHANISM — must be at least as easy as signing up
              </TodoFlag>
              . Cancellation takes effect at the end of the current term.
            </p>
            <p>
              <strong>Refunds.</strong> Except as expressly stated in these Terms or required by
              law, fees are non-refundable.{' '}
              <TodoFlag>
                FLAG: THE ORIGINAL POLICY THAT A CANCELLING CUSTOMER STILL OWES THE FULL
                REMAINING TERM SHOULD BE REVIEWED — ENFORCEABILITY VARIES AND IT IS AGGRESSIVE
                FOR US SELF-SERVE SUBSCRIPTIONS.
              </TodoFlag>
            </p>
            <p>
              <strong>Document volume.</strong> Document send allowances are measured monthly and
              reset on your monthly anniversary date. Unused allowance does not carry over.
            </p>
            <p>
              <strong>Additional volume.</strong> You may purchase additional Document packs.
              Availability and pricing vary by plan. Purchased additional Documents expire on
              your monthly anniversary date and do not carry over.
            </p>
            <p>
              <strong>Long Term Signature (PAdES) and SMS options.</strong> These require
              purchasing a message pack. If you exceed the included message allowance, a new pack
              will be purchased automatically at the rate specified for your plan.{' '}
              <TodoFlag>
                FLAG: AUTOMATIC OVERAGE PURCHASES REQUIRE CLEAR PRIOR DISCLOSURE AND, IN SOME
                STATES, AFFIRMATIVE CONSENT.
              </TodoFlag>
            </p>
            <p>
              <strong>Price changes.</strong> We may change pricing effective at your next
              renewal, with at least <TodoFlag>NUMBER</TodoFlag> days' advance notice.
            </p>
            <p>
              <strong>Late payment.</strong> Overdue amounts accrue interest at the lesser of{' '}
              <TodoFlag>RATE</TodoFlag>% per month or the maximum rate permitted by applicable
              law, from the due date until paid. You are responsible for bank transfer fees and
              reasonable collection costs.{' '}
              <TodoFlag>
                FLAG: THE ORIGINAL 14.6% ANNUAL RATE MUST BE CHECKED AGAINST APPLICABLE STATE
                USURY LIMITS.
              </TodoFlag>
            </p>

            <hr className="terms-divider" />

            <h2 id="scanner-storage">8. Scanner Storage Service (SignTime with ST)</h2>
            <p>
              Plans including the SignTime with ST service have a minimum term of one year, renewing
              automatically in one-year increments unless cancelled per Section 7.
            </p>
            <p>
              Adding scanner storage to an existing plan resets your anniversary date to the date
              of addition.
            </p>
            <p>
              Fees are charged for the full contract period regardless of how much storage you
              actually use.
            </p>

            <hr className="terms-divider" />

            <h2 id="termination">9. Termination</h2>
            <p>
              <strong>By you.</strong> You may terminate your account at any time per Section 7.
              Termination does not entitle you to a refund except as required by law.
            </p>
            <p>
              <strong>By us.</strong> We may suspend or terminate your account, with notice where
              practicable, if:
            </p>
            <ul>
              <li>You breach these Terms</li>
              <li>Your registration information is false, invalid, or inaccurate</li>
              <li>We are unable to reach you at your registered contact information</li>
              <li>You create multiple free accounts without approval</li>
              <li>
                You use the Service in a manner we reasonably determine to be abusive, unlawful,
                or harmful to others
              </li>
              <li>
                You are subject to, or we become aware you appear on, any U.S. government
                sanctions or restricted-party list, or you are otherwise a party we are
                prohibited from dealing with under U.S. law
              </li>
              <li>You direct abusive, threatening, or violent conduct at our personnel</li>
              <li>
                You become subject to bankruptcy, receivership, assignment for the benefit of
                creditors, or similar proceedings, or suffer a material adverse change in
                creditworthiness
              </li>
              <li>Required by law</li>
            </ul>
            <p>
              <strong>Effect of termination.</strong> Upon termination, your right to access the
              Service ends immediately.
            </p>
            <p>
              <strong>Data retrieval.</strong> We will retain Your Content for{' '}
              <strong>
                <TodoFlag>NUMBER</TodoFlag> days
              </strong>{' '}
              after termination so you can export it. After that period we may permanently delete
              it. It is your responsibility to export your data during this window.{' '}
              <TodoFlag>
                FLAG: THIS WINDOW MUST BE CONSISTENT WITH THE RETENTION LANGUAGE IN THE PRIVACY
                POLICY.
              </TodoFlag>
            </p>
            <p>
              <strong>Survival.</strong> Sections 4 (license grant to us, as to content we must
              retain), 5, 9, 10, 11, 12, 13, 14, and 16 survive termination.
            </p>

            <hr className="terms-divider" />

            <h2 id="disclaimer-of-warranties">10. Disclaimer of Warranties</h2>
            <div className="terms-disclaimer-panel">
              <p>
                <strong>
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTY OF ANY
                  KIND.
                </strong>
              </p>
              <p>
                <strong>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, SIGNTIME DISCLAIMS ALL WARRANTIES,
                  EXPRESS, IMPLIED, AND STATUTORY, INCLUDING WITHOUT LIMITATION THE IMPLIED
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
                  NON-INFRINGEMENT.
                </strong>
              </p>
              <p>
                <strong>
                  WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, ERROR-FREE, OR
                  THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICE WILL MEET YOUR REQUIREMENTS
                  OR PRODUCE ANY PARTICULAR RESULT.
                </strong>
              </p>
              <p>
                <strong>
                  WE DO NOT WARRANT THE LEGAL VALIDITY OR ENFORCEABILITY OF ANY AGREEMENT EXECUTED
                  THROUGH THE SERVICE.
                </strong>
              </p>
            </div>
            <p>
              <strong>You are responsible for maintaining your own copies of Your
              Content.</strong> We may create backups for operational continuity, but doing so
              creates no obligation to restore data to you.
            </p>
            <p>
              Some jurisdictions do not allow the exclusion of certain warranties, so some of the
              above may not apply to you.
            </p>

            <hr className="terms-divider" />

            <h2 id="limitation-of-liability">11. Limitation of Liability</h2>
            <div className="terms-disclaimer-panel">
              <p>
                <strong>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, SIGNTIME AND ITS AFFILIATES, OFFICERS,
                  EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                  CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS,
                  REVENUE, DATA, BUSINESS, OR GOODWILL, ARISING OUT OF OR RELATING TO THESE TERMS
                  OR THE SERVICE, WHETHER BASED IN CONTRACT, TORT, STRICT LIABILITY, OR ANY OTHER
                  THEORY, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </strong>
              </p>
              <p>
                <strong>
                  OUR TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THESE TERMS OR THE
                  SERVICE WILL NOT EXCEED THE AMOUNT YOU PAID US FOR THE SERVICE IN THE TWELVE
                  MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
                </strong>
              </p>
            </div>
            <p>
              These limitations do not apply to liability that cannot be excluded under
              applicable law, including liability for gross negligence, willful misconduct, or
              fraud.
            </p>
            <p>
              Some jurisdictions do not allow the limitation of incidental or consequential
              damages, so some of the above may not apply to you.
            </p>

            <hr className="terms-divider" />

            <h2 id="indemnification">12. Indemnification</h2>
            <p>
              You will indemnify, defend, and hold harmless SignTime and its affiliates,
              officers, employees, and agents from any claim, demand, loss, liability, damage,
              cost, or expense (including reasonable attorneys' fees) arising out of or relating
              to:
            </p>
            <ul>
              <li>Your use of the Service</li>
              <li>Your Content</li>
              <li>Your breach of these Terms</li>
              <li>Your violation of any law or any third party's rights</li>
            </ul>
            <p>
              We will notify you promptly of any such claim and may participate in the defense
              with counsel of our choosing at our own expense. You may not settle any claim in a
              way that imposes obligations on us without our written consent.
            </p>

            <hr className="terms-divider" />

            <h2 id="service-availability">13. Service Availability and Interruptions</h2>
            <p>
              You acknowledge that the Service may be unavailable from time to time due to
              scheduled maintenance, repairs, equipment failure, telecommunications
              interruptions, natural disasters, unauthorized third-party access, or other causes.
            </p>
            <p>
              <strong>Force majeure.</strong> Neither party is liable for failure to perform due
              to causes beyond its reasonable control, including acts of God, war, terrorism,
              civil unrest, labor disputes, government action, epidemics, internet or utility
              failures, or third-party service outages.
            </p>
            <p>
              <strong>Discontinuation of the Service.</strong> If we discontinue the Service, we
              will provide at least <TodoFlag>NUMBER</TodoFlag> days' advance notice by email and
              by posting on our website, and will make reasonable efforts to allow you to export
              Your Content.{' '}
              <TodoFlag>
                FLAG: THE ORIGINAL DISCLAIMED ALL LIABILITY FOR DISCONTINUATION. FOR PAID ANNUAL
                SUBSCRIPTIONS IN THE US, A PRO-RATA REFUND OF PREPAID UNUSED FEES IS THE MORE
                DEFENSIBLE POSITION — CONFIRM.
              </TodoFlag>
            </p>

            <hr className="terms-divider" />

            <h2 id="dispute-resolution">14. Dispute Resolution</h2>
            <p>
              <strong>Informal resolution first.</strong> Before filing any claim, you agree to
              contact us at{' '}
              <a href="mailto:legal@signtime.com">
                <TodoFlag>LEGAL EMAIL</TodoFlag>
              </a>{' '}
              and attempt in good faith to resolve the dispute through negotiation for thirty
              days. This requirement does not apply to our claims for unpaid fees, or to either
              party's request for injunctive relief to protect intellectual property.
            </p>
            <p>
              <TodoFlag>
                OPTIONAL — ARBITRATION AND CLASS ACTION WAIVER. This is a significant business
                decision that should be made with counsel. If adopted, it must be clearly and
                conspicuously presented, and US law generally requires an opt-out window. If not
                adopted, delete this bracket and rely on the venue clause in Section 16.
              </TodoFlag>
            </p>

            <hr className="terms-divider" />

            <h2 id="confidentiality">15. Confidentiality</h2>
            <p>
              Each party will protect the other's confidential information with at least
              reasonable care and will not disclose it to third parties without written consent,
              except as required by law or to employees, contractors, and advisors bound by
              comparable obligations.
            </p>
            <p>
              "Confidential information" includes non-public information disclosed in connection
              with the Service and Your Content designated as confidential.
            </p>
            <p>
              Our handling of personal information is governed by our{' '}
              <Link to="/privacy">Privacy Policy</Link>, which is incorporated into these Terms
              by reference.
            </p>
            <p>
              <strong>Third-party sites.</strong> Websites operated by our partners have their
              own policies. We are not responsible for them.
            </p>

            <hr className="terms-divider" />

            <h2 id="general">16. General</h2>
            <p>
              <strong>Governing law.</strong> These Terms are governed by the laws of the State
              of <TodoFlag>STATE</TodoFlag>, without regard to its conflict of laws principles.
              The United Nations Convention on Contracts for the International Sale of Goods does
              not apply.
            </p>
            <p>
              <strong>Venue.</strong> <TodoFlag>Subject to Section 14,</TodoFlag> the state and
              federal courts located in <TodoFlag>COUNTY, STATE</TodoFlag> have exclusive
              jurisdiction over any dispute arising out of these Terms, and both parties consent
              to personal jurisdiction there.
            </p>
            <p>
              <strong>Export and sanctions compliance.</strong> You represent that you are not
              located in, and are not a national or resident of, any country subject to
              comprehensive US sanctions, and that you do not appear on any US government
              restricted-party list. You will not use the Service in violation of US export
              control or sanctions laws.
            </p>
            <p>
              <strong>Assignment.</strong> You may not assign these Terms or any rights under
              them without our prior written consent. We may assign these Terms in connection
              with a merger, acquisition, or sale of assets.
            </p>
            <p>
              <strong>Changes to these Terms.</strong> We may revise these Terms. For material
              changes we will provide at least <TodoFlag>NUMBER</TodoFlag> days' advance notice
              by email or by posting a prominent notice in the Service. Changes take effect on
              the stated effective date.{' '}
              <strong>
                Your continued use of the Service after that date constitutes acceptance.
              </strong>{' '}
              If you do not agree, you must stop using the Service and may cancel per Section 7.{' '}
              <TodoFlag>
                FLAG: THE ORIGINAL PERMITTED UNILATERAL SAME-DAY CHANGES WITHOUT CONSENT. THAT IS
                UNLIKELY TO BE ENFORCEABLE IN THE US AND SHOULD NOT BE CARRIED OVER.
              </TodoFlag>
            </p>
            <p>
              <strong>Notices.</strong> We may send notices to the email address on your account.
              You are responsible for keeping it current. Legal notices to us go to{' '}
              <TodoFlag>LEGAL NOTICE ADDRESS</TodoFlag>.
            </p>
            <p>
              <strong>Entire agreement.</strong> These Terms, together with the Privacy Policy
              and any order form or written agreement between us, constitute the entire agreement
              regarding the Service and supersede all prior discussions. In the event of
              conflict, a signed written agreement controls over these Terms.
            </p>
            <p>
              <strong>Severability.</strong> If any provision is held unenforceable, it will be
              limited or severed to the minimum extent necessary and the remaining provisions
              remain in full force.
            </p>
            <p>
              <strong>No waiver.</strong> Our failure to enforce any provision is not a waiver of
              our right to do so later.
            </p>
            <p>
              <strong>Relationship.</strong> Nothing in these Terms creates a partnership, joint
              venture, agency, or employment relationship.
            </p>
            <p>
              <strong>Headings.</strong> Section headings are for convenience only and do not
              affect interpretation.
            </p>

            <hr className="terms-divider" />

            <h2 id="contact">17. Contact</h2>
            <p>
              <strong>SignTime, Inc.</strong>
            </p>
            <div className="terms-contact-block">
              <div>
                <TodoFlag>MAILING ADDRESS</TodoFlag>
              </div>
              <div>
                General inquiries:{' '}
                <a href="mailto:support@signtime.com">
                  <TodoFlag>SUPPORT EMAIL</TodoFlag>
                </a>
              </div>
              <div>
                Legal notices:{' '}
                <a href="mailto:legal@signtime.com">
                  <TodoFlag>LEGAL EMAIL</TodoFlag>
                </a>
              </div>
            </div>

            <hr className="terms-divider" />

            <p className="terms-footnote">
              <em>
                Original terms enacted March 28, 2021. Revised September 1, 2022; December 9,
                2022; December 4, 2023. US edition effective <TodoFlag>DATE</TodoFlag>.
              </em>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
