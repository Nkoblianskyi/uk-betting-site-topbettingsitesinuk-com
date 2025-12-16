"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ShieldCheck, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { bettingSites } from "@/data/betting-sites"

export function TopOffersModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [topSite, setTopSite] = useState(bettingSites[0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 8000)

      return () => clearTimeout(timer)
    }
  }, [mounted])

  if (!isOpen || !mounted) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg shadow-2xl overflow-hidden border border-slate-700">
        <div className="relative bg-slate-900/90 backdrop-blur-sm border-b-2 border-amber-500/50">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          <div className="py-4 px-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-serif font-bold text-white">Exclusive UK Offer</h2>
              <p className="text-xs text-slate-400 mt-0.5">Limited Time - Premium Selection</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors bg-slate-800/50 hover:bg-slate-700/50 rounded-full p-2"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <Link href={topSite.link} target="_blank" rel="noopener noreferrer" className="block">
            <div className="bg-white/5 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-amber-500/50 transition-all duration-300">
              <div className="absolute -right-2 top-8 bg-gradient-to-r from-amber-600 to-amber-500 text-white px-8 py-1 text-xs font-bold transform rotate-45 shadow-lg">
                BEST IN UK
              </div>

              {/* Logo section */}
              <div className="bg-white rounded-lg p-4 mb-4 shadow-md flex items-center justify-center h-32">
                <Image
                  src={topSite.logo || "/placeholder.svg"}
                  alt={topSite.name}
                  width={140}
                  height={80}
                  className="object-contain max-h-full"
                />
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-lg text-white">{topSite.score.toFixed(1)}</span>
              </div>

              {/* UKGC License badge */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <ShieldCheck className="h-4 w-4 text-blue-400" />
                <span className="text-xs text-slate-300">UKGC Licensed</span>
              </div>

              {/* Bonus offer */}
              <div className="text-center mb-6">
                <div className="inline-block px-3 py-1 bg-green-500/20 border border-green-500/30 rounded text-xs text-green-400 mb-2">
                  WELCOME BONUS
                </div>
                <h3 className="font-bold text-white mb-1 text-2xl">{topSite.bonus}</h3>
                
              </div>

              {/* CTA Button */}
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-6 text-base transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                asChild
              >
                <span>Claim Your Bonus</span>
              </Button>

              {/* Disclaimer */}
              <p className="text-xs text-center text-slate-400 mt-4 leading-relaxed">
                18+ only. New customers. T&Cs apply. BeGambleAware.org
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
