import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    description:
      'We listen first. Tell us about your loved one, your concerns, and what good care looks like to your family. No pressure, no sales pitch.',
  },
  {
    number: '02',
    title: 'Personalized Care Plan',
    description:
      'We build a care plan around your family\'s specific needs, schedule, and preferences. Every plan is different because every family is different.',
  },
  {
    number: '03',
    title: 'Caregiver Matching',
    description:
      'We match your loved one with a caregiver based on personality, interests, and skills. Not just who is available, but who is right.',
  },
  {
    number: '04',
    title: 'Care Begins',
    description:
      'Your caregiver arrives prepared, with the care plan in hand and a genuine interest in building a relationship. We handle the first visit introduction with you.',
  },
  {
    number: '05',
    title: 'Ongoing Communication',
    description:
      'Regular check-ins, care notes after every visit, and a direct line to your care coordinator. You always know how things are going.',
  },
];

export default function HowItWorks({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 80}>
              <Link
                href={`/how-it-works#step-${step.number}`}
                className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E3B3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F1EEE7]"
                aria-label={`Read more about step ${step.number}: ${step.title}`}
              >
                <article className="surface-soft rounded-2xl border border-[#E6E1D3] p-5 h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#0E3B3A]/30 group-hover:shadow-xl group-focus-visible:-translate-y-1 group-focus-visible:border-[#0E3B3A]/30 group-focus-visible:shadow-xl">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0E3B3A] text-white text-sm font-semibold mb-4 transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110">
                    {step.number}
                  </div>
                  <h3
                    className="text-xl font-semibold text-[#0E1B1B] mb-2 transition-colors duration-300 group-hover:text-[#0E3B3A] group-focus-visible:text-[#0E3B3A]"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#2F6E6B] leading-relaxed">
                    {step.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#0E3B3A]">
                    Learn more
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-0">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 100}>
              <div className="flex gap-6 lg:gap-10">
                {/* Number + Line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#0E3B3A] flex items-center justify-center shrink-0">
                    <span className="text-white text-sm font-semibold">
                      {step.number}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-[#E6E1D3] my-2" />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-10 ${i === steps.length - 1 ? 'pb-0' : ''}`}>
                  <h3
                    className="text-xl font-semibold text-[#0E1B1B] mb-2"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#2F6E6B] leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
