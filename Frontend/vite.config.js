import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Expose to all network interfaces
    port: 3000, // or whichever port you are using
    open: false, // Optionally disable auto-opening the browser
  },
})
