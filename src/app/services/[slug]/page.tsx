import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services, getServiceBySlug, getRelatedServices } from '@/lib/services';
import { createMetadata } from '@/lib/metadata';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import CheckItem from '@/components/CheckItem';
import ScrollReveal from '@/components/ScrollReveal';
import ServiceIcon from '@/components/ServiceIcon';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return createMetadata({
    title: `${service.title} | Ativo Home Care`,
    description: service.heroDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.relatedSlugs);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#F1EEE7]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-sm text-[#2F6E6B] hover:text-[#0E3B3A] transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            All Services
          </Link>
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#0E3B3A]/10 text-[#0E3B3A]">
              <ServiceIcon name={service.icon} className="w-7 h-7" />
            </div>
            <h1
              className="text-4xl sm:text-5xl font-medium text-[#0E1B1B] mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {service.title}
            </h1>
            <p className="text-xl text-[#2F6E6B] leading-relaxed">
              {service.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-[#0E3B3A] font-medium mb-4">
                  What&apos;s Included
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-medium text-[#0E1B1B] mb-8"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  What This <em>Looks Like</em>
                </h2>
                <div className="space-y-6">
                  {service.whatsIncluded.map((p, i) => (
                    <p key={i} className="text-[#2F6E6B] leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="aspect-[4/3] rounded-2xl bg-stone-200 flex items-center justify-center text-stone-400 text-sm lg:mt-12">
                Image: {service.title} in action, natural home setting
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-[#E6E1D3] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.25em] uppercase text-[#0E3B3A] font-medium mb-4">
                Is This Right for You?
              </p>
              <h2
                className="text-3xl sm:text-4xl font-medium text-[#0E1B1B] mb-8"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Who This Is <em>For</em>
              </h2>
              <div className="space-y-5">
                {service.whoIsFor.map((item, i) => (
                  <CheckItem key={i}>{item}</CheckItem>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Scheduling */}
      <section className="bg-[#F1EEE7] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.25em] uppercase text-[#0E3B3A] font-medium mb-4">
                Flexibility Built In
              </p>
              <h2
                className="text-3xl sm:text-4xl font-medium text-[#0E1B1B] mb-6"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                How Scheduling <em>Works</em>
              </h2>
              <p className="text-[#2F6E6B] leading-relaxed text-lg">
                {service.schedulingInfo}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2
              className="text-2xl font-medium text-[#0E1B1B] mb-8"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Related <em>Services</em>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 100}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group block bg-[#F1EEE7] rounded-2xl p-8 border border-[#E6E1D3] hover:border-[#B9D4CF]/40 hover:shadow-lg transition-all"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0E3B3A]/10 text-[#0E3B3A]">
                    <ServiceIcon name={s.icon} className="w-5 h-5" />
                  </div>
                  <h3
                    className="text-lg font-semibold text-[#0E1B1B] group-hover:text-[#0E3B3A] transition-colors mb-2"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#2F6E6B] line-clamp-2">
                    {s.shortDescription}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F1EEE7] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-[#0E3B3A] font-medium mb-4">
                  FAQ
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-medium text-[#0E1B1B]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Common <em>Questions</em>
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <FAQAccordion items={service.faqs} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
