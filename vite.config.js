// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolioyassine/', // 👈 sans tiret pour correspondre à l'URL partagée
  plugins: [react()],
});
