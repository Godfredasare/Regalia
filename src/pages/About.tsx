import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Crown,
  Gem,
  Star,
  Lightbulb,
  Shield,
  Globe,
  Award,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { founders, timelineEvents } from '@/data'
import { PageTransition } from '@/components/ui/PageTransition'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { LuxuryBanner } from '@/components/ui/LuxuryBanner'
import { Timeline } from '@/components/ui/Timeline'
import { Newsletter } from '@/components/ui/Newsletter'
import { Button } from '@/components/ui/Button'

// ---------------------------------------------------------------------------
// Animation variants (matching Home.tsx patterns)
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
// Data
// ---------------------------------------------------------------------------

const values = [
  {
    icon: Crown,
    title: 'Heritage',
    description:
      'Every design is rooted in centuries of African sartorial tradition — from the regal drape of Agbada to the intricate geometry of Kente weaving.',
  },
  {
    icon: Gem,
    title: 'Craftsmanship',
    description:
      'Our master artisans combine West African hand-sewing techniques with Italian tailoring precision, ensuring every garment is a work of wearable art.',
  },
  {
    icon: Star,
    title: 'Excellence',
    description:
      'We never compromise on fabric, fit, or finishing. From Super 150s Italian wool to hand-finished buttonholes, every detail reflects our obsession with quality.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We honour the past while designing for the future — pioneering new silhouettes, sustainable sourcing, and digital bespoke experiences.',
  },
]

const differentiators = [
  {
    icon: Shield,
    title: 'Uncompromising Quality',
    description:
      'Every garment undergoes 47 quality checkpoints before leaving our atelier. We source from heritage mills across 7 countries and employ master artisans with decades of experience.',
  },
  {
    icon: Globe,
    title: 'Global Luxury, African Soul',
    description:
      'Our fabrics travel from the finest mills in Biella, Japan, and Switzerland, but the soul of every piece is unmistakably African — in cut, culture, and conviction.',
  },
  {
    icon: Award,
    title: 'Bespoke by Design',
    description:
      'Whether ready-to-wear or fully bespoke, every REGALIA piece is conceived with the same philosophy: clothing should elevate the wearer, not merely adorn them.',
  },
  {
    icon: Crown,
    title: 'A Legacy of Trust',
    description:
      'From heads of state to cultural icons, our client list is a testament to the trust we have earned. Discretion, consistency, and excellence are our non-negotiables.',
  },
]

// ---------------------------------------------------------------------------
// About Page
// ---------------------------------------------------------------------------

export default function About() {
  return (
    <PageTransition>
      {/* ================================================================== */}
      {/* 1. HERO                                                           */}
      {/* ================================================================== */}
      <LuxuryBanner
        subtitle="Our Story"
        title="The House of June & Co."
        image="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1600&q=80"
      />

      {/* ================================================================== */}
      {/* 2. STORY INTRO                                                    */}
      {/* ================================================================== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start"
          >
            <motion.div variants={fadeUpChild}>
              <blockquote className="heading-md font-heading italic text-obsidian leading-relaxed">
                &ldquo;We did not set out to build a fashion brand. We set out
                to restore a standard — the standard that African luxury has
                always deserved.&rdquo;
              </blockquote>
              <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
                June Adeyemi, Founder
              </p>
            </motion.div>

            <motion.div variants={fadeUpChild} className="space-y-6">
              <p className="body-md text-warm-gray leading-relaxed">
                REGALIA by June &amp; Co. was born in 2014 from a small studio
                in the heart of Lagos, Nigeria — a city defined by its relentless
                creative energy and centuries of sartorial tradition. What began
                as a single bespoke commission quickly evolved into something far
                greater: a movement to redefine African luxury on the world
                stage, without compromise and without apology.
              </p>
              <p className="body-md text-warm-gray leading-relaxed">
                From the textile markets of Balogun to the ateliers of Milan,
                our founder June Adeyemi spent years studying the intersection of
                African heritage and global haute couture. The result is a house
                that draws equally from the regal drape of hand-woven Kente and
                the architectural precision of Italian tailoring — creating
                garments that carry both history and modernity in every thread.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 3. FOUNDERS                                                       */}
      {/* ================================================================== */}
      <section className="py-24 md:py-32 bg-ivory-light">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpChild}>
              <SectionTitle
                subtitle="Founders"
                title="Meet the Visionaries"
                description="The creative and strategic minds behind REGALIA — united by a shared belief in the power of African luxury."
              />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {founders.map((founder, i) => (
              <motion.div
                key={founder.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                className={cn(
                  'grid grid-cols-1 sm:grid-cols-2 gap-8 items-start',
                  i === 1 && 'sm:[&>*:first-child]:order-2'
                )}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 border border-gold/20 pointer-events-none" />
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold mb-3">
                    {founder.role}
                  </p>
                  <h3 className="heading-sm text-obsidian mb-4">
                    {founder.name}
                  </h3>
                  <div className="gold-line mb-6" />
                  <p className="body-md text-warm-gray leading-relaxed">
                    {founder.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 4. VISION & MISSION                                               */}
      {/* ================================================================== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUpChild}
              className="bg-ivory p-8 md:p-14"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold mb-4">
                Vision
              </p>
              <h3 className="heading-sm text-obsidian mb-6">
                To Be the Definitive Voice of African Luxury
              </h3>
              <div className="gold-line mb-6" />
              <p className="body-md text-warm-gray leading-relaxed">
                We envision a world where African luxury is not an emerging
                category but a permanent, celebrated pillar of global fashion.
                Our vision is to build a house that stands alongside the great
                maisons of Europe — not as an alternative, but as an equal —
                proving that the finest craftsmanship, the most compelling
                narratives, and the most powerful aesthetics originate from the
                African continent.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUpChild}
              className="bg-obsidian text-white p-8 md:p-14"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold mb-4">
                Mission
              </p>
              <h3 className="heading-sm text-white mb-6">
                To Clothe Leaders in Excellence
              </h3>
              <div className="gold-line mb-6" />
              <p className="body-md text-white/70 leading-relaxed">
                Our mission is to create garments of extraordinary quality that
                empower the wearer with confidence, cultural pride, and
                unmistakable presence. We achieve this by uniting the finest
                global fabrics with ancestral African tailoring techniques,
                delivering a bespoke experience that is as personal as it is
                luxurious. Every REGALIA piece is a statement — not just of
                style, but of identity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 5. VALUES                                                         */}
      {/* ================================================================== */}
      <section className="py-24 md:py-32 bg-ivory-light">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpChild}>
              <SectionTitle
                subtitle="Values"
                title="Our Pillars"
                description="Four principles that anchor every decision we make, every garment we create, and every relationship we build."
              />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                className="bg-white p-6 md:p-8 group"
              >
                <value.icon
                  className="w-8 h-8 text-gold mb-6"
                  strokeWidth={1.5}
                />
                <h3 className="heading-sm text-obsidian mb-3">
                  {value.title}
                </h3>
                <p className="body-md text-warm-gray leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 6. TIMELINE                                                       */}
      {/* ================================================================== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpChild}>
              <SectionTitle
                subtitle="Our Journey"
                title="The REGALIA Story"
                description="From a single stitch in Lagos to a luxury house with international reach — a decade of vision, craft, and unwavering standards."
              />
            </motion.div>
          </motion.div>

          <Timeline items={timelineEvents} />
        </div>
      </section>

      {/* ================================================================== */}
      {/* 7. WHY REGALIA                                                    */}
      {/* ================================================================== */}
      <section className="py-24 md:py-32 bg-ivory-light">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpChild}>
              <SectionTitle
                subtitle="Why REGALIA"
                title="The Difference"
                description="What separates a REGALIA garment from everything else in your wardrobe — and why our clients never look back."
              />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                className="bg-white p-6 md:p-10 group"
              >
                <item.icon
                  className="w-7 h-7 text-gold mb-5"
                  strokeWidth={1.5}
                />
                <h3 className="heading-sm text-obsidian mb-3">
                  {item.title}
                </h3>
                <p className="body-md text-warm-gray leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpChild}
            className="text-center mt-16"
          >
            <Link to="/collections">
              <Button variant="outline" size="md">
                Explore Our Collections
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 8. NEWSLETTER                                                     */}
      {/* ================================================================== */}
      <Newsletter />
    </PageTransition>
  )
}