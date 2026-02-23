import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const techStack = [
  { name: 'PyTorch', category: 'ML Framework' }, { name: 'TensorFlow', category: 'ML Framework' },
  { name: 'CUDA', category: 'GPU Computing' }, { name: 'Kubernetes', category: 'Orchestration' },
  { name: 'React', category: 'Frontend' }, { name: 'FastAPI', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' }, { name: 'Redis', category: 'Cache' },
  { name: 'OpenAI', category: 'LLM' }, { name: 'Anthropic', category: 'LLM' },
  { name: 'ROS2', category: 'Robotics' }, { name: 'Docker', category: 'Container' },
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
    <section id="technology" ref={containerRef} className="relative py-20 sm:py-36 bg-surface-50 overflow-hidden">
      <div className="divider" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label-mono text-amber-600 mb-4 block">Technology</span>
          <h2 className="font-display font-bold text-display-lg mb-5">
            Built on cutting-edge infrastructure
          </h2>
          <p className="text-base sm:text-lg text-ink-400 font-body max-w-2xl mx-auto">
            We leverage the most advanced technologies to build reliable, scalable, and intelligent systems.
          </p>
        </motion.div>

        {/* Scrolling tech */}
        <div className="relative mb-20 overflow-hidden py-6">
          <motion.div style={{ x: x1 }} className="flex gap-3 mb-3">
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={`${tech.name}-${i}`} className="flex-none px-5 py-3 bg-white border border-surface-200 rounded-lg hover:border-amber-300 transition-colors group">
                <div className="text-sm font-display font-semibold text-ink-800 group-hover:text-amber-700 transition-colors">{tech.name}</div>
                <div className="label-mono text-[10px]">{tech.category}</div>
              </div>
            ))}
          </motion.div>
          <motion.div style={{ x: x2 }} className="flex gap-3">
            {[...techStack.slice().reverse(), ...techStack.slice().reverse()].map((tech, i) => (
              <div key={`${tech.name}-rev-${i}`} className="flex-none px-5 py-3 bg-white border border-surface-200 rounded-lg hover:border-amber-300 transition-colors group">
                <div className="text-sm font-display font-semibold text-ink-800 group-hover:text-amber-700 transition-colors">{tech.name}</div>
                <div className="label-mono text-[10px]">{tech.category}</div>
              </div>
            ))}
          </motion.div>

          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-surface-50 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-surface-50 to-transparent pointer-events-none" />
        </div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + i * 0.08 }}
              className="card-clean p-5 sm:p-8 text-center rounded-xl hover-lift"
            >
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="stat-display text-3xl sm:text-4xl">{m.value}</span>
                {m.unit && <span className="text-amber-600 text-base sm:text-lg font-mono">{m.unit}</span>}
              </div>
              <div className="text-sm font-display font-semibold text-ink-900 mb-1">{m.label}</div>
              <div className="label-mono text-[10px]">{m.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="card-clean p-5 sm:p-8 lg:p-10 rounded-xl">
            <div className="flex items-center justify-between mb-10">
              <h3 className="font-display font-bold text-xl text-ink-900">System Architecture</h3>
              <span className="label-mono text-[10px] text-ink-300">ARCH-001</span>
            </div>

            <div className="grid lg:grid-cols-3 gap-4">
              {[
                { label: '01', title: 'Data Layer', desc: 'Distributed data infrastructure with real-time streaming and batch processing.', color: 'amber' },
                { label: '02', title: 'AI Core', desc: 'Multi-model orchestration with GPU-accelerated inference engines.', color: 'amber' },
                { label: '03', title: 'Integration', desc: 'API-first architecture with enterprise connectors and webhooks.', color: 'amber' },
              ].map((layer) => (
                <div key={layer.label} className="text-center p-6 bg-surface-50 rounded-xl border border-surface-200 hover:border-amber-200 transition-colors">
                  <div className="w-12 h-12 mx-auto mb-5 rounded-xl bg-amber-50 flex items-center justify-center">
                    <span className="font-mono text-amber-700 font-bold text-sm">{layer.label}</span>
                  </div>
                  <h4 className="text-lg font-display font-semibold text-ink-900 mb-2">{layer.title}</h4>
                  <p className="text-sm text-ink-400 font-body">{layer.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
