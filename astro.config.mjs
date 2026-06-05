// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import critters from 'astro-critters';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sales.appointext.ai',
  integrations: [sitemap(), critters()],
  vite: {
    plugins: [tailwindcss()]
  }
});
