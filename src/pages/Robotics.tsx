import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bot, Eye, Cpu, Workflow, Settings, Zap, Shield, Users } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { Contact } from '../components/Contact'

const capabilities = [
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Advanced perception systems using deep learning for real-time object detection, tracking, and scene understanding.',
  },
  {
    icon: Cpu,
    title: 'Motion Planning',
    description: 'Intelligent path planning algorithms that enable smooth, efficient, and safe robot movements in complex environments.',
  },
  {
    icon: Workflow,
    title: 'Task Automation',
    description: 'End-to-end automation of complex multi-step tasks with adaptive learning and error recovery.',
  },
  {
    icon: Settings,
    title: 'Sensor Fusion',
    description: 'Integration of multiple sensor modalities for robust environmental perception and decision making.',
  },
  {
    icon: Users,
    title: 'Human-Robot Interaction',
    description: 'Natural and intuitive interfaces for seamless collaboration between humans and robotic systems.',
  },
  {
    icon: Shield,
    title: 'Safety Systems',
    description: 'Multi-layer safety protocols ensuring safe operation in dynamic environments with humans.',
  },
]

const applications = [
  {
    title: 'Industrial Automation',
    description: 'Autonomous manufacturing, assembly, and quality inspection systems.',
    image: 'from-sky-400 to-sky-600',
  },
  {
    title: 'Healthcare Robotics',
    description: 'Surgical assistance, rehabilitation, and patient care automation.',
    image: 'from-sky-400 to-sky-600',
  },
  {
    title: 'Logistics & Warehousing',
    description: 'Autonomous material handling, sorting, and inventory management.',
    image: 'from-sky-400 to-sky-600',
  },
  {
    title: 'Agricultural Robotics',
    description: 'Precision farming, harvesting, and crop monitoring systems.',
    image: 'from-sky-400 to-sky-600',
  },
]

const specs = [
  { label: 'Response Time', value: '<10ms' },
  { label: 'Accuracy', value: '99.7%' },
  { label: 'Operating Hours', value: '24/7' },
  { label: 'Safety Rating', value: 'ISO 13849' },
]

export function Robotics() {
  const capabilitiesRef = useRef(null)
  const applicationsRef = useRef(null)
  const isCapabilitiesInView = useInView(capabilitiesRef, { once: true, margin: '-100px' })
  const isApplicationsInView = useInView(applicationsRef, { once: true, margin: '-100px' })

  return (
    <div style={{ background: '#fafafa' }}>
      <PageHero
        icon={Bot}
        category="Robotics"
        title="Autonomous Robotics"
        subtitle="Intelligent machines that perceive, decide, and act"
        description="Our robotics division develops cutting-edge autonomous systems that combine advanced AI with precision engineering. From industrial automation to healthcare robotics, we're building the machines of tomorrow."
        gradient="from-plasma-500 to-cyber-500"
        features={[
          'Autonomous Navigation',
          'Real-time Perception',
          'Adaptive Learning',
          'Multi-Robot Coordination',
          'Precision Manipulation',
          'Safety-First Design',
        ]}
      />

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
              Built for the{' '}
              <span className="text-sky-500">
                real world
              </span>
            </h2>
            <p className="text-lg text-ink-400 max-w-2xl mx-auto">
              Our robotics platform combines state-of-the-art AI with robust engineering for reliable real-world deployment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
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

      {/* Specifications */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="card-clean rounded-xl p-8 md:p-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {specs.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="stat-display text-3xl sm:text-4xl mb-2">
                    {spec.value}
                  </div>
                  <div className="text-ink-400">{spec.label}</div>
                </motion.div>
              ))}
            </div>
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
              Applications
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Transforming{' '}
              <span className="text-sky-500">
                industries
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, i) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isApplicationsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group relative card-clean rounded-xl p-8 overflow-hidden hover-lift"
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6 text-sky-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-ink-900 mb-3">{app.title}</h3>
                  <p className="text-ink-400 mb-6">{app.description}</p>
                  <button className="text-sm text-sky-600 hover:text-sky-500 transition-colors flex items-center gap-2">
                    Learn more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}
