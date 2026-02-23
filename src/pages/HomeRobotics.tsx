import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Home, Heart, Shield, Mic, Eye, Wifi, Clock, Users, Sparkles, Coffee } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { Contact } from '../components/Contact'

const features = [
  {
    icon: Heart,
    title: 'Eldercare Companion',
    description: 'Medication reminders, fall detection, mobility assistance, and constant companionship. Peace of mind for families, independence for seniors.',
  },
  {
    icon: Coffee,
    title: 'Household Automation',
    description: 'Cleaning, organizing, fetching items, and assisting with daily tasks. From vacuuming to laundry assistance, your tireless household helper.',
  },
  {
    icon: Mic,
    title: 'Voice-First Interaction',
    description: 'Natural conversation in multiple languages. Ask questions, give commands, or just chat. The robot that talks back—helpfully.',
  },
  {
    icon: Wifi,
    title: 'Smart Home Hub',
    description: 'Central interface for all your smart devices. Control lights, thermostats, security systems, and more through voice or gesture.',
  },
  {
    icon: Eye,
    title: 'Home Monitoring',
    description: 'Security patrol, unusual activity detection, package delivery alerts, and remote check-ins. Eyes on your home 24/7.',
  },
  {
    icon: Users,
    title: 'Family Connection',
    description: 'Video calls with loved ones, message delivery, and remote presence. Stay connected even when you can\'t be there.',
  },
]

const useCases = [
  {
    title: 'Independent Living',
    description: 'Enabling seniors to age in place with dignity. From medication management to emergency response, our robots provide the support needed for independent living.',
    personas: ['Seniors', 'People with disabilities', 'Post-surgery recovery'],
    color: 'from-neural-500 to-indigo-500',
  },
  {
    title: 'Busy Families',
    description: 'For families juggling work, kids, and everything in between. Help with household chores, childcare assistance, and keeping the home running smoothly.',
    personas: ['Working parents', 'Single parents', 'Large families'],
    color: 'from-rose-500 to-pink-500',
  },
  {
    title: 'Smart Living',
    description: 'The physical interface your smart home has been missing. Control everything through natural interaction, not apps.',
    personas: ['Tech enthusiasts', 'Home automation fans', 'Early adopters'],
    color: 'from-cyber-500 to-blue-500',
  },
]

const specs = [
  { label: 'Operating Time', value: '12+ hrs', description: 'On single charge' },
  { label: 'Navigation', value: '100%', description: 'Autonomous' },
  { label: 'Voice Range', value: '30 ft', description: 'Recognition distance' },
  { label: 'Response Time', value: '<500ms', description: 'Command to action' },
]

const safetyFeatures = [
  {
    icon: Shield,
    title: 'Child & Pet Safe',
    description: 'Rounded edges, soft materials, and intelligent collision avoidance ensure safe interaction with all family members.',
  },
  {
    icon: Clock,
    title: 'Night Mode',
    description: 'Quiet operation, dimmed lights, and awareness of sleep schedules. Never disturbs, always ready if needed.',
  },
  {
    icon: Eye,
    title: 'Privacy First',
    description: 'On-device processing, encrypted communications, and physical privacy shutters. Your home, your data.',
  },
]

export function HomeRobotics() {
  const featuresRef = useRef(null)
  const useCasesRef = useRef(null)
  const safetyRef = useRef(null)
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: '-100px' })
  const isUseCasesInView = useInView(useCasesRef, { once: true, margin: '-100px' })
  const isSafetyInView = useInView(safetyRef, { once: true, margin: '-100px' })

  return (
    <>
      <PageHero
        icon={Home}
        category="Home Robotics"
        title="Home Companions"
        subtitle="Robots that become family"
        description="Home robots that actually help—not novelties that collect dust, but genuine household members that clean, assist, protect, and connect. From eldercare to household automation, our domestic robots are designed for real life, not tech demos."
        gradient="from-neural-500 to-indigo-500"
        status="developing"
        features={[
          'Household Tasks',
          'Eldercare Support',
          'Smart Home Control',
          'Home Security',
          'Voice Interaction',
          'Family Connection',
        ]}
      />

      {/* Specs Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-3xl p-8 md:p-12">
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
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-neural-500 to-indigo-500 bg-clip-text text-transparent mb-2">
                    {spec.value}
                  </div>
                  <div className="text-white font-medium mb-1">{spec.label}</div>
                  <div className="text-sm text-neutral-500">{spec.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-neural-600/10 rounded-full blur-3xl -translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-neural-400 mb-6">
              Capabilities
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Everything a helpful{' '}
              <span className="bg-gradient-to-r from-neural-500 to-indigo-500 bg-clip-text text-transparent">
                household member
              </span>{' '}
              should do
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass rounded-3xl p-8 hover-lift group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neural-500/20 to-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-neural-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-neutral-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section ref={useCasesRef} className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isUseCasesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-indigo-400 mb-6">
              Who It's For
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Designed for{' '}
              <span className="bg-gradient-to-r from-neural-500 to-indigo-500 bg-clip-text text-transparent">
                real families
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {useCases.map((useCase, i) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isUseCasesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass rounded-3xl p-8 hover-lift"
              >
                <div className={`w-full h-2 rounded-full bg-gradient-to-r ${useCase.color} mb-6`} />
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-neutral-400 mb-6">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.personas.map((persona) => (
                    <span
                      key={persona}
                      className="px-3 py-1 rounded-lg bg-white/5 text-xs text-neutral-300"
                    >
                      {persona}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section ref={safetyRef} className="relative py-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSafetyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-neural-400 mb-6">
              Safety & Privacy
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Built for{' '}
              <span className="bg-gradient-to-r from-neural-500 to-indigo-500 bg-clip-text text-transparent">
                trust
              </span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Welcoming a robot into your home requires trust. We've engineered safety and privacy into every layer.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {safetyFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isSafetyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass rounded-3xl p-8 text-center hover-lift"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neural-500/20 to-indigo-500/20 flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="w-8 h-8 text-neural-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-neutral-400">{feature.description}</p>
              </motion.div>
            ))}
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
            <Sparkles className="w-12 h-12 text-neural-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              The beginning of robotic household members
            </h2>
            <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
              Join our early access program and be among the first to welcome a home robot that actually helps.
            </p>
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-neural-500 to-indigo-500 text-white font-medium text-lg hover:opacity-90 transition-opacity">
              Request Early Access
            </button>
          </motion.div>
        </div>
      </section>

      <Contact />
    </>
  )
}
