export function InfoSection() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/75 z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 border-b border-white/10 pb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Expert UK Betting Reviews</h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Independent analysis of Britain's leading bookmakers to help you make informed decisions
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 border-l-4 border-blue-500 pl-4">
                UKGC Licensed & Regulated
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Every bookmaker featured on TopBettingSitesInUK.com holds a valid licence from the UK Gambling
                Commission. This ensures strict compliance with British gambling laws, protecting your funds and
                personal data. We verify each operator's licence status regularly and only recommend sites that maintain
                the highest security and fairness standards required by UK regulators.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 border-l-4 border-red-500 pl-4">
                Exclusive Welcome Bonuses
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We negotiate exclusive welcome offers and promotions with Britain's top bookmakers. From enhanced odds
                on Premier League matches to free bets on horse racing, our partnerships ensure you receive the best
                possible value when joining. All bonuses are clearly explained with transparent terms and conditions,
                helping you understand wagering requirements and withdrawal conditions before claiming.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 border-l-4 border-blue-500 pl-4">
                Comprehensive Testing Process
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our expert review team thoroughly tests each bookmaker across multiple criteria: odds competitiveness,
                market variety, live betting features, mobile app performance, payment processing speed, and customer
                support responsiveness. We focus on UK-specific factors including coverage of British sporting events,
                compatibility with UK payment methods, and adherence to responsible gambling protocols.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Our Review Standards</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    We maintain strict editorial independence and never allow commercial relationships to influence our
                    ratings. Each bookmaker is evaluated using our comprehensive 50-point assessment covering licensing,
                    security, odds quality, betting markets, bonuses, payment options, and customer service.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Reviews are updated regularly to reflect changes in offers, features, and performance, ensuring you
                    always have access to current, accurate information about UK betting sites.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Getting Started Safely</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Compare our top-rated bookmakers and select one that matches your preferences. Click through to
                    claim your exclusive welcome bonus, then complete registration with accurate details. Set deposit
                    limits during account setup to maintain control of your spending.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Remember that gambling should be entertainment, not a way to make money. Use the responsible
                    gambling tools provided by your chosen bookmaker, and never bet more than you can afford to lose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
