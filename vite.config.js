import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components.js'),
      name: 'VeeValidateLazyDevtools',
      fileName: 'vee-validate-lazy-devtools'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        dir: 'dist',
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    vue()
  ],
});
