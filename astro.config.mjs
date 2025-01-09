// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: "https://astro-test-whr.netlify.app",
  adapter: netlify(),
  // Add RSS feed configuration here
  // ...
});

