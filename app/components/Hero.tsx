'use client'

import { motion } from 'framer-motion'

const LOGO_PATHS = {
  white:
    'M 662.167969 1439.953125 L 1369.445312 2147.230469 C 1205.421875 2311.265625 939.480469 2311.265625 775.445312 2147.230469 L 68.167969 1439.953125 L 775.445312 732.671875 C 939.480469 568.640625 1205.421875 568.640625 1369.445312 732.671875 Z',
  black:
    'M 2811.824219 1439.953125 L 2072.867188 2178.910156 C 1926.316406 2325.457031 1688.753906 2325.457031 1542.167969 2178.910156 L 1439.996094 2076.691406 L 803.246094 1439.953125 L 1439.996094 803.210938 L 1542.195312 700.992188 C 1688.746094 554.445312 1926.308594 554.445312 2072.894531 700.992188 Z',
  orange:
    'M 2811.824219 1439.953125 L 2090.644531 2161.140625 L 2072.867188 2178.910156 C 1926.316406 2325.457031 1688.753906 2325.457031 1542.167969 2178.910156 L 1439.996094 2076.691406 L 803.246094 1439.953125 L 1439.996094 803.210938 L 1542.195312 700.992188 C 1688.746094 554.445312 1926.308594 554.445312 2072.894531 700.992188 L 2090.644531 718.746094 Z',
}

const logoContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.22, delayChildren: 0.2 },
  },
}

const whiteShapeVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

const blackShapeVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

const orangeShapeVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}


export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#030100] flex flex-col items-center justify-center overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/*
          CSS @property mesh gradient — blob centers are registered typed custom
          properties (<percentage>), so @keyframes can smooth-interpolate them.
          filter:blur(12px) gives lava-lamp softness on the whole layer; since
          there is no per-child transform being animated, zero GPU compositing
          conflict — motion is fully visible.
        */}
        <div className="hero-mesh" />

        {/* Centre dark vignette — pulls focus onto text */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 58% 52% at 50% 40%, rgba(3,1,0,0.86) 0%, transparent 100%)',
          }}
        />

        {/* Bottom fade to black */}
        <div className="absolute bottom-0 left-0 right-0 h-[58%] bg-gradient-to-t from-black via-black/65 to-transparent" />

        {/* Film grain — steps(1) creates rapid random jump = tactile shimmer */}
        <div className="hero-grain" aria-hidden>
          <svg width="100%" height="100%">
            <filter id="hero-noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#hero-noise)" />
          </svg>
        </div>
      </div>

      {/* ── Content ── */}
      {/* pt-20 ensures logo never crowds the fixed navbar */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto pt-20">

        {/* Animated Logo */}
        <motion.svg
          viewBox="0 0 2880 2880"
          width="100"
          height="100"
          variants={logoContainerVariants}
          initial="hidden"
          animate="visible"
          style={{ filter: 'drop-shadow(0 0 32px rgba(255,130,0,0.45))' }}
          className="mb-7"
        >
          <motion.g variants={whiteShapeVariants}>
            <path fill="#ffffff" d={LOGO_PATHS.white} />
          </motion.g>
          <motion.g variants={blackShapeVariants}>
            <path fill="#000000" d={LOGO_PATHS.black} />
          </motion.g>
          <motion.g variants={orangeShapeVariants}>
            <path fill="#ff8e01" d={LOGO_PATHS.orange} />
          </motion.g>
        </motion.svg>

        {/* Brand label */}
        <motion.p
          className="font-montserrat font-semibold text-[#8a8a8a] text-[11px] tracking-[0.42em] uppercase mb-8"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          Noshtek
        </motion.p>

        {/* Main headline */}
        <motion.h1
          className="font-montserrat font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.06] tracking-tight"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          The AI Platform
          <br />
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(90deg, #ff8e01 0%, #ffb347 100%)' }}
          >
            Built for Enterprise
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="font-opensans text-[#8a8a8a] text-lg md:text-xl leading-relaxed mt-7 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.55, duration: 0.8 }}
        >
          Automate complex operations, integrate your SAP ecosystem, and surface insights
          that move your business forward — all from one intelligent platform.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-10 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.85, duration: 0.7 }}
        >
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('openDemoModal'))}
            className="px-8 py-4 bg-[#ff8e01] text-black font-montserrat font-bold text-sm tracking-wide rounded-xl transition-all duration-300 hover:bg-[#ff8e01]/90 hover:shadow-[0_0_40px_rgba(255,142,1,0.50)] hover:scale-[1.02]"
          >
            Request a Demo
          </button>

          <div
            className="p-[1px] rounded-xl"
            style={{
              background: 'linear-gradient(135deg, #083a5e 0%, #ff8e01 50%, #083a5e 100%)',
              backgroundSize: '200% 200%',
              animation: 'gradientRotate 4s ease infinite',
            }}
          >
            <button className="px-8 py-4 bg-[#030100] text-white font-montserrat font-medium text-sm tracking-wide rounded-[11px] transition-all duration-300 hover:bg-black/80">
              See the Platform
            </button>
          </div>
        </motion.div>

        {/* Trusted by */}
        <motion.p
          className="mt-12 font-opensans text-[#8a8a8a]/55 text-xs tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 0.6 }}
        >
          Trusted by enterprise teams worldwide
        </motion.p>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 0.6 }}
      >
        <span className="font-opensans text-[#8a8a8a]/45 text-[10px] tracking-[0.25em] uppercase">
          Scroll
        </span>
        <motion.div
          className="w-[1px] h-10 origin-top"
          style={{ background: 'linear-gradient(to bottom, rgba(255,142,1,0.7), transparent)' }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
