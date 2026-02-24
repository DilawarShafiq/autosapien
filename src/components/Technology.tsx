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
      {/* Top gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(80%,600px)] h-px bg-gradient-to-r from-transparent via-sky-300/30 to-transparent" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-sky-300/50" />
            <span className="label-mono text-sky-600">Technology</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-sky-300/50" />
          </div>
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
              <div key={`${tech.name}-${i}`} className="flex-none px-5 py-3 rounded-lg group card-clean hover:border-sky-200/50 transition-colors">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 opacity-60" />
                  <div className="text-sm font-display font-semibold text-ink-800 group-hover:text-sky-600 transition-colors">{tech.name}</div>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-400 mt-0.5 pl-3.5">{tech.category}</div>
              </div>
            ))}
          </motion.div>
          <motion.div style={{ x: x2 }} className="flex gap-3">
            {[...techStack.slice().reverse(), ...techStack.slice().reverse()].map((tech, i) => (
              <div key={`${tech.name}-rev-${i}`} className="flex-none px-5 py-3 rounded-lg group card-clean hover:border-sky-200/50 transition-colors">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 opacity-60" />
                  <div className="text-sm font-display font-semibold text-ink-800 group-hover:text-sky-600 transition-colors">{tech.name}</div>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-400 mt-0.5 pl-3.5">{tech.category}</div>
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
              className="group card-clean p-5 sm:p-8 text-center rounded-xl hover-lift hover-glow hover:border-sky-200/50 transition-all"
            >
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="stat-display-sky text-4xl sm:text-5xl">{m.value}</span>
                {m.unit && <span className="text-base sm:text-lg font-mono text-sky-600">{m.unit}</span>}
              </div>
              {/* Accent line between value and label */}
              <div className="w-8 h-px mx-auto mb-2 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent group-hover:via-sky-400/80 transition-all" />
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
          <div className="card-clean p-5 sm:p-8 lg:p-10 rounded-xl relative overflow-hidden">
            {/* Dot grid background */}
            <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" />

            <div className="relative">
              <div className="flex items-center justify-between mb-10">
                <h3 className="font-display font-bold text-xl text-ink-900">System Architecture</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-500">ARCH-001</span>
              </div>

              <div className="grid lg:grid-cols-3 gap-4 relative">
                {/* Connection lines between columns (desktop only) */}
                <div className="hidden lg:block absolute top-1/2 left-[33.33%] w-[33.33%] h-px border-t border-dashed border-sky-300/30 -translate-y-1/2 pointer-events-none" />

                {[
                  { label: '01', title: 'Data Layer', desc: 'Distributed data infrastructure with real-time streaming and batch processing.' },
                  { label: '02', title: 'AI Core', desc: 'Multi-model orchestration with GPU-accelerated inference engines.' },
                  { label: '03', title: 'Integration', desc: 'API-first architecture with enterprise connectors and webhooks.' },
                ].map((layer) => (
                  <div key={layer.label} className="group text-center p-6 rounded-xl transition-all card-tinted hover-glow hover:border-sky-200/50">
                    <div className="w-12 h-12 mx-auto mb-5 rounded-xl flex items-center justify-center bg-sky-50 border border-transparent group-hover:border-sky-200/50 transition-colors">
                      <span className="font-mono font-bold text-sm text-sky-700">{layer.label}</span>
                    </div>
                    <h4 className="text-lg font-display font-semibold text-ink-900 mb-2">{layer.title}</h4>
                    <p className="text-sm font-body text-ink-400">{layer.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
