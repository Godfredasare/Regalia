import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Journal',
  description:
    'Stories from the House of June & Co. — style, culture, craft, and the philosophy of African luxury.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
