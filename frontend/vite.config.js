import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    // disable Vite's default origin check
    origin: 'http://localhost:5173',
  },
  
});
