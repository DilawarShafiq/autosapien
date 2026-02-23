import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, FileCheck, AlertCircle, DollarSign, Clock, Zap, BarChart3, RefreshCw } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { Contact } from '../components/Contact'

const features = [
  {
    icon: FileCheck,
    title: 'Automated Claim Submission',
    description: 'AI-powered claim scrubbing and submission with real-time eligibility verification and prior authorization.',
  },
  {
    icon: AlertCircle,
    title: 'Denial Management',
    description: 'Intelligent denial prediction, root cause analysis, and automated appeal generation with 85% success rate.',
  },
  {
    icon: DollarSign,
    title: 'Payment Posting',
    description: 'Automated ERA/EOB processing with intelligent payment matching and variance identification.',
  },
  {
    icon: RefreshCw,
    title: 'A/R Follow-up',
    description: 'Prioritized worklists with AI-driven collection strategies and automated patient outreach.',
  },
  {
    icon: BarChart3,
    title: 'Revenue Analytics',
    description: 'Real-time dashboards with predictive revenue forecasting and performance benchmarking.',
  },
  {
    icon: Clock,
    title: 'Prior Authorization',
    description: 'Automated prior auth requests with intelligent payer routing and status tracking.',
  },
]

const metrics = [
  { value: '98%', label: 'Clean Claim Rate', description: 'First-pass acceptance' },
  { value: '45%', label: 'Faster Collections', description: 'Days in A/R reduced' },
  { value: '85%', label: 'Appeal Success', description: 'Denial overturn rate' },
  { value: '10x', label: 'Productivity', description: 'Staff efficiency gain' },
]

const workflow = [
  {
    step: '01',
    title: 'Charge Capture',
    description: 'AI automatically extracts charges from clinical documentation with 99% accuracy.',
    icon: FileCheck,
  },
  {
    step: '02',
    title: 'Claim Scrubbing',
    description: 'Multi-layer validation against payer rules, LCD/NCD policies, and coding guidelines.',
    icon: AlertCircle,
  },
  {
    step: '03',
    title: 'Submission',
    description: 'Intelligent routing to clearinghouses with real-time status tracking.',
    icon: Zap,
  },
  {
    step: '04',
    title: 'Payment & Posting',
    description: 'Automated reconciliation with variance alerts and underpayment detection.',
    icon: DollarSign,
  },
]

const painPoints = [
  { problem: 'High Denial Rates', solution: 'AI predicts denials before submission' },
  { problem: 'Slow Collections', solution: 'Automated follow-up reduces DSO by 45%' },
  { problem: 'Manual Data Entry', solution: '90% reduction in manual work' },
  { problem: 'Compliance Risk', solution: 'Real-time compliance monitoring' },
  { problem: 'Staff Burnout', solution: 'AI handles repetitive tasks' },
  { problem: 'Revenue Leakage', solution: 'Capture 100% of earned revenue' },
]

export function RCMAutomation() {
  const featuresRef = useRef(null)
  const workflowRef = useRef(null)
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: '-100px' })
  const isWorkflowInView = useInView(workflowRef, { once: true, margin: '-100px' })

  return (
    <>
      <PageHero
        icon={TrendingUp}
        category="Revenue Cycle"
        title="RCM Automation"
        subtitle="Maximize revenue with intelligent automation"
        description="End-to-end revenue cycle management powered by agentic AI. From charge capture to payment posting, our platform automates the entire billing workflow while maximizing reimbursement."
        gradient="from-violet-500 to-purple-500"
        features={[
          'Claim Automation',
          'Denial Prevention',
          'Payment Posting',
          'Prior Auth AI',
          'A/R Management',
          'Revenue Analytics',
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
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent mb-2">
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
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-violet-400 mb-6">
              Platform Features
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Automate your{' '}
              <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
                revenue cycle
              </span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Our AI agents handle every step of the revenue cycle, from eligibility to payment.
            </p>
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
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-neutral-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section ref={workflowRef} className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-3xl -translate-y-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWorkflowInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-purple-400 mb-6">
              Automated Workflow
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              From charge to{' '}
              <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
                cash
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isWorkflowInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative"
              >
                {i < workflow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-violet-500/50 to-transparent" />
                )}
                <div className="glass rounded-3xl p-8 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-3xl font-bold text-violet-500/30">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-neutral-400 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Solving Real Problems</h3>
            <p className="text-neutral-400">Common RCM challenges and how we solve them</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {painPoints.map((item, i) => (
              <motion.div
                key={item.problem}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-2xl p-6"
              >
                <div className="text-red-400 text-sm font-medium mb-2 line-through opacity-60">
                  {item.problem}
                </div>
                <div className="text-white font-medium flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  {item.solution}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  )
}
