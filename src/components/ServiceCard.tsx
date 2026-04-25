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
      className="surface-soft group flex h-full flex-col rounded-2xl p-8 border border-[#E6E1D3] transition-all duration-300 hover:!bg-[#0E3B3A] hover:border-[#0E3B3A] hover:shadow-lg hover:shadow-black/20 focus-visible:outline-none focus-visible:!bg-[#0E3B3A] focus-visible:border-[#0E3B3A] focus-visible:shadow-lg focus-visible:shadow-black/20 focus-visible:ring-2 focus-visible:ring-[#B6D5EA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F1EEE7]"
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0E3B3A]/12 text-[#0E3B3A] transition-colors group-hover:bg-white/20 group-hover:text-white group-focus-visible:bg-white/20 group-focus-visible:text-white">
        <ServiceIcon name={icon} className="w-6 h-6" />
      </div>
      <h3
        className="mb-3 text-xl font-semibold text-[#0E1B1B] transition-colors group-hover:text-white group-focus-visible:text-white"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {title}
      </h3>
      <p className="mb-4 flex-1 text-base leading-relaxed text-[#2F6E6B] transition-colors group-hover:text-[#B6D5EA] group-focus-visible:text-[#B6D5EA]">
        {description}
      </p>
      <span className="mt-auto inline-flex items-center gap-1 text-base font-medium text-[#0E3B3A] transition-all group-hover:gap-2 group-hover:text-white group-focus-visible:gap-2 group-focus-visible:text-white">
        Learn More
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </span>
    </Link>
  );
}
