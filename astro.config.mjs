// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ks4l-satellite-site.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
