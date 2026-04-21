import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { dependencies } from "./package.json";

export default defineConfig(() => ({
  plugins: [
    react(),
    federation({
      name: "system_design",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button",
        "./Table": "./src/components/Table",
        "./Pagination": "./src/components/Pagination",
        "./Sidebar": "./src/components/Sidebar",
        "./Form": "./src/components/Form",
        "./Loading": "./src/components/Loading",
        "./AutocompleteCustom": "./src/components/AutocompleteCustom",
        "./Navbar": "./src/components/Navbar",
        "./Input": "./src/components/Input",
        "./AddOptionModal": "./src/components/AddOptionModal",
        "./InputDate": "./src/components/InputDate",
        "./InputDateRange": "./src/components/inputDateRange",
        "./Title": "./src/components/Title",
        "./Dialog": "./src/components/Dialog",
        "./Toast": "./src/components/Toast",
        "./useEventBus": "./src/hooks/useEventBus",
      },
      shared: {
        react: {
          version: dependencies.react,
          requiredVersion: dependencies.react,
        },
      },
    }),
  ],

  resolve: {
    tsconfigPaths: true,
    alias: {
      src: "/src",
    },
  },

  server: {
    port: 6001,
    host: true,
    strictPort: true,
    open: false,
    hmr: {
      overlay: false,
    },
    watch: {
      usePolling: true,
    },
    fs: {
      strict: false,
    },
  },

  preview: {
    port: 6001,
    strictPort: true,
    cors: true,
  },

  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },

  optimizeDeps: {
    include: ["react", "react-dom"],
    exclude: ["@cornerstonejs/core"],
  },
}));
