'use strict';

const gulp = require( 'gulp' );
const nodemon = require( 'gulp-nodemon' );

gulp.task( 'dev:server', function() {
  nodemon({
    script: 'server.js',
    ext: 'js',
    ignore: ['ng*', 'gulp*', 'assets*']
  });
});
