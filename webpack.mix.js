let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css').version();

mix.scripts([
    // 'resources/assets/js/jquery.min.js',
    'resources/assets/js/notification.js',
    'resources/assets/js/jquery-ui.min.js',
    'resources/assets/js/overhang.min.js',
    // 'resources/assets/js/clipboard.min.js',
    'resources/assets/js/jquery.dotdotdot.js',
    // 'resources/assets/js/xss.min.js',
    'resources/assets/js/spin.min.js',
    'resources/assets/js/ladda.min.js',
    'resources/assets/js/jquery.Jcrop.min.js',
], 'public/js/all.js');

mix.styles([
    'resources/assets/css/animate.min.css',
    'resources/assets/css/notification.css',
    'resources/assets/css/jquery-ui.min.css',
    'resources/assets/css/overhang.min.css',
    'resources/assets/css/crowd.css',
    // 'resources/assets/css/star-rating.min.css',
    'resources/assets/css/font-awesome.min.css',
    'resources/assets/css/ladda-themeless.min.css',
    // 'node_modules/nprogress/nprogress.css',
    // 'resources/assets/css/search-form.css',
    'resources/assets/css/style.css',
    'resources/assets/css/jquery.Jcrop.min.css',
], 'public/css/all.css').version();