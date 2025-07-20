// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // Optimisation du HMR pour Tailwind
      applyBaseStyles: false,
    }),
    react({
      // Optimisation du HMR pour React
      include: ["**/*.{jsx,tsx}"],
    }),
  ],

  // Configuration du serveur de développement
  server: {
    port: 4321,
    host: true,
  },

  // Optimisation du HMR
  vite: {
    // Améliore le HMR
    optimizeDeps: {
      include: ["react", "react-dom", "framer-motion"],
    },
    // Configuration du HMR
    server: {
      hmr: {
        overlay: true,
      },
    },
  },
});
