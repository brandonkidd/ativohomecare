'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Only the homepage has a dark hero behind the header. Any other pathname
  // — or a null pathname during an edge-case render — is a light page, so the
  // header defaults to visible (white bg + dark text).
  const isHomepage = pathname === '/';
  const transparent = isHomepage && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/the-ativo-difference', label: 'The Ativo Difference' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/locations', label: 'Locations' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 pt-3 transition-all duration-300"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            transparent
              ? 'h-[66px] rounded-3xl bg-white/18 backdrop-blur-sm border border-white/30 px-5 shadow-lg shadow-black/20'
              : 'h-[66px] rounded-3xl bg-white/90 backdrop-blur-md border border-[#D9D4C8] px-5 shadow-[0_8px_22px_-18px_rgba(0,29,31,0.45)]'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={transparent ? '/ativo-wordmark-white-clean.png' : '/ativo-wordmark-evergreen-clean.png'}
              alt="Ativo"
              width={220}
              height={56}
              priority
              className="h-7 w-auto object-contain md:h-8"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-colors duration-300 hover:opacity-70 ${
                  transparent ? 'text-white' : 'text-[#0E1B1B]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Phone */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+17143074911"
              className={`text-base font-medium transition-colors duration-300 ${
                transparent ? 'text-white/90' : 'text-[#2F6E6B]'
              }`}
            >
              714-307-4911
            </a>
            <Link
              href="/contact"
              className={`rounded-full px-6 py-2.5 text-base font-medium transition-all duration-300 active:scale-[0.99] ${
                transparent
                  ? 'bg-white/90 border border-white/70 text-[#0E1B1B] hover:bg-[#2F6E6B] hover:text-white active:bg-[#2F6E6B] active:text-white'
                  : 'bg-white border border-[#D9D4C8] text-[#0E1B1B] hover:bg-[#2F6E6B] hover:text-white active:bg-[#2F6E6B] active:text-white'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                mobileOpen
                  ? 'rotate-45 translate-y-2 bg-[#0E1B1B]'
                  : transparent
                  ? 'bg-white'
                  : 'bg-[#0E1B1B]'
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                mobileOpen
                  ? 'opacity-0'
                  : transparent
                  ? 'bg-white'
                  : 'bg-[#0E1B1B]'
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                mobileOpen
                  ? '-rotate-45 -translate-y-2 bg-[#0E1B1B]'
                  : transparent
                  ? 'bg-white'
                  : 'bg-[#0E1B1B]'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-all duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-medium text-[#0E1B1B]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 text-2xl font-medium text-[#0E1B1B] transition-colors duration-300 hover:text-[#2F6E6B]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Contact Us
          </Link>
          <a
            href="tel:+17143074911"
            className="text-[#2F6E6B] text-2xl font-medium"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            714-307-4911
          </a>
        </div>
      </div>
    </header>
  );
}
