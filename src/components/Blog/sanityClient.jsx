// sanityClient.js
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Create the Sanity client
export const client = createClient({
  projectId: '3ung6nv4',   // replace with your actual projectId
  dataset: 'production',
  apiVersion: '2026-01-01',
  useCdn: true,
})

// Optional: helper to generate image URLs
const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)






