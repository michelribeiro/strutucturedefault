'use strict';

module.exports = {

    serverport: 3000,

    scripts: {
        watch: './js/**/*.{js, jsx}',
        vendor: {
            bundleName: 'vendor.bundle.js'
        },
        apps: {
            baseDir: './app/js/apps',
            destDir: 'apps/'
        },
        third: {
            baseDir: './app/js/apps/*.{js,jsx}',
            dest: './dist/js/',
            watch: './app/app/vendor/*.{js,jsx}',
        },
        dest: './dist/js/'
    },
    
    sass: {
        watch: './app/sass/**/*.scss',
        src: ['./app/sass/pages/**/*.scss', './app/sass/common/**/*.scss'],
        dest: './dist/css/'
    },

    markup: {
        watch: './app/markup/**/*.html',
        src: './app/markup/**/*.html',
        dest: './dist/'
    },

    buildDir: './dist/'
}