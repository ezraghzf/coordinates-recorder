import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({command}) => {
  const config = {plugins: [vue()],}
  if (command == 'serve') {
    config.server = {
      https: {
        key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
        cert: fs.readFileSync(path.resolve(__dirname, 'localhost.pem'))
      }
    }
  }
  return config;
})
