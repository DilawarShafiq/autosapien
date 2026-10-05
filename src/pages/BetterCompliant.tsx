import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, FileCheck, FolderSync, ClipboardList, BarChart3, ArrowUpRight } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { Contact } from '../components/Contact'

const capabilities = [
  {
    icon: ShieldCheck,
    title: 'HIPAA / SOC 2 Workflows',
    description:
      'Compliance work for HIPAA and SOC 2 runs as structured workflows, so every control has an owner, a status and a next step instead of living in a spreadsheet.',
  },
  {
    icon: FolderSync,
    title: 'Evidence Auto-Collection',
    description:
      'Evidence is gathered continuously as the work happens, rather than assembled by hand in the weeks before an audit.',
  },
  {
    icon: ClipboardList,
    title: 'Policy Lifecycle',
    description:
      'Policies are drafted, approved, published and reviewed on a schedule, with each version and sign-off kept on record.',
  },
  {
    icon: BarChart3,
    title: 'Audit-Ready Reporting',
    description:
      'A living dashboard shows where the organization stands at any moment, so it stays audit-ready every day, not just at renewal.',
  },
]

export function BetterCompliant() {
  const capRef = useRef(null)
  const isCapInView = useInView(capRef, { once: true, margin: '-100px' })

  return (
    <div style={{ background: '#fafafa' }}>
      <PageHero
        icon={FileCheck}
        category="Compliance Platform"
        title="BetterCompliant"
        subtitle="Compliance, automated end-to-end"
        description="BetterCompliant is a continuous compliance platform for healthcare and regulated SaaS. It turns sprawling policy, evidence and audit work into a living dashboard, so teams stay audit-ready every day, not just at renewal. Built by Autosapien for XEHR LLC."
        gradient="from-indigo-500 to-sky-500"
        status="active"
        features={[
          'HIPAA / SOC 2 Workflows',
          'Evidence Auto-Collection',
          'Policy Lifecycle',
          'Audit-Ready Reporting',
        ]}
      />

      {/* Capabilities */}
      <section ref={capRef} className="relative py-32 dot-grid" style={{ background: '#ffffff', overflowX: 'clip' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(60%,400px)] h-px bg-gradient-to-r from-transparent via-sky-300/20 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="label-mono text-sky-600 mb-4 block">Capabilities</span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Audit-ready <span className="text-sky-500">every day</span>, not just at renewal.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isCapInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                className="card-clean hover-glow hover:border-sky-200/50 transition-colors rounded-xl p-7 group"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mb-5 group-hover:bg-sky-100 group-hover:scale-105 transition-all">
                  <cap.icon className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-lg font-bold text-ink-900 mb-2 leading-snug">{cap.title}</h3>
                <p className="text-[14px] text-ink-500 leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://bettercompliant.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-surface-200 bg-white hover:border-sky-200 transition-colors font-display font-semibold text-sm text-ink-900"
            >
              Visit bettercompliant.com
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}
