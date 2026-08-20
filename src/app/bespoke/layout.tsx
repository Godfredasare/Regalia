import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bespoke',
  description:
    'The REGALIA bespoke experience — a six-step journey from first consultation to a garment that exists nowhere else in the world.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
