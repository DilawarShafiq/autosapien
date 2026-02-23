import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Clock, Users, Bell, BarChart3, Zap, MapPin, RefreshCw } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { Contact } from '../components/Contact'

const features = [
  {
    icon: Clock,
    title: 'AI-Powered Scheduling',
    description: 'Intelligent algorithms that optimize appointment slots based on provider preferences, patient needs, and historical patterns.',
  },
  {
    icon: Bell,
    title: 'Smart Reminders',
    description: 'Automated multi-channel reminders via SMS, email, and voice that adapt to patient preferences and response patterns.',
  },
  {
    icon: Users,
    title: 'Waitlist Management',
    description: 'Automatic backfill of cancelled appointments with intelligent patient matching based on availability and urgency.',
  },
  {
    icon: BarChart3,
    title: 'Predictive No-Show',
    description: 'ML models predict no-show probability for each appointment, enabling proactive overbooking and outreach.',
  },
  {
    icon: MapPin,
    title: 'Multi-Location',
    description: 'Seamless scheduling across multiple facilities with resource and equipment optimization.',
  },
  {
    icon: RefreshCw,
    title: 'Self-Service Portal',
    description: 'Patient-friendly booking interface with real-time availability and appointment management.',
  },
]

const metrics = [
  { value: '40%', label: 'No-Show Reduction', description: 'Predictive intervention' },
  { value: '95%', label: 'Slot Utilization', description: 'Optimized scheduling' },
  { value: '60%', label: 'Staff Time Saved', description: 'Automation benefits' },
  { value: '4.9', label: 'Patient Rating', description: 'Booking experience' },
]

const integrations = [
  { name: 'Epic MyChart', type: 'EHR' },
  { name: 'Cerner Patient Portal', type: 'EHR' },
  { name: 'Twilio', type: 'SMS' },
  { name: 'SendGrid', type: 'Email' },
  { name: 'Google Calendar', type: 'Calendar' },
  { name: 'Outlook', type: 'Calendar' },
]

const useCases = [
  {
    title: 'Primary Care',
    description: 'Optimize patient panels with smart scheduling that balances same-day availability with preventive care.',
    icon: Users,
  },
  {
    title: 'Specialty Clinics',
    description: 'Complex scheduling for multi-step procedures with resource and equipment coordination.',
    icon: Calendar,
  },
  {
    title: 'Telehealth',
    description: 'Seamless virtual visit scheduling with automatic video link generation and technical support.',
    icon: Zap,
  },
  {
    title: 'Surgical Centers',
    description: 'Operating room scheduling with procedure time optimization and turnover management.',
    icon: Clock,
  },
]

export function SmartScheduling() {
  const featuresRef = useRef(null)
  const useCasesRef = useRef(null)
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: '-100px' })
  const isUseCasesInView = useInView(useCasesRef, { once: true, margin: '-100px' })

  return (
    <>
      <PageHero
        icon={Calendar}
        category="Operations"
        title="Smart Scheduling"
        subtitle="Fill every slot, reduce every no-show"
        description="AI-powered scheduling that maximizes provider utilization, minimizes patient wait times, and creates a seamless booking experience across all channels."
        gradient="from-pink-500 to-rose-500"
        features={[
          'AI Optimization',
          'No-Show Prediction',
          'Waitlist Automation',
          'Multi-Channel Reminders',
          'Self-Service Booking',
          'Analytics Dashboard',
        ]}
      />

      {/* Metrics Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-3xl p-8 md:p-12">
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
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-white font-medium mb-1">{metric.label}</div>
                  <div className="text-sm text-neutral-500">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-pink-400 mb-6">
              Platform Features
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Scheduling that{' '}
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                works for everyone
              </span>
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
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-pink-400" />
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
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-3xl -translate-y-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isUseCasesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-rose-400 mb-6">
              Use Cases
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Built for{' '}
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                every setting
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
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                    <p className="text-neutral-400">{useCase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Seamless Integrations</h3>
            <p className="text-neutral-400">Connect with your existing systems</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration, i) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl px-6 py-3"
              >
                <div className="text-white font-medium">{integration.name}</div>
                <div className="text-xs text-neutral-500">{integration.type}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  )
}
