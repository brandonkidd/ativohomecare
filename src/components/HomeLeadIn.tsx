import Image from 'next/image';

/** Solid base under the ambient gradient (keeps type readable). */
const LEAD_BG = '#2F6E6B';

/**
 * Same three radial “site” layers as `body` in globals.css, plus the subtle
 * `body::before` speculars — no diagonal mesh PNG.
 */
const LEAD_BACKDROP_LAYERS = [
  'radial-gradient(55rem 38rem at 12% 8%, rgba(185, 212, 207, 0.5), rgba(185, 212, 207, 0) 65%)',
  'radial-gradient(68rem 40rem at 76% 14%, rgba(47, 110, 107, 0.4), rgba(47, 110, 107, 0) 72%)',
  'radial-gradient(72rem 44rem at 58% 68%, rgba(14, 59, 58, 0.3), rgba(14, 59, 58, 0) 74%)',
  'radial-gradient(circle at 20% 18%, rgba(255, 255, 255, 0.2), transparent 36%)',
  'radial-gradient(circle at 80% 72%, rgba(255, 255, 255, 0.1), transparent 35%)',
].join(', ');

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
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: LEAD_BACKDROP_LAYERS }}
        aria-hidden
      />

      <div className="relative z-10 px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <p
          className="text-center text-[0.7rem] font-medium uppercase tracking-[0.28em] text-white/90 sm:text-xs"
          id="home-lead-in-eyebrow"
        >
          From the founder
        </p>

        <blockquote
          className="mx-auto mt-6 max-w-5xl text-center"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          <p className="text-[1.25rem] font-medium leading-[1.2] text-white sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight lg:text-4xl lg:leading-[1.1] xl:text-5xl xl:leading-[1.08]">
            <em>
              &ldquo;We built Ativo because families deserve better than a clipboard and a stranger. Your
              parent deserves someone who knows their name, their routine, and their story.&rdquo;
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
