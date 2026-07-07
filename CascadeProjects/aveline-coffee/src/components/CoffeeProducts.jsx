import { motion } from 'framer-motion'

const LeafIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path
      d="M4 20c8-1 14-7 15-15-9 1-15 7-15 15z"
      stroke="currentColor"
      strokeWidth="1.3"
    />
    <path d="M6 18C10 14 14 10 18 6" stroke="currentColor" strokeWidth="1.3" />
  </svg>
)

const MountainIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M3 18l6-9 4 5 2-3 6 7H3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
  </svg>
)

const CupIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M5 8h11v6a5 5 0 01-5 5H9a4 4 0 01-4-4V8z" stroke="currentColor" strokeWidth="1.3" />
    <path d="M16 9h1.5a2.5 2.5 0 010 5H16" stroke="currentColor" strokeWidth="1.3" />
    <path d="M7 5c0-1 1-1 1-2M11 5c0-1 1-1 1-2" stroke="currentColor" strokeWidth="1.3" />
  </svg>
)

const PRODUCTS = [
  {
    icon: LeafIcon,
    name: 'Yirgacheffe Grade 1',
    tag: 'Single Origin · Natural Process',
    desc: 'Floral, bergamot, and blueberry notes. Grown at 1,700–2,200m in the Gedeo Zone. SCAA score 88–92.',
    detail: 'Altitude: 1,700–2,200m · Harvest: Oct–Jan · Process: Natural',
  },
  {
    icon: MountainIcon,
    name: 'Sidama Grade 2',
    tag: 'Single Origin · Washed Process',
    desc: 'Bright citrus acidity with stone fruit and jasmine. Sourced from smallholder cooperatives in the Sidama Zone.',
    detail: 'Altitude: 1,500–2,000m · Harvest: Nov–Feb · Process: Washed',
  },
  {
    icon: CupIcon,
    name: 'Limu Grade 1',
    tag: 'Single Origin · Wet Hulled',
    desc: 'Well-balanced, wine-like sweetness with chocolate undertones. Traceable to GPS-mapped washing stations.',
    detail: 'Altitude: 1,400–1,900m · Harvest: Nov–Jan · Process: Wet Hulled',
  },
]

export default function CoffeeProducts() {
  return (
    <section id="coffee" className="bg-espresso py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow text-sage mb-4"
        >
          Our Offerings
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-linen text-3xl md:text-section max-w-2xl mb-14"
        >
          From Bean to Export, Uncompromising Quality
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-mahogany border-t-2 border-gold rounded-sm p-8"
            >
              <p.icon className="w-7 h-7 text-gold mb-6" />
              <h3 className="font-display text-linen text-xl mb-2">{p.name}</h3>
              <p className="text-gold/80 text-xs uppercase tracking-wide mb-4">{p.tag}</p>
              <p className="text-linen/70 text-sm leading-relaxed mb-6">{p.desc}</p>
              <p className="text-linen/40 text-xs border-t border-linen/10 pt-4">{p.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
