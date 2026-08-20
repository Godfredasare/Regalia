'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface ProductCardProps {
  name: string
  price: number
  image: string
  fabric?: string
  slug: string
  className?: string
}

const MotionLink = motion.create(Link)

export function ProductCard({ name, price, image, fabric, slug, className }: ProductCardProps) {
  return (
    <MotionLink
      href={`/product/${slug}`}
      className={cn('group block', className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-ivory mb-5">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />
        <div className="absolute bottom-0 left-0 right-0 translate-y-full opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <div className="bg-white/95 backdrop-blur-sm px-4 py-3 text-center">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-obsidian">
              View Details
            </span>
          </div>
        </div>
      </div>
      <div className="space-y-1.5">
        <h3 className="font-heading text-base font-normal tracking-wide text-obsidian">
          {name}
        </h3>
        {fabric && (
          <p className="text-[11px] uppercase tracking-[0.15em] text-warm-gray">
            {fabric}
          </p>
        )}
        <p className="text-sm font-light text-obsidian/70">
          ${price.toLocaleString()}
        </p>
      </div>
    </MotionLink>
  )
}
