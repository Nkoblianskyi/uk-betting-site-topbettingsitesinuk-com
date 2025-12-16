import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Cookie Policy | Top Betting Sites in UK",
  description: "Learn about how we use cookies on TopBettingSitesInUK.com",
}

export default function CookiePolicy() {
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
              Cookie Policy
            </h1>

            <div className="space-y-8 text-slate-800">
              <p className="text-sm text-slate-600">Last updated: January 2025</p>

              <p className="leading-relaxed">
                This Cookie Policy explains how TopBettingSitesInUK.com uses cookies and similar technologies when you
                visit our website. It explains what these technologies are, why we use them, and your rights to control
                their use in accordance with UK data protection laws including the UK GDPR and the Privacy and
                Electronic Communications Regulations (PECR).
              </p>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">1. What Are Cookies</h2>
                <p className="leading-relaxed">
                  Cookies are small text files placed on your device (computer, smartphone, or tablet) when you visit a
                  website. They are widely used to make websites work efficiently, improve user experience, and provide
                  information to website owners about how visitors use their site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">2. Types of Cookies We Use</h2>
                <p className="leading-relaxed mb-4">We use the following categories of cookies on our website:</p>
                <ul className="space-y-3">
                  <li className="leading-relaxed">
                    <strong className="text-slate-900">Strictly Necessary Cookies:</strong> These cookies are essential
                    for our website to function properly and cannot be disabled. They are usually set in response to
                    actions you take, such as setting your privacy preferences, logging in, or filling in forms.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-slate-900">Performance and Analytics Cookies:</strong> These cookies collect
                    information about how visitors use our website, such as which pages are visited most often and
                    whether visitors receive error messages. This information helps us improve how our website works.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-slate-900">Functionality Cookies:</strong> These cookies allow our website
                    to remember choices you make and provide enhanced, more personalised features.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-slate-900">Targeting/Advertising Cookies:</strong> These cookies may be set
                    through our site by our advertising partners to build a profile of your interests and show you
                    relevant advertisements.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">3. How to Control Cookies</h2>
                <p className="leading-relaxed mb-4">
                  You have the right to decide whether to accept or reject cookies. When you first visit our website,
                  you will see a cookie banner allowing you to accept or decline different categories of cookies.
                </p>
                <p className="leading-relaxed">
                  Most web browsers allow you to control cookies through their settings preferences. However, limiting
                  cookies may impact your experience of our website and the features available to you.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">4. Cookie Management</h2>
                <p className="leading-relaxed">
                  You can withdraw your consent to cookies at any time by adjusting your browser settings. You can also
                  clear cookies that have already been set through your browser settings.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">5. Third-Party Cookies</h2>
                <p className="leading-relaxed">
                  In addition to our own cookies, we may use third-party cookies to report website usage statistics,
                  deliver advertisements, and track the effectiveness of our marketing campaigns. These third parties
                  have their own privacy policies, and we encourage you to read them.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">6. Updates to This Cookie Policy</h2>
                <p className="leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes to our cookie practices, new
                  regulations, or for other operational, legal, or regulatory reasons. Any changes will be posted on
                  this page with an updated revision date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">7. Contact Us</h2>
                <p className="leading-relaxed">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
                  <br />
                  <span className="font-semibold">Email:</span> cookies@topbettingsitesinuk.com
                  <br />
                  <span className="font-semibold">Website:</span> topbettingsitesinuk.com
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
