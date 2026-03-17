'use client'

import { motion, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'

const LOGO_PATHS = {
  white: 'M 662.167969 1439.953125 L 1369.445312 2147.230469 C 1205.421875 2311.265625 939.480469 2311.265625 775.445312 2147.230469 L 68.167969 1439.953125 L 775.445312 732.671875 C 939.480469 568.640625 1205.421875 568.640625 1369.445312 732.671875 Z',
  black:
    'M 2811.824219 1439.953125 L 2072.867188 2178.910156 C 1926.316406 2325.457031 1688.753906 2325.457031 1542.167969 2178.910156 L 1439.996094 2076.691406 L 803.246094 1439.953125 L 1439.996094 803.210938 L 1542.195312 700.992188 C 1688.746094 554.445312 1926.308594 554.445312 2072.894531 700.992188 Z',
  orange:
    'M 2811.824219 1439.953125 L 2090.644531 2161.140625 L 2072.867188 2178.910156 C 1926.316406 2325.457031 1688.753906 2325.457031 1542.167969 2178.910156 L 1439.996094 2076.691406 L 803.246094 1439.953125 L 1439.996094 803.210938 L 1542.195312 700.992188 C 1688.746094 554.445312 1926.308594 554.445312 2072.894531 700.992188 L 2090.644531 718.746094 Z',
}

const navLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.on('change', (y) => setScrolled(y > 40))
  }, [scrollY])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 3.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      />

      <div className="relative flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo + brand */}
        <button onClick={() => scrollTo('#hero')} className="flex items-center gap-3 group">
          <svg viewBox="0 0 2880 2880" width="30" height="30">
            <path fill="#ffffff" d={LOGO_PATHS.white} />
            <path fill="#000000" d={LOGO_PATHS.black} />
            <path fill="#ff8e01" d={LOGO_PATHS.orange} />
          </svg>
          <span className="font-montserrat font-bold text-white text-sm tracking-[0.18em] uppercase">
            Noshtek
          </span>
        </button>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => scrollTo(href)}
              className="relative font-opensans text-[#4b4b4b] hover:text-white text-sm transition-colors duration-200 group"
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#ff8e01] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('openDemoModal'))}
          className="px-5 py-2.5 bg-[#ff8e01] text-black font-montserrat font-bold text-xs tracking-wider rounded-lg transition-all duration-300 hover:bg-[#ff8e01]/90 hover:shadow-[0_0_24px_rgba(255,142,1,0.45)]"
        >
          Request Demo
        </button>
      </div>
    </motion.nav>
  )
}
