'use client'

import { useEffect, useState } from 'react'

const QUERY = '(max-width: 767px)'

/**
 * True when the viewport is phone-sized (< md).
 * Use to soften animation distances/durations on small screens —
 * large translate offsets feel sluggish on narrow viewports.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia(QUERY)
    const update = () => setIsMobile(mql.matches)
    update()
    mql.addEventListener('change', update)
    return () => mql.removeEventListener('change', update)
  }, [])

  return isMobile
}
