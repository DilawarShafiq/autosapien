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
    <section id="technology" ref={containerRef} className="relative py-24 sm:py-40 overflow-hidden" style={{ background: '#f5f5f5' }}>
      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label-mono mb-4 block text-sky-600">Technology</span>
          <h2 className="font-display font-bold text-display-lg mb-5 text-ink-900">
            Built on cutting-edge infrastructure
          </h2>
          <p className="text-base sm:text-lg font-body max-w-2xl mx-auto text-ink-400">
            We leverage the most advanced technologies to build reliable, scalable, and intelligent systems.
          </p>
        </motion.div>

        {/* Scrolling tech */}
        <div className="relative mb-20 overflow-hidden py-6">
          <motion.div style={{ x: x1 }} className="flex gap-3 mb-3">
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={`${tech.name}-${i}`} className="flex-none px-5 py-3 rounded-lg group card-clean">
                <div className="text-sm font-display font-semibold text-ink-800 group-hover:text-sky-600 transition-colors">{tech.name}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-400">{tech.category}</div>
              </div>
            ))}
          </motion.div>
          <motion.div style={{ x: x2 }} className="flex gap-3">
            {[...techStack.slice().reverse(), ...techStack.slice().reverse()].map((tech, i) => (
              <div key={`${tech.name}-rev-${i}`} className="flex-none px-5 py-3 rounded-lg group card-clean">
                <div className="text-sm font-display font-semibold text-ink-800 group-hover:text-sky-600 transition-colors">{tech.name}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-400">{tech.category}</div>
              </div>
            ))}
          </motion.div>

          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 pointer-events-none" style={{ background: 'linear-gradient(to right, #f5f5f5, transparent)' }} />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 pointer-events-none" style={{ background: 'linear-gradient(to left, #f5f5f5, transparent)' }} />
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
                <span className="stat-display-sky text-3xl sm:text-4xl">{m.value}</span>
                {m.unit && <span className="text-base sm:text-lg font-mono text-sky-600">{m.unit}</span>}
              </div>
              <div className="text-sm font-display font-semibold text-ink-900 mb-1">{m.label}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-400">{m.description}</div>
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
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-300">ARCH-001</span>
            </div>

            <div className="grid lg:grid-cols-3 gap-4">
              {[
                { label: '01', title: 'Data Layer', desc: 'Distributed data infrastructure with real-time streaming and batch processing.' },
                { label: '02', title: 'AI Core', desc: 'Multi-model orchestration with GPU-accelerated inference engines.' },
                { label: '03', title: 'Integration', desc: 'API-first architecture with enterprise connectors and webhooks.' },
              ].map((layer) => (
                <div key={layer.label} className="text-center p-6 rounded-xl transition-colors card-tinted">
                  <div className="w-12 h-12 mx-auto mb-5 rounded-xl flex items-center justify-center bg-sky-50">
                    <span className="font-mono font-bold text-sm text-sky-700">{layer.label}</span>
                  </div>
                  <h4 className="text-lg font-display font-semibold text-ink-900 mb-2">{layer.title}</h4>
                  <p className="text-sm font-body text-ink-400">{layer.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
