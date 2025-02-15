// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

import preact from '@astrojs/preact';

import alpinejs from '@astrojs/alpinejs';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: "https://astro-test-whr.netlify.app",

  // Add RSS feed configuration here
  // ...
  adapter: netlify(),

  integrations: [preact(), alpinejs(), tailwind()]

});