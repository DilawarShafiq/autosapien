import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Shield, Bot, TrendingUp, MessageSquare } from 'lucide-react'

type Product = {
  id: string
  name: string
  domain: string
  url: string
  logo: string
  tagline: string
  description: string
  capabilities: string[]
  metric: { value: string; label: string }
  status: 'live' | 'private-beta'
  category: string
  accent: typeof accents[number]
  icon: typeof Shield
  code: string
}

const accents = ['sky', 'teal', 'indigo', 'amber'] as const

const products: Product[] = [
  {
    id: 'xehr',
    name: 'xEHR.io',
    domain: 'xehr.io',
    url: 'https://xehr.io',
    logo: '/logos/xehr.png',
    tagline: 'AI-native EHR & Practice Management',
    description:
      'The intelligent healthcare platform purpose-built for USA practices. AI clinical documentation, autonomous RCM, and FHIR R4–native interoperability—replacing the legacy stack with a unified system that pays for itself.',
    capabilities: [
      'AI Clinical Documentation',
      'Autonomous Revenue Cycle',
      'FHIR R4 + HL7 Native',
      'HIPAA & SOC 2 Ready',
    ],
    metric: { value: '98%', label: 'Clean Claim Rate' },
    status: 'live',
    category: 'Healthcare Platform',
    accent: 'sky',
    icon: Shield,
    code: 'PROD-01',
  },
  {
    id: 'rcm-employee',
    name: 'RCM Employee',
    domain: 'rcmemployee.com',
    url: 'https://rcmemployee.com',
    logo: '/logos/rcmemployee.png',
    tagline: 'AI Revenue-Cycle Workforce',
    description:
      'An autonomous AI FTE that handles eligibility, coding, claims, denials, and posting—24/7, in plain English, with full audit trails. Drop-in productivity for billing teams without expanding headcount.',
    capabilities: [
      'Eligibility & Benefits',
      'Coding & Claim Scrubbing',
      'Denial Appeals',
      'Payment Posting',
    ],
    metric: { value: '24/7', label: 'Always-On Operations' },
    status: 'live',
    category: 'Agentic AI · FTE',
    accent: 'teal',
    icon: Bot,
    code: 'PROD-02',
  },
  {
    id: 'bettercompliant',
    name: 'BetterCompliant',
    domain: 'bettercompliant.com',
    url: 'https://bettercompliant.com',
    logo: '/logos/bettercompliant.png',
    tagline: 'Compliance, automated end-to-end',
    description:
      'Continuous compliance for healthcare and regulated SaaS. BetterCompliant turns sprawling policy, evidence, and audit work into a living dashboard—so you stay audit-ready every day, not just at renewal.',
    capabilities: [
      'HIPAA / SOC 2 Workflows',
      'Evidence Auto-Collection',
      'Policy Lifecycle',
      'Audit-Ready Reporting',
    ],
    metric: { value: '10x', label: 'Faster Audit Cycles' },
    status: 'live',
    category: 'Compliance Platform',
    accent: 'indigo',
    icon: Shield,
    code: 'PROD-03',
  },
  {
    id: 'thales',
    name: 'Thales',
    domain: 'thales.autosapien.com',
    url: '#',
    logo: '',
    tagline: 'Agentic Crypto Trading over WhatsApp',
    description:
      'A conversational trading agent that talks to clients over WhatsApp, generates signals, and executes autonomous trades on Binance. Risk-aware, policy-bound, and operating 24/7 across global markets.',
    capabilities: [
      'WhatsApp-Native Interface',
      'Binance Spot & Futures',
      'AI Signal Generation',
      'Autonomous Execution',
    ],
    metric: { value: '24/7', label: 'Market Coverage' },
    status: 'private-beta',
    category: 'FinTech · Agentic AI',
    accent: 'amber',
    icon: TrendingUp,
    code: 'PROD-04',
  },
]

const accentClasses: Record<Product['accent'], { ring: string; chip: string; dot: string; glow: string }> = {
  sky:    { ring: 'group-hover:ring-sky-300/50',    chip: 'text-sky-700 bg-sky-50 border-sky-200',       dot: 'bg-sky-500',    glow: 'group-hover:shadow-[0_0_60px_-15px_rgba(0,133,212,0.35)]' },
  teal:   { ring: 'group-hover:ring-teal-300/50',   chip: 'text-teal-700 bg-teal-50 border-teal-200',    dot: 'bg-teal-500',   glow: 'group-hover:shadow-[0_0_60px_-15px_rgba(20,184,166,0.35)]' },
  indigo: { ring: 'group-hover:ring-indigo-300/50', chip: 'text-indigo-700 bg-indigo-50 border-indigo-200', dot: 'bg-indigo-500', glow: 'group-hover:shadow-[0_0_60px_-15px_rgba(99,102,241,0.35)]' },
  amber:  { ring: 'group-hover:ring-amber-300/50',  chip: 'text-amber-700 bg-amber-50 border-amber-200', dot: 'bg-amber-500',  glow: 'group-hover:shadow-[0_0_60px_-15px_rgba(245,158,11,0.35)]' },
}

export function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="products" className="relative py-24 sm:py-40" style={{ background: '#ffffff', overflowX: 'clip' }}>
      {/* Top hairline */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(80%,600px)] h-px bg-gradient-to-r from-transparent via-sky-300/40 to-transparent" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="label-mono text-sky-600">Our Products</span>
              <div className="h-px w-16 bg-gradient-to-r from-sky-400/60 to-transparent" />
            </div>
            <h2 className="font-display font-bold text-display-lg mb-5">
              Software we built. Live in production.
            </h2>
            <p className="text-ink-400 font-body text-base sm:text-lg leading-relaxed">
              Four products, four markets—each a complete platform engineered in-house by Autosapien
              and operating today for real customers across healthcare, compliance, and global trading.
            </p>
          </div>
          <div className="hidden lg:flex flex-col items-end gap-2 shrink-0">
            <span className="label-mono text-[10px]">Live products</span>
            <div className="flex items-center gap-2">
              <span className="status-dot active" />
              <span className="font-mono text-xs text-ink-700">4 / 4 in production</span>
            </div>
          </div>
        </motion.div>

        {/* Product grid */}
        <div className="grid lg:grid-cols-2 gap-5">
          {products.map((product, i) => {
            const accent = accentClasses[product.accent]
            const Card = (
              <article
                className={`group relative h-full p-7 sm:p-9 rounded-2xl bg-white border border-surface-200 transition-all duration-500 hover:-translate-y-1 hover:border-surface-300 ring-1 ring-transparent ${accent.ring} ${accent.glow} overflow-hidden`}
              >
                {/* Top gradient hairline on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Code watermark */}
                <div className="absolute top-4 right-5 font-mono text-[10px] text-ink-200/60 select-none tracking-[0.15em]">
                  {product.code}
                </div>

                {/* Top row: status + category */}
                <div className="flex items-center justify-between mb-7">
                  <span className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.15em] border ${accent.chip}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
                    {product.category}
                  </span>
                  {product.status === 'live' ? (
                    <span className="badge-pill badge-live text-[10px] py-1 px-2 rounded-full">
                      <span className="status-dot active" />
                      Live
                    </span>
                  ) : (
                    <span className="badge-pill badge-sky text-[10px] py-1 px-2 rounded-full">
                      <span className="status-dot developing" />
                      Private Beta
                    </span>
                  )}
                </div>

                {/* Logo display */}
                <div className="mb-7 h-16 flex items-center">
                  {product.logo ? (
                    <img
                      src={product.logo}
                      alt={`${product.name} logo`}
                      className="max-h-14 w-auto object-contain object-left transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="flex items-baseline gap-2">
                      <span className="font-display font-bold text-4xl tracking-tight text-ink-900">
                        {product.name}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-600">
                        agent
                      </span>
                    </div>
                  )}
                </div>

                {/* Title & tagline */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display font-bold text-xl text-ink-900">{product.name}</h3>
                    <span className="font-mono text-[10px] text-ink-400">·</span>
                    <span className="font-mono text-[10px] text-ink-500 tracking-[0.1em]">{product.domain}</span>
                  </div>
                  <p className="font-display font-semibold text-sky-700 text-sm">
                    {product.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-ink-500 font-body text-[15px] leading-relaxed mb-7">
                  {product.description}
                </p>

                {/* Capabilities */}
                <div className="grid grid-cols-2 gap-2 mb-7">
                  {product.capabilities.map((cap) => (
                    <div
                      key={cap}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-surface-200 bg-surface-50/50"
                    >
                      <span className={`w-1 h-1 rounded-full ${accent.dot} flex-shrink-0`} />
                      <span className="text-[12px] text-ink-700 font-body truncate">{cap}</span>
                    </div>
                  ))}
                </div>

                {/* Footer row */}
                <div className="flex items-end justify-between pt-5 border-t border-surface-200 group-hover:border-surface-300 transition-colors">
                  <div>
                    <div className="stat-display-sky text-3xl">{product.metric.value}</div>
                    <div className="label-mono text-[10px] mt-0.5">{product.metric.label}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    {product.url !== '#' && (
                      <span className="font-mono text-[11px] text-ink-500 uppercase tracking-[0.15em] hidden sm:inline">
                        Visit site
                      </span>
                    )}
                    <div className="w-10 h-10 rounded-full border border-surface-300 flex items-center justify-center group-hover:bg-ink-900 group-hover:border-ink-900 transition-all">
                      <ArrowUpRight className="w-4 h-4 text-ink-500 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </article>
            )

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.08 }}
              >
                {product.url === '#' ? (
                  <div className="block h-full cursor-default">{Card}</div>
                ) : (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                    aria-label={`Visit ${product.name}`}
                  >
                    {Card}
                  </a>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Reach line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 rounded-xl border border-surface-200 bg-surface-50/50"
        >
          <div className="flex items-center gap-3">
            <MessageSquare className="w-4 h-4 text-sky-600" />
            <p className="text-sm text-ink-600 font-body">
              Each product is a self-contained company-grade platform—battle-tested by Autosapien before any client ever ships.
            </p>
          </div>
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-sm font-display font-semibold text-ink-900 hover:text-sky-700 transition-colors accent-underline whitespace-nowrap"
          >
            See what we build for clients
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
