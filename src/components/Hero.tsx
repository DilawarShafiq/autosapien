import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function AnimatedNumber({ value, suffix = '' }: { value: string; suffix?: string }) {
  const [display, setDisplay] = useState('0')
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const num = parseInt(value.replace(/\D/g, ''))
    if (isNaN(num)) {
      setDisplay(value)
      return
    }

    let start = 0
    const duration = 1800
    const startTime = performance.now()

    function tick(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      start = Math.round(eased * num)

      const prefix = value.startsWith('#') ? '#' : value.startsWith('<') ? '<' : ''
      setDisplay(prefix + start + suffix)

      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [value, suffix])

  return <span ref={ref}>{display}</span>
}

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
      {/* Soft radial warmth behind headline — no heavy frosted overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 45% 35% at 50% 45%, rgba(201, 164, 76, 0.04) 0%, transparent 70%)'
        }}
      />

      {/* Corner brackets — bolder, larger */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      >
        <div className="absolute top-28 left-6 sm:left-10 w-14 h-14 border-t-2 border-l-2 border-amber-300/40 hidden lg:block" />
        <div className="absolute top-28 right-6 sm:right-10 w-14 h-14 border-t-2 border-r-2 border-amber-300/40 hidden lg:block" />
        <div className="absolute bottom-20 left-6 sm:left-10 w-14 h-14 border-b-2 border-l-2 border-amber-300/40 hidden lg:block" />
        <div className="absolute bottom-20 right-6 sm:right-10 w-14 h-14 border-b-2 border-r-2 border-amber-300/40 hidden lg:block" />
      </motion.div>

      {/* Side rotated labels */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 items-center"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-300 -rotate-90 origin-center whitespace-nowrap">
          AI & Robotics — Est. 2024
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 items-center"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-300 rotate-90 origin-center whitespace-nowrap">
          Engineering Intelligence
        </span>
      </motion.div>

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
            <span className="block opacity-75">WHERE</span>
            <span className="block text-amber-600">INTELLIGENCE</span>
            <span className="block opacity-75">MEETS FORM</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-center mb-12 sm:mb-16 font-body text-ink-400 leading-relaxed"
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

        {/* Stat cards with animated counters */}
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
                  className="block p-4 sm:p-6 rounded-xl border border-surface-200 bg-white/70 backdrop-blur-sm text-center group hover:border-amber-300 hover:shadow-elevated transition-all duration-300"
                >
                  <div className="mb-2">
                    <span className="stat-display-gold text-2xl sm:text-4xl md:text-5xl group-hover:opacity-80 transition-opacity">
                      <AnimatedNumber value={stat.value} />
                    </span>
                  </div>
                  <div className="label-mono text-[9px] sm:text-[10px]">{stat.label}</div>
                </a>
              ) : (
                <div className="p-4 sm:p-6 rounded-xl border border-surface-200 bg-white/70 backdrop-blur-sm text-center">
                  <div className="mb-2">
                    <span className="stat-display-gold text-2xl sm:text-4xl md:text-5xl">
                      <AnimatedNumber value={stat.value} />
                    </span>
                  </div>
                  <div className="label-mono text-[9px] sm:text-[10px]">{stat.label}</div>
                </div>
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
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="flex flex-col items-center gap-3"
        >
          <span className="label-mono text-[9px]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-surface-300 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #fafaf8)'
        }}
      />
    </section>
  )
}
