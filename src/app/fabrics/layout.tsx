import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fabric Library',
  description:
    "The REGALIA fabric library — the world's finest textiles sourced from Nigeria's great markets to the handlooms of West Africa.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
