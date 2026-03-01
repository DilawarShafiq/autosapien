import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const techStack = [
  // AI & ML
  { name: 'PyTorch', category: 'ML Framework' }, { name: 'ONNX Runtime', category: 'Inference' },
  { name: 'Anthropic Claude', category: 'LLM' }, { name: 'OpenAI', category: 'LLM' },
  { name: 'Google Vertex AI', category: 'AI Platform' }, { name: 'MuJoCo', category: 'Simulation' },
  // Robotics
  { name: 'ROS2', category: 'Robotics' }, { name: 'Isaac Gym', category: 'RL Training' },
  { name: 'Jetson Thor', category: 'Edge Compute' }, { name: 'ChromaDB', category: 'Vector DB' },
  // Backend & Data
  { name: 'FastAPI', category: 'Backend' }, { name: 'PostgreSQL', category: 'Database' },
  { name: 'Redis', category: 'Cache' }, { name: 'FAISS', category: 'Search' },
  // Frontend
  { name: 'React', category: 'Frontend' }, { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' }, { name: 'Three.js', category: '3D Graphics' },
  // Infrastructure
  { name: 'Kubernetes', category: 'Orchestration' }, { name: 'Docker', category: 'Container' },
  { name: 'Google Cloud', category: 'Platform' }, { name: 'Terraform', category: 'IaC' },
  { name: 'DAPR', category: 'Distributed' },
  // Languages
  { name: 'Python', category: 'Language' }, { name: 'C++20', category: 'Language' },
  // Healthcare
  { name: 'FHIR R4', category: 'Healthcare' }, { name: 'HL7', category: 'Healthcare' },
]

const metrics = [
  { value: '99.99', unit: '%', label: 'Uptime SLA', description: 'Enterprise-grade reliability' },
  { value: '<50', unit: 'ms', label: 'Latency', description: 'Real-time inference' },
  { value: '1B', unit: '+', label: 'Parameters', description: 'Model complexity' },
  { value: 'HIPAA', unit: '', label: 'Compliant', description: 'Healthcare security' },
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
    <section
      id="technology"
      ref={containerRef}
      className="relative py-24 sm:py-40 section-dark gradient-border-top overflow-hidden"
    >
      {/* Noise overlay */}
      <div className="noise-overlay-dark" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern-dark pointer-events-none" />

      {/* Ambient glow orbs */}
      <div
        className="glow-orb-blue absolute"
        style={{ width: '600px', height: '600px', top: '-10%', right: '-10%', opacity: 0.35 }}
      />
      <div
        className="glow-orb-blue absolute"
        style={{ width: '500px', height: '500px', bottom: '-5%', left: '-8%', opacity: 0.25 }}
      />

      {/* Scan line */}
      <div className="scan-line" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-sky-500/50" />
            <span className="label-mono-white text-sky-400">Technology</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-sky-500/50" />
          </div>
          <h2 className="font-display font-bold text-display-lg mb-5 text-white">
            Built on cutting-edge infrastructure
          </h2>
          <p className="text-base sm:text-lg font-body max-w-2xl mx-auto text-white/50">
            We leverage the most advanced technologies to build reliable, scalable, and intelligent systems.
          </p>
        </motion.div>

        {/* Scrolling tech tags */}
        <div className="relative mb-20 overflow-hidden py-4">
          <motion.div style={{ x: x1 }} className="flex gap-3 mb-3">
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={`${tech.name}-${i}`} className="tech-tag-dark group">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500/60 group-hover:bg-sky-400 transition-colors" />
                  <div className="text-sm font-display font-semibold text-white/80 group-hover:text-white transition-colors">
                    {tech.name}
                  </div>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/30 mt-0.5 pl-3.5">
                  {tech.category}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div style={{ x: x2 }} className="flex gap-3">
            {[...techStack.slice().reverse(), ...techStack.slice().reverse()].map((tech, i) => (
              <div key={`${tech.name}-rev-${i}`} className="tech-tag-dark group">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500/60 group-hover:bg-sky-400 transition-colors" />
                  <div className="text-sm font-display font-semibold text-white/80 group-hover:text-white transition-colors">
                    {tech.name}
                  </div>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/30 mt-0.5 pl-3.5">
                  {tech.category}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Edge fades */}
          <div
            className="absolute inset-y-0 left-0 w-16 sm:w-32 pointer-events-none z-10"
            style={{ background: 'linear-gradient(to right, #0a0f14, transparent)' }}
          />
          <div
            className="absolute inset-y-0 right-0 w-16 sm:w-32 pointer-events-none z-10"
            style={{ background: 'linear-gradient(to left, #0a0f14, transparent)' }}
          />
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
              className="metric-card-dark"
            >
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span
                  className="font-display font-bold text-sky-400 text-4xl sm:text-5xl"
                  style={{ letterSpacing: '-0.03em' }}
                >
                  {m.value}
                </span>
                {m.unit && (
                  <span className="text-base sm:text-lg font-mono text-sky-500/80">{m.unit}</span>
                )}
              </div>
              {/* Accent line */}
              <div className="w-8 h-px mx-auto mb-3 bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
              <div className="text-sm font-display font-semibold text-white/90 mb-1">{m.label}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">{m.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="card-glass p-5 sm:p-8 lg:p-10 rounded-2xl relative overflow-hidden">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

            {/* Dot grid texture */}
            <div className="absolute inset-0 dot-grid-dark pointer-events-none opacity-60" />

            <div className="relative">
              <div className="flex items-center justify-between mb-10">
                <h3 className="font-display font-bold text-xl text-white">System Architecture</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/30">ARCH-001</span>
              </div>

              <div className="grid lg:grid-cols-3 gap-4 relative">
                {/* Connection line */}
                <div className="hidden lg:block absolute top-1/2 left-[33.33%] w-[33.33%] h-px border-t border-dashed border-sky-500/20 -translate-y-1/2 pointer-events-none" />

                {[
                  {
                    label: '01',
                    title: 'Perception & Data',
                    desc: 'Sensor fusion, vector databases, and real-time streaming from robots to cloud via DDS and DAPR.',
                  },
                  {
                    label: '02',
                    title: 'AI Core',
                    desc: 'PyTorch models, LLM orchestration, reinforcement learning, and on-device inference via ONNX and Jetson Thor.',
                  },
                  {
                    label: '03',
                    title: 'Application Layer',
                    desc: 'FastAPI services, FHIR-native healthcare APIs, React frontends, and Kubernetes-orchestrated deployments on GCP.',
                  },
                ].map((layer) => (
                  <div
                    key={layer.label}
                    className="group text-center p-6 rounded-xl card-glass-blue transition-all"
                  >
                    <div className="w-12 h-12 mx-auto mb-5 rounded-xl flex items-center justify-center bg-sky-500/10 border border-sky-500/20 group-hover:border-sky-400/40 transition-colors">
                      <span className="font-mono font-bold text-sm text-sky-400">{layer.label}</span>
                    </div>
                    <h4 className="text-lg font-display font-semibold text-white mb-2">{layer.title}</h4>
                    <p className="text-sm font-body text-white/45">{layer.desc}</p>
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
