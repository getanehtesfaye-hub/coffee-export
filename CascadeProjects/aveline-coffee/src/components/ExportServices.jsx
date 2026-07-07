import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const CertificateIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <rect x="4" y="3" width="16" height="14" rx="1" stroke="currentColor" strokeWidth="1.3" />
    <path d="M7 7h10M7 10h10M7 13h6" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="9" cy="19.5" r="2" stroke="currentColor" strokeWidth="1.3" />
    <path d="M15 19.5l1.5 2.5M15 19.5l-1.5 2.5" stroke="currentColor" strokeWidth="1.3" />
  </svg>
)

const BoxIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M3 8l9-5 9 5-9 5-9-5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M3 8v9l9 5 9-5V8" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M12 13v9" stroke="currentColor" strokeWidth="1.3" />
  </svg>
)

const ShipIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M3 17l2-7h14l2 7" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M6 10V5h5l3 5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M2 20c2 1 4 1 6 0s4-1 6 0 4 1 6 0" stroke="currentColor" strokeWidth="1.3" />
  </svg>
)

const FlaskIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M10 3h4M10 3v6l-5 9a2 2 0 001.8 3h10.4a2 2 0 001.8-3l-5-9V3" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M8 15h8" stroke="currentColor" strokeWidth="1.3" />
  </svg>
)

const SERVICES = [
  {
    icon: CertificateIcon,
    title: 'Documentation',
    desc: 'ICO certificates, phytosanitary, packing lists, bills of lading handled in-house',
  },
  {
    icon: BoxIcon,
    title: 'Packaging',
    desc: 'GrainPro or Ecotact lined jute bags, 60kg standard or custom sizes',
  },
  {
    icon: ShipIcon,
    title: 'Logistics',
    desc: 'Sea or air freight, Djibouti port coordination, DDP/FOB/CIF terms available',
  },
  {
    icon: FlaskIcon,
    title: 'Sampling',
    desc: 'Pre-shipment samples with every confirmed order, cupping reports included',
  },
]

export default function ExportServices() {
  return (
    <section id="export" className="bg-mahogany py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow text-sage mb-4"
        >
          Export Services
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-linen text-3xl md:text-section max-w-2xl mb-16"
        >
          Full-Service Export, Start to Finish
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <s.icon className="w-7 h-7 text-gold mb-5" />
              <h3 className="text-linen font-medium mb-2">{s.title}</h3>
              <p className="text-linen/60 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-linen/10 pt-10"
        >
          <p className="font-display text-linen text-xl md:text-2xl max-w-md">
            Ready to source Ethiopian specialty coffee? Let's talk.
          </p>
          <Link
            to="contact"
            smooth
            duration={500}
            offset={-80}
            className="bg-gold text-espresso px-7 py-3 rounded-sm text-sm font-medium cursor-pointer hover:bg-gold/90 transition-colors whitespace-nowrap"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
