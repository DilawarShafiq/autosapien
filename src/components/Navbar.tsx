import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Capabilities', href: '#capabilities' },
  { name: 'Projects', href: '#projects' },
  { name: 'Technology', href: '#technology' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <nav
            className={`relative flex items-center justify-between transition-all duration-500 ${
              isScrolled
                ? 'bg-carbon-900/90 backdrop-blur-xl border border-carbon-700 rounded-none px-6 py-3'
                : 'bg-transparent'
            }`}
          >
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/" className="flex items-center gap-3 group">
                {/* Geometric logo mark */}
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 border-2 border-ember-500 rotate-45" />
                  <div className="absolute inset-2 bg-ember-500 rotate-45" />
                </div>
                <span className="text-xl font-display font-bold tracking-tight">
                  AUTO<span className="text-ember-400">SAPIEN</span>
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-body text-carbon-300 hover:text-white transition-colors group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-ember-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </motion.a>
              ))}
            </div>

            {/* Email Link */}
            <motion.a
              href="mailto:info@autosapien.com"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 border border-carbon-600 text-white text-sm font-body hover:border-ember-500 hover:text-ember-400 transition-all"
            >
              <span>info@autosapien.com</span>
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-carbon-300 hover:text-white transition-colors"
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
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-carbon-950/98 backdrop-blur-xl" />

            {/* Technical grid overlay */}
            <div className="absolute inset-0 bg-technical-grid opacity-30" />

            <nav className="relative flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-3xl font-display font-bold text-carbon-300 hover:text-ember-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="mailto:info@autosapien.com"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 px-8 py-4 border-2 border-ember-500 text-ember-400 font-display font-semibold"
              >
                info@autosapien.com
              </motion.a>
            </nav>

            {/* Corner accents */}
            <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-ember-500/30" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-ember-500/30" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
