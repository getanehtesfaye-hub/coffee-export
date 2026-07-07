import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-scroll'

const STATS = [
  { value: '30+', label: 'Countries Exported To' },
  { value: '15', label: 'Years of Experience' },
  { value: '500+', label: 'Metric Tons Annually' },
  { value: '98%', label: 'Client Retention' },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-espresso"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-b from-[#1A0F0A] to-[#3B1F14]"
      >
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          viewBox="0 0 400 400"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="beans" width="40" height="40" patternUnits="userSpaceOnUse">
              <ellipse cx="20" cy="20" rx="8" ry="12" fill="none" stroke="#C8973A" strokeWidth="1" />
              <path d="M20 8v24" stroke="#C8973A" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#beans)" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-sage mb-6"
        >
          Specialty Coffee Exports · Ethiopia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-linen text-[42px] md:text-hero max-w-3xl"
        >
          Where the World's Finest Coffee Begins
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-linen/70 text-[17px] max-w-[560px] mt-6"
        >
          Aveline Coffee sources, processes, and exports single-origin Ethiopian
          specialty coffee to discerning roasters and buyers across 30+ countries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <Link
            to="coffee"
            smooth
            duration={500}
            offset={-80}
            className="bg-gold text-espresso px-7 py-3 rounded-sm text-sm font-medium cursor-pointer hover:bg-gold/90 transition-colors"
          >
            Explore Our Coffee
          </Link>
          <button className="border border-linen/40 text-linen px-7 py-3 rounded-sm text-sm font-medium hover:border-linen transition-colors">
            Download Catalogue
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 2 } }}
        className="relative z-10 mx-auto mt-16 text-gold"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </motion.div>

      <div className="relative z-10 border-t border-linen/10 mt-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center md:text-left"
            >
              <div className="font-display text-gold text-xl md:text-2xl">{s.value}</div>
              <div className="text-linen/50 text-xs mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
