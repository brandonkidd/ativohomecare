'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  children?: FAQItem[];
}

interface FAQAccordionProps {
  items: FAQItem[];
  id?: string;
  level?: number;
}

export default function FAQAccordion({ items, id, level = 0 }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div id={id} className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="surface-soft border border-[#E6E1D3] rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className={`w-full flex items-center justify-between text-left ${
              level === 0 ? 'px-6 py-5' : 'px-4 py-4'
            }`}
          >
            <span
              className={`font-medium text-[#0E1B1B] pr-4 ${
                level === 0 ? 'text-base' : 'text-sm'
              }`}
            >
              {item.question}
            </span>
            <svg
              className={`w-5 h-5 text-[#2F6E6B] shrink-0 transition-transform duration-300 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <div
            className={`faq-content ${openIndex === i ? 'open' : ''}`}
          >
            <div className={`${level === 0 ? 'px-6 pb-5' : 'px-4 pb-4'} text-[#2F6E6B] text-sm leading-relaxed`}>
              {item.answer}
              {!!item.children?.length && (
                <div className="mt-4 border-l border-[#D9D4C8] pl-4">
                  <FAQAccordion items={item.children} level={level + 1} />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
