import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3001
  },
  envPrefix: 'REACT_APP_',
  build: {
    outDir: 'build'
  }
})
