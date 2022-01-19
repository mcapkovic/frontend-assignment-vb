import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        dimensions: false,
        svgo: true,
      }
    }),
  ],
  resolve: {
    alias: [
      { find: '@client', replacement: '/client' },
      { find: '@public', replacement: '/public' }, // because of vite-plugin-svgr
    ],
  },
})
