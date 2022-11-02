import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "http://github-kenechvkwv.github.io/UsingVite/",
  plugins: [react()],
});
