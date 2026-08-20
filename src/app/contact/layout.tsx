import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with REGALIA by June & Co. — book a private appointment, schedule a consultation, or ask our concierge team a question.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
