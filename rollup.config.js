import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.tsx',  // Entry point for your package
  output: [
    {
      dir: 'dist',  // CommonJS format
      format: 'cjs',
      sourcemap: true,
    },
    {
      dir: 'dist',  // ES module format
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),  // Exclude peer dependencies like React
    resolve(),  // Allows Rollup to resolve modules
    commonjs(),  // Converts CommonJS modules to ES6
    typescript({ tsconfig: './tsconfig.json' }),  // TypeScript support
    postcss({  // Optional: For bundling CSS
      extract: true,  // Extract CSS into separate file
      minimize: true,  // Minify CSS
    }),
    terser(),  // Minify the bundle
  ],
  external: ['react', 'react-dom'],  // Ensure React is not bundled
};

