import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import { fileURLToPath } from 'url' // Add this

const __filename = fileURLToPath(import.meta.url) // Add this
const __dirname = path.dirname(__filename)      // Add this

export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})