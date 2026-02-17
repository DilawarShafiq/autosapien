import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail } from 'lucide-react'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative py-16 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-neural-950/30 to-transparent" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-neural-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-plasma-600/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-neural-400 mb-6">
            Contact Us
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Let's build the{' '}
            <span className="gradient-text">future</span>
            <br />
            together
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-12">
            Ready to transform your business with AI and robotics? Reach out to us.
          </p>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl p-8 inline-block"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neural-500 to-plasma-500 flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm text-neutral-500 mb-1">Email us at</div>
                <a
                  href="mailto:info@autosapien.com"
                  className="text-2xl font-bold text-white hover:text-neural-400 transition-colors"
                >
                  info@autosapien.com
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
