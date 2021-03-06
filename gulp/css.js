'use strict';

const gulp = require( 'gulp' );
const stylus = require( 'gulp-stylus' );

gulp.task('css', function() {
  return gulp
    .src( 'css/**/*.styl' )
    .pipe( stylus() )
    .pipe( gulp.dest( 'assets' ) )
  ;
});