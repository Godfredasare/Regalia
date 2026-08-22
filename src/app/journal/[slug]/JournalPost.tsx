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
      <section className="relative flex min-h-[55svh] items-end overflow-hidden md:min-h-[65svh]">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/55 via-navy-dark/40 to-navy-dark/80" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-16 md:px-12 md:py-24">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-gold"
          >
            {post.category}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="heading-lg mb-6 max-w-3xl text-white"
          >
            {post.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-3 text-xs text-white/70 md:gap-6 md:text-sm"
          >
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" />
              {post.author}
            </span>
            <span>{formatDate(post.date)}</span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
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
