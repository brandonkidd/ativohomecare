import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

export default function CTASection() {
  return (
    <section className="bg-[#0E1B1B] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Ready to Get <em>Started?</em>
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              Every family&apos;s situation is different. Let&apos;s talk about yours. A
              free consultation takes 20 minutes and gives you a clear path
              forward.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0E3B3A] hover:bg-[#2F6E6B] px-8 py-4 text-white font-medium transition-all duration-300"
              >
                Get a Free Consultation
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="tel:+17143074911"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 hover:border-white/40 px-8 py-4 text-white font-medium transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                714-307-4911
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
