const LOGO_PATHS = {
  white:
    'M 662.167969 1439.953125 L 1369.445312 2147.230469 C 1205.421875 2311.265625 939.480469 2311.265625 775.445312 2147.230469 L 68.167969 1439.953125 L 775.445312 732.671875 C 939.480469 568.640625 1205.421875 568.640625 1369.445312 732.671875 Z',
  black:
    'M 2811.824219 1439.953125 L 2072.867188 2178.910156 C 1926.316406 2325.457031 1688.753906 2325.457031 1542.167969 2178.910156 L 1439.996094 2076.691406 L 803.246094 1439.953125 L 1439.996094 803.210938 L 1542.195312 700.992188 C 1688.746094 554.445312 1926.308594 554.445312 2072.894531 700.992188 Z',
  orange:
    'M 2811.824219 1439.953125 L 2090.644531 2161.140625 L 2072.867188 2178.910156 C 1926.316406 2325.457031 1688.753906 2325.457031 1542.167969 2178.910156 L 1439.996094 2076.691406 L 803.246094 1439.953125 L 1439.996094 803.210938 L 1542.195312 700.992188 C 1688.746094 554.445312 1926.308594 554.445312 2072.894531 700.992188 L 2090.644531 718.746094 Z',
}

const footerLinks = {
  Platform: ['Features', 'Integrations', 'How It Works', 'Roadmap'],
  Company: ['About', 'Careers', 'Blog', 'Partners'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'],
}

const socialLinks = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden pt-20 pb-10 px-6">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff8e01]/40 to-transparent" />

      {/* Blue glow — bottom left */}
      <div className="absolute bottom-0 left-0 w-[450px] h-[350px] bg-[#083a5e]/10 blur-[110px] rounded-full pointer-events-none" />
      {/* Orange glow — top right */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#ff8e01]/[0.05] blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-14">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <svg viewBox="0 0 2880 2880" width="26" height="26">
                <path fill="#ffffff" d={LOGO_PATHS.white} />
                <path fill="#000000" d={LOGO_PATHS.black} />
                <path fill="#ff8e01" d={LOGO_PATHS.orange} />
              </svg>
              <span className="font-montserrat font-bold text-white text-sm tracking-[0.18em] uppercase">
                Noshtek
              </span>
            </div>

            <p className="font-opensans text-[#4b4b4b] text-sm leading-relaxed max-w-[260px] mb-7">
              The AI platform that connects, automates, and accelerates enterprise operations at scale.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-[#083a5e]/15 border border-[#083a5e]/25 flex items-center justify-center text-[#4b4b4b] hover:text-white hover:border-[#ff8e01]/40 hover:bg-[#ff8e01]/10 transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Contact email */}
            <div className="mt-6 flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#007a3f]" />
              <a
                href="mailto:hello@noshtek.com"
                className="font-opensans text-[#4b4b4b] hover:text-[#ff8e01] text-sm transition-colors duration-200"
              >
                hello@noshtek.com
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-montserrat font-bold text-white text-[11px] tracking-[0.22em] uppercase mb-5">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-opensans text-[#4b4b4b] hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <span className="w-0 group-hover:w-3 h-[1px] bg-[#ff8e01] transition-all duration-300 inline-block" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── CTA strip ── */}
        <div className="relative rounded-2xl border border-[#083a5e]/25 bg-[#083a5e]/08 px-8 py-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#083a5e]/10 to-[#ff8e01]/[0.04] pointer-events-none rounded-2xl" />
          <div className="relative">
            <p className="font-montserrat font-bold text-white text-base mb-1">
              Ready to transform your enterprise?
            </p>
            <p className="font-opensans text-[#4b4b4b] text-sm">
              Start your journey with Noshtek today.
            </p>
          </div>
          <button className="relative flex-shrink-0 px-7 py-3 bg-[#ff8e01] text-black font-montserrat font-bold text-sm tracking-wide rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,142,1,0.4)] hover:scale-[1.03]">
            Request a Demo
          </button>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-opensans text-[#4b4b4b] text-sm">
            © {new Date().getFullYear()} Noshtek. All rights reserved.
          </p>

          <div className="flex items-center gap-1 flex-wrap justify-center">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-1">
                <a
                  href="#"
                  className="font-opensans text-[#4b4b4b] hover:text-white text-sm transition-colors duration-200"
                >
                  {item}
                </a>
                {i < arr.length - 1 && (
                  <span className="text-[#4b4b4b]/30 mx-1">·</span>
                )}
              </span>
            ))}
          </div>

          <p className="font-opensans text-[#4b4b4b]/40 text-xs">
            Built with AI. Powered by ambition.
          </p>
        </div>
      </div>
    </footer>
  )
}
