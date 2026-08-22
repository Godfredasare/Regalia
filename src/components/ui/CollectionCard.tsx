'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface CollectionCardProps {
  name: string
  description: string
  image: string
  slug: string
  productCount?: number
  className?: string
  variant?: 'default' | 'tall'
  accent?: 'default' | 'emerald'
}

const MotionLink = motion.create(Link)

export function CollectionCard({
  name,
  description,
  image,
  slug,
  productCount,
  className,
  variant = 'default',
  accent = 'default',
}: CollectionCardProps) {
  return (
    <MotionLink
      href={`/collections/${slug}`}
      className={cn(
        'group relative block overflow-hidden bg-navy',
        variant === 'default' ? 'aspect-[3/4]' : 'aspect-[2/3]',
        className
      )}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover transition-transform duration-[1600ms] ease-lux group-hover:scale-[1.06]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/85 via-navy-dark/25 to-transparent transition-opacity duration-700 group-hover:from-navy-dark/90" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <p
          className={cn(
            'mb-2 text-[10px] font-medium uppercase tracking-[0.3em]',
            accent === 'emerald' ? 'text-emerald-light' : 'text-gold'
          )}
        >
          Collection
        </p>
        <h3 className="mb-2 font-heading text-2xl font-light text-white">
          {name}
        </h3>

        {/* Description: always visible on touch (no hover), reveals on hover for pointers */}
        <p className="mb-4 max-w-xs text-sm font-light leading-relaxed text-white/70 line-clamp-2 opacity-100 transition-all duration-500 ease-lux md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className={cn(
                'border-b pb-0.5 text-[10px] uppercase tracking-[0.2em] transition-colors duration-500',
                accent === 'emerald'
                  ? 'border-emerald-light/50 text-emerald-light group-hover:border-emerald-light'
                  : 'border-gold/50 text-gold group-hover:border-gold'
              )}
            >
              Explore
            </span>
            {productCount ? (
              <span className="text-[10px] uppercase tracking-wider text-white/50">
                {productCount} {productCount === 1 ? 'piece' : 'pieces'}
              </span>
            ) : null}
          </div>
          {/* Corner arrow gives touch users an explicit affordance */}
          <span
            className={cn(
              'flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-500 ease-lux group-hover:rotate-45',
              accent === 'emerald'
                ? 'border-emerald-light/40 text-emerald-light'
                : 'border-gold/40 text-gold'
            )}
          >
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </span>
        </div>
      </div>
    </MotionLink>
  )
}
