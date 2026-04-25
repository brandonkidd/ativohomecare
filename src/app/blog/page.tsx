import Link from 'next/link';
import { createMetadata } from '@/lib/metadata';
import { blogPosts } from '@/lib/blog';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/components/CTASection';

export const metadata = createMetadata({
  title: 'Blog | Ativo Home Care',
  description:
    'Resources for families researching senior home care, including cost comparisons, care planning, and caregiver hiring tips.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#F1EEE7] pt-32 pb-16 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#0E3B3A]">
            Resources for Families
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0E1B1B]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Home Care Insights <em>& Guidance</em>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#2F6E6B]">
            Practical answers for families comparing options, planning next steps, and trying to make
            confident decisions for a loved one.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 80}>
                <article className="h-full rounded-2xl border border-[#E6E1D3] bg-[#F8F5EF] p-7">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#2F6E6B]">
                    {post.category}
                  </p>
                  <h2
                    className="mt-4 text-2xl font-medium leading-tight text-[#0E1B1B]"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {post.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-[#2F6E6B]">{post.excerpt}</p>
                  <p className="mt-5 text-xs text-[#2F6E6B]/80">
                    {post.publishedAt} · {post.readTime}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0E3B3A] transition-all hover:gap-3 hover:text-[#2F6E6B]"
                  >
                    Read article
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
