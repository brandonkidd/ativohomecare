import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[82vh] lg:min-h-[86vh] flex items-center overflow-hidden">
      <Image
        src="/hero-home-preferred-highres.jpg"
        alt="Ativo caregiver sharing a warm moment with a senior client in a sunlit garden"
        fill
        priority
        sizes="100vw"
        quality={100}
        className="object-cover object-[72%_center]"
      />

      {/* Gradient overlay — heavier on the left so text stays legible */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="px-5 sm:px-6 lg:px-12 xl:px-16 pt-28 pb-24 lg:pb-28">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-8 animate-fade-in-up">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur-md border border-white/20">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </span>
              <span className="text-white/90 text-sm font-medium tracking-wide leading-tight">
                Senior Home Care in Buckeye, Goodyear,
                <br />
                Surprise, and the West Valley
              </span>
            </div>

            {/* Visual headline */}
            <h2
              data-home-care-anchor
              className="text-5xl sm:text-6xl lg:text-7xl text-white font-medium leading-[1.04] mb-5 animate-fade-in-up animation-delay-100"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              <span className="not-italic">Your Parent Deserves to Stay Home.</span>
              <br />
              <em className="text-[#B9D4CF]">We Make It Safe.</em>
            </h2>

            {/* Subheadline */}
            <p className="text-white/85 text-base sm:text-lg max-w-xl mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
              Ativo Home Care provides professional, private-pay companion and personal care services
              across Arizona. Backed by the same team behind Ativo Senior Living communities, so when
              needs change, your family already has a partner for the next step.
            </p>

            {/* CTA — pill with dark square arrow */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 animate-fade-in-up animation-delay-300">
              <Link
                href="/contact"
                className="group inline-flex w-full sm:w-auto items-center justify-between sm:justify-start gap-3 sm:gap-4 rounded-full bg-white pl-5 sm:pl-6 pr-2 py-2 text-[#0E1B1B] font-medium text-[1.02rem] sm:text-base shadow-xl shadow-black/20 hover:bg-[#2F6E6B] hover:text-white active:bg-[#2F6E6B] active:text-white transition-all"
              >
                <span>Schedule a Free Consultation</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0E3B3A] text-white transition-transform group-hover:translate-x-0.5 group-hover:bg-white group-hover:text-[#0E1B1B] group-active:bg-white group-active:text-[#0E1B1B]">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </Link>
              <a
                href="tel:+17143074911"
                className="text-white/80 hover:text-white text-[1.02rem] sm:text-base transition-colors"
              >
                Call 714-307-4911 →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust points */}
      <div className="pointer-events-none absolute inset-x-0 bottom-14 z-10 px-5 sm:bottom-16 sm:px-6 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 sm:gap-4">
          {[
            'Private Pay, No Insurance Hassle',
            'Background-Checked Caregivers',
            'No Long-Term Contracts',
            'Connected to Ativo Senior Living',
          ].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 px-1 py-1 text-xs font-medium text-white/95 sm:text-sm"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 border border-white/20">
                <svg
                  className="h-3.5 w-3.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75 10.5 18l9-12" />
                </svg>
              </span>
              {item}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
