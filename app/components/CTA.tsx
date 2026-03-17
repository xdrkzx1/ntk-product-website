'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative bg-black py-40 px-6 overflow-hidden">
      {/* Orange center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#ff8e01]/[0.07] blur-[160px] rounded-full pointer-events-none" />

      {/* Blue glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#083a5e]/12 blur-[120px] rounded-full pointer-events-none" />

      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-[#ff8e01]/40 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Label */}
        <motion.p
          className="font-montserrat font-semibold text-[#ff8e01] text-xs tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          Get Started
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="font-montserrat font-bold text-white text-4xl md:text-6xl lg:text-[70px] leading-[1.05] tracking-tight"
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          Ready to Transform
          <br />
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(90deg, #ff8e01 0%, #ffb347 60%, #ff8e01 100%)' }}
          >
            Your Operations?
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="font-opensans text-[#4b4b4b] text-lg mt-8 mb-12 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          Join enterprise teams using Noshtek to run smarter, faster, and leaner.
          No long implementation timelines. No disruption.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {/* Primary */}
          <button className="group relative px-10 py-5 bg-[#ff8e01] text-black font-montserrat font-bold text-sm tracking-wider rounded-xl transition-all duration-300 hover:bg-[#ff8e01]/90 hover:shadow-[0_0_60px_rgba(255,142,1,0.5)] hover:scale-[1.03]">
            Request a Demo
            <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-white/10 to-transparent" />
          </button>

          {/* Secondary */}
          <button className="px-10 py-5 border border-[#4b4b4b]/30 text-[#4b4b4b] font-montserrat font-medium text-sm tracking-wide rounded-xl transition-all duration-300 hover:border-white/30 hover:text-white">
            Talk to Sales
          </button>
        </motion.div>

        {/* Trust signal */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-6 flex-wrap"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          {['SOC 2 Compliant', 'GDPR Ready', 'Enterprise SLA', '24/7 Support'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#007a3f]" />
              <span className="font-opensans text-[#4b4b4b] text-xs">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
