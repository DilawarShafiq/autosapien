import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Bot, Heart, Film, Factory, Home, Brain, ChevronRight } from 'lucide-react'

const capabilities = [
  {
    id: 'humanoid', icon: Bot, title: 'Humanoid Robotics', subtitle: 'Autosapien G1', status: 'developing', code: 'CAP-001',
    description: 'Our flagship humanoid robot represents the pinnacle of embodied AI. Standing at human height with 40+ degrees of freedom, Autosapien G1 is designed to navigate human environments, manipulate objects with dexterity, and interact naturally through voice, gesture, and expression.',
    features: ['Bipedal locomotion on any terrain', 'Human-like hand dexterity', 'Natural language conversation', 'Emotional expression & recognition'],
  },
  {
    id: 'healthcare', icon: Heart, title: 'Healthcare AI', subtitle: 'xEHR.io Platform', status: 'active', code: 'CAP-002',
    description: 'xEHR.io is our enterprise healthcare platform combining EHR, practice management, and revenue cycle automation. Powered by AI agents that work 24/7, we\'re eliminating the administrative burden crushing USA healthcare.',
    features: ['AI clinical documentation', 'Autonomous RCM agents', 'FHIR R4 interoperability', 'HIPAA & SOC2 compliant'],
  },
  {
    id: 'industrial', icon: Factory, title: 'Industrial Robotics', subtitle: 'Factory Intelligence', status: 'developing', code: 'CAP-003',
    description: 'Our industrial robots don\'t just execute—they learn, adapt, and optimize. Using reinforcement learning and computer vision, these systems continuously improve manufacturing processes.',
    features: ['Self-optimizing workflows', 'Predictive maintenance', 'Human-safe collaboration', 'Real-time quality control'],
  },
  {
    id: 'home', icon: Home, title: 'Home Robotics', subtitle: 'Companion Systems', status: 'developing', code: 'CAP-004',
    description: 'Home robots that actually help. Our domestic systems handle household tasks, provide companionship for the elderly, monitor home security, and serve as the physical interface for your smart home.',
    features: ['Household task automation', 'Eldercare assistance', 'Smart home integration', 'Voice-first interaction'],
  },
  {
    id: 'film', icon: Film, title: 'AI Film Studio', subtitle: 'Generative Cinema', status: 'developing', code: 'CAP-005',
    description: 'The future of filmmaking is autonomous. Our AI film studio combines multiple specialized agents—writers, directors, editors, composers—orchestrated to produce complete short films.',
    features: ['Multi-agent orchestration', 'Video diffusion generation', 'AI audio & music synthesis', 'Automated editing & post'],
  },
  {
    id: 'agentic', icon: Brain, title: 'Agentic AI', subtitle: 'AI Employees & Custom Agents', status: 'active', code: 'CAP-006',
    description: 'We build and deploy AI FTEs—fully autonomous AI employees that work 24/7. Our flagship RCM Employee automates revenue cycle management for USA healthcare providers.',
    features: ['RCM Employee (rcmemployee.com)', 'Workflow Automation', 'RCM Automation for US Healthcare', 'Custom Agent Development'],
  },
]

export function Capabilities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCapability, setActiveCapability] = useState(capabilities[0])

  return (
    <section id="capabilities" className="relative py-24 sm:py-40 section-accent-top" style={{ background: '#ffffff', overflowX: 'clip' }}>
      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Centered label with flanking gradient lines */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-sky-300/50" />
            <span className="label-mono text-sky-600">Capabilities</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-sky-300/50" />
          </div>
          <h2 className="font-display font-bold text-display-lg mb-5">
            Six frontiers of innovation
          </h2>
          <p className="text-base sm:text-lg text-ink-400 font-body max-w-3xl mx-auto">
            From humanoid companions to autonomous factories—we're building across every domain
            where AI can transform the physical world.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-6">
          {/* Selector */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0"
          >
            {capabilities.map((cap) => (
              <button
                key={cap.id}
                onClick={() => setActiveCapability(cap)}
                className={`relative flex-none lg:w-full min-w-[180px] lg:min-w-0 p-4 text-left transition-all duration-300 group rounded-lg ${
                  activeCapability.id === cap.id
                    ? 'bg-white shadow-card'
                    : 'hover:bg-white hover:shadow-card'
                }`}
              >
                {/* Sliding indicator bar */}
                {activeCapability.id === cap.id && (
                  <motion.div
                    layoutId="capability-indicator"
                    className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-sky-500"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                    activeCapability.id === cap.id ? 'bg-sky-100' : 'bg-surface-100 group-hover:bg-surface-200'
                  }`}>
                    <cap.icon className={`w-4.5 h-4.5 ${
                      activeCapability.id === cap.id ? 'text-sky-600' : 'text-ink-400'
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className={`font-display font-semibold text-sm transition-colors ${
                        activeCapability.id === cap.id ? 'text-ink-900' : 'text-ink-600'
                      }`}>
                        {cap.title}
                      </h3>
                      {cap.status === 'active' && <span className="status-dot active" />}
                      {cap.status === 'developing' && <span className="status-dot developing" />}
                    </div>
                    <p className="text-xs text-ink-400 font-body">{cap.subtitle}</p>
                  </div>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Detail panel */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCapability.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="card-clean p-6 sm:p-8 lg:p-10 h-full rounded-xl relative overflow-hidden"
              >
                {/* Dot grid texture behind content */}
                <div className="absolute inset-0 dot-grid pointer-events-none opacity-50" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center">
                        <activeCapability.icon className="w-6 h-6 text-sky-600" />
                      </div>
                      <div>
                        <span className="label-mono text-[10px] text-sky-600">{activeCapability.code}</span>
                        <h3 className="font-display font-bold text-xl text-ink-900">{activeCapability.title}</h3>
                      </div>
                    </div>
                    {activeCapability.status === 'developing' && (
                      <span className="badge-pill badge-sky rounded-full"><span className="status-dot developing" />Development</span>
                    )}
                    {activeCapability.status === 'active' && (
                      <span className="badge-pill badge-live rounded-full"><span className="status-dot active" />Live</span>
                    )}
                  </div>

                  <p className="text-sky-700 font-display font-semibold text-sm mb-4">{activeCapability.subtitle}</p>
                  <p className="text-ink-500 font-body mb-8 leading-relaxed">{activeCapability.description}</p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {activeCapability.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                        className="flex items-center gap-3 p-3 rounded-lg border border-surface-200 hover:border-sky-200/50 transition-colors bg-white"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                        <span className="text-sm text-ink-700 font-body">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <button className="btn-primary group rounded-lg relative overflow-hidden">
                    <span className="relative z-10 flex items-center gap-3">
                      Explore {activeCapability.title}
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-sky-700 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
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
