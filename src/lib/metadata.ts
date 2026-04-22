import type { Metadata } from 'next';

const BASE_URL = 'https://ativohomecare.com';

export function createMetadata(overrides: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${BASE_URL}${overrides.path || ''}`;
  return {
    title: overrides.title,
    description: overrides.description,
    openGraph: {
      title: overrides.title,
      description: overrides.description,
      url,
      siteName: 'Ativo Home Care',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: overrides.title,
      description: overrides.description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export const siteMetadata: Metadata = {
  title: {
    default: 'Ativo Home Care | Premium In-Home Senior Care in Buckeye & West Valley, AZ',
    template: '%s | Ativo Home Care',
  },
  description: 'Premium in-home care for Buckeye, Goodyear, Surprise, and the West Valley. Connected to the senior living communities you trust. Companion care, personal care, memory care support, and more.',
  metadataBase: new URL(BASE_URL),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Ativo Home Care',
  },
};
