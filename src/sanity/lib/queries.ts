import groq from 'groq';

export const postCardFields = groq`
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  readTime,
  "publishedAt": coalesce(publishedAt, _createdAt),
  seoDescription,
  mainImage {
    alt,
    asset
  }
`;

export const postListQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc) {
    ${postCardFields}
  }
`;

export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)].slug.current
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ${postCardFields},
    body,
    faq[] {
      question,
      answer
    }
  }
`;
