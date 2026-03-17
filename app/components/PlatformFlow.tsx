'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const LOGO_PATHS = {
  white:
    'M 662.167969 1439.953125 L 1369.445312 2147.230469 C 1205.421875 2311.265625 939.480469 2311.265625 775.445312 2147.230469 L 68.167969 1439.953125 L 775.445312 732.671875 C 939.480469 568.640625 1205.421875 568.640625 1369.445312 732.671875 Z',
  black:
    'M 2811.824219 1439.953125 L 2072.867188 2178.910156 C 1926.316406 2325.457031 1688.753906 2325.457031 1542.167969 2178.910156 L 1439.996094 2076.691406 L 803.246094 1439.953125 L 1439.996094 803.210938 L 1542.195312 700.992188 C 1688.746094 554.445312 1926.308594 554.445312 2072.894531 700.992188 Z',
  orange:
    'M 2811.824219 1439.953125 L 2090.644531 2161.140625 L 2072.867188 2178.910156 C 1926.316406 2325.457031 1688.753906 2325.457031 1542.167969 2178.910156 L 1439.996094 2076.691406 L 803.246094 1439.953125 L 1439.996094 803.210938 L 1542.195312 700.992188 C 1688.746094 554.445312 1926.308594 554.445312 2072.894531 700.992188 L 2090.644531 718.746094 Z',
}

const inputs = [
  { label: 'SAP Systems', sub: 'ERP & S/4HANA' },
  { label: 'Business Data', sub: 'CRM, Finance, Ops' },
  { label: 'External Sources', sub: 'APIs & Feeds' },
]

const outputs = [
  { label: 'Automation', sub: 'Workflow execution' },
  { label: 'Intelligence', sub: 'Real-time insights' },
  { label: 'Decisions', sub: 'AI-recommended actions' },
]

function FlowCard({ label, sub, align }: { label: string; sub: string; align: 'left' | 'right' }) {
  return (
    <div
      className={`flex items-center gap-3 bg-[#083a5e]/08 border rounded-xl px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:border-[#ff8e01]/30 group ${
        align === 'right'
          ? 'border-[#ff8e01]/15 bg-[#ff8e01]/[0.04]'
          : 'border-[#083a5e]/25 bg-[#083a5e]/[0.07]'
      }`}
    >
      <div
        className={`w-2 h-2 rounded-full flex-shrink-0 ${
          align === 'right' ? 'bg-[#ff8e01]' : 'bg-[#083a5e]'
        }`}
      />
      <div>
        <div className="font-montserrat font-semibold text-white text-sm">{label}</div>
        <div className="font-opensans text-[#8a8a8a] text-xs mt-0.5">{sub}</div>
      </div>
    </div>
  )
}

export default function PlatformFlow() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative bg-black py-32 px-6 overflow-hidden">
      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#083a5e]/12 blur-[130px] rounded-full pointer-events-none" />

      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] h-[1px] bg-gradient-to-r from-transparent via-[#ff8e01]/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            className="font-montserrat font-semibold text-[#ff8e01] text-xs tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            The Platform
          </motion.p>
          <motion.h2
            className="font-montserrat font-bold text-white text-4xl md:text-5xl leading-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Everything Flows Through
            <br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #ff8e01, #ffb347)' }}>
              One Intelligent Core
            </span>
          </motion.h2>
          <motion.p
            className="font-opensans text-[#8a8a8a] text-lg mt-5 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Connect your entire enterprise data landscape. NTK sits at the center, processing, automating, and delivering outcomes in real time.
          </motion.p>
        </div>

        {/* Flow diagram */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_60px_280px_60px_1fr] items-center gap-6 md:gap-0">

          {/* Left: Inputs */}
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {inputs.map((item, i) => (
              <FlowCard key={i} label={item.label} sub={item.sub} align="left" />
            ))}
          </motion.div>

          {/* Arrow left → center */}
          <motion.div
            className="hidden md:flex flex-col items-center justify-center gap-1 relative"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <div className="w-full h-[1px] bg-gradient-to-r from-[#083a5e]/60 to-[#ff8e01]/60" />
            {/* Animated dot */}
            <motion.div
              className="absolute w-2 h-2 rounded-full bg-[#ff8e01]"
              style={{ left: '10%' }}
              animate={{ left: ['10%', '85%'] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', repeatType: 'loop', repeatDelay: 0.4 }}
            />
          </motion.div>

          {/* Center: NTK Platform card */}
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.82 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#ff8e01]/10 to-[#083a5e]/10 blur-xl -z-10" />

            <div className="relative w-full bg-[#050505] border border-[#ff8e01]/20 rounded-2xl p-8 text-center overflow-hidden">
              {/* Scan line animation */}
              <motion.div
                className="absolute left-0 right-0 h-[1px] pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,142,1,0.55) 50%, transparent 100%)',
                  top: '15%',
                }}
                animate={{ top: ['15%', '85%'] }}
                transition={{ duration: 2.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              />

              {/* Inner glow border */}
              <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-[#ff8e01]/5 to-transparent -z-10" />

              {/* Logo */}
              <div className="flex justify-center mb-5">
                <svg
                  viewBox="0 0 2880 2880"
                  width="64"
                  height="64"
                  style={{ filter: 'drop-shadow(0 0 16px rgba(255,142,1,0.55))' }}
                >
                  <path fill="#ffffff" d={LOGO_PATHS.white} />
                  <path fill="#000000" d={LOGO_PATHS.black} />
                  <path fill="#ff8e01" d={LOGO_PATHS.orange} />
                </svg>
              </div>

              <div className="font-montserrat font-bold text-white text-lg mb-1">Noshtek</div>
              <div className="font-opensans text-[#ff8e01] text-[10px] tracking-[0.3em] uppercase mb-5">
                AI Platform
              </div>

              {/* Status dots */}
              <div className="flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#007a3f] animate-pulse" />
                <span className="font-opensans text-[#8a8a8a] text-[11px]">Processing live</span>
              </div>
            </div>
          </motion.div>

          {/* Arrow center → right */}
          <motion.div
            className="hidden md:flex flex-col items-center justify-center gap-1 relative"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <div className="w-full h-[1px] bg-gradient-to-r from-[#ff8e01]/60 to-[#083a5e]/60" />
            <motion.div
              className="absolute w-2 h-2 rounded-full bg-[#ff8e01]"
              style={{ left: '10%' }}
              animate={{ left: ['10%', '85%'] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', repeatType: 'loop', repeatDelay: 0.4, delay: 0.9 }}
            />
          </motion.div>

          {/* Right: Outputs */}
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            {outputs.map((item, i) => (
              <FlowCard key={i} label={item.label} sub={item.sub} align="right" />
            ))}
          </motion.div>
        </div>

        {/* Bottom label */}
        <motion.p
          className="text-center font-opensans text-[#8a8a8a]/50 text-xs mt-14 tracking-wider"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          200+ native integrations · SAP, ERP, CRM, and beyond
        </motion.p>
      </div>
    </section>
  )
}
