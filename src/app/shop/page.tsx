'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { products } from '@/data'
import { PageTransition } from '@/components/ui/PageTransition'
import { ProductCard } from '@/components/ui/ProductCard'
import { LuxuryBanner } from '@/components/ui/LuxuryBanner'
import { Newsletter } from '@/components/ui/Newsletter'

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const categories = [
  'All',
  'Menswear',
  'Womenswear',
  'Native Wear',
  'Corporate',
  'Wedding',
  'Luxury Casual',
  'Ready to Wear',
  'Limited Editions',
  'Accessories',
] as const

type Category = (typeof categories)[number]

const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price Low-High' },
  { value: 'price-desc', label: 'Price High-Low' },
] as const

type SortOption = (typeof sortOptions)[number]['value']

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const fadeUpChild = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' as const },
  },
}

// ---------------------------------------------------------------------------
// Shop Page
// ---------------------------------------------------------------------------

export default function Page() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [sort, setSort] = useState<SortOption>('newest')

  const filtered = useMemo(() => {
    let result = activeCategory === 'All'
      ? [...products]
      : products.filter((p) => p.category === activeCategory)

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price)
    else if (sort === 'price-desc') result.sort((a, b) => b.price - a.price)
    else result.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0))

    return result
  }, [activeCategory, sort])

  return (
    <PageTransition>
      {/* ================================================================== */}
      {/* 1. HERO                                                           */}
      {/* ================================================================== */}
      <LuxuryBanner
        subtitle="The Shop"
        title="Discover Luxury"
        image="https://upload.wikimedia.org/wikipedia/commons/f/fc/Kanuri_Kamu_Ceremony_-_Pre-wedding_ritual_-_Borno_State_-_2026_%2810%29.jpg"
      />

      {/* ================================================================== */}
      {/* 2. FILTERS BAR                                                    */}
      {/* ================================================================== */}
      <div className="sticky top-[72px] z-50 bg-ivory/95 backdrop-blur-sm border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-3 md:py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
            {/* Category pills */}
            <div className="flex flex-nowrap overflow-x-auto gap-1.5 md:gap-2 md:flex-wrap pb-1 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    'px-3 md:px-4 py-2 md:py-2 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.15em] border transition-all duration-300 whitespace-nowrap active:scale-95',
                    activeCategory === cat
                      ? 'bg-obsidian text-white border-obsidian'
                      : 'bg-transparent text-warm-gray border-border-subtle hover:border-obsidian/40 hover:text-obsidian'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort + Count */}
            <div className="flex items-center justify-between md:justify-end gap-4 md:gap-6">
              <span className="text-[11px] uppercase tracking-[0.15em] text-warm-gray whitespace-nowrap">
                {filtered.length} {filtered.length === 1 ? 'Piece' : 'Pieces'}
              </span>

              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortOption)}
                  className="appearance-none bg-transparent border border-border-subtle text-[11px] font-medium uppercase tracking-[0.15em] text-obsidian pl-4 pr-8 py-2 focus:outline-none focus:border-gold transition-colors duration-300 cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-warm-gray pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* 3. PRODUCT GRID                                                   */}
      {/* ================================================================== */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {filtered.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${sort}`}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {filtered.map((product) => (
                <motion.div key={product.id} variants={fadeUpChild}>
                  <ProductCard
                    name={product.name}
                    price={product.price}
                    image={product.images[0]}
                    hoverImage={product.images[1]}
                    fabric={product.fabric}
                    slug={product.slug}
                    isNewArrival={product.newArrival}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-obsidian/70 mb-3">
                No pieces found
              </p>
              <p className="body-md text-warm-gray">
                There are currently no pieces in this category. Please check back soon or browse our other collections.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ================================================================== */}
      {/* 4. NEWSLETTER                                                     */}
      {/* ================================================================== */}
      <Newsletter />
    </PageTransition>
  )
}
