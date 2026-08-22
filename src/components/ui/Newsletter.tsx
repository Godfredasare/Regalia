'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { motion } from 'framer-motion'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="border-t border-border-subtle bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
            The House of June
          </p>
          <h2 className="heading-md mb-5 text-obsidian">Join Our World</h2>
          <div className="gold-line-long mx-auto mb-7" />
          <p className="body-md mx-auto mb-10 max-w-md leading-relaxed text-warm-gray">
            Receive exclusive invitations to private viewings, early access to
            new collections, and insights from our creative directors.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-lg flex-col gap-4 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                className="flex-1 border-b border-border-subtle bg-transparent px-1 py-3 font-light text-obsidian transition-colors duration-500 placeholder:text-light-gray focus:border-gold focus:outline-none sm:text-left"
                required
              />
              <button
                type="submit"
                className="group inline-flex min-h-[44px] items-center justify-center gap-2 border border-obsidian/70 px-8 py-3 text-xs uppercase tracking-[0.18em] text-obsidian transition-all duration-500 ease-lux hover:border-obsidian hover:bg-obsidian hover:text-white active:scale-[0.97]"
              >
                Subscribe
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </button>
            </form>
          ) : (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 font-heading text-xl text-gold"
            >
              <Check className="h-5 w-5" strokeWidth={1.5} />
              Welcome to the House of June.
            </motion.p>
          )}

          <p className="mt-6 text-[11px] text-warm-gray/60">
            By subscribing, you agree to our privacy policy. Unsubscribe
            anytime.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
