import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Privacy Policy | Top Betting Sites in UK",
  description: "Read our privacy policy to understand how we protect your data at TopBettingSitesInUK.com",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-950">
      <SiteHeader />

      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url(/uk-football-hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      <section className="relative z-10 pt-28 pb-16 flex-grow">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-8 md:p-12">
            <h1 className="text-4xl font-bold mb-8 text-center text-slate-900 border-b-2 border-blue-600 pb-4">
              Privacy Policy
            </h1>

            <div className="space-y-8 text-slate-800">
              <p className="text-sm text-slate-600">Last updated: January 2025</p>

              <p className="leading-relaxed">
                At TopBettingSitesInUK.com, protecting your privacy is of paramount importance. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your personal information when you visit our
                website, in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection
                Act 2018.
              </p>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">1. Information We Collect</h2>
                <p className="leading-relaxed mb-4">
                  We may collect and process the following categories of personal information:
                </p>
                <ul className="space-y-3">
                  <li className="leading-relaxed">
                    <strong className="text-slate-900">Personal Identifiers:</strong> When you subscribe to our
                    newsletter or contact us, we may collect your name, email address, and contact details.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-slate-900">Technical and Usage Data:</strong> We automatically collect
                    information about your device, browsing actions, and patterns when you visit our website.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-slate-900">Cookies and Similar Technologies:</strong> We use cookies and
                    similar tracking technologies to monitor activity on our website. Please refer to our Cookie Policy
                    for detailed information.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-slate-900">Marketing and Communications Data:</strong> Your preferences in
                    receiving marketing communications and your communication preferences.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">2. Legal Basis for Processing</h2>
                <p className="leading-relaxed mb-4">
                  We process your personal data on the following legal bases under UK GDPR:
                </p>
                <ul className="space-y-3">
                  <li className="leading-relaxed">
                    <strong className="text-slate-900">Consent:</strong> You have given clear consent for us to process
                    your personal data for specific purposes.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-slate-900">Legitimate Interests:</strong> Processing is necessary for our
                    legitimate interests such as improving our website and understanding user behaviour.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-slate-900">Legal Obligation:</strong> Processing is necessary for compliance
                    with UK legal obligations.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">3. How We Use Your Information</h2>
                <p className="leading-relaxed mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="space-y-2">
                  <li className="leading-relaxed">Providing, operating, and maintaining our website</li>
                  <li className="leading-relaxed">Improving and personalising your experience</li>
                  <li className="leading-relaxed">Understanding and analysing how you use our website</li>
                  <li className="leading-relaxed">Developing new features, products, and services</li>
                  <li className="leading-relaxed">Communicating with you and providing customer support</li>
                  <li className="leading-relaxed">
                    Sending newsletters and marketing communications (with your consent)
                  </li>
                  <li className="leading-relaxed">Detecting, preventing, and addressing technical issues</li>
                  <li className="leading-relaxed">Complying with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">4. Sharing Your Information</h2>
                <p className="leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your
                  information in the following circumstances:
                </p>
                <ul className="space-y-3">
                  <li className="leading-relaxed">
                    <strong className="text-slate-900">Service Providers:</strong> With trusted third-party service
                    providers who assist us in operating our website, provided they agree to keep your information
                    confidential.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-slate-900">Legal Requirements:</strong> When required by law or in response
                    to valid legal requests.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-slate-900">Business Transfers:</strong> In connection with any merger, sale
                    of company assets, or acquisition.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-slate-900">Protection of Rights:</strong> To protect and defend our rights,
                    property, or safety.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">5. Data Retention</h2>
                <p className="leading-relaxed">
                  We will retain your personal data only for as long as necessary to fulfil the purposes for which it
                  was collected, including for legal, accounting, or reporting requirements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">6. International Data Transfers</h2>
                <p className="leading-relaxed">
                  Your information may be transferred to and maintained on servers located outside of the United
                  Kingdom. We ensure that appropriate safeguards are in place to protect your data in accordance with UK
                  GDPR.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">7. Your Data Protection Rights</h2>
                <p className="leading-relaxed mb-4">Under UK data protection laws, you have the following rights:</p>
                <ul className="space-y-3">
                  <li className="leading-relaxed">
                    <strong className="text-slate-900">Right to Access:</strong> You have the right to request copies of
                    your personal data.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-slate-900">Right to Rectification:</strong> You have the right to request
                    correction of inaccurate data.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-slate-900">Right to Erasure:</strong> You have the right to request deletion
                    of your personal data.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-slate-900">Right to Restrict Processing:</strong> You have the right to
                    request restriction of processing.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-slate-900">Right to Object:</strong> You have the right to object to our
                    processing of your data.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-slate-900">Right to Data Portability:</strong> You have the right to request
                    transfer of your data.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-slate-900">Right to Withdraw Consent:</strong> You have the right to
                    withdraw consent at any time.
                  </li>
                </ul>
                <p className="leading-relaxed mt-4">
                  To exercise any of these rights, please contact us at privacy@topbettingsitesinuk.com
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">8. Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organisational security measures to protect your personal data
                  against unauthorised or unlawful processing, accidental loss, destruction, or damage.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">9. Children's Privacy</h2>
                <p className="leading-relaxed">
                  Our website is not intended for individuals under 18 years of age. We do not knowingly collect
                  personal information from children. If you believe your child has provided us with personal data,
                  please contact us immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">10. Changes to This Privacy Policy</h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology,
                  legal requirements, or other factors. We will notify you of any material changes by posting the new
                  Privacy Policy on this page.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">11. Contact Us and Complaints</h2>
                <p className="leading-relaxed mb-4">
                  If you have any questions, concerns, or complaints about this Privacy Policy or our data practices,
                  please contact us at:
                  <br />
                  <span className="font-semibold">Email:</span> privacy@topbettingsitesinuk.com
                  <br />
                  <span className="font-semibold">Website:</span> topbettingsitesinuk.com
                </p>
                <p className="leading-relaxed">
                  You also have the right to lodge a complaint with the Information Commissioner's Office (ICO), the
                  UK's supervisory authority for data protection:
                  <br />
                  <span className="font-semibold">Website:</span> ico.org.uk
                  <br />
                  <span className="font-semibold">Telephone:</span> 0303 123 1113
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
