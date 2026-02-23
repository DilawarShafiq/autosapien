import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative py-16 sm:py-32 overflow-hidden bg-obsidian-850/50">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="divider-glow absolute top-0 left-0 right-0" />

      <div ref={ref} className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-hud mb-8">
            <span>SYS.CONTACT</span>
          </span>

          <h2 className="font-display font-bold text-display-lg mb-6">
            Let's build the{' '}
            <span className="text-signal-400">future</span>
            <br />
            together
          </h2>

          <p className="text-base sm:text-lg text-muted font-body max-w-2xl mx-auto mb-10 sm:mb-16">
            Ready to transform your business with AI and robotics? Reach out to us.
          </p>

          {/* Email card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="mailto:info@autosapien.com"
              className="inline-block card-hud p-6 sm:p-8 hud-corners group hover-lift"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="w-14 h-14 border border-signal-400/25 flex items-center justify-center group-hover:bg-signal-400/5 transition-colors">
                  <Mail className="w-7 h-7 text-signal-400" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="label-mono mb-2">Email us at</div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-signal-400 transition-colors break-all">
                    info@autosapien.com
                  </div>
                </div>
                <div className="hidden sm:flex w-11 h-11 border border-obsidian-600 items-center justify-center ml-4 group-hover:border-signal-400 group-hover:bg-signal-400 transition-all">
                  <ArrowRight className="w-5 h-5 text-obsidian-400 group-hover:text-obsidian-950 transition-colors" />
                </div>
              </div>
            </a>
          </motion.div>

          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-16 border-t border-obsidian-700/30"
          >
            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <span className="label-mono text-signal-400/30 block mb-2">Headquarters</span>
                <p className="text-dim font-body">United States</p>
              </div>
              <div>
                <span className="label-mono text-signal-400/30 block mb-2">Inquiries</span>
                <p className="text-dim font-body">Partnerships & Investment</p>
              </div>
              <div>
                <span className="label-mono text-signal-400/30 block mb-2">Response Time</span>
                <p className="text-dim font-body">Within 24 hours</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
