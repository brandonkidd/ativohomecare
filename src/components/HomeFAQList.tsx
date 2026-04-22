'use client';

import { useState } from 'react';

export interface HomeFaqItem {
  question: string;
  answer: string;
  children?: HomeFaqItem[];
}

export default function HomeFAQList({ items }: { items: HomeFaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openChildByParent, setOpenChildByParent] = useState<Record<number, number | null>>({});

  const toggleParent = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const toggleChild = (parentIndex: number, childIndex: number) => {
    setOpenChildByParent((prev) => ({
      ...prev,
      [parentIndex]: prev[parentIndex] === childIndex ? null : childIndex,
    }));
  };

  return (
    <div className="divide-y divide-[#D9D4C8] border-y border-[#D9D4C8]">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <article
            key={item.question}
            className="py-8 sm:py-9 grid grid-cols-1 sm:grid-cols-[40px_1fr] gap-4 sm:gap-6"
          >
            <span
              className="mt-2 inline-flex h-3 w-3 rounded-full bg-[#0E3B3A]"
              aria-hidden
            />
            <div>
              <button
                type="button"
                onClick={() => toggleParent(i)}
                className="w-full text-left flex items-start justify-between gap-4"
                aria-expanded={isOpen}
              >
                <h3 className="text-3xl sm:text-4xl text-[#0E1B1B] font-medium">
                  {item.question}
                </h3>
                <span
                  className={`mt-2 shrink-0 text-[#2F6E6B] transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 8l5 5 5-5" />
                  </svg>
                </span>
              </button>

              {isOpen && (
                <div className="mt-4">
                  <p className="text-lg sm:text-xl text-[#2F6E6B] leading-relaxed">
                    {item.answer}
                  </p>

                  {!!item.children?.length && (
                    <div className="mt-6 space-y-4 border-l border-[#D9D4C8] pl-4 sm:pl-5">
                      {item.children.map((child, childIndex) => {
                        const isChildOpen = openChildByParent[i] === childIndex;
                        return (
                          <div key={`${item.question}-${child.question}-${childIndex}`}>
                            <button
                              type="button"
                              onClick={() => toggleChild(i, childIndex)}
                              className="w-full text-left flex items-start justify-between gap-4"
                              aria-expanded={isChildOpen}
                            >
                              <div className="flex items-start gap-3">
                                <span
                                  className="mt-2 inline-flex h-2 w-2 rounded-full bg-[#2F6E6B]"
                                  aria-hidden
                                />
                                <h4 className="text-xl sm:text-2xl text-[#0E1B1B] font-medium">
                                  {child.question}
                                </h4>
                              </div>
                              <span
                                className={`mt-2 shrink-0 text-[#2F6E6B] transition-transform duration-300 ${
                                  isChildOpen ? 'rotate-180' : ''
                                }`}
                                aria-hidden
                              >
                                <svg
                                  className="h-4 w-4"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 8l5 5 5-5" />
                                </svg>
                              </span>
                            </button>

                            {isChildOpen && (
                              <p className="mt-2 pl-5 text-base sm:text-lg text-[#2F6E6B] leading-relaxed">
                                {child.answer}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
