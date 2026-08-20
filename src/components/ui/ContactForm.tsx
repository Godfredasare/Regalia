'use client'

import { useState } from 'react'
import { Send, MapPin, Clock, Phone, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from './Button'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message. We will be in touch shortly.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div>
          <label className="block text-[11px] font-medium uppercase tracking-[0.2em] text-warm-gray mb-3">
            Full Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border-b border-border-subtle bg-transparent py-3 text-obsidian font-light focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-light-gray"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label className="block text-[11px] font-medium uppercase tracking-[0.2em] text-warm-gray mb-3">
            Email Address
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border-b border-border-subtle bg-transparent py-3 text-obsidian font-light focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-light-gray"
            placeholder="your@email.com"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-[11px] font-medium uppercase tracking-[0.2em] text-warm-gray mb-3">
          Subject
        </label>
        <input
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full border-b border-border-subtle bg-transparent py-3 text-obsidian font-light focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-light-gray"
          placeholder="How can we help?"
          required
        />
      </div>
      <div>
        <label className="block text-[11px] font-medium uppercase tracking-[0.2em] text-warm-gray mb-3">
          Message
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          className="w-full border-b border-border-subtle bg-transparent py-3 text-obsidian font-light focus:outline-none focus:border-gold transition-colors duration-300 resize-none placeholder:text-light-gray"
          placeholder="Tell us about your inquiry..."
          required
        />
      </div>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
          <Send className="w-4 h-4 mr-3" />
          Send Message
        </Button>
      </motion.div>
    </form>
  )
}

export function ContactInfo() {
  const items = [
    { icon: MapPin, label: 'Visit Our Atelier', value: 'Tse-Addo\nAccra, Ghana' },
    { icon: Phone, label: 'Call Us', value: '+234 801 234 5678' },
    { icon: Mail, label: 'Email', value: 'hello@regaliajune.com' },
    { icon: Clock, label: 'Hours', value: 'Mon — Sat: 9am — 6pm\nSunday: By Appointment' },
  ]

  return (
    <div className="space-y-8">
      {items.map((item) => (
        <div key={item.label} className="flex gap-5">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-obsidian/20 text-obsidian">
            <item.icon className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-warm-gray mb-1">
              {item.label}
            </p>
            <p className="text-sm font-light text-obsidian whitespace-pre-line">
              {item.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}