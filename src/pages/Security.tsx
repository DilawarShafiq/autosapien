import { motion } from 'framer-motion'
import { Lock, ArrowLeft, Shield, Server, Eye, Key, RefreshCw, AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'

const securityMeasures = [
  {
    icon: Key,
    title: 'Encryption',
    description: 'AES-256 encryption at rest across all databases and storage. TLS 1.3 for all data in transit. End-to-end encryption for sensitive healthcare communications.',
  },
  {
    icon: Shield,
    title: 'Access Control',
    description: 'Role-based access control (RBAC) with principle of least privilege. Multi-factor authentication enforced for all administrative access. SSO integration available for enterprise clients.',
  },
  {
    icon: Eye,
    title: 'Monitoring & Detection',
    description: '24/7 security monitoring with automated threat detection. Real-time alerting for suspicious activities. Comprehensive audit logging for all system access and data operations.',
  },
  {
    icon: Server,
    title: 'Infrastructure',
    description: 'Deployed on Google Cloud Platform with SOC 2 certified data centers. Network segmentation and Web Application Firewalls (WAF). Automated vulnerability scanning on every deployment.',
  },
  {
    icon: RefreshCw,
    title: 'Business Continuity',
    description: 'Automated backups with geographic redundancy. 99.99% uptime SLA with failover capabilities. Disaster recovery plans tested quarterly with documented RTO and RPO targets.',
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response',
    description: 'Documented incident response plan with defined severity levels. Breach notification within 72 hours as required by regulations. Post-incident reviews and remediation tracking.',
  },
]

export function Security() {
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
                <Lock className="w-6 h-6 text-sky-600" />
              </div>
              <div>
                <span className="label-mono text-sky-600 text-[10px]">Legal</span>
                <h1 className="font-display font-bold text-display-lg text-ink-900">Security</h1>
              </div>
            </div>
            <p className="text-ink-500 font-body text-lg max-w-2xl leading-relaxed">
              Security is foundational to everything we build. From healthcare AI to humanoid robotics, we apply enterprise-grade security across all systems.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16" style={{ background: '#ffffff' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-5 mb-16">
            {securityMeasures.map((measure, i) => (
              <motion.div
                key={measure.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06 }}
                className="card-clean p-6 rounded-xl hover-glow hover:border-sky-200/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-100 flex items-center justify-center mb-4 group-hover:bg-sky-50 group-hover:scale-105 transition-all">
                  <measure.icon className="w-5 h-5 text-ink-500 group-hover:text-sky-600 transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-ink-900 mb-2">{measure.title}</h3>
                <p className="text-sm text-ink-500 font-body leading-relaxed">{measure.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="font-display font-bold text-xl text-ink-900 mb-4">Compliance & Certifications</h2>
              <p className="text-ink-600 font-body leading-relaxed mb-4">Our platforms maintain compliance with:</p>
              <ul className="space-y-2">
                {[
                  'HIPAA — Full compliance for all healthcare data handling, including PHI encryption, access controls, and audit trails',
                  'SOC 2 Type II — Annual audits covering security, availability, processing integrity, confidentiality, and privacy',
                  'FHIR R4 — Healthcare interoperability standard compliance for all clinical data exchange',
                  'OWASP Top 10 — Continuous security testing against common web application vulnerabilities',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-ink-600 font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink-900 mb-4">Responsible AI Security</h2>
              <p className="text-ink-600 font-body leading-relaxed">
                Our AI models are developed with security-first principles. We implement adversarial testing, model output validation, prompt injection protections, and human-in-the-loop safeguards for critical decisions. AI systems handling healthcare data operate within isolated, HIPAA-compliant environments with strict data boundaries.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink-900 mb-4">Reporting Vulnerabilities</h2>
              <p className="text-ink-600 font-body leading-relaxed">
                If you discover a security vulnerability in any of our systems, please report it responsibly to{' '}
                <a href="mailto:security@autosapien.com" className="text-sky-600 hover:text-sky-700 transition-colors">security@autosapien.com</a>.
                We appreciate the security research community and will acknowledge verified reports.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
