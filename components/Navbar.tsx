'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-bar-black/95 backdrop-blur-sm shadow-[0_1px_0_rgba(201,169,110,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Wordmark */}
          <Link
            href="/"
            className="font-serif text-lg lg:text-xl text-bar-cream tracking-[0.2em] uppercase hover:text-bar-gold transition-colors duration-300"
          >
            Casa Oscura
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-xs tracking-[0.25em] uppercase transition-colors duration-200 ${
                  pathname === href
                    ? 'text-bar-gold'
                    : 'text-bar-cream/70 hover:text-bar-cream'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 p-1"
            aria-label="Toggle navigation"
          >
            <span
              className={`block h-px bg-bar-cream transition-all duration-300 origin-center ${
                mobileOpen ? 'rotate-45 translate-y-[5px] w-5' : 'w-5'
              }`}
            />
            <span
              className={`block h-px bg-bar-cream transition-all duration-200 w-4 ${
                mobileOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-px bg-bar-cream transition-all duration-300 origin-center ${
                mobileOpen ? '-rotate-45 -translate-y-[9px] w-5' : 'w-5'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-bar-black/98 ${
          mobileOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-5 border-t border-bar-gold/10">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-xs tracking-[0.25em] uppercase ${
                pathname === href ? 'text-bar-gold' : 'text-bar-cream/70'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
