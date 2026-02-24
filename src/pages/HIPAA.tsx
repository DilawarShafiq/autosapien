import { motion } from 'framer-motion'
import { Heart, ArrowLeft, Shield, Lock, Database, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const hipaaControls = [
  { icon: Lock, title: 'Administrative Safeguards', items: ['Designated Privacy & Security Officers', 'Workforce training on PHI handling', 'Access management and authorization policies', 'Incident response and breach notification procedures', 'Regular risk assessments and remediation'] },
  { icon: Shield, title: 'Physical Safeguards', items: ['SOC 2 certified Google Cloud data centers', 'Physical access controls and monitoring', 'Workstation security policies', 'Device and media disposal procedures'] },
  { icon: Database, title: 'Technical Safeguards', items: ['AES-256 encryption for PHI at rest', 'TLS 1.3 encryption for PHI in transit', 'Unique user identification and MFA', 'Automatic session timeout and audit controls', 'Emergency access procedures'] },
]

export function HIPAA() {
  return (
    <>
      <section className="relative pt-32 pb-16" style={{ background: '#fafafa' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/" className="inline-flex items-center gap-3 text-ink-400 hover:text-sky-600 transition-colors mb-10 group">
              <div className="w-9 h-9 rounded-full border border-surface-300 flex items-center justify-center group-hover:border-sky-400 group-hover:bg-sky-50 transition-all">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              </div>
              <span className="font-body text-sm">Back to Home</span>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center">
                <Heart className="w-6 h-6 text-sky-600" />
              </div>
              <div>
                <span className="label-mono text-sky-600 text-[10px]">Compliance</span>
                <h1 className="font-display font-bold text-display-lg text-ink-900">HIPAA Compliance</h1>
              </div>
            </div>
            <p className="text-ink-500 font-body text-lg max-w-2xl leading-relaxed">
              Autosapien's healthcare platforms — xEHR.io and RCM Employee — are built from the ground up for HIPAA compliance. Protecting patient data is not an afterthought; it's our foundation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16" style={{ background: '#ffffff' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-12">
            <div>
              <h2 className="font-display font-bold text-xl text-ink-900 mb-4">Our Commitment</h2>
              <p className="text-ink-600 font-body leading-relaxed mb-4">
                As a Business Associate under HIPAA, Autosapien implements comprehensive safeguards to protect the confidentiality, integrity, and availability of Protected Health Information (PHI). Our healthcare AI platforms process clinical data, revenue cycle information, and patient records — all under strict HIPAA-compliant controls.
              </p>
              <p className="text-ink-600 font-body leading-relaxed">
                We execute Business Associate Agreements (BAAs) with all covered entities and ensure our subcontractors and cloud providers maintain equivalent compliance standards.
              </p>
            </div>

            {hipaaControls.map((control, i) => (
              <motion.div
                key={control.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center">
                    <control.icon className="w-5 h-5 text-sky-600" />
                  </div>
                  <h2 className="font-display font-bold text-xl text-ink-900">{control.title}</h2>
                </div>
                <div className="card-clean rounded-xl p-6">
                  <ul className="space-y-3">
                    {control.items.map(item => (
                      <li key={item} className="flex items-start gap-3 text-ink-600 font-body">
                        <CheckCircle className="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            <div>
              <h2 className="font-display font-bold text-xl text-ink-900 mb-4">AI-Specific HIPAA Controls</h2>
              <p className="text-ink-600 font-body leading-relaxed mb-4">
                Our AI systems that process PHI operate under additional safeguards:
              </p>
              <ul className="space-y-2">
                {[
                  'AI models are trained on de-identified data; PHI is never used in model training',
                  'All AI inference on PHI occurs within HIPAA-compliant isolated environments',
                  'AI outputs involving clinical data are logged and auditable',
                  'Human-in-the-loop review for critical clinical AI decisions',
                  'Model outputs are validated against clinical standards before delivery',
                  'Strict data boundaries prevent PHI from crossing tenant environments',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-ink-600 font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink-900 mb-4">Breach Notification</h2>
              <p className="text-ink-600 font-body leading-relaxed">
                In the event of a breach involving unsecured PHI, Autosapien will notify affected covered entities within 24 hours of discovery — well ahead of the HIPAA-required 60-day window. We maintain a documented incident response plan with clear escalation paths and remediation procedures.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink-900 mb-4">Request a BAA</h2>
              <p className="text-ink-600 font-body leading-relaxed">
                To request a Business Associate Agreement or ask about our HIPAA compliance program, contact our compliance team at{' '}
                <a href="mailto:compliance@autosapien.com" className="text-sky-600 hover:text-sky-700 transition-colors">compliance@autosapien.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
