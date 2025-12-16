import Link from "next/link"
import Image from "next/image"
import { Shield } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold leading-none">
                  <span className="text-white">TopBettingSites</span>
                  <span className="text-amber-400">InUK</span>
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted source for UKGC-licensed betting platforms. Expert reviews and comprehensive comparisons.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-sm text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Responsible Gaming */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">18+ Only</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              All bookmakers are UKGC-licensed. Gamble responsibly. When the fun stops, stop.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <h4 className="text-xs font-bold text-center mb-6 text-gray-500 uppercase tracking-wider">
            UK Regulatory & Support Organizations
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Link
              href="https://www.begambleaware.org/"
              className="transition-transform duration-300 hover:scale-105  hover:grayscale-0 opacity-70 hover:opacity-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/gamble-aware.png" alt="BeGambleAware" width={100} height={32} />
            </Link>

            <Link
              href="https://www.gamcare.org.uk/"
              className="transition-transform duration-300 hover:scale-105  hover:grayscale-0 opacity-70 hover:opacity-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/gamcare.png" alt="GamCare" width={100} height={32} />
            </Link>

            <Link
              href="https://www.gamstop.co.uk/"
              className="transition-transform duration-300 hover:scale-105  hover:grayscale-0 opacity-70 hover:opacity-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/gamstop.svg" alt="GamStop" width={100} height={32} />
            </Link>

            <Link
              href="https://www.gamblingtherapy.org/"
              className="transition-transform duration-300 hover:scale-105  hover:grayscale-0 opacity-70 hover:opacity-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/gordon.png" alt="Gambling Therapy" width={100} height={32} />
            </Link>

            <Link
              href="https://www.gamblingcommission.gov.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/Gambling_Commission_logo.png"
                alt="UK Gambling Commission"
                width={100}
                height={35}
                className="mb-2"
              />
            </Link>


          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 bg-slate-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© TopBettingSitesInUK.com. All rights reserved.</p>
            <p className="text-center">
              18+ only. Gambling involves risk. We may receive commission from featured bookmakers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
