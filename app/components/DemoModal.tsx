'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

type FormState = {
  name: string
  company: string
  email: string
  phone: string
  size: string
  message: string
}

function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  required,
  value,
  onChange,
}: {
  label: string
  name: string
  type?: string
  placeholder: string
  required?: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-montserrat font-semibold text-white text-[11px] tracking-[0.15em] uppercase block mb-2"
      >
        {label}
        {required && <span className="text-[#ff8e01] ml-0.5">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full bg-[#0a0a0a] border border-[#083a5e]/30 hover:border-[#083a5e]/50 focus:border-[#ff8e01]/50 text-white font-opensans text-sm rounded-xl px-4 py-3.5 outline-none transition-colors duration-200 placeholder:text-[#4b4b4b]/50"
      />
    </div>
  )
}

export default function DemoModal() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    phone: '',
    size: '',
    message: '',
  })

  // Listen for global open event from any button
  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('openDemoModal', handler)
    return () => window.removeEventListener('openDemoModal', handler)
  }, [])

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => {
    setOpen(false)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', company: '', email: '', phone: '', size: '', message: '' })
    }, 400)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(close, 3500)
  }

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }))

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[9998] bg-black/75 backdrop-blur-md cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
          />

          {/* Modal container */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              className="relative w-full max-w-2xl bg-[#030303] border border-[#083a5e]/30 rounded-2xl overflow-hidden pointer-events-auto max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.93, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 24 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top gradient accent */}
              <div className="h-[2px] w-full bg-gradient-to-r from-[#083a5e] via-[#ff8e01] to-[#083a5e]" />

              {/* Subtle glow inside card */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#ff8e01]/[0.04] blur-[80px] rounded-full pointer-events-none" />

              {/* Close button */}
              <button
                onClick={close}
                className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center text-[#4b4b4b] hover:text-white transition-all duration-200 z-10"
                aria-label="Close"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>

              <div className="relative p-8 md:p-10">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      {/* Header */}
                      <div className="mb-8">
                        <p className="font-montserrat font-semibold text-[#ff8e01] text-[10px] tracking-[0.3em] uppercase mb-3">
                          Book a Demo
                        </p>
                        <h2 className="font-montserrat font-bold text-white text-2xl md:text-[28px] mb-2">
                          See Noshtek in Action
                        </h2>
                        <p className="font-opensans text-[#4b4b4b] text-sm leading-relaxed max-w-md">
                          Tell us about your needs and we'll show you exactly how we can transform your operations.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Row 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            label="Full Name"
                            name="name"
                            placeholder="John Smith"
                            required
                            value={form.name}
                            onChange={set('name')}
                          />
                          <FormField
                            label="Company Name"
                            name="company"
                            placeholder="Acme Corp"
                            required
                            value={form.company}
                            onChange={set('company')}
                          />
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            label="Work Email"
                            name="email"
                            type="email"
                            placeholder="john@company.com"
                            required
                            value={form.email}
                            onChange={set('email')}
                          />
                          <FormField
                            label="Phone"
                            name="phone"
                            placeholder="+1 (555) 000-0000"
                            value={form.phone}
                            onChange={set('phone')}
                          />
                        </div>

                        {/* Company size */}
                        <div>
                          <label
                            htmlFor="size"
                            className="font-montserrat font-semibold text-white text-[11px] tracking-[0.15em] uppercase block mb-2"
                          >
                            Company Size
                          </label>
                          <select
                            id="size"
                            value={form.size}
                            onChange={set('size')}
                            className="w-full bg-[#0a0a0a] border border-[#083a5e]/30 hover:border-[#083a5e]/50 focus:border-[#ff8e01]/50 text-white font-opensans text-sm rounded-xl px-4 py-3.5 outline-none transition-colors duration-200 appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-[#0a0a0a]">Select company size</option>
                            <option value="1-50" className="bg-[#0a0a0a]">1–50 employees</option>
                            <option value="51-200" className="bg-[#0a0a0a]">51–200 employees</option>
                            <option value="201-1000" className="bg-[#0a0a0a]">201–1,000 employees</option>
                            <option value="1000+" className="bg-[#0a0a0a]">1,000+ employees</option>
                          </select>
                        </div>

                        {/* Message */}
                        <div>
                          <label
                            htmlFor="message"
                            className="font-montserrat font-semibold text-white text-[11px] tracking-[0.15em] uppercase block mb-2"
                          >
                            What are you looking to solve?{' '}
                            <span className="text-[#4b4b4b] normal-case font-opensans font-normal tracking-normal">
                              (optional)
                            </span>
                          </label>
                          <textarea
                            id="message"
                            rows={3}
                            placeholder="Tell us about your current challenges..."
                            value={form.message}
                            onChange={set('message')}
                            className="w-full bg-[#0a0a0a] border border-[#083a5e]/30 hover:border-[#083a5e]/50 focus:border-[#ff8e01]/50 text-white font-opensans text-sm rounded-xl px-4 py-3.5 outline-none transition-colors duration-200 resize-none placeholder:text-[#4b4b4b]/50"
                          />
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          className="w-full py-4 bg-[#ff8e01] text-black font-montserrat font-bold text-sm tracking-wider rounded-xl transition-all duration-300 hover:bg-[#ff8e01]/90 hover:shadow-[0_0_40px_rgba(255,142,1,0.4)] active:scale-[0.99]"
                        >
                          Submit Request →
                        </button>

                        <p className="text-center font-opensans text-[#4b4b4b]/50 text-xs">
                          No spam. Our team will respond within 24 hours.
                        </p>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      className="py-12 text-center"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {/* Success icon */}
                      <motion.div
                        className="w-16 h-16 rounded-full bg-[#007a3f]/15 border border-[#007a3f]/30 flex items-center justify-center mx-auto mb-6"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <motion.path
                            d="M20 6L9 17L4 12"
                            stroke="#007a3f"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                          />
                        </svg>
                      </motion.div>

                      <h3 className="font-montserrat font-bold text-white text-2xl mb-3">
                        Request Submitted!
                      </h3>
                      <p className="font-opensans text-[#4b4b4b] text-sm max-w-sm mx-auto leading-relaxed">
                        Thank you{form.name ? `, ${form.name.split(' ')[0]}` : ''}! Our team will reach out within{' '}
                        <span className="text-white">24 hours</span> to schedule your personalised demo.
                      </p>

                      <div className="mt-8 flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#007a3f] animate-pulse" />
                        <span className="font-opensans text-[#4b4b4b] text-xs">
                          Closing automatically…
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
