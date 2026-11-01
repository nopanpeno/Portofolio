import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Base path untuk GitHub Pages: https://nopanpeno.github.io/Portofolio/
export default defineConfig({
  plugins: [react()],
  base: "/Portofolio/",
});
