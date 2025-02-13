import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 500, // Optional: Suppress warnings
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("gsap")) return "gsap"; // Separate GSAP
            if (id.includes("react")) return "react"; // Separate React
            return "vendor"; // Other node_modules
          }
        },
      },
    },
  },
});
