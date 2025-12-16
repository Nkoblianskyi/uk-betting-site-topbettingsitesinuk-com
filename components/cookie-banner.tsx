"use client"

import { useCookieConsent } from "@/context/cookie-consent-context"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const { showBanner, acceptAll, declineAll } = useCookieConsent()

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-blue-900 text-white p-4 shadow-lg animate-slide-up">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">Cookie Notice</h3>
            <p className="text-sm">
              We use cookies to enhance your browsing experience, analyse site traffic, and serve personalised content.
              By clicking "Accept All", you consent to our use of cookies in accordance with UK data protection laws.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-blue-800 transition-all duration-300 hover:shadow-md bg-transparent"
              onClick={declineAll}
            >
              Decline
            </Button>
            <Button
              className="bg-red-600 hover:bg-red-700 transition-all duration-300 hover:shadow-md transform hover:scale-105"
              onClick={acceptAll}
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
