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

const SWIPE_THRESHOLD = 50

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

  const goTo = (index: number) => {
    if (index === current) return
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  }

  return (
    <div className={cn('relative', className)}>
      <div className="relative aspect-[3/4] overflow-hidden bg-ivory-light">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt={`${alt} — view ${current + 1} of ${images.length}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full cursor-grab object-cover active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -SWIPE_THRESHOLD) paginate(1)
              else if (info.offset.x > SWIPE_THRESHOLD) paginate(-1)
            }}
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              onClick={() => paginate(-1)}
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-navy/60 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-navy md:left-4"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-navy/60 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-navy md:right-4"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
            </button>

            {/* Position dots — quick glanceable progress on phones */}
            <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5 md:hidden">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    'h-1 rounded-full transition-all duration-300',
                    i === current ? 'w-5 bg-gold' : 'w-1.5 bg-white/60'
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails */}
      <div className="scrollbar-hide mt-4 flex gap-2 overflow-x-auto">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Show image ${i + 1}`}
            className={cn(
              'h-20 w-16 shrink-0 overflow-hidden border transition-all duration-300 md:h-24 md:w-20',
              i === current
                ? 'border-gold opacity-100'
                : 'border-border-subtle opacity-55 hover:opacity-80'
            )}
          >
            <img
              src={img}
              alt=""
              aria-hidden
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
