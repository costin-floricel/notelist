var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var mixins = require('postcss-mixins');


gulp.task('styles', function(){
	return gulp.src('./app/styles/styles.css')
	.pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./app/styles/css/'));
});



gulp.task('watch', function(){
	watch('./app/styles/**/*.css', function(){
		gulp.start('styles');
	});
});