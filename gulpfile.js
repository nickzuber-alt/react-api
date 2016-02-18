
'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename'); // custom name for build files
var webpack = require('gulp-webpack'); // compiles React modules
var header = require('gulp-header'); // custom comment header on build files
var react = require('gulp-react'); // transpiles jsx -> js

// Set banner for production file
var pkg = require('./package.json');
var banner = ['/*!',
  ' // <%= pkg.name %> v<%= pkg.version %> | <%= pkg.license %> ',
  ' // Copyright (c) 2016 <%= pkg.author %>',
  ' */',
  ''].join('\n');

// Contacat & compress javascript files for module production
gulp.task('build', function(){

  gulp.src(['src/*.{js,jsx}'])
  .pipe(react({harmony: true}))
  .pipe(rename({
    basename: 'react-api',
    extname: '.js'
  }))
  .pipe(header(banner, {pkg: pkg}))
  .pipe(gulp.dest('build'));
});

// Contacat & compress javascript files for testing server
gulp.task('build-examples', function(){

  // Move files to public directory for testing
  gulp.src(['build/*.{js,jsx}'])
  .pipe(gulp.dest('examples/modules/'));

  gulp.src(['examples/modules/render.js'])
  .pipe(webpack({
    watch: false,
    module: {
      loaders: [
        { test: /\.jsx$/, loader: 'jsx-loader' },
      ],
    },
  }))
  .pipe(rename({
    basename: 'app',
    extname: '.bundle.js'
  }))
  .pipe(header(banner, {pkg: pkg}))
  .pipe(gulp.dest('examples/public/scripts/'));
});


// Set default to build
gulp.task('default', ['build', 'build-examples']);