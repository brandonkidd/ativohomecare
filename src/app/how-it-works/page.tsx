import Link from 'next/link';
import { createMetadata } from '@/lib/metadata';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = createMetadata({
  title: 'How It Works | Getting Started with Ativo Home Care',
  description:
    'Five simple steps from your first call to ongoing care. Free consultation, personalized care plan, caregiver matching, and continuous communication.',
  path: '/how-it-works',
});

const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    description:
      'It starts with a conversation, not a sales pitch. Call us or fill out the contact form, and we will schedule a time to talk. This can happen over the phone, on a video call, or in person at your loved one\'s home. We listen to your situation, your concerns, and what good care looks like to your family.',
    details:
      'The consultation typically takes 20 to 30 minutes. We ask about daily routines, medical conditions, personality, preferences, and schedule needs. There is absolutely no pressure and no obligation. Many families call us months before they actually need care, just to understand their options.',
  },
  {
    number: '02',
    title: 'Personalized Care Plan',
    description:
      'Based on our conversation, we build a care plan tailored to your family. This is not a template with your name plugged in. It is a detailed document that outlines exactly what care looks like: which services, how many hours, what days, what tasks, and what the caregiver should prioritize.',
    details:
      'The care plan is a living document. It changes as your loved one\'s needs change. We review it regularly and adjust based on caregiver observations, family feedback, and any changes in health or circumstances. You approve everything before care begins.',
  },
  {
    number: '03',
    title: 'Caregiver Matching',
    description:
      'This is where most agencies get it wrong. They send whoever is available on Tuesday. We match based on personality, interests, communication style, and skills. If your dad is a retired engineer who loves college football, we find a caregiver who can hold that conversation.',
    details:
      'You meet the caregiver before care starts. We arrange a brief introduction visit with you present so everyone is comfortable. If the match does not feel right, for any reason, we try again immediately. The right match is the foundation of everything that follows.',
  },
  {
    number: '04',
    title: 'Care Begins',
    description:
      'Your caregiver arrives on the first day prepared, with the care plan reviewed and a genuine interest in building a relationship. The first visit is about getting to know each other: learning routines, finding the coffee mugs, understanding preferences, and establishing trust.',
    details:
      'A care coordinator checks in with you after the first visit to ensure everything went well. We handle the awkward "getting started" phase deliberately, because we know it can feel strange to have someone new in the house. Within a visit or two, most families tell us it already feels natural.',
  },
  {
    number: '05',
    title: 'Ongoing Communication',
    description:
      'Care does not happen in a vacuum. After every visit, your caregiver logs notes about the day: what activities happened, how your loved one seemed, any concerns or observations. You have access to these notes and a direct line to your care coordinator.',
    details:
      'We conduct regular care plan reviews and welcome your feedback anytime. If something needs to change, whether it is the schedule, the tasks, or the caregiver, a single phone call makes it happen. The goal is for you to always feel informed, never surprised.',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#F1EEE7]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-xs tracking-[0.25em] uppercase text-[#0E3B3A] font-medium mb-4">
              Getting Started
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0E1B1B] mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              From First Call to
              <br />
              <em>Ongoing Care</em>
            </h1>
            <p className="text-lg text-[#2F6E6B] max-w-2xl mx-auto leading-relaxed">
              Getting started with home care can feel overwhelming. We have
              simplified the process into five clear steps so you know exactly
              what to expect at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      {steps.map((step, i) => (
        <section
          key={step.number}
          id={`step-${step.number}`}
          className={`py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-[#E6E1D3]'}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 rounded-full bg-[#0E3B3A] flex items-center justify-center mb-6">
                    <span className="text-white font-bold text-xl">
                      {step.number}
                    </span>
                  </div>
                  <h2
                    className="text-3xl sm:text-4xl font-medium text-[#0E1B1B] mb-6"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {step.title}
                  </h2>
                  <p className="text-[#2F6E6B] leading-relaxed text-lg mb-6">
                    {step.description}
                  </p>
                  <p className="text-[#2F6E6B] leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div
                  className={`aspect-[4/3] rounded-2xl bg-stone-200 flex items-center justify-center text-stone-400 text-sm ${
                    i % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  Image: {step.title} visual
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* Next Step */}
      <section className="bg-[#F1EEE7] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2
              className="text-3xl sm:text-4xl font-medium text-[#0E1B1B] mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Ready for Step <em>One?</em>
            </h2>
            <p className="text-[#2F6E6B] text-lg max-w-xl mx-auto mb-8">
              The consultation is free, takes about 20 minutes, and comes with
              zero obligation. Most families tell us they feel better just
              having talked through their options.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#0E3B3A] hover:bg-[#2F6E6B] px-8 py-4 text-white font-medium transition-all duration-300"
            >
              Schedule Your Free Consultation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
