'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

type CommunityMapPoint = {
  id: string;
  name: string;
  city: string;
  zone: 'south' | 'north';
  x: number;
  y: number;
  detail: string;
};

type CityRegion = {
  name: string;
  path: string;
  zone: 'south' | 'north';
  labelX: number;
  labelY: number;
};

const cityRegions: CityRegion[] = [
  {
    name: 'Buckeye',
    path: 'M96 150 L322 132 L352 188 L330 272 L210 302 L122 258 Z',
    zone: 'south',
    labelX: 210,
    labelY: 206,
  },
  {
    name: 'Goodyear',
    path: 'M352 188 L502 176 L548 236 L500 306 L330 272 Z',
    zone: 'south',
    labelX: 442,
    labelY: 238,
  },
  {
    name: 'Litchfield Park',
    path: 'M500 306 L550 290 L586 322 L538 360 L486 342 Z',
    zone: 'south',
    labelX: 538,
    labelY: 327,
  },
  {
    name: 'Peoria',
    path: 'M548 236 L704 220 L750 286 L674 356 L586 322 L550 290 Z',
    zone: 'north',
    labelX: 652,
    labelY: 281,
  },
  {
    name: 'Surprise',
    path: 'M210 302 L330 272 L500 306 L486 342 L418 414 L282 438 L194 396 Z',
    zone: 'north',
    labelX: 342,
    labelY: 362,
  },
];

const zoneFilters = [
  { key: 'all' as const, label: 'All Zones' },
  { key: 'south' as const, label: 'South Zone' },
  { key: 'north' as const, label: 'North Zone' },
];

const mapPoints: CommunityMapPoint[] = [
  { id: 'sun-city-festival', name: 'Sun City Festival', city: 'Buckeye', zone: 'south', x: 20, y: 33, detail: 'Buckeye - 55+ Community' },
  { id: 'pebblecreek', name: 'PebbleCreek', city: 'Goodyear', zone: 'south', x: 40, y: 45, detail: 'Goodyear - 55+ Community' },
  { id: 'victory-at-verrado', name: 'Victory at Verrado', city: 'Buckeye', zone: 'south', x: 44, y: 29, detail: 'Buckeye - 55+ Community' },
  { id: 'sundance', name: 'Sundance', city: 'Buckeye', zone: 'south', x: 20, y: 53, detail: 'Buckeye - Master-planned' },
  { id: 'cantamia', name: 'CantaMia', city: 'Goodyear', zone: 'south', x: 52, y: 41, detail: 'Goodyear - 55+ Community' },
  { id: 'litchfield-park', name: 'Litchfield Park', city: 'Litchfield Park', zone: 'south', x: 59, y: 49, detail: 'Litchfield Park - City service area' },
  { id: 'arizona-traditions', name: 'Arizona Traditions', city: 'Surprise', zone: 'north', x: 33, y: 62, detail: 'Surprise - 55+ Community' },
  { id: 'the-grand', name: 'The Grand', city: 'Surprise', zone: 'north', x: 66, y: 38, detail: 'Surprise - Active adult community' },
  { id: 'sun-city', name: 'Sun City', city: 'Peoria', zone: 'north', x: 72, y: 62, detail: 'Peoria area - Adjacent coverage' },
];

const zoneGroups = [
  {
    key: 'south',
    heading: 'South Zone (Buckeye-Goodyear-Litchfield Park)',
    items: [
      { label: 'Buckeye', href: '/locations#buckeye', status: 'Actively serving', future: false },
      { label: 'Goodyear', href: '/locations#goodyear', status: 'Actively serving', future: false },
      { label: 'Litchfield Park', href: '/locations', status: 'Actively serving', future: false },
    ],
  },
  {
    key: 'north',
    heading: 'North Zone (Surprise-Peoria)',
    items: [
      { label: 'Surprise', href: '/locations#surprise', status: 'Actively serving', future: false },
      { label: 'Peoria', href: '/locations', status: 'Actively serving', future: false },
      { label: 'Glendale', href: '/locations', status: 'Adjacent - Future Service?', future: true },
    ],
  },
];

export default function AreaServiceMap() {
  const [activeZone, setActiveZone] = useState<'all' | 'south' | 'north'>('all');
  const [activeCommunity, setActiveCommunity] = useState(mapPoints[1].id);

  const filteredPoints = useMemo(
    () => mapPoints.filter((point) => activeZone === 'all' || point.zone === activeZone),
    [activeZone],
  );

  const activePoint = useMemo(
    () => filteredPoints.find((point) => point.id === activeCommunity) ?? filteredPoints[0] ?? mapPoints[0],
    [activeCommunity, filteredPoints],
  );

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        <div className="surface-soft rounded-3xl border border-[#E6E1D3] p-4 sm:p-5 lg:col-span-8">
          <div className="relative aspect-[16/11] rounded-2xl bg-[#ECE6DC] border border-[#DAD2C5] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_15%,rgba(185,212,207,.5),transparent_52%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_72%,rgba(170,206,198,.46),transparent_55%)]" />
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(126,145,145,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(126,145,145,.25)_1px,transparent_1px)] [background-size:44px_44px]" />
            <div className="absolute inset-x-5 top-4 z-20 flex justify-between text-[10px] sm:text-xs font-semibold text-[#0E3B3A]/80 uppercase tracking-[0.2em]">
              <span>West Valley</span>
              <span>Arizona</span>
            </div>

            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 860 520"
              role="img"
              aria-label="Map of Ativo service coverage in the West Valley"
            >
              <path
                d="M78 122 L322 102 L710 124 L804 218 L774 356 L636 438 L248 460 L110 388 L70 236 Z"
                fill="#CFE1DB"
                fillOpacity="0.75"
                stroke="#BDD1CB"
                strokeWidth="2"
              />

              {cityRegions.map((region) => {
                const regionActive = activeZone === 'all' || region.zone === activeZone;
                const regionColor = region.zone === 'south' ? '#76A5A7' : '#C8D8E7';
                return (
                  <g key={region.name}>
                    <path
                      d={region.path}
                      fill={regionColor}
                      fillOpacity={regionActive ? 0.68 : 0.32}
                      stroke={regionActive ? '#5E7E80' : '#AFC3BE'}
                      strokeWidth={regionActive ? 2.1 : 1.3}
                    />
                    <text
                      x={region.labelX}
                      y={region.labelY}
                      textAnchor="middle"
                      className="fill-[#1A4040] text-[11px] font-semibold tracking-[0.08em] uppercase"
                      opacity={regionActive ? 0.95 : 0.52}
                    >
                      {region.name}
                    </text>
                  </g>
                );
              })}
            </svg>

            {mapPoints.map((point) => {
              const inFilter = activeZone === 'all' || point.zone === activeZone;
              const isActive = activePoint.id === point.id;
              return (
                <button
                  key={point.id}
                  type="button"
                  onMouseEnter={() => setActiveCommunity(point.id)}
                  onFocus={() => setActiveCommunity(point.id)}
                  onClick={() => setActiveCommunity(point.id)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 text-left"
                  style={{ left: `${point.x}%`, top: `${point.y}%` }}
                  aria-label={`${point.name} in ${point.city}`}
                  aria-pressed={isActive}
                >
                  <span
                    className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] sm:text-xs font-medium shadow-sm transition ${
                      isActive
                        ? 'bg-[#0E3B3A] border-[#0E3B3A] text-white'
                        : 'bg-white/95 border-[#D7D0C4] text-[#0E3B3A]'
                    } ${inFilter ? 'opacity-100' : 'opacity-40'}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-[#0E3B3A]'}`} />
                    {point.name}
                  </span>
                </button>
              );
            })}

            <div className="absolute top-12 right-8 z-30 hidden sm:block rounded-xl bg-white/94 border border-[#D8D1C6] shadow-sm px-4 py-3 max-w-[250px]">
              <p className="text-sm font-semibold text-[#0E1B1B]">
                {activePoint.city}, Active Communities:
              </p>
              <p className="text-sm text-[#2F6E6B]">{filteredPoints.filter((point) => point.city === activePoint.city).map((point) => point.name).slice(0, 2).join(', ')}</p>
            </div>

            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/92 border border-[#D8D1C6] px-4 py-3 z-20">
              <p className="text-3xl font-medium text-[#0E1B1B]" style={{ fontFamily: 'var(--font-serif)' }}>
                {activePoint.name}
              </p>
              <p className="text-[#2F6E6B]">{activePoint.detail}</p>
            </div>
          </div>
        </div>

        <div className="surface-soft rounded-3xl border border-[#E6E1D3] p-6 sm:p-8 lg:col-span-4">
          <h3
            className="text-4xl font-medium text-[#0E1B1B] mb-5 leading-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Curated Service Zones
          </h3>

          <div className="flex flex-wrap gap-2 mb-6">
            {zoneFilters.map((filter) => {
              const selected = activeZone === filter.key;
              return (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => setActiveZone(filter.key)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold tracking-[0.08em] uppercase transition ${
                    selected
                      ? 'bg-[#D0E0DA] border-[#C2D3CD] text-[#0E3B3A]'
                      : 'bg-white border-[#E0D9CB] text-[#5A6D6A] hover:bg-[#F6F3EE]'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <div className="space-y-6">
            {zoneGroups
              .filter((group) => activeZone === 'all' || group.key === activeZone)
              .map((group) => (
                <div key={group.key}>
                  <p className="text-[#0E1B1B] font-semibold mb-3 uppercase tracking-[0.02em]">
                    {group.heading}
                  </p>
                  <ul className="space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item.label} className="flex items-start gap-3">
                        <span
                          className={`mt-2 h-2 w-2 rounded-full ${item.future ? 'bg-[#D6D1C7]' : 'bg-[#4A7D6D]'}`}
                          aria-hidden
                        />
                        <p className={`text-lg leading-tight ${item.future ? 'text-[#8A8A84]' : 'text-[#0E1B1B]'}`}>
                          {item.label} -{' '}
                          <Link
                            href={item.href}
                            className={`underline underline-offset-2 ${
                              item.future ? 'text-[#7D7A73] hover:text-[#59564F]' : 'text-[#3E6E65] hover:text-[#0E3B3A]'
                            }`}
                          >
                            {item.status}
                          </Link>
                          {item.future && (
                            <>
                              {' '}
                              <Link href="/locations" className="underline text-[#59564F] hover:text-[#0E3B3A]">
                                learn more
                              </Link>
                            </>
                          )}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>

          <div className="rounded-2xl border border-[#E0D9CC] bg-white/80 p-4 mt-8">
            <p className="text-xs tracking-[0.2em] uppercase text-[#0E3B3A] mb-2">
              Highlighted Community
            </p>
            <p className="text-3xl font-medium text-[#0E1B1B]" style={{ fontFamily: 'var(--font-serif)' }}>
              {activePoint.name}
            </p>
            <p className="text-[#2F6E6B]">{activePoint.city}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
