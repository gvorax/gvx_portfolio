import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'r2z7sna4',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token:
    'skekDPtCehddmQ8yPQhVNXM4vdV5Gi2P6PHHisvTNvjQYwy6Pj5PVf2n5SUSzSn6QchvNkogcrXpxg603XjrEj64A9NdOV0WX8TqqHVxaDt3vHNRpWf3d0qHecBsEz0FOca5SeIjM6CtEnN3R5ut5xQHZ5eo3XtbdhkqA3NxiVMiblzVfNM4',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
