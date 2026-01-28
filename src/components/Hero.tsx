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
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-carbon-900"
    >
      {/* Technical grid background */}
      <div className="absolute inset-0 bg-technical-grid opacity-50" />

      {/* Radial gradient fade */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, transparent 0%, #0a0a0a 100%)'
        }}
      />

      {/* Geometric accent shapes */}
      <motion.div
        className="absolute top-1/4 left-[10%] w-64 h-64 border border-ember-500/10"
        style={{ rotate: 45 }}
        animate={{
          rotate: [45, 50, 45],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-[10%] w-48 h-48 border border-volt-500/10"
        style={{ rotate: 45 }}
        animate={{
          rotate: [45, 40, 45],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Scan line effect */}
      <div className="scan-line" />

      {/* Main content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        {/* Main heading - massive typography */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="font-display font-bold text-display-xl mb-6">
            <span className="block text-white">ENGINEERING</span>
            <span className="block text-gradient">INTELLIGENT</span>
            <span className="block text-white">MACHINES</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-carbon-300 max-w-3xl mx-auto text-center mb-16 font-body leading-relaxed"
        >
          Autosapien is engineering the convergence of artificial intelligence and physical robotics.
          From humanoid companions to autonomous factories—we're not imagining the future,
          we're machining it into existence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
        >
          <button className="btn-primary group">
            <span className="flex items-center gap-3">
              Meet Our Machines
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button className="btn-secondary group">
            <span className="flex items-center gap-3">
              Explore xEHR.io
              <div className="w-2 h-2 rounded-full bg-green-400 group-hover:animate-pulse" />
            </span>
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16"
        >
          {[
            { value: '04', label: 'Robot Platforms', suffix: '' },
            { value: '2M', label: 'Patient Records', suffix: '+' },
            { value: '01', label: 'Humanoid in Dev', suffix: 'st' },
            { value: '∞', label: 'Films to Create', suffix: '' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="text-center"
            >
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="stat-display text-5xl md:text-6xl">{stat.value}</span>
                {stat.suffix && (
                  <span className="text-ember-400 text-lg font-mono">{stat.suffix}</span>
                )}
              </div>
              <div className="label-technical">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-4"
        >
          <span className="label-technical">Scroll to Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-ember-500 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Side technical labels */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2">
        <div className="label-technical -rotate-90 origin-left whitespace-nowrap">
          AI & ROBOTICS — EST. 2024
        </div>
      </div>
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
        <div className="label-technical rotate-90 origin-right whitespace-nowrap">
          ENGINEERING INTELLIGENCE
        </div>
      </div>
    </section>
  )
}
