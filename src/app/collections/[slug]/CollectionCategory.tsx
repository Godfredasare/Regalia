'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { collections, products } from '@/data'
import { cn } from '@/lib/utils'
import { PageTransition } from '@/components/ui/PageTransition'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ProductCard } from '@/components/ui/ProductCard'
import { LuxuryBanner } from '@/components/ui/LuxuryBanner'
import { Newsletter } from '@/components/ui/Newsletter'
import { Button } from '@/components/ui/Button'

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const fadeUpChild = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' as const },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' as const },
  }),
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name'

function sortProducts(items: typeof products, sort: SortOption) {
  const sorted = [...items]
  switch (sort) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price)
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    default:
      return sorted
  }
}

// ---------------------------------------------------------------------------
// CollectionCategory Page
// ---------------------------------------------------------------------------

export default function CollectionCategory({ slug }: { slug: string }) {
  const [sort, setSort] = useState<SortOption>('default')

  const collection = collections.find((c) => c.slug === slug)

  if (!collection) {
    return (
      <PageTransition>
        <section className="min-h-screen flex items-center justify-center bg-ivory">
          <div className="text-center px-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-obsidian/70 mb-4">
              Not Found
            </p>
            <h1 className="heading-lg text-obsidian mb-6">
              Collection Not Found
            </h1>
            <div className="gold-line mx-auto mb-8" />
            <p className="body-md text-warm-gray max-w-md mx-auto mb-10">
              The collection you are looking for does not exist or may have been
              moved.
            </p>
            <Link href="/collections">
              <Button variant="outline" size="md">
                Back to Collections
              </Button>
            </Link>
          </div>
        </section>
      </PageTransition>
    )
  }

  const categoryProducts = products.filter(
    (p) => p.category === collection.name
  )
  const sortedProducts = sortProducts(categoryProducts, sort)

  return (
    <PageTransition>
      {/* ================================================================== */}
      {/* 1. HERO                                                           */}
      {/* ================================================================== */}
      <LuxuryBanner
        subtitle={collection.name}
        title={collection.name}
        image={collection.image}
      />

      {/* ================================================================== */}
      {/* 2. COLLECTION DESCRIPTION                                          */}
      {/* ================================================================== */}
      <section className="py-16 bg-ivory border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.p variants={fadeUpChild} className="body-md text-warm-gray leading-relaxed">
              {collection.description}
            </motion.p>
            <motion.p variants={fadeUpChild} className="mt-4 text-[11px] uppercase tracking-[0.2em] text-warm-gray">
              {categoryProducts.length} pieces
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 3. PRODUCT GRID                                                    */}
      {/* ================================================================== */}
      <section className="py-28 bg-ivory-light">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpChild}>
              <SectionTitle
                subtitle={collection.name}
                title="All Pieces"
              />
            </motion.div>
          </motion.div>

          {/* Sort Controls */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-start md:justify-end gap-3 md:gap-4 mb-10 md:mb-12"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-warm-gray">
              Sort by
            </span>
            {(
              [
                { key: 'default', label: 'Featured' },
                { key: 'price-asc', label: 'Price: Low → High' },
                { key: 'price-desc', label: 'Price: High → Low' },
                { key: 'name', label: 'Name' },
              ] as const
            ).map((option) => (
              <button
                key={option.key}
                onClick={() => setSort(option.key)}
                className={cn(
                  'text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 pb-0.5',
                  sort === option.key
                    ? 'text-gold border-b border-gold'
                    : 'text-warm-gray hover:text-obsidian'
                )}
              >
                {option.label}
              </button>
            ))}
          </motion.div>

          {/* Products */}
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              {sortedProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={fadeUp}
                >
                  <ProductCard
                    name={product.name}
                    price={product.price}
                    image={product.images[0]}
                    fabric={product.fabric}
                    slug={product.slug}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="body-md text-warm-gray">
                No pieces available in this collection yet.
              </p>
              <div className="mt-8">
                <Link href="/collections">
                  <Button variant="outline" size="md">
                    Browse All Collections
                  </Button>
                </Link>
              </div>
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
