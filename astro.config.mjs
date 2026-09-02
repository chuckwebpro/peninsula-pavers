import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

const EXCLUDED_FROM_SITEMAP = ['/thank-you/', '/styleguide/'];

// https://astro.build/config
export default defineConfig({
  site: 'https://peninsulapavers.com',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  redirects: {
    '/about-us': '/about/',
    '/traverse-city-custom-walkways': '/services/walkways/',
    '/traverse-city-landscaping': '/services/landscaping/',
  },
  integrations: [
    mdx(),
    icon(),
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        return !EXCLUDED_FROM_SITEMAP.some((excluded) => path.startsWith(excluded));
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
