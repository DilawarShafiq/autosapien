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
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -60])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, #0a0a10 100%)'
        }}
      />

      {/* Scan line */}
      <div className="scan-line" />

      {/* Corner HUD brackets */}
      <div className="absolute top-24 left-6 sm:left-12 w-12 h-12 border-t border-l border-signal-400/20 hidden lg:block" />
      <div className="absolute top-24 right-6 sm:right-12 w-12 h-12 border-t border-r border-signal-400/20 hidden lg:block" />
      <div className="absolute bottom-12 left-6 sm:left-12 w-12 h-12 border-b border-l border-signal-400/20 hidden lg:block" />
      <div className="absolute bottom-12 right-6 sm:right-12 w-12 h-12 border-b border-r border-signal-400/20 hidden lg:block" />

      {/* Main content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-0"
      >
        {/* System status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-10 sm:mb-14"
        >
          <div className="badge-hud">
            <span className="status-dot active" />
            <span>Building the Machines That Will Build Tomorrow</span>
          </div>
        </motion.div>

        {/* Main heading - massive, solid, no gradients */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="font-display font-bold text-display-2xl">
            <span className="block text-white">WHERE</span>
            <span className="block text-signal-400">INTELLIGENCE</span>
            <span className="block text-white">MEETS FORM</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-dim max-w-3xl mx-auto text-center mb-10 sm:mb-16 font-body leading-relaxed"
        >
          Autosapien is pioneering the convergence of artificial intelligence and physical robotics.
          From humanoid companions to healthcare automation, industrial machines to AI-generated cinema—we're
          not just imagining the future, we're engineering it into existence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 sm:mb-24"
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

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-16"
        >
          {[
            { value: '6', label: 'Core AI Verticals', href: '#capabilities' },
            { value: '#1', label: 'AI-Powered Healthcare IT', href: 'https://xehr.io' },
            { value: '1st', label: 'Humanoid in Development' },
            { value: '24/7', label: 'Agentic AI FTEs', href: 'https://rcmemployee.com' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + i * 0.1 }}
              className="text-center"
            >
              {stat.href ? (
                <a href={stat.href} {...(stat.href.startsWith('#') ? {} : { target: '_blank', rel: 'noopener noreferrer' })} className="group">
                  <div className="mb-2">
                    <span className="stat-display text-3xl sm:text-5xl md:text-6xl group-hover:opacity-80 transition-opacity">{stat.value}</span>
                  </div>
                  <div className="label-mono group-hover:text-signal-400/50 transition-colors">{stat.label}</div>
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

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-4 sm:bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="flex flex-col items-center gap-4"
        >
          <span className="label-mono">Scroll to Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-signal-400/40 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Side labels */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2">
        <div className="label-mono -rotate-90 origin-left whitespace-nowrap">
          AI & ROBOTICS — EST. 2024
        </div>
      </div>
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
        <div className="label-mono rotate-90 origin-right whitespace-nowrap">
          ENGINEERING INTELLIGENCE
        </div>
      </div>
    </section>
  )
}
