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
          className="group overflow-hidden rounded-xl border border-[#E6E1D3] bg-white/90 shadow-[0_8px_24px_-20px_rgba(0,29,31,0.45)] backdrop-blur-[2px] transition-colors duration-300 hover:bg-[#0E3B3A] hover:border-[#0E3B3A] focus-within:bg-[#0E3B3A] focus-within:border-[#0E3B3A]"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className={`w-full flex items-center justify-between text-left ${
              level === 0 ? 'px-6 py-5' : 'px-4 py-4'
            }`}
          >
            <span
              className={`pr-4 font-medium text-[#0E1B1B] transition-colors group-hover:text-white group-focus-within:text-white ${
                level === 0 ? 'text-base' : 'text-sm'
              }`}
            >
              {item.question}
            </span>
            <svg
              className={`h-5 w-5 shrink-0 text-[#2F6E6B] transition-transform duration-300 group-hover:text-[#B6D5EA] group-focus-within:text-[#B6D5EA] ${
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
