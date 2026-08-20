'use client'

import { motion } from 'framer-motion'
import { collections } from '@/data'
import { PageTransition } from '@/components/ui/PageTransition'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { CollectionCard } from '@/components/ui/CollectionCard'
import { LuxuryBanner } from '@/components/ui/LuxuryBanner'
import { Newsletter } from '@/components/ui/Newsletter'

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
// Collections Page
// ---------------------------------------------------------------------------

export default function Page() {
  return (
    <PageTransition>
      {/* ================================================================== */}
      {/* 1. HERO                                                           */}
      {/* ================================================================== */}
      <LuxuryBanner
        subtitle="The Collections"
        title="Curated for Distinction"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/A_Fashion_Designer.jpg/960px-A_Fashion_Designer.jpg"
      />

      {/* ================================================================== */}
      {/* 2. ALL COLLECTIONS GRID                                            */}
      {/* ================================================================== */}
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
                subtitle="Collections"
                title="Explore Our World"
                description="Each collection is a complete sartorial universe — curated, crafted, and presented with the intentionality that defines REGALIA."
              />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection, i) => (
              <motion.div
                key={collection.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
              >
                <CollectionCard
                  name={collection.name}
                  description={collection.description}
                  image={collection.image}
                  slug={collection.slug}
                  productCount={collection.productCount}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 3. NEWSLETTER                                                     */}
      {/* ================================================================== */}
      <Newsletter />
    </PageTransition>
  )
}
