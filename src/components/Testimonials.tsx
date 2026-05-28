import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote, MapPin, Stethoscope, FileCheck, LineChart, ShieldCheck } from 'lucide-react'

// NOTE: Placeholder section — to be replaced with real testimonials from USA-based clients.
// Cards are intentionally rendered in a "coming soon" state so the layout reads honestly.

const placeholderSlots = [
  {
    icon: Stethoscope,
    type: 'Practice Administrator',
    location: 'USA Healthcare Practice',
    product: 'xEHR.io',
    expected: 'Q1 2026',
  },
  {
    icon: FileCheck,
    type: 'Revenue Cycle Manager',
    location: 'USA Multi-Specialty Group',
    product: 'RCM Employee',
    expected: 'Q1 2026',
  },
  {
    icon: ShieldCheck,
    type: 'Compliance Officer',
    location: 'USA Digital Health Co.',
    product: 'BetterCompliant',
    expected: 'Q2 2026',
  },
]

const principles = [
  { icon: LineChart, label: 'Measured Outcomes', sub: 'Real metrics, not vibes' },
  { icon: ShieldCheck, label: 'HIPAA Compliant', sub: 'PHI never leaves audit boundary' },
  { icon: MapPin, label: 'USA-Based Clients', sub: 'Practice-grade workflows' },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-40"
      style={{ background: '#ffffff', overflowX: 'clip' }}
    >
      {/* Top hairline */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(80%,600px)] h-px bg-gradient-to-r from-transparent via-sky-300/40 to-transparent" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-sky-300/50" />
            <span className="label-mono text-sky-600">Trust & Validation</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-sky-300/50" />
          </div>
          <h2 className="font-display font-bold text-display-lg mb-5">
            Real reviews. Real practices. Soon.
          </h2>
          <p className="text-base sm:text-lg text-ink-400 font-body leading-relaxed">
            We don&rsquo;t publish testimonials we can&rsquo;t prove. Our first cohort of USA-based
            customers are running our platforms in production now—their reviews land here as
            engagements mature.
          </p>
        </motion.div>

        {/* Placeholder cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {placeholderSlots.map((slot, i) => (
            <motion.article
              key={slot.product}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
              className="relative p-7 rounded-2xl bg-white border border-dashed border-surface-300 hover:border-sky-300/60 transition-colors duration-500 overflow-hidden group"
            >
              {/* Diagonal hatched watermark */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(45deg, #0085d4 0 1px, transparent 1px 14px)',
                }}
              />

              {/* Status pill */}
              <div className="relative flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.15em] bg-sky-50 text-sky-700 border border-sky-200/60">
                  <span className="status-dot developing" />
                  Awaiting publication
                </span>
                <span className="font-mono text-[10px] text-ink-400 tracking-[0.15em]">
                  {slot.expected}
                </span>
              </div>

              {/* Quote icon */}
              <Quote className="w-8 h-8 text-sky-200 mb-4 relative" />

              {/* Skeleton quote lines */}
              <div className="space-y-2 mb-6 relative">
                <div className="h-3 rounded-full bg-gradient-to-r from-surface-200 to-surface-100 w-[92%]" />
                <div className="h-3 rounded-full bg-gradient-to-r from-surface-200 to-surface-100 w-[88%]" />
                <div className="h-3 rounded-full bg-gradient-to-r from-surface-200 to-surface-100 w-[78%]" />
                <div className="h-3 rounded-full bg-gradient-to-r from-surface-200 to-surface-100 w-[60%]" />
              </div>

              {/* Attribution block */}
              <div className="relative pt-5 border-t border-surface-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-100 flex items-center justify-center">
                  <slot.icon className="w-4 h-4 text-ink-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-semibold text-ink-700 text-sm leading-tight">
                    {slot.type}
                  </div>
                  <div className="text-[11px] text-ink-400 font-body truncate">
                    {slot.location}
                  </div>
                </div>
                <span className="font-mono text-[10px] text-sky-700 tracking-[0.1em]">
                  {slot.product}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid sm:grid-cols-3 gap-3 rounded-2xl border border-surface-200 bg-surface-50/40 p-4"
        >
          {principles.map((p) => (
            <div
              key={p.label}
              className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-white border border-surface-200 flex items-center justify-center flex-shrink-0">
                <p.icon className="w-4 h-4 text-sky-600" />
              </div>
              <div className="min-w-0">
                <div className="font-display font-semibold text-ink-900 text-sm leading-tight">
                  {p.label}
                </div>
                <div className="text-[11px] text-ink-400 font-body">{p.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Honest disclosure */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-8 label-mono text-[10px] text-ink-400"
        >
          Reviews go live as engagements mature — we will never fabricate quotes.
        </motion.p>
      </div>
    </section>
  )
}
