import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Bot,
  Heart,
  Film,
  Factory,
  Home,
  Brain,
  ChevronRight,
  Clock
} from 'lucide-react'

// Calculate days until March 22, 2025
function getDaysUntilLaunch() {
  const launchDate = new Date('2025-03-22T00:00:00')
  const now = new Date()
  const diff = launchDate.getTime() - now.getTime()
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
  return days > 0 ? days : 0
}

const capabilities = [
  {
    id: 'humanoid',
    icon: Bot,
    title: 'Humanoid Robotics',
    subtitle: 'Autosapien One',
    status: 'developing',
    description: 'Our flagship humanoid robot represents the pinnacle of embodied AI. Standing at human height with 40+ degrees of freedom, Autosapien One is designed to navigate human environments, manipulate objects with dexterity, and interact naturally through voice, gesture, and expression. This is not a lab prototype—it\'s the beginning of a new species of helpful machines.',
    features: [
      'Bipedal locomotion on any terrain',
      'Human-like hand dexterity',
      'Natural language conversation',
      'Emotional expression & recognition',
    ],
    gradient: 'from-plasma-500 to-neural-500',
    bgGlow: 'bg-plasma-500/20',
  },
  {
    id: 'healthcare',
    icon: Heart,
    title: 'Healthcare AI',
    subtitle: 'xEHR.io Platform',
    status: 'launching',
    description: 'xEHR.io is our enterprise healthcare platform combining EHR, practice management, and revenue cycle automation. Powered by AI agents that work 24/7, we\'re eliminating the administrative burden crushing American healthcare. From clinical documentation to claims processing, our system achieves 98% clean claim rates while providers focus on what matters: patients.',
    features: [
      'AI clinical documentation',
      'Autonomous RCM agents',
      'FHIR R4 interoperability',
      'HIPAA & SOC2 compliant',
    ],
    gradient: 'from-rose-500 to-pink-500',
    bgGlow: 'bg-rose-500/20',
  },
  {
    id: 'industrial',
    icon: Factory,
    title: 'Industrial Robotics',
    subtitle: 'Factory Intelligence',
    status: 'developing',
    description: 'Our industrial robots don\'t just execute—they learn, adapt, and optimize. Using reinforcement learning and computer vision, these systems continuously improve manufacturing processes, predict maintenance needs, and collaborate safely with human workers. We\'re building the autonomous factories of tomorrow.',
    features: [
      'Self-optimizing workflows',
      'Predictive maintenance',
      'Human-safe collaboration',
      'Real-time quality control',
    ],
    gradient: 'from-cyber-500 to-blue-500',
    bgGlow: 'bg-cyber-500/20',
  },
  {
    id: 'home',
    icon: Home,
    title: 'Home Robotics',
    subtitle: 'Companion Systems',
    status: 'developing',
    description: 'Home robots that actually help. Our domestic systems handle household tasks from cleaning to cooking assistance, provide companionship for the elderly, monitor home security, and serve as the physical interface for your smart home. These aren\'t novelties—they\'re the beginning of robotic household members.',
    features: [
      'Household task automation',
      'Eldercare assistance',
      'Smart home integration',
      'Voice-first interaction',
    ],
    gradient: 'from-neural-500 to-indigo-500',
    bgGlow: 'bg-neural-500/20',
  },
  {
    id: 'film',
    icon: Film,
    title: 'AI Film Studio',
    subtitle: 'Generative Cinema',
    status: 'developing',
    description: 'The future of filmmaking is autonomous. Our AI film studio combines multiple specialized agents—writers, directors, editors, composers, VFX artists—orchestrated to produce complete short films. Using diffusion models, language models, and audio generation, we\'re creating a new medium where imagination is the only limit.',
    features: [
      'Multi-agent orchestration',
      'Video diffusion generation',
      'AI audio & music synthesis',
      'Automated editing & post',
    ],
    gradient: 'from-synth-500 to-amber-500',
    bgGlow: 'bg-synth-500/20',
  },
  {
    id: 'agentic',
    icon: Brain,
    title: 'Agentic AI',
    subtitle: 'AI Employees & Custom Agents',
    status: 'active',
    description: 'We build and deploy AI FTEs (Full-Time Equivalents)—fully autonomous AI employees that work 24/7 on your most critical tasks. From custom-developed agents tailored to your workflows to production-ready AI workers for healthcare, finance, and operations. Our AI employees don\'t take breaks, don\'t make excuses, and continuously improve. Replace headcount with intelligence.',
    features: [
      'AI FTEs (Full-Time Equivalents)',
      'Custom agent development',
      '24/7 autonomous operation',
      'Enterprise-grade compliance',
    ],
    gradient: 'from-neural-400 to-plasma-400',
    bgGlow: 'bg-neural-400/20',
  },
]

export function Capabilities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCapability, setActiveCapability] = useState(capabilities[0])
  const [daysUntilLaunch, setDaysUntilLaunch] = useState(getDaysUntilLaunch())

  useEffect(() => {
    const timer = setInterval(() => {
      setDaysUntilLaunch(getDaysUntilLaunch())
    }, 1000 * 60 * 60) // Update every hour
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="capabilities" className="relative py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 neural-grid opacity-20" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-neural-600/20 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-plasma-600/20 rounded-full blur-3xl -translate-y-1/2" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-plasma-400 mb-6">
            What We Build
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Six frontiers of{' '}
            <span className="gradient-text-alt">innovation</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
            From humanoid companions to autonomous factories, from healing healthcare to
            generating cinema—we're building across every domain where AI can transform
            the physical world.
          </p>
        </motion.div>

        {/* Interactive capability showcase */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
          {/* Capability selector */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            {capabilities.map((cap) => (
              <button
                key={cap.id}
                onClick={() => setActiveCapability(cap)}
                className={`w-full p-4 rounded-2xl text-left transition-all duration-300 group ${
                  activeCapability.id === cap.id
                    ? 'glass bg-white/10'
                    : 'hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                      activeCapability.id === cap.id
                        ? `bg-gradient-to-br ${cap.gradient}`
                        : 'bg-white/5 group-hover:bg-white/10'
                    }`}
                  >
                    <cap.icon
                      className={`w-6 h-6 ${
                        activeCapability.id === cap.id ? 'text-white' : 'text-neutral-400'
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3
                        className={`font-semibold transition-colors ${
                          activeCapability.id === cap.id ? 'text-white' : 'text-neutral-300'
                        }`}
                      >
                        {cap.title}
                      </h3>
                      {/* Status Badge */}
                      {cap.status === 'developing' && (
                        <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-[10px] text-amber-400 font-medium animate-pulse">
                          Developing...
                        </span>
                      )}
                      {cap.status === 'launching' && (
                        <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-[10px] text-rose-400 font-medium flex items-center gap-1">
                          <Clock className="w-2.5 h-2.5" />
                          {daysUntilLaunch}d
                        </span>
                      )}
                      {cap.status === 'active' && (
                        <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-[10px] text-green-400 font-medium flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-neutral-500">{cap.subtitle}</p>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-neutral-500 transition-transform flex-shrink-0 ${
                      activeCapability.id === cap.id ? 'rotate-90' : ''
                    }`}
                  />
                </div>
              </button>
            ))}
          </motion.div>

          {/* Capability detail */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCapability.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-3xl p-8 lg:p-12 h-full"
              >
                {/* Glow effect */}
                <div
                  className={`absolute -top-20 -right-20 w-60 h-60 rounded-full ${activeCapability.bgGlow} blur-3xl`}
                />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeCapability.gradient} flex items-center justify-center`}
                    >
                      <activeCapability.icon className="w-8 h-8 text-white" />
                    </div>
                    {/* Status Badge */}
                    {activeCapability.status === 'developing' && (
                      <span className="px-3 py-1 rounded-full bg-amber-500/20 text-xs text-amber-400 font-medium animate-pulse">
                        Developing...
                      </span>
                    )}
                    {activeCapability.status === 'launching' && (
                      <span className="px-3 py-1 rounded-full bg-rose-500/20 text-xs text-rose-400 font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {daysUntilLaunch} days
                      </span>
                    )}
                    {activeCapability.status === 'active' && (
                      <span className="px-3 py-1 rounded-full bg-green-500/20 text-xs text-green-400 font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Active
                      </span>
                    )}
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-2">
                    {activeCapability.title}
                  </h3>
                  <p className={`bg-gradient-to-r ${activeCapability.gradient} bg-clip-text text-transparent font-medium mb-6`}>
                    {activeCapability.subtitle}
                  </p>
                  <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                    {activeCapability.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {activeCapability.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/5"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeCapability.gradient}`}
                        />
                        <span className="text-sm text-neutral-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <button
                    className={`mt-8 px-6 py-3 rounded-xl bg-gradient-to-r ${activeCapability.gradient} text-white font-medium flex items-center gap-2 hover:opacity-90 transition-opacity`}
                  >
                    Explore {activeCapability.title}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
