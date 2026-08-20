'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, Ruler, Truck, RotateCcw, Gem } from 'lucide-react'
import { products } from '@/data'
import { cn, formatPrice } from '@/lib/utils'
import { PageTransition } from '@/components/ui/PageTransition'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ProductCard } from '@/components/ui/ProductCard'
import { ImageGallery } from '@/components/ui/ImageGallery'
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
// Info cards data
// ---------------------------------------------------------------------------

const infoCards = [
  {
    icon: Gem,
    title: 'Craftsmanship',
    description:
      'Each piece undergoes 47 quality checkpoints and is finished by hand in our Lagos atelier.',
  },
  {
    icon: Truck,
    title: 'Shipping',
    description:
      'Complimentary worldwide shipping on all orders. Delivered in our signature packaging within 5–7 business days.',
  },
  {
    icon: RotateCcw,
    title: 'Returns',
    description:
      'We accept returns within 14 days of delivery for unworn items in original condition with all tags attached.',
  },
]

// ---------------------------------------------------------------------------
// ProductPage
// ---------------------------------------------------------------------------

export default function ProductDetail({ slug }: { slug: string }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return (
      <PageTransition>
        <section className="min-h-screen flex items-center justify-center bg-ivory">
          <div className="text-center px-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-obsidian/70 mb-4">
              Not Found
            </p>
            <h1 className="heading-lg text-obsidian mb-6">
              Product Not Found
            </h1>
            <div className="gold-line mx-auto mb-8" />
            <p className="body-md text-warm-gray max-w-md mx-auto mb-10">
              The piece you are looking for is no longer available or may have
              been moved.
            </p>
            <Link href="/collections">
              <Button variant="outline" size="md">
                Browse Collections
              </Button>
            </Link>
          </div>
        </section>
      </PageTransition>
    )
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <PageTransition>
      {/* ================================================================== */}
      {/* 1. PRODUCT DETAIL                                                  */}
      {/* ================================================================== */}
      <section className="pt-32 pb-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20"
          >
            {/* ---- Left: Image Gallery ---- */}
            <motion.div variants={fadeUpChild}>
              <ImageGallery images={product.images} alt={product.name} />
            </motion.div>

            {/* ---- Right: Product Info ---- */}
            <motion.div
              variants={staggerContainer}
              className="flex flex-col justify-center"
            >
              {/* Category label */}
              <motion.p
                variants={fadeUpChild}
                className="text-[11px] font-medium uppercase tracking-[0.3em] text-obsidian/70 mb-4"
              >
                {product.category}
              </motion.p>

              {/* Product name */}
              <motion.h1
                variants={fadeUpChild}
                className="heading-lg text-obsidian mb-4"
              >
                {product.name}
              </motion.h1>

              {/* Gold line */}
              <motion.div variants={fadeUpChild}>
                <div className="gold-line mb-6" />
              </motion.div>

              {/* Price */}
              <motion.p
                variants={fadeUpChild}
                className="text-2xl font-light text-obsidian mb-6"
              >
                {formatPrice(product.price)}
              </motion.p>

              {/* Fabric info */}
              <motion.p
                variants={fadeUpChild}
                className="text-[11px] uppercase tracking-[0.2em] text-warm-gray mb-8"
              >
                {product.fabric}
              </motion.p>

              {/* Description */}
              <motion.p
                variants={fadeUpChild}
                className="body-md text-warm-gray leading-relaxed mb-8"
              >
                {product.description}
              </motion.p>

              {/* Details list */}
              <motion.ul
                variants={fadeUpChild}
                className="space-y-2 mb-10"
              >
                {product.details.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm font-light text-obsidian/80"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />
                    {detail}
                  </li>
                ))}
              </motion.ul>

              {/* Size selector */}
              <motion.div variants={fadeUpChild} className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Ruler className="w-4 h-4 text-warm-gray" strokeWidth={1.5} />
                  <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-obsidian">
                    Select Size
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        'flex items-center justify-center w-12 h-12 border text-xs uppercase tracking-wider transition-all duration-300',
                        selectedSize === size
                          ? 'border-gold bg-gold text-white'
                          : 'border-border-subtle text-obsidian hover:border-gold'
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Action buttons */}
              <motion.div
                variants={fadeUpChild}
                className="flex flex-col sm:flex-row gap-4 mb-10"
              >
                <Button variant="primary" size="lg" className="flex-1">
                  Add to Bag
                </Button>
                <Button variant="outline" size="lg" className="flex-1 gap-2">
                  <Heart className="w-4 h-4" strokeWidth={1.5} />
                  Add to Wishlist
                </Button>
              </motion.div>

              {/* Category breadcrumb */}
              <motion.div variants={fadeUpChild}>
                <Link
                  href={`/collections/${product.category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-[11px] uppercase tracking-[0.2em] text-obsidian/70 border-b border-gold/50 pb-0.5 hover:border-gold transition-colors duration-300"
                >
                  View All {product.category}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 2. INFO CARDS                                                     */}
      {/* ================================================================== */}
      <section className="py-20 bg-ivory-light border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {infoCards.map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                className="flex items-start gap-4 md:gap-5 bg-ivory p-6 md:p-8"
              >
                <card.icon
                  className="w-7 h-7 text-obsidian shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="heading-sm text-obsidian mb-2">
                    {card.title}
                  </h3>
                  <p className="body-md text-warm-gray leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 3. RELATED PRODUCTS                                                */}
      {/* ================================================================== */}
      {relatedProducts.length > 0 && (
        <section className="py-28 bg-ivory">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUpChild}>
                <SectionTitle
                  subtitle={product.category}
                  title="You May Also Love"
                />
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
              {relatedProducts.map((relProduct, i) => (
                <motion.div
                  key={relProduct.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={fadeUp}
                >
                  <ProductCard
                    name={relProduct.name}
                    price={relProduct.price}
                    image={relProduct.images[0]}
                    fabric={relProduct.fabric}
                    slug={relProduct.slug}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================================================================== */}
      {/* 4. NEWSLETTER                                                     */}
      {/* ================================================================== */}
      <Newsletter />
    </PageTransition>
  )
}
