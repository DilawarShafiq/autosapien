import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LucideIcon } from 'lucide-react'

// Calculate days until March 22, 2025
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
}

export function PageHero({
  icon: Icon,
  category,
  title,
  subtitle,
  description,
  gradient,
  features,
  status,
}: PageHeroProps) {
  const [daysUntilLaunch, setDaysUntilLaunch] = useState(getDaysUntilLaunch())

  useEffect(() => {
    const timer = setInterval(() => {
      setDaysUntilLaunch(getDaysUntilLaunch())
    }, 1000 * 60 * 60) // Update every hour
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[60vh] sm:min-h-[80vh] flex items-center overflow-hidden pt-24">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br ${gradient} opacity-10 blur-3xl`} />
        <div className={`absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br ${gradient} opacity-5 blur-3xl`} />
        <div className="absolute inset-0 neural-grid opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-neutral-400 uppercase tracking-wider">{category}</span>
              {/* Status Badge */}
              {status === 'developing' && (
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-xs text-amber-400 font-medium animate-pulse">
                  Developing...
                </span>
              )}
              {status === 'launching' && (
                <span className="px-3 py-1 rounded-full bg-rose-500/20 text-xs text-rose-400 font-medium flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {daysUntilLaunch} days
                </span>
              )}
              {status === 'active' && (
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-xs text-green-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Active
                </span>
              )}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                {title}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl text-neutral-300 mb-6"
            >
              {subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-neutral-400 mb-10 max-w-xl"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="mailto:info@autosapien.com"
                className={`px-8 py-4 rounded-xl bg-gradient-to-r ${gradient} text-white font-medium flex items-center gap-2 hover:opacity-90 transition-opacity`}
              >
                info@autosapien.com
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right content - Features */}
          {features && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="glass rounded-2xl p-6 hover-lift"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradient} opacity-20 flex items-center justify-center mb-4`}>
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${gradient}`} />
                  </div>
                  <p className="text-white font-medium">{feature}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
