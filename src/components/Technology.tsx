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
  { value: '99.99%', label: 'Uptime SLA', description: 'Enterprise-grade reliability' },
  { value: '<50ms', label: 'Latency', description: 'Real-time inference' },
  { value: '1B+', label: 'Parameters', description: 'Model complexity' },
  { value: 'SOC2', label: 'Certified', description: 'Security compliance' },
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
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-void via-neural-950/20 to-void" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neural-600/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-synth-400 mb-6">
            Technology Stack
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Built on{' '}
            <span className="gradient-text">cutting-edge</span>
            <br />
            infrastructure
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            We leverage the most advanced technologies to build reliable, scalable,
            and intelligent systems.
          </p>
        </motion.div>

        {/* Scrolling tech logos */}
        <div className="relative mb-20 overflow-hidden py-8">
          {/* First row - scrolling left */}
          <motion.div style={{ x: x1 }} className="flex gap-6 mb-6">
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="flex-none px-6 py-4 rounded-2xl glass hover:bg-white/10 transition-colors"
              >
                <div className="text-lg font-semibold text-white">{tech.name}</div>
                <div className="text-xs text-neutral-500">{tech.category}</div>
              </div>
            ))}
          </motion.div>

          {/* Second row - scrolling right */}
          <motion.div style={{ x: x2 }} className="flex gap-6">
            {[...techStack.slice().reverse(), ...techStack.slice().reverse()].map((tech, i) => (
              <div
                key={`${tech.name}-rev-${i}`}
                className="flex-none px-6 py-4 rounded-2xl glass hover:bg-white/10 transition-colors"
              >
                <div className="text-lg font-semibold text-white">{tech.name}</div>
                <div className="text-xs text-neutral-500">{tech.category}</div>
              </div>
            ))}
          </motion.div>

          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-void to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-void to-transparent pointer-events-none" />
        </div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="relative group"
            >
              <div className="glass rounded-3xl p-8 text-center hover-lift">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neural-500/20 to-plasma-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />

                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-white mb-1">{metric.label}</div>
                <div className="text-sm text-neutral-500">{metric.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Architecture diagram placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <div className="glass rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Data Layer */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyber-500 to-blue-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Data Layer</h3>
                <p className="text-sm text-neutral-400">
                  Distributed data infrastructure with real-time streaming and batch processing.
                </p>
              </div>

              {/* AI Core */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-neural-500 to-plasma-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI Core</h3>
                <p className="text-sm text-neutral-400">
                  Multi-model orchestration with GPU-accelerated inference engines.
                </p>
              </div>

              {/* Integration */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-synth-500 to-amber-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Integration</h3>
                <p className="text-sm text-neutral-400">
                  API-first architecture with enterprise connectors and webhooks.
                </p>
              </div>
            </div>

            {/* Connection lines */}
            <div className="hidden lg:flex items-center justify-center mt-8">
              <div className="flex items-center gap-4">
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-cyber-500 to-neural-500" />
                <div className="w-4 h-4 rounded-full bg-neural-500 animate-pulse" />
                <div className="w-20 h-px bg-gradient-to-r from-neural-500 via-plasma-500 to-synth-500" />
                <div className="w-4 h-4 rounded-full bg-plasma-500 animate-pulse" />
                <div className="w-20 h-px bg-gradient-to-r from-plasma-500 via-synth-500 to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
