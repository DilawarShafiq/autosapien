import { useState, useRef } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Clock, BookOpen, ChevronRight, ChevronDown, FlaskConical, FileText, Tag, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Contact } from '../components/Contact'
import { academyModules } from '../data/academyData'
import type { Lesson } from '../data/academyData'

export function AcademyModule() {
  const { slug } = useParams<{ slug: string }>()
  const mod = academyModules.find((m) => m.slug === slug)
  const [activeLesson, setActiveLesson] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  if (!mod) return <Navigate to="/academy" replace />

  const lesson: Lesson = mod.lessons[activeLesson]
  const currentIndex = academyModules.findIndex((m) => m.slug === slug)
  const prevModule = currentIndex > 0 ? academyModules[currentIndex - 1] : null
  const nextModule = currentIndex < academyModules.length - 1 ? academyModules[currentIndex + 1] : null

  const handleLessonSelect = (index: number) => {
    setActiveLesson(index)
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  return (
    <div style={{ background: '#fafafa' }}>

      {/* Module Header */}
      <section className="dot-grid relative py-16" style={{ background: '#fafafa', overflowX: 'clip' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(60%,400px)] h-px bg-gradient-to-r from-transparent via-sky-300/30 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <Link
            to="/academy"
            className="inline-flex items-center gap-2 text-sm text-ink-400 hover:text-sky-600 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Autosapien Academy
          </Link>

          <div className="flex flex-wrap items-start justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <span className="label-mono text-sky-600 mb-3 block">
                MODULE {String(mod.number).padStart(2, '0')}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-ink-900 mb-3">{mod.title}</h1>
              <p className="text-lg text-ink-400 mb-5">{mod.subtitle}</p>
              <p className="text-ink-500 leading-relaxed">{mod.description}</p>

              <div className="flex flex-wrap items-center gap-4 mt-6">
                <span className="flex items-center gap-1.5 text-sm text-ink-400">
                  <Clock className="w-4 h-4 text-sky-500" />
                  {mod.duration}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-ink-400">
                  <BookOpen className="w-4 h-4 text-sky-500" />
                  {mod.lessons.length} lessons
                </span>
                <span className="badge-sky text-xs">{mod.level}</span>
              </div>
            </motion.div>

            {/* Outcomes card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="card-clean rounded-xl p-6 min-w-[280px] max-w-xs"
            >
              <h3 className="text-sm font-semibold text-ink-900 mb-4">Learning Outcomes</h3>
              <ul className="space-y-3">
                {mod.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-ink-500 leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-12" style={{ background: '#ffffff' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(60%,400px)] h-px bg-gradient-to-r from-transparent via-sky-300/20 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-8 items-start">

            {/* Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0 sticky top-24">
              <div className="card-tinted rounded-xl overflow-hidden">
                <div className="px-5 py-4 border-b border-surface-200">
                  <span className="label-mono text-ink-400 text-xs">LESSONS</span>
                </div>
                <nav>
                  {mod.lessons.map((ls, i) => (
                    <button
                      key={ls.id}
                      onClick={() => handleLessonSelect(i)}
                      className={`w-full text-left px-5 py-4 flex items-start gap-3 transition-all border-b border-surface-200 last:border-0 group ${
                        activeLesson === i
                          ? 'bg-sky-50'
                          : 'hover:bg-surface-100'
                      }`}
                    >
                      <span className={`shrink-0 w-6 h-6 rounded-full text-xs flex items-center justify-center font-mono font-bold mt-0.5 transition-colors ${
                        activeLesson === i
                          ? 'bg-sky-500 text-white'
                          : 'bg-surface-200 text-ink-400 group-hover:bg-sky-100 group-hover:text-sky-600'
                      }`}>
                        {i + 1}
                      </span>
                      <div className="min-w-0">
                        <div className={`text-xs font-semibold leading-snug transition-colors ${
                          activeLesson === i ? 'text-sky-700' : 'text-ink-700 group-hover:text-ink-900'
                        }`}>
                          {ls.title}
                        </div>
                        <div className="text-xs text-ink-400 mt-0.5 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {ls.duration}
                        </div>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Prerequisites */}
              {mod.prerequisites.length > 0 && (
                <div className="card-clean rounded-xl p-5 mt-4">
                  <div className="label-mono text-ink-400 text-xs mb-3">PREREQUISITES</div>
                  <ul className="space-y-2">
                    {mod.prerequisites.map((pre) => {
                      const prereqMod = academyModules.find((m) => m.slug === pre)
                      return prereqMod ? (
                        <li key={pre}>
                          <Link
                            to={`/academy/${pre}`}
                            className="text-xs text-sky-600 hover:text-sky-800 flex items-center gap-1.5 transition-colors"
                          >
                            <ChevronRight className="w-3 h-3" />
                            {prereqMod.title}
                          </Link>
                        </li>
                      ) : null
                    })}
                  </ul>
                </div>
              )}
            </aside>

            {/* Lesson Content */}
            <div ref={contentRef} className="flex-1 min-w-0">

              {/* Mobile lesson picker */}
              <div className="lg:hidden mb-6">
                <div className="card-tinted rounded-xl overflow-hidden">
                  <div className="px-4 py-3 flex items-center justify-between">
                    <span className="label-mono text-ink-400 text-xs">SELECT LESSON</span>
                    <ChevronDown className="w-4 h-4 text-ink-400" />
                  </div>
                  <div className="border-t border-surface-200">
                    {mod.lessons.map((ls, i) => (
                      <button
                        key={ls.id}
                        onClick={() => handleLessonSelect(i)}
                        className={`w-full text-left px-4 py-3 text-sm flex items-center gap-2 border-b border-surface-200 last:border-0 transition-colors ${
                          activeLesson === i ? 'bg-sky-50 text-sky-700 font-medium' : 'text-ink-600 hover:bg-surface-100'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded-full text-xs flex items-center justify-center font-mono shrink-0 ${
                          activeLesson === i ? 'bg-sky-500 text-white' : 'bg-surface-200 text-ink-400'
                        }`}>{i + 1}</span>
                        {ls.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Lesson Header */}
                  <div className="card-clean rounded-xl p-8 mb-6">
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div>
                        <span className="label-mono text-sky-600 text-xs mb-2 block">
                          LESSON {lesson.id}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight">
                          {lesson.title}
                        </h2>
                      </div>
                      <span className="flex items-center gap-1.5 text-sm text-ink-400 shrink-0">
                        <Clock className="w-4 h-4 text-sky-500" />
                        {lesson.duration}
                      </span>
                    </div>
                    <p className="text-ink-500 leading-relaxed text-base">{lesson.overview}</p>
                  </div>

                  {/* Key Insights */}
                  <div className="card-tinted rounded-xl p-7 mb-6">
                    <h3 className="text-sm font-semibold text-ink-900 mb-5 flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-sky-500 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">→</span>
                      </span>
                      Key Insights
                    </h3>
                    <ul className="space-y-4">
                      {lesson.keyInsights.map((insight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex gap-3"
                        >
                          <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-sky-400 mt-2.5" />
                          <span className="text-sm text-ink-600 leading-relaxed">{insight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Lab Exercise */}
                  {lesson.lab && (
                    <div className="card-clean rounded-xl p-7 mb-6 border-l-4 border-sky-400">
                      <h3 className="text-sm font-semibold text-ink-900 mb-3 flex items-center gap-2">
                        <FlaskConical className="w-4 h-4 text-sky-600" />
                        Lab Exercise
                      </h3>
                      <p className="text-sm text-ink-500 leading-relaxed">{lesson.lab}</p>
                    </div>
                  )}

                  {/* Papers */}
                  {lesson.papers && lesson.papers.length > 0 && (
                    <div className="card-tinted rounded-xl p-7 mb-6">
                      <h3 className="text-sm font-semibold text-ink-900 mb-4 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-sky-600" />
                        Key Papers
                      </h3>
                      <ul className="space-y-3">
                        {lesson.papers.map((paper, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="label-mono text-sky-600 text-xs shrink-0 mt-0.5">{paper.year}</span>
                            <div>
                              <div className="text-sm font-medium text-ink-800 leading-snug">{paper.title}</div>
                              <div className="text-xs text-ink-400 mt-0.5">{paper.authors} · {paper.venue}</div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {lesson.tags.map((tag) => (
                      <span key={tag} className="flex items-center gap-1.5 text-xs text-ink-400 bg-surface-100 rounded-full px-3 py-1">
                        <Tag className="w-2.5 h-2.5" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Lesson navigation */}
                  <div className="flex items-center justify-between gap-4 border-t border-surface-200 pt-6">
                    <button
                      onClick={() => activeLesson > 0 && handleLessonSelect(activeLesson - 1)}
                      disabled={activeLesson === 0}
                      className="flex items-center gap-2 text-sm text-ink-400 hover:text-ink-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Previous Lesson
                    </button>
                    <span className="label-mono text-ink-300 text-xs">
                      {activeLesson + 1} / {mod.lessons.length}
                    </span>
                    <button
                      onClick={() => activeLesson < mod.lessons.length - 1 && handleLessonSelect(activeLesson + 1)}
                      disabled={activeLesson === mod.lessons.length - 1}
                      className="flex items-center gap-2 text-sm text-ink-400 hover:text-ink-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      Next Lesson
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Module Navigation */}
      <section className="relative py-16" style={{ background: '#fafafa' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(60%,400px)] h-px bg-gradient-to-r from-transparent via-sky-300/20 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            {prevModule ? (
              <Link
                to={`/academy/${prevModule.slug}`}
                className="card-tinted hover:border-sky-200/50 transition-colors rounded-xl p-6 hover-lift flex items-center gap-4 group flex-1"
              >
                <ArrowLeft className="w-5 h-5 text-ink-300 group-hover:text-sky-500 transition-colors shrink-0" />
                <div>
                  <div className="text-xs text-ink-400 mb-0.5">Previous Module</div>
                  <div className="text-sm font-semibold text-ink-800 group-hover:text-sky-600 transition-colors">
                    {prevModule.title}
                  </div>
                </div>
              </Link>
            ) : <div className="flex-1" />}

            <Link
              to="/academy"
              className="btn-secondary rounded-xl px-6 py-3 text-sm self-center whitespace-nowrap"
            >
              All Modules
            </Link>

            {nextModule ? (
              <Link
                to={`/academy/${nextModule.slug}`}
                className="card-tinted hover:border-sky-200/50 transition-colors rounded-xl p-6 hover-lift flex items-center gap-4 group flex-1 justify-end text-right"
              >
                <div>
                  <div className="text-xs text-ink-400 mb-0.5">Next Module</div>
                  <div className="text-sm font-semibold text-ink-800 group-hover:text-sky-600 transition-colors">
                    {nextModule.title}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-ink-300 group-hover:text-sky-500 transition-colors shrink-0" />
              </Link>
            ) : <div className="flex-1" />}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}
