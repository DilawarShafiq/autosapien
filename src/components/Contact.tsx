import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, ArrowRight, MapPin } from 'lucide-react'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative py-24 sm:py-40 section-accent-top" style={{ background: '#ffffff', overflowX: 'clip' }}>
      {/* Radial sky glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,133,212,0.04) 0%, transparent 70%)' }} />

      <div ref={ref} className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Centered label with flanking gradient lines */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-sky-300/50" />
            <span className="label-mono text-sky-600">Contact</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-sky-300/50" />
          </div>

          <h2 className="font-display font-bold text-display-lg mb-5">
            Let's build the future together
          </h2>

          <p className="text-base sm:text-lg text-ink-400 font-body max-w-2xl mx-auto mb-12">
            Ready to transform your business with AI and robotics? Reach out to us.
          </p>

          {/* Email card - enlarged */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <a
              href="mailto:info@autosapien.com"
              className="inline-block card-clean p-8 sm:p-10 rounded-xl group hover-lift hover-glow relative overflow-hidden"
            >
              {/* Top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

              <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
                <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center group-hover:bg-sky-100 group-hover:scale-105 transition-all">
                  <Mail className="w-7 h-7 text-sky-600" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="label-mono text-[10px] mb-1">Email us at</div>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-ink-900 group-hover:text-sky-700 transition-colors break-all">
                    info@autosapien.com
                  </div>
                </div>
                <div className="hidden sm:flex w-11 h-11 rounded-full bg-ink-900 items-center justify-center ml-4 group-hover:bg-sky-600 transition-all">
                  <ArrowRight className="w-5 h-5 text-white transition-colors" />
                </div>
              </div>
            </a>
          </motion.div>

          {/* Supplementary info card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mt-6"
          >
            <div className="card-clean p-5 rounded-xl hover-glow hover:border-sky-200/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-surface-100 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-ink-400" />
                </div>
                <div className="text-left">
                  <div className="label-mono text-[10px]">Headquarters</div>
                  <div className="text-sm font-display font-semibold text-ink-900">Lahore, Pakistan</div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
