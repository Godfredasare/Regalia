import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shop',
  description:
    "Shop the full REGALIA collection — bespoke tailoring and ready-to-wear luxury, crafted from the world's finest fabrics.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
