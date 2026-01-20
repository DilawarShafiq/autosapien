import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, Database, Shield, Bot, FileText, Activity, Clock, DollarSign, Users, Zap, CheckCircle, ArrowRight } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { Contact } from '../components/Contact'

const coreModules = [
  {
    icon: Database,
    title: 'Intelligent EHR',
    description: 'FHIR R4-native electronic health records with AI-assisted documentation. Capture clinical encounters in real-time with voice-to-text and contextual suggestions.',
    features: ['FHIR R4 Native', 'Voice Documentation', 'Smart Templates', 'Mobile Access'],
  },
  {
    icon: Users,
    title: 'Practice Management',
    description: 'Complete practice operations from scheduling to staff management. Optimize patient flow, reduce no-shows, and maximize provider utilization.',
    features: ['Smart Scheduling', 'Multi-location', 'Staff Management', 'Resource Planning'],
  },
  {
    icon: DollarSign,
    title: 'Revenue Cycle Automation',
    description: 'AI agents that work 24/7 on claims, denials, and payments. Achieve 98% clean claim rates and accelerate collections without adding staff.',
    features: ['98% Clean Claims', 'Auto Denial Appeals', 'Payment Posting', 'AR Management'],
  },
  {
    icon: Bot,
    title: 'AI Agent Workforce',
    description: 'Autonomous agents handling intake, eligibility, prior authorizations, and coding. The administrative burden crushing healthcare—eliminated.',
    features: ['Intake Automation', 'Eligibility Verification', 'Prior Auth AI', 'Medical Coding'],
  },
]

const aiCapabilities = [
  {
    icon: FileText,
    title: 'Clinical Documentation AI',
    description: 'AI that listens, understands, and documents. Capture complete clinical encounters while maintaining eye contact with patients.',
  },
  {
    icon: Activity,
    title: 'Clinical Decision Support',
    description: 'Real-time alerts, drug interactions, and evidence-based recommendations. AI that helps clinicians make better decisions.',
  },
  {
    icon: Zap,
    title: 'Autonomous Prior Auth',
    description: 'AI agents that navigate payer portals, submit requests, and follow up automatically. Prior auth in minutes, not days.',
  },
  {
    icon: CheckCircle,
    title: 'Intelligent Medical Coding',
    description: '99.2% accuracy on ICD-10, CPT, and HCC codes. AI coding that captures full acuity while ensuring compliance.',
  },
]

const metrics = [
  { value: '2M+', label: 'Patient Records', description: 'Managed securely' },
  { value: '98%', label: 'Clean Claim Rate', description: 'First-pass acceptance' },
  { value: '70%', label: 'Admin Time Saved', description: 'For clinical staff' },
  { value: '15%', label: 'Revenue Increase', description: 'Average improvement' },
]

const compliance = [
  { badge: 'HIPAA', description: 'Fully Compliant' },
  { badge: 'SOC 2', description: 'Type II Certified' },
  { badge: 'FHIR R4', description: 'Native Support' },
  { badge: 'ONC', description: 'Certified' },
]

const americanHealthcare = [
  {
    problem: 'Burnout epidemic—62% of physicians report symptoms',
    solution: 'AI documentation reduces charting time by 70%',
  },
  {
    problem: 'Administrative costs consume 34% of healthcare spending',
    solution: 'Autonomous agents handle routine tasks 24/7',
  },
  {
    problem: 'Prior authorization delays care for millions',
    solution: 'AI completes prior auths in minutes, not days',
  },
  {
    problem: 'Claim denials cost providers billions annually',
    solution: '98% clean claim rate with intelligent validation',
  },
]

export function HealthcareIT() {
  const modulesRef = useRef(null)
  const aiRef = useRef(null)
  const impactRef = useRef(null)
  const isModulesInView = useInView(modulesRef, { once: true, margin: '-100px' })
  const isAiInView = useInView(aiRef, { once: true, margin: '-100px' })
  const isImpactInView = useInView(impactRef, { once: true, margin: '-100px' })

  return (
    <>
      <PageHero
        icon={Heart}
        category="Healthcare AI"
        title="xEHR.io Platform"
        subtitle="The intelligent healthcare platform transforming American medicine"
        description="xEHR.io combines a FHIR R4-native EHR, comprehensive practice management, and autonomous revenue cycle automation into a single platform. Powered by AI agents that work 24/7, we're eliminating the administrative burden crushing American healthcare—so providers can focus on what matters: patients."
        gradient="from-rose-500 to-pink-500"
        status="launching"
        features={[
          'FHIR R4 Native',
          'AI Documentation',
          '98% Clean Claims',
          'Autonomous RCM',
          'HIPAA Compliant',
          'SOC 2 Certified',
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
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-2">
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

      {/* Core Modules Section */}
      <section ref={modulesRef} className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-3xl -translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isModulesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-rose-400 mb-6">
              Platform Modules
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              One platform.{' '}
              <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                Complete healthcare operations.
              </span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Everything healthcare organizations need—unified, intelligent, and working together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {coreModules.map((module, i) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isModulesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass rounded-3xl p-8 hover-lift"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <module.icon className="w-7 h-7 text-rose-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
                    <p className="text-neutral-400 text-sm">{module.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {module.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-lg bg-white/5 text-xs text-neutral-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section ref={aiRef} className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-3xl -translate-y-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isAiInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-pink-400 mb-6">
              AI-Powered Features
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Healthcare AI that{' '}
              <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                actually works
              </span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Not demos or proofs of concept—production AI handling millions of real healthcare transactions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {aiCapabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isAiInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass rounded-3xl p-8 hover-lift group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <cap.icon className="w-7 h-7 text-rose-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
                <p className="text-neutral-400">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact on American Healthcare Section */}
      <section ref={impactRef} className="relative py-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isImpactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-rose-400 mb-6">
              Why It Matters
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Healing{' '}
              <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                American healthcare
              </span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              America's healthcare system is drowning in administrative burden. We're building the technology to change that.
            </p>
          </motion.div>

          <div className="space-y-4">
            {americanHealthcare.map((item, i) => (
              <motion.div
                key={item.problem}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={isImpactInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-4"
              >
                <div className="flex-1">
                  <div className="text-neutral-500 text-sm mb-1">The Problem</div>
                  <div className="text-white font-medium">{item.problem}</div>
                </div>
                <ArrowRight className="w-6 h-6 text-rose-400 hidden md:block" />
                <div className="flex-1">
                  <div className="text-rose-400 text-sm mb-1">Our Solution</div>
                  <div className="text-white font-medium">{item.solution}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Enterprise Compliance</h3>
            <p className="text-neutral-400">Meeting the highest standards in healthcare security and interoperability</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {compliance.map((item, i) => (
              <motion.div
                key={item.badge}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl px-8 py-6 text-center"
              >
                <Shield className="w-8 h-8 text-rose-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{item.badge}</div>
                <div className="text-sm text-neutral-500">{item.description}</div>
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
            className="glass rounded-3xl p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-pink-500/10" />
            <div className="relative">
              <Clock className="w-12 h-12 text-rose-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to transform your practice?
              </h2>
              <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
                See how xEHR.io can reduce administrative burden, accelerate collections, and let your team focus on patients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-medium text-lg hover:opacity-90 transition-opacity">
                  Schedule Demo
                </button>
                <a
                  href="https://xehr.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-2xl glass text-white font-medium text-lg hover:bg-white/10 transition-colors"
                >
                  Visit xEHR.io
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Contact />
    </>
  )
}
