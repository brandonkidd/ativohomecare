import type { PortableTextBlock } from '@portabletext/types';

export type SanityImage = {
  alt?: string;
  asset?: {
    _ref?: string;
    _type?: string;
  };
};

export type SanityFaqItem = {
  question: string;
  answer: string;
};

export type SanityPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  category?: string;
  readTime?: string;
  publishedAt?: string;
  seoDescription?: string;
  mainImage?: SanityImage;
  body?: PortableTextBlock[];
  faq?: SanityFaqItem[];
};
