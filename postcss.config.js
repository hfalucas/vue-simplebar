var path = require('path')
var cssnano = require('cssnano')
var postcssImport = require('postcss-import')

module.exports = ctx => ({
    plugins: {
        'postcss-import': {
            resolve (id, basedir) {
                if (/^~/.test(id)) return path.resolve('./node_modules', id.replace('~', ''))
                return path.resolve(basedir, id)
            }
        },
        'cssnano': ctx.env === 'production'
    }
})
