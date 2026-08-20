import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lookbook',
  description:
    'A curated visual journey through the REGALIA universe — editorial stories, fashion film, and the art of dressing.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
