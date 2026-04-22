import type { SVGProps } from 'react';

export type ServiceIconName =
  | 'heart'
  | 'hands'
  | 'brain'
  | 'leaf'
  | 'home'
  | 'sparkles'
  | 'car';

interface ServiceIconProps extends SVGProps<SVGSVGElement> {
  name: ServiceIconName;
}

/**
 * Line-drawn SVG icons used across service cards and detail pages.
 * Replaces emoji usage per brand guidelines.
 */
export default function ServiceIcon({
  name,
  className = 'w-8 h-8',
  ...rest
}: ServiceIconProps) {
  const common = {
    fill: 'none' as const,
    viewBox: '0 0 24 24',
    strokeWidth: 1.5,
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
    ...rest,
  };

  switch (name) {
    // Companion Care — heart
    case 'heart':
      return (
        <svg {...common}>
          <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      );

    // Personal Care — helping hands / holding hand
    case 'hands':
      return (
        <svg {...common}>
          <path d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v8.25a.75.75 0 0 0 .75.75H9M7.5 7.5V6A2.25 2.25 0 0 1 9.75 3.75h4.5A2.25 2.25 0 0 1 16.5 6v1.5M7.5 7.5h9M16.5 7.5h.75a2.25 2.25 0 0 1 2.25 2.25V18a.75.75 0 0 1-.75.75H15M9 18.75h6" />
          <path d="M10.5 12h3M10.5 15h3" />
        </svg>
      );

    // Memory Care — brain / mind
    case 'brain':
      return (
        <svg {...common}>
          <path d="M9.75 3.75a3 3 0 0 0-3 3v.375A2.625 2.625 0 0 0 4.125 9.75 2.625 2.625 0 0 0 3 12a2.625 2.625 0 0 0 1.125 2.156 2.625 2.625 0 0 0 .75 4.547A3 3 0 0 0 9.75 20.25V3.75ZM14.25 3.75a3 3 0 0 1 3 3v.375a2.625 2.625 0 0 1 2.625 2.625A2.625 2.625 0 0 1 21 12a2.625 2.625 0 0 1-1.125 2.156 2.625 2.625 0 0 1-.75 4.547 3 3 0 0 1-4.875 1.547V3.75Z" />
        </svg>
      );

    // Respite Care — leaf (rest / nature)
    case 'leaf':
      return (
        <svg {...common}>
          <path d="M3.75 20.25c0-7.458 6.042-13.5 13.5-13.5h3v3c0 7.458-6.042 13.5-13.5 13.5h-3v-3Z" />
          <path d="M3.75 20.25 17.25 6.75" />
        </svg>
      );

    // Transition Care — home
    case 'home':
      return (
        <svg {...common}>
          <path d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
        </svg>
      );

    // Home Support — sparkles / shine
    case 'sparkles':
      return (
        <svg {...common}>
          <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18 3.75l.5 1.75L20.25 6l-1.75.5L18 8.25l-.5-1.75L15.75 6l1.75-.5L18 3.75ZM18 15.75l.5 1.75 1.75.5-1.75.5-.5 1.75-.5-1.75-1.75-.5 1.75-.5.5-1.75Z" />
        </svg>
      );

    // Transportation — car
    case 'car':
      return (
        <svg {...common}>
          <path d="M3.75 13.5h16.5M5.25 13.5V9.75c0-.414.336-.75.75-.75h12c.414 0 .75.336.75.75v3.75M5.25 13.5v3.75c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V16.5M15.75 18v-1.5h2.25a.75.75 0 0 0 .75-.75V13.5M7.5 9V7.5A1.5 1.5 0 0 1 9 6h6a1.5 1.5 0 0 1 1.5 1.5V9" />
          <circle cx="7.5" cy="16.5" r="0.75" fill="currentColor" />
          <circle cx="16.5" cy="16.5" r="0.75" fill="currentColor" />
        </svg>
      );
  }
}
