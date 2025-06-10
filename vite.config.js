import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      globals: {
        Buffer: true, // polyfill Buffer
        global: true, // polyfill global
        process: true, // polyfill process
      },
      protocolImports: true,
    }),
  ],
  base: '/guedescrypt_ui/',
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
});
