"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-slate-900/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-center h-16 px-4">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold leading-none">
              <span className="text-white">TopBettingSites</span>
              <span className="text-amber-400">InUK</span>
            </span>
          </div>
        </Link>
      </div>
    </header>
  )
}
