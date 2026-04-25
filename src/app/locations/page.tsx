import Link from 'next/link';
import { createMetadata } from '@/lib/metadata';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = createMetadata({
  title: 'Service Areas | In-Home Care in Buckeye, Goodyear, Surprise & West Valley',
  description:
    'Ativo Home Care serves Buckeye, Goodyear, Surprise, Avondale, and 55+ communities throughout the West Valley including Sun City Festival, PebbleCreek, and Victory at Verrado.',
  path: '/locations',
});

const cities = [
  {
    name: 'Buckeye',
    id: 'buckeye',
    description:
      'Our home base. We serve all of Buckeye including Verrado, Sundance, Tartesso, and the rapidly growing communities along the I-10 corridor. If you live in Buckeye, we are your neighbors.',
    communities: ['Victory at Verrado', 'Sundance', 'Tartesso', 'Festival Ranch'],
  },
  {
    name: 'Goodyear',
    id: 'goodyear',
    description:
      'From PebbleCreek to Canyon Trails, we serve Goodyear\'s diverse mix of established and new communities. Our caregivers know the area, the traffic patterns, and the local resources that matter.',
    communities: ['PebbleCreek', 'Canyon Trails', 'Palm Valley', 'Estrella'],
  },
  {
    name: 'Surprise',
    id: 'surprise',
    description:
      'Home to Sun City Grand and a thriving senior population. We serve all of Surprise including the original Sun City communities and newer developments in the northern corridor.',
    communities: ['Sun City Grand', 'Sun City Festival', 'Marley Park', 'Arizona Traditions'],
  },
  {
    name: 'Avondale',
    id: 'avondale',
    description:
      'Serving Avondale families with the same premium care available throughout the West Valley. Conveniently located between our core service areas with no distance-based surcharges.',
    communities: ['Garden Lakes', 'Coldwater Springs', 'Westwind'],
  },
];

const communities55Plus = [
  {
    name: 'Sun City Festival',
    id: 'sun-city-festival',
    location: 'Buckeye',
    description: 'Del Webb\'s premier 55+ community with over 7,000 homes and an active lifestyle program.',
  },
  {
    name: 'PebbleCreek',
    id: 'pebblecreek',
    location: 'Goodyear',
    description: 'Robson community with two golf courses, creative arts center, and resort-style amenities.',
  },
  {
    name: 'Victory at Verrado',
    id: 'victory-at-verrado',
    location: 'Buckeye',
    description: 'Master-planned community in the White Tank Mountain foothills with a vibrant town center.',
  },
  {
    name: 'Sundance',
    location: 'Buckeye',
    description: 'Family-friendly master-planned community with trails, parks, and community events.',
  },
  {
    name: 'CantaMia',
    location: 'Goodyear',
    description: 'Boutique 55+ community within Estrella Mountain Ranch with a focus on creative living.',
  },
  {
    name: 'Litchfield Park',
    location: 'Litchfield Park',
    description: 'Historic community with tree-lined streets and a small-town atmosphere near the Wigwam.',
  },
  {
    name: 'Arizona Traditions',
    location: 'Surprise',
    description: 'Active adult community with a focus on social clubs, fitness, and outdoor recreation.',
  },
  {
    name: 'The Grand',
    location: 'Surprise',
    description: 'Gated 55+ community known for its golf course, social events, and welcoming atmosphere.',
  },
];

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#F1EEE7]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-xs tracking-[0.25em] uppercase text-[#0E3B3A] font-medium mb-4">
              Service Areas
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0E1B1B] mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Serving the West Valley&apos;s
              <br />
              <em>Best Communities</em>
            </h1>
            <p className="text-lg text-[#2F6E6B] max-w-2xl mx-auto leading-relaxed">
              We provide in-home care across Buckeye, Goodyear, Surprise,
              Avondale, and the 55+ communities that make the West Valley one
              of the best places to retire in Arizona. Chances are, we are
              already caring for your neighbors.
            </p>
          </div>
        </div>
      </section>

      {/* Cities */}
      {cities.map((city, i) => {
        return (
        <section
          key={city.name}
          id={city.id}
          className="py-20 bg-white"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div>
                  <h2
                    className="text-3xl sm:text-4xl font-medium mb-6 text-[#0E1B1B]"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {city.name}
                  </h2>
                  <p className="leading-relaxed text-lg mb-6 text-[#2F6E6B]">
                    {city.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {city.communities.map((c) => (
                      <span
                        key={c}
                        className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-[#0E3B3A]/10 text-[#0E3B3A]"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div
                  className="aspect-[4/3] rounded-2xl bg-[#0E3B3A] flex items-center justify-center text-white/75 text-sm"
                >
                  Map / Image: {city.name} area
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )})}

      {/* 55+ Communities Grid */}
      <section className="bg-[#F1EEE7] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.25em] uppercase text-[#0E3B3A] font-medium mb-4">
                55+ Communities
              </p>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0E1B1B]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Communities We <em>Know Best</em>
              </h2>
              <p className="mt-4 text-[#2F6E6B] max-w-xl mx-auto">
                We have built deep relationships with these communities. Our
                caregivers understand their culture, their resources, and the
                people who call them home.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communities55Plus.map((c, i) => (
              <ScrollReveal key={c.name} delay={i * 60}>
                <div id={c.id} className="bg-white rounded-2xl p-6 border border-[#E6E1D3] hover:border-[#B9D4CF]/40 hover:shadow-sm transition-all h-full">
                  <div className="w-10 h-10 rounded-full bg-[#0E3B3A]/10 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-[#0E3B3A]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                  </div>
                  <h3
                    className="text-lg font-semibold text-[#0E1B1B] mb-1"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {c.name}
                  </h3>
                  <p className="text-xs text-[#0E3B3A] font-medium mb-2">
                    {c.location}
                  </p>
                  <p className="text-sm text-[#2F6E6B] leading-relaxed">
                    {c.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Not in the List? */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2
              className="text-3xl sm:text-4xl font-medium text-[#0E1B1B] mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Don&apos;t See Your <em>Community?</em>
            </h2>
            <p className="text-[#2F6E6B] text-lg max-w-xl mx-auto mb-8">
              We serve the entire West Valley. If your community is not listed
              here, call us. We likely serve your area and just have not added
              it to the website yet.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#0E3B3A] hover:bg-[#2F6E6B] px-8 py-4 text-white font-medium transition-all duration-300"
            >
              Check Your Area
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
