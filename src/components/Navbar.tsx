'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [pastHomeServices, setPastHomeServices] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Only the homepage has a dark hero behind the header. Any other pathname
  // — or a null pathname during an edge-case render — is a light page, so the
  // header defaults to visible (white bg + dark text).
  const isHomepage = pathname === '/';
  const transparent = isHomepage && !pastHomeServices;

  useEffect(() => {
    const onScroll = () => {
      if (pathname !== '/') {
        setPastHomeServices(true);
        return;
      }

      const careHeadline = document.querySelector<HTMLElement>(
        '[data-home-care-anchor]',
      );

      if (!careHeadline) {
        setPastHomeServices(window.scrollY > 40);
        return;
      }

      const careTop = careHeadline.offsetTop;
      // Switch earlier, before the "Care..." headline enters view.
      const triggerPoint = Math.max(0, careTop - 170);
      setPastHomeServices(window.scrollY >= triggerPoint);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]);

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
      className={`fixed top-0 left-0 right-0 z-50 pt-0 transition-all duration-300 ${
        transparent
          ? 'bg-black/20 backdrop-blur-md border-b border-white/20'
          : 'bg-white/90 backdrop-blur-md border-b border-[#D9D4C8] shadow-[0_8px_22px_-18px_rgba(0,29,31,0.45)]'
      }`}
    >
      <nav className="mx-auto w-full max-w-[96rem] px-2 sm:px-3 lg:px-4">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            transparent
              ? 'h-[66px] px-5'
              : 'h-[66px] px-5'
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
          <div className="hidden lg:grid grid-cols-5 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex w-[10.5rem] items-center justify-center text-base font-medium whitespace-nowrap transition-colors duration-300 hover:opacity-70 ${
                  transparent ? 'text-white' : 'text-[#0E1B1B]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Phone */}
          <div className="hidden lg:flex items-center gap-9">
            <a
              href="tel:+17143074911"
              className={`inline-flex items-center gap-2 text-base font-medium whitespace-nowrap transition-colors duration-300 ${
                transparent
                  ? 'text-white/90 hover:text-white'
                  : 'text-[#2F6E6B] hover:text-[#0E3B3A]'
              }`}
              aria-label="Call Ativo Home Care at 714-307-4911"
            >
              <svg
                className="h-4 w-4 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.33 1.7.63 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.15a2 2 0 0 1 2.11-.45c.8.3 1.64.51 2.5.63A2 2 0 0 1 22 16.92Z" />
              </svg>
              714-307-4911
            </a>
            <Link
              href="/contact"
              className={`rounded-full px-6 py-2.5 text-base font-medium transition-all duration-300 active:scale-[0.99] ${
                transparent
                  ? 'bg-white/90 border border-white/70 text-[#0E1B1B] hover:bg-[#2F6E6B] hover:text-white active:bg-[#2F6E6B] active:text-white'
                  : 'bg-[#0E3B3A] border border-[#0E3B3A] text-white hover:bg-[#2F6E6B] hover:border-[#2F6E6B] active:bg-[#2F6E6B] active:border-[#2F6E6B]'
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
            className="inline-flex items-center gap-2.5 text-[#2F6E6B] text-2xl font-medium"
            style={{ fontFamily: 'var(--font-serif)' }}
            aria-label="Call Ativo Home Care at 714-307-4911"
          >
            <svg
              className="h-6 w-6 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.33 1.7.63 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.15a2 2 0 0 1 2.11-.45c.8.3 1.64.51 2.5.63A2 2 0 0 1 22 16.92Z" />
            </svg>
            714-307-4911
          </a>
        </div>
      </div>
    </header>
  );
}
