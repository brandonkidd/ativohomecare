'use client';

import Image from 'next/image';
import { useState } from 'react';
import { testimonials } from '@/lib/testimonials';
import ScrollReveal from './ScrollReveal';

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#0E1B1B] py-20 lg:py-28">
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      >
        <source src="/insight-living-testimonial-bg.MOV" type="video/quicktime" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-[#0E1B1B]/55" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.25em] uppercase text-[#B9D4CF] font-medium mb-4">
              Testimonials
            </p>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              What Families Are <em>Saying</em>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="surface-soft max-w-3xl mx-auto rounded-3xl border border-white/60 px-6 py-10 sm:px-10">
            {/* Quote */}
            <div className="relative min-h-[200px]">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`transition-all duration-500 ${
                    i === active
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4 absolute inset-0'
                  }`}
                >
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <svg key={j} className="w-5 h-5 text-[#B9D4CF]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote
                    className="text-lg sm:text-xl text-[#0E1B1B] leading-relaxed text-center mb-8"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex justify-center">
                    <div className="inline-flex items-center gap-4 text-left">
                      {t.avatarSrc ? (
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-md">
                          <Image
                            src={t.avatarSrc}
                            alt={`${t.name} headshot`}
                            fill
                            sizes="56px"
                            className="object-cover"
                            style={{
                              objectPosition: t.avatarObjectPosition ?? 'center',
                            }}
                          />
                        </div>
                      ) : null}
                      <div>
                        <p className="font-semibold text-[#0E1B1B]">{t.name}</p>
                        <p className="text-sm text-[#2F6E6B]">{t.community}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? 'bg-[#0E3B3A] w-8'
                      : 'bg-[#0E3B3A]/20 hover:bg-[#0E3B3A]/40'
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
