import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { BookOpen, Clock, ChevronRight, Cpu, Zap, Brain, Shield, Bot, Activity, BarChart2, Layers, Map } from 'lucide-react'
import { Contact } from '../components/Contact'
import { academyModules } from '../data/academyData'

const moduleIcons = [Map, Zap, Activity, Brain, Cpu, Bot, Layers, Shield, BarChart2, BookOpen]

const stats = [
  { value: '10', label: 'Modules' },
  { value: '47', label: 'Lessons' },
  { value: '68+', label: 'Hours of Study' },
  { value: '2026', label: 'Frontier Research' },
]

const levelColors: Record<string, string> = {
  Foundational: 'bg-sky-50 text-sky-700',
  Intermediate: 'bg-blue-50 text-blue-700',
  Advanced: 'bg-slate-100 text-slate-700',
}

export function Academy() {
  const statsRef = useRef(null)
  const gridRef = useRef(null)
  const isStatsInView = useInView(statsRef, { once: true, margin: '-80px' })
  const isGridInView = useInView(gridRef, { once: true, margin: '-80px' })

  return (
    <div style={{ background: '#fafafa' }}>

      {/* Hero */}
      <section className="dot-grid relative py-24 md:py-32" style={{ background: '#fafafa', overflowX: 'clip' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(60%,400px)] h-px bg-gradient-to-r from-transparent via-sky-300/30 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="label-mono text-sky-600 mb-6 block">AUTOSAPIEN ACADEMY</span>
            <h1 className="text-display-xl font-bold text-ink-900 mb-6 leading-tight">
              Physical AI &<br />
              <span className="text-sky-500">Humanoid Robotics</span>
            </h1>
            <p className="text-xl text-ink-400 mb-10 max-w-2xl leading-relaxed">
              The curriculum powering G1. Research-grade content on the 2024-2026 frontier — from QDD actuators to VLA foundation models — structured for the team building the next generation of humanoid robots.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={`/academy/${academyModules[0].slug}`}
                className="btn-primary rounded-lg px-7 py-3 text-sm font-semibold"
              >
                Start Module 1
              </Link>
              <Link
                to="#modules"
                className="btn-secondary rounded-lg px-7 py-3 text-sm font-semibold"
              >
                Browse All Modules
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="relative py-16" style={{ background: '#ffffff' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(60%,400px)] h-px bg-gradient-to-r from-transparent via-sky-300/20 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                className="card-tinted rounded-xl p-6 text-center"
              >
                <div className="stat-display-sky text-4xl mb-1">{stat.value}</div>
                <div className="label-mono text-ink-400 text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="relative py-20" style={{ background: '#fafafa' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(60%,400px)] h-px bg-gradient-to-r from-transparent via-sky-300/20 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label-mono text-sky-600 mb-4 block">WHY THIS CURRICULUM</span>
              <h2 className="text-3xl font-bold text-ink-900 mb-6">
                Built for practitioners, not students
              </h2>
              <p className="text-ink-400 leading-relaxed mb-6">
                Every lesson is grounded in 2024-2026 research — the papers, platforms, and engineering decisions that are actually shaping what robots can do today. Not a survey course. A working knowledge base for the Autosapien G1 development team.
              </p>
              <p className="text-ink-400 leading-relaxed">
                Modules draw directly from work at Physical Intelligence, ETH Zurich, MIT CSAIL, CMU Robotics, and Berkeley RAIL — the labs and companies defining the field. Where G1 design decisions are informed by the research, we say so explicitly.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Actuator engineering', sub: 'QDD, SEA, joint-level spec' },
                { label: 'VLA deployment', sub: 'π0, OpenVLA, on-device inference' },
                { label: 'Locomotion RL', sub: 'ETH/Berkeley/CMU methods' },
                { label: 'Safety standards', sub: 'ISO 10218, ISO/TS 15066' },
              ].map((item) => (
                <div key={item.label} className="card-clean rounded-xl p-5">
                  <div className="w-2 h-2 rounded-full bg-sky-500 mb-3" />
                  <div className="text-sm font-semibold text-ink-900 mb-1">{item.label}</div>
                  <div className="text-xs text-ink-400">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Module Grid */}
      <section id="modules" ref={gridRef} className="relative py-24" style={{ background: '#ffffff', overflowX: 'clip' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(60%,400px)] h-px bg-gradient-to-r from-transparent via-sky-300/20 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isGridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="label-mono text-sky-600 mb-4 block">CURRICULUM</span>
            <h2 className="text-4xl font-bold text-ink-900">10 Modules, Zero Fluff</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {academyModules.map((mod, i) => {
              const Icon = moduleIcons[i] ?? BookOpen
              return (
                <motion.div
                  key={mod.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isGridInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                >
                  <Link
                    to={`/academy/${mod.slug}`}
                    className="card-clean hover-glow hover:border-sky-200/50 transition-all rounded-xl p-7 hover-lift group flex flex-col h-full block"
                  >
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <span className="absolute -top-1 -left-1 text-[3rem] font-bold leading-none text-surface-200 select-none">
                            {String(mod.number).padStart(2, '0')}
                          </span>
                          <div className="relative z-10 w-11 h-11 rounded-lg bg-sky-50 flex items-center justify-center mt-3 ml-3 group-hover:bg-sky-100 transition-colors">
                            <Icon className="w-5 h-5 text-sky-600" />
                          </div>
                        </div>
                        <div className="ml-2">
                          <div className="text-xs text-ink-400 mb-0.5">{mod.subtitle}</div>
                          <h3 className="text-lg font-bold text-ink-900 group-hover:text-sky-600 transition-colors leading-tight">
                            {mod.title}
                          </h3>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-ink-300 group-hover:text-sky-500 group-hover:translate-x-1 transition-all mt-1 shrink-0" />
                    </div>

                    <p className="text-sm text-ink-400 leading-relaxed mb-5 flex-1">
                      {mod.description}
                    </p>

                    <div className="flex items-center gap-3 flex-wrap">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${levelColors[mod.level]}`}>
                        {mod.level}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-ink-400">
                        <Clock className="w-3 h-3" />
                        {mod.duration}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-ink-400">
                        <BookOpen className="w-3 h-3" />
                        {mod.lessons.length} lessons
                      </span>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* G1 CTA */}
      <section className="relative py-24" style={{ background: '#fafafa' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(60%,400px)] h-px bg-gradient-to-r from-transparent via-sky-300/20 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-clean hover-glow hover:border-sky-200/50 transition-colors rounded-xl p-12"
          >
            <span className="label-mono text-sky-600 mb-4 block">AUTOSAPIEN G1</span>
            <h2 className="text-3xl font-bold text-ink-900 mb-4">
              This is the science behind the robot
            </h2>
            <p className="text-lg text-ink-400 mb-8 max-w-xl mx-auto">
              Every module in this curriculum informs a design decision in G1. See where it all comes together.
            </p>
            <Link to="/projects/humanoid" className="btn-primary rounded-lg px-8 py-3">
              Meet Autosapien G1
            </Link>
          </motion.div>
        </div>
      </section>

      <Contact />
    </div>
  )
}
