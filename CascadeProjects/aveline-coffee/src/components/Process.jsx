import { motion } from 'framer-motion'

const STEPS = [
  {
    n: '1',
    title: 'Sourcing',
    desc: 'Direct relationships with 200+ smallholder farmers across origin regions',
  },
  {
    n: '2',
    title: 'Sorting & Grading',
    desc: 'Hand-sorted at our ECX-certified dry mills to SCAA grade standards',
  },
  {
    n: '3',
    title: 'Processing',
    desc: 'Natural, washed, or wet-hulled; lot-separated and moisture-controlled',
  },
  {
    n: '4',
    title: 'Quality Control',
    desc: 'Every lot cupped by our Q-grader team before export approval',
  },
  {
    n: '5',
    title: 'Export & Logistics',
    desc: 'GrainPro-lined jute bags, sea freight or airfreight, full ICO documentation',
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-espresso py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow text-sage mb-4"
        >
          How We Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-linen text-3xl md:text-section max-w-2xl mb-20"
        >
          From Harvest to Your Roastery
        </motion.h2>

        <div className="relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              style={{ transformOrigin: 'left' }}
              className="h-full w-full border-t-2 border-dashed border-gold/50"
            />
          </div>

          <div className="grid md:grid-cols-5 gap-10 md:gap-6">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative flex md:flex-col gap-4 md:gap-0 md:text-left"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-espresso border border-gold text-gold flex items-center justify-center font-display text-lg z-10">
                  {s.n}
                </div>
                <div className="md:mt-6">
                  <h3 className="text-linen font-medium mb-2">{s.title}</h3>
                  <p className="text-linen/60 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
