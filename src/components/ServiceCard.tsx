import Link from 'next/link';
import ServiceIcon, { type ServiceIconName } from './ServiceIcon';

interface ServiceCardProps {
  slug: string;
  icon: ServiceIconName;
  title: string;
  description: string;
}

export default function ServiceCard({ slug, icon, title, description }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className="surface-soft group flex h-full flex-col rounded-2xl p-8 border border-[#E6E1D3] hover:border-[#B9D4CF]/40 hover:shadow-lg hover:shadow-teal-900/5 transition-all duration-300"
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0E3B3A]/12 text-[#0E3B3A] group-hover:bg-[#0E3B3A]/18 transition-colors">
        <ServiceIcon name={icon} className="w-6 h-6" />
      </div>
      <h3
        className="text-xl font-semibold text-[#0E1B1B] mb-3 group-hover:text-[#0E3B3A] transition-colors"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {title}
      </h3>
      <p className="text-[#2F6E6B] text-base leading-relaxed mb-4 flex-1">
        {description}
      </p>
      <span className="mt-auto inline-flex items-center gap-1 text-base font-medium text-[#0E3B3A] group-hover:gap-2 transition-all">
        Learn More
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </span>
    </Link>
  );
}
