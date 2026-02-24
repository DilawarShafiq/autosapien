import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bot, Brain, Heart, Film, Factory, Home, ArrowUpRight } from 'lucide-react'

const pillars = [
  {
    icon: Bot,
    title: 'Humanoid Robotics',
    description: 'Developing the Autosapien G1—our flagship humanoid robot designed to live alongside humans.',
    status: 'developing',
    code: 'HMD-01',
  },
  {
    icon: Factory,
    title: 'Industrial Automation',
    description: 'Intelligent factory robots that learn, adapt, and optimize manufacturing processes autonomously.',
    status: 'developing',
    code: 'IND-02',
  },
  {
    icon: Home,
    title: 'Home Robotics',
    description: 'Companion robots that assist with daily tasks, eldercare, and household management.',
    status: 'developing',
    code: 'HME-03',
  },
  {
    icon: Heart,
    title: 'Healthcare AI',
    description: 'xEHR.io—our AI-powered platform transforming how the USA delivers and manages healthcare.',
    status: 'active',
    code: 'HLT-04',
  },
  {
    icon: Film,
    title: 'AI Film Studio',
    description: 'Generative AI agents that write, edit, and produce short films entirely autonomously.',
    status: 'developing',
    code: 'FLM-05',
  },
  {
    icon: Brain,
    title: 'Agentic AI',
    description: 'AI FTEs and custom agents that work 24/7—including RCM Employee for USA healthcare providers, workflow automation, and RCM automation for administrative tasks.',
    status: 'active',
    code: 'AGT-06',
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-24 sm:py-40 dot-grid" style={{ background: '#fafafa', overflowX: 'clip' }}>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 items-start mb-28">
          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Label with gradient accent line */}
            <div className="flex items-center gap-3 mb-6">
              <span className="label-mono text-sky-600">About</span>
              <div className="h-px w-16 bg-gradient-to-r from-sky-400/60 to-transparent" />
            </div>

            <h2 className="font-display font-bold text-display-lg mb-8">
              Creating machines that understand humanity
            </h2>

            <div className="space-y-5 text-ink-500 font-body text-base sm:text-lg leading-relaxed">
              <p>
                Autosapien was founded on a singular belief: the next great leap in human civilization
                won't come from AI alone—it will come from AI that can{' '}
                <strong className="text-ink-900 font-semibold">act</strong> in the physical world.
              </p>
              <p>
                Our vision spans from the home to the hospital, from the factory floor to the film set.
                We're developing humanoid robots that will become household companions, industrial systems
                that will reshape manufacturing, and AI that will revolutionize how healthcare is delivered.
              </p>
              <p>
                With xEHR.io already transforming healthcare for millions of patients, and our Autosapien G1
                humanoid in active development, we're building the future one breakthrough at a time.
              </p>
            </div>

          </motion.div>

          {/* Right - Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white border border-surface-200 p-6 sm:p-10 rounded-xl hover-glow relative overflow-hidden transition-all duration-400">
              {/* Top gradient accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

              <div className="flex items-center justify-between mb-8">
                <span className="label-mono">Vision</span>
                <span className="label-mono">VS-001</span>
              </div>

              <blockquote className="border-l-2 border-sky-400/40 pl-6 relative">
                <span className="text-5xl font-display font-bold text-sky-300/40 leading-none select-none">"</span>
                <p className="text-lg sm:text-xl lg:text-2xl text-ink-800 font-display leading-relaxed mt-2">
                  We believe the defining technology of this century won't be artificial intelligence
                  in isolation—it will be artificial intelligence given a body, purpose, and the
                  ability to heal, help, and create alongside humanity.
                </p>
                <span className="text-5xl font-display font-bold text-sky-300/40 leading-none select-none block text-right -mt-2">"</span>
              </blockquote>

              <div className="mt-8 pt-6 border-t border-surface-200 flex items-center gap-4">
                <div className="w-10 h-10 bg-ink-900 rounded-full flex items-center justify-center">
                  <span className="font-mono text-white text-xs font-bold">AS</span>
                </div>
                <div>
                  <div className="text-ink-900 font-display font-semibold text-sm">The Autosapien Vision</div>
                  <div className="label-mono text-[10px]">Intelligence Embodied</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pillars header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center mb-14"
        >
          <h3 className="font-display font-bold text-2xl text-ink-900 mb-3">Our Six Pillars</h3>
          <p className="text-ink-400 font-body">The domains where we're building the future</p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.06, duration: 0.5 }}
              className="group card-clean p-6 rounded-xl hover-lift hover-glow cursor-pointer relative overflow-hidden hover:border-sky-200/50 transition-colors"
            >
              {/* Top gradient accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-surface-100 flex items-center justify-center group-hover:bg-sky-50 group-hover:scale-105 transition-all">
                  <pillar.icon className="w-5 h-5 text-ink-400 group-hover:text-sky-600 transition-colors" />
                </div>
                {pillar.status === 'developing' && (
                  <span className="badge-pill badge-sky text-[10px] py-1 px-2 rounded-full">
                    <span className="status-dot developing" />
                    Dev
                  </span>
                )}
                {pillar.status === 'active' && (
                  <span className="badge-pill badge-live text-[10px] py-1 px-2 rounded-full">
                    <span className="status-dot active" />
                    Live
                  </span>
                )}
              </div>

              <span className="label-mono text-[10px] text-ink-500">{pillar.code}</span>
              <h3 className="font-display font-semibold text-ink-900 mb-2 group-hover:text-sky-700 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm text-ink-400 font-body leading-relaxed">
                {pillar.description}
              </p>

              <div className="mt-5 pt-4 border-t border-surface-200 group-hover:border-sky-200/50 transition-colors flex items-center justify-between">
                <span className="label-mono text-[10px]">Learn More</span>
                <ArrowUpRight className="w-4 h-4 text-ink-500 group-hover:text-sky-600 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
