export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  seoDescription: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'signs-a-parent-needs-home-care',
    title: '7 Signs a Parent May Need Home Care',
    excerpt:
      'Subtle changes often show up before a major health event. Here are practical signs families in Arizona notice first.',
    category: 'Getting Started',
    readTime: '5 min read',
    publishedAt: 'April 2026',
    seoDescription:
      'Learn the early warning signs that an older parent may need in-home care and what to do next.',
    content: [
      'Most families do not have one dramatic moment when they know it is time for support. The decision usually comes from a pattern of small changes that begin to stack up over time.',
      'Early signs include missed medications, unexplained weight loss, unopened mail, new bruises from falls, and a visible decline in housekeeping. You may also notice your parent skipping social events they used to enjoy.',
      'Another common clue is caregiver fatigue in the family. If one adult child is handling appointments, meals, transportation, and safety checks alone, burnout can happen quickly.',
      'Starting with a few hours of support each week can stabilize routines before a crisis. The goal is not to take independence away. It is to protect it for longer.',
    ],
  },
  {
    slug: 'home-care-cost-vs-assisted-living-arizona',
    title: 'Home Care vs. Assisted Living Costs in Arizona',
    excerpt:
      'A side-by-side look at monthly costs, flexibility, and when each option makes the most financial sense.',
    category: 'Cost & Planning',
    readTime: '6 min read',
    publishedAt: 'April 2026',
    seoDescription:
      'Compare Arizona home care costs to assisted living and nursing home costs to choose the right fit.',
    content: [
      'Cost is one of the first questions families ask, and for good reason. In Arizona, part-time in-home care is often significantly less expensive than assisted living or a nursing home.',
      'At a typical in-home rate, 20 hours per week can land near $2,640 per month. By comparison, assisted living commonly starts around $5,500 monthly, while nursing home care is often higher.',
      'Home care also scales more gradually. Families can start with a few visits a week, then increase support as needs change, rather than committing to full community pricing on day one.',
      'If a loved one needs full-time supervision or advanced medical support, a facility may be the better value. The best decision blends care level, budget, and quality-of-life priorities.',
    ],
  },
  {
    slug: 'what-to-ask-before-hiring-a-caregiver',
    title: 'What to Ask Before Hiring a Home Care Agency',
    excerpt:
      'Use this checklist to compare agencies on safety, matching, communication, and continuity of care.',
    category: 'Trust & Safety',
    readTime: '4 min read',
    publishedAt: 'April 2026',
    seoDescription:
      'Questions families should ask before hiring a home care agency, including screening and backup coverage.',
    content: [
      'Not all agencies operate the same way, so asking detailed questions helps families avoid surprises later.',
      'Start with screening and safety: Are caregivers background checked, bonded, and insured? Ask how references and skills are verified before placement.',
      'Next, ask how matching works. A strong process should consider personality, communication style, and schedule fit, not just who is available first.',
      'Finally, ask about continuity. If the regular caregiver is out sick, who covers the shift and how quickly are families notified? Reliable agencies have dedicated backup staffing plans.',
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
