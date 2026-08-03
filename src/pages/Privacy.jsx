import { ShieldCheck } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import TodoFlag from '../components/TodoFlag';
import './Privacy.css';

const TOC_SECTIONS = [
  { id: 'scope', title: '1. Scope' },
  { id: 'information-we-collect', title: '2. Personal Information We Collect' },
  { id: 'how-we-collect', title: '3. How We Collect Personal Information' },
  { id: 'how-we-use', title: '4. How We Use Personal Information' },
  { id: 'how-we-disclose', title: '5. How We Disclose Personal Information' },
  { id: 'sale-and-sharing', title: '6. Sale and Sharing of Personal Information' },
  { id: 'data-retention', title: '7. Data Retention' },
  { id: 'your-rights', title: '8. Your Privacy Rights' },
  { id: 'exercise-rights', title: '9. How to Exercise Your Rights' },
  { id: 'cookies', title: '10. Cookies and Tracking Technologies' },
  { id: 'data-security', title: '11. Data Security' },
  { id: 'international-transfers', title: '12. International Data Transfers' },
  { id: 'childrens-privacy', title: "13. Children's Privacy" },
  { id: 'third-party-websites', title: '14. Third-Party Websites' },
  { id: 'changes', title: '15. Changes to This Policy' },
  { id: 'contact', title: '16. Contact Us' },
];

export default function Privacy() {
  return (
    <>
      <PageHero size="compact">
        <div className="privacy-hero-inner">
          <div className="privacy-hero-badge">
            <ShieldCheck size={14} /> Legal &amp; Privacy
          </div>
          <h1 className="privacy-hero-title">Privacy Policy</h1>
          <div className="privacy-hero-dates">
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
        <div className="privacy-layout">
          <nav className="privacy-toc" aria-label="Table of contents">
            <div className="privacy-toc-label">On this page</div>
            <ul className="privacy-toc-list">
              {TOC_SECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="privacy-body">
            <p>
              SignTime, Inc. ("SignTime," "we," "us," or "our") provides electronic signature
              and workflow automation services through this website and our applications
              (collectively, the "Service"). SignTime, Inc. is a <TodoFlag>STATE</TodoFlag>{' '}
              corporation and the entity responsible for personal information collected from
              users in the United States. This Privacy Policy explains how we collect, use,
              disclose, and protect that information, and describes the privacy rights
              available to you.
            </p>
            <p>By using the Service, you agree to the practices described in this Policy.</p>

            <hr className="privacy-divider" />

            <h2 id="scope">1. Scope</h2>
            <p>
              This Policy applies to personal information we collect from visitors to our
              website and users of the Service in the United States. It does not apply to
              information we process on behalf of our business customers as a service
              provider — where a SignTime customer sends you a document to sign, that customer
              controls the information in the document, and their own privacy policy governs
              its use. Please contact them directly with requests concerning that information.
            </p>

            <hr className="privacy-divider" />

            <h2 id="information-we-collect">2. Personal Information We Collect</h2>
            <p>
              "Personal information" means information that identifies, relates to, describes,
              or could reasonably be linked with you or your household.
            </p>
            <p>In the past twelve months, we have collected the following categories:</p>

            <div className="privacy-table-wrap">
              <table className="privacy-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Examples</th>
                    <th>Source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Identifiers</strong></td>
                    <td>Name, email address, postal address, phone number, account username, IP address</td>
                    <td>You; your employer; our business partners</td>
                  </tr>
                  <tr>
                    <td><strong>Customer records</strong></td>
                    <td>Billing address, payment information, bank account details, credit or debit card number</td>
                    <td>You; payment processors</td>
                  </tr>
                  <tr>
                    <td><strong>Commercial information</strong></td>
                    <td>Subscription plan, transaction and payment history, products or services purchased or considered</td>
                    <td>You; our systems</td>
                  </tr>
                  <tr>
                    <td><strong>Internet or network activity</strong></td>
                    <td>Browsing history on our site, pages viewed, referring URLs, interaction with our emails, device and browser type</td>
                    <td>Automatically, via cookies and similar technologies</td>
                  </tr>
                  <tr>
                    <td><strong>Geolocation data</strong></td>
                    <td>Approximate location derived from IP address</td>
                    <td>Automatically</td>
                  </tr>
                  <tr>
                    <td><strong>Professional information</strong></td>
                    <td>Job title, company name, industry, department</td>
                    <td>You; your employer</td>
                  </tr>
                  <tr>
                    <td><strong>Audio or electronic information</strong></td>
                    <td>Signature images, signing timestamps, audit trail records</td>
                    <td>You; the Service</td>
                  </tr>
                  <tr>
                    <td><strong>Inferences</strong></td>
                    <td>Preferences and characteristics drawn from the above, used to tailor communications</td>
                    <td>Our systems</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Sensitive Personal Information</h3>
            <p>
              Certain information we collect is treated as "sensitive personal information"
              under California law, including:
            </p>
            <ul>
              <li>Account log-in credentials</li>
              <li>Financial account numbers, including bank account and payment card numbers</li>
            </ul>
            <p>
              We use sensitive personal information solely to perform the Service, process
              payments, prevent fraud, and maintain security. <strong>We do not use or disclose
              sensitive personal information for the purpose of inferring characteristics about
              you,</strong> and we do not sell it.
            </p>

            <h3>Information We Do Not Knowingly Collect</h3>
            <p>
              We do not intentionally collect government identification numbers, health
              information, biometric identifiers, racial or ethnic origin, religious beliefs,
              union membership, sexual orientation, or precise geolocation. Please do not submit
              this information to us.
            </p>

            <hr className="privacy-divider" />

            <h2 id="how-we-collect">3. How We Collect Personal Information</h2>
            <p>We collect personal information:</p>
            <ul>
              <li>
                <strong>Directly from you</strong> — when you create an account, request a
                demo, contact support, subscribe to communications, or send or sign a document
              </li>
              <li>
                <strong>Automatically</strong> — through cookies, log files, and similar
                technologies when you use the Service
              </li>
              <li>
                <strong>From your employer or organization</strong> — when your company
                provisions an account for you
              </li>
              <li>
                <strong>From business partners and service providers</strong> — including
                payment processors, resellers, and integration partners
              </li>
            </ul>

            <hr className="privacy-divider" />

            <h2 id="how-we-use">4. How We Use Personal Information</h2>
            <p>We use personal information for the following business purposes:</p>
            <ul>
              <li>Providing, operating, and maintaining the Service</li>
              <li>Creating and administering accounts and authenticating users</li>
              <li>Processing transactions and billing subscription fees</li>
              <li>
                Generating and preserving audit trails and signature records required for legal
                validity
              </li>
              <li>Responding to inquiries and providing customer support</li>
              <li>
                Sending service-related notices, including security alerts and changes to terms
              </li>
              <li>
                Sending marketing communications about products, services, events, webinars,
                and campaigns, where permitted by law
              </li>
              <li>Conducting surveys and analyzing responses</li>
              <li>Developing and improving products and services</li>
              <li>Detecting, investigating, and preventing fraud, abuse, and security incidents</li>
              <li>Complying with legal obligations and enforcing our agreements</li>
              <li>Contacting you in the event of an emergency affecting the Service</li>
            </ul>
            <p>
              We will not use personal information for a materially different purpose without
              providing notice.
            </p>

            <hr className="privacy-divider" />

            <h2 id="how-we-disclose">5. How We Disclose Personal Information</h2>
            <p>We disclose personal information in the following circumstances:</p>
            <p>
              <strong>To counterparties in your transactions.</strong> When you send or sign a
              document, we disclose the information necessary to complete it — including your
              name, email address, and organization — to the other parties to that document.
              This is inherent to the Service.
            </p>
            <p>
              <strong>To service providers.</strong> We engage vendors who process personal
              information on our behalf under written contracts that restrict them to our
              documented instructions. These include cloud hosting, payment processing, email
              delivery, analytics, and customer support providers.
            </p>
            <p>
              <strong>To our corporate affiliates.</strong> We share personal information with
              our affiliated companies, including our Japanese parent SignTime K.K. and
              Communified Corporation, for purposes including operating and supporting the
              Service, managing business relationships, and shared administrative functions.
              Our affiliates process this information under written agreements that restrict
              them to our documented instructions and prohibit use for their own independent
              purposes. SignTime, Inc. remains responsible for the management of personal
              information collected in the United States.
            </p>
            <p>
              <strong>In corporate transactions.</strong> If we are involved in a merger,
              acquisition, financing, reorganization, or sale of assets, personal information
              may be transferred as part of that transaction.
            </p>
            <p>
              <strong>For legal reasons.</strong> We may disclose personal information where we
              believe in good faith that disclosure is necessary to comply with applicable law,
              respond to lawful requests from public authorities, protect the rights, property,
              or safety of SignTime, our users, or others, or enforce our agreements.
            </p>
            <p>
              <strong>With your consent.</strong> We may disclose personal information for
              other purposes with your direction or consent.
            </p>

            <hr className="privacy-divider" />

            <h2 id="sale-and-sharing">6. Sale and Sharing of Personal Information</h2>
            <p>
              <strong>We do not sell personal information, and we do not share personal
              information for cross-context behavioral advertising,</strong> as those terms are
              defined under California law.
            </p>
            <p>We have not sold or shared personal information in the preceding twelve months.</p>
            <p>
              We do not have actual knowledge of selling or sharing the personal information of
              consumers under sixteen years of age.
            </p>

            <hr className="privacy-divider" />

            <h2 id="data-retention">7. Data Retention</h2>
            <p>
              We retain personal information for as long as necessary to fulfill the purposes
              described in this Policy.
            </p>
            <p>
              Signed documents and their associated audit trails are retained for the duration
              of the customer's subscription and for any period required to preserve the legal
              enforceability of executed agreements, or as directed by the customer that
              controls the document.
            </p>
            <p>
              Account and billing records are retained for the life of the account and for any
              period required by tax, accounting, and legal obligations after closure. Marketing
              contact information is retained until you unsubscribe or request deletion.
            </p>

            <hr className="privacy-divider" />

            <h2 id="your-rights">8. Your Privacy Rights</h2>
            <p>Depending on your state of residence, you may have the following rights:</p>
            <ul>
              <li>
                <strong>Right to know.</strong> Request the categories and specific pieces of
                personal information we have collected about you, the sources, our purposes for
                collecting it, and the categories of third parties to whom we disclose it.
              </li>
              <li>
                <strong>Right to delete.</strong> Request deletion of personal information we
                have collected from you, subject to exceptions.
              </li>
              <li>
                <strong>Right to correct.</strong> Request correction of inaccurate personal
                information.
              </li>
              <li>
                <strong>Right to opt out of sale or sharing.</strong> As stated above, we do not
                sell or share personal information, so there is nothing to opt out of.
              </li>
              <li>
                <strong>Right to limit use of sensitive personal information.</strong> We use
                sensitive personal information only for permitted business purposes, so no
                limitation right applies.
              </li>
              <li>
                <strong>Right to non-discrimination.</strong> We will not deny you goods or
                services, charge you a different price, or provide a different level of service
                because you exercised a privacy right.
              </li>
              <li>
                <strong>Right to appeal.</strong> In certain states, if we decline your request,
                you may appeal that decision by replying to our response.
              </li>
            </ul>
            <p>
              Residents of California, Colorado, Connecticut, Virginia, Utah, Texas, Oregon,
              Montana, and other states with comprehensive privacy laws may exercise the rights
              available under their state's law. Rights vary by state.
            </p>
            <p>
              <strong>California "Shine the Light."</strong> California residents may request
              information about disclosures of personal information to third parties for their
              direct marketing purposes. We do not make such disclosures.
            </p>

            <hr className="privacy-divider" />

            <h2 id="exercise-rights">9. How to Exercise Your Rights</h2>
            <p>
              Submit a request by emailing{' '}
              <strong>
                <a href="mailto:support+privacy@signtime.com">support+privacy@signtime.com</a>
              </strong>{' '}
              with "Privacy Request" in the subject line, and tell us which right you wish to
              exercise.
            </p>
            <p>
              <strong>Verification.</strong> To protect your information, we will verify your
              identity before responding. We may ask you to confirm information already
              associated with your account. We cannot respond to a request we are unable to
              verify.
            </p>
            <p>
              <strong>Authorized agents.</strong> You may designate an agent to submit a request
              on your behalf. We will require written proof of authorization and may require you
              to verify your own identity directly.
            </p>
            <p>
              <strong>Timing.</strong> We will acknowledge your request within ten business days
              and respond within forty-five calendar days. If we need more time, we will notify
              you and may extend by an additional forty-five days.
            </p>
            <p>
              <strong>Fees.</strong> Requests are free. We may charge a reasonable fee or
              decline requests that are manifestly unfounded, excessive, or repetitive, and will
              explain our reasoning if we do.
            </p>
            <p>
              <strong>Exceptions.</strong> We may decline all or part of a request where
              responding would compromise the privacy, rights, or safety of another individual,
              interfere significantly with our legitimate business operations, or conflict with
              a legal obligation. Where we decline, we will tell you why.
            </p>

            <hr className="privacy-divider" />

            <h2 id="cookies">10. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to operate the Service, remember your
              preferences, understand how the site is used, and improve performance.
            </p>
            <p>
              A cookie is a small file stored on your device (computer, smartphone, or tablet)
              that records information about your visit, such as which pages you view and how
              often you return.
            </p>
            <p>
              You can delete or block cookies through your browser settings. Doing so may
              prevent parts of the Service from functioning correctly.
            </p>
            <p>
              <strong>Global Privacy Control.</strong> We honor the Global Privacy Control (GPC)
              signal where transmitted by your browser.
            </p>
            <p>
              <strong>Do Not Track.</strong> There is no common industry standard for responding
              to Do Not Track browser signals, and we do not currently respond to them.
            </p>

            <hr className="privacy-divider" />

            <h2 id="data-security">11. Data Security</h2>
            <p>
              We maintain administrative, technical, and physical safeguards designed to protect
              personal information, including encryption of data in transit and at rest,
              multi-factor authentication, role-based access controls, and audit logging.
            </p>
            <p>
              No method of transmission or storage is completely secure, and we cannot guarantee
              absolute security. If you believe your account has been compromised, contact us
              immediately at the address below.
            </p>

            <hr className="privacy-divider" />

            <h2 id="international-transfers">12. International Data Transfers</h2>
            <p>
              SignTime, Inc. is a United States corporation, and personal information collected
              in the United States is{' '}
              <TodoFlag>stored and processed primarily in the United States — CONFIRM</TodoFlag>.
            </p>
            <p>
              Because our parent company SignTime K.K. is organized under the laws of Japan,
              personal information may also be transferred to, stored in, and processed in Japan
              and in other countries where we, our affiliates, or our service providers operate.
            </p>
            <p>
              These countries may have data protection laws that differ from those of your
              state. Where we transfer personal information internationally, we apply
              contractual and technical safeguards designed to protect it consistently with this
              Policy.
            </p>
            <p>
              By using the Service, you acknowledge that your personal information may be
              processed outside the United States.
            </p>

            <hr className="privacy-divider" />

            <h2 id="childrens-privacy">13. Children's Privacy</h2>
            <p>
              The Service is intended for business use and is not directed to children. We do
              not knowingly collect personal information from anyone under the age of sixteen.
              If you believe a child has provided us personal information, contact us and we
              will delete it.
            </p>

            <hr className="privacy-divider" />

            <h2 id="third-party-websites">14. Third-Party Websites</h2>
            <p>
              The Service may contain links to websites we do not operate. We are not
              responsible for the privacy practices of those sites, and this Policy does not
              apply to them. Review the privacy policy of any third-party site you visit.
            </p>

            <hr className="privacy-divider" />

            <h2 id="changes">15. Changes to This Policy</h2>
            <p>
              We may update this Policy from time to time. When we do, we will revise the "Last
              Updated" date above.
            </p>
            <p>
              If we make material changes to how we handle personal information, we will provide
              additional notice, such as by email or a prominent notice on the Service, before
              the changes take effect. Unless otherwise stated, the revised Policy becomes
              effective when posted.
            </p>

            <hr className="privacy-divider" />

            <h2 id="contact">16. Contact Us</h2>
            <p>
              <strong>Entity responsible for personal information:</strong> SignTime, Inc.
            </p>
            <p><strong>Privacy inquiries:</strong></p>
            <div className="privacy-contact-block">
              <div>SignTime Customer Support</div>
              <div>
                Email: <a href="mailto:support+privacy@signtime.com">support+privacy@signtime.com</a>
              </div>
              <div><TodoFlag>MAILING ADDRESS</TodoFlag></div>
              <div>
                <TodoFlag>
                  PHONE NUMBER — required in California if you operate a website and collect
                  personal information from California residents
                </TodoFlag>
              </div>
            </div>
            <p>
              If you have questions about this Policy or how we handle your personal
              information, contact us at the address above and we will respond promptly.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
