import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle radial warmth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(240, 160, 48, 0.04) 0%, transparent 70%)'
        }}
      />

      {/* Main content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-0"
      >
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-10 sm:mb-14"
        >
          <div className="badge-pill badge-amber">
            <span className="status-dot developing" />
            <span>Building the Machines That Will Build Tomorrow</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="text-center mb-8"
        >
          <h1 className="font-display font-bold text-display-2xl">
            <span className="block">WHERE</span>
            <span className="block text-amber-500">INTELLIGENCE</span>
            <span className="block">MEETS FORM</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-ink-500 max-w-3xl mx-auto text-center mb-12 sm:mb-16 font-body leading-relaxed"
        >
          Autosapien is pioneering the convergence of artificial intelligence and physical robotics.
          From humanoid companions to healthcare automation, industrial machines to AI-generated cinema—we're
          not just imagining the future, we're engineering it into existence.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 sm:mb-28"
        >
          <button className="btn-primary group">
            <span className="flex items-center gap-3">
              Robotics — Under Development
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <a href="https://xehr.io" target="_blank" rel="noopener noreferrer" className="btn-secondary group">
            <span className="flex items-center gap-3">
              Explore xEHR.io
              <span className="status-dot active" />
            </span>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 md:gap-16"
        >
          {[
            { value: '6', label: 'Core AI Verticals', href: '#capabilities' },
            { value: '#1', label: 'AI-Powered Healthcare IT', href: 'https://xehr.io' },
            { value: '1st', label: 'Humanoid in Development' },
            { value: '24/7', label: 'Agentic AI FTEs', href: 'https://rcmemployee.com' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="text-center"
            >
              {stat.href ? (
                <a href={stat.href} {...(stat.href.startsWith('#') ? {} : { target: '_blank', rel: 'noopener noreferrer' })} className="group">
                  <div className="mb-2">
                    <span className="stat-display text-3xl sm:text-5xl md:text-6xl group-hover:text-amber-600 transition-colors">{stat.value}</span>
                  </div>
                  <div className="label-mono">{stat.label}</div>
                </a>
              ) : (
                <>
                  <div className="mb-2">
                    <span className="stat-display text-3xl sm:text-5xl md:text-6xl">{stat.value}</span>
                  </div>
                  <div className="label-mono">{stat.label}</div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="flex flex-col items-center gap-3"
        >
          <span className="label-mono">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-ink-300 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
