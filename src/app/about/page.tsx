import { createMetadata } from '@/lib/metadata';
import CTASection from '@/components/CTASection';
import CheckItem from '@/components/CheckItem';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = createMetadata({
  title: 'About Us | Ativo Home Care',
  description:
    'Ativo Home Care was founded on a simple observation: most home care agencies treat seniors like patients. We treat them like people. Serving Buckeye, Goodyear, Surprise, and the West Valley.',
  path: '/about',
});

const values = [
  {
    title: 'Dignity First',
    description:
      'Every interaction preserves the autonomy, preferences, and self-respect of the person receiving care. We support independence, we do not replace it.',
  },
  {
    title: 'Radical Transparency',
    description:
      'No hidden fees, no vague answers, no corporate double-speak. You know exactly what care costs, what it includes, and how your loved one is doing.',
  },
  {
    title: 'Relationships Over Transactions',
    description:
      'We do not sell hours. We build relationships between caregivers and clients that make both lives better. The care plan is important, but the human connection is everything.',
  },
  {
    title: 'Continuous Improvement',
    description:
      'We review every care plan regularly, seek feedback proactively, and train our team constantly. Good enough is never good enough.',
  },
];

const team = [
  {
    name: 'Coming Soon',
    role: 'Executive Director',
    bio: 'Leading Ativo Home Care with a vision for premium, relationship-centered care.',
  },
  {
    name: 'Coming Soon',
    role: 'Director of Care Services',
    bio: 'Overseeing care plan development, caregiver training, and quality assurance.',
  },
  {
    name: 'Coming Soon',
    role: 'Client Relations Manager',
    bio: 'Your first point of contact. Handling consultations, onboarding, and ongoing family communication.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#F1EEE7]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs sm:text-sm tracking-[0.35em] uppercase text-[#0E3B3A] font-medium mb-6">
              About Ativo
            </p>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-medium text-[#0E1B1B] leading-[1.03]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Care That Feels Like <em>Family</em>
            </h1>
            <p className="mt-8 mx-auto max-w-3xl text-xl sm:text-2xl text-[#2F6E6B] leading-relaxed">
              Ativo Home Care was founded on a simple observation: most home
              care agencies treat seniors like patients. We treat them like
              people. The difference shows up in everything we do, from the way
              we match caregivers to the way we answer the phone.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <p className="text-xs tracking-[0.25em] uppercase text-[#0E3B3A] font-medium mb-4">
                Our Story
              </p>
              <h2
                className="text-3xl sm:text-4xl font-medium text-[#0E1B1B] mb-8"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Why We <em>Started</em>
              </h2>
              <div className="space-y-6 text-[#2F6E6B] leading-relaxed text-lg">
                <p>
                  The West Valley is one of the fastest-growing regions in
                  Arizona, and with that growth comes a rapidly expanding
                  senior population. Tens of thousands of retirees have chosen
                  communities like Sun City Festival, PebbleCreek, and Victory
                  at Verrado as their home. They came here for the lifestyle,
                  the weather, and the community.
                </p>
                <p>
                  But as needs change, families face a difficult question: how
                  do we get quality care without uprooting the life our loved
                  one has built here? The answer should not require moving to a
                  facility 30 miles away or settling for an agency that sends a
                  different stranger every week.
                </p>
                <p>
                  Ativo Home Care exists to fill that gap. We are local, we
                  are connected to the senior living communities that define
                  this region, and we are built for families who want more than
                  a warm body in the house. We want the caregiver to feel like
                  the best possible addition to your loved one&apos;s day. Every
                  single day.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#E6E1D3] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.25em] uppercase text-[#0E3B3A] font-medium mb-4">
                What Guides Us
              </p>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0E1B1B]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Our <em>Values</em>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 border border-[#E6E1D3]">
                  <h3
                    className="text-xl font-semibold text-[#0E1B1B] mb-3"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-[#2F6E6B] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#0E1B1B] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs tracking-[0.25em] uppercase text-[#B9D4CF] font-medium mb-4">
                Our Mission
              </p>
              <blockquote
                className="text-2xl sm:text-3xl lg:text-4xl text-white font-medium leading-snug"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                <em>
                  &ldquo;To deliver in-home care that preserves dignity,
                  strengthens families, and makes aging in place feel like the
                  obvious choice.&rdquo;
                </em>
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#F1EEE7] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.25em] uppercase text-[#0E3B3A] font-medium mb-4">
                The People Behind Ativo
              </p>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0E1B1B]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Our <em>Team</em>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <ScrollReveal key={member.role} delay={i * 100}>
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-stone-200 mx-auto mb-4 flex items-center justify-center text-stone-400 text-xs">
                    Headshot
                  </div>
                  <h3
                    className="text-lg font-semibold text-[#0E1B1B]"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#0E3B3A] font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-[#2F6E6B]">{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-[#0E3B3A] font-medium mb-4">
                  Our Caregivers
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-medium text-[#0E1B1B] mb-6"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  What We Look for in <em>Every Hire</em>
                </h2>
                <p className="text-[#2F6E6B] leading-relaxed text-lg mb-8">
                  Skills can be taught. Character cannot. We hire caregivers
                  who have the warmth, patience, and genuine interest in people
                  that this work demands. Then we train them to Ativo standards.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="space-y-5">
                <CheckItem>
                  Background checked, bonded, and insured without exception
                </CheckItem>
                <CheckItem>
                  Trained in safe transfers, fall prevention, and infection control
                </CheckItem>
                <CheckItem>
                  Assessed for communication style, empathy, and reliability
                </CheckItem>
                <CheckItem>
                  Ongoing education in dementia care, first aid, and specialized services
                </CheckItem>
                <CheckItem>
                  Selected for personality fit, not just availability
                </CheckItem>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
