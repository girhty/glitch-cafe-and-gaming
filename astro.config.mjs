import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/glitch-cafe-and-gaming/',
  output: 'static',
  integrations: [tailwind()],
  site: 'https://glitch-cafe-and-gaming.example.com'
});