'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Clock, User } from 'lucide-react'
import { journalPosts } from '@/data'
import { PageTransition } from '@/components/ui/PageTransition'
import { Newsletter } from '@/components/ui/Newsletter'
import { Button } from '@/components/ui/Button'

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function JournalPost({ slug }: { slug: string }) {
  const post = journalPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <PageTransition>
        <section className="min-h-screen flex items-center justify-center bg-ivory">
          <div className="text-center px-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-obsidian/70 mb-4">
              Not Found
            </p>
            <h1 className="heading-lg text-obsidian mb-6">Story Not Found</h1>
            <div className="gold-line mx-auto mb-8" />
            <p className="body-md text-warm-gray max-w-md mx-auto mb-10">
              The story you are looking for does not exist or may have been
              moved.
            </p>
            <Link href="/journal">
              <Button variant="outline" size="md">
                Back to Journal
              </Button>
            </Link>
          </div>
        </section>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-end overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.05 }}
          transition={{ duration: 20, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold mb-4"
          >
            {post.category}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="heading-lg text-white mb-6 max-w-3xl"
          >
            {post.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 md:gap-6 text-xs md:text-sm text-white/70"
          >
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              {post.author}
            </span>
            <span>{formatDate(post.date)}</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="body-lg font-accent text-warm-gray leading-relaxed">
              {post.excerpt}
            </p>
            <div className="gold-line" />
            <p className="body-md font-accent text-warm-gray leading-relaxed">
              This story continues to unfold within the House of June &amp; Co.
              Visit the journal again soon, or explore the collections that
              inspired it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-16"
          >
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-obsidian/70 border-b border-gold/50 pb-0.5 hover:border-gold transition-colors duration-300"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Journal
            </Link>
          </motion.div>
        </div>
      </section>

      <Newsletter />
    </PageTransition>
  )
}
