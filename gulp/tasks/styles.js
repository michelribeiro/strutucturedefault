'use strict';

var config = require('../config');
// var handleErrors = require('../util/handle-errors');

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var gulpif = require('gulp-if');
// var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var cmq = require('gulp-combine-mq');

gulp.task('sass', function() {
  return gulp.src(config.sass.src)
    // .pipe(plumber(handleErrors))
    // sourcemaps
    .pipe(gulpif(!global.isMinified, sourcemaps.init()))
    // compile with friends
    .pipe(sass())
    // Prefix css
    .pipe(autoprefixer({
      browsers: ['last 2 version', 'ie 9', 'iOS 8'],
      cascade: true
    }))
    .pipe(cmq({ log: false, beautify: false }))
    .pipe(gulpif(!global.isMinified, sourcemaps.write('.')))
    // If prod, minify
    .pipe(gulpif(global.isMinified, minifyCss({ compatibility: 'ie8' })))
    // Send to destination folder
    .pipe(gulp.dest(config.sass.dest));
});
