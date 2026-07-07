import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import ethiopiaSvgRaw from '../assets/ethiopia.svg?raw'

const REGIONS = [
  {
    name: 'Yirgacheffe',
    regionId: 'snnpr',
    x: 145,
    y: 265,
    altitude: '1,700–2,200m',
    soil: 'Deep, well-drained red clay loam, rich in organic matter',
    community:
      'Over 45,000 smallholder farmers organized into cooperative unions, most farming under 1.5 hectares',
    volume: '~14,000 metric tons annually',
  },
  {
    name: 'Sidama',
    regionId: 'sidama',
    x: 163,
    y: 236,
    altitude: '1,500–2,000m',
    soil: 'Volcanic loam with strong moisture retention',
    community:
      'Smallholder cooperatives averaging 0.5–1 hectare plots, many farms shaded under native forest canopy',
    volume: '~18,000 metric tons annually',
  },
  {
    name: 'Limu',
    regionId: 'oromiya',
    x: 90,
    y: 190,
    altitude: '1,400–1,900m',
    soil: 'Reddish-brown forest soil, high fertility',
    community:
      'Family-run farms integrated with forest coffee systems, GPS-mapped washing stations',
    volume: '~9,000 metric tons annually',
  },
]

export default function Origins() {
  const [active, setActive] = useState(0)
  const [hovered, setHovered] = useState(null)

  return (
    <section id="origins" className="bg-linen py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow text-sage mb-4"
        >
          Our Origins
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-charcoal text-3xl md:text-section max-w-2xl mb-14"
        >
          Traced to the Source, Every Single Lot
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div className="relative bg-white/40 rounded-sm p-6 aspect-[441.853/328.295] max-w-md mx-auto md:mx-0">
            <div
              className="ethiopia-map absolute inset-6"
              dangerouslySetInnerHTML={{ __html: ethiopiaSvgRaw }}
            />
            <style>{`
              .ethiopia-map svg { width: 100%; height: 100%; overflow: visible; }
              .ethiopia-map path, .ethiopia-map polygon {
                fill: #7A8C74; fill-opacity: 0.15; stroke: #7A8C74; stroke-width: 0.6;
                transition: fill-opacity .2s ease;
              }
              ${REGIONS.map((r) => `.ethiopia-map #${r.regionId}`).join(', ')} {
                fill: #C8973A;
              }
              .ethiopia-map .region-dim { fill-opacity: 0.12 !important; }
              .ethiopia-map .region-active { fill-opacity: 0.55 !important; }
            `}</style>
            <svg viewBox="0 0 441.853 328.295" className="absolute inset-6 w-[calc(100%-3rem)] h-[calc(100%-3rem)]">
              {REGIONS.map((r, i) => (
                <g key={r.name}>
                  {(hovered === i || active === i) && (
                    <circle cx={r.x} cy={r.y} r="14" fill="#C8973A" fillOpacity="0.25" />
                  )}
                  <circle
                    cx={r.x}
                    cy={r.y}
                    r="5"
                    fill="#C8973A"
                    stroke="#F5EDD8"
                    strokeWidth="1.5"
                    className="cursor-pointer"
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setActive(i)}
                  />
                </g>
              ))}
            </svg>
            <AnimatePresence>
              {hovered !== null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-4 left-4 bg-charcoal text-linen text-xs px-3 py-2 rounded-sm"
                >
                  {REGIONS[hovered].name} · {REGIONS[hovered].altitude}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="divide-y divide-charcoal/10 border-y border-charcoal/10">
            {REGIONS.map((r, i) => (
              <div key={r.name}>
                <button
                  onClick={() => setActive(active === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="font-display text-xl text-charcoal">{r.name}</span>
                  <motion.span
                    animate={{ rotate: active === i ? 45 : 0 }}
                    className="text-gold text-2xl leading-none"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {active === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 space-y-2 text-sm text-charcoal/75">
                        <p><span className="text-charcoal font-medium">Altitude:</span> {r.altitude}</p>
                        <p><span className="text-charcoal font-medium">Soil:</span> {r.soil}</p>
                        <p><span className="text-charcoal font-medium">Community:</span> {r.community}</p>
                        <p><span className="text-charcoal font-medium">Volume:</span> {r.volume}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-charcoal/70 text-sm max-w-2xl mt-16 leading-relaxed"
        >
          Every lot we export is tracked from the individual washing station to
          the shipping container. Our direct trade relationships mean we can
          answer exactly which cooperative, which harvest week, and which
          processing method produced the coffee in your cup.
        </motion.p>
      </div>
    </section>
  )
}
