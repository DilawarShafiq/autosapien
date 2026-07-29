import { motion } from 'framer-motion'
import pageContent from '../data/pageContent.json'

interface Point {
  title: string
  body: string
}

interface Section {
  label: string
  heading: string
  highlight: string
  intro: string[]
  points: Point[]
}

interface Faq {
  q: string
  a: string
}

interface PageData {
  sections: Section[]
  faqs: Faq[]
}

const content = pageContent as Record<string, PageData>

/** Sections alternate white / tinted-with-dot-grid, continuing the page rhythm. */
function surface(index: number) {
  const tinted = index % 2 === 1
  return {
    className: `relative py-24 ${tinted ? 'dot-grid' : ''}`,
    style: { background: tinted ? '#fafafa' : '#ffffff', overflowX: 'clip' as const },
  }
}

const Divider = () => (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(60%,400px)] h-px bg-gradient-to-r from-transparent via-sky-300/20 to-transparent" />
)

/**
 * Long-form editorial content and FAQs for a route, keyed by pathname.
 * The same JSON drives the FAQPage structured data emitted at build time by
 * scripts/postbuild.cjs, so the copy and the schema cannot drift apart.
 */
export function PageContent({ route }: { route: string }) {
  const data = content[route]
  if (!data) return null

  return (
    <>
      {data.sections.map((section, i) => (
        <section key={section.heading} {...surface(i)}>
          <Divider />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="label-mono text-sky-600 mb-4 block">{section.label}</span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                {section.heading} <span className="text-sky-500">{section.highlight}</span>
              </h2>
              {section.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-lg text-ink-400 leading-relaxed mb-5">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {section.points.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
                {section.points.map((point, j) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: Math.min(j * 0.08, 0.4), duration: 0.6 }}
                    className="card-tinted hover:border-sky-200/50 transition-colors rounded-xl p-7"
                  >
                    <h3 className="text-lg font-bold text-ink-900 mb-3">{point.title}</h3>
                    <p className="text-ink-400 text-sm leading-relaxed">{point.body}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      <section {...surface(data.sections.length)}>
        <Divider />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="label-mono text-sky-600 mb-4 block">Common Questions</span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Questions we get <span className="text-sky-500">asked most</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {data.faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: Math.min(i * 0.06, 0.3), duration: 0.5 }}
                className="card-clean hover:border-sky-200/50 transition-colors rounded-xl p-7"
              >
                <h3 className="text-base font-bold text-ink-900 mb-3">{faq.q}</h3>
                <p className="text-ink-400 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
