import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function CountUp({ target, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { duration: 1.4 })
  const [text, setText] = useState('0')

  useEffect(() => {
    if (inView) motionVal.set(target)
  }, [inView, target, motionVal])

  useEffect(() => {
    const unsub = spring.on('change', (v) => setText(Math.round(v).toString()))
    return unsub
  }, [spring])

  return (
    <span ref={ref}>
      {text}
      {suffix}
    </span>
  )
}

const STATS = [
  { target: 15, suffix: '+', label: 'Years of Expertise' },
  { target: 12, suffix: '', label: 'Origin Regions' },
  { target: 500, suffix: '+', label: 'Global Clients' },
]

const CERTS = ['UTZ Certified', 'Rainforest Alliance', 'Fair Trade', 'SCA Member']

export default function About() {
  return (
    <section id="about" className="bg-linen py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow text-sage mb-4"
        >
          Who We Are
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-charcoal text-3xl md:text-section max-w-2xl mb-14"
        >
          Rooted in Ethiopia. Trusted by the World.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-14">
          <div className="space-y-6 text-charcoal/80 text-[17px] leading-relaxed">
            <p>
              Aveline Coffee was founded in the highlands surrounding Yirgacheffe,
              where coffee has grown wild and cultivated for generations. We work
              directly with farming families and cooperatives across Ethiopia's
              principal growing zones, maintaining the relationships that make
              consistent quality possible year after year.
            </p>
            <p>
              Our mission is straightforward: give international buyers reliable
              access to Ethiopia's best lots, with full traceability from washing
              station to shipping container. Every lot we export is cupped,
              graded, and documented before it leaves our mills in Addis Ababa.
            </p>
            <p>
              We measure our success by client retention, not volume alone.
              Roasters who buy from Aveline once tend to keep buying &mdash;
              because the cup quality, documentation, and lead times stay
              consistent, shipment after shipment.
            </p>
          </div>

          <div className="space-y-0">
            {STATS.map((s, i) => (
              <div key={s.label}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="py-6"
                >
                  <div className="font-display text-gold text-4xl md:text-5xl">
                    <CountUp target={s.target} suffix={s.suffix} />
                  </div>
                  <div className="text-charcoal/60 text-sm mt-2">{s.label}</div>
                </motion.div>
                {i < STATS.length - 1 && <div className="h-px bg-gold/30" />}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 mt-16 pt-10 border-t border-charcoal/10"
        >
          {CERTS.map((c) => (
            <span
              key={c}
              className="text-xs uppercase tracking-wide text-charcoal/70 border border-charcoal/20 rounded-full px-4 py-2"
            >
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
