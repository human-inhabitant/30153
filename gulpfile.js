'use strict';

const fs = require( 'fs' );
const gulp = require( 'gulp' );
const concat = require( 'gulp-concat' );
const sourceMaps = require( 'gulp-sourcemaps' );
const uglify = require( 'gulp-uglify' );
const ngAnnotate = require( 'gulp-ng-annotate' );

fs
  .readdirSync( `${__dirname}/gulp` )
  .forEach( function( task ) {
    require( `./gulp/${task}` );
});

gulp.task( 'js', function() {
  return gulp
    .src( ['ng/module.js', 'ng/**/*.js'] )
    .pipe( sourceMaps.init() )
      .pipe( concat('app.js' ) )
      .pipe( ngAnnotate() )
      .pipe( uglify() )
    .pipe( sourceMaps.write() )
    .pipe( gulp.dest( 'assets' ) )
  ;
});


gulp.task( 'watch:js', function() {
  return gulp.watch( 'ng/**/*.js', gulp.series( 'js' ) );
});

gulp.task( 'watch:css', function() {
  return gulp.watch( 'css/**/*.styl', gulp.series( 'css' ) );
});

gulp.task( 'dev', gulp.parallel( 'watch:css', 'watch:js', 'dev:server' ) );

