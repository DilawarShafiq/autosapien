import { motion } from 'framer-motion'
import { FileText, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Terms() {
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
                <FileText className="w-6 h-6 text-sky-600" />
              </div>
              <div>
                <span className="label-mono text-sky-600 text-[10px]">Legal</span>
                <h1 className="font-display font-bold text-display-lg text-ink-900">Terms of Service</h1>
              </div>
            </div>
            <p className="text-ink-400 font-body mb-2">Last updated: February 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16" style={{ background: '#ffffff' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-10">
            <div>
              <h2 className="font-display font-bold text-xl text-ink-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-ink-600 font-body leading-relaxed">
                By accessing or using any services provided by Autosapien (Pvt) Ltd ("Autosapien"), including our websites (autosapien.com, xehr.io, rcmemployee.com), software platforms, and APIs, you agree to be bound by these Terms of Service. If you do not agree, do not use our services.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink-900 mb-4">2. Services</h2>
              <p className="text-ink-600 font-body leading-relaxed mb-4">Autosapien provides:</p>
              <ul className="space-y-2">
                {[
                  'AI-powered healthcare platforms (xEHR.io) including EHR, practice management, and revenue cycle automation',
                  'Agentic AI employees and workflow automation (RCM Employee)',
                  'Robotics research and development (humanoid, industrial, and home robotics)',
                  'AI film production and foundation model research',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-ink-600 font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink-900 mb-4">3. User Accounts</h2>
              <p className="text-ink-600 font-body leading-relaxed mb-4">
                Certain services require account registration. You are responsible for maintaining the confidentiality of your credentials and for all activities under your account. You agree to provide accurate information and notify us immediately of any unauthorized access.
              </p>
              <p className="text-ink-600 font-body leading-relaxed">
                For healthcare platform accounts, additional identity verification may be required to comply with HIPAA and healthcare regulations.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink-900 mb-4">4. Acceptable Use</h2>
              <p className="text-ink-600 font-body leading-relaxed mb-3">You agree not to:</p>
              <ul className="space-y-2">
                {[
                  'Use our services for any unlawful purpose or in violation of any regulations',
                  'Attempt to gain unauthorized access to our systems or other users\' accounts',
                  'Reverse engineer, decompile, or disassemble any of our proprietary technology',
                  'Transmit malware, viruses, or other harmful code through our platforms',
                  'Use our AI systems to generate harmful, misleading, or fraudulent content',
                  'Resell or redistribute our services without written authorization',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-ink-600 font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink-900 mb-4">5. Intellectual Property</h2>
              <p className="text-ink-600 font-body leading-relaxed">
                All content, software, algorithms, models, designs, and technology comprising our services are owned by Autosapien or our licensors and are protected by intellectual property laws. Our AI models, robotics designs, and healthcare platform architecture are proprietary. You retain ownership of data you input into our platforms, subject to the licenses necessary for us to provide the services.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink-900 mb-4">6. Healthcare-Specific Terms</h2>
              <p className="text-ink-600 font-body leading-relaxed mb-4">
                For users of xEHR.io and RCM Employee:
              </p>
              <ul className="space-y-2">
                {[
                  'Our AI tools assist clinical decision-making but do not replace professional medical judgment',
                  'Healthcare providers remain responsible for clinical decisions and patient care',
                  'Use of healthcare services requires execution of a Business Associate Agreement (BAA)',
                  'You are responsible for ensuring your use complies with applicable healthcare regulations',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-ink-600 font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-ink-600 font-body leading-relaxed">
                To the maximum extent permitted by law, Autosapien shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, or goodwill. Our total liability for any claim arising from these terms or our services shall not exceed the amount paid by you to Autosapien in the twelve months preceding the claim.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink-900 mb-4">8. Termination</h2>
              <p className="text-ink-600 font-body leading-relaxed">
                We may suspend or terminate your access to our services at any time for violation of these terms or for any reason with reasonable notice. Upon termination, you may request export of your data within 30 days. For healthcare data, we will comply with applicable retention requirements.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink-900 mb-4">9. Governing Law</h2>
              <p className="text-ink-600 font-body leading-relaxed">
                These terms are governed by the laws of Pakistan. For US healthcare services, applicable US federal and state healthcare regulations also apply. Disputes shall be resolved through binding arbitration in Lahore, Pakistan, except where prohibited by applicable law.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink-900 mb-4">10. Contact</h2>
              <p className="text-ink-600 font-body leading-relaxed">
                Questions about these terms? Contact us at{' '}
                <a href="mailto:legal@autosapien.com" className="text-sky-600 hover:text-sky-700 transition-colors">legal@autosapien.com</a>.
              </p>
              <p className="text-ink-600 font-body leading-relaxed mt-2">
                Autosapien (Pvt) Ltd — Lahore, Pakistan
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
