'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Crown,
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

// The REGALIA Code — each letter of the house name names a value.
const values = [
  {
    letter: 'R',
    title: 'Respect',
    description:
      'We honour every client, colleague and craft tradition — known by name, served with grace.',
  },
  {
    letter: 'E',
    title: 'Excellence',
    description:
      'Uncompromising precision. We measure twice and cut once — every stitch tells a story of excellence.',
  },
  {
    letter: 'G',
    title: 'Growth',
    description:
      'We grow our people, our clients\u2019 confidence, and the house — across Ghana and West Africa.',
  },
  {
    letter: 'A',
    title: 'Authenticity',
    description:
      'Rooted in African heritage; honest in counsel, price and timeline.',
  },
  {
    letter: 'L',
    title: 'Leadership',
    description:
      'We set the standard for African luxury — disciplined business leadership and creative direction.',
  },
  {
    letter: 'I',
    title: 'Innovation',
    description:
      'Fluent in modern tools — AI-assisted measurement, e-commerce — while honouring the hand.',
  },
  {
    letter: 'A',
    title: 'Accountability',
    description:
      'We own our promises — the Fit Guarantee and On-Time Pledge are how we keep them.',
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
      'Our fabrics travel from Nigeria\'s great textile markets — Aba, Lagos, Onitsha and Kano — to the finest mills abroad, but the soul of every piece is unmistakably African — in cut, culture, and conviction.',
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

export default function Page() {
  return (
    <PageTransition>
      {/* ================================================================== */}
      {/* 1. HERO                                                           */}
      {/* ================================================================== */}
      <LuxuryBanner
        subtitle="Our Story"
        title="The House of June & Co."
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/African_print_couple_love.jpg/960px-African_print_couple_love.jpg"
      />

      {/* ================================================================== */}
      {/* 2. STORY INTRO                                                    */}
      {/* ================================================================== */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start"
          >
            <motion.div variants={fadeUpChild}>
              <blockquote className="heading-md font-accent italic text-obsidian leading-relaxed">
                &ldquo;Some clothes cover the body.
                <br />
                REGALIA dresses the moment.&rdquo;
              </blockquote>
              <div className="gold-line my-6" />
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
                Every Stitch Tells a Story of Excellence.
              </p>
            </motion.div>

            <motion.div variants={fadeUpChild} className="space-y-6">
              <p className="body-md font-accent text-warm-gray leading-relaxed">
                REGALIA by June &amp; Co. was born from a vision to redefine
                African fashion through exceptional tailoring, contemporary
                design and uncompromising quality. It begins on a busy Tse-Addo
                roadside, in a city that has always known how to dress for an
                occasion — where Accra understands that the right garment is
                never only fabric, but standing made visible and respect made
                wearable.
              </p>
              <p className="body-md font-accent text-warm-gray leading-relaxed">
                The house unites two strengths of West African fashion. From
                Ghana comes the entrepreneurship of Michael Agbenyega and a
                culture of meticulous tailoring and warm, attentive service.
                From Nigeria — through the eye of Creative Director June Aramide
                Eyenre and direct sourcing from Aba, Lagos, Onitsha and Kano —
                come the finest fabrics, the freshest trends and a deep command
                of ceremonial dress. Under one roof, that partnership produces
                work neither tradition could deliver alone.
              </p>
              <p className="body-md font-accent text-warm-gray leading-relaxed">
                And REGALIA dresses the people who define the region&rsquo;s
                moments — in the boardroom, at a wedding, in worship, and on the
                international stage. For each of them the promise is the same:
                an impeccable fit, delivered with ceremony, so they can walk in
                and simply be crafted for distinction.
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
                description="Together, the founders combine disciplined business leadership with creative excellence — the foundation of the REGALIA brand."
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
                <div className="group relative aspect-[3/4] overflow-hidden">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="h-full w-full object-cover transition-transform duration-[1600ms] ease-lux group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 border border-gold/25 transition-colors duration-700 group-hover:border-gold/50" />
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-obsidian/70 mb-3">
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
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUpChild}
              className="bg-ivory-light p-8 md:p-12"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-obsidian/70 mb-4">
                Vision
              </p>
              <h3 className="heading-sm text-obsidian mb-6">
                West Africa&rsquo;s Most Admired Luxury Fashion House
              </h3>
              <div className="gold-line mb-6" />
              <p className="body-md text-warm-gray leading-relaxed">
                To become West Africa&rsquo;s most admired luxury fashion house,
                celebrated for exceptional craftsmanship, innovation, and
                African elegance on the global stage.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUpChild}
              className="bg-obsidian text-white p-8 md:p-12"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-obsidian/70 mb-4">
                Mission
              </p>
              <h3 className="heading-sm text-white mb-6">
                Heritage Blended with Contemporary Luxury
              </h3>
              <div className="gold-line mb-6" />
              <p className="body-md text-white/70 leading-relaxed">
                To design and deliver premium bespoke and ready-to-wear fashion
                that blends African heritage with contemporary luxury — while
                creating employment, developing talent, and exceeding customer
                expectations.
              </p>
            </motion.div>

            {/* Guiding Statement Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUpChild}
              className="bg-ivory border border-border-subtle p-8 md:p-12"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-obsidian/70 mb-4">
                Guiding Statement
              </p>
              <h3 className="heading-sm text-obsidian mb-6">
                To Redefine African Luxury
              </h3>
              <div className="gold-line mb-6" />
              <p className="body-md text-warm-gray leading-relaxed">
                REGALIA by June &amp; Co. exists to redefine African luxury
                through exceptional craftsmanship, disciplined business
                leadership, innovative design, and unforgettable customer
                experiences. Every garment we create is crafted with purpose,
                precision and pride — empowering our clients to present the
                best version of themselves to the world.
              </p>
            </motion.div>
          </div>

          {/* Brand Philosophy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpChild}
            className="max-w-3xl mx-auto text-center mt-20"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-obsidian/70 mb-6">
              Brand Philosophy
            </p>
            <p className="font-accent text-[clamp(1.25rem,2.5vw,1.75rem)] italic text-obsidian leading-relaxed">
              &ldquo;Luxury is not merely about price — it is about
              craftsmanship, trust, consistency, attention to detail, and
              creating experiences that people remember long after they leave
              the showroom.&rdquo;
            </p>
          </motion.div>
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
                subtitle="Core Values"
                title="The REGALIA Code"
                description="The brand culture is encoded in the name itself — each letter names a value, and each value is a daily practice: a built-in standard every team member can recite and live."
              />
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-[12px] font-medium tracking-[0.6em] text-gold mb-12"
          >
            R &middot; E &middot; G &middot; A &middot; L &middot; I &middot; A
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                className="bg-ivory p-6 md:p-8 group"
              >
                <div className="mb-5">
                  <div className="w-12 h-12 rounded-full border-2 border-gold bg-ivory flex items-center justify-center">
                    <span className="text-gold font-heading text-lg">
                      {value.letter}
                    </span>
                  </div>
                </div>
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
      <section className="py-24 md:py-32 bg-ivory">
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
                description="From a roadside beginning in Accra to a luxury house with international reach — a decade of vision, craft, and unwavering standards."
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
                className="bg-ivory p-6 md:p-10 group"
              >
                <item.icon
                  className="w-7 h-7 text-obsidian mb-5"
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
            <Link href="/collections">
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
