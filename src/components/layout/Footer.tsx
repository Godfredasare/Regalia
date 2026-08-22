'use client'

import Link from 'next/link'
import { Camera, AtSign, Share2, ArrowUp } from 'lucide-react'

const footerLinks = {
  collections: [
    { label: 'Menswear', href: '/collections/menswear' },
    { label: 'Womenswear', href: '/collections/womenswear' },
    { label: 'Native Wear', href: '/collections/native-wear' },
    { label: 'Corporate', href: '/collections/corporate' },
    { label: 'Wedding', href: '/collections/wedding' },
    { label: 'Petite', href: '/collections/petite' },
  ],
  house: [
    { label: 'Our Story', href: '/about' },
    { label: 'Lookbook', href: '/lookbook' },
    { label: 'Journal', href: '/journal' },
    { label: 'Services', href: '/services' },
    { label: 'Bespoke', href: '/bespoke' },
    { label: 'Contact', href: '/contact' },
  ],
  client: [
    { label: 'Fabric Library', href: '/fabrics' },
    { label: 'Size Guide', href: '#' },
    { label: 'Care Instructions', href: '#' },
    { label: 'Shipping', href: '#' },
    { label: 'Returns', href: '#' },
    { label: 'FAQ', href: '/contact' },
  ],
}

const socials = [
  { Icon: Camera, label: 'Instagram' },
  { Icon: AtSign, label: 'Twitter' },
  { Icon: Share2, label: 'Social share' },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-navy-dark text-white">
      {/* Gold hairline crown */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="mx-auto max-w-[1400px] px-6 pb-8 pt-16 md:px-12 md:pb-12 md:pt-20">
        <div className="mb-14 grid grid-cols-2 gap-10 md:mb-16 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 text-center md:text-left">
            <Link
              href="/"
              className="mb-6 inline-flex items-center justify-center md:justify-start"
              aria-label="REGALIA — Home"
            >
              <img
                src="/logo.png"
                alt="REGALIA"
                className="h-12 w-auto object-contain md:h-14"
              />
            </Link>
            <p className="mx-auto mb-6 max-w-sm text-sm font-light leading-relaxed text-white/50 md:mx-0">
              Where African heritage meets modern luxury. Bespoke tailoring and
              editorial fashion from the House of June &amp; Co.
            </p>
            <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.25em] text-gold">
              Accra · Lagos
            </p>
            <p className="mb-8 font-accent text-[13px] italic text-white/40">
              Every Stitch Tells a Story of Excellence.
            </p>
            <div className="flex justify-center gap-3 md:justify-start">
              {socials.map(({ Icon, label }) => (
                <Link
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/50 transition-all duration-500 hover:border-gold/60 hover:text-gold active:scale-95"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="text-center md:text-left">
              <h4 className="mb-5 text-[11px] font-medium uppercase tracking-[0.25em] text-gold/80">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="link-underline inline-block py-1 text-[13px] font-light text-white/50 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-[11px] tracking-wider text-white/30">
            &copy; {new Date().getFullYear()} REGALIA by June &amp; Co. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[11px] tracking-wider text-white/30 transition-colors hover:text-white/60"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[11px] tracking-wider text-white/30 transition-colors hover:text-white/60"
            >
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/40 transition-all duration-300 hover:border-gold/50 hover:text-gold active:scale-95"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
