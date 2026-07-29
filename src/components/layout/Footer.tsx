import { Link } from 'react-router-dom'
import { Camera, X, Share2, ArrowUp } from 'lucide-react'

const footerLinks = {
  collections: [
    { label: 'Menswear', href: '/collections/menswear' },
    { label: 'Womenswear', href: '/collections/womenswear' },
    { label: 'Native Wear', href: '/collections/native-wear' },
    { label: 'Corporate', href: '/collections/corporate' },
    { label: 'Wedding', href: '/collections/wedding' },
    { label: 'Accessories', href: '/collections/accessories' },
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

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-obsidian text-white">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-8 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 lg:gap-8 mb-14 md:mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2 text-center md:text-left">
            <Link to="/" className="font-heading text-2xl md:text-3xl font-light tracking-wider block mb-6">
              REGALIA
            </Link>
            <p className="text-sm font-light text-white/50 leading-relaxed max-w-sm mx-auto md:mx-0 mb-8">
              Where African heritage meets modern luxury. Bespoke tailoring and editorial fashion from the House of June & Co.
            </p>
            <div className="flex justify-center md:justify-start gap-5">
              {[Camera, X, Share2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-white/15 text-white/50 hover:text-gold hover:border-gold/50 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="text-center md:text-left">
              <h4 className="text-[11px] font-medium uppercase tracking-[0.25em] text-gold mb-6">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-[13px] font-light text-white/50 hover:text-white transition-colors duration-300"
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
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/30 tracking-wider">
            &copy; {new Date().getFullYear()} REGALIA by June & Co. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[11px] text-white/30 hover:text-white/60 transition-colors tracking-wider">
              Privacy Policy
            </a>
            <a href="#" className="text-[11px] text-white/30 hover:text-white/60 transition-colors tracking-wider">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 flex items-center justify-center border border-white/15 text-white/40 hover:text-gold hover:border-gold/50 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}