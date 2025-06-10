import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    react(),
    base: '/guedescrypt_ui/',
    nodePolyfills({
      // To add only specific polyfills, add them here. If no option is passed, adds all polyfills
      // include: ['crypto', 'stream'], 
      // To exclude specific polyfills, add them to this list. Note: if include is provided, this has no effect
      // exclude: ['http'],
      // Whether to polyfill specific globals.
      globals: {
        Buffer: true, // polyfill Buffer
        global: true, // polyfill global
        process: true, // polyfill process
      },
      // Whether to polyfill `node:` protocol imports.
      protocolImports: true,
    }),
  ],
  // If you are experiencing issues with the `Buffer` global, you might need to
  // explicitly define it in `optimizeDeps.esbuildOptions.define` as well.
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
});
