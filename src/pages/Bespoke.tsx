import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { PageTransition } from '@/components/ui/PageTransition'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { LuxuryBanner } from '@/components/ui/LuxuryBanner'
import { Button } from '@/components/ui/Button'
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
// Bespoke timeline steps
// ---------------------------------------------------------------------------

const bespokeSteps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'We begin with a personal conversation to understand your style, occasion, and vision.',
  },
  {
    number: '02',
    title: 'Fabric Selection',
    description:
      'Choose from our curated library of over 200 fabrics sourced from the world\'s finest mills.',
  },
  {
    number: '03',
    title: 'Precision Measurements',
    description:
      'Our master tailors take over 30 individual measurements for a flawless fit.',
  },
  {
    number: '04',
    title: 'Design & Detailing',
    description:
      'Collaborate on lapels, linings, buttons, and every nuanced detail of your garment.',
  },
  {
    number: '05',
    title: 'Master Tailoring',
    description:
      'Each piece is handcrafted by our atelier team over 4-6 weeks of dedicated work.',
  },
  {
    number: '06',
    title: 'Delivery',
    description:
      'Your finished garment is presented in our signature packaging, ready to make its debut.',
  },
]

// ---------------------------------------------------------------------------
// Bespoke Page
// ---------------------------------------------------------------------------

export default function Bespoke() {
  return (
    <PageTransition>
      {/* ================================================================== */}
      {/* 1. HERO                                                           */}
      {/* ================================================================== */}
      <LuxuryBanner
        subtitle="Bespoke"
        title="Crafted for You Alone"
        image="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1600&q=80"
      />

      {/* ================================================================== */}
      {/* 2. INTRO                                                          */}
      {/* ================================================================== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpChild}>
              <SectionTitle
                subtitle="Made to Measure"
                title="The Bespoke Journey"
                description="Bespoke is more than a service — it is a deeply personal experience. From the first handshake to the final fitting, every moment is designed to honour your individuality and deliver a garment that exists nowhere else in the world."
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUpChild}
            className="max-w-3xl mx-auto"
          >
            <p className="body-lg text-warm-gray leading-relaxed text-center">
              At REGALIA, we believe that true luxury cannot be mass-produced. It must be
              conceived, considered, and crafted with intention. Our bespoke process
              combines centuries of African tailoring heritage with the precision of
              modern atelier technique — resulting in garments that don't just fit your
              body, but express your identity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 3. BESPOKE TIMELINE                                               */}
      {/* ================================================================== */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="relative">
            {/* Central vertical line — hidden on mobile, visible on desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gold/30 -translate-x-1/2" />

            {/* Vertical line on mobile */}
            <div className="md:hidden absolute top-0 bottom-0 left-6 w-px bg-gold/30" />

            {bespokeSteps.map((step, i) => {
              const isLeft = i % 2 === 0

              return (
                <motion.div
                  key={step.number}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={fadeUp}
                  className="relative mb-16 last:mb-0"
                >
                  {/* Desktop: alternating left/right */}
                  <div className="hidden md:grid md:grid-cols-2 md:gap-12 items-center">
                    {/* Left content */}
                    <div
                      className={cn(
                        'flex items-start gap-6',
                        isLeft ? 'pr-12 text-right' : 'order-2 pl-12 text-left'
                      )}
                    >
                      <div
                        className={cn(
                          'flex flex-col',
                          isLeft ? 'items-end' : 'items-start'
                        )}
                      >
                        <div className="relative z-10 w-12 h-12 shrink-0 rounded-full border-2 border-gold bg-ivory flex items-center justify-center mb-4">
                          <span className="text-gold text-sm font-medium">
                            {step.number}
                          </span>
                        </div>
                        <h3 className="heading-sm text-obsidian mb-3">
                          {step.title}
                        </h3>
                        <p className="body-md text-warm-gray leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Right spacer / node connector */}
                    <div
                      className={cn(
                        'relative flex items-center',
                        isLeft ? 'order-2 justify-start' : 'order-1 justify-end'
                      )}
                    >
                      {/* Gold dot on the center line */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold z-10" />
                      <div className="w-full" />
                    </div>
                  </div>

                  {/* Mobile: single column */}
                  <div className="flex md:hidden items-start gap-6">
                    <div className="relative z-10 w-12 h-12 shrink-0 rounded-full border-2 border-gold bg-ivory flex items-center justify-center">
                      <span className="text-gold text-sm font-medium">
                        {step.number}
                      </span>
                    </div>
                    <div>
                      <h3 className="heading-sm text-obsidian mb-3">
                        {step.title}
                      </h3>
                      <p className="body-md text-warm-gray leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 4. BOOKING CTA                                                    */}
      {/* ================================================================== */}
      <section className="py-24 md:py-32 bg-obsidian">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpChild}>
              <h2 className="heading-lg text-white mb-6">
                Begin Your Bespoke Journey
              </h2>
              <div className="gold-line-long mx-auto mb-6" />
              <p className="body-md text-white/60 leading-relaxed max-w-xl mx-auto mb-10">
                Every masterpiece begins with a conversation. Schedule your private
                consultation with our atelier team and discover what it means to wear
                something made exclusively for you.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="lg">
                  Book Consultation
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 5. NEWSLETTER                                                     */}
      {/* ================================================================== */}
      <Newsletter />
    </PageTransition>
  )
}