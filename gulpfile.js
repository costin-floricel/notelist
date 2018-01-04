var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');


gulp.task('styles', function(){
	return gulp.src('./app/styles/styles.css')
	.pipe(postcss([cssvars,nested, autoprefixer]))
	.pipe(gulp.dest('./app/styles/css/'));
});



gulp.task('watch', function(){
	watch('./app/styles/**/*.css', function(){
		gulp.start('styles');
	});
});