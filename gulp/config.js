'use strict';

module.exports = {

    sass: {
        watch: './app/sass/**/*.scss',
        src: ['./app/sass/pages/*.scss', './app/sass/common/*.scss'],
        dest: './dist/css/'
    },

    buildDir: './dist/'
}