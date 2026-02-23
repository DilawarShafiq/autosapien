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
    <section id="about" className="relative py-16 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="divider-glow absolute top-0 left-0 right-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start mb-24">
          {/* Left - Main content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="badge-hud mb-8"
            >
              <span>SYS.ABOUT</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="font-display font-bold text-display-lg mb-8"
            >
              Creating machines that{' '}
              <span className="text-signal-400">understand</span> humanity
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6 text-dim font-body text-base sm:text-lg leading-relaxed"
            >
              <p>
                Autosapien was founded on a singular belief: the next great leap in human civilization
                won't come from AI alone—it will come from AI that can{' '}
                <em className="text-white not-italic">act</em> in the physical world.
                We're building the robots, the intelligence, and the infrastructure to make that happen.
              </p>
              <p>
                Our vision spans from the home to the hospital, from the factory floor to the film set.
                We're developing humanoid robots that will become household companions, industrial systems
                that will reshape manufacturing, and AI that will revolutionize how healthcare is delivered
                across the USA and beyond.
              </p>
              <p>
                With xEHR.io already transforming healthcare for millions of patients, and our Autosapien G1
                humanoid in active development, we're not waiting for the future—we're building it, one
                breakthrough at a time.
              </p>
            </motion.div>

            {/* Team indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-obsidian-800 border border-obsidian-600 flex items-center justify-center"
                  >
                    <span className="text-xs font-mono text-obsidian-300">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="text-white font-display font-semibold">Multidisciplinary Team</div>
                <div className="label-mono">Roboticists, AI Researchers, Healthcare Experts</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Vision quote box */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="card-hud p-5 sm:p-8 lg:p-12 hud-corners">
              <div className="flex items-center justify-between mb-8">
                <span className="label-mono">Vision Statement</span>
                <span className="label-mono">REF: VS-001</span>
              </div>

              <blockquote className="relative">
                <div className="text-6xl font-display font-bold text-signal-400/15 absolute -top-4 -left-2">"</div>
                <p className="text-base sm:text-xl lg:text-2xl text-white font-display leading-relaxed pl-8">
                  We believe the defining technology of this century won't be artificial intelligence
                  in isolation—it will be artificial intelligence given a body, purpose, and the
                  ability to heal, help, and create alongside humanity.
                </p>
              </blockquote>

              <div className="mt-8 pt-8 border-t border-obsidian-700 flex items-center gap-4">
                <div className="w-12 h-12 bg-signal-400 flex items-center justify-center">
                  <span className="font-mono text-obsidian-950 font-bold">AS</span>
                </div>
                <div>
                  <div className="text-white font-display font-semibold">The Autosapien Vision</div>
                  <div className="label-mono">Intelligence Embodied</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pillars header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="font-display font-bold text-2xl text-white mb-4">Our Six Pillars</h3>
          <p className="text-muted font-body">The domains where we're building the future</p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + i * 0.08, duration: 0.6 }}
              className="group card-hud p-6 hover-lift"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 border border-obsidian-600 flex items-center justify-center group-hover:border-signal-400/30 transition-colors">
                  <pillar.icon className="w-5 h-5 text-signal-400" />
                </div>
                <div className="flex items-center gap-2">
                  {pillar.status === 'developing' && (
                    <span className="badge-hud text-[10px] py-1 px-2">
                      <span className="status-dot developing" />
                      <span>Dev</span>
                    </span>
                  )}
                  {pillar.status === 'active' && (
                    <span className="badge-hud badge-live text-[10px] py-1 px-2">
                      <span className="status-dot active" />
                      <span>Live</span>
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-3">
                <span className="label-mono text-signal-400/25">{pillar.code}</span>
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-signal-400 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted font-body leading-relaxed">
                {pillar.description}
              </p>

              <div className="mt-6 pt-4 border-t border-obsidian-700/50 flex items-center justify-between">
                <span className="label-mono">Learn More</span>
                <ArrowUpRight className="w-4 h-4 text-obsidian-400 group-hover:text-signal-400 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="divider-glow absolute bottom-0 left-0 right-0" />
    </section>
  )
}
