'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Connect',
    description:
      'Link your existing ERP, SAP, and data systems in days — not months — using our library of pre-built enterprise connectors.',
    detail: 'Zero disruption to live systems',
  },
  {
    number: '02',
    title: 'Configure',
    description:
      'Define business rules and workflows through our visual builder. No code required. Full flexibility for your team.',
    detail: 'No-code workflow studio',
  },
  {
    number: '03',
    title: 'Operate',
    description:
      'AI executes, monitors, and continuously optimizes your operations in real time — with complete audit trails and visibility.',
    detail: 'Continuous AI optimization',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative bg-[#020202] py-32 px-6 overflow-hidden">
      {/* Background center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#083a5e]/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[240px] h-[1px] bg-gradient-to-r from-transparent via-[#083a5e]/60 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            className="font-montserrat font-semibold text-[#ff8e01] text-xs tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            How It Works
          </motion.p>
          <motion.h2
            className="font-montserrat font-bold text-white text-4xl md:text-5xl leading-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Three Steps to
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #ff8e01, #ffb347)' }}
            >
              Operational Intelligence
            </span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Horizontal connector line (desktop only) */}
          <div className="absolute hidden md:block top-[52px] left-[calc(16.67%+52px)] right-[calc(16.67%+52px)] h-[1px]">
            <motion.div
              className="h-full"
              style={{
                background: 'linear-gradient(90deg, #083a5e, #ff8e01, #083a5e)',
                transformOrigin: '0% 50%',
              }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 44 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.75, delay: 0.2 + i * 0.18 }}
              >
                {/* Number ring */}
                <div className="relative mb-8 flex-shrink-0">
                  <div className="w-[104px] h-[104px] rounded-full border border-[#ff8e01]/25 bg-black flex items-center justify-center relative z-10">
                    <span className="font-montserrat font-bold text-[#ff8e01] text-2xl">{step.number}</span>
                  </div>
                  {/* Glow behind circle */}
                  <div className="absolute inset-0 rounded-full bg-[#ff8e01]/8 blur-xl -z-0" />
                </div>

                <h3 className="font-montserrat font-bold text-white text-2xl mb-4">{step.title}</h3>
                <p className="font-opensans text-[#8a8a8a] text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Detail tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#083a5e]/15 border border-[#083a5e]/25">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#007a3f]" />
                  <span className="font-opensans text-[#8a8a8a] text-[11px] tracking-wide">{step.detail}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
