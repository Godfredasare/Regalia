'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ImageGalleryProps {
  images: string[]
  alt: string
  className?: string
}

export function ImageGallery({ images, alt, className }: ImageGalleryProps) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrent((prev) => {
      const next = prev + newDirection
      if (next < 0) return images.length - 1
      if (next >= images.length) return 0
      return next
    })
  }

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  }

  return (
    <div className={cn('relative', className)}>
      <div className="relative aspect-[3/4] overflow-hidden bg-ivory">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt={`${alt} ${current + 1}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={() => paginate(-1)}
            className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center bg-white/80 backdrop-blur-sm text-obsidian hover:bg-ivory transition-colors duration-300"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center bg-white/80 backdrop-blur-sm text-obsidian hover:bg-ivory transition-colors duration-300"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      <div className="flex gap-2 mt-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1)
              setCurrent(i)
            }}
            className={cn(
              'w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-all duration-300',
              i === current ? 'border-gold opacity-100' : 'border-transparent opacity-50 hover:opacity-75'
            )}
          >
            <img src={img} alt={`${alt} thumbnail ${i + 1}`} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}