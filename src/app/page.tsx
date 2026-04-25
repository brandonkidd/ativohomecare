import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import ProofBar from '@/components/ProofBar';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import HomeLeadIn from '@/components/HomeLeadIn';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';
import HomeFAQList, { type HomeFaqItem } from '@/components/HomeFAQList';
import { services } from '@/lib/services';

const homeFaqs: HomeFaqItem[] = [
  {
    question: 'How quickly can care start?',
    answer:
      "In most cases, we can have a caregiver in the home within 48 to 72 hours of your initial consultation. Because Ativo is 100% private pay, there are no insurance authorizations or prior approvals to wait on. We start by understanding your loved one's needs, matching them with a caregiver, and scheduling an introduction visit before care begins.",
  },
  {
    question: 'How much does in-home care cost in Arizona?',
    answer:
      "In-home care costs in Arizona typically range from $29 to $36 per hour depending on location, service level, and hours needed. As a reference point, 20 hours per week of in-home care at the statewide median rate costs roughly $2,640 to $2,880 per month. That is significantly less than the Arizona median for assisted living ($5,500 per month) or a nursing home ($6,540 per month). Ativo provides transparent, all-inclusive pricing with no hidden fees. Contact us for a personalized quote based on your family's specific needs and location.",
  },
  {
    question: 'Is in-home care cheaper than assisted living in Arizona?',
    answer:
      "For part-time care needs, yes. If your loved one needs fewer than 30 to 35 hours of care per week, in-home care is almost always less expensive than assisted living. At the Arizona median home care rate of approximately $33 per hour, 20 hours per week costs roughly $2,640 per month, compared to $5,500 per month for assisted living or $6,540 for a nursing home. However, if your loved one requires 24/7 supervision, a facility may be more cost-effective. The right choice depends on the level of care needed and your family's priorities around independence, comfort, and routine.",
  },
  {
    question: 'Do you accept insurance or Medicare?',
    answer:
      "Ativo Home Care is 100% private pay. We do not bill insurance companies or Medicare directly. This means care starts when you need it, not when an insurance company approves it, and you choose the hours, schedule, and services without restrictions. If your family has long-term care insurance (LTC), we assist with the claims paperwork so you can maximize your benefits and receive reimbursement directly from your insurer.",
  },
  {
    question: 'How do you match caregivers to clients?',
    answer:
      "We go beyond availability and credentials. During the intake process, we assess personality traits, communication style, interests, energy level, and scheduling preferences for both the client and the caregiver. Your loved one meets the caregiver before care begins in a low-pressure introduction with family present. If the match does not feel right for any reason, we replace the caregiver immediately at no cost. We maintain a small, dedicated team for each client so your loved one always sees a familiar face.",
  },
  {
    question: 'Are your caregivers background checked and insured?',
    answer:
      'Yes. Every Ativo caregiver undergoes a comprehensive background check, reference verification, and skills assessment before being placed with a client. All caregivers are bonded and insured through Ativo, which means your family carries no liability. Arizona does not require state licensing for non-medical home care agencies, which makes it especially important to choose a provider with rigorous screening standards. We maintain the same hiring and training standards used across Ativo Senior Living communities.',
  },
  {
    question: 'What makes Ativo different from other home care agencies?',
    answer:
      'Ativo Home Care is the only home care agency in its markets that is built into a senior living network. While other agencies provide caregivers and stop there, Ativo is connected to Ativo Senior Living communities across the western United States. This means our caregivers are trained to the same standards as community care teams, your family gets access to detailed visit tracking and a family portal with weekly updates, and if your loved one eventually needs a higher level of care, everything transfers. Care notes, routines, preferences, and medication history all carry forward. No starting over.',
  },
  {
    question: "What happens if my parent's needs change over time?",
    answer:
      "Care plans are designed to evolve. If your loved one needs more hours, different services, or a higher level of support, we adjust the plan with a simple conversation. Unlike standalone home care agencies, Ativo is part of the Ativo Senior Living network. If the day comes when in-home care is no longer enough, your family already has a relationship with the team that will help navigate the transition to a community setting. Care notes, routines, preferences, and medication history all transfer directly. No starting over, no explaining your parent's story to a new team for the third time.",
  },
];

const benefitBand = [
  {
    title: 'Same-week starts',
    description: 'Care can typically begin within 3-5 days.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V8.25a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 8.25v10.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75ZM3 10.5h18" />
      </svg>
    ),
  },
  {
    title: 'No long-term contracts',
    description: 'Use care for a week, a season, or years.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 6 6m0-6-6 6M3.75 12a8.25 8.25 0 1 0 16.5 0 8.25 8.25 0 0 0-16.5 0Z" />
      </svg>
    ),
  },
  {
    title: 'Personality-based matching',
    description: 'Caregivers are chosen for fit, not just availability.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: 'Local West Valley team',
    description: 'We serve communities we know by name.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.592 0L21.75 12M4.5 9.75V19.5A1.5 1.5 0 0 0 6 21h3.75v-5.25A1.5 1.5 0 0 1 11.25 14.25h1.5a1.5 1.5 0 0 1 1.5 1.5V21H18a1.5 1.5 0 0 0 1.5-1.5V9.75" />
      </svg>
    ),
  },
];

const marketCards = [
  {
    name: 'Prescott Valley',
    cities: 'Prescott Valley, Prescott, Chino Valley, Dewey-Humboldt',
  },
  {
    name: 'Buckeye',
    cities: 'Buckeye, Goodyear, Surprise, Sun City West, Peoria',
  },
  {
    name: 'Yuma',
    cities: 'Yuma, Fortuna Foothills, San Luis, Somerton',
  },
  {
    name: 'Lake Havasu City',
    cities: 'Lake Havasu City, Bullhead City, Fort Mohave, Kingman',
  },
];

const careCostCards = [
  {
    label: 'Nursing Home',
    price: '$6,540',
    context: 'per month (Arizona median)',
    detail: 'Semi-private room. Shared spaces. Clinical environment. Limited independence.',
    featured: false,
  },
  {
    label: 'Assisted Living',
    price: '$5,500',
    context: 'per month (Arizona median)',
    detail: 'Private unit. Community setting. Shared caregivers across many residents.',
    featured: false,
  },
  {
    label: 'In-Home Care',
    price: '$2,640',
    context: 'per month (20 hrs/week)',
    detail: "Your parent's own home. A dedicated caregiver. Their routine, their comfort, their life.",
    featured: true,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />
      <ProofBar />

      {/* The Ativo Difference */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
            <ScrollReveal className="lg:col-span-7">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#0E3B3A]">
                The Ativo Difference
              </p>
              <h2
                className="text-4xl font-medium leading-[1.08] text-[#0E1B1B] sm:text-5xl"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                The Only Home Care Agency Backed by a Senior Living Community in Your Neighborhood
              </h2>

              <div className="mt-7 space-y-5 text-lg leading-relaxed text-[#2F6E6B]">
                <p>
                  When you join Ativo Home Care, your family gets immediate access to our Care
                  Concierge&trade; platform, with weekly updates, visit tracking, medication and diet
                  monitoring, and a family portal that keeps you informed without having to chase
                  anyone down. You always know how your parent is doing.
                </p>
                <p>
                  Behind that platform is a team trained to the same standards as the care teams
                  inside Ativo Senior Living communities in Prescott Valley, Buckeye, Yuma, and across
                  the western United States. This is not a staffing agency. It is a complete care
                  system.
                </p>
                <p>
                  And if the day comes when your loved one needs more than in-home support,
                  everything transfers. Care notes, routines, preferences, relationships. Your family
                  already knows the team that will care for them next.
                </p>
                <p>
                  No starting over. No scrambling. One call, and we help you navigate the transition
                  together.
                </p>
              </div>

              <Link
                href="/the-ativo-difference"
                className="mt-8 inline-flex items-center gap-2 text-[#0E3B3A] font-semibold transition-all hover:gap-3 hover:text-[#2F6E6B]"
              >
                Learn More About Our Approach
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={120} className="lg:col-span-5">
              <div className="relative mx-auto h-full min-h-[34rem] w-full max-w-md lg:ml-auto">
                <div className="absolute -bottom-4 -left-4 h-[74%] w-[74%] rounded-md bg-[#0E3B3A]" aria-hidden />
                <div className="surface-soft relative h-full w-full overflow-hidden rounded-md border border-[#E6E1D3]">
                  <Image
                    src="/senior-home-care-buckeye.png"
                    alt="Senior client in Buckeye receiving compassionate home care support"
                    fill
                    unoptimized
                    quality={100}
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 34vw"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How: services grid */}
      <section
        id="home-services"
        data-home-services-section
        className="bg-[#F1EEE7] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.25em] uppercase text-[#0E3B3A] font-medium mb-4">
                Our Services
              </p>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0E1B1B]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Six Ways We Help Families
                <br />
                Stay <em>Together</em>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 80}>
                <ServiceCard
                  slug={service.slug}
                  icon={service.icon}
                  title={service.title}
                  description={service.shortDescription}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder message (archived “why” copy: @/lib/archivedHomeWhyBandCopy) */}
      <ScrollReveal>
        <HomeLeadIn />
      </ScrollReveal>

      {/* Cost & clarity band — archived copy: @/lib/archivedHomeCostHurdleCopy */}

      {/* What to expect (quick proof points) */}
      <section
        className="bg-white py-16 lg:py-20 border-y border-[#E6E1D3]"
        aria-labelledby="home-what-to-expect"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <ScrollReveal className="lg:col-span-4">
              <p className="text-xs tracking-[0.25em] uppercase text-[#0E3B3A] font-medium mb-4">
                What to expect
              </p>
              <h2
                id="home-what-to-expect"
                className="text-3xl sm:text-4xl font-medium text-[#0E1B1B] leading-[1.08] mb-4"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                A few things families <em>feel</em> right away
              </h2>
              <p className="text-[#2F6E6B] leading-relaxed">
                This is the quick version of how we operate: fast setup, a local team, the right
                match, and flexibility that fits real life. If you want the full story, it lives in
                our approach.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 text-[#0E3B3A] font-medium hover:gap-3 transition-all"
                >
                  See how it works
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <span className="hidden sm:block h-4 w-px bg-[#D9D4C8]" aria-hidden />
                <Link
                  href="/the-ativo-difference"
                  className="inline-flex items-center gap-2 text-[#2F6E6B] font-medium hover:text-[#0E3B3A] transition-colors"
                >
                  Why we are different
                </Link>
              </div>
            </ScrollReveal>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {benefitBand.map((item, i) => (
                  <ScrollReveal key={item.title} delay={i * 60}>
                    <div className="group h-full rounded-2xl border border-[#E6E1D3] bg-white p-5 sm:p-6 shadow-[0_10px_30px_-24px_rgba(0,29,31,0.55)] transition-shadow duration-300 hover:shadow-[0_18px_44px_-30px_rgba(0,29,31,0.35)]">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-11 h-11 rounded-full bg-[#E6E1D3] text-[#0E3B3A] flex items-center justify-center ring-1 ring-black/5">
                          {item.icon}
                        </div>
                        <div>
                          <h3
                            className="text-lg sm:text-xl font-medium text-[#0E1B1B] mb-1.5"
                            style={{ fontFamily: 'var(--font-serif)' }}
                          >
                            {item.title}
                          </h3>
                          <p className="text-[#2F6E6B] text-sm sm:text-base leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Experience — solid field so the phone (screen has its own gradient) isn’t on the same mesh as “Why Ativo” */}
      <section className="bg-[#F1EEE7] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <ScrollReveal>
              <div className="mx-auto">
                <div className="surface-soft mx-auto w-fit rounded-[2.5rem] border border-white/70 p-4">
                  <div className="relative w-[270px] sm:w-[300px] lg:w-[330px] aspect-[9/17] rounded-[2.2rem] bg-[#0E1B1B] border-4 border-[#0E1B1B] shadow-2xl shadow-black/30 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 rounded-b-2xl bg-black/85" />
                    <div className="absolute inset-[0.45rem] rounded-[1.8rem] bg-gradient-to-b from-[#B9D4CF] to-[#E6E1D3] flex flex-col items-center justify-center px-6 text-center">
                      <svg className="w-12 h-12 text-[#0E3B3A] mb-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5 19.5 6.75m0 0L15.75 3m3.75 3.75H9.75M8.25 13.5l-3.75 3.75m0 0L8.25 21m-3.75-3.75h9.75" />
                      </svg>
                      <p
                        className="text-xl font-medium text-[#0E1B1B] mb-2"
                        style={{ fontFamily: 'var(--font-serif)' }}
                      >
                        App Screen Video
                      </p>
                      <p className="text-sm text-[#2F6E6B] leading-relaxed">
                        Placeholder for upcoming phone app walkthrough.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="max-w-xl">
                <p className="text-xs tracking-[0.25em] uppercase text-[#0E3B3A] font-medium mb-4">
                  Getting Started
                </p>
                <h2
                  className="text-4xl sm:text-5xl font-medium text-[#0E1B1B] mb-6 leading-[1.05]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  How to Begin Care
                  <br />
                  With <em>Confidence</em>
                </h2>
                <p className="text-[#2F6E6B] text-lg leading-relaxed mb-8">
                  From your first consultation to a matched caregiver, we guide
                  each step clearly so your family always knows what comes next.
                  No confusion, no pressure, just a thoughtful plan.
                </p>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0E3B3A] hover:bg-[#2F6E6B] px-8 py-4 text-white font-medium transition-all duration-300"
                >
                  See How It Works
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Serving communities across Arizona */}
      <section className="bg-white py-16 lg:py-20 border-y border-[#E6E1D3]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 text-center lg:mb-12">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#0E3B3A]">
                Serving Communities Across Arizona
              </p>
              <h2
                className="text-4xl font-medium text-[#0E1B1B] sm:text-5xl"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Find Care Near You
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-[#2F6E6B]">
                We serve four Arizona markets, each connected to an Ativo Senior Living community.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {marketCards.map((market, i) => (
              <ScrollReveal key={market.name} delay={i * 70}>
                <div className="h-full rounded-2xl border border-[#E6E1D3] bg-[#ECE7DF] p-5 sm:p-6">
                  <h3
                    className="text-[1.7rem] font-medium leading-tight text-[#0E1B1B]"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {market.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#2F6E6B]">{market.cities}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section className="relative overflow-hidden py-20 lg:py-24">
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        >
          <source src="/quote-bg-2.MOV?v=3" />
          <source src="/quote-bg-1.MOV?v=3" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-black/72" aria-hidden />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-8">
          <ScrollReveal>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-white/85">
              What families say
            </p>
            <blockquote
              className="mx-auto max-w-4xl text-[2rem] leading-[1.25] text-white sm:text-[2.2rem] lg:text-[2.45rem]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              <em>
                &ldquo;The caregivers from Ativo have become like family to my mother. They know her
                routines, her favorites, and they genuinely care. I finally stopped worrying at
                2am.&rdquo;
              </em>
            </blockquote>
            <p className="mt-8 text-sm font-medium text-white/85 sm:text-base">Sarah M., Prescott Valley, AZ</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Cost comparison */}
      <section className="bg-[#0E1B1B] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#B9D4CF]">
              The cost of care in Arizona
            </p>
            <h2
              className="max-w-5xl text-4xl font-medium leading-[1.1] text-white sm:text-5xl"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              In-Home Care Costs a Fraction of the Alternative
            </h2>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-white/78">
              Most families assume in-home care is out of reach. The reality: part-time home care in
              Arizona costs significantly less than a nursing home or assisted living facility, and
              your loved one gets to stay where they are most comfortable.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {careCostCards.map((card, i) => (
              <ScrollReveal key={card.label} delay={i * 70}>
                <article
                  className={`relative h-full rounded-2xl border p-7 ${
                    card.featured
                      ? 'border-[#B9D4CF]/55 bg-[#2F6E6B] text-white'
                      : 'border-[#2F6E6B]/18 bg-[#0E3B3A]/45 text-white'
                  }`}
                >
                  {card.featured ? (
                    <span className="absolute -top-3 right-5 rounded-full border border-[#D9CC8B] bg-[#D9CC8B] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#0E1B1B]">
                      Ativo
                    </span>
                  ) : null}

                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/80">
                    {card.label}
                  </p>
                  <p className="mt-5 text-5xl font-medium leading-none" style={{ fontFamily: 'var(--font-serif)' }}>
                    {card.price}
                  </p>
                  <p className="mt-2 text-sm text-white/80">{card.context}</p>
                  <p className="mt-6 text-sm leading-relaxed text-white/78">{card.detail}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={180}>
            <p className="mx-auto mt-10 max-w-5xl text-center text-xs leading-relaxed text-white/55">
              Nursing home and assisted living costs based on 2024 Genworth/CareScout Cost of Care
              Survey, Arizona medians. In-home care estimate based on $33/hour Arizona rate at 20
              hours per week. Actual rates vary by service level, location, and hours. Contact Ativo
              for a personalized quote.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <TestimonialCarousel />

      {/* FAQ */}
      <section id="faq" className="bg-[#F1EEE7] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <p className="text-xs tracking-[0.25em] uppercase text-[#0E3B3A] font-medium mb-4 text-center">
                FAQ
              </p>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0E1B1B] text-center mb-5"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Questions Families <em>Ask</em>
              </h2>
              <p className="text-[#2F6E6B] leading-relaxed text-center mb-14 max-w-2xl mx-auto">
                We hear these questions every week. If yours is not here, call
                us. We would rather spend 10 minutes on the phone than leave
                you guessing.
              </p>

              <HomeFAQList items={homeFaqs} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
