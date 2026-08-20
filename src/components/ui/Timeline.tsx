'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TimelineItem {
  year: string
  title: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn('relative', className)}>
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2" />
      <div className="space-y-12 md:space-y-16">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className={cn(
              'relative flex flex-col md:flex-row gap-4 md:gap-16 pl-12 md:pl-0',
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            )}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className={cn(
              'flex-1',
              i % 2 === 0 ? 'md:text-right' : 'md:text-left'
            )}>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-obsidian/60 mb-2">
                {item.year}
              </p>
              <h3 className="font-heading text-xl font-light text-obsidian mb-2">
                {item.title}
              </h3>
              <p className="body-md text-warm-gray">
                {item.description}
              </p>
            </div>
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 md:top-1/2 md:-translate-y-1/2 w-3 h-3 bg-gold rounded-full border-4 border-white shadow-sm" />
            <div className="flex-1 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}