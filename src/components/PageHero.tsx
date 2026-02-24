import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LucideIcon } from 'lucide-react'

function getDaysUntilLaunch() {
  const launchDate = new Date('2025-03-22T00:00:00')
  const now = new Date()
  const diff = launchDate.getTime() - now.getTime()
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
  return days > 0 ? days : 0
}

interface PageHeroProps {
  icon: LucideIcon
  category: string
  title: string
  subtitle: string
  description: string
  gradient: string
  features?: string[]
  status?: 'developing' | 'launching' | 'active'
  code?: string
}

export function PageHero({
  icon: Icon,
  category,
  title,
  subtitle,
  description,
  features,
  status,
  code = 'PRJ-000',
}: PageHeroProps) {
  const [daysUntilLaunch, setDaysUntilLaunch] = useState(getDaysUntilLaunch())

  useEffect(() => {
    const timer = setInterval(() => {
      setDaysUntilLaunch(getDaysUntilLaunch())
    }, 1000 * 60 * 60)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-24 dot-grid" style={{ background: '#fafafa' }}>
      {/* Large faded code watermark */}
      <div className="hidden sm:block absolute top-24 right-8 sm:right-16 number-marker text-[120px] sm:text-[160px] select-none" style={{ color: 'rgba(0, 133, 212, 0.05)' }}>
        {code}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-ink-400 hover:text-sky-600 transition-colors mb-12 group"
          >
            <div className="w-9 h-9 rounded-full border border-surface-300 flex items-center justify-center group-hover:border-sky-400 group-hover:bg-sky-50 transition-all">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <span className="font-body text-sm">Back to Home</span>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-start gap-4 mb-8"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center">
                <Icon className="w-6 h-6 text-sky-600" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="label-mono text-sky-600 text-[10px]">{code}</span>
                  <span className="label-mono text-[10px]">{category}</span>
                </div>
                <div className="flex items-center gap-3">
                  {status === 'developing' && (
                    <span className="badge-pill badge-sky"><span className="status-dot developing" />Development</span>
                  )}
                  {status === 'launching' && (
                    <span className="badge-pill"><Clock className="w-3 h-3" />{daysUntilLaunch} days</span>
                  )}
                  {status === 'active' && (
                    <span className="badge-pill badge-live"><span className="status-dot active" />Live</span>
                  )}
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-display-xl mb-4 text-sky-600"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl text-ink-900 font-display font-semibold mb-6"
            >
              {subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-ink-400 font-body mb-10 max-w-xl leading-relaxed"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="mailto:info@autosapien.com" className="btn-primary group rounded-lg">
                <span className="flex items-center gap-3">
                  Contact Us
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </a>
            </motion.div>
          </div>

          {features && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-3"
            >
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.06 }}
                  className="card-clean p-5 rounded-xl group hover-lift hover-glow hover:border-sky-200/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-surface-100 flex items-center justify-center mb-3 group-hover:bg-sky-50 group-hover:scale-105 transition-all">
                    <span className="font-mono text-[10px] font-bold text-sky-600/60">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="text-ink-900 font-display font-medium text-sm">{feature}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-300/20 to-transparent" />
    </section>
  )
}
