'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { products } from '@/data'
import {
  PETITE_AGE,
  petiteFitting,
  petitePromise,
  petiteWhatWeMake,
} from '@/data/petite'
import { PageTransition } from '@/components/ui/PageTransition'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ProductCard } from '@/components/ui/ProductCard'
// Scoped emerald theme — every helper below exists only under .petite-theme.
import './petite.css'

// ---------------------------------------------------------------------------
// Animation variants (house patterns — small offsets, lux easing)
// ---------------------------------------------------------------------------

const EASE_LUX: [number, number, number, number] = [0.22, 1, 0.36, 1]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_LUX },
  },
}

// Imagery — client-provided Pinterest selections for the Petite launch.
// When the dedicated campaign shoot happens, replace per the brief: real
// children at real occasions (naming ceremonies, weddings, church), warm
// natural light, movement, genuine expressions. Never stiff, never over-posed.
const HERO_IMAGE =
  'https://i.pinimg.com/736x/cc/84/7c/cc847c0ce5c9f0828e91e0f155fe1f89.jpg'

// ---------------------------------------------------------------------------

export default function PetiteCollection() {
  const petiteProducts = products.filter((p) => p.category === 'Petite')
  const ageLabel = PETITE_AGE.label

  return (
    <PageTransition>
      <div className="petite-theme">
        {/* ============================================================== */}
        {/* 1. HERO                                                        */}
        {/* ============================================================== */}
        <section className="relative overflow-hidden bg-ivory pt-28 md:pt-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-14 md:grid-cols-2 md:gap-16 md:px-12 md:pb-20">
            {/* Copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="order-2 max-w-xl md:order-1"
            >
              <motion.p
                variants={fadeUp}
                className="petite-text mb-4 text-[11px] font-medium uppercase tracking-[0.4em]"
              >
                REGALIA Petite
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="heading-lg mb-6 text-obsidian"
              >
                Distinction begins early.
              </motion.h1>

              <motion.div variants={fadeUp}>
                <div className="petite-hairline mb-6 w-[120px]" />
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="body-md mb-9 leading-relaxed text-warm-gray"
              >
                Ceremonial and occasion wear for children — crafted with the
                care of the house, and made for the way children actually move.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              >
                <a
                  href="#petite-pieces"
                  className="petite-surface group inline-flex min-h-[44px] items-center justify-center gap-2 px-8 py-3 text-xs uppercase tracking-[0.18em] transition-all duration-500 ease-lux hover:opacity-90 active:scale-[0.97]"
                >
                  Explore Petite
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                </a>
                <Link
                  href="/contact"
                  className="petite-border group inline-flex min-h-[44px] items-center justify-center gap-2 border px-8 py-3 text-xs uppercase tracking-[0.18em] text-obsidian transition-all duration-500 ease-lux hover:bg-obsidian hover:text-white active:scale-[0.97]"
                >
                  Book a Fitting
                </Link>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="font-accent text-sm italic tracking-wide text-warm-gray"
              >
                Every family has a next chapter. We dress it beautifully.
              </motion.p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: EASE_LUX }}
              className="relative order-1 h-[46svh] overflow-hidden md:order-2 md:h-[62svh]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={HERO_IMAGE}
                alt="Children's occasion wear from REGALIA Petite"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/25 to-transparent" />
              <div className="petite-surface absolute bottom-4 left-4 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.25em]">
                Ages {ageLabel}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 2. INTRODUCTION                                                */}
        {/* ============================================================== */}
        <section className="border-t border-border-subtle bg-ivory-light py-20 md:py-28">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-warm-gray"
              >
                An Introduction
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="font-accent mb-6 text-[clamp(1.15rem,2.2vw,1.5rem)] font-light italic leading-relaxed text-obsidian"
              >
                There are days a family remembers forever — a naming ceremony,
                a wedding, a first Christmas in the front pew. On those days,
                the youngest guests deserve to be dressed with the same
                intention as everyone else.
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="petite-hairline mx-auto mb-6 w-[80px]"
              />
              <motion.p
                variants={fadeUp}
                className="body-md leading-relaxed text-warm-gray"
              >
                REGALIA Petite brings the craftsmanship of the house to
                children. The same fabrics. The same finishing. The same eye —
                cut smaller, and made gentler. Because a child should look
                exceptional and still feel free to be a child.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. WHAT WE MAKE — four-row table                               */}
        {/* ============================================================== */}
        <section className="bg-ivory py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={stagger}
              className="mb-12 text-center md:mb-16"
            >
              <motion.p
                variants={fadeUp}
                className="petite-text mb-4 text-[11px] font-medium uppercase tracking-[0.35em]"
              >
                What We Make
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="heading-md text-obsidian"
              >
                Four Ways Worn Small
              </motion.h2>
            </motion.div>

            <div>
              {petiteWhatWeMake.map((row, i) => (
                <motion.div
                  key={row.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: i * 0.06, ease: EASE_LUX }}
                  className="group grid grid-cols-1 gap-2 border-t border-border-subtle py-7 transition-colors duration-500 last:border-b hover:bg-ivory-light/60 md:grid-cols-[72px_260px_1fr] md:items-baseline md:gap-6 md:px-4"
                >
                  <span className="petite-text font-body text-sm font-medium tracking-[0.2em]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="heading-sm text-obsidian">{row.title}</h3>
                  <p className="body-md max-w-xl leading-relaxed text-warm-gray">
                    {row.copy}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4. THE PETITE PROMISE — the trust signal, given real weight     */}
        {/* ============================================================== */}
        <section className="petite-surface relative overflow-hidden py-20 md:py-28">
          {/* Quiet tonal paneling — keeps the emerald field from sitting flat */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 15% 20%, #ffffff 0, transparent 40%), radial-gradient(circle at 85% 80%, #ffffff 0, transparent 45%)',
            }}
          />
          <div className="relative mx-auto max-w-5xl px-6 md:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="mb-8 text-center">
                <ShieldCheck
                  className="mx-auto mb-5 h-8 w-8 text-[var(--petite-on-accent)]"
                  strokeWidth={1.25}
                />
                <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-[var(--petite-on-accent)]/70">
                  The Petite Promise
                </p>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="font-accent mx-auto mb-14 max-w-3xl text-center text-[clamp(1.35rem,3vw,2rem)] font-light italic leading-relaxed text-[var(--petite-on-accent)]"
              >
                &ldquo;{petitePromise.opening}&rdquo;
              </motion.p>

              <div className="mb-14 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
                {petitePromise.bullets.map((bullet) => (
                  <motion.div
                    key={bullet.title}
                    variants={fadeUp}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rotate-45 bg-[var(--petite-accent-soft)]" />
                    <div>
                      <h3 className="mb-1.5 font-body text-[12px] font-medium uppercase tracking-[0.22em] text-[var(--petite-on-accent)]">
                        {bullet.title}
                      </h3>
                      <p className="text-sm font-light leading-relaxed text-[var(--petite-on-accent)]/75">
                        {bullet.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeUp} className="text-center">
                <div className="mx-auto mb-8 flex max-w-md items-center gap-4">
                  <div className="h-px flex-1 bg-[var(--petite-on-accent)]/25" />
                  <span className="text-[var(--petite-on-accent)]/50">&#9670;</span>
                  <div className="h-px flex-1 bg-[var(--petite-on-accent)]/25" />
                </div>
                <p className="font-heading mx-auto max-w-2xl text-[clamp(1.4rem,3vw,2.1rem)] font-light leading-snug text-[var(--petite-on-accent)]">
                  Beautiful is not enough for a child.
                  <br />
                  It must also be kind.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. SIZING & THE PETITE FITTING                                 */}
        {/* ============================================================== */}
        <section className="bg-ivory py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:px-12 lg:grid-cols-2 lg:gap-20">
            {/* Sizing copy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="petite-text mb-4 text-[11px] font-medium uppercase tracking-[0.35em]"
              >
                Sizing
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="heading-md mb-6 text-obsidian"
              >
                Made to Measure, Ages 1&ndash;12
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="petite-hairline mb-6 w-[80px]"
              />
              <motion.p
                variants={fadeUp}
                className="body-md mb-6 leading-relaxed text-warm-gray"
              >
                REGALIA Petite is made to measure for children from{' '}
                {PETITE_AGE.min} to {PETITE_AGE.max} years. Because every piece
                is cut to your child&rsquo;s measurements, there is no guessing
                between sizes — and we build in a small allowance so a
                favourite piece lasts a little longer.
              </motion.p>
              <motion.div variants={fadeUp}>
                <span className="petite-border inline-flex items-center border px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-obsidian">
                  Ages {ageLabel} · Made to Order
                </span>
              </motion.div>
            </motion.div>

            {/* Fitting steps */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="mb-8 text-[11px] font-medium uppercase tracking-[0.35em] text-warm-gray"
              >
                The Petite Fitting
              </motion.p>
              <div className="space-y-8">
                  {petiteFitting.map((step) => (
                    <motion.div
                      key={step.number}
                      variants={fadeUp}
                      className="relative flex items-start gap-5"
                    >
                      <div className="petite-surface relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-body text-[13px] font-medium">
                        {step.number}
                      </div>
                      <div className="pt-1.5">
                        <h3 className="mb-1 font-body text-[12px] font-medium uppercase tracking-[0.22em] text-obsidian">
                          {step.title}
                        </h3>
                        <p className="body-md leading-relaxed text-warm-gray">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
              </div>
              <motion.p
                variants={fadeUp}
                className="font-accent mt-10 text-sm italic leading-relaxed text-warm-gray"
              >
                Consultations for children&rsquo;s pieces are relaxed and quick.
                We know small clients have short patience.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 6. THE PIECES — standard product grid, existing components      */}
        {/* ============================================================== */}
        <section
          id="petite-pieces"
          className="scroll-mt-24 border-t border-border-subtle bg-ivory-light py-20 md:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <SectionTitle
              subtitle="REGALIA Petite"
              title="The Pieces"
              description="A first edit of the Petite atelier. Every piece is cut to your child's measurements — begin with a fitting."
            />

            {petiteProducts.length > 0 ? (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-8 lg:grid-cols-3">
                {petiteProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.images[0]}
                    hoverImage={product.images[1]}
                    fabric={product.fabric}
                    slug={product.slug}
                    isNewArrival={product.newArrival}
                  />
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="body-md text-warm-gray">
                  The first Petite pieces are being finished at the atelier.
                  Enquire to be fitted when they arrive.
                </p>
                <Link
                  href="/contact"
                  className="petite-text mt-6 inline-flex items-center gap-2 border-b pb-0.5 text-[11px] font-medium uppercase tracking-[0.2em]"
                >
                  Enquire
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
