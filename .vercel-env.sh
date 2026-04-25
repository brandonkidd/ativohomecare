#!/bin/bash
vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID preview <<< "jxjnh8b3"$'\n'
vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID development <<< "jxjnh8b3"$'\n'
vercel env add NEXT_PUBLIC_SANITY_DATASET production <<< "production"$'\n'
vercel env add NEXT_PUBLIC_SANITY_DATASET preview <<< "production"$'\n'
vercel env add NEXT_PUBLIC_SANITY_DATASET development <<< "production"$'\n'
vercel env add NEXT_PUBLIC_SANITY_API_VERSION production <<< "2025-01-01"$'\n'
vercel env add NEXT_PUBLIC_SANITY_API_VERSION preview <<< "2025-01-01"$'\n'
vercel env add NEXT_PUBLIC_SANITY_API_VERSION development <<< "2025-01-01"$'\n'
