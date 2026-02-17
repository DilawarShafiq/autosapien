import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bot, Brain, Heart, Film, Factory, Home, Clock, ArrowUpRight } from 'lucide-react'

function getDaysUntilLaunch() {
  const launchDate = new Date('2025-03-22T00:00:00')
  const now = new Date()
  const diff = launchDate.getTime() - now.getTime()
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
  return days > 0 ? days : 0
}

const pillars = [
  {
    icon: Bot,
    title: 'Humanoid Robotics',
    description: 'Developing Autosapien One—our flagship humanoid designed to live alongside humans.',
    status: 'developing',
    code: 'HMD-01',
  },
  {
    icon: Factory,
    title: 'Industrial Automation',
    description: 'Intelligent factory robots that learn, adapt, and optimize manufacturing autonomously.',
    status: 'developing',
    code: 'IND-02',
  },
  {
    icon: Home,
    title: 'Home Robotics',
    description: 'Companion robots for daily tasks, eldercare, and household management.',
    status: 'developing',
    code: 'HME-03',
  },
  {
    icon: Heart,
    title: 'Healthcare AI',
    description: 'xEHR.io—AI-powered platform transforming how America delivers healthcare.',
    status: 'launching',
    code: 'HLT-04',
  },
  {
    icon: Film,
    title: 'AI Film Studio',
    description: 'Generative AI agents that write, edit, and produce films autonomously.',
    status: 'developing',
    code: 'FLM-05',
  },
  {
    icon: Brain,
    title: 'Agentic AI',
    description: 'AI FTEs and custom agents—fully autonomous AI employees working 24/7.',
    status: 'active',
    code: 'AGT-06',
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [daysUntilLaunch, setDaysUntilLaunch] = useState(getDaysUntilLaunch())

  useEffect(() => {
    const timer = setInterval(() => {
      setDaysUntilLaunch(getDaysUntilLaunch())
    }, 1000 * 60 * 60)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="about" className="relative py-16 sm:py-32 overflow-hidden bg-carbon-900">
      {/* Background elements */}
      <div className="absolute inset-0 bg-technical-grid opacity-30" />

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-carbon-600 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start mb-16 sm:mb-24">
          {/* Left - Main content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="badge badge-ember mb-8"
            >
              <span className="label-technical">About Us</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="font-display font-bold text-display-lg mb-8"
            >
              Creating machines that{' '}
              <span className="text-gradient">understand</span> humanity
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6 text-carbon-300 font-body text-lg leading-relaxed"
            >
              <p>
                Autosapien was founded on a singular belief: the next great leap in human
                civilization won't come from AI alone—it will come from AI that can{' '}
                <em className="text-white not-italic">act</em> in the physical world.
              </p>
              <p>
                We're building the robots, the intelligence, and the infrastructure to make
                that happen. Our vision spans from the home to the hospital, from the factory
                floor to the film set.
              </p>
            </motion.div>

            {/* Team indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-none bg-carbon-700 border-2 border-carbon-900 flex items-center justify-center"
                    style={{ transform: `rotate(${i * 5}deg)` }}
                  >
                    <span className="text-xs font-mono text-carbon-400">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="text-white font-display font-semibold">Multidisciplinary Team</div>
                <div className="label-technical">Roboticists • AI Researchers • Healthcare Experts</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Vision quote box */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="card-industrial p-5 sm:p-8 lg:p-12 corner-accent">
              {/* Technical header */}
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <span className="label-technical">Vision Statement</span>
                <span className="label-technical hidden sm:inline">REF: VS-001</span>
              </div>

              <blockquote className="relative">
                <div className="text-4xl sm:text-6xl font-display font-bold text-ember-500/20 absolute -top-4 -left-2">"</div>
                <p className="text-lg sm:text-xl lg:text-2xl text-white font-display leading-relaxed pl-6 sm:pl-8">
                  We believe the defining technology of this century won't be artificial
                  intelligence in isolation—it will be artificial intelligence given a body,
                  purpose, and the ability to heal, help, and create alongside humanity.
                </p>
              </blockquote>

              {/* Attribution */}
              <div className="mt-8 pt-8 border-t border-carbon-700 flex items-center gap-4">
                <div className="w-12 h-12 bg-ember-500 flex items-center justify-center">
                  <span className="font-mono text-carbon-900 font-bold">AS</span>
                </div>
                <div>
                  <div className="text-white font-display font-semibold">The Autosapien Vision</div>
                  <div className="label-technical">Intelligence Embodied</div>
                </div>
              </div>
            </div>

            {/* Decorative geometric shape */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-24 h-24 border border-ember-500/20 -z-10" style={{ transform: 'rotate(45deg)' }} />
          </motion.div>
        </div>

        {/* Pillars section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="font-display font-bold text-2xl text-white mb-4">Our Six Pillars</h3>
          <p className="text-carbon-400 font-body">The domains where we're engineering the future</p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.6 }}
              className="group card-industrial p-6 hover-lift"
            >
              {/* Header row */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 border border-carbon-600 flex items-center justify-center group-hover:border-ember-500/50 transition-colors">
                  <pillar.icon className="w-6 h-6 text-ember-400" />
                </div>
                <div className="flex items-center gap-2">
                  {/* Status indicator */}
                  {pillar.status === 'developing' && (
                    <span className="badge text-xs py-1 px-2">
                      <span className="status-dot developing" />
                      <span className="text-ember-400">Dev</span>
                    </span>
                  )}
                  {pillar.status === 'launching' && (
                    <span className="badge text-xs py-1 px-2">
                      <Clock className="w-3 h-3 text-volt-400" />
                      <span className="text-volt-400">{daysUntilLaunch}d</span>
                    </span>
                  )}
                  {pillar.status === 'active' && (
                    <span className="badge badge-active text-xs py-1 px-2">
                      <span className="status-dot active" />
                      <span>Live</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="mb-4">
                <span className="label-technical text-ember-500/60">{pillar.code}</span>
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-ember-400 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm text-carbon-400 font-body leading-relaxed">
                {pillar.description}
              </p>

              {/* Bottom accent */}
              <div className="mt-6 pt-4 border-t border-carbon-700 flex items-center justify-between">
                <span className="label-technical">Learn More</span>
                <ArrowUpRight className="w-4 h-4 text-carbon-500 group-hover:text-ember-400 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-carbon-600 to-transparent" />
    </section>
  )
}
