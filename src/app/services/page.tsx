import { createMetadata } from '@/lib/metadata';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';
import { services } from '@/lib/services';

export const metadata = createMetadata({
  title: 'In-Home Care Services | Ativo Home Care',
  description:
    'Seven specialized in-home care services for seniors in Buckeye, Goodyear, Surprise, and the West Valley. Companion care, personal care, memory care, respite, and more.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#F1EEE7]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-[#0E3B3A] font-medium mb-4">
            Our Services
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0E1B1B] mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Seven Ways We Help Families
            <br />
            Stay <em>Together</em>
          </h1>
          <p className="text-lg text-[#2F6E6B] max-w-2xl mx-auto leading-relaxed">
            Every family&apos;s needs are different. That&apos;s why we offer a range of
            services that can be combined, adjusted, and scaled as your situation
            evolves. No packages, no bundles, no one-size-fits-all.
          </p>
        </div>
      </section>

      {/* Service Grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 80} className="h-full">
                <ServiceCard
                  slug={service.slug}
                  icon={service.icon}
                  title={service.title}
                  description={service.shortDescription}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
