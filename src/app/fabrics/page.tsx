'use client'

import { motion } from 'framer-motion'
import { fabrics } from '@/data'
import { PageTransition } from '@/components/ui/PageTransition'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { LuxuryBanner } from '@/components/ui/LuxuryBanner'
import { Newsletter } from '@/components/ui/Newsletter'

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

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
    transition: { duration: 0.7, delay: i * 0.12, ease: 'easeOut' as const },
  }),
}

// ---------------------------------------------------------------------------
// Fabric Library Page
// ---------------------------------------------------------------------------

export default function Page() {
  return (
    <PageTransition>
      {/* ================================================================== */}
      {/* 1. HERO                                                           */}
      {/* ================================================================== */}
      <LuxuryBanner
        subtitle="The Fabric Library"
        title="Fabrics of Distinction"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Ghana_Beach_Style.jpg/960px-Ghana_Beach_Style.jpg"
      />

      {/* ================================================================== */}
      {/* 2. INTRODUCTION                                                   */}
      {/* ================================================================== */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUpChild}
          >
            <SectionTitle
              subtitle="Sourced Globally"
              title="The World's Finest Textiles"
              description="From Nigeria's great textile markets — Aba, Lagos, Onitsha and Kano — to the handlooms of West Africa, every fabric in the REGALIA library is selected through rigorous standards of quality, provenance, and character. We travel the world so you can wear the world."
            />
          </motion.div>

          {/* ================================================================ */}
          {/* 3. FABRIC CARDS                                                 */}
          {/* ================================================================ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fabrics.map((fabric, i) => (
              <motion.div
                key={fabric.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                className="group"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden mb-6">
                  <img
                    src={fabric.texture}
                    alt={fabric.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Origin badge */}
                  <div className="absolute top-4 left-4 bg-navy/90 text-cream text-[10px] font-medium uppercase tracking-[0.2em] px-3 py-1.5">
                    {fabric.origin}
                  </div>
                </div>

                {/* Content */}
                <h3 className="heading-sm text-obsidian mb-1">
                  {fabric.name}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.15em] text-obsidian/60 mb-3">
                  {fabric.origin}
                </p>
                <p className="body-md text-warm-gray leading-relaxed mb-5">
                  {fabric.description}
                </p>

                {/* Property pills */}
                <div className="flex flex-wrap gap-2">
                  {fabric.properties.map((prop) => (
                    <span
                      key={prop}
                      className="bg-ivory text-warm-gray text-[10px] uppercase tracking-[0.1em] px-3 py-1.5"
                    >
                      {prop}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 4. NEWSLETTER                                                     */}
      {/* ================================================================== */}
      <Newsletter />
    </PageTransition>
  )
}
