'use client'

import { Calendar, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from './Button'

export function AppointmentCard() {
  return (
    <motion.div
      className="bg-obsidian text-white p-8 md:p-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex items-start gap-4 mb-6">
        <Calendar className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-heading text-2xl md:text-3xl font-light mb-3">
            Book a Private Appointment
          </h3>
          <p className="body-md text-white/60 max-w-lg">
            Experience REGALIA in an intimate, one-on-one consultation with our style advisors. Whether you're preparing for a special occasion or building a new wardrobe, we're here to guide you.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mt-8">
        <Button variant="gold" size="md">
          Schedule Visit
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
        <Button variant="ghost" size="md" className="text-white hover:text-gold">
          Request Callback
        </Button>
      </div>
    </motion.div>
  )
}