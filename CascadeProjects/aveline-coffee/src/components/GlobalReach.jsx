import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import worldSvgRaw from '../assets/world.svg?raw'

// ISO 3166-1 alpha-2 ids matching the ids in world.svg
const DESTINATION_IDS = ['us', 'ca', 'de', 'gb', 'se', 'ae', 'jp', 'kr', 'au', 'nl']

const REGIONS = ['North America', 'Europe', 'Middle East', 'Asia Pacific', 'Scandinavia']

const TESTIMONIALS = [
  {
    quote:
      "Aveline's Yirgacheffe G1 is the most consistently traceable lot we've sourced in a decade. Exceptional cup quality, flawless documentation.",
    name: 'Head of Procurement',
    role: 'Specialty roastery, Berlin',
  },
  {
    quote:
      "Their communication, lead times, and quality consistency make them our first call for Ethiopian origin. We've been buying from them for 6 years.",
    name: 'Green Coffee Buyer',
    role: 'Tokyo',
  },
]

export default function GlobalReach() {
  const [hoveredName, setHoveredName] = useState(null)

  const handleOver = (e) => {
    const target = e.target.closest('path[id]')
    if (target && DESTINATION_IDS.includes(target.id)) {
      setHoveredName(target.getAttribute('aria-label'))
    }
  }
  const handleOut = (e) => {
    const target = e.target.closest('path[id]')
    if (target && DESTINATION_IDS.includes(target.id)) {
      setHoveredName(null)
    }
  }

  return (
    <section className="bg-linen py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow text-sage mb-4"
        >
          Global Presence
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-charcoal text-3xl md:text-section max-w-2xl mb-14"
        >
          Trusted by Roasters in 30+ Countries
        </motion.h2>

        <div
          className="world-map relative bg-white/50 rounded-sm p-6 mb-2"
          onMouseOver={handleOver}
          onMouseOut={handleOut}
          dangerouslySetInnerHTML={{ __html: worldSvgRaw }}
        />
        <style>{`
          .world-map svg { width: 100%; height: auto; display: block; }
          .world-map path { fill: #7A8C74; fill-opacity: 0.18; stroke: #F5EDD8; stroke-width: 0.3; transition: fill-opacity .15s ease; }
          ${DESTINATION_IDS.map((id) => `.world-map path#${id}`).join(', ')} {
            fill: #C8973A; fill-opacity: 0.85; cursor: pointer;
          }
          ${DESTINATION_IDS.map((id) => `.world-map path#${id}:hover`).join(', ')} {
            fill-opacity: 1;
          }
        `}</style>
        <AnimatePresence>
          {hoveredName && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative -mt-2 mb-8 inline-block bg-charcoal text-linen text-xs px-3 py-2 rounded-sm"
            >
              {hoveredName}
            </motion.div>
          )}
        </AnimatePresence>
        <p className="text-charcoal/30 text-xs mb-8">Map data &copy; svg-maps.com, CC BY 4.0</p>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-20">
          {REGIONS.map((r) => (
            <span key={r} className="text-charcoal/60 text-sm uppercase tracking-wide">
              {r}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white border-l-4 border-gold rounded-sm p-8"
            >
              <p className="font-display text-lg text-charcoal leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-mahogany/20" />
                <div>
                  <div className="text-charcoal text-sm font-medium">{t.name}</div>
                  <div className="text-charcoal/50 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
