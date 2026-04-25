import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PortableText, type PortableTextReactComponents } from '@portabletext/react';
import { getBlogPostBySlug, getBlogSlugs } from '@/lib/blog';
import { createMetadata } from '@/lib/metadata';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/components/CTASection';
import { urlForImage } from '@/sanity/lib/image';

export const revalidate = 300;

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};

  return createMetadata({
    title: `${post.title} | Ativo Home Care`,
    description: post.seoDescription,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const faqSchema =
    post.faq && post.faq.length
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null;

  const portableTextComponents: Partial<PortableTextReactComponents> = {
    block: {
      normal: ({ children }) => <p className="text-lg leading-relaxed text-[#2F6E6B]">{children}</p>,
      h2: ({ children }) => (
        <h2 className="pt-4 text-3xl font-medium leading-tight text-[#0E1B1B]" style={{ fontFamily: 'var(--font-serif)' }}>
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="pt-3 text-2xl font-medium leading-tight text-[#0E1B1B]" style={{ fontFamily: 'var(--font-serif)' }}>
          {children}
        </h3>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-[#2F6E6B]/30 pl-4 italic text-[#2F6E6B]">{children}</blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => <ul className="list-disc space-y-2 pl-6 text-lg text-[#2F6E6B]">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal space-y-2 pl-6 text-lg text-[#2F6E6B]">{children}</ol>,
    },
    marks: {
      link: ({ children, value }) => {
        const href = typeof value?.href === 'string' ? value.href : '#';
        const isExternal = href.startsWith('http');
        return (
          <a
            href={href}
            className="underline decoration-[#2F6E6B] underline-offset-2 hover:text-[#0E3B3A]"
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noreferrer' : undefined}
          >
            {children}
          </a>
        );
      },
    },
    types: {
      image: ({ value }) => {
        const alt = typeof value?.alt === 'string' ? value.alt : post.title;
        const caption = typeof value?.caption === 'string' ? value.caption : '';
        const imageUrl = urlForImage(value).width(1200).fit('max').auto('format').url();
        return (
          <figure className="my-8">
            <Image src={imageUrl} alt={alt} width={1200} height={700} className="w-full rounded-xl object-cover" />
            {caption ? <figcaption className="mt-2 text-sm text-[#2F6E6B]/80">{caption}</figcaption> : null}
          </figure>
        );
      },
    },
  };

  return (
    <>
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
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
          {post.mainImage?.asset ? (
            <Image
              src={urlForImage(post.mainImage).width(1400).height(740).fit('crop').url()}
              alt={post.mainImage.alt || post.title}
              width={1400}
              height={740}
              className="mt-8 w-full rounded-2xl object-cover"
              priority
            />
          ) : null}
        </div>
      </section>

      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="space-y-6">
              {post.body?.length ? (
                <PortableText value={post.body} components={portableTextComponents} />
              ) : (
                post.content?.map((paragraph, i) => (
                  <p key={`${post.slug}-${i}`} className="text-lg leading-relaxed text-[#2F6E6B]">
                    {paragraph}
                  </p>
                ))
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
