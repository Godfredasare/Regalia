'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  image: string
  className?: string
}

export function TestimonialCard({ quote, name, title, image, className }: TestimonialCardProps) {
  return (
    <motion.div
      className={cn('text-center px-4', className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="mb-6 flex justify-center">
        <svg className="w-10 h-10 text-gold/40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <blockquote className="font-heading text-xl md:text-2xl font-light leading-relaxed text-obsidian italic mb-8 max-w-xl mx-auto">
        "{quote}"
      </blockquote>
      <div className="flex flex-col items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <p className="text-sm font-medium text-obsidian tracking-wide">{name}</p>
          <p className="text-xs text-warm-gray mt-0.5">{title}</p>
        </div>
      </div>
    </motion.div>
  )
}