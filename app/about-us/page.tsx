import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "About Us | Top Betting Sites in UK",
  description: "Learn about our mission to provide the most reliable information on UK betting sites.",
}

export default function AboutUs() {
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
              About TopBettingSitesInUK.com
            </h1>

            <div className="space-y-8 text-slate-800">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">Our Vision</h2>
                <p className="leading-relaxed">
                  At TopBettingSitesInUK.com, we've established ourselves as the UK's premier destination for bookmaker
                  evaluation and comparison. In today's crowded marketplace, our specialised team cuts through the noise
                  to identify truly exceptional betting experiences tailored specifically for British punters.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">Our Assessment Framework</h2>
                <p className="leading-relaxed mb-4">
                  Behind every recommendation lies a comprehensive evaluation protocol developed by industry veterans.
                  We scrutinise each bookmaker across multiple dimensions: UKGC licensing compliance, security
                  infrastructure, welcome bonus generosity, Premier League and horse racing markets, interface design,
                  mobile app quality, payment processing efficiency, and customer service responsiveness.
                </p>
                <p className="leading-relaxed">
                  Our commitment to integrity means we exclusively feature operators holding valid UK Gambling
                  Commission licences, ensuring they meet the strictest regulatory standards for player protection, fair
                  gaming practices, and responsible gambling measures in the world.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">Our Foundational Values</h2>
                <ul className="space-y-3">
                  <li className="leading-relaxed">
                    <strong className="text-slate-900">Transparency:</strong> We provide complete transparency into our
                    evaluation methodology, ensuring you understand exactly how we arrive at our recommendations and
                    rankings.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-slate-900">Editorial Independence:</strong> Our assessments remain untainted
                    by commercial considerations, guaranteeing genuine, user-focused guidance that puts British bettors
                    first.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-slate-900">Current Information:</strong> The UK betting landscape evolves
                    rapidly with new regulations and offers—we continuously reassess bookmakers to ensure our guidance
                    remains current and compliant.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-slate-900">Safer Gambling:</strong> We advocate for responsible gambling
                    practices in accordance with UKGC guidelines and provide resources for those seeking assistance with
                    gambling-related concerns through BeGambleAware, GamCare, and GamStop.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">Our Expert Team</h2>
                <p className="leading-relaxed">
                  Our team brings together diverse expertise spanning sports analytics, cybersecurity, user experience
                  design, and UK gambling regulation. United by a passion for the British betting landscape, we combine
                  technical knowledge with practical betting experience to deliver insights that genuinely enhance your
                  wagering decisions on football, horse racing, cricket, and other popular UK sports.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">Our Revenue Model</h2>
                <p className="leading-relaxed mb-4">
                  We maintain a commitment to providing free, high-quality information to British bettors. Our
                  operations are sustained through affiliate partnerships with UKGC-licensed bookmakers, who provide
                  compensation when users register through our referral links. This model allows us to deliver premium
                  content without subscription fees or paywalls.
                </p>
                <p className="leading-relaxed">
                  Crucially, these commercial arrangements never influence our bookmaker evaluations. Our ranking
                  methodology remains strictly merit-based, with each recommendation reflecting genuine platform
                  quality, UKGC compliance, and value to UK customers rather than commercial considerations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">UK Gambling Commission Compliance</h2>
                <p className="leading-relaxed">
                  All bookmakers featured on our site are licensed and regulated by the UK Gambling Commission under the
                  Gambling Act 2005. We regularly verify licensing status and ensure featured operators maintain
                  compliance with UK advertising standards, age verification requirements, and responsible gambling
                  obligations.
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
