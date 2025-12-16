export function ResponsibleGamblingSection() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/75 z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 border-b border-white/10 pb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">Responsible Gambling</h2>
            <p className="text-base text-gray-300">Your safety and wellbeing are our top priorities</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-lg p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3 border-l-4 border-red-500 pl-4">Gamble Responsibly</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Betting should always be entertainment, never a source of income or a way to solve financial problems.
                The UK Gambling Commission requires all licensed operators to promote responsible gambling and provide
                tools to help customers stay in control. Every bookmaker we recommend offers deposit limits, time-out
                periods, and self-exclusion options to protect players.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Set strict budgets before you start, never chase losses, and take regular breaks. If gambling stops
                being fun or begins to affect your daily life, relationships, or finances, it's time to seek support.
                Remember: when the fun stops, stop.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <h4 className="text-lg font-bold text-white mb-3 border-l-4 border-blue-500 pl-4">
                  UKGC Protection Standards
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  All featured bookmakers are regulated by the UK Gambling Commission and must adhere to strict player
                  protection requirements. This includes mandatory affordability checks, identity verification, safer
                  gambling messaging, and immediate access to self-exclusion tools. The UKGC ensures operators prevent
                  underage gambling and protect vulnerable customers.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <h4 className="text-lg font-bold text-white mb-3 border-l-4 border-blue-500 pl-4">
                  Self-Exclusion & GamStop
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  GamStop is a free UK service allowing you to self-exclude from all UKGC-licensed gambling sites for 6
                  months, 1 year, or 5 years. Once registered, you cannot access your accounts or place bets during the
                  exclusion period. This powerful tool provides breathing space to regain control and seek professional
                  help if needed.
                </p>
              </div>
            </div>

            <div className="bg-red-900/20 backdrop-blur-sm border border-red-500/40 rounded-lg p-6 hover:bg-red-900/30 transition-all duration-300">
              <h4 className="text-lg font-bold text-white mb-3 border-l-4 border-red-500 pl-4">
                UK Support Organisations
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-white mb-1">BeGambleAware</p>
                  <p className="text-gray-300 text-xs mb-2">Free confidential helpline and online support</p>
                  <p className="text-blue-300">0808 8020 133</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">GamCare</p>
                  <p className="text-gray-300 text-xs mb-2">24/7 counselling and treatment services</p>
                  <p className="text-blue-300">0808 8020 133</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">National Gambling Helpline</p>
                  <p className="text-gray-300 text-xs mb-2">Free, confidential advice and support</p>
                  <p className="text-blue-300">0808 8020 133</p>
                </div>
              </div>
              <p className="text-gray-300 text-xs mt-4 leading-relaxed">
                These organisations provide free, confidential support to anyone affected by problem gambling. They
                offer counselling, practical advice, and treatment options. Help is available 24/7 - you're not alone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
