import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Bot,
  Heart,
  Film,
  Factory,
  Home,
  Brain,
  ChevronRight,
} from 'lucide-react'

const capabilities = [
  {
    id: 'humanoid',
    icon: Bot,
    title: 'Humanoid Robotics',
    subtitle: 'Autosapien G1',
    status: 'developing',
    code: 'CAP-001',
    description: 'Our flagship humanoid robot represents the pinnacle of embodied AI. Standing at human height with 40+ degrees of freedom, Autosapien G1 is designed to navigate human environments, manipulate objects with dexterity, and interact naturally through voice, gesture, and expression. This is not a lab prototype—it\'s the beginning of a new species of helpful machines.',
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
    status: 'active',
    code: 'CAP-002',
    description: 'xEHR.io is our enterprise healthcare platform combining EHR, practice management, and revenue cycle automation. Powered by AI agents that work 24/7, we\'re eliminating the administrative burden crushing USA healthcare. From clinical documentation to claims processing, our system achieves 98% clean claim rates while providers focus on what matters: patients.',
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
    description: 'Our industrial robots don\'t just execute—they learn, adapt, and optimize. Using reinforcement learning and computer vision, these systems continuously improve manufacturing processes, predict maintenance needs, and collaborate safely with human workers. We\'re building the autonomous factories of tomorrow.',
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
    description: 'Home robots that actually help. Our domestic systems handle household tasks from cleaning to cooking assistance, provide companionship for the elderly, monitor home security, and serve as the physical interface for your smart home. These aren\'t novelties—they\'re the beginning of robotic household members.',
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
    description: 'The future of filmmaking is autonomous. Our AI film studio combines multiple specialized agents—writers, directors, editors, composers, VFX artists—orchestrated to produce complete short films. Using diffusion models, language models, and audio generation, we\'re creating a new medium where imagination is the only limit.',
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
    description: 'We build and deploy AI FTEs (Full-Time Equivalents)—fully autonomous AI employees that work 24/7 on your most critical tasks. Our flagship RCM Employee (rcmemployee.com) automates revenue cycle management for USA healthcare providers. We also develop custom agents for workflow automation, RCM automation, and administrative task management. Our AI employees don\'t take breaks, don\'t make excuses, and continuously improve.',
    features: [
      'RCM Employee (rcmemployee.com)',
      'Workflow Automation',
      'RCM Automation for US Healthcare',
      'Custom Agent Development',
    ],
  },
]

export function Capabilities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCapability, setActiveCapability] = useState(capabilities[0])

  return (
    <section id="capabilities" className="relative py-16 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="badge-hud mb-6">
            <span>SYS.CAPABILITIES</span>
          </span>
          <h2 className="font-display font-bold text-display-lg mb-6">
            Six frontiers of{' '}
            <span className="text-signal-400">innovation</span>
          </h2>
          <p className="text-base sm:text-lg text-muted font-body max-w-3xl mx-auto">
            From humanoid companions to autonomous factories, from healing healthcare to
            generating cinema—we're building across every domain where AI can transform
            the physical world.
          </p>
        </motion.div>

        {/* Interactive capability showcase */}
        <div className="grid lg:grid-cols-[350px_1fr] gap-6">
          {/* Capability selector */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0"
          >
            {capabilities.map((cap) => (
              <button
                key={cap.id}
                onClick={() => setActiveCapability(cap)}
                className={`flex-none lg:w-full min-w-[200px] lg:min-w-0 p-4 text-left transition-all duration-300 group border ${
                  activeCapability.id === cap.id
                    ? 'bg-obsidian-800/60 border-signal-400/15'
                    : 'border-obsidian-700/30 hover:border-obsidian-600 hover:bg-obsidian-850/40'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-11 h-11 border flex items-center justify-center transition-all ${
                      activeCapability.id === cap.id
                        ? 'border-signal-400/40 bg-signal-400/5'
                        : 'border-obsidian-600 group-hover:border-obsidian-500'
                    }`}
                  >
                    <cap.icon
                      className={`w-5 h-5 ${
                        activeCapability.id === cap.id ? 'text-signal-400' : 'text-obsidian-300'
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3
                        className={`font-display font-semibold text-sm transition-colors ${
                          activeCapability.id === cap.id ? 'text-white' : 'text-obsidian-200'
                        }`}
                      >
                        {cap.title}
                      </h3>
                      {cap.status === 'developing' && <span className="status-dot developing" />}
                      {cap.status === 'active' && <span className="status-dot active" />}
                    </div>
                    <p className="text-xs text-obsidian-400 font-body">{cap.subtitle}</p>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 text-obsidian-500 transition-transform flex-shrink-0 ${
                      activeCapability.id === cap.id ? 'rotate-90 text-signal-400' : ''
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
                className="card-hud p-6 sm:p-8 lg:p-12 h-full hud-corners"
              >
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 border border-signal-400/30 flex items-center justify-center">
                        <activeCapability.icon className="w-7 h-7 text-signal-400" />
                      </div>
                      <div>
                        <span className="label-mono text-signal-400/50">{activeCapability.code}</span>
                        <h3 className="font-display font-bold text-2xl text-white">
                          {activeCapability.title}
                        </h3>
                      </div>
                    </div>
                    {activeCapability.status === 'developing' && (
                      <span className="badge-hud">
                        <span className="status-dot developing" />
                        <span>Development</span>
                      </span>
                    )}
                    {activeCapability.status === 'active' && (
                      <span className="badge-hud badge-live">
                        <span className="status-dot active" />
                        <span>Live</span>
                      </span>
                    )}
                  </div>

                  <p className="text-signal-400 font-display font-semibold mb-6">
                    {activeCapability.subtitle}
                  </p>

                  <p className="text-base sm:text-lg text-dim font-body mb-10 leading-relaxed">
                    {activeCapability.description}
                  </p>

                  {/* Features */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-10">
                    {activeCapability.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-center gap-3 p-4 bg-obsidian-800/40 border border-obsidian-700/30"
                      >
                        <div className="w-1 h-1 bg-signal-400" />
                        <span className="text-sm text-obsidian-100 font-body">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

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

      <div className="divider-glow absolute bottom-0 left-0 right-0" />
    </section>
  )
}
