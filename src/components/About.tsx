import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bot, Brain, Heart, Film, Factory, Home, Clock } from 'lucide-react'

// Calculate days until March 22, 2025
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
    description: 'Developing the Autosapien One—our flagship humanoid robot designed to live alongside humans.',
    color: 'plasma',
    status: 'developing',
  },
  {
    icon: Factory,
    title: 'Industrial Automation',
    description: 'Intelligent factory robots that learn, adapt, and optimize manufacturing processes autonomously.',
    color: 'cyber',
    status: 'developing',
  },
  {
    icon: Home,
    title: 'Home Robotics',
    description: 'Companion robots that assist with daily tasks, eldercare, and household management.',
    color: 'neural',
    status: 'developing',
  },
  {
    icon: Heart,
    title: 'Healthcare AI',
    description: 'xEHR.io—our AI-powered platform transforming how America delivers and manages healthcare.',
    color: 'rose',
    status: 'launching',
  },
  {
    icon: Film,
    title: 'AI Film Studio',
    description: 'Generative AI agents that write, edit, and produce short films entirely autonomously.',
    color: 'synth',
    status: 'developing',
  },
  {
    icon: Brain,
    title: 'Agentic AI',
    description: 'AI FTEs and custom agents that work 24/7—fully autonomous AI employees for healthcare, operations, and enterprise workflows.',
    color: 'neural',
    status: 'active',
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [daysUntilLaunch, setDaysUntilLaunch] = useState(getDaysUntilLaunch())

  useEffect(() => {
    const timer = setInterval(() => {
      setDaysUntilLaunch(getDaysUntilLaunch())
    }, 1000 * 60 * 60) // Update every hour
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neural-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-plasma-500/50 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Text content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full glass text-sm text-neural-400 mb-6"
            >
              Our Mission
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              Creating machines that{' '}
              <span className="gradient-text">understand</span> humanity
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg text-neutral-400 mb-6 leading-relaxed"
            >
              Autosapien was founded on a singular belief: the next great leap in human civilization
              won't come from AI alone—it will come from AI that can <em>act</em> in the physical world.
              We're building the robots, the intelligence, and the infrastructure to make that happen.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-lg text-neutral-400 mb-6 leading-relaxed"
            >
              Our vision spans from the home to the hospital, from the factory floor to the film set.
              We're developing humanoid robots that will become household companions, industrial systems
              that will reshape manufacturing, and AI that will revolutionize how healthcare is delivered
              across America and beyond.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="text-lg text-neutral-400 mb-10 leading-relaxed"
            >
              With xEHR.io already transforming healthcare for millions of patients, and our Autosapien One
              humanoid in active development, we're not waiting for the future—we're building it, one
              breakthrough at a time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {[
                  'from-neural-500 to-plasma-500',
                  'from-plasma-500 to-cyber-500',
                  'from-cyber-500 to-synth-500',
                  'from-synth-500 to-rose-500',
                ].map((gradient, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full border-2 border-void bg-gradient-to-br ${gradient}`}
                    style={{ zIndex: 4 - i }}
                  />
                ))}
              </div>
              <div>
                <div className="text-white font-medium">Multidisciplinary Team</div>
                <div className="text-sm text-neutral-500">Roboticists, AI Researchers, Healthcare Experts</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Vision statement */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 lg:p-12">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-neural-500/30 to-plasma-500/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-cyber-500/30 to-synth-500/30 rounded-full blur-2xl" />

              <div className="relative">
                <div className="text-6xl font-bold gradient-text mb-6">"</div>
                <p className="text-xl lg:text-2xl text-white font-medium leading-relaxed mb-8">
                  We believe the defining technology of this century won't be artificial intelligence
                  in isolation—it will be artificial intelligence given a body, purpose, and the
                  ability to heal, help, and create alongside humanity.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neural-500 to-plasma-500" />
                  <div>
                    <div className="text-white font-semibold">The Autosapien Vision</div>
                    <div className="text-sm text-neutral-500">Intelligence Embodied</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pillars Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Our Six Pillars</h3>
          <p className="text-neutral-400">The domains where we're building the future</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 + i * 0.1, duration: 0.6 }}
              className="group relative p-6 rounded-3xl glass hover-lift card-shine"
            >
              {/* Header with icon and status */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    pillar.color === 'neural'
                      ? 'bg-neural-500/20 text-neural-400'
                      : pillar.color === 'plasma'
                      ? 'bg-plasma-500/20 text-plasma-400'
                      : pillar.color === 'cyber'
                      ? 'bg-cyber-500/20 text-cyber-400'
                      : pillar.color === 'synth'
                      ? 'bg-synth-500/20 text-synth-400'
                      : 'bg-rose-500/20 text-rose-400'
                  }`}
                >
                  <pillar.icon className="w-6 h-6" />
                </div>
                {/* Status Badge */}
                {pillar.status === 'developing' && (
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-xs text-amber-400 font-medium animate-pulse">
                    Developing...
                  </span>
                )}
                {pillar.status === 'launching' && (
                  <span className="px-2.5 py-1 rounded-full bg-rose-500/20 text-xs text-rose-400 font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {daysUntilLaunch} days
                  </span>
                )}
                {pillar.status === 'active' && (
                  <span className="px-2.5 py-1 rounded-full bg-green-500/20 text-xs text-green-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Active
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{pillar.title}</h3>
              <p className="text-sm text-neutral-400">{pillar.description}</p>

              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl ${
                  pillar.color === 'neural'
                    ? 'bg-neural-500/20'
                    : pillar.color === 'plasma'
                    ? 'bg-plasma-500/20'
                    : pillar.color === 'cyber'
                    ? 'bg-cyber-500/20'
                    : pillar.color === 'synth'
                    ? 'bg-synth-500/20'
                    : 'bg-rose-500/20'
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
