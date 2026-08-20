'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface LuxuryBannerProps {
  title: string
  subtitle?: string
  image: string
  ctaText?: string
  ctaLink?: string
  overlay?: 'dark' | 'light'
  className?: string
  children?: React.ReactNode
}

export function LuxuryBanner({
  title,
  subtitle,
  image,
  ctaText,
  ctaLink = '#',
  overlay = 'dark',
  className,
  children,
}: LuxuryBannerProps) {
  return (
    <div className={cn('relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden', className)}>
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.05 }}
        transition={{ duration: 20, ease: 'easeInOut' }}
        viewport={{ once: true }}
      >
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </motion.div>
      <div
        className={cn(
          'absolute inset-0',
          overlay === 'dark' ? 'hero-overlay' : 'bg-gradient-to-r from-ivory/90 to-ivory/70'
        )}
      />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24">
        {children || (
          <div className="max-w-2xl">
            {subtitle && (
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold mb-4">
                {subtitle}
              </p>
            )}
            <h2 className="heading-lg text-white mb-6">{title}</h2>
            {ctaText && (
              <a
                href={ctaLink}
                className="inline-flex items-center text-[11px] font-medium uppercase tracking-[0.2em] text-gold border-b border-gold/50 pb-1 hover:border-gold transition-colors duration-300"
              >
                {ctaText}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}