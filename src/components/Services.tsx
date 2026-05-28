import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Stethoscope, Workflow, Network, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'

const services = [
  {
    code: 'SRV-01',
    icon: Stethoscope,
    title: 'Custom EHR & Practice Management Development',
    pitch: 'A modern EHR built for your specialty—not the other way around.',
    description:
      'We design and develop EHR / PM systems from the ground up for USA-based practices that have outgrown their current software. FHIR R4–native, billing-grade, HIPAA-secure, and tuned to how your clinicians actually work.',
    deliverables: [
      'Specialty-specific charting & templates',
      'FHIR R4 + HL7 integrations (labs, pharmacy, clearinghouses)',
      'Scheduling, eligibility, and patient portal',
      'Role-based access with full HIPAA audit trail',
      'Migration from Athena, eCW, Kareo, NextGen, Practice Fusion',
    ],
    fit: 'Best for: independent practices, multi-location groups, specialty clinics that outgrew legacy SaaS.',
  },
  {
    code: 'SRV-02',
    icon: Workflow,
    title: 'Administrative Workflow Automation',
    pitch: 'Replace the spreadsheets, the back-and-forth, and the hire-more-people reflex.',
    description:
      'We automate the unglamorous administrative work that drains US healthcare practices: prior auths, eligibility, faxes, denials, statements, scheduling triage, and inbox management—wired together with auditable AI agents.',
    deliverables: [
      'Prior authorization automation',
      'Insurance eligibility & benefits verification',
      'Inbound fax + document classification',
      'Denial work queues with AI-drafted appeals',
      'Patient outreach via SMS, email, and voice',
    ],
    fit: 'Best for: practices spending more on admin labor than on clinical care.',
  },
  {
    code: 'SRV-03',
    icon: Network,
    title: 'Custom Multi-Agentic Workflows',
    pitch: 'Fleets of specialised AI agents, coordinated to run an entire department.',
    description:
      'We design custom agent fleets for clients—planner, executor, reviewer, and human-in-the-loop roles bound together with policy, memory, and observability. Each agent has a job; the orchestrator makes them work as a team.',
    deliverables: [
      'Multi-agent orchestration (LangGraph / DAPR / custom)',
      'Tool-use, RAG, and long-running task memory',
      'Policy enforcement & escalation paths',
      'Full observability — traces, costs, decisions',
      'Production deployment on GCP / AWS / on-prem',
    ],
    fit: 'Best for: enterprises with complex back-office workflows that no single SaaS can model.',
    featured: true,
    caseStudy: {
      name: 'Agent SMITH',
      label: 'Active Engagement',
      blurb:
        'Currently in development for an enterprise client—Agent SMITH is a custom multi-agentic platform orchestrating specialised agents across the client’s operations stack.',
    },
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="relative py-24 sm:py-40 dot-grid" style={{ background: '#fafafa', overflowX: 'clip' }}>
      {/* Top hairline */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(80%,600px)] h-px bg-gradient-to-r from-transparent via-sky-300/40 to-transparent" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-sky-300/50" />
            <span className="label-mono text-sky-600">Services & Custom Projects</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-sky-300/50" />
          </div>
          <h2 className="font-display font-bold text-display-lg mb-5">
            Engineered for your practice. <br className="hidden sm:block" />
            Owned by you.
          </h2>
          <p className="text-base sm:text-lg text-ink-400 font-body leading-relaxed">
            Beyond our shipped products, we build bespoke software for USA healthcare practices and
            enterprises that have outgrown off-the-shelf SaaS. You get a partner, full source code,
            and a system that fits the way you actually work.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.code}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
              className={`relative ${service.featured ? 'lg:row-span-1' : ''}`}
            >
              <article className={`relative h-full p-7 sm:p-8 rounded-2xl bg-white border ${service.featured ? 'border-sky-200 ring-1 ring-sky-200/40' : 'border-surface-200'} transition-all duration-500 hover:-translate-y-1 hover:border-sky-300/60 hover:shadow-[0_0_40px_-10px_rgba(0,133,212,0.25)] overflow-hidden flex flex-col`}>
                {/* Featured badge */}
                {service.featured && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/80 to-transparent" />
                    <span className="absolute top-4 right-5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-[0.15em] bg-sky-500/10 text-sky-700 border border-sky-300/40">
                      <Sparkles className="w-3 h-3" />
                      Live engagement
                    </span>
                  </>
                )}

                {/* Code marker */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-sky-600" />
                  </div>
                  {!service.featured && (
                    <span className="font-mono text-[10px] text-ink-400 tracking-[0.15em]">{service.code}</span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-ink-900 mb-3 leading-tight">
                  {service.title}
                </h3>

                {/* Pitch */}
                <p className="font-display font-semibold text-sky-700 text-[14px] mb-4 leading-snug">
                  {service.pitch}
                </p>

                {/* Description */}
                <p className="text-ink-500 font-body text-[14px] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="mb-6">
                  <div className="label-mono text-[10px] mb-3">What we deliver</div>
                  <ul className="space-y-2">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-[13px] text-ink-700 font-body leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 mt-0.5 flex-shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Case study (only for featured) */}
                {service.caseStudy && (
                  <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-sky-50 to-sky-50/40 border border-sky-200/60">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="status-dot developing" />
                      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-sky-700">
                        Case study · {service.caseStudy.label}
                      </span>
                    </div>
                    <div className="font-display font-bold text-ink-900 mb-1">
                      {service.caseStudy.name}
                    </div>
                    <p className="text-[13px] text-ink-600 font-body leading-relaxed">
                      {service.caseStudy.blurb}
                    </p>
                  </div>
                )}

                {/* Fit + spacer */}
                <div className="flex-1" />

                <div className="pt-5 border-t border-surface-200">
                  <p className="text-[12px] text-ink-500 font-body italic leading-snug">
                    {service.fit}
                  </p>
                </div>
              </article>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-14 relative overflow-hidden rounded-2xl border border-ink-900/90 bg-ink-900 text-white"
        >
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 dot-grid-dark opacity-40 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-[1fr_auto] items-center gap-6 px-6 sm:px-10 py-8 sm:py-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="status-dot active" />
                <span className="label-mono-white text-[10px] text-sky-400">Booking engagements · 2026</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl mb-2 text-white">
                Have a workflow that no SaaS can solve?
              </h3>
              <p className="text-white/60 font-body text-[15px] max-w-xl">
                Tell us what your team does manually today. We&rsquo;ll come back with an agent fleet,
                a custom platform, or a clean integration—whichever fits the problem.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white text-ink-900 font-display font-semibold text-sm hover:bg-sky-400 hover:text-white transition-all duration-300 group whitespace-nowrap"
            >
              Scope a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
