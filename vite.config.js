import { defineConfig } from 'vite'
import path from 'path';


export default defineConfig({
  server: {
    port: 3001
  },
  envPrefix: 'REACT_APP_',
  build: {
    outDir: 'build'
  },
  resolve: {
    alias: {
      '#' : path.resolve(__dirname, './src')
    },
  },
})
