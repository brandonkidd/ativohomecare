import Link from 'next/link';
import { createMetadata } from '@/lib/metadata';
import CTASection from '@/components/CTASection';
import CheckItem from '@/components/CheckItem';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = createMetadata({
  title: 'The Ativo Difference | What Sets Us Apart',
  description:
    'Connected to senior living, private pay simplicity, personality-based caregiver matching, and no long-term contracts. Discover what makes Ativo Home Care different.',
  path: '/the-ativo-difference',
});

const differentiators = [
  {
    title: 'Connected to Ativo Senior Living',
    description:
      'This is the single biggest thing that separates us from every other home care agency in the West Valley. Ativo Home Care is built into the Ativo Senior Living network, which means we understand the full continuum of care, from fully independent living to the moment someone needs more support at home.',
    details: [
      'We already know the communities your loved one lives in because we serve them directly',
      'When a senior living resident needs in-home support, the transition is seamless because we are already part of the ecosystem',
      'Our caregivers understand the culture, routines, and resources available in 55+ communities',
      'If your loved one eventually needs a higher level of care, we can help navigate that transition with honesty and without the hard sell',
    ],
  },
  {
    title: 'Private Pay Simplicity',
    description:
      'Insurance-based home care sounds appealing until you experience it. Prior authorizations that take weeks. Limited approved hours that do not match your actual needs. Reimbursement denials that leave you scrambling. We skip all of that.',
    details: [
      'Care starts when you need it, not when an insurance company approves it',
      'You choose the hours, the schedule, and the services without anyone telling you what is "medically necessary"',
      'Transparent pricing with no hidden fees, no billing codes, and no surprise invoices',
      'Many families use long-term care insurance to offset costs, and we help with the paperwork',
    ],
  },
  {
    title: 'Caregiver Matching',
    description:
      'Most agencies send whoever is available. We send someone your loved one will actually enjoy spending time with. The difference between a tolerated caregiver and a beloved one is enormous, and it starts with how the match is made.',
    details: [
      'We assess personality traits, communication style, interests, and energy level during our intake process',
      'Your loved one meets the caregiver before care begins, with you present, in a low-pressure introduction',
      'If the match does not feel right, for any reason, we replace the caregiver immediately at no cost',
      'We maintain a small, dedicated team for each client so your loved one always sees a familiar face',
    ],
  },
  {
    title: 'No Long-Term Contracts',
    description:
      'We do not believe in locking families into agreements when their lives are already uncertain enough. Our relationship with you continues because the care is good, not because a contract says it has to.',
    details: [
      'Start, pause, adjust, or stop care at any time with a simple phone call',
      'No cancellation fees, no minimum commitment periods, no penalties for changing your mind',
      'Most of our client relationships last years because families choose to stay, not because they are obligated to',
      'We earn your trust every single visit, and that is how it should be',
    ],
  },
];

const heroVideoMp4 = '/videos/ativo-difference-hero.mp4';
const heroVideoWebm = '/videos/ativo-difference-hero.webm';
const heroPoster = '/videos/ativo-difference-hero-poster.jpg';

export default function AtivoDifferencePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[78vh] sm:min-h-[82vh] flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroPoster}
          aria-hidden="true"
        >
          <source src={heroVideoWebm} type="video/webm" />
          <source src={heroVideoMp4} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/42" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/30 to-black/55" />

        <div className="relative z-10 w-full px-6 lg:px-8 pt-28 pb-16 text-center">
          <ScrollReveal>
            <div className="mx-auto max-w-5xl">
              <p className="text-white/90 text-xs sm:text-sm tracking-[0.35em] uppercase font-medium mb-6">
                WHY ATIVO
              </p>
              <h1
                className="text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.03] font-medium"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Not All Home Care
                <br />
                Is <em>Created Equal</em>
              </h1>
              <p className="mt-8 mx-auto max-w-3xl text-white/85 text-xl sm:text-2xl leading-relaxed mb-8">
                Every agency says they provide compassionate, personalized care.
                We actually do, and here is specifically how. Four concrete
                differences that families notice from the very first call.
              </p>

              <div className="flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#0E3B3A] hover:bg-[#2F6E6B] px-12 py-4 text-white font-semibold text-lg transition-colors"
                >
                  Schedule a Consultation
                </Link>
              </div>
              <p className="mt-5 text-white/90 text-sm sm:text-base">
                Or call{' '}
                <a
                  href="tel:+17143074911"
                  className="font-semibold underline underline-offset-4 hover:text-white"
                >
                  714-307-4911
                </a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* At-a-glance cards */}
      <section className="py-20 bg-[#F1EEE7]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {differentiators.map((diff, i) => (
              <ScrollReveal key={diff.title} delay={i * 80}>
                <article className="surface-soft h-full rounded-2xl border border-[#E6E1D3] p-7 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <p
                      className="text-xl sm:text-2xl font-medium text-[#0E1B1B]"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {diff.title}
                    </p>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0E3B3A] text-white text-sm font-semibold">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-[#2F6E6B] leading-relaxed">
                    {diff.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deep-dive timeline */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <h2
              className="text-3xl sm:text-4xl font-medium text-[#0E1B1B] mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              What This Means
              <em> for Your Family</em>
            </h2>
            <p className="text-[#2F6E6B] mb-12 max-w-2xl">
              A quick headline can sound good. Here is what each difference
              actually changes in day-to-day care, communication, and peace of
              mind.
            </p>
          </ScrollReveal>

          <div className="space-y-12 sm:space-y-14">
            {differentiators.map((diff, i) => (
              <ScrollReveal key={diff.title} delay={100 + i * 60}>
                <article className="relative">
                  <span
                    className="pointer-events-none absolute left-0 top-0 z-20 -translate-x-[122%] -translate-y-[24%] whitespace-nowrap [writing-mode:horizontal-tb] rotate-0 text-[7.25rem] font-medium leading-[0.7] text-[#0E3B3A] sm:text-[9rem] lg:text-[10.5rem] tabular-nums"
                    style={{ fontFamily: 'var(--font-serif)' }}
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <div className="surface-soft relative z-10 rounded-2xl border border-[#E6E1D3]/80 p-6 sm:p-8">
                    <h3
                      className="text-2xl font-medium text-[#0E1B1B] mb-4"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {diff.title}
                    </h3>
                    <div className="space-y-4">
                      {diff.details.map((detail, j) => (
                        <CheckItem key={j} size="sm" variant="bullet">
                          {detail}
                        </CheckItem>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
