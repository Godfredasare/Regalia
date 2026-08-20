'use client'

import { motion } from 'framer-motion'
import { Camera } from 'lucide-react'
import { instagramPosts } from '@/data'

export function InstagramFeed() {
  return (
    <section className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-obsidian/70 mb-3">
              Follow Us
            </p>
            <h2 className="heading-sm text-obsidian">@regaliajune</h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-obsidian border-b border-obsidian/30 pb-0.5 hover:border-obsidian transition-colors duration-300"
          >
            <Camera className="w-4 h-4" />
            Instagram
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
        {instagramPosts.map((post, i) => (
          <motion.a
            key={post.id}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <img
              src={post.image}
              alt={post.caption}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
              <Camera className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}