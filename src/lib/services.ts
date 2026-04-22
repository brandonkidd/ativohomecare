import type { ServiceIconName } from '@/components/ServiceIcon';

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  icon: ServiceIconName;
  heroDescription: string;
  whatsIncluded: string[];
  whoIsFor: string[];
  schedulingInfo: string;
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const services: Service[] = [
  {
    slug: 'companion-care',
    title: 'Companion Care',
    shortDescription: 'Social engagement, light housekeeping, meal prep, and friendly conversation. The perfect starting point for families who want a trusted presence in the home.',
    icon: 'heart',
    heroDescription: 'Light-touch, relationship-focused support that keeps your loved one connected and engaged.',
    whatsIncluded: [
      'Companion care is about human connection first. Your caregiver becomes a trusted friend who happens to help around the house. They share meals, play cards, go for walks, and keep your loved one genuinely engaged with life.',
      'On a practical level, companions handle light housekeeping, meal preparation, grocery shopping, and technology assistance. Need help with a video call to the grandkids? That counts. Want someone to drive to the farmers market on Saturday? We do that too.',
      'This is our most popular entry point because it feels natural. There is no clinical atmosphere, no uniform, no awkwardness. Just a warm, reliable person who shows up and makes the day better.',
      'Many families start here and adjust over time. If needs change, your care plan changes with them. No new intake process, no waiting lists, no starting over.'
    ],
    whoIsFor: [
      'Seniors who are physically independent but feeling isolated or lonely at home',
      'Families who want a trusted presence checking in regularly, especially after the loss of a spouse',
      'Active seniors in 55+ communities who need occasional help with errands, meals, or getting to social events',
      'Adult children who live out of state and want peace of mind that someone reliable is nearby'
    ],
    schedulingInfo: 'Companion care starts at just 4 hours per visit. Most families book 2 to 3 visits per week, though we serve everyone from a few hours on Saturdays to daily all-day support. No long-term contracts. Adjust your schedule anytime with a simple phone call.',
    faqs: [
      { question: 'What does a typical companion care visit look like?', answer: 'Every visit is different because every client is different. A morning visit might include making breakfast together, tidying up the kitchen, and going for a walk. An afternoon visit could be grocery shopping, playing cards, and prepping dinner. We follow your loved one\'s rhythm, not a script.' },
      { question: 'Can companion care include driving to appointments?', answer: 'Absolutely. Our caregivers can drive your loved one to medical appointments, social events, shopping, and anywhere else they need to go. Transportation is built into the service, not an add-on.' },
      { question: 'How is this different from personal care?', answer: 'Companion care focuses on social engagement and household help. Personal care adds hands-on assistance with daily living activities like bathing, dressing, and mobility. Many families start with companion care and add personal care services later if needed.' },
      { question: 'What if my parent says they don\'t need help?', answer: 'This is the most common concern we hear. We position the caregiver as a helper or friend, not a nurse. Most resistant seniors warm up within the first visit or two once they realize this is about companionship, not being treated like a patient.' },
      { question: 'Do you match caregivers based on personality?', answer: 'Yes, always. We consider interests, communication style, energy level, and even cultural background. A great personality match is the single biggest predictor of a successful care relationship.' }
    ],
    relatedSlugs: ['personal-care', 'home-support', 'transportation-errands']
  },
  {
    slug: 'personal-care',
    title: 'Personal Care',
    shortDescription: 'Hands-on help with bathing, dressing, mobility, and daily routines. Dignified support that keeps your loved one comfortable and safe at home.',
    icon: 'hands',
    heroDescription: 'Dignified, hands-on assistance with daily living activities so your loved one can age in place with confidence.',
    whatsIncluded: [
      'Personal care covers the activities of daily living that become harder with age. Bathing and shower assistance, dressing, grooming, oral hygiene, toileting support, and incontinence care. Our caregivers handle these intimate tasks with genuine warmth and zero awkwardness.',
      'Mobility assistance is a core part of what we do. Help getting in and out of bed, transferring to a wheelchair, navigating stairs, and fall prevention. We work with your loved one\'s physical therapist when applicable to reinforce safe movement patterns.',
      'Medication reminders keep your parent on schedule without confusion. We do not administer medication, but we ensure the right pills are taken at the right time and flag any concerns to you immediately.',
      'Every personal care plan is built around preserving independence, not replacing it. If your mom can brush her own hair but needs help with buttons, we help with buttons. The goal is always to support what they can still do, not take over.'
    ],
    whoIsFor: [
      'Seniors who need physical help with bathing, dressing, or mobility but want to remain at home',
      'Families managing a parent\'s increasing frailty and worried about falls or safety',
      'Individuals recovering from surgery or illness who need temporary hands-on support',
      'Seniors whose family caregivers can no longer safely provide physical assistance alone'
    ],
    schedulingInfo: 'Personal care visits typically range from 4 to 8 hours. Many clients receive daily morning care to start the day and evening care for bedtime routines. We also offer overnight and 24-hour care for those who need continuous support. No contracts, no minimums beyond 4 hours per visit.',
    faqs: [
      { question: 'How do you maintain dignity during personal care?', answer: 'Training and temperament. Our caregivers are specifically selected for their ability to provide intimate care without making it feel clinical. They communicate every step, respect modesty, and move at your loved one\'s pace. Many clients tell us their caregiver feels like family.' },
      { question: 'Can you help with medication management?', answer: 'We provide medication reminders, meaning we ensure your loved one takes the correct medications at the scheduled times. We do not administer injections or manage complex medication regimens, which requires a licensed nurse. If nursing-level medication management is needed, we can coordinate with a home health agency.' },
      { question: 'What training do your personal care aides have?', answer: 'All personal care aides complete hands-on training in safe transfer techniques, fall prevention, infection control, and personal hygiene assistance. Many hold CNA certifications. Every caregiver is background-checked, bonded, and insured.' },
      { question: 'What if my parent needs both companion and personal care?', answer: 'Most personal care visits naturally include companion care elements. Your caregiver does not just help with bathing and leave. They stay, prepare a meal, chat, maybe watch a show together. You get the full relationship, not just task completion.' },
      { question: 'Do you provide overnight care?', answer: 'Yes. We offer both overnight awake care, where the caregiver stays alert all night, and overnight sleep care, where they rest but are available if needed. Overnight care is especially helpful for seniors with fall risk or those who experience nighttime confusion.' }
    ],
    relatedSlugs: ['companion-care', 'memory-care-support', 'respite-care']
  },
  {
    slug: 'memory-care-support',
    title: 'Memory Care Support',
    shortDescription: 'Specialized support for Alzheimer\'s and dementia. Cognitive engagement, routine consistency, and safety monitoring from caregivers who truly understand memory loss.',
    icon: 'brain',
    heroDescription: 'Specialized in-home support for families navigating Alzheimer\'s, dementia, and cognitive decline.',
    whatsIncluded: [
      'Memory care support goes far beyond basic supervision. Our caregivers are trained in dementia-specific communication techniques, redirection strategies, and cognitive stimulation activities that help maintain function and reduce agitation.',
      'Routine is everything for someone with memory loss. We maintain consistent daily patterns, from morning rituals to mealtime to bedtime, because predictability reduces confusion and anxiety. Your caregiver learns exactly how your loved one likes things done and keeps it that way.',
      'Safety monitoring addresses the real risks of cognitive decline. Wandering prevention, stove safety, medication adherence, and fall risk. We watch without hovering, keeping your loved one safe while preserving their sense of autonomy.',
      'We also support the family. Dementia caregiving is emotionally exhausting, and we communicate openly about what we observe, changes in behavior, good days and hard days, so you can make informed decisions about care as the condition progresses.'
    ],
    whoIsFor: [
      'Families caring for a loved one with early to mid-stage Alzheimer\'s or dementia who wants to remain at home',
      'Seniors in 55+ communities who need specialized memory support beyond what community staff can provide',
      'Family caregivers who are burned out from the demands of full-time dementia caregiving',
      'Families exploring whether in-home memory care is a viable alternative to a memory care facility'
    ],
    schedulingInfo: 'Memory care visits range from 4 hours to 24-hour live-in support. Consistency matters more here than any other service, so we assign a small, dedicated team of 2 to 3 caregivers who rotate to ensure your loved one always sees a familiar face. As dementia progresses, hours often increase gradually.',
    faqs: [
      { question: 'How is this different from a memory care facility?', answer: 'In-home memory care provides one-on-one attention in a familiar environment. Facilities offer 24/7 staffing but with shared attention across many residents. For early to mid-stage dementia, home-based care often produces better outcomes because the familiar surroundings reduce confusion and agitation.' },
      { question: 'What dementia training do your caregivers have?', answer: 'All memory care caregivers complete specialized training in Alzheimer\'s and dementia care, including communication techniques, behavioral management, redirection, validation therapy, and safety protocols. We specifically select caregivers with the patience and temperament this work demands.' },
      { question: 'Can you handle sundowning and nighttime agitation?', answer: 'Yes. Sundowning is one of the most common reasons families seek professional help. Our overnight caregivers are experienced with evening agitation, confusion, and sleep disruption. They use calming routines, reduced stimulation, and gentle redirection to help your loved one settle.' },
      { question: 'What happens when the disease progresses?', answer: 'We adjust the care plan as needs change. That might mean more hours, additional overnight support, or a second caregiver for mobility assistance. We also help families evaluate when a transition to a higher level of care might be appropriate, with honesty and without pressure.' },
      { question: 'Do you coordinate with neurologists or other specialists?', answer: 'We communicate regularly with your loved one\'s medical team when authorized. We document behavioral changes, medication responses, and functional abilities to give doctors useful information at appointments. We also attend appointments with your loved one when requested.' }
    ],
    relatedSlugs: ['personal-care', 'respite-care', 'companion-care']
  },
  {
    slug: 'respite-care',
    title: 'Respite Care',
    shortDescription: 'Reliable relief for family caregivers. Whether you need a few hours, a weekend, or regular weekly breaks, we step in so you can step away without worry.',
    icon: 'leaf',
    heroDescription: 'Dependable relief for family caregivers who need time to recharge without worrying about their loved one.',
    whatsIncluded: [
      'Respite care is exactly what it sounds like: a break. You have been doing this for months or years, getting up early, managing medications, handling meals, sacrificing your own health and relationships. Respite gives you permission to stop for a minute.',
      'We offer scheduled respite on a recurring basis, like every Tuesday and Thursday afternoon, so you can count on regular time for yourself. We also provide emergency respite when you are sick, overwhelmed, or just hit a wall. And extended respite for vacations, family events, or business travel.',
      'Your loved one receives the same quality care they would get in any of our other services. The caregiver follows your routines, your preferences, your way of doing things. Continuity matters, especially when someone new is stepping in.',
      'There is no guilt in needing a break. Caregiver burnout is real and dangerous, for you and for the person you are caring for. Respite care is not a luxury. It is a necessity that makes long-term caregiving sustainable.'
    ],
    whoIsFor: [
      'Family caregivers who are exhausted and need regular scheduled breaks to maintain their own health',
      'Spouses caring for a partner with chronic illness or cognitive decline who need time for their own appointments, errands, or social life',
      'Adult children who provide primary care and need coverage for work travel, vacations, or family obligations',
      'Families in crisis who need emergency coverage when the primary caregiver is suddenly unavailable'
    ],
    schedulingInfo: 'Respite care is the most flexible service we offer. Book a single afternoon, a recurring weekly schedule, or a full week of coverage. Minimum visit is 4 hours. For emergency respite, we can often arrange coverage within 24 to 48 hours depending on availability.',
    faqs: [
      { question: 'How quickly can you arrange respite care?', answer: 'For scheduled respite, we typically need 3 to 5 days to match a caregiver and review your care plan. For emergency situations, we do our best to arrange coverage within 24 to 48 hours. If you think you might need emergency respite at some point, setting up a care plan in advance makes last-minute requests much faster.' },
      { question: 'Will the caregiver follow our routines?', answer: 'Absolutely. During the consultation, we document your daily routine in detail: what time your loved one wakes up, how they like their coffee, what shows they watch, their medication schedule, everything. The caregiver follows your playbook, not theirs.' },
      { question: 'Can I use respite care just once or does it have to be recurring?', answer: 'Either. Some families use us once for a vacation and never call again. Others set up weekly recurring respite and use it for years. There is no commitment and no pressure. Use the service however it helps you.' },
      { question: 'What if my loved one is resistant to a new caregiver?', answer: 'We introduce the caregiver with a short overlap visit while you are still home. Your loved one meets them in your presence, in a low-pressure way. Most resistance fades once they see you are comfortable with the person and the caregiver connects with them naturally.' }
    ],
    relatedSlugs: ['companion-care', 'personal-care', 'memory-care-support']
  },
  {
    slug: 'transition-care',
    title: 'Transition Care',
    shortDescription: 'Smooth the path from hospital or rehab back home. We bridge the gap so recovery continues safely in your own space.',
    icon: 'home',
    heroDescription: 'Bridge care that ensures a safe, smooth transition from hospital or rehab facility back to the comfort of home.',
    whatsIncluded: [
      'The first 72 hours after discharge are the most dangerous. Medication changes, mobility limitations, wound care instructions, and follow-up appointments all collide at once. Transition care puts a trained caregiver in the home during this critical window to make sure nothing falls through the cracks.',
      'We coordinate with hospital discharge planners and rehab facilities before your loved one even comes home. The caregiver arrives prepared with the care plan, medication list, activity restrictions, and follow-up schedule. No scrambling, no guesswork.',
      'Post-surgery support covers everything from mobility assistance and fall prevention to meal preparation and medication reminders. We reinforce the physical therapy exercises, help with wound care as permitted, and watch for signs of complications that warrant a call to the doctor.',
      'This service is uniquely valuable for Ativo clients because of our connection to senior living communities. If your loved one is transitioning between a community setting and home, we understand both environments and can bridge them seamlessly.'
    ],
    whoIsFor: [
      'Seniors being discharged from the hospital after surgery, illness, or a fall who need support at home during recovery',
      'Families navigating rehab-to-home transitions who want to ensure recovery continues safely',
      'Patients whose discharge plan includes home health but who need additional non-medical support beyond what home health covers',
      'Families worried about hospital readmission, which affects 1 in 5 Medicare patients within 30 days of discharge'
    ],
    schedulingInfo: 'Transition care typically starts the day of discharge and runs for 2 to 6 weeks, depending on recovery. Many families begin with daily 8-hour visits and taper down as their loved one regains independence. No contracts mean you can stop the moment care is no longer needed.',
    faqs: [
      { question: 'How quickly can you start after hospital discharge?', answer: 'If we have advance notice from the hospital or family, we can have a caregiver ready the same day as discharge. We work directly with discharge planners to coordinate timing. Ideally, give us 48 to 72 hours notice, but we understand that discharge dates change unexpectedly.' },
      { question: 'Do you coordinate with home health nurses?', answer: 'Yes, frequently. Home health typically provides skilled nursing visits a few times per week. Our caregivers fill the hours between those visits with the non-medical support your loved one needs: meals, mobility help, medication reminders, transportation to follow-ups, and companionship during recovery.' },
      { question: 'What if recovery takes longer than expected?', answer: 'You simply extend the service. There is no set end date and no contract to renegotiate. If your loved one needs an extra two weeks of support, we keep the same caregiver in place and adjust the schedule. If they recover faster than expected, you can scale back immediately.' },
      { question: 'Can this help prevent hospital readmission?', answer: 'That is one of the primary goals. Studies show that proper support after discharge significantly reduces readmission rates. Our caregivers watch for warning signs like increased confusion, fever, wound changes, or medication side effects, and escalate concerns before they become emergencies.' }
    ],
    relatedSlugs: ['personal-care', 'home-support', 'companion-care']
  },
  {
    slug: 'home-support',
    title: 'Home Support Services',
    shortDescription: 'Household management that keeps the home clean, organized, and running smoothly. Because a well-maintained home is the foundation of independent living.',
    icon: 'sparkles',
    heroDescription: 'Comprehensive household support that keeps your loved one\'s home clean, organized, and comfortable.',
    whatsIncluded: [
      'Home support covers the practical side of daily life that becomes overwhelming when mobility or energy declines. Housekeeping, laundry, dishes, vacuuming, bathroom cleaning, and kitchen maintenance. The house stays the way your loved one has always kept it, just with help.',
      'Meal preparation goes beyond reheating frozen dinners. Our caregivers cook real meals based on your loved one\'s preferences and dietary needs. Breakfast, lunch, dinner, and snacks prepared fresh. We also handle grocery shopping and pantry organization.',
      'Errands and household management fill the gaps. Picking up prescriptions, dropping off dry cleaning, organizing mail, managing deliveries, and handling the small tasks that pile up when getting around is difficult.',
      'This service is a powerful differentiator from agencies that only offer body care. Many seniors do not need help bathing or dressing. They need someone to keep the house livable, prepare nutritious meals, and handle the errands they can no longer manage independently.'
    ],
    whoIsFor: [
      'Seniors who are physically independent but struggle to maintain their home and handle household tasks',
      'Families who notice a parent\'s home becoming cluttered, the fridge empty, or mail piling up',
      'Seniors recovering from illness or surgery who need temporary household support while they heal',
      'Individuals with chronic fatigue, arthritis, or mobility limitations that make housework painful or impossible'
    ],
    schedulingInfo: 'Home support visits start at 4 hours and can be scheduled as often as needed. A popular option is twice-weekly visits for cleaning and meal prep, with additional visits for grocery shopping and errands. Combine with companion care for a full-service experience.',
    faqs: [
      { question: 'Is this just a cleaning service?', answer: 'No. A cleaning service comes in, cleans, and leaves. Our home support caregivers provide comprehensive household management: cooking, shopping, laundry, errands, organization, and companionship. They are a consistent presence who knows your loved one and their preferences, not a rotating crew with a checklist.' },
      { question: 'Can you accommodate special diets?', answer: 'Yes. Whether your loved one needs low-sodium, diabetic-friendly, soft foods, or just prefers specific cuisines, our caregivers prepare meals accordingly. During the care planning process, we document all dietary preferences and restrictions.' },
      { question: 'Do you handle pet care?', answer: 'Light pet care is included as part of home support. Feeding, water bowls, letting dogs out, and basic cleanup. We understand that pets are family, and helping care for them is part of caring for your loved one.' },
      { question: 'Can this be combined with other services?', answer: 'Absolutely, and it usually is. Most families pair home support with companion care or personal care for a complete package. Your caregiver handles both the household and the personal connection in one visit.' }
    ],
    relatedSlugs: ['companion-care', 'transportation-errands', 'personal-care']
  },
  {
    slug: 'transportation-errands',
    title: 'Transportation & Errands',
    shortDescription: 'Safe, reliable rides to appointments, pharmacies, grocery stores, and social events. Plus errand running so nothing falls through the cracks.',
    icon: 'car',
    heroDescription: 'Reliable transportation and errand services that keep your loved one connected, supplied, and on schedule.',
    whatsIncluded: [
      'Giving up the car keys is one of the hardest transitions in aging. It is not just about driving. It is about independence, spontaneity, and connection to the world. Our transportation service restores that freedom with a trusted caregiver who drives, accompanies, and assists.',
      'Medical transportation covers doctor appointments, specialist visits, lab work, physical therapy, and pharmacy stops. Your caregiver drives, helps with check-in, takes notes during the appointment if requested, and ensures prescriptions are picked up on the way home.',
      'Social and personal transportation keeps life full. Grocery shopping, hair appointments, lunch with friends, church services, community events, and family gatherings. We drive to all of it. No ride-share strangers, no rigid shuttle schedules.',
      'Errand running handles the logistics your loved one can no longer manage. Pharmacy pickups, banking, post office, dry cleaning, returns, and any other task that requires leaving the house. The caregiver can run errands independently or bring your loved one along, whatever they prefer.'
    ],
    whoIsFor: [
      'Seniors who have stopped driving or should stop driving and need reliable transportation',
      'Families tired of juggling their parent\'s appointment schedule with their own work and family obligations',
      'Seniors in 55+ communities who want to get off the property more often for shopping, dining, and socializing',
      'Individuals with mobility limitations who need door-to-door assistance, not just a ride'
    ],
    schedulingInfo: 'Transportation can be booked as standalone visits or bundled into companion or personal care visits. Standalone transport visits have a 2-hour minimum. Most families find that combining transportation with a longer companion visit is the most cost-effective approach.',
    faqs: [
      { question: 'Do caregivers use their own car or the client\'s?', answer: 'Either. Caregivers can drive the client\'s vehicle if preferred, or use their own. All caregivers who provide transportation maintain valid insurance and clean driving records. Mileage for errands and appointments is included in the service, no extra per-mile charges.' },
      { question: 'Can the caregiver come into the doctor\'s office?', answer: 'Yes, and we encourage it. Your caregiver can sit in during appointments to take notes, ask questions the family has submitted in advance, and relay information to you afterward. This is especially valuable for seniors with memory concerns who may not accurately recall what the doctor said.' },
      { question: 'What if appointments run long?', answer: 'Your caregiver waits. There is no meter running and no ride-share surge pricing. If the appointment takes an extra hour, the caregiver is right there in the waiting room, ready to help when it is over. You are billed for actual time, and we understand that medical appointments are unpredictable.' },
      { question: 'Can errands be run without the client present?', answer: 'Absolutely. If your loved one prefers to stay home while the caregiver picks up groceries, prescriptions, or dry cleaning, that works perfectly. The caregiver can also run errands during a companion visit while the client rests.' }
    ],
    relatedSlugs: ['companion-care', 'home-support', 'personal-care']
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs.map(slug => services.find(s => s.slug === slug)).filter(Boolean) as Service[];
}
