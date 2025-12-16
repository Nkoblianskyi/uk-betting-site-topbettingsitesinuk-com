"use client"

import { Shield, Award, Star } from "lucide-react"

interface HeroSectionProps {
  onAgeModalOpen: () => void
  onAdvertiserModalOpen: () => void
}

export function HeroSection({ onAgeModalOpen, onAdvertiserModalOpen }: HeroSectionProps) {
  return (
    <section className="relative text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/75 z-0"></div>

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white opacity-5"></div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-white to-red-500 opacity-60"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-white to-blue-500 opacity-60"></div>
      </div>

      <div className="container mx-auto px-2 py-6 md:py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <h1 className="text-lg md:text-xl font-bold mb-2 leading-tight">
              UK'S <span className="text-red-300">PREMIER</span> BETTING SITES
            </h1>
            <p className="text-sm md:text-lg text-gray-100 max-w-2xl mx-auto">
              Expert reviews and exclusive bonuses from Britain's most trusted bookmakers
            </p>
          </div>

          <div className="flex flex-row flex-wrap items-center justify-center gap-3 md:gap-6 mb-4">
            <div className="flex items-center">
              <div className="bg-blue-600/30 p-1 rounded-md mr-2 border border-blue-400/30">
                <Shield className="h-4 w-4 text-blue-200" />
              </div>
              <span className="text-xs font-medium">UKGC Licensed</span>
            </div>

            <div className="flex items-center">
              <div className="bg-blue-600/30 p-1 rounded-md mr-2 border border-blue-400/30">
                <Award className="h-4 w-4 text-blue-200" />
              </div>
              <span className="text-xs font-medium">Exclusive Welcome Offers</span>
            </div>

            <div className="flex items-center">
              <div className="bg-blue-600/30 p-1 rounded-md mr-2 border border-blue-400/30">
                <Star className="h-4 w-4 text-blue-200" />
              </div>
              <span className="text-xs font-medium">Trusted Reviews</span>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-xs text-gray-100">
              When the fun stops, stop. Gamble responsibly.{" "}
              <button
                onClick={onAdvertiserModalOpen}
                className="text-red-300 hover:text-red-200 hover:underline font-medium transition-colors duration-300"
              >
                Advertiser Disclosure
              </button>{" "}
              |{" "}
              <button
                onClick={onAgeModalOpen}
                className="text-red-300 hover:text-red-200 hover:underline font-medium transition-colors duration-300"
              >
                18+ Only
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
