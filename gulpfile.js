
'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify'); // minify build files
var rename = require('gulp-rename'); // custom name for build files
var webpack = require('gulp-webpack'); // compiles React modules
var header = require('gulp-header'); // custom comment header on build files

var browserify = require('gulp-browserify'); // compiles React modules

// Set banner for production file
var pkg = require('./package.json');
var banner = ['/*!',
  ' // <%= pkg.name %> v<%= pkg.version %> | <%= pkg.license %> ',
  ' // Copyright (c) 2016 <%= pkg.author %>',
  ' */',
  ''].join('\n');

// Contacat & compress javascript files for module production
gulp.task('build', function(){

/*
  gulp.src(['src/*.js'])
  .pipe(browserify({
    debug: true,
    transform: ['reactify']
  }))
  .pipe(uglify())
  .pipe(rename({
    basename: 'react-api',
    extname: '.min.js'
  }))
  .pipe(header(banner, {pkg: pkg}))
  .pipe(gulp.dest('bin'));
*/

  // Move files to public directory for testing
  gulp.src(['src/*.{js,jsx}'])
  .pipe(gulp.dest('tests/modules/'));
});

// Contacat & compress javascript files for testing server
gulp.task('test', function(){
  gulp.src(['tests/modules/render.js'])
  .pipe(webpack({
    watch: false,
    module: {
      loaders: [
        { test: /\.jsx$/, loader: 'jsx-loader' },
      ],
    },
  }))
  //.pipe(uglify())
  .pipe(rename({
    basename: 'app',
    extname: '.bundle.js'
  }))
  .pipe(header(banner, {pkg: pkg}))
  .pipe(gulp.dest('tests/public/scripts/'));
});


// Set default to build
gulp.task('default', ['build', 'test']);