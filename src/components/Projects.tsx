import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Bot,
  Home,
  Factory,
  Heart,
  Film,
  Brain,
  ArrowUpRight,
} from 'lucide-react'

const projects = [
  {
    id: 'humanoid',
    slug: '/projects/humanoid',
    title: 'Autosapien G1',
    category: 'Humanoid Robotics',
    description: 'Our flagship humanoid robot—the culmination of decades of robotics research compressed into a single platform. Standing at human height with 40+ degrees of freedom, Autosapien G1 is designed to work alongside humans in homes, hospitals, and factories. This is not science fiction. This is next year.',
    icon: Bot,
    features: ['Bipedal Locomotion', 'Human-like Dexterity', 'Natural Conversation', 'Emotional Intelligence'],
    metrics: { value: '40+', label: 'Degrees of Freedom' },
    featured: true,
    status: 'developing',
    code: 'PRJ-001',
  },
  {
    id: 'healthcare-it',
    slug: '/projects/healthcare-it',
    externalUrl: 'https://xehr.io',
    title: 'xEHR.io Platform',
    category: 'Healthcare AI',
    description: 'The intelligent healthcare platform transforming how the USA delivers care. Combining EHR, practice management, and revenue cycle automation with AI agents that work 24/7 to eliminate administrative burden.',
    icon: Heart,
    features: ['AI Clinical Documentation', 'Autonomous RCM', 'FHIR R4 Native', '98% Clean Claims'],
    metrics: { value: 'Live', label: 'xEHR.io' },
    status: 'active',
    code: 'PRJ-002',
  },
  {
    id: 'film-studio',
    slug: '/projects/film-studio',
    title: 'AI Film Studio',
    category: 'Generative Cinema',
    description: 'The future of filmmaking is autonomous. Our AI film studio orchestrates specialized agents—writers, directors, editors, composers—to produce complete short films from a single prompt.',
    icon: Film,
    features: ['Video Diffusion', 'AI Audio Synthesis', 'Multi-Agent Production', 'Automated Post'],
    metrics: { value: '∞', label: 'Films Possible' },
    status: 'developing',
    code: 'PRJ-003',
  },
  {
    id: 'home-robotics',
    slug: '/projects/home-robotics',
    title: 'Home Companions',
    category: 'Home Robotics',
    description: 'Domestic robots that actually help—handling household tasks, providing eldercare assistance, and serving as the physical interface for your smart home. The beginning of robotic household members.',
    icon: Home,
    features: ['Household Automation', 'Eldercare', 'Smart Home Hub', 'Voice-First UX'],
    metrics: { value: '24/7', label: 'Assistance' },
    status: 'developing',
    code: 'PRJ-004',
  },
  {
    id: 'industrial-robotics',
    slug: '/projects/industrial-robotics',
    title: 'Factory Intelligence',
    category: 'Industrial Robotics',
    description: 'Industrial robots that learn, adapt, and optimize. Using reinforcement learning and computer vision to continuously improve manufacturing processes and collaborate safely with human workers.',
    icon: Factory,
    features: ['Self-Optimizing', 'Predictive Maintenance', 'Human-Safe', 'Quality Control'],
    metrics: { value: '10x', label: 'Efficiency Gain' },
    status: 'developing',
    code: 'PRJ-005',
  },
  {
    id: 'agentic-ai',
    slug: '/projects/agentic-ai',
    title: 'Agentic AI',
    category: 'AI Employees',
    description: 'AI FTEs that work 24/7—including RCM Employee (rcmemployee.com) for USA healthcare providers. We build custom agents for workflow automation, RCM automation, and healthcare administrative tasks.',
    icon: Brain,
    features: ['RCM Employee', 'Workflow Automation', 'RCM Automation', 'Custom Agents'],
    metrics: { value: '24/7', label: 'AI Employees' },
    status: 'active',
    code: 'PRJ-006',
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="relative py-16 sm:py-32 overflow-hidden bg-obsidian-850/50">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="divider-glow absolute top-0 left-0 right-0" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20"
        >
          <div>
            <span className="badge-hud mb-6">
              <span>SYS.PROJECTS</span>
            </span>
            <h2 className="font-display font-bold text-display-lg">
              From silicon minds to{' '}
              <span className="text-signal-400">steel bodies</span>
            </h2>
          </div>
          <p className="text-muted font-body max-w-md text-base sm:text-lg">
            Each project represents a frontier where AI meets the physical world.
            This is what we're building.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-12 gap-3">
          {/* Featured project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 lg:row-span-2"
          >
            <Link to={projects[0].slug} className="block h-full group">
              <div className="card-hud h-full p-6 sm:p-8 lg:p-12 hud-corners flex flex-col">
                <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 border border-signal-400/30 flex items-center justify-center">
                      <Bot className="w-7 h-7 text-signal-400" />
                    </div>
                    <div>
                      <span className="label-mono text-signal-400/40">{projects[0].code}</span>
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-white group-hover:text-signal-400 transition-colors">
                        {projects[0].title}
                      </h3>
                    </div>
                  </div>
                  <span className="badge-hud">
                    <span className="status-dot developing" />
                    <span>In Development</span>
                  </span>
                </div>

                <p className="text-dim font-body text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                  {projects[0].description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  {projects[0].features.map((feature) => (
                    <div key={feature} className="p-3 bg-obsidian-800/40 border border-obsidian-700/30">
                      <span className="text-sm text-obsidian-100 font-body">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex-1" />

                <div className="flex items-center justify-between pt-8 border-t border-obsidian-700/40">
                  <div>
                    <div className="stat-display text-4xl sm:text-5xl">{projects[0].metrics.value}</div>
                    <div className="label-mono mt-1">{projects[0].metrics.label}</div>
                  </div>
                  <div className="w-12 h-12 border border-obsidian-600 flex items-center justify-center group-hover:border-signal-400 group-hover:bg-signal-400 transition-all">
                    <ArrowUpRight className="w-5 h-5 text-obsidian-400 group-hover:text-obsidian-950 transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Secondary projects */}
          {projects.slice(1).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
              className="lg:col-span-4"
            >
              {(() => {
                const cardContent = (
                  <div className="card-hud h-full p-5 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 border border-obsidian-600 flex items-center justify-center group-hover:border-signal-400/30 transition-colors">
                        <project.icon className="w-5 h-5 text-signal-400" />
                      </div>
                      <div className="flex items-center gap-2">
                        {project.status === 'developing' && (
                          <span className="badge-hud text-[10px] py-1 px-2">
                            <span className="status-dot developing" />
                            <span>Dev</span>
                          </span>
                        )}
                        {project.status === 'active' && (
                          <span className="badge-hud badge-live text-[10px] py-1 px-2">
                            <span className="status-dot active" />
                            <span>Live</span>
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mb-3">
                      <span className="label-mono text-signal-400/25">{project.code}</span>
                      <h3 className="font-display font-bold text-lg text-white group-hover:text-signal-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="label-mono">{project.category}</span>
                    </div>

                    <p className="text-sm text-muted font-body leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 bg-obsidian-800/40 text-xs text-obsidian-200 font-mono border border-obsidian-700/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex-1" />

                    <div className="flex items-center justify-between pt-4 border-t border-obsidian-700/30">
                      <div>
                        <div className="stat-display text-xl">{project.metrics.value}</div>
                        <div className="label-mono">{project.metrics.label}</div>
                      </div>
                      <div className="w-9 h-9 border border-obsidian-600 flex items-center justify-center group-hover:border-signal-400 transition-colors">
                        <ArrowUpRight className="w-4 h-4 text-obsidian-400 group-hover:text-signal-400 transition-colors" />
                      </div>
                    </div>
                  </div>
                );
                return project.externalUrl ? (
                  <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className="block h-full group">
                    {cardContent}
                  </a>
                ) : (
                  <Link to={project.slug} className="block h-full group">
                    {cardContent}
                  </Link>
                );
              })()}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20 pt-16 border-t border-obsidian-700/30"
        >
          <p className="text-muted font-body mb-6 max-w-2xl mx-auto">
            Every project is interconnected. The AI that powers our humanoid also optimizes our factories.
            The models that generate films also understand clinical documentation.
          </p>
          <a
            href="#technology"
            className="inline-flex items-center gap-3 text-signal-400 hover:text-signal-300 transition-colors group"
          >
            <span className="font-display font-semibold">Explore Our Technology Stack</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
