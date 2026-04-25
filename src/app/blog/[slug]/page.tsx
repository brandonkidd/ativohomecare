import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, getBlogPostBySlug } from '@/lib/blog';
import { createMetadata } from '@/lib/metadata';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/components/CTASection';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return createMetadata({
    title: `${post.title} | Ativo Home Care`,
    description: post.seoDescription,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <section className="bg-[#F1EEE7] pt-32 pb-14 lg:pt-36 lg:pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-1 text-sm text-[#2F6E6B] transition-colors hover:text-[#0E3B3A]"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            All resources
          </Link>

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#0E3B3A]">{post.category}</p>
          <h1
            className="mt-4 text-4xl font-medium leading-tight text-[#0E1B1B] sm:text-5xl"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {post.title}
          </h1>
          <p className="mt-5 text-sm text-[#2F6E6B]">
            {post.publishedAt} · {post.readTime}
          </p>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="space-y-6">
              {post.content.map((paragraph, i) => (
                <p key={`${post.slug}-${i}`} className="text-lg leading-relaxed text-[#2F6E6B]">
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
