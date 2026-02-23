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
      {/* Frosted overlay so particles don't compete with text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 45%, rgba(250, 250, 248, 0.85) 0%, rgba(250, 250, 248, 0.4) 70%, transparent 100%)'
        }}
      />

      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 40% at 50% 45%, rgba(201, 164, 76, 0.06) 0%, transparent 70%)'
        }}
      />

      {/* Corner brackets */}
      <div className="absolute top-28 left-6 sm:left-12 w-10 h-10 border-t border-l border-amber-400/30 hidden lg:block" />
      <div className="absolute top-28 right-6 sm:right-12 w-10 h-10 border-t border-r border-amber-400/30 hidden lg:block" />
      <div className="absolute bottom-16 left-6 sm:left-12 w-10 h-10 border-b border-l border-amber-400/30 hidden lg:block" />
      <div className="absolute bottom-16 right-6 sm:right-12 w-10 h-10 border-b border-r border-amber-400/30 hidden lg:block" />

      {/* Side rotated labels */}
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 items-center">
        <span
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-300 -rotate-90 origin-center whitespace-nowrap"
        >
          AI & Robotics — Est. 2024
        </span>
      </div>
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 items-center">
        <span
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-300 rotate-90 origin-center whitespace-nowrap"
        >
          Engineering Intelligence
        </span>
      </div>

      {/* Main content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-0"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-10 sm:mb-14"
        >
          <div className="badge-pill badge-amber rounded-full">
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
          <h1 className="font-display font-bold text-display-2xl text-ink-900">
            <span className="block opacity-80">WHERE</span>
            <span className="block" style={{ color: '#b8933f' }}>INTELLIGENCE</span>
            <span className="block opacity-80">MEETS FORM</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-center mb-12 sm:mb-16 font-body text-ink-500 leading-relaxed"
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
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 sm:mb-24"
        >
          <button className="btn-primary group rounded-lg">
            <span className="flex items-center gap-3">
              Robotics — Under Development
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <a href="https://xehr.io" target="_blank" rel="noopener noreferrer" className="btn-secondary group rounded-lg">
            <span className="flex items-center gap-3 transition-colors">
              Explore xEHR.io
              <span className="status-dot active" />
            </span>
          </a>
        </motion.div>

        {/* Stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        >
          {[
            { value: '6', label: 'Core AI Verticals', href: '#capabilities' },
            { value: '#1', label: 'AI-Powered Healthcare IT', href: 'https://xehr.io' },
            { value: '1st', label: 'Humanoid in Development' },
            { value: '24/7', label: 'Agentic AI FTEs', href: 'https://rcmemployee.com' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
            >
              {stat.href ? (
                <a
                  href={stat.href}
                  {...(stat.href.startsWith('#') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                  className="block p-4 sm:p-6 rounded-xl border border-surface-200 bg-white/60 backdrop-blur-sm text-center group hover:border-amber-300 hover:shadow-card transition-all"
                >
                  <div className="mb-2">
                    <span className="stat-display-gold text-2xl sm:text-4xl md:text-5xl group-hover:opacity-80 transition-opacity">{stat.value}</span>
                  </div>
                  <div className="label-mono text-[9px] sm:text-[10px]">{stat.label}</div>
                </a>
              ) : (
                <div className="p-4 sm:p-6 rounded-xl border border-surface-200 bg-white/60 backdrop-blur-sm text-center">
                  <div className="mb-2">
                    <span className="stat-display-gold text-2xl sm:text-4xl md:text-5xl">{stat.value}</span>
                  </div>
                  <div className="label-mono text-[9px] sm:text-[10px]">{stat.label}</div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom rule */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 sm:mt-16 max-w-4xl mx-auto"
        >
          <div className="h-px w-full bg-surface-300" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="flex flex-col items-center gap-3"
        >
          <span className="label-mono text-[9px]">Scroll</span>
          <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, rgba(184, 147, 63, 0.3), transparent)' }} />
        </motion.div>
      </motion.div>

      {/* Bottom fade to separate hero from content */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #fafaf8)'
        }}
      />
    </section>
  )
}
