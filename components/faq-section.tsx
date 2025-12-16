"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      id: "faq-1",
      question: "How do we select the best UK betting sites?",
      answer:
        "Our expert team evaluates each bookmaker based on UKGC licensing, security measures, welcome bonuses, competitive odds, market variety, mobile apps, payment options, customer service, and user experience. We only recommend fully licensed UK Gambling Commission operators.",
    },
    {
      id: "faq-2",
      question: "Are these betting sites legal and safe in the UK?",
      answer:
        "Yes, all bookmakers featured on TopBettingSitesInUK.com are fully licensed and regulated by the UK Gambling Commission, the strictest gambling regulator in the world. This ensures your funds are protected and fair play is guaranteed.",
    },
    {
      id: "faq-3",
      question: "What types of welcome bonuses are available?",
      answer:
        "UK bookmakers offer various welcome bonuses including matched free bets, enhanced odds on first bets, acca insurance, money-back specials, and bet credits. Due to UK regulations, bonuses must have fair terms and cannot include deposit matches on casino games.",
    },
    {
      id: "faq-4",
      question: "How do I claim a betting bonus?",
      answer:
        "To claim a welcome offer, register with the bookmaker through our links, verify your identity (required by UK law), make your first deposit, and place a qualifying bet. Some offers activate automatically, whilst others require a bonus code during registration.",
    },
    {
      id: "faq-5",
      question: "What payment methods are available at UK bookmakers?",
      answer:
        "UK bookmakers accept debit cards (Visa/Mastercard), e-wallets (PayPal, Skrill, Neteller), bank transfers, Apple Pay, and prepaid cards like PaySafeCard. Credit cards are banned for gambling in the UK since April 2020.",
    },
    {
      id: "faq-6",
      question: "Do UK betting sites have mobile apps?",
      answer:
        "Yes, all major UK bookmakers offer dedicated mobile apps for iOS and Android, plus mobile-optimised websites. Mobile betting allows you to place bets, watch live streams, cash out, and manage your account on the go with full functionality.",
    },
    {
      id: "faq-7",
      question: "How can I gamble responsibly in the UK?",
      answer:
        "Set deposit limits before you start, never chase losses, take regular breaks, and use responsible gambling tools like time-outs and self-exclusion. UK bookmakers offer reality checks and deposit limit controls. For help, contact BeGambleAware, GamCare, or register with GamStop.",
    },
  ]

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/75 z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 border-b border-white/10 pb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-300">Everything you need to know about UK betting sites</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 hover:bg-white/10 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-white py-4 hover:text-blue-300 transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
