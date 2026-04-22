import Link from 'next/link';
import Hero from '@/components/Hero';
import ProofBar from '@/components/ProofBar';
import ServiceCard from '@/components/ServiceCard';
import HowItWorks from '@/components/HowItWorks';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import CTASection from '@/components/CTASection';
import CheckItem from '@/components/CheckItem';
import ScrollReveal from '@/components/ScrollReveal';
import AreaServiceMap from '@/components/AreaServiceMap';
import HomeFAQList, { type HomeFaqItem } from '@/components/HomeFAQList';
import { services } from '@/lib/services';

const homeFaqs: HomeFaqItem[] = [
  {
    question: 'How quickly can care start?',
    answer:
      'For most situations, we can begin care within 3 to 5 days of your initial consultation. Emergency and urgent situations can often be accommodated within 24 to 48 hours. The timeline depends on caregiver matching and care plan complexity, but we move fast because we know families usually call when they need help now, not next month.',
  },
  {
    question: 'Do you require long-term contracts?',
    answer:
      'No. We never require long-term contracts. Care continues as long as your family needs it and stops when you say so. We believe that if we are doing a good job, you will stay because you want to, not because a contract says you have to. Most of our client relationships last years, by choice.',
  },
  {
    question: 'How do you match caregivers to clients?',
    answer:
      'We match based on personality, interests, energy level, skills, and schedule compatibility. During your consultation, we learn about your loved one as a person, not just a patient. Then we select a caregiver who genuinely fits. If the match is not right, we replace the caregiver immediately at no cost.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve Buckeye, Goodyear, Surprise, Avondale, and surrounding West Valley communities. We have deep relationships with 55+ communities including Sun City Festival, PebbleCreek, Victory at Verrado, Sundance, CantaMia, and Arizona Traditions. If you are unsure whether we cover your area, call us.',
  },
  {
    question: 'Do you accept insurance or Medicare?',
    answer:
      'We are a private pay service, which means no insurance billing, no Medicare paperwork, and no prior authorizations delaying your care. You pay directly for exactly the services you use. This keeps things simple, transparent, and fast. Many families use long-term care insurance to offset costs, and we can help you navigate that process.',
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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />
      <ProofBar />

      {/* Services Section */}
      <section className="bg-[#F1EEE7] py-20 lg:py-28">
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
                Seven Ways We Help Families
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

      {/* Benefits Band */}
      <section className="bg-white py-12 lg:py-14 border-y border-[#E6E1D3]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {benefitBand.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 60}>
                <div className="surface-soft rounded-2xl border border-[#E6E1D3] px-5 py-5 h-full">
                  <div className="w-10 h-10 rounded-full bg-[#0E3B3A]/10 text-[#0E3B3A] flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#0E1B1B] mb-1.5">{item.title}</h3>
                  <p className="text-[#2F6E6B] text-base leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Ativo Difference - Split Layout with Checkmarks */}
      <section className="bg-gradient-to-b from-[#B9D4CF] via-[#D1DFDA] to-[#E6E1D3] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            <ScrollReveal className="lg:col-span-5">
              <div className="surface-soft h-full rounded-3xl border border-[#E6E1D3] p-8 lg:p-10 flex flex-col">
                <p className="text-xs tracking-[0.25em] uppercase text-[#0E3B3A] font-medium mb-6">
                  Why Ativo
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-medium text-[#0E1B1B] mb-5"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  The Ativo <em>Difference</em>
                </h2>
                <p className="text-[#2F6E6B] leading-relaxed mb-6">
                  We are built for families who want more than task-based care.
                  We focus on trust, consistency, and relationships that make
                  each day feel easier at home.
                </p>
                <blockquote
                  className="text-2xl leading-snug text-[#0E3B3A] mt-auto"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  &ldquo;The right caregiver does more than help. They become
                  part of the rhythm of home.&rdquo;
                </blockquote>
              </div>
            </ScrollReveal>

            {/* Right - Content */}
            <ScrollReveal delay={150} className="lg:col-span-7">
              <div className="surface-soft rounded-3xl border border-[#E6E1D3] p-8 lg:p-10 h-full">
                <div className="space-y-6">
                  <CheckItem>
                    <strong className="text-[#0E1B1B]">Connected to Ativo Senior Living.</strong>{' '}
                    We understand the transition between community and home because we are part of
                    both worlds. No other home care agency in the West Valley has this connection.
                  </CheckItem>
                  <CheckItem>
                    <strong className="text-[#0E1B1B]">Private Pay Simplicity.</strong>{' '}
                    No insurance battles, no prior authorizations, no billing surprises. You pay
                    for exactly what you use, and care starts when you need it.
                  </CheckItem>
                  <CheckItem>
                    <strong className="text-[#0E1B1B]">Caregiver Matching.</strong>{' '}
                    We match on personality and interests, not just availability. Your loved one
                    gets someone they actually enjoy spending time with.
                  </CheckItem>
                  <CheckItem>
                    <strong className="text-[#0E1B1B]">No Long-Term Contracts.</strong>{' '}
                    Use our services for a week or for years. Adjust, pause, or stop anytime.
                    We earn your loyalty, we do not lock it in.
                  </CheckItem>
                </div>
                <Link
                  href="/the-ativo-difference"
                  className="inline-flex items-center gap-2 mt-8 text-[#0E3B3A] font-medium hover:gap-3 transition-all"
                >
                  Learn more about our approach
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#F1EEE7] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.25em] uppercase text-[#0E3B3A] font-medium mb-4">
                Getting Started
              </p>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0E1B1B]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Five Simple <em>Steps</em>
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <HowItWorks compact />
          </div>
        </div>
      </section>

      {/* Booking Experience */}
      <section className="bg-[#E6E1D3] py-20 lg:py-24">
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

      {/* Communities We Serve */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.25em] uppercase text-[#0E3B3A] font-medium mb-4">
                Our Neighbors
              </p>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0E1B1B]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Communities We <em>Serve</em>
              </h2>
              <p className="mt-4 text-[#2F6E6B] max-w-xl mx-auto">
                We have deep relationships with the 55+ communities across the
                West Valley. Chances are, we are already serving your neighbors.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <AreaServiceMap />
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="text-center mt-10">
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 text-[#0E3B3A] font-medium hover:gap-3 transition-all"
              >
                View all service areas
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
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
