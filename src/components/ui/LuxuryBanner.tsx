'use client'

import { useRef } from 'react'
import { cn } from '@/lib/utils'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'

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

const EASE_LUX: [number, number, number, number] = [0.22, 1, 0.36, 1]

/** Splits a title into staggered words that rise into place. */
function RevealTitle({ text }: { text: string }) {
  return (
    <h2
      className="heading-lg mb-6 flex flex-wrap text-white"
      aria-label={text}
    >
      {text.split(' ').map((word, i) => (
        <span key={`${word}-${i}`} className="overflow-hidden pb-1">
          <motion.span
            className="mr-[0.28em] inline-block last:mr-0"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.35 + i * 0.09, ease: EASE_LUX }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h2>
  )
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
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const isMobile = useIsMobile()

  // Gentle parallax drift — softened on phones (small viewport + less GPU)
  // and removed entirely for reduced-motion users.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const parallaxRange = reduceMotion ? 0 : isMobile ? 40 : 90
  const imgY = useTransform(scrollYProgress, [0, 1], [0, parallaxRange])

  const wordCount = title.split(' ').length

  return (
    <div
      ref={ref}
      className={cn(
        'relative flex min-h-[58svh] items-center overflow-hidden md:min-h-[68svh]',
        className
      )}
    >
      <motion.div style={{ y: imgY }} className="absolute inset-0">
        <motion.img
          src={image}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          initial={reduceMotion ? false : { scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: isMobile ? 2 : 2.6, ease: EASE_LUX }}
        />
      </motion.div>
      <div
        className={cn(
          'absolute inset-0',
          overlay === 'dark'
            ? 'bg-gradient-to-b from-navy-dark/60 via-navy-dark/45 to-navy-dark/75'
            : 'bg-gradient-to-r from-ivory/90 to-ivory/70'
        )}
      />

      {/* Bottom hairline in gold — quiet signature */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-24">
        {children || (
          <div className="max-w-2xl">
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: EASE_LUX }}
                className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-gold"
              >
                {subtitle}
              </motion.p>
            )}
            <RevealTitle text={title} />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.4 + wordCount * 0.09, ease: EASE_LUX }}
              className="gold-line-long origin-left mb-6"
            />
            {ctaText && (
              <motion.a
                href={ctaLink}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + wordCount * 0.09, ease: EASE_LUX }}
                className="inline-flex items-center border-b border-gold/50 pb-1 text-[11px] font-medium uppercase tracking-[0.2em] text-gold transition-colors duration-300 hover:border-gold"
              >
                {ctaText}
              </motion.a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
