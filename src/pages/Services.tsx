import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { services } from '@/data'
import { PageTransition } from '@/components/ui/PageTransition'
import { SectionTitle } from '@/components/ui/SectionTitle'
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
// Process steps data
// ---------------------------------------------------------------------------

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We begin with a personal conversation to understand your style, needs, and vision.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our team crafts a bespoke plan tailored to your unique preferences and lifestyle.',
  },
  {
    number: '03',
    title: 'Fitting',
    description: 'Precision measurements and fittings ensure a flawless, comfortable result.',
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'Your finished piece is presented with the care and ceremony it deserves.',
  },
]

// ---------------------------------------------------------------------------
// Services Page
// ---------------------------------------------------------------------------

export default function Services() {
  return (
    <PageTransition>
      {/* ================================================================== */}
      {/* 1. HERO                                                           */}
      {/* ================================================================== */}
      <LuxuryBanner
        subtitle="Our Services"
        title="Elevate Your Style"
        image="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1600&q=80"
      />

      {/* ================================================================== */}
      {/* 2. SERVICE CARDS                                                  */}
      {/* ================================================================== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpChild}>
              <SectionTitle
                subtitle="Services"
                title="What We Offer"
                description="From personal styling to corporate uniforms, each service is crafted with the same meticulous attention to detail that defines the House of June."
              />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
              >
                {/* Background image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10">
                  <h3 className="heading-sm text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="body-md text-white/70 mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 mb-6">
                    {service.features.slice(0, 4).map((feature, fi) => (
                      <li
                        key={fi}
                        className="text-white/60 text-sm flex items-start gap-2"
                      >
                        <span className="text-gold mt-1.5 text-[6px]">&#9670;</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/bespoke"
                    className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-gold hover:text-gold-light transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 3. HOW IT WORKS                                                   */}
      {/* ================================================================== */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpChild}>
              <SectionTitle
                subtitle="Process"
                title="How It Works"
                description="A seamless, four-step journey from first conversation to final delivery — designed around your schedule and expectations."
              />
            </motion.div>
          </motion.div>

          {/* Desktop: horizontal layout with connecting lines */}
          <div className="hidden md:flex items-start justify-between relative">
            {/* Connecting line */}
            <div className="absolute top-6 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-gold/30" />

            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                className="flex-1 flex flex-col items-center text-center px-4"
              >
                {/* Gold circle with number */}
                <div className="relative z-10 w-12 h-12 rounded-full border-2 border-gold bg-ivory flex items-center justify-center mb-6">
                  <span className="text-gold text-sm font-medium">
                    {step.number}
                  </span>
                </div>
                <h4 className="heading-sm text-obsidian mb-3">
                  {step.title}
                </h4>
                <p className="body-md text-warm-gray max-w-[220px] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile: vertical layout */}
          <div className="flex flex-col md:hidden relative">
            {/* Vertical line */}
            <div className="absolute top-6 bottom-6 left-6 w-px bg-gold/30" />

            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                variants={fadeUp}
                className="flex items-start gap-6 pb-10 last:pb-0"
              >
                {/* Gold circle with number */}
                <div className="relative z-10 w-12 h-12 shrink-0 rounded-full border-2 border-gold bg-ivory flex items-center justify-center">
                  <span className="text-gold text-sm font-medium">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h4 className="heading-sm text-obsidian mb-2">
                    {step.title}
                  </h4>
                  <p className="body-md text-warm-gray leading-relaxed">
                    {step.description}
                  </p>
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