import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative py-16 sm:py-32 overflow-hidden bg-carbon-850">
      {/* Background */}
      <div className="absolute inset-0 bg-technical-grid opacity-20" />

      {/* Geometric accents - hidden on mobile to prevent overflow */}
      <div className="hidden md:block absolute bottom-0 left-1/4 w-64 h-64 border border-ember-500/10" style={{ transform: 'rotate(45deg)' }} />
      <div className="hidden md:block absolute top-1/4 right-1/4 w-48 h-48 border border-volt-500/10" style={{ transform: 'rotate(45deg)' }} />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ember-500/30 to-transparent" />

      <div ref={ref} className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="badge badge-ember mb-8">
            <span className="label-technical">Contact</span>
          </span>

          <h2 className="font-display font-bold text-display-lg mb-6">
            Let's build the{' '}
            <span className="text-gradient">future</span>
            <br />
            together
          </h2>

          <p className="text-lg text-carbon-400 font-body max-w-2xl mx-auto mb-16">
            Ready to transform your business with AI and robotics? Reach out to discuss
            partnerships, investments, or collaboration opportunities.
          </p>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="mailto:info@autosapien.com"
              className="inline-block card-industrial p-5 sm:p-8 corner-accent group hover-lift max-w-full"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 border-2 border-ember-500 flex items-center justify-center group-hover:bg-ember-500/10 transition-colors flex-shrink-0">
                  <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-ember-400" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="label-technical mb-2">Email us at</div>
                  <div className="text-lg sm:text-2xl font-display font-bold text-white group-hover:text-ember-400 transition-colors break-all sm:break-normal">
                    info@autosapien.com
                  </div>
                </div>
                <div className="hidden sm:flex w-12 h-12 border border-carbon-600 items-center justify-center ml-4 group-hover:border-ember-500 group-hover:bg-ember-500 transition-all flex-shrink-0">
                  <ArrowRight className="w-5 h-5 text-carbon-400 group-hover:text-carbon-900 transition-colors" />
                </div>
              </div>
            </a>
          </motion.div>

          {/* Additional contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-16 border-t border-carbon-700"
          >
            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <span className="label-technical text-ember-500/60 block mb-2">Headquarters</span>
                <p className="text-carbon-300 font-body">Pakistan</p>
              </div>
              <div>
                <span className="label-technical text-ember-500/60 block mb-2">Inquiries</span>
                <p className="text-carbon-300 font-body">Partnerships & Investment</p>
              </div>
              <div>
                <span className="label-technical text-ember-500/60 block mb-2">Response Time</span>
                <p className="text-carbon-300 font-body">Within 24 hours</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
