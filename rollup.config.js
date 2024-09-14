import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { readdirSync } from 'fs';
import { join } from 'path';

const coreDir = './core';
const coreFiles = readdirSync(coreDir)
    .filter(file => file.endsWith('.js'))
    .reduce((entries, file) => {
        const name = file.replace('.js', '');
        entries[name] = join(coreDir, file);
        return entries;
    }, {});

export default [
    {
        input: 'index.js',
        output: {
            file: 'dist/index.umd.js',
            format: 'umd',
            name: 'indicators',
            exports: 'named',
        },
        plugins: [resolve(), commonjs()],
    },

    // Separate
    {
        input: coreFiles,
        output: {
            dir: 'dist/modules',
            format: 'esm',
        },
        plugins: [resolve(), commonjs()],
    }
];
