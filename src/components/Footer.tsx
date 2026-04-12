import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-deep text-cream/60">
      <div className="max-w-7xl mx-auto section-pad">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Column 1 — Identity */}
          <div>
            <h3 className="font-display text-2xl tracking-[0.15em] uppercase text-cream mb-4">
              Solas Gallery
            </h3>
            <p className="font-body text-sm leading-relaxed">
              Fine art photography, signature portraits,
              <br />and gallery events since 1995.
            </p>
            <p className="font-body text-sm mt-4 leading-relaxed">
              2 Rock Creek Dr, Salado, Texas 76571
              <br />
              <a href="tel:+12549471881" className="hover:text-cream transition-colors">(254) 947-1881</a>
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h4 className="font-display text-sm tracking-[0.15em] uppercase text-stone mb-6">Navigate</h4>
            <div className="flex flex-col gap-3">
              {[
                { href: '/art', label: 'Art for Home Walls' },
                { href: '/portraits', label: 'Signature Portraits' },
                { href: '/events', label: 'Events & Classes' },
                { href: '/gallery', label: 'Gallery Tour' },
                { href: '/story', label: 'Our Story' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm hover:text-cream transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 — Connect */}
          <div>
            <h4 className="font-display text-sm tracking-[0.15em] uppercase text-stone mb-6">Connect</h4>
            <a
              href="https://www.instagram.com/solasgallery/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm hover:text-cream transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>
            <div className="mt-8 pt-6 border-t border-cream/10">
              <p className="font-body text-xs leading-relaxed">
                Custom framing available at{' '}
                <a
                  href="https://saladovillageframer.com"
                  className="text-stone hover:text-cream transition-colors"
                >
                  Salado Village Framer &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-cream/40">
            &copy; {new Date().getFullYear()} Solas Gallery. All rights reserved.
          </p>
          <p className="font-body text-xs text-cream/30">
            Salado, Texas &middot; Est. 1995
          </p>
        </div>
      </div>
    </footer>
  )
}
