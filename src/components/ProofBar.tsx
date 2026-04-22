'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const headshots = [
  { src: '/headshot-1.jpg', alt: 'Ativo caregiver headshot 1' },
  { src: '/headshot-2.jpg', alt: 'Ativo caregiver headshot 2' },
  { src: '/headshot-3.jpg', alt: 'Ativo caregiver headshot 3' },
];

export default function ProofBar() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [visibleHeadshots, setVisibleHeadshots] = useState(0);
  const statTargets = {
    families: 500,
    caregivers: 50,
    ratingTenths: 49,
  };
  const animationConfig = {
    families: { durationMs: 1200, delayMs: 0 },
    caregivers: { durationMs: 1050, delayMs: 90 },
    ratingTenths: { durationMs: 900, delayMs: 160 },
  };
  const statStarts = {
    families: 490,
    caregivers: 40,
    ratingTenths: 46,
  };
  const [animatedStats, setAnimatedStats] = useState({
    families: statStarts.families,
    caregivers: statStarts.caregivers,
    ratingTenths: statStarts.ratingTenths,
  });

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasAnimated) return;

    let animationFrameId = 0;
    let lastPaint = 0;
    const maxAnimationMs = Math.max(
      animationConfig.families.delayMs + animationConfig.families.durationMs,
      animationConfig.caregivers.delayMs + animationConfig.caregivers.durationMs,
      animationConfig.ratingTenths.delayMs + animationConfig.ratingTenths.durationMs
    );
    const minFrameGapMs = 1000 / 30;
    const start = performance.now();
    const easeInOutCubic = (p: number) =>
      p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;

    const getStatValue = (
      key: keyof typeof statTargets,
      elapsedMs: number
    ) => {
      const { durationMs, delayMs } = animationConfig[key];
      const localProgress = Math.min(
        Math.max((elapsedMs - delayMs) / durationMs, 0),
        1
      );
      const eased = easeInOutCubic(localProgress);
      const rawValue =
        statStarts[key] + (statTargets[key] - statStarts[key]) * eased;

      return Math.round(rawValue);
    };

    const animate = (now: number) => {
      const elapsedMs = now - start;
      if (now - lastPaint < minFrameGapMs && elapsedMs < maxAnimationMs) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      lastPaint = now;

      setAnimatedStats((prev) => {
        const next = {
          families: getStatValue('families', elapsedMs),
          caregivers: getStatValue('caregivers', elapsedMs),
          ratingTenths: getStatValue('ratingTenths', elapsedMs),
        };

        if (
          prev.families === next.families &&
          prev.caregivers === next.caregivers &&
          prev.ratingTenths === next.ratingTenths
        ) {
          return prev;
        }

        return next;
      });

      if (elapsedMs < maxAnimationMs) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      setAnimatedStats(statTargets);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    setVisibleHeadshots(1);
    const timers = [1, 2].map((idx) =>
      window.setTimeout(() => setVisibleHeadshots(idx + 1), idx * 180)
    );

    return () => timers.forEach((timerId) => window.clearTimeout(timerId));
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="bg-[#F1EEE7] py-6 lg:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-7 text-[#0E3B3A]">
            <div className="relative -top-12 sm:-top-14 lg:-top-16 mb-[-2.75rem] sm:mb-[-3.25rem] lg:mb-[-3.5rem] flex -space-x-7 sm:-space-x-9 shrink-0 lg:-ml-10">
            {headshots.map((h, i) => (
              <div
                key={i}
                className={`relative h-[7.875rem] w-[7.875rem] sm:h-[158px] sm:w-[158px] rounded-full overflow-hidden border-4 border-white shadow-md transition-all duration-500 ${
                  i < visibleHeadshots
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-2 scale-95'
                }`}
                style={{ zIndex: i + 1 }}
              >
                  <Image
                    src={h.src}
                    alt={h.alt}
                    fill
                    sizes="140px"
                  className="object-cover object-center scale-140"
                />
              </div>
            ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center lg:flex-nowrap">
              <div className="inline-flex items-center gap-3">
                <span
                  className="inline-block min-w-[5ch] text-right text-3xl sm:text-4xl font-medium leading-none tabular-nums"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {animatedStats.families}+
                </span>
                <span className="text-lg sm:text-xl text-[#0E3B3A] whitespace-nowrap">Families Served</span>
              </div>
              <span className="text-[#0E3B3A]/50" aria-hidden>•</span>
              <div className="inline-flex items-center gap-3">
                <span
                  className="inline-block min-w-[4ch] text-right text-3xl sm:text-4xl font-medium leading-none tabular-nums"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {animatedStats.caregivers}+
                </span>
                <span className="text-lg sm:text-xl text-[#0E3B3A] whitespace-nowrap">Expert Caregivers</span>
              </div>
              <span className="hidden sm:inline text-[#0E3B3A]/50" aria-hidden>•</span>
              <div className="inline-flex items-center gap-3">
                <span
                  className="inline-block min-w-[3.5ch] text-right text-2xl sm:text-3xl font-medium leading-none tabular-nums"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {(animatedStats.ratingTenths / 10).toFixed(1)}
                </span>
                <span className="text-lg sm:text-xl text-[#0E3B3A] whitespace-nowrap">Family Rating</span>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
