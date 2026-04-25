'use client';

import Image from 'next/image';

/** Solid base under the ambient gradient (keeps type readable). */
const LEAD_BG = '#2F6E6B';

const LEAD_VIDEO_SRC = '/quote-bg-1.MOV?v=3';
const LEAD_VIDEO_FALLBACK_SRC = '/quote-bg-2.MOV?v=3';

/**
 * Teal full-width band: large Playfair (serif) quote + sans attribution + small founder headshot.
 * Placed after services on the home page.
 */
export default function HomeLeadIn() {
  return (
    <section
      id="home-lead-in"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: LEAD_BG }}
      aria-labelledby="home-lead-in-eyebrow"
    >
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        aria-hidden="true"
      >
        <source src={LEAD_VIDEO_SRC} />
        <source src={LEAD_VIDEO_FALLBACK_SRC} />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-black/72" aria-hidden />

      <div className="relative z-10 px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <p
          className="text-center text-[0.7rem] font-medium uppercase tracking-[0.28em] text-white/90 sm:text-xs"
          id="home-lead-in-eyebrow"
        >
          From the founder
        </p>

        <blockquote
          className="mx-auto mt-6 max-w-6xl text-center"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          <p className="text-balance text-[1.25rem] font-medium leading-[1.2] text-white sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight lg:text-4xl lg:leading-[1.1] xl:text-[3.35rem] xl:leading-[1.1]">
            <em>
              &ldquo;The best senior care begins at home, before a crisis, before a facility, before a
              family reaches a breaking point. That is why we built Ativo Home Care. Families were
              already trusting us with the next chapter. We wanted to be there for this one too.&rdquo;
            </em>
          </p>
          <footer
            className="mt-6 text-center text-sm font-medium not-italic tracking-wide text-white/90 sm:mt-8 sm:text-base"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Bryan Zeibart<span className="text-white/75">, Founder</span>
          </footer>
        </blockquote>

        <div className="mt-6 flex justify-center sm:mt-7">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-white/30 shadow-md shadow-black/20 ring-2 ring-white/15 sm:h-24 sm:w-24">
            <Image
              src="/bryan-zeibart-founder.png"
              alt="Bryan Zeibart, founder of Ativo Home Care"
              fill
              className="object-cover object-top"
              sizes="96px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
