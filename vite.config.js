import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'spline-vendor': ['@splinetool/react-spline', '@splinetool/runtime'],
          'framer-motion': ['framer-motion'],
          'vendor': ['react', 'react-dom', 'lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 1500,
  },
})

