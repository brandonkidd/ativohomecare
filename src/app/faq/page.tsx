import Link from 'next/link';
import { createMetadata } from '@/lib/metadata';
import HomeFAQList, { type HomeFaqItem } from '@/components/HomeFAQList';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/components/CTASection';

export const metadata = createMetadata({
  title: 'FAQ | Ativo Home Care',
  description:
    'Answers to common questions about Ativo Home Care: start timelines, costs, private pay, caregiver matching, dementia care, insurance, and what makes Ativo different.',
  path: '/faq',
});

type FaqGroup = {
  title: string;
  items: HomeFaqItem[];
};

const faqGroups: FaqGroup[] = [
  {
    title: 'How Does Getting Started Work?',
    items: [
      {
        question: 'How quickly can care start?',
        answer:
          "In most cases, we can have a caregiver in the home within 48 to 72 hours of your initial consultation. Because Ativo is 100% private pay, there are no insurance authorizations or prior approvals to wait on. We start by understanding your loved one's needs, matching them with a caregiver, and scheduling an introduction visit before care begins.",
      },
      {
        question: 'What is the minimum number of hours per visit?',
        answer:
          'Ativo Home Care requires a four-hour minimum per visit. This minimum allows our caregivers enough time to provide meaningful support rather than rushing through tasks. Most families start with two to three visits per week and adjust as needs evolve. We offer flexible scheduling from 4-hour visits to 24/7 live-in care, with no long-term contracts required.',
      },
      {
        question: 'How do I know when my parent needs home care?',
        answer:
          'The most common signs include missed medications, unexplained weight loss, difficulty with bathing or dressing, increased forgetfulness, a noticeable decline in housekeeping, new bruises from falls, and withdrawal from social activities. Many families first notice these changes during a holiday visit or after a hospital stay. If you are worried enough to search for answers, that instinct is worth acting on. A free consultation with Ativo can help you assess whether professional support is the right next step.',
      },
      {
        question: 'What if my loved one does not want a caregiver?',
        answer:
          "This is one of the most common concerns families share with us. Many older adults initially resist the idea of outside help because it feels like a loss of independence. We address this by framing the caregiver as a companion and helper, not a replacement for what they can do themselves. We start with short visits focused on activities your loved one enjoys, and we let the relationship build naturally. In our experience, most clients look forward to their caregiver's visits within the first two weeks.",
      },
    ],
  },
  {
    title: 'How Much Does Care Cost and How Do We Pay?',
    items: [
      {
        question: 'How much does in-home care cost in Arizona?',
        answer:
          "In-home care costs in Arizona typically range from $29 to $36 per hour depending on location, service level, and hours needed. As a reference point, 20 hours per week of in-home care at the statewide median rate costs roughly $2,640 to $2,880 per month. That is significantly less than the Arizona median for assisted living ($5,500 per month) or a nursing home ($6,540 per month). Ativo provides transparent, all-inclusive pricing with no hidden fees. Contact us for a personalized quote based on your family's specific needs and location.",
      },
      {
        question: 'Do you accept insurance or Medicare?',
        answer:
          'Ativo Home Care is 100% private pay. We do not bill insurance companies or Medicare directly. This means care starts when you need it, not when an insurance company approves it, and you choose the hours, schedule, and services without restrictions. If your family has long-term care insurance (LTC), we assist with the claims paperwork so you can maximize your benefits and receive reimbursement directly from your insurer.',
      },
      {
        question: 'Is in-home care cheaper than assisted living in Arizona?',
        answer:
          "For part-time care needs, yes. If your loved one needs fewer than 30 to 35 hours of care per week, in-home care is almost always less expensive than assisted living. At the Arizona median home care rate of approximately $33 per hour, 20 hours per week costs roughly $2,640 per month, compared to $5,500 per month for assisted living or $6,540 for a nursing home. However, if your loved one requires 24/7 supervision, a facility may be more cost-effective. The right choice depends on the level of care needed and your family's priorities around independence, comfort, and routine.",
      },
      {
        question: 'Can I use long-term care insurance to pay for home care?',
        answer:
          'Yes. Many long-term care insurance policies cover non-medical in-home care services. Ativo works with families to assist with the claims paperwork and documentation needed for reimbursement. Your policy may require a specific elimination period (typically 30 to 90 days) before benefits begin. We recommend contacting your insurance provider to confirm your coverage details, and our team can help you navigate the process from there.',
      },
      {
        question: 'Does ALTCS or Arizona Medicaid pay for home care?',
        answer:
          "Arizona's Medicaid program, known as AHCCCS, offers long-term care coverage through the Arizona Long Term Care System (ALTCS). ALTCS can cover in-home care for individuals who meet both financial and medical eligibility requirements. As of 2026, the general income limit for ALTCS is approximately $2,982 per month. Ativo Home Care is a private-pay agency and does not accept ALTCS directly, but we can help families understand their options and coordinate with providers who do accept Medicaid-funded programs.",
      },
    ],
  },
  {
    title: 'What Services Are Included in Care at Home?',
    items: [
      {
        question: 'What is the difference between home care and home health care?',
        answer:
          'Home care provides non-medical assistance with daily activities such as bathing, dressing, meal preparation, companionship, light housekeeping, and transportation. Home health care is a medical service provided by licensed nurses and therapists, often prescribed by a doctor and typically covered by Medicare. Ativo provides home care (non-medical), which is what most families need when a loved one is safe at home but requires consistent daily support. If your loved one also requires medical services, we can help coordinate with home health providers in your area.',
      },
      {
        question: 'What services does Ativo Home Care provide?',
        answer:
          "Ativo offers five core service categories: Companion Care (companionship, light housekeeping, errands, meal preparation, and social engagement), Personal Care (bathing, dressing, grooming, toileting, mobility, and medication reminders), Memory Care Support (specialized assistance for families navigating Alzheimer's disease or other forms of dementia), Respite Care (temporary relief for family caregivers), and Transition Care (support during the transition home after a hospital stay, surgery, or rehabilitation). Care plans are personalized and can be adjusted as needs change.",
      },
      {
        question: "Can your caregivers help with dementia or Alzheimer's care at home?",
        answer:
          "Yes. Ativo offers specialized Memory Care Support for families navigating Alzheimer's disease and other forms of dementia. Our caregivers are trained in structured daily routines, redirection techniques, safety monitoring, and communication strategies that reduce agitation and confusion. We maintain consistency by assigning the same caregiver to each client whenever possible, which is especially important for individuals with cognitive changes who rely on familiarity and routine.",
      },
      {
        question: 'Can caregivers drive my parent to appointments?',
        answer:
          "Yes. Transportation assistance is included as part of our companion and personal care services. Caregivers can drive your loved one to medical appointments, the pharmacy, the grocery store, social outings, and other errands. All Ativo caregivers carry a valid driver's license and current auto insurance. Transportation is one of the most requested services among our clients and helps reduce isolation while keeping important appointments on schedule.",
      },
      {
        question: 'Can a caregiver administer medications?',
        answer:
          'Non-medical home care providers in Arizona are not permitted to administer medications, give injections, or perform any medical procedures. Ativo caregivers provide medication reminders, which means they prompt your loved one to take prescribed medications at the correct time and can help organize pill boxes. If your loved one requires medication administration, a licensed home health nurse is needed, and we can help coordinate that referral.',
      },
      {
        question: 'Do you offer overnight or 24-hour care?',
        answer:
          'Yes. Ativo offers flexible scheduling that includes overnight shifts, extended-hour visits, and full 24/7 live-in care arrangements. For live-in care, we rotate caregivers to ensure your loved one always has a rested, alert caregiver present. Many families start with daytime visits and add overnight coverage as needs increase, and we make that transition seamless with no new contracts or commitments.',
      },
    ],
  },
  {
    title: 'How Do We Know Care Will Be Safe and Reliable?',
    items: [
      {
        question: 'Are your caregivers background checked and insured?',
        answer:
          'Yes. Every Ativo caregiver undergoes a comprehensive background check, reference verification, and skills assessment before being placed with a client. All caregivers are bonded and insured through Ativo, which means your family carries no liability. Arizona does not require state licensing for non-medical home care agencies, which makes it especially important to choose a provider with rigorous screening standards. We maintain the same hiring and training standards used across Ativo Senior Living communities.',
      },
      {
        question: 'How do you match caregivers to clients?',
        answer:
          'We go beyond availability and credentials. During the intake process, we assess personality traits, communication style, interests, energy level, and scheduling preferences for both the client and the caregiver. Your loved one meets the caregiver before care begins in a low-pressure introduction with family present. If the match does not feel right for any reason, we replace the caregiver immediately at no cost. We maintain a small, dedicated team for each client so your loved one always sees a familiar face.',
      },
      {
        question: 'What happens if my regular caregiver is sick or unavailable?',
        answer:
          "Because we assign a small, dedicated team to each client rather than a single caregiver, there is always a familiar backup available. If your primary caregiver is unavailable, a teammate who already knows your loved one's routine, preferences, and care plan steps in. You are never left without coverage, and we notify families in advance whenever a schedule change occurs. Our goal is consistency, and our staffing model is built around it.",
      },
    ],
  },
  {
    title: 'Why Choose Ativo Over Other Home Care Agencies?',
    items: [
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
      {
        question: 'Do you require long-term contracts?',
        answer:
          'No. Ativo does not require long-term contracts, minimum commitment periods, or cancellation fees. You can start, pause, adjust, or stop services at any time with a simple phone call. Most of our client relationships last years, but that is because families choose to stay, not because they are locked in.',
      },
      {
        question: 'What areas do you serve in Arizona?',
        answer:
          'Ativo Home Care currently serves four Arizona markets: Prescott Valley (including Prescott, Chino Valley, and Dewey-Humboldt), Buckeye (including Goodyear, Surprise, Sun City West, and Peoria), Yuma (including Fortuna Foothills, San Luis, and Somerton), and Lake Havasu City (including Bullhead City, Fort Mohave, and Kingman). Each market is connected to an Ativo Senior Living community in the area.',
      },
    ],
  },
];

const faqItemsForSchema = faqGroups.flatMap((group) => group.items);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItemsForSchema.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-[#F1EEE7] pt-32 pb-16 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-[#0E3B3A] font-medium mb-4">FAQ</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0E1B1B] mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Questions Families <em>Ask</em>
          </h1>
          <p className="text-lg text-[#2F6E6B] max-w-3xl mx-auto leading-relaxed">
            We hear these questions every week. If yours is not here, call us. We would rather spend 10
            minutes on the phone than leave you guessing.
          </p>
          <div className="mt-7">
            <Link href="/contact" className="inline-flex items-center gap-2 text-[#0E3B3A] font-semibold hover:gap-3 transition-all">
              Talk to our team
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {faqGroups.map((group, index) => (
            <ScrollReveal key={group.title} delay={index * 60}>
              <div className={index === 0 ? '' : 'mt-16'}>
                <h2
                  className="text-2xl sm:text-3xl font-semibold text-[#0E1B1B] mb-5"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {group.title}
                </h2>
                <HomeFAQList items={group.items} compact useH2ForQuestions />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
