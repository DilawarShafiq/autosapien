import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const techStack = [
  { name: 'PyTorch', category: 'ML Framework' },
  { name: 'TensorFlow', category: 'ML Framework' },
  { name: 'CUDA', category: 'GPU Computing' },
  { name: 'Kubernetes', category: 'Orchestration' },
  { name: 'React', category: 'Frontend' },
  { name: 'FastAPI', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Redis', category: 'Cache' },
  { name: 'OpenAI', category: 'LLM' },
  { name: 'Anthropic', category: 'LLM' },
  { name: 'ROS2', category: 'Robotics' },
  { name: 'Docker', category: 'Container' },
]

const metrics = [
  { value: '99.99', unit: '%', label: 'Uptime SLA', description: 'Enterprise-grade reliability' },
  { value: '<50', unit: 'ms', label: 'Latency', description: 'Real-time inference' },
  { value: '1B', unit: '+', label: 'Parameters', description: 'Model complexity' },
  { value: 'SOC2', unit: '', label: 'Certified', description: 'Security compliance' },
]

export function Technology() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <section id="technology" ref={containerRef} className="relative py-16 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-25" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="badge-hud mb-6">
            <span>SYS.TECHNOLOGY</span>
          </span>
          <h2 className="font-display font-bold text-display-lg mb-6">
            Built on{' '}
            <span className="text-signal-400">cutting-edge</span>
            <br />
            infrastructure
          </h2>
          <p className="text-base sm:text-lg text-muted font-body max-w-2xl mx-auto">
            We leverage the most advanced technologies to build reliable, scalable,
            and intelligent systems.
          </p>
        </motion.div>

        {/* Scrolling tech */}
        <div className="relative mb-24 overflow-hidden py-8">
          <motion.div style={{ x: x1 }} className="flex gap-3 mb-3">
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="flex-none px-5 py-3 bg-obsidian-850/60 border border-obsidian-700/30 hover:border-signal-400/15 transition-colors group"
              >
                <div className="text-base font-display font-semibold text-obsidian-100 group-hover:text-signal-400 transition-colors">{tech.name}</div>
                <div className="label-mono text-[10px]">{tech.category}</div>
              </div>
            ))}
          </motion.div>

          <motion.div style={{ x: x2 }} className="flex gap-3">
            {[...techStack.slice().reverse(), ...techStack.slice().reverse()].map((tech, i) => (
              <div
                key={`${tech.name}-rev-${i}`}
                className="flex-none px-5 py-3 bg-obsidian-850/60 border border-obsidian-700/30 hover:border-signal-400/15 transition-colors group"
              >
                <div className="text-base font-display font-semibold text-obsidian-100 group-hover:text-signal-400 transition-colors">{tech.name}</div>
                <div className="label-mono text-[10px]">{tech.category}</div>
              </div>
            ))}
          </motion.div>

          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-obsidian-900 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-obsidian-900 to-transparent pointer-events-none" />
        </div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-24"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="card-hud p-4 sm:p-8 text-center group hover-lift"
            >
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="stat-display text-3xl sm:text-5xl">{metric.value}</span>
                {metric.unit && (
                  <span className="text-signal-400/70 text-lg sm:text-xl font-mono">{metric.unit}</span>
                )}
              </div>
              <div className="text-sm sm:text-lg font-display font-semibold text-white mb-1">{metric.label}</div>
              <div className="label-mono">{metric.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Architecture diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="card-hud p-4 sm:p-8 lg:p-12 hud-corners">
            <div className="flex items-center justify-between mb-12">
              <h3 className="font-display font-bold text-2xl text-white">System Architecture</h3>
              <span className="label-mono text-signal-400/30">ARCH-001</span>
            </div>

            <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  label: 'Layer 01',
                  title: 'Data Layer',
                  desc: 'Distributed data infrastructure with real-time streaming and batch processing.',
                  icon: (
                    <svg className="w-7 h-7 text-signal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  ),
                },
                {
                  label: 'Layer 02',
                  title: 'AI Core',
                  desc: 'Multi-model orchestration with GPU-accelerated inference engines.',
                  icon: (
                    <svg className="w-7 h-7 text-signal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                },
                {
                  label: 'Layer 03',
                  title: 'Integration',
                  desc: 'API-first architecture with enterprise connectors and webhooks.',
                  icon: (
                    <svg className="w-7 h-7 text-signal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                },
              ].map((layer) => (
                <div key={layer.label} className="text-center p-6 bg-obsidian-800/30 border border-obsidian-700/20 group hover:border-signal-400/10 transition-colors">
                  <div className="w-14 h-14 mx-auto mb-6 border border-signal-400/25 flex items-center justify-center">
                    {layer.icon}
                  </div>
                  <span className="label-mono text-signal-400/40 mb-2 block">{layer.label}</span>
                  <h4 className="text-xl font-display font-semibold text-white mb-3">{layer.title}</h4>
                  <p className="text-sm text-muted font-body">{layer.desc}</p>
                </div>
              ))}
            </div>

            {/* Connection line */}
            <div className="hidden lg:flex items-center justify-center mt-10 pt-8 border-t border-obsidian-700/20">
              <div className="flex items-center gap-4">
                <div className="w-20 h-px bg-gradient-to-r from-transparent to-signal-400/30" />
                <div className="w-2 h-2 bg-signal-400/50 rotate-45" />
                <div className="w-20 h-px bg-signal-400/20" />
                <div className="w-2 h-2 bg-signal-400/50 rotate-45" />
                <div className="w-20 h-px bg-gradient-to-r from-signal-400/30 to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="divider-glow absolute bottom-0 left-0 right-0" />
    </section>
  )
}
