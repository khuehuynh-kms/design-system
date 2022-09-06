import { fileURLToPath, URL } from 'node:url'

import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), splitVendorChunkPlugin()], //, splitVendorChunkPlugin()
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    include: ['p-common-design-system']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./node_modules/p-common-design-system/src/styles/styles.scss";`,
      },
    },
  },
  build: {
    dynamicImportVarsOptions: {
      exclude: [],
    },
  }
})
