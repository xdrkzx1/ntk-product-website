'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const LOGO_PATHS = {
  white:
    'M 662.167969 1439.953125 L 1369.445312 2147.230469 C 1205.421875 2311.265625 939.480469 2311.265625 775.445312 2147.230469 L 68.167969 1439.953125 L 775.445312 732.671875 C 939.480469 568.640625 1205.421875 568.640625 1369.445312 732.671875 Z',
  black:
    'M 2811.824219 1439.953125 L 2072.867188 2178.910156 C 1926.316406 2325.457031 1688.753906 2325.457031 1542.167969 2178.910156 L 1439.996094 2076.691406 L 803.246094 1439.953125 L 1439.996094 803.210938 L 1542.195312 700.992188 C 1688.746094 554.445312 1926.308594 554.445312 2072.894531 700.992188 Z',
  orange:
    'M 2811.824219 1439.953125 L 2090.644531 2161.140625 L 2072.867188 2178.910156 C 1926.316406 2325.457031 1688.753906 2325.457031 1542.167969 2178.910156 L 1439.996094 2076.691406 L 803.246094 1439.953125 L 1439.996094 803.210938 L 1542.195312 700.992188 C 1688.746094 554.445312 1926.308594 554.445312 2072.894531 700.992188 L 2090.644531 718.746094 Z',
}

const logoVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.22, delayChildren: 0.15 },
  },
}

const whiteVariant = {
  hidden: { opacity: 0, x: -40, scale: 0.92 },
  visible: {
    opacity: 1, x: 0, scale: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
}

const blackVariant = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const orangeVariant = {
  hidden: { opacity: 0, x: 40, scale: 0.92 },
  visible: {
    opacity: 1, x: 0, scale: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Loader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2900)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Ambient glow behind logo */}
          <motion.div
            className="absolute w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(255,142,1,0.12) 0%, rgba(8,58,94,0.08) 50%, transparent 75%)',
            }}
            animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />

          {/* Animated Logo */}
          <motion.svg
            viewBox="0 0 2880 2880"
            width="96"
            height="96"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            style={{ filter: 'drop-shadow(0 0 30px rgba(255, 142, 1, 0.45))' }}
          >
            <motion.g variants={whiteVariant}>
              <path fill="#ffffff" d={LOGO_PATHS.white} />
            </motion.g>
            <motion.g variants={blackVariant}>
              <path fill="#000000" d={LOGO_PATHS.black} />
            </motion.g>
            <motion.g variants={orangeVariant}>
              <path fill="#ff8e01" d={LOGO_PATHS.orange} />
            </motion.g>
          </motion.svg>

          {/* Brand name */}
          <motion.p
            className="mt-6 font-montserrat font-bold text-white text-xs tracking-[0.45em] uppercase"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            Noshtek
          </motion.p>

          {/* Tagline */}
          <motion.p
            className="mt-2 font-opensans text-[#8a8a8a] text-[11px] tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            The AI Platform Built for Enterprise
          </motion.p>

          {/* Progress bar at bottom */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px]"
            style={{
              background: 'linear-gradient(90deg, #083a5e 0%, #ff8e01 50%, #083a5e 100%)',
            }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.6, ease: [0.22, 0.6, 0.36, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
