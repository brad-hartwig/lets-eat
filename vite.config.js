import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/lets-eat/',
  plugins: [react()],
  server: {
    port: 3000,
    hot: true,
  },
  build: {
    // sourcemap: true,
    chunkSizeWarningLimit: 1600,
  },
});
