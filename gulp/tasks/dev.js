'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', ['clean'], function() {

  return runSequence(
    'markup',
    'sass',
    'watch',
    'serve'
  );

});
