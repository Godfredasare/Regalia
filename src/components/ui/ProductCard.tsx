'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn, formatPrice } from '@/lib/utils'
import { motion } from 'framer-motion'

interface ProductCardProps {
  name: string
  price: number
  image: string
  /** Shown on hover (pointer devices) as a crossfade over `image`. */
  hoverImage?: string
  fabric?: string
  slug: string
  isNewArrival?: boolean
  className?: string
}

const MotionLink = motion.create(Link)

export function ProductCard({
  name,
  price,
  image,
  hoverImage,
  fabric,
  slug,
  isNewArrival,
  className,
}: ProductCardProps) {
  return (
    <MotionLink
      href={`/product/${slug}`}
      className={cn('group block focus-visible:outline-offset-4', className)}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative mb-5 aspect-[3/4] overflow-hidden bg-ivory-light">
        {/* Primary image */}
        <img
          src={image}
          alt={name}
          className={cn(
            'h-full w-full object-cover transition-transform duration-[1400ms] ease-lux',
            hoverImage ? 'group-hover:opacity-0' : 'group-hover:scale-[1.05]'
          )}
          loading="lazy"
        />
        {/* Secondary image — desktop hover crossfade */}
        {hoverImage && (
          <img
            src={hoverImage}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full scale-[1.05] object-cover opacity-0 transition-opacity duration-700 ease-lux group-hover:opacity-100"
            loading="lazy"
          />
        )}

        {/* New Arrival badge — always visible (no hover on touch) */}
        {isNewArrival && (
          <span className="absolute left-3 top-3 bg-ivory/95 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.2em] text-obsidian backdrop-blur-sm">
            New
          </span>
        )}

        {/* View affordance — pointer devices get the slide-up bar… */}
        <div className="absolute inset-x-0 bottom-0 hidden translate-y-full opacity-0 transition-all duration-500 ease-lux group-hover:translate-y-0 group-hover:opacity-100 lg:block">
          <div className="bg-navy/95 px-4 py-3.5 text-center backdrop-blur-sm">
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-ivory">
              View Piece
            </span>
          </div>
        </div>
        {/* …touch devices get an always-visible corner arrow */}
        <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-ivory/90 text-obsidian shadow-sm transition-colors duration-300 group-active:bg-gold group-active:text-white lg:hidden">
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
        </span>
      </div>

      <div className="space-y-1.5">
        <h3 className="font-heading text-base font-normal tracking-wide text-obsidian">
          <span className="link-underline">{name}</span>
        </h3>
        {fabric && (
          <p className="text-[11px] uppercase tracking-[0.15em] text-warm-gray">
            {fabric}
          </p>
        )}
        <p className="text-sm font-light text-obsidian/70">
          {formatPrice(price)}
        </p>
      </div>
    </MotionLink>
  )
}
