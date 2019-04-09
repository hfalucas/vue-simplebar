import pkg from './package.json'
import buble from 'rollup-plugin-buble'
import { uglify } from 'rollup-plugin-uglify'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

const browser = {
    input: 'src/index.js',
    output: {
        format: 'umd',
        name: 'VueSimplebar',
        file: pkg.browser
    },
    plugins: [
        buble(),
        resolve({
            browser: true, jsnext: true, main: true
        }),
        commonjs()
    ]
}

const browserMin = {
    input: 'src/index.js',
    output: {
        format: 'umd',
        name: 'VueSimplebar',
        file: 'dist/vue-simplebar.umd.min.js'
    },
    plugins: [
        resolve({
            browser: true, jsnext: true, main: true
        }),
        commonjs(),
        buble(),
        uglify()
    ]
}

const nodeModules = {
    input: 'src/index.js',
    output: [
        {
            format: 'cjs',
            file: pkg.main
        },
        {
            format: 'esm',
            file: pkg.module
        }
    ],
    plugins: [
    ],
    external: [ 'simplebar' ]
}

export default [
    browser,
    browserMin,
    nodeModules
]