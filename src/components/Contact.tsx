import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative py-20 sm:py-36 overflow-hidden">
      <div className="divider" />

      <div ref={ref} className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-20 sm:pt-36 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="label-mono text-amber-600 mb-4 block">Contact</span>

          <h2 className="font-display font-bold text-display-lg mb-5">
            Let's build the future together
          </h2>

          <p className="text-base sm:text-lg text-ink-400 font-body max-w-2xl mx-auto mb-12">
            Ready to transform your business with AI and robotics? Reach out to us.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <a
              href="mailto:info@autosapien.com"
              className="inline-block card-clean p-6 sm:p-8 rounded-xl group hover-lift"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="label-mono text-[10px] mb-1">Email us at</div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-ink-900 group-hover:text-amber-700 transition-colors break-all">
                    info@autosapien.com
                  </div>
                </div>
                <div className="hidden sm:flex w-10 h-10 rounded-full border border-surface-300 items-center justify-center ml-4 group-hover:bg-ink-900 group-hover:border-ink-900 transition-all">
                  <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-white transition-colors" />
                </div>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-14 pt-10 border-t border-surface-200"
          >
            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <span className="label-mono text-[10px] text-amber-600 block mb-2">Headquarters</span>
                <p className="text-ink-600 font-body">United States</p>
              </div>
              <div>
                <span className="label-mono text-[10px] text-amber-600 block mb-2">Inquiries</span>
                <p className="text-ink-600 font-body">Partnerships & Investment</p>
              </div>
              <div>
                <span className="label-mono text-[10px] text-amber-600 block mb-2">Response Time</span>
                <p className="text-ink-600 font-body">Within 24 hours</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
