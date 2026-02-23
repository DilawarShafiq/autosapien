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
          isScrolled ? 'py-2 sm:py-3' : 'py-3 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav
            className={`relative flex items-center justify-between transition-all duration-500 ${
              isScrolled
                ? 'bg-white/90 backdrop-blur-xl border border-surface-200 rounded-full px-6 py-2.5 shadow-card'
                : 'bg-transparent'
            }`}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              {isScrolled ? (
                <img src="/logo.png" alt="Autosapien" className="h-10 w-auto" />
              ) : (
                <div className="bg-white/90 rounded-lg p-1.5 backdrop-blur-sm">
                  <img src="/logo.png" alt="Autosapien" className="h-8 w-auto" />
                </div>
              )}
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-body transition-colors group ${
                    isScrolled
                      ? 'text-ink-500 hover:text-ink-900'
                      : 'text-white/60 hover:text-white'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-4 right-4 h-px scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${
                    isScrolled ? 'bg-amber-500' : 'bg-gold-400'
                  }`} />
                </motion.a>
              ))}
            </div>

            {/* Right side */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className={`hidden md:block text-sm font-body ${
                isScrolled ? 'text-ink-400' : 'text-gold-400/60'
              }`}
            >
              AI & Robotics
            </motion.span>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors ${
                isScrolled ? 'text-ink-500 hover:text-ink-900' : 'text-white/60 hover:text-white'
              }`}
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
            <div className="absolute inset-0 bg-white/98 backdrop-blur-xl" />

            <nav className="relative flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-3xl font-display font-bold text-ink-900 hover:text-amber-600 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
