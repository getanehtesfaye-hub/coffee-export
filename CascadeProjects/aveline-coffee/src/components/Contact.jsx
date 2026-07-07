import { motion } from 'framer-motion'
import { useState } from 'react'

const COUNTRIES = [
  'United States', 'Germany', 'United Kingdom', 'Japan', 'South Korea',
  'Australia', 'Netherlands', 'Canada', 'United Arab Emirates', 'Sweden', 'Other',
]

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnjkrdqp'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-linen py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow text-sage mb-4"
        >
          Contact Us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-charcoal text-3xl md:text-section max-w-2xl mb-16"
        >
          Start a Conversation
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div>
              <p className="text-charcoal/50 text-xs uppercase tracking-wide mb-1">Address</p>
              <p className="text-charcoal">Bole Sub City, Addis Ababa, Ethiopia</p>
            </div>
            <div>
              <p className="text-charcoal/50 text-xs uppercase tracking-wide mb-1">Email</p>
              <p className="text-charcoal">exports@avelinecoffee.com</p>
            </div>
            <div>
              <p className="text-charcoal/50 text-xs uppercase tracking-wide mb-1">Phone</p>
              <p className="text-charcoal">+251 911 000 000</p>
            </div>
            <div>
              <p className="text-charcoal/50 text-xs uppercase tracking-wide mb-1">Office Hours</p>
              <p className="text-charcoal">Mon–Fri, 8:00am – 5:00pm EAT</p>
            </div>
            <p className="text-charcoal/60 text-sm pt-4 border-t border-charcoal/10">
              We respond to all export inquiries within 24 business hours.
            </p>
          </div>

          <div>
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-sm p-10 text-center"
              >
                <h3 className="font-display text-2xl text-charcoal mb-3">Inquiry Sent</h3>
                <p className="text-charcoal/60 text-sm">
                  Thank you — a member of our export team will respond within
                  24 business hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  required
                  name="name"
                  placeholder="Full Name"
                  className="w-full bg-white border border-charcoal/15 rounded-sm px-4 py-3 text-sm placeholder:text-charcoal/40 focus:outline-none focus:border-gold"
                />
                <input
                  required
                  name="company"
                  placeholder="Company Name"
                  className="w-full bg-white border border-charcoal/15 rounded-sm px-4 py-3 text-sm placeholder:text-charcoal/40 focus:outline-none focus:border-gold"
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full bg-white border border-charcoal/15 rounded-sm px-4 py-3 text-sm placeholder:text-charcoal/40 focus:outline-none focus:border-gold"
                />
                <select
                  required
                  name="country"
                  defaultValue=""
                  className="w-full bg-white border border-charcoal/15 rounded-sm px-4 py-3 text-sm text-charcoal/70 focus:outline-none focus:border-gold"
                >
                  <option value="" disabled>Country</option>
                  {COUNTRIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <select
                  required
                  name="volume"
                  defaultValue=""
                  className="w-full bg-white border border-charcoal/15 rounded-sm px-4 py-3 text-sm text-charcoal/70 focus:outline-none focus:border-gold"
                >
                  <option value="" disabled>Volume of Interest</option>
                  <option>Under 5MT</option>
                  <option>5–20MT</option>
                  <option>20–50MT</option>
                  <option>50MT+</option>
                </select>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Message"
                  className="w-full bg-white border border-charcoal/15 rounded-sm px-4 py-3 text-sm placeholder:text-charcoal/40 focus:outline-none focus:border-gold resize-none"
                />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-gold text-espresso py-3 rounded-sm text-sm font-medium hover:bg-gold/90 transition-colors disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Inquiry'}
                </button>
                {status === 'error' && (
                  <p className="text-red-600 text-sm text-center">
                    Something went wrong — please try again or email us directly.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

