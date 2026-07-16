import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuración estándar de Vite para React.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:3000",
      "/img": "http://localhost:3000",
    },
  },
});
