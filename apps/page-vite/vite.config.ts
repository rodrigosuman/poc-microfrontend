import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  
  define: {
    "process.env": {
      NODE_ENV: "production"
    }
  },
  build: {
    target: "esnext",
    lib: {
      entry: "./src/index.ts",
      formats: ["es"],
      name: "page-vite",
      fileName: "remoteEntry",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
