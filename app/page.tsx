"use client"

import { useState } from "react"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { BettingSitesList } from "@/components/betting-sites-list"
import { ResponsibleGamblingSection } from "@/components/responsible-gambling-section"
import { InfoSection } from "@/components/info-section"
import { FaqSection } from "@/components/faq-section"
import { TopOffersModal } from "@/components/top-offers-modal"
import { AgeRestrictionModal } from "@/components/age-restriction-modal"
import { AdvertiserInfoModal } from "@/components/advertiser-info-modal"
import { AnimatedSportsIcons } from "@/components/animated-sports-icons"

export default function Home() {
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false)
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)

  return (
    <main className="min-h-screen flex flex-col">
      <div className="fixed inset-0 z-0">
        <Image src="/uk-football-hero.jpg" alt="UK Football Stadium" fill className="object-cover" priority />
      </div>

      <SiteHeader />

      <div className="pt-10 relative z-10 flex-grow">
        {/* Hero Section */}
        <HeroSection
          onAgeModalOpen={() => setIsAgeModalOpen(true)}
          onAdvertiserModalOpen={() => setIsAdvertiserModalOpen(true)}
        />

        <div id="betting-sites" className="relative">
          <div className="absolute inset-0 bg-black/75 z-0"></div>
          <div className="absolute inset-0 overflow-hidden z-0">
            <AnimatedSportsIcons />
          </div>
          <div className="relative z-10">
            <BettingSitesList />
          </div>
        </div>

        <ResponsibleGamblingSection />

        <InfoSection />

        <FaqSection />
      </div>

      <div className="relative z-10">
        <SiteFooter />
      </div>

      <TopOffersModal />
      <AgeRestrictionModal isOpen={isAgeModalOpen} onClose={() => setIsAgeModalOpen(false)} />
      <AdvertiserInfoModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
    </main>
  )
}
