import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'apexmtn/', // Make sure this matches your repo name exactly
});
