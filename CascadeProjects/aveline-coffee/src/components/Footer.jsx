const LinkedInIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.3" />
    <path d="M7 10v6M7 7.5v.01M11 16v-4c0-1 1-2 2.5-2s2.5 1 2.5 2v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
)

const InstagramIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="17" cy="7" r="1" fill="currentColor" />
  </svg>
)

const COLUMNS = [
  {
    title: 'Company',
    links: ['About', 'Our Coffee', 'Process', 'Certifications'],
  },
  {
    title: 'Services',
    links: ['Exporting', 'Sampling', 'Documentation', 'Logistics'],
  },
  {
    title: 'Contact',
    links: ['Bole Sub City, Addis Ababa', 'exports@avelinecoffee.com', '+251 911 000 000'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-espresso border-t border-gold/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div>
            <p className="font-display text-gold text-lg mb-2">AVELINE COFFEE</p>
            <p className="text-linen/50 text-sm">Specialty Exports from Ethiopia</p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-linen/40 text-xs uppercase tracking-wide mb-4">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l} className="text-linen/70 text-sm">{l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 pt-8 border-t border-linen/10">
          <p className="text-linen/40 text-xs">
            &copy; 2025 Aveline Coffee. All rights reserved.
          </p>
          <div className="flex gap-4 text-linen/60">
            <LinkedInIcon className="w-5 h-5 hover:text-gold transition-colors cursor-pointer" />
            <InstagramIcon className="w-5 h-5 hover:text-gold transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  )
}
