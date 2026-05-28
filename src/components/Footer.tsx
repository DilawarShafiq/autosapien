import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'About', href: '/#about' },
    { name: 'Products', href: '/#products' },
    { name: 'Services', href: '/#services' },
    { name: 'Technology', href: '/#technology' },
    { name: 'Contact', href: '/#contact' },
  ],
  products: [
    { name: 'xEHR.io', href: 'https://xehr.io' },
    { name: 'RCM Employee', href: 'https://rcmemployee.com' },
    { name: 'BetterCompliant', href: 'https://bettercompliant.com' },
    { name: 'Thales', href: '/projects/thales', isRoute: true },
  ],
  services: [
    { name: 'Custom EHR / PM Development', href: '/#services' },
    { name: 'Admin Workflow Automation', href: '/#services' },
    { name: 'Multi-Agentic Workflows', href: '/#services' },
    { name: 'Agentic AI', href: '/projects/agentic-ai', isRoute: true },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy', isRoute: true },
    { name: 'Terms', href: '/terms', isRoute: true },
    { name: 'Security', href: '/security', isRoute: true },
    { name: 'HIPAA', href: '/hipaa', isRoute: true },
  ],
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #070a0f 0%, #0a0e17 40%, #060a12 100%)' }}>
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(0,133,212,0.4) 30%, rgba(0,133,212,0.6) 50%, rgba(0,133,212,0.4) 70%, transparent 100%)' }} />

      {/* Subtle radial glow — top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ width: 'min(900px, 100vw)', height: '400px', background: 'radial-gradient(ellipse at center, rgba(0,133,212,0.06) 0%, transparent 70%)' }} />

      {/* Subtle radial glow — bottom right */}
      <div className="absolute bottom-0 right-0 pointer-events-none" style={{ width: 'min(600px, 60vw)', height: '300px', background: 'radial-gradient(ellipse at bottom right, rgba(0,133,212,0.04) 0%, transparent 70%)' }} />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        {/* Main footer content */}
        <div className="pt-16 sm:pt-20 pb-12 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand column */}
            <div className="lg:col-span-4">
              <Link to="/" className="inline-flex items-center mb-5">
                <img src="/logo-footer.png" alt="Autosapien" className="h-14 w-auto" />
              </Link>

              <p className="text-[15px] text-white/45 font-body leading-relaxed max-w-sm mb-8">
                From humanoid robots to healthcare AI,
                we're engineering intelligence into existence.
              </p>

              {/* Contact links */}
              <div className="flex flex-col gap-2.5">
                <a
                  href="mailto:info@autosapien.com"
                  className="inline-flex items-center gap-2.5 text-[13px] text-white/55 font-body hover:text-sky-400 transition-colors duration-300 group"
                >
                  <span className="w-7 h-7 rounded-md bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:bg-sky-500/10 group-hover:border-sky-500/30 transition-all">
                    <svg className="w-3 h-3 text-white/40 group-hover:text-sky-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  info@autosapien.com
                </a>
                <div className="inline-flex items-center gap-2.5 text-[13px] text-white/45 font-body">
                  <span className="w-7 h-7 rounded-md bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  Lahore, Pakistan · Serving USA
                </div>
              </div>
            </div>

            {/* Link columns */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                  <h4 className="text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-white/50 mb-5">{title}</h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        {'isRoute' in link && link.isRoute ? (
                          <Link
                            to={link.href}
                            className="text-[13px] text-white/30 font-body hover:text-sky-400 transition-colors duration-300"
                          >
                            {link.name}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            className="text-[13px] text-white/30 font-body hover:text-sky-400 transition-colors duration-300"
                          >
                            {link.name}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 20%, rgba(255,255,255,0.06) 80%, transparent 100%)' }} />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-white/20 font-body">
            &copy; {new Date().getFullYear()} Autosapien (Pvt) Ltd. All rights reserved.
          </span>

          <div className="flex items-center gap-5">
            <span className="text-[10px] text-white/15 font-mono uppercase tracking-[0.2em]">
              Engineering intelligence into existence
            </span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center hover:bg-sky-500/10 hover:border-sky-500/30 transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-white/25 group-hover:text-sky-400 transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
