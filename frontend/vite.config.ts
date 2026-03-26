import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['LogoGlobus.png', 'vite.svg'],
      manifest: {
        name: 'Globus Engineering ERP',
        short_name: 'Globus ERP',
        description: 'Plateforme Collaborative 3-en-1 Globus Engineering',
        theme_color: '#1D4ED8',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'LogoGlobus.png',
            sizes: '192x192 512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})
