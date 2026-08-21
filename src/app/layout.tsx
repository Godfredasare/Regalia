import type { Metadata } from 'next'
import { Cinzel, EB_Garamond, Montserrat } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'

// REGALIA Typography System — Cinzel (display) · EB Garamond (editorial) · Montserrat (UI)
const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
  display: 'swap',
})

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-editorial',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ui',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'REGALIA by June & Co. | Luxury African Fashion',
    template: '%s | REGALIA by June & Co.',
  },
  description:
    'REGALIA by June & Co. — Where African heritage meets modern luxury. Bespoke tailoring, editorial fashion, and premium fabrics from across the world.',
  icons: { icon: '/favicon.png' },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${ebGaramond.variable} ${montserrat.variable}`}
    >
      <body className="bg-ivory text-ink antialiased">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  )
}
