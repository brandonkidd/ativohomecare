const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01';

export const sanityEnv = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  apiVersion,
  studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || '/studio',
};

export const hasValidSanityEnv = Boolean(sanityEnv.projectId && sanityEnv.dataset);
