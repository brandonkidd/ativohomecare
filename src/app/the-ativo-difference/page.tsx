import Link from 'next/link';
import { createMetadata } from '@/lib/metadata';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = createMetadata({
  title: 'The Ativo Difference | What Sets Us Apart',
  description:
    'Connected to senior living, private pay simplicity, personality-based caregiver matching, and no long-term contracts. Discover what makes Ativo Home Care different.',
  path: '/the-ativo-difference',
});

const pillars = [
  {
    number: '01',
    title: 'Connected to Ativo Senior Living',
    intro:
      'This is the single biggest thing that separates us from every other home care agency in the West Valley. Ativo Home Care is built into the Ativo Senior Living network, which means we understand the full continuum of care, from fully independent living to the moment someone needs more support at home.',
    expanded: [
      'We already know the communities your loved one lives in because we serve them directly. When a senior living resident needs in-home support, the transition is seamless because we are already part of the ecosystem. Our caregivers understand the culture, routines, and resources available in 55+ communities.',
      'But the connection goes deeper than geography. Your family gets the same systems our communities rely on: detailed visit tracking, medication and diet monitoring, and a family portal that delivers weekly updates so you always know how your parent is doing. You are never left guessing.',
      'And if your loved one eventually needs a higher level of care, everything transfers. Care notes, routines, dietary preferences, medication history, and the relationships your family has built with our team. No starting over. No explaining your parent\'s story to a new team for the third time. One call, and we help navigate that transition with honesty and without the hard sell.',
    ],
  },
  {
    number: '02',
    title: 'Private Pay Simplicity',
    intro:
      'Insurance-based home care sounds appealing until you experience it. Prior authorizations that take weeks. Limited approved hours that do not match your actual needs. Reimbursement denials that leave you scrambling. We skip all of that.',
    expanded: [
      'Care starts when you need it, not when an insurance company approves it. You choose the hours, the schedule, and the services without anyone telling you what is "medically necessary." Transparent pricing with no hidden fees, no billing codes, and no surprise invoices.',
      'Many families use long-term care insurance to offset costs, and we help with the paperwork. But the relationship is between your family and Ativo. We answer to you, not to a claims adjuster.',
    ],
  },
  {
    number: '03',
    title: 'Caregiver Matching',
    intro:
      'Most agencies fill shifts. We build relationships. When we match a caregiver to your family, we consider personality, interests, communication style, and schedule, not just who is available on Tuesday.',
    expanded: [
      'We assess personality traits, communication style, interests, and energy level during our intake process. Your loved one meets the caregiver before care begins, with you present, in a low-pressure introduction.',
      'If the match does not feel right, for any reason, we replace the caregiver immediately at no cost. We maintain a small, dedicated team for each client so your loved one always sees a familiar face. The same caregiver who knows your mom takes her coffee black and likes to walk the garden at 10 AM is the same caregiver who will notice when something feels off. Familiarity is not a luxury. It is a safety net.',
    ],
  },
  {
    number: '04',
    title: 'No Long-Term Contracts',
    intro:
      'Use our services for a week or for years. Adjust, pause, or stop anytime. We earn your loyalty. We do not lock it in.',
    expanded: [
      'Start, pause, adjust, or stop care at any time with a simple phone call. No cancellation fees, no minimum commitment periods, no penalties for changing your mind.',
      'Most of our client relationships last years because families choose to stay, not because they are obligated to. We earn your trust every single visit, and that is how it should be.',
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
              <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.03] font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
                Not All Home Care <em className="text-[#B9D4CF]">Is Created Equal</em>
              </h1>
              <p className="mt-8 mx-auto max-w-4xl text-white/85 text-lg sm:text-xl leading-relaxed mb-8">
                Every agency says they provide compassionate, personalized care. Most of them mean it.
                But meaning it and building systems around it are two different things. Ativo was
                designed from the ground up as an extension of a senior living network, not a staffing
                company with a heart. Here are four concrete differences that families notice from the
                very first call.
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

      {/* The four pillars */}
      <section className="py-20 bg-[#F1EEE7]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="text-xs tracking-[0.25em] uppercase text-[#0E3B3A] font-medium mb-4">
                The Four Pillars
              </p>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0E1B1B]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Why Families <em>Choose Ativo</em>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 80}>
                <article className="surface-soft h-full rounded-2xl border border-[#E6E1D3] p-7 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xl sm:text-2xl font-medium text-[#0E1B1B]" style={{ fontFamily: 'var(--font-serif)' }}>
                      {pillar.title}
                    </p>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0E3B3A] text-white text-sm font-semibold">
                      {pillar.number}
                    </span>
                  </div>
                  <p className="text-[#2F6E6B] leading-relaxed">
                    {pillar.intro}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder quote */}
      <section className="bg-[#0E1B1B] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-xs tracking-[0.25em] uppercase text-[#B9D4CF] font-medium mb-6">
              From the Founder
            </p>
            <blockquote
              className="text-2xl sm:text-3xl lg:text-4xl text-white font-medium leading-[1.3]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              <em>
                &ldquo;The best senior care begins at home, before a crisis, before a facility, before a
                family reaches a breaking point. That is why we built Ativo Home Care. Families were
                already trusting us with the next chapter. We wanted to be there for this one
                too.&rdquo;
              </em>
            </blockquote>
            <p className="mt-7 text-[#B9D4CF] font-medium">Bryan Zeibart, Co-Founder</p>
          </ScrollReveal>
        </div>
      </section>

      {/* What this means for your family */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0E1B1B] mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              What This Means for <em>Your Family</em>
            </h2>
            <p className="text-[#2F6E6B] mb-12 max-w-3xl text-lg leading-relaxed">
              A quick headline can sound good. Here is what each difference actually changes in
              day-to-day care, communication, and peace of mind.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={100 + i * 60}>
                <article className="surface-soft h-full rounded-2xl border border-[#E6E1D3]/80 p-6 sm:p-8">
                  <p className="text-xs tracking-[0.25em] uppercase text-[#0E3B3A] font-medium mb-3">
                    {pillar.number}
                  </p>
                  <h3 className="text-2xl font-medium text-[#0E1B1B] mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                    {pillar.title}
                  </h3>
                  <div className="space-y-4 text-[#2F6E6B] leading-relaxed">
                    {pillar.expanded.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visual comparison */}
      <section className="bg-[#F1EEE7] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <p className="text-xs tracking-[0.25em] uppercase text-[#0E3B3A] font-medium mb-4">
                At a Glance
              </p>
              <h2 className="text-4xl sm:text-5xl font-medium text-[#0E1B1B]" style={{ fontFamily: 'var(--font-serif)' }}>
                Typical Agency vs <em>Ativo</em>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ScrollReveal>
              <div className="rounded-2xl border border-[#D9D4C8] bg-white p-7">
                <h3 className="text-2xl font-medium text-[#0E1B1B] mb-5" style={{ fontFamily: 'var(--font-serif)' }}>
                  Typical Agency
                </h3>
                <ul className="space-y-3 text-[#2F6E6B]">
                  <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0E3B3A]/35" />Stand-alone staffing model</li>
                  <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0E3B3A]/35" />Limited continuity if care needs increase</li>
                  <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0E3B3A]/35" />Shift-first scheduling</li>
                  <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0E3B3A]/35" />Insurance-driven constraints</li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <div className="rounded-2xl border border-[#9FBEA8] bg-[#DCE9DE] p-7">
                <h3 className="text-2xl font-medium text-[#0E1B1B] mb-5" style={{ fontFamily: 'var(--font-serif)' }}>
                  Ativo Difference
                </h3>
                <ul className="space-y-3 text-[#0E3B3A]">
                  <li className="flex items-start gap-3"><span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0E3B3A] text-white text-[0.62rem]">✓</span>Connected senior living ecosystem</li>
                  <li className="flex items-start gap-3"><span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0E3B3A] text-white text-[0.62rem]">✓</span>Transfer-ready continuity of care notes and routines</li>
                  <li className="flex items-start gap-3"><span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0E3B3A] text-white text-[0.62rem]">✓</span>Relationship-based caregiver matching</li>
                  <li className="flex items-start gap-3"><span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0E3B3A] text-white text-[0.62rem]">✓</span>Private-pay simplicity with transparent pricing</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-xs tracking-[0.25em] uppercase text-[#0E3B3A] font-medium mb-6">
              Testimonial
            </p>
            <blockquote
              className="text-2xl sm:text-3xl text-[#0E1B1B] font-medium leading-[1.35]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              <em>
                &ldquo;After my mom&apos;s hip replacement, we were terrified about bringing her home.
                Ativo had a caregiver there the day she was discharged. Within a week, Mom was
                calling her caregiver by name and actually looking forward to her visits. The
                transition from rehab to home was seamless.&rdquo;
              </em>
            </blockquote>
            <p className="mt-7 text-[#2F6E6B] font-medium">Sara K., Sun City Festival</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Promise */}
      <section className="bg-[#0E1B1B] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-xs tracking-[0.25em] uppercase text-[#B9D4CF] font-medium mb-4">
              The Ativo Promise
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white" style={{ fontFamily: 'var(--font-serif)' }}>
              Your Family Deserves More Than a Stranger With a Schedule
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/82 max-w-3xl mx-auto">
              Your parent deserves someone who knows their name, their routine, and their story.
              Someone who shows up consistently, pays attention to the details, and becomes part of
              the rhythm of home. That is what Ativo was built to provide.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/82">
              If we are the right fit for your family, you will feel it from the very first
              conversation.
            </p>

            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-[#0E1B1B] transition-all hover:bg-[#B9D4CF]"
              >
                Schedule a Free Consultation
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a href="tel:+17143074911" className="text-white/90 font-medium hover:text-white">
                Or call 714-307-4911
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
