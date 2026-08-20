'use client'

import Link from 'next/link'
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
}: CollectionCardProps) {
  return (
    <MotionLink
      href={`/collections/${slug}`}
      className={cn(
        'group relative block overflow-hidden',
        variant === 'default' ? 'aspect-[3/4]' : 'aspect-[2/3]',
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/80" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.3em] text-gold transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
          Collection
        </p>
        <h3 className="font-heading text-2xl font-light text-white mb-2">
          {name}
        </h3>
        <p className="text-sm font-light text-white/70 max-w-xs line-clamp-2 mb-4 opacity-0 translate-y-4 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
          {description}
        </p>
        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold border-b border-gold/50 pb-0.5">
            Explore
          </span>
          {productCount && (
            <span className="text-[10px] text-white/50 uppercase tracking-wider">
              {productCount} pieces
            </span>
          )}
        </div>
      </div>
    </MotionLink>
  )
}
