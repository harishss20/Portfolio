import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/", // Replace "Portfolio" with the exact name of your GitHub repository
});
