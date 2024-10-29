import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path"; // Import the path module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/vite-deploy",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});