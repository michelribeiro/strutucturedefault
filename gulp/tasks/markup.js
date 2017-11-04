'use strict';

var config = require('../config');

var gulp = require('gulp');
var gulpif = require('gulp-if');
var minifyHTML = require('gulp-minify-html');
var nunjucks = require('gulp-nunjucks-html');

// Watch for file changes to  reload on save
gulp.task('markup', function() {
  return gulp.src(config.markup.src)
    .pipe(nunjucks({
      searchPaths: [ './app/markup/' ]
    }))
    .pipe(
      gulpif(global.isMinified, minifyHTML({ conditionals: true }))
    )
    .pipe(gulp.dest(config.markup.dest));
});
