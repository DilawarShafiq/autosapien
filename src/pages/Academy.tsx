import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { BookOpen, Clock, ChevronRight, ArrowRight, Users, Zap } from 'lucide-react'
import { Contact } from '../components/Contact'
import { allBooks } from '../data/allBooks'

const globalStats = [
  { value: '3', label: 'Books' },
  { value: '28', label: 'Modules' },
  { value: '100+', label: 'Lessons' },
  { value: 'Free', label: 'Forever' },
]

const levelColors: Record<string, string> = {
  Foundational: 'bg-sky-50 text-sky-700',
  Intermediate: 'bg-blue-50 text-blue-700',
  Advanced: 'bg-slate-100 text-slate-700',
}

export function Academy() {
  const statsRef = useRef(null)
  const isStatsInView = useInView(statsRef, { once: true, margin: '-80px' })

  return (
    <div style={{ background: '#fafafa' }}>

      {/* Manifesto Hero */}
      <section className="dot-grid relative pt-28 pb-20" style={{ background: '#fafafa', overflowX: 'clip' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(60%,400px)] h-px bg-gradient-to-r from-transparent via-sky-300/30 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="label-mono text-sky-600 mb-5 block">AUTOSAPIEN ACADEMY</span>
            <h1 className="text-display-xl font-bold text-ink-900 mb-6 leading-tight">
              Three books.<br />
              <span className="text-sky-500">One mission.</span>
            </h1>
            <p className="text-xl text-ink-400 leading-relaxed max-w-2xl mb-4">
              US healthcare wastes $500B/year on admin. Humanoid robots are 5 years from your living room. The engineers and operators who understand both will define the next decade.
            </p>
            <p className="text-base text-ink-300 mb-10 font-medium">
              All three books are free. No account required. No paywall. Ever.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to={`/academy/${allBooks[0].quickStart.slug}`} className="btn-primary rounded-lg px-7 py-3 text-sm font-semibold flex items-center gap-2">
                Start Reading <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#books" className="btn-secondary rounded-lg px-7 py-3 text-sm font-semibold">
                Browse All Books
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Stats */}
      <section ref={statsRef} className="relative py-12" style={{ background: '#ffffff' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(60%,400px)] h-px bg-gradient-to-r from-transparent via-sky-300/20 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {globalStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07 }}
                className="card-tinted rounded-xl p-5 text-center"
              >
                <div className="stat-display-sky text-3xl mb-1">{stat.value}</div>
                <div className="label-mono text-ink-400 text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Books */}
      <section id="books" className="relative py-24" style={{ background: '#fafafa', overflowX: 'clip' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(60%,400px)] h-px bg-gradient-to-r from-transparent via-sky-300/20 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-32">
          {allBooks.map((book, bookIndex) => (
            <BookSection key={book.id} book={book} index={bookIndex} />
          ))}
        </div>
      </section>

      {/* Who is this for */}
      <section className="relative py-20" style={{ background: '#ffffff' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(60%,400px)] h-px bg-gradient-to-r from-transparent via-sky-300/20 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="label-mono text-sky-600 mb-3 block">WHO READS THIS</span>
            <h2 className="text-3xl font-bold text-ink-900">Pick your starting point</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🤖',
                role: 'Building a robot',
                cta: 'Start with Book 1',
                desc: 'Robotics engineers, ML researchers, and the G1 development team. Start with Module 1 (Humanoid Landscape) or jump to the VLA module if you already know your actuators.',
                link: allBooks[0].quickStart.slug,
              },
              {
                icon: '🏥',
                role: 'Working in healthcare IT',
                cta: 'Start with Book 2',
                desc: 'EHR specialists, HIM professionals, and anyone preparing for the NHA CEHRS exam. The 10-day study plan in Module 10 gets you exam-ready from scratch.',
                link: allBooks[1].quickStart.slug,
              },
              {
                icon: '⚡',
                role: 'Automating healthcare admin',
                cta: 'Start with Book 3',
                desc: 'AI developers and healthcare startups building RCM automation, prior auth agents, and personal medical billing systems. Start with the $500B problem, then go straight to the architecture.',
                link: allBooks[2].quickStart.slug,
              },
            ].map((path) => (
              <motion.div
                key={path.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-clean hover-glow hover:border-sky-200/50 transition-colors rounded-xl p-8 hover-lift group"
              >
                <div className="text-3xl mb-5">{path.icon}</div>
                <h3 className="text-lg font-bold text-ink-900 mb-3">{path.role}</h3>
                <p className="text-sm text-ink-400 leading-relaxed mb-6">{path.desc}</p>
                <Link
                  to={`/academy/${path.link}`}
                  className="flex items-center gap-2 text-sm font-semibold text-sky-600 group-hover:text-sky-800 transition-colors"
                >
                  {path.cta}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}

function BookSection({ book, index }: { book: (typeof allBooks)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref}>
      {/* Book Header */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="label-mono text-ink-400 text-xs">{book.eyebrow}</span>
              <span className="badge-sky text-xs">{book.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-2">{book.title}</h2>
            <p className="text-xs text-ink-400 mb-4 label-mono">by {book.author}</p>
            <p className="text-ink-500 mb-4 leading-relaxed">{book.description}</p>
            <blockquote className="border-l-2 border-sky-400 pl-4 text-sm text-ink-400 italic leading-relaxed">
              "{book.hook}"
            </blockquote>
          </div>

          <div className="card-tinted rounded-xl p-6 min-w-[220px]">
            <div className="space-y-3 mb-5">
              <div className="flex items-center gap-2 text-sm text-ink-500">
                <Clock className="w-4 h-4 text-sky-500 shrink-0" />
                {book.totalHours} hours of content
              </div>
              <div className="flex items-center gap-2 text-sm text-ink-500">
                <BookOpen className="w-4 h-4 text-sky-500 shrink-0" />
                {book.modules.length} modules · {book.modules.reduce((s, m) => s + m.lessons.length, 0)} lessons
              </div>
              <div className="flex items-center gap-2 text-sm text-ink-500">
                <Zap className="w-4 h-4 text-sky-500 shrink-0" />
                Free forever
              </div>
            </div>
            <div className="mb-5">
              <div className="flex items-center gap-1.5 text-xs text-ink-400 mb-2">
                <Users className="w-3 h-3" />
                For
              </div>
              <div className="flex flex-wrap gap-1.5">
                {book.audience.slice(0, 3).map((a) => (
                  <span key={a} className="text-xs bg-surface-100 text-ink-500 px-2 py-0.5 rounded-full">{a}</span>
                ))}
              </div>
            </div>
            <Link
              to={`/academy/${book.quickStart.slug}`}
              className="btn-primary rounded-lg text-xs px-4 py-2.5 w-full text-center block"
            >
              {book.quickStart.label}
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Module Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {book.modules.map((mod, i) => (
          <motion.div
            key={mod.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 + i * 0.04, duration: 0.45 }}
          >
            <Link
              to={`/academy/${mod.slug}`}
              className="card-clean hover-glow hover:border-sky-200/50 transition-all rounded-xl p-6 hover-lift group flex gap-5 items-start h-full block"
            >
              <div className="shrink-0 relative w-12 h-12">
                <span className="absolute inset-0 text-[2.5rem] font-bold leading-none text-surface-200 select-none flex items-center justify-center">
                  {String(mod.number).padStart(2, '0')}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-ink-900 group-hover:text-sky-600 transition-colors mb-1 leading-snug">
                  {mod.title}
                </h3>
                <p className="text-xs text-ink-400 leading-relaxed mb-3 line-clamp-2">{mod.description}</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${levelColors[mod.level]}`}>
                    {mod.level}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-ink-400">
                    <Clock className="w-3 h-3" />{mod.duration}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-ink-400">
                    <BookOpen className="w-3 h-3" />{mod.lessons.length} lessons
                  </span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-ink-200 group-hover:text-sky-400 transition-colors shrink-0 mt-1" />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Book divider */}
      {index < allBooks.length - 1 && (
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-surface-200 to-transparent" />
      )}
    </div>
  )
}
