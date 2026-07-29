import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, User } from 'lucide-react'
import { cn } from '@/lib/utils'
import { journalPosts, type JournalPost } from '@/data'
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
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
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
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const },
  }),
}

// ---------------------------------------------------------------------------
// Category list
// ---------------------------------------------------------------------------

const categories: Array<JournalPost['category'] | 'All'> = [
  'All',
  'Style',
  'Culture',
  'Craft',
  'Gentleman',
  'Women',
  'House',
]

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

// ---------------------------------------------------------------------------
// Journal Page
// ---------------------------------------------------------------------------

export default function Journal() {
  const [activeCategory, setActiveCategory] = useState<
    JournalPost['category'] | 'All'
  >('All')

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return journalPosts
    return journalPosts.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const featuredPost = filteredPosts.find((p) => p.featured) || filteredPosts[0]
  const remainingPosts = filteredPosts.filter((p) => p.id !== featuredPost?.id)

  return (
    <PageTransition>
      {/* ================================================================== */}
      {/* 1. HERO                                                           */}
      {/* ================================================================== */}
      <LuxuryBanner
        subtitle="The Journal"
        title="Stories from the House"
        image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80"
      />

      {/* ================================================================== */}
      {/* 2. CATEGORY FILTERS                                               */}
      {/* ================================================================== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Filters */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                variants={fadeUpChild}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.15em] border transition-all duration-300',
                  activeCategory === cat
                    ? 'bg-gold border-gold text-white'
                    : 'bg-transparent border-border-subtle text-warm-gray hover:border-gold hover:text-gold'
                )}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* -------------------------------------------------------------- */}
          {/* 3. FEATURED POST                                               */}
          {/* -------------------------------------------------------------- */}
          {featuredPost && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUpChild}
              className="mb-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center group">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold mb-4">
                    {featuredPost.category}
                  </p>
                  <h3 className="heading-sm text-obsidian mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="body-md text-warm-gray leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 md:gap-6 text-xs md:text-sm text-warm-gray/70 mb-6 md:mb-8">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      {featuredPost.author}
                    </span>
                    <span>{formatDate(featuredPost.date)}</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <Link
                    to={`/journal/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-gold hover:text-gold-light transition-colors duration-300"
                  >
                    Read More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* -------------------------------------------------------------- */}
          {/* 4. POST GRID                                                   */}
          {/* -------------------------------------------------------------- */}
          {remainingPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingPosts.map((post, i) => (
                <motion.article
                  key={post.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={fadeUp}
                  className="group"
                >
                  <Link to={`/journal/${post.slug}`} className="block">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden mb-5">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Category label */}
                    <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold mb-2">
                      {post.category}
                    </p>

                    {/* Title */}
                    <h3 className="heading-sm text-obsidian mb-3 leading-tight line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="body-md text-warm-gray leading-relaxed mb-5 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-warm-gray/60 pt-4 border-t border-border-subtle">
                      <span className="flex items-center gap-1.5">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                      <span>{formatDate(post.date)}</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}

          {/* Empty state */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpChild}
              className="text-center py-20"
            >
              <p className="body-md text-warm-gray">
                No stories found in this category yet. Please check back soon.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ================================================================== */}
      {/* 5. NEWSLETTER                                                     */}
      {/* ================================================================== */}
      <Newsletter />
    </PageTransition>
  )
}