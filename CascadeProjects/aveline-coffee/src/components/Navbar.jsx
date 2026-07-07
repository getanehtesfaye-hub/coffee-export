import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { to: 'about', label: 'About' },
  { to: 'coffee', label: 'Our Coffee' },
  { to: 'origins', label: 'Origins' },
  { to: 'process', label: 'Process' },
  { to: 'export', label: 'Export' },
  { to: 'contact', label: 'Contact' },
]

function BeanIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12 2C7 2 3 6.5 3 12s4 10 9 10 9-4.5 9-10-4-10-9-10z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M12 2C7 2 3 6.5 3 12s4 10 9 10 9-4.5 9-10-4-10-9-10z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M12 3C9 7 9 17 12 21" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled ? 'bg-espresso/95 border-b border-gold/20 backdrop-blur' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">
          <Link to="hero" smooth duration={500} className="flex items-center gap-2 cursor-pointer">
            <BeanIcon className="w-5 h-5 text-gold" />
            <span className="font-display text-gold text-lg tracking-wide">AVELINE COFFEE</span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  smooth
                  duration={500}
                  offset={-80}
                  className="text-linen/80 hover:text-gold text-sm cursor-pointer transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="contact"
            smooth
            duration={500}
            offset={-80}
            className="hidden md:inline-block border border-gold text-gold text-sm px-5 py-2 rounded-sm hover:bg-gold hover:text-espresso transition-colors cursor-pointer"
          >
            Request a Sample
          </Link>

          <button
            className="md:hidden text-gold"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-espresso flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-6 right-6 text-gold"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </button>
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                smooth
                duration={500}
                offset={-40}
                onClick={() => setMenuOpen(false)}
                className="font-display text-3xl text-cream text-linen cursor-pointer hover:text-gold transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
