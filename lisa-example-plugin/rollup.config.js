import babel from 'rollup-plugin-babel' 
import json from '@rollup/plugin-json';

const config = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js'
  },
  plugins: [
    json(),
    babel({ exclude: "node_modules/**" })
  ],
}

export default config
