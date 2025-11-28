// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react' 
// import tailwindcss from '@tailwindcss/vite'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss()
//   ],

//    server: {
//     hmr: {
//       overlay: false
//     }
//   }
// })

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react' 
// import tailwindcss from 'tailwindcss' // kept third import; works via postcss.config.js

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react() // Tailwind does not need to be listed here
//   ],

//   server: {
//     hmr: {
//       overlay: false
//     }
//   }
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' 
import tailwindcss from 'tailwindcss' // kept third import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react() // Tailwind does not need to be listed here
  ],

  server: {
    hmr: {
      overlay: false
    }
  },

  build: {
    chunkSizeWarningLimit: 1000, // increase warning limit
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split node_modules into a separate vendor chunk
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    }
  }
})
