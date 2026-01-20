import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Factory, Brain, Eye, Shield, Zap, RefreshCw, BarChart3, Wrench, Package, Users } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { Contact } from '../components/Contact'

const capabilities = [
  {
    icon: Brain,
    title: 'Self-Optimizing Workflows',
    description: 'Reinforcement learning continuously improves production processes. Our robots don\'t just execute—they optimize, discovering efficiencies humans never imagined.',
  },
  {
    icon: Eye,
    title: 'Computer Vision QC',
    description: 'Real-time quality inspection at superhuman speeds. Detect defects invisible to the human eye, ensuring 100% inspection coverage.',
  },
  {
    icon: Wrench,
    title: 'Predictive Maintenance',
    description: 'AI predicts equipment failures before they happen. Reduce downtime by 90%, extend equipment life, and optimize maintenance schedules.',
  },
  {
    icon: Users,
    title: 'Human-Robot Collaboration',
    description: 'Force-sensing arms and real-time collision avoidance enable safe side-by-side work with human operators. No cages required.',
  },
  {
    icon: Package,
    title: 'Flexible Manufacturing',
    description: 'Rapid reprogramming for new products. What took weeks of retooling now takes hours of AI training.',
  },
  {
    icon: BarChart3,
    title: 'Production Intelligence',
    description: 'Complete visibility into operations. Real-time dashboards, anomaly detection, and AI-driven insights for continuous improvement.',
  },
]

const applications = [
  {
    title: 'Assembly Lines',
    description: 'High-speed, precision assembly with 24/7 operation. From electronics to automotive, our robots handle complex assembly tasks.',
    metrics: '99.9% accuracy',
    icon: Factory,
    color: 'from-cyber-500 to-blue-500',
  },
  {
    title: 'Logistics & Warehousing',
    description: 'Autonomous picking, packing, and palletizing. Optimize warehouse operations and reduce fulfillment times.',
    metrics: '5x throughput',
    icon: Package,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Quality Inspection',
    description: 'Visual inspection at production speed. Catch defects, measure tolerances, and ensure compliance automatically.',
    metrics: '100% inspection',
    icon: Eye,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Material Handling',
    description: 'Heavy lifting, precise placement, and dangerous environment operation. Let robots handle what humans shouldn\'t.',
    metrics: '500kg payload',
    icon: Zap,
    color: 'from-purple-500 to-cyber-500',
  },
]

const metrics = [
  { value: '10x', label: 'Efficiency Gain', description: 'vs manual processes' },
  { value: '99.9%', label: 'Uptime', description: 'Continuous operation' },
  { value: '90%', label: 'Defect Reduction', description: 'Quality improvement' },
  { value: '<6mo', label: 'ROI Timeline', description: 'Average payback' },
]

const safetyStandards = [
  { standard: 'ISO 10218', description: 'Robot Safety' },
  { standard: 'ISO/TS 15066', description: 'Collaborative Robots' },
  { standard: 'IEC 62443', description: 'Industrial Cybersecurity' },
  { standard: 'CE Marking', description: 'European Conformity' },
]

export function IndustrialRobotics() {
  const capabilitiesRef = useRef(null)
  const applicationsRef = useRef(null)
  const isCapabilitiesInView = useInView(capabilitiesRef, { once: true, margin: '-100px' })
  const isApplicationsInView = useInView(applicationsRef, { once: true, margin: '-100px' })

  return (
    <>
      <PageHero
        icon={Factory}
        category="Industrial Robotics"
        title="Factory Intelligence"
        subtitle="The autonomous factories of tomorrow"
        description="Our industrial robots don't just execute—they learn, adapt, and optimize. Using reinforcement learning and computer vision, these systems continuously improve manufacturing processes, predict maintenance needs, and collaborate safely with human workers. We're building the autonomous factories of tomorrow."
        gradient="from-cyber-500 to-blue-500"
        status="developing"
        features={[
          'Self-Optimizing',
          'Predictive Maintenance',
          'Human-Safe Collaboration',
          'Real-time QC',
          'Flexible Manufacturing',
          '24/7 Operation',
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
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyber-500 to-blue-500 bg-clip-text text-transparent mb-2">
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

      {/* Capabilities Section */}
      <section ref={capabilitiesRef} className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyber-600/10 rounded-full blur-3xl -translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCapabilitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-cyber-400 mb-6">
              Core Capabilities
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Intelligence that{' '}
              <span className="bg-gradient-to-r from-cyber-500 to-blue-500 bg-clip-text text-transparent">
                never stops improving
              </span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Every operation teaches our robots something new. Every cycle is an opportunity for optimization.
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
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyber-500/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <cap.icon className="w-7 h-7 text-cyber-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
                <p className="text-neutral-400">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section ref={applicationsRef} className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isApplicationsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-blue-400 mb-6">
              Applications
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Transforming{' '}
              <span className="bg-gradient-to-r from-cyber-500 to-blue-500 bg-clip-text text-transparent">
                manufacturing
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {applications.map((app, i) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isApplicationsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass rounded-3xl p-8 hover-lift"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center`}>
                    <app.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${app.color} text-white`}>
                    {app.metrics}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{app.title}</h3>
                <p className="text-neutral-400">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Compliance Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Safety & Compliance</h3>
            <p className="text-neutral-400">Meeting and exceeding global industrial standards</p>
          </motion.div>

          <div className="glass rounded-3xl p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {safetyStandards.map((standard, i) => (
                <motion.div
                  key={standard.standard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-4 rounded-2xl bg-white/5"
                >
                  <Shield className="w-8 h-8 text-cyber-400 mx-auto mb-3" />
                  <div className="font-bold text-white mb-1">{standard.standard}</div>
                  <div className="text-sm text-neutral-500">{standard.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 text-center"
          >
            <RefreshCw className="w-12 h-12 text-cyber-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Seamless integration with your existing systems
            </h2>
            <p className="text-lg text-neutral-400 mb-8">
              Our robots integrate with existing PLCs, MES, ERP, and SCADA systems. No rip-and-replace required—we enhance what you already have.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['Siemens', 'Rockwell', 'ABB', 'Fanuc', 'KUKA', 'Universal Robots'].map((partner) => (
                <span
                  key={partner}
                  className="px-4 py-2 rounded-lg bg-white/5 text-neutral-300"
                >
                  {partner}
                </span>
              ))}
            </div>
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyber-500 to-blue-500 text-white font-medium text-lg hover:opacity-90 transition-opacity">
              Schedule Factory Assessment
            </button>
          </motion.div>
        </div>
      </section>

      <Contact />
    </>
  )
}
