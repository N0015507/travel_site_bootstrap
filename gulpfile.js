'use strict';
var gulp = require('gulp');
var validate = require('gulp-w3c-css'); //https://www.npmjs.com/package/gulp-w3c-css/
var htmlhint = require('gulp-htmlhint'); //https://github.com/yaniswang/HTMLHint/wiki/Rules

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('validate', function() { //tested
  gulp.src("./assets/stylesheets/*.css")
  .pipe(validate())
  .pipe(gulp.dest("./dist/css"));
});

gulp.task('htmlhint', function () { //tested
    gulp.src("./index.html")
    .pipe(htmlhint())
    .pipe(gulp.dest('htmlhint'))
    .pipe(htmlhint.reporter());
});
