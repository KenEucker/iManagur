import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
  ],
  resolve: {
    alias: {
      'vue-easy-lightbox': 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.esm.min.js'
    }
  },
})
