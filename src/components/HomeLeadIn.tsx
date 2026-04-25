'use client';

import { useRef } from 'react';
import Image from 'next/image';

/** Solid base under the ambient gradient (keeps type readable). */
const LEAD_BG = '#2F6E6B';

const LEAD_VIDEO_SRC = '/videos/founder-bg.mp4';
const LEAD_VIDEO_POSTER = '/ativo-founder-gradient.png';
const LEAD_VIDEO_LOOP_SECONDS = 4;

/**
 * Teal full-width band: large Playfair (serif) quote + sans attribution + small founder headshot.
 * Placed after services on the home page.
 */
export default function HomeLeadIn() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.currentTime >= LEAD_VIDEO_LOOP_SECONDS) {
      video.currentTime = 0;
      void video.play();
    }
  };

  return (
    <section
      id="home-lead-in"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: LEAD_BG }}
      aria-labelledby="home-lead-in-eyebrow"
    >
      <video
        ref={videoRef}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        loop={false}
        preload="metadata"
        poster={LEAD_VIDEO_POSTER}
        onTimeUpdate={handleTimeUpdate}
        aria-hidden="true"
      >
        <source src={LEAD_VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-black/52" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black/60" aria-hidden />

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
