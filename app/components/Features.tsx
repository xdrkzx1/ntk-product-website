'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2L17.5 10.5H26L19.5 15.5L22 24L14 19L6 24L8.5 15.5L2 10.5H10.5L14 2Z" stroke="#ff8e01" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    title: 'Intelligent Automation',
    description:
      'Eliminate repetitive tasks across finance, supply chain, and operations. AI handles the complexity so your team can focus on what actually moves the needle.',
    tag: 'Core',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="16" width="5" height="9" rx="1" stroke="#ff8e01" strokeWidth="1.5" />
        <rect x="11.5" y="10" width="5" height="15" rx="1" stroke="#ff8e01" strokeWidth="1.5" />
        <rect x="20" y="4" width="5" height="21" rx="1" stroke="#ff8e01" strokeWidth="1.5" />
        <path d="M5.5 13L14 8L22.5 3" stroke="#ff8e01" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Real-Time Intelligence',
    description:
      'Surface the insights that matter the moment they emerge — not hours or days later. AI-powered dashboards built for enterprise decision velocity.',
    tag: 'Analytics',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="6" cy="14" r="3.5" stroke="#ff8e01" strokeWidth="1.5" />
        <circle cx="22" cy="6" r="3.5" stroke="#ff8e01" strokeWidth="1.5" />
        <circle cx="22" cy="22" r="3.5" stroke="#ff8e01" strokeWidth="1.5" />
        <path d="M9.5 14H16.5" stroke="#ff8e01" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9.5 12.5L18.5 7.5" stroke="#ff8e01" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9.5 15.5L18.5 20.5" stroke="#ff8e01" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Seamless Integration',
    description:
      'Native connectivity to SAP, Oracle, Salesforce, and 200+ enterprise tools. Deploy in days, not months. Zero disruption to your existing infrastructure.',
    tag: 'Integration',
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative bg-black py-32 px-6 overflow-hidden">
      {/* Subtle blue glow left */}
      <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#083a5e]/12 blur-[100px] rounded-full pointer-events-none" />

      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-[#ff8e01]/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            className="font-montserrat font-semibold text-[#ff8e01] text-xs tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            What We Do
          </motion.p>
          <motion.h2
            className="font-montserrat font-bold text-white text-4xl md:text-5xl leading-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Built to Remove
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #ff8e01, #ffb347)' }}
            >
              Operational Friction
            </span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="group relative bg-[#050505] border border-[#083a5e]/20 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:border-[#ff8e01]/30"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.13 }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#ff8e01]/[0.05] via-transparent to-[#083a5e]/[0.05] pointer-events-none" />

              {/* Tag */}
              <div className="absolute top-6 right-6">
                <span className="font-montserrat font-semibold text-[#8a8a8a] text-[10px] tracking-[0.2em] uppercase">
                  {feature.tag}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-7 w-12 h-12 rounded-xl bg-[#ff8e01]/8 border border-[#ff8e01]/15 flex items-center justify-center transition-all duration-300 group-hover:bg-[#ff8e01]/12 group-hover:border-[#ff8e01]/25">
                {feature.icon}
              </div>

              <h3 className="font-montserrat font-bold text-white text-xl mb-3">{feature.title}</h3>
              <p className="font-opensans text-[#8a8a8a] text-sm leading-relaxed">{feature.description}</p>

              {/* Bottom orange accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-[#ff8e01]/40 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
