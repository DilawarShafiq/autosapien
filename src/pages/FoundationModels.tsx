import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Brain, Cpu, Eye, Hand, Sparkles, Globe, Layers, Activity, Target } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { Contact } from '../components/Contact'

const modelCapabilities = [
  {
    icon: Eye,
    title: 'Multi-Modal Understanding',
    description: 'Models that see, hear, and read simultaneously. Fusing visual, audio, and textual inputs into unified understanding—the way humans perceive the world.',
  },
  {
    icon: Globe,
    title: 'Physical World Reasoning',
    description: 'Understanding of physics, object permanence, spatial relationships, and causality. AI that knows a glass will break if dropped.',
  },
  {
    icon: Hand,
    title: 'Manipulation Planning',
    description: 'From observation to action. Models that can plan complex manipulation sequences, predict outcomes, and adapt to unexpected situations.',
  },
  {
    icon: Activity,
    title: 'Real-Time Inference',
    description: 'Optimized for edge deployment. Running sophisticated AI on robot hardware with millisecond latency—no cloud dependency.',
  },
  {
    icon: Layers,
    title: 'Continuous Learning',
    description: 'Models that improve through operation. Learning from every interaction, every success, every failure—getting smarter every day.',
  },
  {
    icon: Target,
    title: 'Task Transfer',
    description: 'Learn once, apply everywhere. Skills learned in one domain transfer to new situations, new objects, new environments.',
  },
]

const researchAreas = [
  {
    title: 'Embodied Reasoning',
    description: 'Teaching AI to reason about the physical world—understanding that actions have consequences, objects have properties, and environments have constraints.',
    status: 'Active',
    icon: Brain,
  },
  {
    title: 'Sim-to-Real Transfer',
    description: 'Training in simulation, deploying in reality. Bridging the gap between virtual training environments and the messy real world.',
    status: 'Active',
    icon: Globe,
  },
  {
    title: 'Human Intent Prediction',
    description: 'Understanding what humans want before they say it. Reading body language, context, and situation to anticipate needs.',
    status: 'Active',
    icon: Eye,
  },
  {
    title: 'Multi-Robot Coordination',
    description: 'Enabling fleets of robots to work together seamlessly. Distributed intelligence for manufacturing, warehousing, and beyond.',
    status: 'Research',
    icon: Layers,
  },
]

const applications = [
  {
    name: 'Humanoid Control',
    description: 'The brain behind Autosapien G1',
    icon: '🤖',
    models: ['Motion Planning', 'Balance Control', 'Manipulation'],
  },
  {
    name: 'Healthcare AI',
    description: 'Powering xEHR.io intelligence',
    icon: '🏥',
    models: ['Clinical NLP', 'Medical Coding', 'Documentation'],
  },
  {
    name: 'Industrial Vision',
    description: 'Eyes for factory robots',
    icon: '🏭',
    models: ['Defect Detection', 'Pose Estimation', 'Quality Control'],
  },
  {
    name: 'Generative Cinema',
    description: 'Creative engine for AI films',
    icon: '🎬',
    models: ['Video Diffusion', 'Audio Synthesis', 'Story Generation'],
  },
]

const metrics = [
  { value: '1B+', label: 'Parameters', description: 'Foundation model scale' },
  { value: '<50ms', label: 'Latency', description: 'Edge inference time' },
  { value: '1M+', label: 'Hours', description: 'Training data' },
  { value: '6', label: 'Domains', description: 'Cross-application' },
]

export function FoundationModels() {
  const capabilitiesRef = useRef(null)
  const researchRef = useRef(null)
  const applicationsRef = useRef(null)
  const isCapabilitiesInView = useInView(capabilitiesRef, { once: true, margin: '-100px' })
  const isResearchInView = useInView(researchRef, { once: true, margin: '-100px' })
  const isApplicationsInView = useInView(applicationsRef, { once: true, margin: '-100px' })

  return (
    <div style={{ background: '#fafafa' }}>
      <PageHero
        icon={Brain}
        category="Foundation Models"
        title="Embodied AI Research"
        subtitle="The intelligence behind the machines"
        description="We're not just using AI—we're building it. Our research team is developing foundation models specifically optimized for embodied intelligence: understanding physics, spatial reasoning, object manipulation, and human interaction. These models power everything from our humanoid to our healthcare agents."
        gradient="from-neural-400 to-plasma-400"
        features={[
          'Physical Reasoning',
          'Multi-Modal',
          'Real-Time Inference',
          'Continuous Learning',
          'Task Transfer',
          'Edge Deployment',
        ]}
      />

      {/* Metrics Section */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="card-clean rounded-xl p-8 md:p-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="stat-display text-3xl sm:text-4xl mb-2">
                    {metric.value}
                  </div>
                  <div className="text-ink-900 font-medium mb-1">{metric.label}</div>
                  <div className="text-sm text-ink-500">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section ref={capabilitiesRef} className="relative py-32 overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCapabilitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="label-mono text-sky-600 mb-4 block">
              Core Capabilities
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              AI built for the{' '}
              <span className="text-sky-500">
                physical world
              </span>
            </h2>
            <p className="text-lg text-ink-400 max-w-2xl mx-auto">
              Traditional AI understands text and images. Our models understand physics, space, and action.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modelCapabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isCapabilitiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="card-clean rounded-xl p-8 hover-lift group"
              >
                <div className="w-14 h-14 rounded-lg bg-sky-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <cap.icon className="w-7 h-7 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-ink-900 mb-3">{cap.title}</h3>
                <p className="text-ink-400">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section ref={researchRef} className="relative py-32 overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isResearchInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="label-mono text-sky-600 mb-4 block">
              Research Focus
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Pushing the{' '}
              <span className="text-sky-500">
                boundaries
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {researchAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isResearchInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="card-clean rounded-xl p-8 hover-lift"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-lg bg-sky-50 flex items-center justify-center">
                    <area.icon className="w-7 h-7 text-sky-600" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    area.status === 'Active'
                      ? 'bg-green-50 text-green-700'
                      : 'bg-sky-50 text-sky-700'
                  }`}>
                    {area.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-ink-900 mb-3">{area.title}</h3>
                <p className="text-ink-400">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section ref={applicationsRef} className="relative py-32 overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isApplicationsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="label-mono text-sky-600 mb-4 block">
              Cross-Platform Intelligence
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              One foundation.{' '}
              <span className="text-sky-500">
                Infinite applications.
              </span>
            </h2>
            <p className="text-lg text-ink-400 max-w-2xl mx-auto">
              The same core intelligence powers every Autosapien product—adapted and optimized for each domain.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, i) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isApplicationsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="card-clean rounded-xl p-6 text-center hover-lift"
              >
                <div className="text-4xl mb-4">{app.icon}</div>
                <h3 className="text-lg font-bold text-ink-900 mb-2">{app.name}</h3>
                <p className="text-sm text-ink-500 mb-4">{app.description}</p>
                <div className="space-y-2">
                  {app.models.map((model) => (
                    <div
                      key={model}
                      className="text-xs text-ink-500 px-3 py-1 rounded-lg bg-surface-100"
                    >
                      {model}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-clean rounded-xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-sky-50/50" />
            <div className="relative">
              <Sparkles className="w-12 h-12 text-sky-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-ink-900 mb-6">
                Our Philosophy
              </h2>
              <p className="text-lg text-ink-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                "Intelligence without embodiment is incomplete. A mind that cannot touch the world can only observe it.
                We're building AI that doesn't just think—it acts, learns, and grows through physical interaction with reality."
              </p>
              <div className="text-ink-500">
                — Autosapien Research Team
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-clean rounded-xl p-12"
          >
            <Cpu className="w-12 h-12 text-sky-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-ink-900 mb-4">
              Join our research team
            </h2>
            <p className="text-lg text-ink-400 mb-8 max-w-2xl mx-auto">
              We're looking for researchers, engineers, and dreamers who want to build the AI systems that will define the next century.
            </p>
            <button className="btn-primary rounded-lg">
              View Open Positions
            </button>
          </motion.div>
        </div>
      </section>

      <Contact />
    </div>
  )
}
