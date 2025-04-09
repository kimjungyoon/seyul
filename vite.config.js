import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: 'src/partials',
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/scss/abstracts/variables";`
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
}); 