'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from './Button'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="bg-ivory py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-obsidian/70 mb-4">
            The House of June
          </p>
          <h2 className="heading-md text-obsidian mb-4">Join Our World</h2>
          <div className="gold-line-long mx-auto mb-6" />
          <p className="body-md text-warm-gray mb-10 max-w-md mx-auto">
            Receive exclusive invitations to private viewings, early access to new collections, and insights from our creative directors.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 border-b border-border-subtle bg-transparent py-3 px-1 text-obsidian font-light focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-light-gray text-center sm:text-left"
                required
              />
              <Button type="submit" variant="primary" size="md" className="gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          ) : (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold font-heading text-xl"
            >
              Welcome to the House of June.
            </motion.p>
          )}

          <p className="text-[11px] text-warm-gray/60 mt-6">
            By subscribing, you agree to our privacy policy. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  )
}