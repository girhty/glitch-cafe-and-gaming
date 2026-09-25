/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        glitch: {
          purple: '#8b5cf6',
          neon: '#22d3ee',
          dark: '#0f172a',
          darker: '#020617',
          accent: '#f59e0b'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      }
    }
  },
  plugins: [],
};