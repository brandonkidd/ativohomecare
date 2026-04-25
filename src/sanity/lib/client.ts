import { createClient } from 'next-sanity';
import { hasValidSanityEnv, sanityEnv } from '@/sanity/env';

export const sanityClient = createClient({
  projectId: sanityEnv.projectId || 'missing-project-id',
  dataset: sanityEnv.dataset || 'missing-dataset',
  apiVersion: sanityEnv.apiVersion,
  useCdn: true,
  perspective: 'published',
});

export async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  if (!hasValidSanityEnv) return null;
  return sanityClient.fetch<T>(query, params);
}
