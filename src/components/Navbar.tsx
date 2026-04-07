import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Capabilities', href: '#capabilities' },
  { name: 'Projects', href: '#projects' },
  { name: 'Technology', href: '#technology' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-2 sm:py-2.5' : 'py-4 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav
            className={`relative flex items-center justify-between transition-all duration-500 ${
              isScrolled
                ? 'bg-white/90 backdrop-blur-xl border border-surface-200 rounded-full px-6 py-2.5 shadow-card'
                : ''
            }`}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 z-10">
              <img src="/logo.png?v=2" alt="Autosapien" className="h-14 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-body font-medium transition-colors group text-ink-500 hover:text-ink-900"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 + 0.3 }}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-4 right-4 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-sky-500" />
                </motion.a>
              ))}

              <motion.a
                href="https://xehr.io"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 + 0.3 }}
                className="ml-3 px-5 py-2 text-sm font-display font-semibold rounded-full bg-ink-900 hover:bg-sky-600 text-white transition-all duration-300"
              >
                xEHR.io ↗
              </motion.a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 transition-colors text-ink-500 hover:text-ink-900"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-white/98 backdrop-blur-xl" />

            <nav className="relative flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="text-3xl font-display font-bold text-ink-900 hover:text-sky-600 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="https://xehr.io"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
                className="mt-2 px-8 py-3 rounded-full bg-ink-900 text-white font-display font-semibold text-lg"
              >
                xEHR.io ↗
              </motion.a>
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-ink-500"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
