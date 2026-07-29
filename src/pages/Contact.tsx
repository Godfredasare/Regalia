import { MapPin, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { LuxuryBanner } from '@/components/ui/LuxuryBanner'
import { ContactForm, ContactInfo } from '@/components/ui/ContactForm'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Accordion } from '@/components/ui/Accordion'
import { AppointmentCard } from '@/components/ui/AppointmentCard'
import { Newsletter } from '@/components/ui/Newsletter'
import { PageTransition } from '@/components/ui/PageTransition'
import { faqs } from '@/data'

export default function Contact() {
  const faqItems = faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }))

  return (
    <PageTransition>
      {/* 1. Hero Banner */}
      <LuxuryBanner
        subtitle="Get in Touch"
        title="We'd Love to Hear From You"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
      />

      {/* 2. Contact Form + Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold mb-3 md:mb-4">
                Send a Message
              </p>
              <h3 className="heading-md text-obsidian mb-8 md:mb-10">
                How Can We Help?
              </h3>
              <ContactForm />
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold mb-3 md:mb-4">
                Contact Information
              </p>
              <h3 className="heading-md text-obsidian mb-8 md:mb-10">
                Reach Us Directly
              </h3>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Map Placeholder */}
      <section className="h-64 md:h-96 bg-ivory flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-10 h-10 text-gold mx-auto mb-4" />
          <p className="text-sm font-light text-obsidian">
            14 Victoria Island, Lagos, Nigeria
          </p>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <SectionTitle
            subtitle="Questions"
            title="Frequently Asked"
            align="center"
          />
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* 5. Appointment CTA */}
      <AppointmentCard />

      {/* 6. WhatsApp Section */}
      <section className="py-24 bg-ivory">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h3 className="heading-sm text-obsidian mb-4">Prefer to Chat?</h3>
          <p className="body-md text-warm-gray mb-8">
            Our concierge team is available on WhatsApp for quick questions,
            style advice, and appointment scheduling. We typically respond
            within minutes during business hours.
          </p>
          <motion.a
            href="https://wa.me/2348012345678"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-[#1ebe57] transition-colors duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </motion.a>
        </div>
      </section>

      {/* 7. Newsletter */}
      <Newsletter />
    </PageTransition>
  )
}