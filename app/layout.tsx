import type React from "react"
import type { Metadata } from "next/font"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Top Betting Sites in UK | Expert Reviews & Exclusive Bonuses - TopBettingSitesInUK.com",
  description:
    "Discover the best betting sites in the UK with expert reviews, exclusive bonuses, and comprehensive comparisons. Licensed and regulated UK bookmakers.",
  keywords:[
    "Top Betting Sites in UK",
    "UK Gambling Commission",
    "UK Bookmakers",
    "UK Betting Sites",
    "UK Gambling",
    "UK Gambling Sites",
    "UK Gambling Operators",
    "UK Gambling Commission",
    "UK Gambling Regulations", 
    "UK Betting Reviews",
    "UK Betting Bonuses",
    "UK Betting Promotions",
    "UK Betting Comparisons",
    "UK Betting Guides",
    "UK Betting Tips",
    "UK Betting Strategies",
    "UK Betting Odds",
    "UK Betting Markets",
    "UK Betting Features",
    "UK Betting Apps",
    "UK Betting Sites List"
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
