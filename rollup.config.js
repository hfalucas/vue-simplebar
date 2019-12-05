import pkg from './package.json'
import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'

const browser = {
    input: 'src/index.js',
    output: {
        format: 'umd',
        name: 'vue-simplebar',
        file: pkg.browser
    },
    plugins: [
        commonjs(),
        vue({ compileTemplate: true }),
        babel({ exclude: 'node_modules/**' }),
        resolve({ mainFields: ['browser', 'main', 'jsnext'] })
    ]
}

const browserMin = {
    input: 'src/index.js',
    output: {
        format: 'umd',
        name: 'vue-simplebar',
        file: 'dist/vue-simplebar.umd.min.js'
    },
    plugins: [
        terser(),
        commonjs(),
        vue({ compileTemplate: true }),
        babel({ exclude: 'node_modules/**' }),
        resolve({ mainFields: ['browser', 'main', 'jsnext'] })
    ]
}

const esm = {
    input: 'src/index.js',
    output: {
        format: 'esm',
        file: pkg.module
    },
    plugins: [
        vue()
    ]
}

const ssr = {
    input: 'src/index.js',
    output: {
        format: 'cjs',
        file: pkg.main
    },
    plugins: [
        vue({ template: { optimizeSSR: true } })
    ]
}


export default [
    browserMin,
    browser,
    esm,
    ssr
]
