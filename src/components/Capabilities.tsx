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
    code: 'CAP-001',
    description: 'Our flagship humanoid robot represents the pinnacle of embodied AI. Standing at human height with 40+ degrees of freedom, Autosapien One is designed to navigate human environments, manipulate objects with dexterity, and interact naturally through voice, gesture, and expression.',
    features: [
      'Bipedal locomotion on any terrain',
      'Human-like hand dexterity',
      'Natural language conversation',
      'Emotional expression & recognition',
    ],
  },
  {
    id: 'healthcare',
    icon: Heart,
    title: 'Healthcare AI',
    subtitle: 'xEHR.io Platform',
    status: 'launching',
    code: 'CAP-002',
    description: 'xEHR.io is our enterprise healthcare platform combining EHR, practice management, and revenue cycle automation. Powered by AI agents that work 24/7, eliminating the administrative burden crushing American healthcare.',
    features: [
      'AI clinical documentation',
      'Autonomous RCM agents',
      'FHIR R4 interoperability',
      'HIPAA & SOC2 compliant',
    ],
  },
  {
    id: 'industrial',
    icon: Factory,
    title: 'Industrial Robotics',
    subtitle: 'Factory Intelligence',
    status: 'developing',
    code: 'CAP-003',
    description: 'Our industrial robots don\'t just execute—they learn, adapt, and optimize. Using reinforcement learning and computer vision, these systems continuously improve manufacturing processes and collaborate safely with human workers.',
    features: [
      'Self-optimizing workflows',
      'Predictive maintenance',
      'Human-safe collaboration',
      'Real-time quality control',
    ],
  },
  {
    id: 'home',
    icon: Home,
    title: 'Home Robotics',
    subtitle: 'Companion Systems',
    status: 'developing',
    code: 'CAP-004',
    description: 'Home robots that actually help. Our domestic systems handle household tasks, provide companionship for the elderly, monitor home security, and serve as the physical interface for your smart home.',
    features: [
      'Household task automation',
      'Eldercare assistance',
      'Smart home integration',
      'Voice-first interaction',
    ],
  },
  {
    id: 'film',
    icon: Film,
    title: 'AI Film Studio',
    subtitle: 'Generative Cinema',
    status: 'developing',
    code: 'CAP-005',
    description: 'The future of filmmaking is autonomous. Our AI film studio combines multiple specialized agents—writers, directors, editors, composers—orchestrated to produce complete short films from prompts.',
    features: [
      'Multi-agent orchestration',
      'Video diffusion generation',
      'AI audio & music synthesis',
      'Automated editing & post',
    ],
  },
  {
    id: 'agentic',
    icon: Brain,
    title: 'Agentic AI',
    subtitle: 'AI Employees & Custom Agents',
    status: 'active',
    code: 'CAP-006',
    description: 'We build and deploy AI FTEs—fully autonomous AI employees that work 24/7 on your most critical tasks. From custom agents tailored to your workflows to production-ready AI workers.',
    features: [
      'AI FTEs (Full-Time Equivalents)',
      'Custom agent development',
      '24/7 autonomous operation',
      'Enterprise-grade compliance',
    ],
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
    }, 1000 * 60 * 60)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="capabilities" className="relative py-32 overflow-hidden bg-carbon-900">
      {/* Background */}
      <div className="absolute inset-0 bg-technical-grid opacity-20" />

      {/* Geometric accents */}
      <div className="absolute top-1/2 left-0 w-64 h-64 border border-ember-500/10 -translate-y-1/2 -translate-x-1/2" style={{ transform: 'rotate(45deg) translate(-50%, -50%)' }} />
      <div className="absolute top-1/2 right-0 w-64 h-64 border border-volt-500/10 -translate-y-1/2 translate-x-1/2" style={{ transform: 'rotate(45deg) translate(50%, -50%)' }} />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="badge badge-ember mb-6">
            <span className="label-technical">Capabilities</span>
          </span>
          <h2 className="font-display font-bold text-display-lg mb-6">
            Six frontiers of{' '}
            <span className="text-gradient-cool">innovation</span>
          </h2>
          <p className="text-lg text-carbon-400 font-body max-w-3xl mx-auto">
            From humanoid companions to autonomous factories, from healing healthcare to
            generating cinema—we're building across every domain where AI transforms
            the physical world.
          </p>
        </motion.div>

        {/* Interactive capability showcase */}
        <div className="grid lg:grid-cols-[350px_1fr] gap-8">
          {/* Capability selector */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2"
          >
            {capabilities.map((cap) => (
              <button
                key={cap.id}
                onClick={() => setActiveCapability(cap)}
                className={`w-full p-4 text-left transition-all duration-300 group border ${
                  activeCapability.id === cap.id
                    ? 'bg-carbon-800 border-ember-500/30'
                    : 'border-carbon-700 hover:border-carbon-600 hover:bg-carbon-850'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 border flex items-center justify-center transition-all ${
                      activeCapability.id === cap.id
                        ? 'border-ember-500 bg-ember-500/10'
                        : 'border-carbon-600 group-hover:border-carbon-500'
                    }`}
                  >
                    <cap.icon
                      className={`w-6 h-6 ${
                        activeCapability.id === cap.id ? 'text-ember-400' : 'text-carbon-400'
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3
                        className={`font-display font-semibold transition-colors ${
                          activeCapability.id === cap.id ? 'text-white' : 'text-carbon-300'
                        }`}
                      >
                        {cap.title}
                      </h3>
                      {cap.status === 'developing' && (
                        <span className="status-dot developing" />
                      )}
                      {cap.status === 'launching' && (
                        <span className="status-dot launching" />
                      )}
                      {cap.status === 'active' && (
                        <span className="status-dot active" />
                      )}
                    </div>
                    <p className="text-sm text-carbon-500 font-body">{cap.subtitle}</p>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-carbon-500 transition-transform flex-shrink-0 ${
                      activeCapability.id === cap.id ? 'rotate-90 text-ember-400' : ''
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
                className="card-industrial p-8 lg:p-12 h-full corner-accent"
              >
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 border-2 border-ember-500 flex items-center justify-center">
                        <activeCapability.icon className="w-8 h-8 text-ember-400" />
                      </div>
                      <div>
                        <span className="label-technical text-ember-500">{activeCapability.code}</span>
                        <h3 className="font-display font-bold text-2xl text-white">
                          {activeCapability.title}
                        </h3>
                      </div>
                    </div>
                    {/* Status Badge */}
                    {activeCapability.status === 'developing' && (
                      <span className="badge">
                        <span className="status-dot developing" />
                        <span className="text-ember-400">Development</span>
                      </span>
                    )}
                    {activeCapability.status === 'launching' && (
                      <span className="badge badge-volt">
                        <Clock className="w-3 h-3" />
                        <span>{daysUntilLaunch} days</span>
                      </span>
                    )}
                    {activeCapability.status === 'active' && (
                      <span className="badge badge-active">
                        <span className="status-dot active" />
                        <span>Live</span>
                      </span>
                    )}
                  </div>

                  {/* Subtitle */}
                  <p className="text-ember-400 font-display font-semibold mb-6">
                    {activeCapability.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-lg text-carbon-300 font-body mb-10 leading-relaxed">
                    {activeCapability.description}
                  </p>

                  {/* Features grid */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-10">
                    {activeCapability.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 p-4 bg-carbon-800 border border-carbon-700"
                      >
                        <div className="w-1.5 h-1.5 bg-ember-400" />
                        <span className="text-sm text-carbon-200 font-body">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="btn-primary group">
                    <span className="flex items-center gap-3">
                      Explore {activeCapability.title}
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-carbon-600 to-transparent" />
    </section>
  )
}
