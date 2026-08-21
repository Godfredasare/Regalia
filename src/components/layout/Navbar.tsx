'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search, ShoppingBag, ChevronDown, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useScrollPosition } from '@/hooks/useScrollPosition'

const navLinksLeft = [
  {
    label: 'Collections',
    href: '/collections',
    children: [
      { label: 'Menswear', href: '/collections/menswear' },
      { label: 'Womenswear', href: '/collections/womenswear' },
      { label: 'Native Wear', href: '/collections/native-wear' },
      { label: 'Corporate', href: '/collections/corporate' },
      { label: 'Wedding', href: '/collections/wedding' },
      { label: 'Luxury Casual', href: '/collections/luxury-casual' },
      { label: 'Ready to Wear', href: '/collections/ready-to-wear' },
      { label: 'Limited Editions', href: '/collections/limited-editions' },
      { label: 'Accessories', href: '/collections/accessories' },
    ],
  },
  { label: 'Bespoke', href: '/bespoke' },
]

const navLinksRight = [
  { label: 'Journal', href: '/journal' },
  { label: 'About', href: '/about' },
]

const allNavLinks = [
  ...navLinksLeft,
  { label: 'Shop', href: '/shop' },
  { label: 'Lookbook', href: '/lookbook' },
  { label: 'Fabric Library', href: '/fabrics' },
  { label: 'Services', href: '/services' },
  ...navLinksRight,
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)
  const { isScrolled } = useScrollPosition()
  const pathname = usePathname()
  const isHome = pathname === '/'

  // Navbar always visible — transparent at top, solid on scroll
  const showNav = true

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
    setExpandedMobile(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        initial={isHome ? false : undefined}
        animate={{
          y: showNav ? 0 : -80,
          opacity: showNav ? 1 : 0,
        }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] transition-colors duration-700 ease-out',
          isHome && !isScrolled
            ? 'bg-transparent'
            : 'bg-navy/95 backdrop-blur-md',
          isHome && !isScrolled ? 'text-white' : 'text-ivory'
        )}
      >
        <nav className="max-w-[1440px] mx-auto px-6 md:px-10 xl:px-16 h-[72px] grid grid-cols-[1fr_auto_1fr] items-center">
          {/* Left Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinksLeft.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="text-[10px] font-medium uppercase tracking-[0.2em] hover:text-gold transition-colors duration-500 flex items-center gap-1.5"
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-2.5 h-2.5" />}
                </Link>

                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="absolute top-full left-0 w-52 bg-ivory shadow-2xl border border-border-subtle/50 py-5"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-6 py-2.5 text-[11px] font-light text-obsidian hover:text-gold hover:bg-ivory-light transition-all duration-300"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Center — Logo */}
          <Link href="/" aria-label="REGALIA — Home" className="flex items-center">
            <img
              src="/logo2.png"
              alt="REGALIA"
              className="h-9 w-9 md:h-10 md:w-10 object-contain"
            />
          </Link>

          {/* Right Nav + Icons */}
          <div className="hidden lg:flex items-center justify-end gap-6 xl:gap-10">
            {navLinksRight.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[10px] font-medium uppercase tracking-[0.2em] hover:text-gold transition-colors duration-500"
              >
                {link.label}
              </Link>
            ))}
            <span className="w-px h-4 bg-current opacity-20" />
            <Link href="/shop" className="hover:text-gold transition-colors duration-500">
              <Search className="w-[16px] h-[16px]" strokeWidth={1.5} />
            </Link>
            <button className="hover:text-gold transition-colors duration-500">
              <ShoppingBag className="w-[16px] h-[16px]" strokeWidth={1.5} />
            </button>
          </div>

          {/* Mobile: Icons + Toggle */}
          <div className="flex lg:hidden items-center justify-end gap-5">
            <Link href="/shop" className="hover:text-gold transition-colors duration-500">
              <Search className="w-[16px] h-[16px]" strokeWidth={1.5} />
            </Link>
            <button className="hover:text-gold transition-colors duration-500">
              <ShoppingBag className="w-[16px] h-[16px]" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="hover:text-gold transition-colors duration-500"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-[99]"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-ivory z-[101] overflow-y-auto flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-border-subtle pt-[calc(1.5rem+env(safe-area-inset-top,0px))]">
                <img
                  src="/logo2.png"
                  alt="REGALIA"
                  className="h-9 w-9 object-contain"
                />
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <X className="w-5 h-5 text-obsidian" strokeWidth={1.5} />
                </button>
              </div>
              <div className="py-4 flex-1">
                {allNavLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    {'children' in link && link.children ? (
                      <>
                        <button
                          onClick={() =>
                            setExpandedMobile(
                              expandedMobile === link.label ? null : link.label
                            )
                          }
                          className="w-full flex items-center justify-between px-8 py-3.5 text-[12px] font-medium uppercase tracking-[0.15em] text-obsidian hover:text-gold hover:bg-ivory-light transition-all duration-300 border-b border-border-subtle/30"
                        >
                          {link.label}
                          <ChevronRight
                            className={cn(
                              'w-3.5 h-3.5 transition-transform duration-300',
                              expandedMobile === link.label && 'rotate-90'
                            )}
                            strokeWidth={1.5}
                          />
                        </button>
                        <AnimatePresence>
                          {expandedMobile === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeOut' }}
                              className="overflow-hidden bg-ivory-light/50"
                            >
                              {(link.children as { label: string; href: string }[]).map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className="block px-12 py-3 text-[11px] font-light uppercase tracking-[0.12em] text-warm-gray hover:text-gold hover:bg-ivory-light/80 transition-all duration-300 border-b border-border-subtle/20"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className="block px-8 py-3.5 text-[12px] font-medium uppercase tracking-[0.15em] text-obsidian hover:text-gold hover:bg-ivory-light transition-all duration-300 border-b border-border-subtle/30"
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
              <div className="px-8 py-6 border-t border-border-subtle space-y-4 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))]">
                <Link href="/shop" className="flex items-center gap-3 text-sm text-warm-gray hover:text-obsidian transition-colors">
                  <Search className="w-4 h-4" />
                  Search
                </Link>
                <div className="flex items-center gap-3 text-sm text-warm-gray">
                  <ShoppingBag className="w-4 h-4" />
                  Bag (0)
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
