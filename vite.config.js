import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/SignTime-Website-Proj/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  server: {
    port: 3001,
    strictPort: false,
    open: false
  }
})


