import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, MessageSquare, Shield, Zap, Brain, BarChart3, Lock, LineChart } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { Contact } from '../components/Contact'

const capabilities = [
  {
    icon: MessageSquare,
    title: 'WhatsApp-Native Interface',
    description:
      'Clients interact with Thales the way they already talk to their teams. No new app, no new login—signals, confirmations, and trade reports flow through WhatsApp in plain language.',
  },
  {
    icon: Brain,
    title: 'Agentic Signal Generation',
    description:
      'Thales fuses on-chain data, exchange order flow, and macro signals to generate trade ideas with explicit reasoning. Every signal carries its evidence trail.',
  },
  {
    icon: Zap,
    title: 'Autonomous Binance Execution',
    description:
      'When policy allows, Thales executes trades directly on Binance spot and futures—with position sizing, stops, and reversal rules baked into the policy layer.',
  },
  {
    icon: Shield,
    title: 'Policy-Bound Risk Controls',
    description:
      'Per-client risk budgets, exposure caps, blacklists, and circuit breakers run before any order leaves the agent. No order ever bypasses the policy gate.',
  },
  {
    icon: BarChart3,
    title: 'Live Performance Dashboards',
    description:
      'PnL, drawdown, win-rate, and decision quality tracked in real time. Every signal, every fill, every rejection—logged, replayable, and audit-friendly.',
  },
  {
    icon: Lock,
    title: 'Secure Key Custody',
    description:
      'API keys live in encrypted, scoped vaults with rotation policies. Thales operates with the minimum-permission Binance keys required for the configured strategy.',
  },
]

const metrics = [
  { value: '24/7', label: 'Market Coverage', description: 'Global, never sleeps' },
  { value: '<1s', label: 'Signal-to-Order', description: 'From decision to fill' },
  { value: '100%', label: 'Auditable', description: 'Every action logged' },
  { value: 'Multi', label: 'Strategy Modes', description: 'Conservative → aggressive' },
]

const flow = [
  {
    step: '01',
    title: 'Market Listening',
    desc: 'Thales ingests on-chain telemetry, order book deltas, funding rates, and macro feeds in real time.',
  },
  {
    step: '02',
    title: 'Signal Reasoning',
    desc: 'A reasoning agent generates a candidate trade idea with an explicit thesis, target, and invalidation level.',
  },
  {
    step: '03',
    title: 'Policy Gate',
    desc: 'Risk budget, exposure caps, and per-client policy are checked before any order is created.',
  },
  {
    step: '04',
    title: 'WhatsApp Update',
    desc: 'Clients receive a plain-English brief—either a confirmation prompt or an execution receipt, depending on their mode.',
  },
  {
    step: '05',
    title: 'Binance Execution',
    desc: 'Approved trades hit Binance with managed sizing, stops, and live position monitoring.',
  },
  {
    step: '06',
    title: 'Continuous Review',
    desc: 'Outcomes feed back into Thales’ learning loop. Win/loss attribution informs future signal weights.',
  },
]

export function Thales() {
  const flowRef = useRef(null)
  const capRef = useRef(null)
  const isFlowInView = useInView(flowRef, { once: true, margin: '-100px' })
  const isCapInView = useInView(capRef, { once: true, margin: '-100px' })

  return (
    <div style={{ background: '#fafafa' }}>
      <PageHero
        icon={TrendingUp}
        category="FinTech · Agentic AI"
        title="Thales"
        subtitle="Agentic crypto trading, delivered over WhatsApp"
        description="Thales is Autosapien's conversational trading agent. It talks to clients on WhatsApp, generates trade signals from fused market data, and—when authorised—executes autonomously on Binance. Policy-bound, fully observable, and operating 24/7 across global markets."
        status="developing"
        code="PRJ-007"
        gradient="from-amber-400 to-sky-500"
        features={[
          'WhatsApp Interface',
          'Binance Spot & Futures',
          'Agentic Signals',
          'Policy-Bound Risk',
          '24/7 Operations',
          'Full Audit Trail',
          'Multi-Strategy Modes',
          'Secure Key Custody',
        ]}
      />

      {/* Metrics */}
      <section className="relative py-20" style={{ background: '#ffffff' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(60%,400px)] h-px bg-gradient-to-r from-transparent via-sky-300/20 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="card-clean hover-glow hover:border-sky-200/50 transition-colors rounded-xl p-8 md:p-12">
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
                  <div className="stat-display text-3xl sm:text-4xl mb-2">{metric.value}</div>
                  <div className="text-ink-900 font-medium mb-1">{metric.label}</div>
                  <div className="text-sm text-ink-500">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section ref={capRef} className="relative py-32 dot-grid" style={{ background: '#fafafa', overflowX: 'clip' }}>
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
              An agent that <span className="text-sky-500">trades</span>—not a chatbot that talks about trading.
            </h2>
            <p className="text-lg text-ink-400 max-w-2xl mx-auto">
              Thales is built on a strict separation: reasoning, policy, and execution live in
              different layers. Each can be audited, replaced, or rolled back without breaking the others.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
        </div>
      </section>

      {/* Flow */}
      <section ref={flowRef} className="relative py-32" style={{ background: '#ffffff', overflowX: 'clip' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(60%,400px)] h-px bg-gradient-to-r from-transparent via-sky-300/20 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFlowInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="label-mono text-sky-600 mb-4 block">Decision Loop</span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              From signal to fill, in a <span className="text-sky-500">single, auditable loop</span>.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {flow.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                animate={isFlowInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.06 }}
                className="relative p-6 rounded-xl bg-surface-50/50 border border-surface-200 hover:border-sky-200/60 transition-colors"
              >
                <div className="absolute top-4 right-5 font-mono text-[10px] text-sky-400/50 tracking-[0.15em]">
                  {s.step}
                </div>
                <div className="w-9 h-9 rounded-lg bg-white border border-surface-200 flex items-center justify-center mb-4">
                  <LineChart className="w-4 h-4 text-sky-600" />
                </div>
                <h3 className="font-display font-bold text-ink-900 text-base mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-[13px] text-ink-500 font-body leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[13px] text-ink-400 font-body max-w-2xl mx-auto italic">
              Thales is currently in private beta with a closed group of clients. Reach out if you
              want to evaluate it for managed trading or as the foundation for a custom agentic
              trading product.
            </p>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}
