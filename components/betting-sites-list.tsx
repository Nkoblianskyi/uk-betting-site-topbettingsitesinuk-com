"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Shield } from "lucide-react"
import { bettingSites } from "@/data/betting-sites"

export function BettingSitesList() {
  const [sites, setSites] = useState(bettingSites)

  const getBadgeText = (index: number) => {
    const badges = ["BEST CHOICE", "TOP RATED", "POPULAR", "RECOMMENDED"]
    return index < 4 ? badges[index] : null
  }

  return (
    <section className="py-12 md:py-16 relative z-10">
      <div className="absolute inset-0 bg-black/75 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        

        <div className="w-full max-w-5xl mx-auto space-y-4">
          {sites.map((site, index) => (
            <Link key={site.id} href={site.link} target="_blank" rel="noopener noreferrer" className="block group">
              <div
                className={`relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-none border-l-4 ${
                  index === 0
                    ? "border-l-amber-500 shadow-2xl shadow-amber-500/20"
                    : "border-l-slate-600 shadow-xl shadow-black/50"
                } overflow-visible`}
              >
                {getBadgeText(index) && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <div
                      className={`${
                        index === 0
                          ? "bg-gradient-to-br from-amber-600 to-amber-700"
                          : index === 1
                            ? "bg-gradient-to-br from-blue-600 to-blue-700"
                            : index === 2
                              ? "bg-gradient-to-br from-red-600 to-red-700"
                              : "bg-gradient-to-br from-emerald-600 to-emerald-700"
                      } text-white text-xs font-bold px-4 py-1.5 tracking-wider shadow-lg`}
                    >
                      {getBadgeText(index)}
                    </div>
                  </div>
                )}

                <div
                  className={`h-px bg-gradient-to-r ${
                    index === 0
                      ? "from-transparent via-amber-500/50 to-transparent"
                      : "from-transparent via-slate-600/50 to-transparent"
                  }`}
                ></div>

                {/* Desktop Layout */}
                <div className="hidden md:grid">
                  <div className="grid grid-cols-12 gap-0">
                    <div className="col-span-3 p-5 flex flex-col items-center justify-center border-r border-white/5">
                      <div className="relative w-full max-w-[140px]">
                        <div className="bg-white rounded-sm p-3 shadow-lg border border-slate-200">
                          <Image
                            src={site.logo || "/placeholder.svg"}
                            alt={site.name}
                            width={140}
                            height={56}
                            className="object-contain h-12 w-auto mx-auto"
                          />
                        </div>
                        {getBadgeText(index) && (
                          <div className="absolute -top-2 -right-2 z-20">
                            <div
                              className={`${
                                index === 0
                                  ? "bg-gradient-to-br from-amber-600 to-amber-700 border-amber-400/30"
                                  : index === 1
                                    ? "bg-gradient-to-br from-blue-600 to-blue-700 border-blue-400/30"
                                    : index === 2
                                      ? "bg-gradient-to-br from-red-600 to-red-700 border-red-400/30"
                                      : "bg-gradient-to-br from-emerald-600 to-emerald-700 border-emerald-400/30"
                              } text-white text-[10px] font-bold px-2 py-1 tracking-wider border shadow-lg`}
                            >
                              {getBadgeText(index)}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-span-5 p-5 flex flex-col justify-center">
                      <div className="mb-4">
                        <div className="text-xs text-slate-400 uppercase tracking-widest mb-1 font-semibold">
                          Welcome Offer
                        </div>
                        <div className="text-xl font-bold text-white leading-tight">{site.bonus}</div>
                      </div>

                      <div className="flex items-center gap-4 pt-3 border-t border-white/5">
                        <div>
                          <div className="flex items-center gap-1 mb-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                            ))}
                          </div>
                          <div className="text-xs text-slate-400">{site.reviews || 2500} Reviews</div>
                        </div>

                        <div className="flex items-center gap-2 text-emerald-400">
                          <Shield className="w-3.5 h-3.5" />
                          <span className="text-xs font-semibold">UKGC Licensed</span>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`col-span-4 p-5 flex flex-col items-center justify-center border-l border-white/5 ${
                        index === 0 ? "bg-gradient-to-br from-amber-600/10 to-amber-700/5" : ""
                      }`}
                    >
                      <div className="w-full text-center space-y-3">
                        <div className="text-3xl font-bold text-emerald-500 mb-1">{site.score.toFixed(1)}</div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider mb-3">Expert Rating</div>

                        <Button
                          className="w-full bg-emerald-700 hover:bg-emerald-600 text-white border border-emerald-600/30 font-bold text-sm py-5 tracking-wide shadow-lg uppercase"
                          asChild
                        >
                          <span>Visit Site</span>
                        </Button>

                        <p className="text-[10px] text-slate-500 leading-relaxed">18+ T&Cs Apply</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:hidden p-4 pt-8">
                  {/* First Row: Logo 45% + Bonus 55% centered */}
                  <div className="flex gap-3 mb-4 pb-4 border-b border-white/10">
                    {/* Logo section - 45% */}
                    <div className="w-[45%]">
                      <div className="bg-white rounded-sm p-2 shadow-md border border-slate-200">
                        <Image
                          src={site.logo || "/placeholder.svg"}
                          alt={site.name}
                          width={120}
                          height={48}
                          className="object-contain h-10 w-auto mx-auto"
                        />
                      </div>
                    </div>

                    <div className="w-[55%] flex flex-col justify-center items-center text-center">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Welcome Offer</div>
                      <div className="text-lg font-bold text-white leading-tight">{site.bonus}</div>
                    </div>
                  </div>

                  {/* Second Row: Rating + Stars/Reviews + Button */}
                  <div className="grid grid-cols-3 gap-3 items-center mb-4 pb-4 border-b border-white/10">
                    {/* Rating */}
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-500">{site.score.toFixed(1)}</div>
                      <div className="text-[9px] text-slate-500 uppercase mt-0.5">Rating</div>
                    </div>

                    {/* Stars + Reviews */}
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex items-center gap-0.5 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                        ))}
                      </div>
                      <div className="text-[9px] text-slate-400">{site.reviews} Reviews</div>
                    </div>

                    {/* Button */}
                    <div>
                      <Button
                        className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs py-3 tracking-wide shadow-lg uppercase"
                        asChild
                      >
                        <span>Visit</span>
                      </Button>
                    </div>
                  </div>

                  {/* Third Row: Disclaimer */}
                  <div className="text-center">
                    <p className="text-[10px] text-slate-500">18+ T&Cs Apply • UKGC Licensed</p>
                  </div>
                </div>

                <div
                  className={`h-px bg-gradient-to-r ${
                    index === 0
                      ? "from-transparent via-amber-500/50 to-transparent"
                      : "from-transparent via-slate-600/50 to-transparent"
                  }`}
                ></div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            All bookmakers are licensed and regulated by the UK Gambling Commission. Please gamble responsibly.
          </p>
        </div>
      </div>
    </section>
  )
}
