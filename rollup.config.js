import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'index.js',
    output: {
        file: 'dist/index.umd.js',
        format: 'umd',
        name: 'indicators',
        exports: 'named',
    },
    plugins: [resolve(), commonjs()],
};