"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-none shadow-2xl">
        <div className="border-b border-amber-600/50 bg-gradient-to-r from-slate-900 to-slate-800 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-serif font-bold text-white">Advertiser Disclosure</h2>
            <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors" aria-label="Close">
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="p-8 space-y-6">
          <div className="space-y-4 text-slate-200 leading-relaxed">
            <div className="border-l-2 border-blue-600 pl-4">
              <p className="text-base">
                <span className="font-semibold text-white">TopBettingSitesInUK.com</span> is an independent comparison
                service designed to help you discover the finest bookmakers operating in the United Kingdom. We receive
                affiliate commission from featured operators, which may influence their positioning within our rankings.
              </p>
            </div>

            <div className="border-l-2 border-red-600 pl-4">
              <p className="text-base">
                All bookmakers featured on our platform hold valid licences issued by the{" "}
                <span className="font-semibold text-white">UK Gambling Commission</span>. We maintain strict editorial
                independence and exclusively recommend operators that meet our rigorous standards of trust and
                reliability.
              </p>
            </div>

            <div className="border-l-2 border-amber-600 pl-4">
              <p className="text-base">
                Promotional offers and bonuses are subject to change without notice. We strongly advise reviewing the
                complete terms and conditions on each operator's official website before accepting any promotional offer
                or registering an account.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-sm p-4 mt-6">
            <p className="text-sm text-slate-300 leading-relaxed">
              <span className="font-semibold text-amber-500">Please gamble responsibly.</span> Betting should be
              entertaining, not a way to make money. If you feel gambling is affecting your life, please seek help from
              BeGambleAware, GamCare, or GamStop.
            </p>
          </div>

          <div className="flex justify-end pt-2">
            <Button
              onClick={onClose}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-base font-medium transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl"
            >
              I Understand
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
