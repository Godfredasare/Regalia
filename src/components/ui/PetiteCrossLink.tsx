'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface PetiteCrossLinkProps {
  className?: string
}

/**
 * Small cross-link band pointing adult-collection visitors at REGALIA Petite.
 * Deliberately compact — a whisper, not a section. Emerald hints at the
 * destination's accent while gold/navy stay the anchors of the host page.
 */
export function PetiteCrossLink({ className }: PetiteCrossLinkProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'border-t border-border-subtle bg-ivory-light py-10',
        className
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left md:px-12">
        <p className="font-accent text-[15px] italic leading-relaxed text-warm-gray">
          Dressing the whole family?
        </p>
        <Link
          href="/collections/petite"
          className="group inline-flex min-h-[44px] items-center gap-2 border-b border-emerald/50 pb-0.5 text-[11px] font-medium uppercase tracking-[0.22em] text-emerald transition-colors duration-300 hover:border-emerald"
        >
          See REGALIA Petite
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}
