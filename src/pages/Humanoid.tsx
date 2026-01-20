import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bot, Brain, Eye, Hand, Heart, Mic, Shield, Zap, Activity, Users } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { Contact } from '../components/Contact'

const specifications = [
  { label: 'Height', value: '5\'10"', unit: '178 cm' },
  { label: 'Weight', value: '145', unit: 'lbs' },
  { label: 'Degrees of Freedom', value: '40+', unit: 'joints' },
  { label: 'Battery Life', value: '8+', unit: 'hours' },
  { label: 'Walking Speed', value: '5', unit: 'mph' },
  { label: 'Payload Capacity', value: '45', unit: 'lbs' },
]

const capabilities = [
  {
    icon: Hand,
    title: 'Human-Like Dexterity',
    description: '22 degrees of freedom in each hand, capable of manipulating objects as small as a pen or as delicate as an egg. Piano-playing precision meets industrial strength.',
  },
  {
    icon: Eye,
    title: 'Omnidirectional Perception',
    description: '360° environmental awareness through stereo RGB cameras, depth sensors, and LiDAR. Real-time 3D mapping of any environment, indoors or out.',
  },
  {
    icon: Brain,
    title: 'Embodied Intelligence',
    description: 'On-board AI running our proprietary foundation models for physical reasoning, task planning, and natural interaction. No cloud dependency for core functions.',
  },
  {
    icon: Mic,
    title: 'Natural Communication',
    description: 'Full natural language understanding and generation. Speaks, listens, and responds with appropriate emotional tone and body language.',
  },
  {
    icon: Activity,
    title: 'Dynamic Balance',
    description: 'Advanced bipedal locomotion stable on any surface—stairs, slopes, uneven terrain. Recovers from pushes and adapts to carrying variable loads.',
  },
  {
    icon: Shield,
    title: 'Inherently Safe',
    description: 'Compliant actuators, force-limited joints, and real-time collision avoidance. Designed from the ground up for safe human interaction.',
  },
]

const useCases = [
  {
    title: 'Home Assistance',
    description: 'From cleaning and cooking to eldercare and companionship, Autosapien One becomes a helpful household member.',
    icon: Heart,
    color: 'from-rose-500 to-pink-500',
  },
  {
    title: 'Healthcare Support',
    description: 'Patient monitoring, medication management, mobility assistance, and clinical support in hospitals and care facilities.',
    icon: Activity,
    color: 'from-emerald-500 to-cyan-500',
  },
  {
    title: 'Industrial Operations',
    description: 'Flexible manufacturing, quality inspection, logistics, and human-robot collaboration on the factory floor.',
    icon: Zap,
    color: 'from-cyber-500 to-blue-500',
  },
  {
    title: 'Service & Hospitality',
    description: 'Customer service, concierge duties, warehouse operations, and any task requiring physical presence and intelligence.',
    icon: Users,
    color: 'from-synth-500 to-amber-500',
  },
]

const timeline = [
  { year: '2024', milestone: 'First prototype walking', status: 'completed' },
  { year: '2025', milestone: 'Full manipulation capabilities', status: 'current' },
  { year: '2025', milestone: 'Beta program with partners', status: 'upcoming' },
  { year: '2026', milestone: 'Commercial availability', status: 'upcoming' },
]

export function Humanoid() {
  const specsRef = useRef(null)
  const capabilitiesRef = useRef(null)
  const useCasesRef = useRef(null)
  const isSpecsInView = useInView(specsRef, { once: true, margin: '-100px' })
  const isCapabilitiesInView = useInView(capabilitiesRef, { once: true, margin: '-100px' })
  const isUseCasesInView = useInView(useCasesRef, { once: true, margin: '-100px' })

  return (
    <>
      <PageHero
        icon={Bot}
        category="Humanoid Robotics"
        title="Autosapien One"
        subtitle="The first humanoid designed to live among us"
        description="Standing at human height with over 40 degrees of freedom, Autosapien One represents the culmination of robotics research—a machine built not for factories alone, but for homes, hospitals, and everywhere humans need a helping hand. This isn't science fiction. This is what's next."
        gradient="from-plasma-500 to-neural-500"
        status="developing"
        features={[
          'Bipedal Locomotion',
          'Human-like Hands',
          'Natural Conversation',
          'Emotional Intelligence',
          'On-board AI',
          'Safe Interaction',
        ]}
      />

      {/* Specifications Section */}
      <section ref={specsRef} className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSpecsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-plasma-400 mb-6">
              Technical Specifications
            </span>
            <h2 className="text-3xl font-bold text-white">Built to human scale</h2>
          </motion.div>

          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {specifications.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isSpecsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-plasma-500 to-neural-500 bg-clip-text text-transparent mb-1">
                    {spec.value}
                  </div>
                  <div className="text-sm text-neutral-500 mb-1">{spec.unit}</div>
                  <div className="text-white font-medium">{spec.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section ref={capabilitiesRef} className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-plasma-600/10 rounded-full blur-3xl -translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCapabilitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-neural-400 mb-6">
              Core Capabilities
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              More than a machine.{' '}
              <span className="bg-gradient-to-r from-plasma-500 to-neural-500 bg-clip-text text-transparent">
                A new species.
              </span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Every capability engineered for the real world—messy, unpredictable, and infinitely complex.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isCapabilitiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass rounded-3xl p-8 hover-lift group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-plasma-500/20 to-neural-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <cap.icon className="w-7 h-7 text-plasma-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
                <p className="text-neutral-400">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section ref={useCasesRef} className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-neural-600/10 rounded-full blur-3xl -translate-y-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isUseCasesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-plasma-400 mb-6">
              Applications
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Everywhere humans need{' '}
              <span className="bg-gradient-to-r from-plasma-500 to-neural-500 bg-clip-text text-transparent">
                a helping hand
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, i) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isUseCasesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass rounded-3xl p-8 hover-lift"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center`}>
                    <useCase.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                </div>
                <p className="text-neutral-400">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Development Timeline</h3>
            <p className="text-neutral-400">From prototype to production</p>
          </motion.div>

          <div className="glass rounded-3xl p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.milestone}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex-1 text-center relative"
                >
                  {i < timeline.length - 1 && (
                    <div className="hidden md:block absolute top-4 left-1/2 w-full h-px bg-gradient-to-r from-plasma-500/50 to-transparent" />
                  )}
                  <div className={`w-8 h-8 rounded-full mx-auto mb-3 flex items-center justify-center ${
                    item.status === 'completed'
                      ? 'bg-green-500'
                      : item.status === 'current'
                      ? 'bg-gradient-to-r from-plasma-500 to-neural-500 animate-pulse'
                      : 'bg-white/10'
                  }`}>
                    {item.status === 'completed' && (
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <div className="text-lg font-bold text-white mb-1">{item.year}</div>
                  <div className="text-sm text-neutral-400">{item.milestone}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Be part of the future
            </h2>
            <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
              We're looking for beta partners across healthcare, manufacturing, and hospitality to help shape how humanoid robots integrate into our world.
            </p>
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-plasma-500 to-neural-500 text-white font-medium text-lg hover:opacity-90 transition-opacity">
              Join the Beta Program
            </button>
          </motion.div>
        </div>
      </section>

      <Contact />
    </>
  )
}
