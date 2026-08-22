'use client'

import { motion } from 'framer-motion'
import { Play, Download } from 'lucide-react'
import { PageTransition } from '@/components/ui/PageTransition'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { LuxuryBanner } from '@/components/ui/LuxuryBanner'
import { Button } from '@/components/ui/Button'
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
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' as const },
  }),
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const editorialImages = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/African_street_fashion_2.jpg/960px-African_street_fashion_2.jpg',
    title: 'Summer Sovereign',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/A_female_African_fashion_designer_at_work.jpg/960px-A_female_African_fashion_designer_at_work.jpg',
    title: 'Evening Protocol',
  },
]

const horizontalCards = [
  {
    src: 'https://i.pinimg.com/736x/89/ec/32/89ec328d75b43508d7bcb85b4e2bbc6d.jpg',
    caption: 'The Power Gown — Redefining formalwear for the modern woman.',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/AfroFuture_Festival_in_Ghana_05.jpg/960px-AfroFuture_Festival_in_Ghana_05.jpg',
    caption: 'Heritage Tailoring — Where Italian precision meets African soul.',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Experimenting_Colonial_African_Fashion.jpg',
    caption: 'Urban Elegance — Luxury casual for the discerning wardrobe.',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Experimenting_African_Colonialism.jpg',
    caption: 'The Capsule Edit — Timeless pieces that transcend seasons.',
  },
]

// ---------------------------------------------------------------------------
// Lookbook Page
// ---------------------------------------------------------------------------

export default function Page() {
  return (
    <PageTransition>
      {/* ================================================================== */}
      {/* 1. HERO                                                           */}
      {/* ================================================================== */}
      <LuxuryBanner
        subtitle="Lookbook"
        title="The Art of Dressing"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Fashion_Fair_in_Accra%2C_Ghana.jpg/960px-Fashion_Fair_in_Accra%2C_Ghana.jpg"
      />

      {/* ================================================================== */}
      {/* 2. EDITORIAL SECTION                                              */}
      {/* ================================================================== */}
      <section className="bg-ivory">
        {editorialImages.map((img, i) => (
          <motion.div
            key={img.src}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={img.src}
                alt={img.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-10">
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
                  {img.title}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ================================================================== */}
      {/* 3. HORIZONTAL SCROLL SECTION                                      */}
      {/* ================================================================== */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUpChild}
          >
            <SectionTitle
              subtitle="Stories"
              title="Editorial Stories"
              description="A curated visual journey through the REGALIA universe — each frame a meditation on craftsmanship, culture, and contemporary luxury."
            />
          </motion.div>
        </div>

        <div className="overflow-x-auto snap-x snap-mandatory flex-nowrap flex gap-6 px-6 md:px-12 scrollbar-hide">
          {horizontalCards.map((card, i) => (
            <motion.div
              key={card.src}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              className="relative w-[80vw] md:w-[40vw] aspect-[3/4] flex-shrink-0 snap-start overflow-hidden group"
            >
              <img
                src={card.src}
                alt={card.caption}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 px-6 pb-8">
                <p className="text-sm font-light text-white/90 leading-relaxed max-w-sm">
                  {card.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================================================================== */}
      {/* 4. FASHION FILM                                                   */}
      {/* ================================================================== */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUpChild}
            className="text-center mb-12"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-obsidian/70 mb-4">
              Fashion Film
            </p>
            <h2 className="heading-md text-obsidian">
              The Making of a Collection
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUpChild}
          >
            <div className="relative aspect-video overflow-hidden group cursor-pointer bg-navy-dark">
              {/* Still frame behind the play button */}
              <img
                src="https://i.pinimg.com/1200x/21/f9/31/21f93146734665be2a6fc213f548b0b9.jpg"
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-[2500ms] ease-lux group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/30 to-navy-dark/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/80 backdrop-blur-sm transition-all duration-500 ease-lux group-hover:scale-110 group-hover:border-gold md:h-20 md:w-20">
                  <Play className="ml-1 h-6 w-6 fill-gold text-gold md:h-7 md:w-7" />
                </div>
              </div>
            </div>
            <p className="text-center text-[11px] uppercase tracking-[0.2em] text-warm-gray mt-6">
              REGALIA by June &amp; Co. — Behind the Atelier
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 5. DOWNLOAD CTA                                                   */}
      {/* ================================================================== */}
      <section className="py-20 bg-ivory-light">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpChild}
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-obsidian/70 mb-4">
              Take It With You
            </p>
            <h2 className="heading-md text-obsidian mb-6">
              Our Full Lookbook
            </h2>
            <div className="gold-line-long mx-auto mb-10" />
            <a href="#">
              <Button variant="outline" size="md" className="gap-3">
                <Download className="w-4 h-4" />
                Download Lookbook PDF
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 6. NEWSLETTER                                                     */}
      {/* ================================================================== */}
      <Newsletter />
    </PageTransition>
  )
}
