var gulp = require('gulp');
var pathConfig = require('./path');
var webpack = require('gulp-webpack');
var del = require('del');
var runSequence = require('gulp-run-sequence');
var webpackConfig = require('./webpack.config');
var browserSync = require('browser-sync').create();

gulp.task('clean',function() {
	console.log('cleaning...');
	return del(pathConfig.dest);
})

gulp.task('webpack',function () {
	console.log('webpacking...');
	return gulp.src(['./examples/js','./examples/css','./components'])
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest(pathConfig.dest));
});

gulp.task('html',function() {
	console.log('htmling...');
	return gulp.src(pathConfig.html.src)
		.pipe(gulp.dest(pathConfig.dest));
});

gulp.task('default',function() {
	browserSync.init({
        server: "./dist"
    });
 	console.log('watching...');
	return gulp.watch(['./examples/**/*','./components/**/*'],['mydev']);
});

gulp.task('mydev',function() {
	return runSequence(
		'clean',
		'webpack',
		'html',
		browserSync.reload
	);
});

