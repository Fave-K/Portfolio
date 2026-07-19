// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { FontaineTransform } from 'fontaine';

// https://astro.build/config
export default defineConfig({
  site: 'https://favourkarani.com',
  integrations: [sitemap()],
  vite: {
    plugins: [
      FontaineTransform.vite({
        fallbacks: {},
      }),
    ],
  },
});
