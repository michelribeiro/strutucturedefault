'use strict';

var config = require('../config');

var gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch(config.sass.watch, ['sass']);
  gulp.watch(config.markup.watch, ['markup']);
});
