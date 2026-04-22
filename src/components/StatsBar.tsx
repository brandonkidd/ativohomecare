import ScrollReveal from './ScrollReveal';

const stats = [
  { value: '20+', label: 'Years Experience', rating: false },
  { value: '500+', label: 'Seniors Served', rating: false },
  { value: '50+', label: 'Expert Caregivers', rating: false },
  { value: '4.9', label: 'Family Rating', rating: true },
];

export default function StatsBar() {
  return (
    <section className="bg-[#0E3B3A] py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="inline-flex items-center gap-1 text-3xl sm:text-4xl font-semibold text-white"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {stat.value}
                  {stat.rating && (
                    <svg
                      className="-translate-y-px w-6 h-6 text-amber-300 drop-shadow-[0_1px_1px_rgba(120,53,15,0.45)]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M11.48 3.5a.56.56 0 0 1 1.04 0l2.07 5.14a.56.56 0 0 0 .47.34l5.57.41c.5.04.7.66.31.96l-4.29 3.66a.56.56 0 0 0-.19.56l1.35 5.4c.12.48-.4.86-.83.6l-4.75-2.98a.56.56 0 0 0-.6 0L7.08 20.57c-.42.26-.95-.12-.83-.6l1.35-5.4a.56.56 0 0 0-.2-.56L3.11 10.35c-.39-.3-.19-.92.31-.96L9 8.98a.56.56 0 0 0 .47-.34L11.48 3.5Z" />
                    </svg>
                  )}
                </div>
                <div className="text-sm text-white/70 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
