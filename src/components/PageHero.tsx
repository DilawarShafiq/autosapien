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
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-grid opacity-25" />

      {/* Geometric accents */}
      <div className="absolute top-1/4 right-[10%] w-48 h-48 border border-signal-400/5 hidden sm:block" style={{ transform: 'rotate(45deg)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-obsidian-300 hover:text-signal-400 transition-colors mb-12 group"
          >
            <div className="w-9 h-9 border border-obsidian-600 flex items-center justify-center group-hover:border-signal-400/40 transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
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
              <div className="w-14 h-14 border border-signal-400/25 flex items-center justify-center">
                <Icon className="w-7 h-7 text-signal-400" />
              </div>
              <div>
                <span className="label-mono text-signal-400/50">{code}</span>
                <span className="label-mono ml-2">{category}</span>
                <div className="flex items-center gap-3 mt-2">
                  {status === 'developing' && (
                    <span className="badge-hud">
                      <span className="status-dot developing" />
                      <span>Development</span>
                    </span>
                  )}
                  {status === 'launching' && (
                    <span className="badge-hud">
                      <Clock className="w-3 h-3" />
                      <span>{daysUntilLaunch} days</span>
                    </span>
                  )}
                  {status === 'active' && (
                    <span className="badge-hud badge-live">
                      <span className="status-dot active" />
                      <span>Live</span>
                    </span>
                  )}
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-display-xl mb-4 text-signal-400"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl text-white font-display font-semibold mb-6"
            >
              {subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted font-body mb-10 max-w-xl leading-relaxed"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="mailto:info@autosapien.com" className="btn-primary group">
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="card-hud p-5 group hover-lift"
                >
                  <div className="w-8 h-8 border border-obsidian-600 flex items-center justify-center mb-4 group-hover:border-signal-400/30 transition-colors">
                    <div className="w-1.5 h-1.5 bg-signal-400" />
                  </div>
                  <p className="text-white font-display font-medium text-sm">{feature}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      <div className="divider-glow absolute bottom-0 left-0 right-0" />
    </section>
  )
}
