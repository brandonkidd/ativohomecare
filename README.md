# Ativo Home Care Site

This is a Next.js app with Sanity CMS powering blog content.

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` from `.env.example` and fill in Sanity values.

3. Start the app:

```bash
npm run dev
```

The website runs at [http://localhost:3001](http://localhost:3001).

## Sanity Setup

1. Create a Sanity project (or use an existing one).
2. Add the following environment variables to `.env.local`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
NEXT_PUBLIC_SANITY_STUDIO_URL=/studio
```

3. Open Studio in the app at [http://localhost:3001/studio](http://localhost:3001/studio).
4. Create and publish a `Blog Post`.

## Blog Architecture

- Blog index route: `src/app/blog/page.tsx`
- Blog detail route: `src/app/blog/[slug]/page.tsx`
- Content fetch layer: `src/lib/blog.ts`
- Sanity schema: `src/sanity/schemaTypes/postType.ts`

The app includes a fallback to local hardcoded posts if Sanity environment variables are missing, so the site still renders during setup.

## SEO and LLM Retrieval

The Sanity `Blog Post` schema supports:

- Per-post title, slug, excerpt, category, publish date, and read time
- Dedicated SEO meta description field
- Rich body content (headings, lists, images, links)
- FAQ entries rendered as `FAQPage` JSON-LD on the article page

This structure improves indexability for both search engines and LLM-based retrieval systems.
