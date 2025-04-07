import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'nextgenelectronics ',//想要把dist修改成什么名字在这边改
  }
});
