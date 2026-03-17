'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const metrics = [
  {
    value: '10x',
    label: 'Faster Deployment',
    desc: 'vs. traditional enterprise solutions',
  },
  {
    value: '85%',
    label: 'Processes Automated',
    desc: 'on average across client deployments',
  },
  {
    value: '200+',
    label: 'Enterprise Integrations',
    desc: 'SAP, ERP, CRM, and beyond',
  },
  {
    value: '99.9%',
    label: 'Uptime SLA',
    desc: 'guaranteed platform availability',
  },
]

export default function Metrics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative bg-black py-24 px-6">
      {/* Top + bottom orange gradient dividers */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[360px] h-[1px] bg-gradient-to-r from-transparent via-[#ff8e01]/35 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[360px] h-[1px] bg-gradient-to-r from-transparent via-[#ff8e01]/35 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center md:items-start md:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.1 }}
            >
              {/* Orange top accent */}
              <div className="w-8 h-[2px] bg-[#ff8e01] mb-5 rounded-full" />

              <div className="font-montserrat font-bold text-white text-5xl md:text-6xl leading-none mb-2">
                {metric.value}
              </div>
              <div className="font-montserrat font-semibold text-[#ff8e01] text-sm mb-1">
                {metric.label}
              </div>
              <div className="font-opensans text-[#8a8a8a] text-xs leading-relaxed">
                {metric.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
