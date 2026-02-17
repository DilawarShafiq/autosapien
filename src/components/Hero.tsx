import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Sparkles, Brain, Bot, Cpu, Film, Heart } from 'lucide-react'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Morphing blob */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-neural-600/30 via-plasma-600/20 to-transparent blur-3xl animate-morph"
          style={{ y }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cyber-600/30 via-neural-600/20 to-transparent blur-3xl animate-morph"
          style={{ y: useTransform(y, (v) => -v * 0.5) }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 neural-grid opacity-30" />

        {/* Floating elements representing core pillars */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-20 h-20 glass rounded-2xl hidden sm:flex items-center justify-center"
        >
          <Bot className="w-10 h-10 text-plasma-400" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/3 left-1/4 w-16 h-16 glass rounded-2xl hidden sm:flex items-center justify-center"
        >
          <Brain className="w-8 h-8 text-neural-400" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/3 left-[15%] w-14 h-14 glass rounded-xl hidden sm:flex items-center justify-center"
        >
          <Heart className="w-7 h-7 text-rose-400" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-1/4 right-[15%] w-14 h-14 glass rounded-xl hidden sm:flex items-center justify-center"
        >
          <Film className="w-7 h-7 text-synth-400" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute top-[40%] right-[10%] w-12 h-12 glass rounded-xl hidden sm:flex items-center justify-center"
        >
          <Cpu className="w-6 h-6 text-cyber-400" />
        </motion.div>
      </div>

      {/* Main content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles className="w-4 h-4 text-neural-400" />
          <span className="text-sm text-neutral-300">Building the Machines That Will Build Tomorrow</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="block text-white text-shadow-glow">Where</span>
          <span className="block gradient-text">Intelligence</span>
          <span className="block text-white text-shadow-glow">Meets Form</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto mb-12 text-balance"
        >
          Autosapien is pioneering the convergence of artificial intelligence and physical robotics.
          From humanoid companions to healthcare automation, industrial machines to AI-generated cinema—we're
          not just imagining the future, we're engineering it into existence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-neural-600 to-plasma-600 text-white font-medium text-lg overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Meet Our Robots
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-plasma-600 to-cyber-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <button className="group px-8 py-4 rounded-2xl glass text-white font-medium text-lg hover:bg-white/10 transition-colors">
            <span className="flex items-center gap-2">
              Explore xEHR.io
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Heart className="w-4 h-4" />
              </div>
            </span>
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8"
        >
          {[
            { value: '4', label: 'Robot Platforms' },
            { value: '2M+', label: 'Patient Records on xEHR' },
            { value: '1st', label: 'Humanoid in Development' },
            { value: '∞', label: 'Films to Generate' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-neutral-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-neutral-500"
        >
          <span className="text-xs uppercase tracking-widest">Discover</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
