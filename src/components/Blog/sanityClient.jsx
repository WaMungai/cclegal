import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "3ung6nv4",  
  dataset: "production",     
  apiVersion: "2023-10-01",     
  useCdn: true,                 
});

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source) => builder.image(source);
