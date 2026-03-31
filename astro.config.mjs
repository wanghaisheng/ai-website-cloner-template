import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  output: 'static',
  build: {
    format: 'directory'
  },
  vite: {
    ssr: {
      noExternal: ['@base-ui/react']
    }
  }
});
