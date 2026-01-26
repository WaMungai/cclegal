import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Legal Insights',

  projectId: process.env.REACT_APP_SANITY_PROJECT_ID, //'3ung6nv4',
  dataset: process.env.REACT_APP_SANITY_DATASET || "production",//'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
