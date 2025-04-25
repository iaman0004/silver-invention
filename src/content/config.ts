import { defineCollection, z } from 'astro:content';

const aboutCollection = defineCollection({
  type: 'content',
  schema: z.object({
    introName: z.string(),
    tagline: z.string(),
  })
})

const contactCollection = defineCollection({
  type: 'content',
  schema: z.object({
    "contact.header": z.string(),
    "contact.subheader": z.string(),
  })
});

export const collections = {
  'about': aboutCollection,
  'contact': contactCollection
};
