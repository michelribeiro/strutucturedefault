'use strict';

var config = require('../config');

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    
    browserSync.init({
        server: {
            baseDir: [config.buildDir]
        }
    });

    gulp.watch("app/sass/*.scss", ['sass']);
    gulp.watch("app/markup/*.html", ['markup']);
    gulp.watch("app/*.html").on('change', browserSync.reload);

});