import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
<<<<<<< HEAD

export default defineConfig({
  base: "/Portfolio/", // This MUST match your repository name exactly
  plugins: [react()],
=======
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
>>>>>>> 9c5430c401b76e10855e4af019a397b305c0a367
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
<<<<<<< HEAD
});
=======
}));
>>>>>>> 9c5430c401b76e10855e4af019a397b305c0a367
