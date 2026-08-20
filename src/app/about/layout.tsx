import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'The story of REGALIA by June & Co. — a luxury African fashion house founded in Lagos, uniting ancestral tailoring with global haute couture.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
