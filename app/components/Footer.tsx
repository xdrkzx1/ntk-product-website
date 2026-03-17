const LOGO_PATHS = {
  white:
    'M 662.167969 1439.953125 L 1369.445312 2147.230469 C 1205.421875 2311.265625 939.480469 2311.265625 775.445312 2147.230469 L 68.167969 1439.953125 L 775.445312 732.671875 C 939.480469 568.640625 1205.421875 568.640625 1369.445312 732.671875 Z',
  black:
    'M 2811.824219 1439.953125 L 2072.867188 2178.910156 C 1926.316406 2325.457031 1688.753906 2325.457031 1542.167969 2178.910156 L 1439.996094 2076.691406 L 803.246094 1439.953125 L 1439.996094 803.210938 L 1542.195312 700.992188 C 1688.746094 554.445312 1926.308594 554.445312 2072.894531 700.992188 Z',
  orange:
    'M 2811.824219 1439.953125 L 2090.644531 2161.140625 L 2072.867188 2178.910156 C 1926.316406 2325.457031 1688.753906 2325.457031 1542.167969 2178.910156 L 1439.996094 2076.691406 L 803.246094 1439.953125 L 1439.996094 803.210938 L 1542.195312 700.992188 C 1688.746094 554.445312 1926.308594 554.445312 2072.894531 700.992188 L 2090.644531 718.746094 Z',
}

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/[0.04] py-16 px-6">
      {/* Gradient top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-[#083a5e]/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 2880 2880" width="26" height="26">
              <path fill="#ffffff" d={LOGO_PATHS.white} />
              <path fill="#000000" d={LOGO_PATHS.black} />
              <path fill="#ff8e01" d={LOGO_PATHS.orange} />
            </svg>
            <span className="font-montserrat font-bold text-white text-sm tracking-[0.18em] uppercase">
              Noshtek
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {['Platform', 'Solutions', 'About', 'Privacy', 'Terms', 'Contact'].map((link) => (
              <a
                key={link}
                href="#"
                className="font-opensans text-[#4b4b4b] hover:text-white text-sm transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA */}
          <button className="px-5 py-2.5 bg-[#ff8e01] text-black font-montserrat font-bold text-xs tracking-wider rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,142,1,0.4)] flex-shrink-0">
            Request Demo
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/[0.04] mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-opensans text-[#4b4b4b] text-sm">
            © {new Date().getFullYear()} Noshtek. All rights reserved.
          </p>
          <p className="font-opensans text-[#4b4b4b]/50 text-xs">
            The AI Platform Built for Enterprise
          </p>
        </div>
      </div>
    </footer>
  )
}
