import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'About', href: '/#about' },
    { name: 'Capabilities', href: '/#capabilities' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ],
  robotics: [
    { name: 'Autosapien G1', href: '/projects/humanoid', isRoute: true },
    { name: 'Home Robots', href: '/projects/home-robotics', isRoute: true },
    { name: 'Industrial Robots', href: '/projects/industrial-robotics', isRoute: true },
    { name: 'Foundation Models', href: '/projects/foundation-models', isRoute: true },
  ],
  platforms: [
    { name: 'xEHR.io', href: '/projects/healthcare-it', isRoute: true },
    { name: 'AI Film Studio', href: '/projects/film-studio', isRoute: true },
    { name: 'Agentic AI', href: '/projects/agentic-ai', isRoute: true },
    { name: 'RCM AI Employees', href: 'https://rcmemployee.com' },
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

              {/* Social links */}
              <div className="flex gap-3">
                {[
                  { name: 'linkedin', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                  { name: 'twitter', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                  { name: 'github', path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
                  { name: 'youtube', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={`#${social.name}`}
                    className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center hover:bg-sky-500/10 hover:border-sky-500/30 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <svg className="w-3.5 h-3.5 text-white/30 group-hover:text-sky-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
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
