var gulp = require('gulp');
var scss = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('default', function() {
	return gulp.src('*.scss')
		.pipe(scss({outputStyle: 'compressed'}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('.'));
});