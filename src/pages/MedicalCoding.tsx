import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FileText, Brain, Shield, CheckCircle, Target, BookOpen, AlertTriangle } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { Contact } from '../components/Contact'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Coding',
    description: 'Deep learning models trained on millions of medical records for accurate ICD-10, CPT, and HCPCS code assignment.',
  },
  {
    icon: CheckCircle,
    title: 'Real-time Validation',
    description: 'Instant validation against CCI edits, LCD/NCD policies, and payer-specific rules.',
  },
  {
    icon: BookOpen,
    title: 'CDI Integration',
    description: 'Clinical documentation improvement queries generated automatically to capture full acuity.',
  },
  {
    icon: Target,
    title: 'Risk Adjustment',
    description: 'HCC capture optimization for Medicare Advantage and value-based care contracts.',
  },
  {
    icon: Shield,
    title: 'Audit Defense',
    description: 'Complete audit trail with AI rationale for every code assignment.',
  },
  {
    icon: AlertTriangle,
    title: 'Compliance Alerts',
    description: 'Proactive identification of coding patterns that may trigger audits.',
  },
]

const codeTypes = [
  { code: 'ICD-10-CM', description: 'Diagnosis Codes', accuracy: '99.2%' },
  { code: 'ICD-10-PCS', description: 'Procedure Codes', accuracy: '98.8%' },
  { code: 'CPT', description: 'Professional Services', accuracy: '99.5%' },
  { code: 'HCPCS', description: 'Supplies & DME', accuracy: '99.1%' },
  { code: 'E/M', description: 'Evaluation & Management', accuracy: '98.9%' },
  { code: 'HCC', description: 'Risk Adjustment', accuracy: '97.5%' },
]

const metrics = [
  { value: '99.2%', label: 'Coding Accuracy', description: 'First-pass accuracy' },
  { value: '70%', label: 'Time Saved', description: 'Coding turnaround' },
  { value: '15%', label: 'Revenue Lift', description: 'Capture rate increase' },
  { value: '0', label: 'Audit Findings', description: 'For compliant clients' },
]

const process = [
  {
    step: '01',
    title: 'Document Ingestion',
    description: 'Clinical notes, lab results, and imaging reports are automatically ingested and parsed.',
  },
  {
    step: '02',
    title: 'NLP Analysis',
    description: 'Advanced NLP extracts diagnoses, procedures, and clinical indicators from unstructured text.',
  },
  {
    step: '03',
    title: 'Code Assignment',
    description: 'AI assigns appropriate codes with confidence scores and supporting documentation.',
  },
  {
    step: '04',
    title: 'Validation & QA',
    description: 'Multi-layer validation against coding guidelines and payer rules with human review for exceptions.',
  },
]

export function MedicalCoding() {
  const featuresRef = useRef(null)
  const processRef = useRef(null)
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: '-100px' })
  const isProcessInView = useInView(processRef, { once: true, margin: '-100px' })

  return (
    <>
      <PageHero
        icon={FileText}
        category="Medical Coding"
        title="AI Medical Coding"
        subtitle="Superhuman accuracy meets compliance"
        description="Our AI coding engine reads clinical documentation like an expert coder, assigning accurate codes in seconds while ensuring full compliance with payer requirements and coding guidelines."
        gradient="from-amber-500 to-orange-500"
        features={[
          'ICD-10 Coding',
          'CPT Assignment',
          'HCC Capture',
          'CDI Queries',
          'Audit Defense',
          'Real-time Validation',
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
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-2">
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

      {/* Code Types Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Comprehensive Code Coverage</h3>
            <p className="text-neutral-400">AI-powered coding across all major code sets</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {codeTypes.map((type, i) => (
              <motion.div
                key={type.code}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-2xl p-6 flex items-center justify-between"
              >
                <div>
                  <div className="text-xl font-bold text-white mb-1">{type.code}</div>
                  <div className="text-sm text-neutral-500">{type.description}</div>
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  {type.accuracy}
                </div>
              </motion.div>
            ))}
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
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-amber-400 mb-6">
              Platform Features
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Coding intelligence{' '}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                reimagined
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
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-neutral-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-3xl -translate-y-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-orange-400 mb-6">
              How It Works
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              From documentation to{' '}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                accurate codes
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative"
              >
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-amber-500/50 to-transparent" />
                )}
                <div className="glass rounded-3xl p-8 h-full">
                  <div className="text-5xl font-bold bg-gradient-to-br from-amber-500/20 to-orange-500/20 bg-clip-text text-transparent mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-neutral-400 text-sm">{step.description}</p>
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
