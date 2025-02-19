import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["react-router-dom"]
  },
  plugins: [react()],
})





// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   base: "/",  // set the base patth
//   optimizeDeps: {
//     include: ["react-router-dom"]
//   },
//   plugins: [react()],
// })
