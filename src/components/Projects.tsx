import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Bot, Home, Factory, Heart, Film, Brain, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 'humanoid', slug: '/projects/humanoid', title: 'Autosapien G1', category: 'Humanoid Robotics',
    description: 'Our flagship humanoid robot—the culmination of decades of robotics research compressed into a single platform. Standing at human height with 40+ degrees of freedom, designed to work alongside humans.',
    icon: Bot, features: ['Bipedal Locomotion', 'Human-like Dexterity', 'Natural Conversation', 'Emotional Intelligence'],
    metrics: { value: '40+', label: 'Degrees of Freedom' }, featured: true, status: 'developing', code: 'PRJ-001',
  },
  {
    id: 'healthcare-it', slug: '/projects/healthcare-it', externalUrl: 'https://xehr.io',
    title: 'xEHR.io Platform', category: 'Healthcare AI',
    description: 'The intelligent healthcare platform transforming how the USA delivers care. AI agents that work 24/7 to eliminate administrative burden.',
    icon: Heart, features: ['AI Clinical Documentation', 'Autonomous RCM', 'FHIR R4 Native', '98% Clean Claims'],
    metrics: { value: 'Live', label: 'xEHR.io' }, status: 'active', code: 'PRJ-002',
  },
  {
    id: 'film-studio', slug: '/projects/film-studio', title: 'AI Film Studio', category: 'Generative Cinema',
    description: 'Our AI film studio orchestrates specialized agents to produce complete short films from a single prompt.',
    icon: Film, features: ['Video Diffusion', 'AI Audio Synthesis', 'Multi-Agent Production', 'Automated Post'],
    metrics: { value: '∞', label: 'Films Possible' }, status: 'developing', code: 'PRJ-003',
  },
  {
    id: 'home-robotics', slug: '/projects/home-robotics', title: 'Home Companions', category: 'Home Robotics',
    description: 'Domestic robots that actually help—handling household tasks, eldercare, and serving as the physical interface for your smart home.',
    icon: Home, features: ['Household Automation', 'Eldercare', 'Smart Home Hub', 'Voice-First UX'],
    metrics: { value: '24/7', label: 'Assistance' }, status: 'developing', code: 'PRJ-004',
  },
  {
    id: 'industrial-robotics', slug: '/projects/industrial-robotics', title: 'Factory Intelligence', category: 'Industrial Robotics',
    description: 'Industrial robots that learn, adapt, and optimize using reinforcement learning and computer vision.',
    icon: Factory, features: ['Self-Optimizing', 'Predictive Maintenance', 'Human-Safe', 'Quality Control'],
    metrics: { value: '10x', label: 'Efficiency Gain' }, status: 'developing', code: 'PRJ-005',
  },
  {
    id: 'agentic-ai', slug: '/projects/agentic-ai', title: 'Agentic AI', category: 'AI Employees',
    description: 'AI FTEs that work 24/7—including RCM Employee for USA healthcare providers. Custom agents for workflow automation.',
    icon: Brain, features: ['RCM Employee', 'Workflow Automation', 'RCM Automation', 'Custom Agents'],
    metrics: { value: '24/7', label: 'AI Employees' }, status: 'active', code: 'PRJ-006',
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="relative py-24 sm:py-40" style={{ background: '#fafafa', overflowX: 'clip' }}>
      {/* Top gradient divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(80%,600px)] h-px bg-gradient-to-r from-transparent via-sky-300/30 to-transparent" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="label-mono text-sky-600">Projects</span>
              <div className="h-px w-16 bg-gradient-to-r from-sky-400/60 to-transparent" />
            </div>
            <h2 className="font-display font-bold text-display-lg">
              From silicon minds to steel bodies
            </h2>
          </div>
          <p className="text-ink-400 font-body max-w-md text-base sm:text-lg">
            Each project represents a frontier where AI meets the physical world.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-12 gap-4">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 lg:row-span-2"
          >
            <Link to={projects[0].slug} className="block h-full group">
              <div className="card-clean h-full p-6 sm:p-8 lg:p-10 rounded-xl flex flex-col hover-glow relative overflow-hidden">
                {/* Dot grid background */}
                <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" />

                {/* Hover glow blob */}
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-sky-400/0 group-hover:bg-sky-400/5 blur-3xl transition-all duration-700 pointer-events-none" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center group-hover:bg-sky-100 group-hover:scale-105 transition-all">
                        <Bot className="w-6 h-6 text-sky-600" />
                      </div>
                      <div>
                        <span className="label-mono text-[10px] text-sky-600">{projects[0].code}</span>
                        <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink-900 group-hover:text-sky-700 transition-colors">
                          {projects[0].title}
                        </h3>
                      </div>
                    </div>
                    <span className="badge-pill badge-sky">
                      <span className="status-dot developing" />
                      In Development
                    </span>
                  </div>

                  <p className="text-ink-500 font-body text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
                    {projects[0].description}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {projects[0].features.map((f) => (
                      <div key={f} className="p-3 rounded-lg border border-surface-200 hover:border-sky-200/50 transition-colors bg-white">
                        <span className="flex items-center gap-2 text-sm text-ink-700 font-body">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex-1" />

                  <div className="flex items-center justify-between pt-6 border-t border-surface-200">
                    <div>
                      <div className="stat-display-sky text-5xl sm:text-6xl">{projects[0].metrics.value}</div>
                      <div className="label-mono mt-1">{projects[0].metrics.label}</div>
                    </div>
                    <div className="w-11 h-11 rounded-full border border-surface-300 flex items-center justify-center group-hover:bg-ink-900 group-hover:border-ink-900 transition-all">
                      <ArrowUpRight className="w-5 h-5 text-ink-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Secondary */}
          {projects.slice(1).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
              className="lg:col-span-4"
            >
              {(() => {
                const card = (
                  <div className="card-clean h-full p-6 rounded-xl flex flex-col hover-glow relative overflow-hidden hover:border-sky-200/50 transition-colors">
                    {/* Code watermark */}
                    <div className="absolute top-3 right-3 font-mono text-[10px] text-ink-200/30 select-none">{project.code}</div>

                    <div className="flex items-start justify-between mb-4">
                      <div className="w-9 h-9 rounded-lg bg-surface-100 flex items-center justify-center group-hover:bg-sky-50 group-hover:scale-105 transition-all">
                        <project.icon className="w-4.5 h-4.5 text-ink-400 group-hover:text-sky-600 transition-colors" />
                      </div>
                      {project.status === 'developing' && (
                        <span className="badge-pill badge-sky text-[10px] py-1 px-2"><span className="status-dot developing" />Dev</span>
                      )}
                      {project.status === 'active' && (
                        <span className="badge-pill badge-live text-[10px] py-1 px-2"><span className="status-dot active" />Live</span>
                      )}
                    </div>

                    <span className="label-mono text-[10px] text-ink-500">{project.code}</span>
                    <h3 className="font-display font-bold text-lg text-ink-900 group-hover:text-sky-700 transition-colors">
                      {project.title}
                    </h3>
                    <span className="label-mono text-[10px] mb-3">{project.category}</span>
                    <p className="text-sm text-ink-400 font-body leading-relaxed mb-4 line-clamp-3">{project.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.features.slice(0, 3).map((f) => (
                        <span key={f} className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-surface-200 text-xs text-ink-500 font-mono rounded hover:border-sky-200/50 transition-colors">
                          <span className="w-1 h-1 rounded-full bg-sky-400" />
                          {f}
                        </span>
                      ))}
                    </div>

                    <div className="flex-1" />

                    <div className="flex items-center justify-between pt-4 border-t border-surface-200">
                      <div>
                        <div className="stat-display-sky text-2xl">{project.metrics.value}</div>
                        <div className="label-mono text-[10px]">{project.metrics.label}</div>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-surface-300 flex items-center justify-center group-hover:bg-ink-900 group-hover:border-ink-900 transition-all">
                        <ArrowUpRight className="w-3.5 h-3.5 text-ink-400 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                )
                return project.externalUrl ? (
                  <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className="block h-full group">{card}</a>
                ) : (
                  <Link to={project.slug} className="block h-full group">{card}</Link>
                )
              })()}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16 pt-12 relative"
        >
          {/* Gradient divider line instead of plain border */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(60%,400px)] h-px bg-gradient-to-r from-transparent via-sky-300/30 to-transparent" />

          <p className="text-ink-400 font-body mb-5 max-w-2xl mx-auto">
            Every project is interconnected. The AI that powers our humanoid also optimizes our factories.
          </p>
          <a href="#technology" className="inline-flex items-center gap-2 text-ink-900 hover:text-sky-700 transition-colors group font-display font-semibold accent-underline">
            Explore Our Technology Stack
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
