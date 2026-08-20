import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Collections',
  description:
    'Explore the REGALIA collections — menswear, womenswear, native wear, corporate, wedding, luxury casual, ready to wear, limited editions and accessories.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
