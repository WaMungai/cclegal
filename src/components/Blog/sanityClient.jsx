// sanityClient.js
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Create the Sanity client
export const client = createClient({
  projectId:  process.env.REACT_APP_SANITY_PROJECT_ID, //'3ung6nv4',
  dataset:  process.env.REACT_APP_SANITY_DATASET || "production",//'production',
  apiVersion: "2023-10-01",
  useCdn: true,
})

console.log("Sanity projectId:", process.env.REACT_APP_SANITY_PROJECT_ID);
console.log("Sanity dataset:", process.env.REACT_APP_SANITY_DATASET);

// Optional: helper to generate image URLs
const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)






