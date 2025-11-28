import { defineConfig } from 'vite' 
import react from '@vitejs/plugin-react' 
import tailwindcss from '@tailwindcss/vite' 
 
export default defineConfig({ 
  plugins: [react(), tailwindcss()], 
  server: { 
    hmr: { overlay: false } 
  }, 
  build: { 
    chunkSizeWarningLimit: 1000, 
    rollupOptions: { 
      output: { 
        manualChunks: { 
          vendor: ['react', 'react-dom', 'three', 'chart.js', 'firebase'] 
        } 
      } 
    } 
  } 
}) 
