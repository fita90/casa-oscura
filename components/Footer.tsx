import Link from 'next/link'

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/_ftovar/' },
  { label: 'Substack', href: 'https://substack.com/@ftovar' },
]

const navLinks = [
  { label: 'Menu', href: '/menu' },
  { label: 'About', href: '/about' },
]

export default function Footer() {
  return (
    <footer className="bg-bar-dark border-t border-bar-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">

          {/* Brand */}
          <div>
            <p className="font-serif text-xl text-bar-cream tracking-[0.2em] uppercase mb-1">
              Bar Tovar
            </p>
            <p className="text-bar-muted text-xs tracking-[0.2em] uppercase">
              Private Home Bar
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            <p className="text-bar-gold text-xs tracking-[0.25em] uppercase mb-1">Explore</p>
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-bar-muted text-sm hover:text-bar-cream transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <p className="text-bar-gold text-xs tracking-[0.25em] uppercase mb-1">Follow</p>
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bar-muted text-sm hover:text-bar-cream transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-bar-gold/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-bar-muted text-xs tracking-wider">
            © {new Date().getFullYear()} Bar Tovar, a Club Nando Company. All rights reserved.
          </p>
          <p className="text-bar-muted text-xs tracking-wider">
            Drink somewhat responsibly. Please enjoy the moment.
          </p>
        </div>
      </div>
    </footer>
  )
}
