import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'Bloque',
        short_name: 'Bloque',
        description: 'Bloque is a fishing game',
        theme_color: '#ffffff',
        icons: [
          {
            src: './images/bloque-app-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './images/bloque-app-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        screenshots: [
          {
            src: './images/desktop-ss-leader-board-1280x691.png',
            sizes: '1280x691',
            type: 'image/png',
            form_factor: 'wide',
            label: 'Leaderboard view',
          },
          {
            src: './images/mobile-ss-leader-board-430x927.png',
            sizes: '430x927',
            type: 'image/png',
            form_factor: 'narrow',
            platform: 'both',
            label: 'Mobile Leaderboard view',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,jpeg,webp,svg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api-game\.bloque\.app\/game(\/.*)?$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'game-api-cache',
              networkTimeoutSeconds: 10,
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
