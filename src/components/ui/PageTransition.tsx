'use client'

import { motion, useReducedMotion } from 'framer-motion'

/**
 * Subtle fade-and-rise on route mount.
 * Honors prefers-reduced-motion — falls back to a plain cross-fade
 * with no translate, so vestibular users get no vertical movement.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0.2 : 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
