const mix = require('laravel-mix');

mix.js('examples/index.js', 'examples/bundle.js')
    .js('docs/app.js', 'docs/js/build.js')
    .styles('docs/styles.css', 'docs/css/styles.css')
