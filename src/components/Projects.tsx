import { useRef, useState, useEffect } from 'react'
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
  Clock
} from 'lucide-react'

// Calculate days until March 22, 2025
function getDaysUntilLaunch() {
  const launchDate = new Date('2025-03-22T00:00:00')
  const now = new Date()
  const diff = launchDate.getTime() - now.getTime()
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
  return days > 0 ? days : 0
}

const projects = [
  {
    id: 'humanoid',
    slug: '/projects/humanoid',
    title: 'Autosapien One',
    category: 'Humanoid Robotics',
    description: 'Our flagship humanoid robot—the culmination of decades of robotics research compressed into a single platform. Standing at human height with 40+ degrees of freedom, Autosapien One is designed to work alongside humans in homes, hospitals, and factories. This is not science fiction. This is next year.',
    icon: Bot,
    gradient: 'from-plasma-500 to-neural-500',
    features: ['Bipedal Locomotion', 'Human-like Dexterity', 'Natural Conversation', 'Emotional Intelligence'],
    metrics: { value: '40+', label: 'Degrees of Freedom' },
    featured: true,
    status: 'developing',
  },
  {
    id: 'healthcare-it',
    slug: '/projects/healthcare-it',
    title: 'xEHR.io Platform',
    category: 'Healthcare AI',
    description: 'The intelligent healthcare platform transforming how America delivers care. Combining EHR, practice management, and revenue cycle automation with AI agents that work 24/7 to eliminate administrative burden.',
    icon: Heart,
    gradient: 'from-rose-500 to-pink-500',
    features: ['AI Clinical Documentation', 'Autonomous RCM', 'FHIR R4 Native', '98% Clean Claims'],
    metrics: { value: '2M+', label: 'Patient Records' },
    status: 'launching',
    launchDate: 'March 22',
  },
  {
    id: 'film-studio',
    slug: '/projects/film-studio',
    title: 'AI Film Studio',
    category: 'Generative Cinema',
    description: 'The future of filmmaking is autonomous. Our AI film studio orchestrates specialized agents—writers, directors, editors, composers—to produce complete short films from a single prompt.',
    icon: Film,
    gradient: 'from-synth-500 to-amber-500',
    features: ['Video Diffusion', 'AI Audio Synthesis', 'Multi-Agent Production', 'Automated Post'],
    metrics: { value: '∞', label: 'Films Possible' },
    status: 'developing',
  },
  {
    id: 'home-robotics',
    slug: '/projects/home-robotics',
    title: 'Home Companions',
    category: 'Home Robotics',
    description: 'Domestic robots that actually help—handling household tasks, providing eldercare assistance, and serving as the physical interface for your smart home. The beginning of robotic household members.',
    icon: Home,
    gradient: 'from-neural-500 to-indigo-500',
    features: ['Household Automation', 'Eldercare', 'Smart Home Hub', 'Voice-First UX'],
    metrics: { value: '24/7', label: 'Assistance' },
    status: 'developing',
  },
  {
    id: 'industrial-robotics',
    slug: '/projects/industrial-robotics',
    title: 'Factory Intelligence',
    category: 'Industrial Robotics',
    description: 'Industrial robots that learn, adapt, and optimize. Using reinforcement learning and computer vision to continuously improve manufacturing processes and collaborate safely with human workers.',
    icon: Factory,
    gradient: 'from-cyber-500 to-blue-500',
    features: ['Self-Optimizing', 'Predictive Maintenance', 'Human-Safe', 'Quality Control'],
    metrics: { value: '10x', label: 'Efficiency Gain' },
    status: 'developing',
  },
  {
    id: 'agentic-ai',
    slug: '/projects/agentic-ai',
    title: 'Agentic AI',
    category: 'AI Employees',
    description: 'AI FTEs that work 24/7—fully autonomous AI employees handling complex workflows across healthcare, operations, and enterprise. Custom agent development for your specific needs.',
    icon: Brain,
    gradient: 'from-neural-400 to-plasma-400',
    features: ['AI FTEs', 'Custom Agents', '24/7 Operation', 'Enterprise Compliance'],
    metrics: { value: '10x', label: 'Productivity' },
    status: 'active',
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [daysUntilLaunch, setDaysUntilLaunch] = useState(getDaysUntilLaunch())

  useEffect(() => {
    const timer = setInterval(() => {
      setDaysUntilLaunch(getDaysUntilLaunch())
    }, 1000 * 60 * 60) // Update every hour
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="projects" className="relative py-16 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 dot-pattern" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neural-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-plasma-600/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-cyber-400 mb-6">
            What We're Building
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            From silicon minds to{' '}
            <span className="gradient-text">steel bodies</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
            Each project represents a frontier where AI meets the physical world. Humanoids that
            walk among us. Factories that think. Films that dream themselves into existence. Healthcare
            that heals itself. This is what we're building.
          </p>
        </motion.div>

        {/* Bento grid layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative ${
                project.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <Link to={project.slug} className="block h-full">
                <div
                  className={`relative h-full glass rounded-3xl p-6 lg:p-8 hover-lift card-shine overflow-hidden ${
                    project.featured ? 'min-h-[400px]' : ''
                  }`}
                >
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                      >
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        {/* Status Badge */}
                        {project.status === 'developing' && (
                          <span className="px-3 py-1 rounded-full bg-amber-500/20 text-xs text-amber-400 font-medium animate-pulse">
                            Developing...
                          </span>
                        )}
                        {project.status === 'launching' && (
                          <span className="px-3 py-1 rounded-full bg-rose-500/20 text-xs text-rose-400 font-medium flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {daysUntilLaunch} days
                          </span>
                        )}
                        {project.status === 'active' && (
                          <span className="px-3 py-1 rounded-full bg-green-500/20 text-xs text-green-400 font-medium flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Active
                          </span>
                        )}
                        <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-neutral-400">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className={`font-bold text-white mb-3 ${project.featured ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-neutral-400 mb-6 ${project.featured ? 'text-base lg:text-lg' : 'text-sm'} leading-relaxed`}>
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 rounded-lg bg-white/5 text-xs text-neutral-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div>
                        {project.status === 'launching' ? (
                          <>
                            <div className={`font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent ${project.featured ? 'text-3xl' : 'text-2xl'}`}>
                              {project.launchDate}
                            </div>
                            <div className="text-xs text-neutral-500">Launch Date</div>
                          </>
                        ) : (
                          <>
                            <div className={`font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent ${project.featured ? 'text-3xl' : 'text-2xl'}`}>
                              {project.metrics.value}
                            </div>
                            <div className="text-xs text-neutral-500">{project.metrics.label}</div>
                          </>
                        )}
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                        <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-neutral-500 mb-6">
            Every project is interconnected. The AI that powers our humanoid also optimizes our factories.
            The models that generate films also understand clinical documentation.
          </p>
          <div className="inline-flex items-center gap-2 text-neural-400 hover:text-neural-300 transition-colors cursor-pointer">
            <span className="text-sm font-medium">Explore our technology stack</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
