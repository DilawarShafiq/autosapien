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
    <section id="technology" ref={containerRef} className="relative py-16 sm:py-32 overflow-hidden bg-carbon-900">
      {/* Background */}
      <div className="absolute inset-0 bg-technical-grid opacity-30" />

      {/* Geometric accent - hidden on mobile */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-ember-500/5" style={{ transform: 'translate(-50%, -50%) rotate(45deg)' }} />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="badge badge-ember mb-6">
            <span className="label-technical">Technology</span>
          </span>
          <h2 className="font-display font-bold text-display-lg mb-6">
            Built on{' '}
            <span className="text-gradient">cutting-edge</span>
            <br />
            infrastructure
          </h2>
          <p className="text-lg text-carbon-400 font-body max-w-2xl mx-auto">
            We leverage the most advanced technologies to build reliable, scalable,
            and intelligent systems.
          </p>
        </motion.div>

        {/* Scrolling tech logos */}
        <div className="relative mb-24 overflow-hidden py-8">
          {/* First row - scrolling left */}
          <motion.div style={{ x: x1 }} className="flex gap-4 mb-4">
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="flex-none px-6 py-4 bg-carbon-850 border border-carbon-700 hover:border-ember-500/30 transition-colors group"
              >
                <div className="text-lg font-display font-semibold text-white group-hover:text-ember-400 transition-colors">{tech.name}</div>
                <div className="label-technical">{tech.category}</div>
              </div>
            ))}
          </motion.div>

          {/* Second row - scrolling right */}
          <motion.div style={{ x: x2 }} className="flex gap-4">
            {[...techStack.slice().reverse(), ...techStack.slice().reverse()].map((tech, i) => (
              <div
                key={`${tech.name}-rev-${i}`}
                className="flex-none px-6 py-4 bg-carbon-850 border border-carbon-700 hover:border-volt-500/30 transition-colors group"
              >
                <div className="text-lg font-display font-semibold text-white group-hover:text-volt-400 transition-colors">{tech.name}</div>
                <div className="label-technical">{tech.category}</div>
              </div>
            ))}
          </motion.div>

          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-carbon-900 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-carbon-900 to-transparent pointer-events-none" />
        </div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="card-industrial p-8 text-center group hover-lift"
            >
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="stat-display text-3xl sm:text-5xl">{metric.value}</span>
                {metric.unit && (
                  <span className="text-ember-400 text-xl font-mono">{metric.unit}</span>
                )}
              </div>
              <div className="text-lg font-display font-semibold text-white mb-1">{metric.label}</div>
              <div className="label-technical">{metric.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Architecture diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="card-industrial p-5 sm:p-8 lg:p-12 corner-accent">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 sm:mb-12">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">System Architecture</h3>
              <span className="label-technical text-ember-500/60 hidden sm:inline">ARCH-001</span>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Data Layer */}
              <div className="text-center p-6 bg-carbon-800 border border-carbon-700 group hover:border-volt-500/30 transition-colors">
                <div className="w-16 h-16 mx-auto mb-6 border-2 border-volt-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-volt-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <span className="label-technical text-volt-500 mb-2 block">Layer 01</span>
                <h4 className="text-xl font-display font-semibold text-white mb-3">Data Layer</h4>
                <p className="text-sm text-carbon-400 font-body">
                  Distributed data infrastructure with real-time streaming and batch processing.
                </p>
              </div>

              {/* AI Core */}
              <div className="text-center p-6 bg-carbon-800 border border-carbon-700 group hover:border-ember-500/30 transition-colors">
                <div className="w-16 h-16 mx-auto mb-6 border-2 border-ember-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-ember-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="label-technical text-ember-500 mb-2 block">Layer 02</span>
                <h4 className="text-xl font-display font-semibold text-white mb-3">AI Core</h4>
                <p className="text-sm text-carbon-400 font-body">
                  Multi-model orchestration with GPU-accelerated inference engines.
                </p>
              </div>

              {/* Integration */}
              <div className="text-center p-6 bg-carbon-800 border border-carbon-700 group hover:border-sage-500/30 transition-colors">
                <div className="w-16 h-16 mx-auto mb-6 border-2 border-sage-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-sage-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="label-technical text-sage-500 mb-2 block">Layer 03</span>
                <h4 className="text-xl font-display font-semibold text-white mb-3">Integration</h4>
                <p className="text-sm text-carbon-400 font-body">
                  API-first architecture with enterprise connectors and webhooks.
                </p>
              </div>
            </div>

            {/* Connection lines */}
            <div className="hidden lg:flex items-center justify-center mt-12 pt-8 border-t border-carbon-700">
              <div className="flex items-center gap-6">
                <div className="w-24 h-px bg-gradient-to-r from-transparent to-volt-500" />
                <div className="w-3 h-3 bg-volt-500" style={{ transform: 'rotate(45deg)' }} />
                <div className="w-24 h-px bg-gradient-to-r from-volt-500 via-ember-500 to-ember-500" />
                <div className="w-3 h-3 bg-ember-500" style={{ transform: 'rotate(45deg)' }} />
                <div className="w-24 h-px bg-gradient-to-r from-ember-500 to-sage-500" />
                <div className="w-3 h-3 bg-sage-500" style={{ transform: 'rotate(45deg)' }} />
                <div className="w-24 h-px bg-gradient-to-r from-sage-500 to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-carbon-600 to-transparent" />
    </section>
  )
}
