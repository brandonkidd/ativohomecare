export interface Testimonial {
  quote: string;
  name: string;
  community: string;
  rating: number;
  /** Optional hero image crop for circular avatar (replace with real headshots in /public when ready). */
  avatarSrc?: string;
  avatarObjectPosition?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "After my mom's hip replacement, we were terrified about bringing her home. Ativo had a caregiver there the day she was discharged. Within a week, Mom was calling her caregiver by name and actually looking forward to her visits. The transition from rehab to home was seamless.",
    name: 'Sara K.',
    community: 'Sun City Festival',
    rating: 5,
    avatarSrc: '/headshot-1.jpg',
    avatarObjectPosition: 'center',
  },
  {
    quote: "We tried two other agencies before finding Ativo. The difference is night and day. They actually matched a caregiver who shares my father's love of baseball and old westerns. Dad thinks he has a new buddy, not a caregiver. That matters more than anything on a brochure.",
    name: 'Michael T.',
    community: 'Victory at Verrado',
    rating: 5,
    avatarSrc: '/headshot-3-latest-v2.png',
    avatarObjectPosition: '50% 58%',
  },
  {
    quote: "I was burning out trying to care for my husband with Alzheimer's on my own. Ativo gave me my Tuesdays and Thursdays back. I can grocery shop, see my doctor, or just sit in a quiet coffee shop for two hours. It sounds small, but it saved me. Truly.",
    name: 'Linda P.',
    community: 'PebbleCreek',
    rating: 5,
    avatarSrc: '/headshot-2.jpg',
    avatarObjectPosition: 'center',
  }
];
