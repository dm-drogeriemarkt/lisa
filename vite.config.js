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
    dedupe: [
      '@apollo/client',
      '@patternfly/react-core',
      'graphql-tag',
      'i18n-react',
      'lodash',
      'react',
      'react-hook-form'
    ],
    alias: {
      '#' : path.resolve(__dirname, './src')
    },
  },
})
