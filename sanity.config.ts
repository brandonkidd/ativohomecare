import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schema } from '@/sanity/schemaTypes';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  name: 'default',
  title: 'Ativo Content Studio',
  projectId: projectId || 'missing-project-id',
  dataset: dataset || 'missing-dataset',
  basePath: '/ahcadmin',
  plugins: [structureTool(), visionTool()],
  schema,
});
