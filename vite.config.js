import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from "vite-plugin-vuetify";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
    },
    mainFields: ["browser", "module", "main", "jsnext:main", "jsnext"],
  },
  server: {
    host: "192.168.1.3",
    port: 3000,
  },
});
