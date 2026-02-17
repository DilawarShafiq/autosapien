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
    <section className="relative min-h-[60vh] sm:min-h-[80vh] flex items-center overflow-hidden pt-20 sm:pt-24 bg-carbon-900">
      {/* Background */}
      <div className="absolute inset-0 bg-technical-grid opacity-30" />

      {/* Geometric accents - hidden on mobile to prevent overflow */}
      <div className="hidden md:block absolute top-1/4 right-[10%] w-64 h-64 border border-ember-500/10" style={{ transform: 'rotate(45deg)' }} />
      <div className="hidden md:block absolute bottom-1/4 left-[10%] w-48 h-48 border border-volt-500/10" style={{ transform: 'rotate(45deg)' }} />

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-carbon-400 hover:text-ember-400 transition-colors mb-12 group"
          >
            <div className="w-10 h-10 border border-carbon-600 flex items-center justify-center group-hover:border-ember-500 transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="font-body">Back to Home</span>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Header with icon and category */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-start gap-4 mb-8"
            >
              <div className="w-16 h-16 border-2 border-ember-500 flex items-center justify-center">
                <Icon className="w-8 h-8 text-ember-400" />
              </div>
              <div>
                <span className="label-technical text-ember-500">{code}</span>
                <span className="label-technical ml-2">{category}</span>
                <div className="flex items-center gap-3 mt-2">
                  {status === 'developing' && (
                    <span className="badge">
                      <span className="status-dot developing" />
                      <span className="text-ember-400">Development</span>
                    </span>
                  )}
                  {status === 'launching' && (
                    <span className="badge badge-volt">
                      <Clock className="w-3 h-3" />
                      <span>{daysUntilLaunch} days</span>
                    </span>
                  )}
                  {status === 'active' && (
                    <span className="badge badge-active">
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
              className="font-display font-bold text-display-xl mb-4"
            >
              <span className="text-gradient">{title}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl text-white font-display font-semibold mb-4 sm:mb-6"
            >
              {subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-carbon-400 font-body mb-10 max-w-xl leading-relaxed"
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

          {/* Right content - Features */}
          {features && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            >
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="card-industrial p-6 group hover-lift"
                >
                  <div className="w-10 h-10 border border-carbon-600 flex items-center justify-center mb-4 group-hover:border-ember-500/50 transition-colors">
                    <div className="w-2 h-2 bg-ember-400" />
                  </div>
                  <p className="text-white font-display font-medium">{feature}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-carbon-600 to-transparent" />
    </section>
  )
}
