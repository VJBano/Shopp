import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from "url";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@emotion/styled'],
  },
  resolve: {
    alias: {
      "~": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src"),
    },
  },
  base: process.env.NODE_ENV === "production" ? "/vanz-shopp/" : "",
  server: {
    host:true,
    strictPort:true,
    port:4040
  }
})
