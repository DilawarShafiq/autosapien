import { motion } from 'framer-motion'
import { Shield, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Privacy() {
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
                <Shield className="w-6 h-6 text-sky-600" />
              </div>
              <div>
                <span className="label-mono text-sky-600 text-[10px]">Legal</span>
                <h1 className="font-display font-bold text-display-lg text-ink-900">Privacy Policy</h1>
              </div>
            </div>
            <p className="text-ink-400 font-body mb-2">Last updated: February 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16" style={{ background: '#ffffff' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose-custom space-y-10">
            <div>
              <h2 className="font-display font-bold text-xl text-ink-900 mb-4">1. Introduction</h2>
              <p className="text-ink-600 font-body leading-relaxed mb-4">
                Autosapien (Pvt) Ltd ("Autosapien," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our websites (autosapien.com, xehr.io, rcmemployee.com) and use our products and services.
              </p>
              <p className="text-ink-600 font-body leading-relaxed">
                We build AI and robotics technologies including healthcare platforms that handle sensitive data. We take our responsibility to protect this data extremely seriously, applying industry-leading security standards across all operations.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink-900 mb-4">2. Information We Collect</h2>
              <h3 className="font-display font-semibold text-lg text-ink-800 mb-3">Personal Information</h3>
              <p className="text-ink-600 font-body leading-relaxed mb-3">When you interact with our services, we may collect:</p>
              <ul className="space-y-2 mb-4">
                {['Name, email address, and contact information', 'Company name and job title', 'Billing and payment information', 'Communication records when you contact us', 'Account credentials for our platforms'].map(item => (
                  <li key={item} className="flex items-start gap-3 text-ink-600 font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-display font-semibold text-lg text-ink-800 mb-3">Protected Health Information (PHI)</h3>
              <p className="text-ink-600 font-body leading-relaxed">
                For our healthcare products (xEHR.io, RCM Employee), we process PHI in accordance with HIPAA regulations. PHI is handled under Business Associate Agreements (BAAs) and is never used for marketing, advertising, or any purpose beyond providing healthcare services.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink-900 mb-4">3. How We Use Your Information</h2>
              <ul className="space-y-2">
                {[
                  'Providing, operating, and maintaining our products and services',
                  'Processing transactions and sending related communications',
                  'Improving and personalizing our services through analytics',
                  'Responding to inquiries and providing customer support',
                  'Complying with legal obligations including HIPAA requirements',
                  'Sending product updates and service notifications (with your consent)',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-ink-600 font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink-900 mb-4">4. Data Sharing & Disclosure</h2>
              <p className="text-ink-600 font-body leading-relaxed mb-4">
                We do not sell your personal information. We may share data with:
              </p>
              <ul className="space-y-2">
                {[
                  'Service providers who assist in operating our platforms (under strict contractual obligations)',
                  'Healthcare entities as required to provide clinical services (under BAAs)',
                  'Legal authorities when required by law or to protect our rights',
                  'Business partners with your explicit consent',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-ink-600 font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink-900 mb-4">5. Data Security</h2>
              <p className="text-ink-600 font-body leading-relaxed">
                We implement industry-standard security measures including AES-256 encryption at rest, TLS 1.3 in transit, role-based access controls, continuous monitoring, and regular third-party security audits. Our healthcare platforms maintain HIPAA and SOC 2 Type II compliance.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink-900 mb-4">6. Your Rights</h2>
              <p className="text-ink-600 font-body leading-relaxed mb-3">You have the right to:</p>
              <ul className="space-y-2">
                {[
                  'Access, correct, or delete your personal data',
                  'Opt out of marketing communications',
                  'Request a copy of your data in a portable format',
                  'Withdraw consent at any time',
                  'File a complaint with a data protection authority',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-ink-600 font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink-900 mb-4">7. Contact Us</h2>
              <p className="text-ink-600 font-body leading-relaxed">
                For privacy-related inquiries, contact us at{' '}
                <a href="mailto:privacy@autosapien.com" className="text-sky-600 hover:text-sky-700 transition-colors">privacy@autosapien.com</a>.
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
