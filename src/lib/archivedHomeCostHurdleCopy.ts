/**
 * Archived home “Cost & clarity” band (private pay / cost reassurance) for possible reuse.
 * Removed from `src/app/page.tsx` 2026-04-22 — bank for later.
 *
 * Original section shell (for paste-back):
 * - `section`: `border-y border-[#D9D4C8] bg-gradient-to-b from-white to-[#F8F5EF] py-14 lg:py-16`
 * - `aria-labelledby="home-finance-hurdle"`
 * - Primary CTA: `/contact` — “Talk through cost with us”
 * - Secondary: `#faq` — “See cost & insurance in FAQ”
 */
export const archivedHomeCostHurdleV1 = {
  eyebrow: 'Cost & clarity',
  headline: 'Worried it will be expensive or complicated to pay for?',
  headlineEmphasis: 'complicated to pay for?',
  body:
    'We are private pay on purpose: you pay for the care you use—no insurance maze delaying a start date, no surprise line items. Many families offset cost with long-term care insurance, and we help you make sense of what might apply.',
  ctaPrimaryLabel: 'Talk through cost with us',
  ctaPrimaryHref: '/contact' as const,
  ctaSecondaryLabel: 'See cost & insurance in FAQ',
  ctaSecondaryHref: '#faq' as const,
} as const;
