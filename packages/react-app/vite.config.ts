import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@example/stencil-lib/dist/components', replacement: path.resolve(__dirname, '../stencil-lib/dist/components') },
      { find: '@example/stencil-lib/loader', replacement: path.resolve(__dirname, '../stencil-lib/loader') },
      { find: '@example/stencil-lib', replacement: path.resolve(__dirname, '../stencil-lib/dist') },
      { find: '@example/stencil-lib-react', replacement: path.resolve(__dirname, '../stencil-lib-react/dist/index.js') },
    ],
  },
  server: {
    port: 5173,
    watch: {
      ignored: ['!**/node_modules/@example/**'],
    },
  },
  optimizeDeps: {
    exclude: [
      '@example/stencil-lib',
      '@example/stencil-lib-react',
      '@example/stencil-lib/loader',
    ],
  },
});
