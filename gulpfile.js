// TODO:
// * production build script
// * ngmin for JS

var gulp = require('gulp');
var karma = require('gulp-karma');
var es6ify = require('es6ify');
var watchify = require('watchify');
var livereload = require('gulp-livereload');
var source = require('vinyl-source-stream');
var protr = require('gulp-protractor').protractor;

gulp.task('browserify', function() {
	var bundler = watchify('./src/index.js', {});

	bundler.on('update', rebundle);

	function rebundle() {
		return bundler
			.bundle({ debug: true })
			.pipe(source('app.js'))
			.pipe(gulp.dest('./public/'))
			.pipe(livereload());
	}

	rebundle();
});

gulp.task('karma', function() {
	return gulp.src('path not needed, pulls from conf')
		.pipe(karma({
			configFile: 'config/karma.conf.js',
			action: 'watch'
		}))
		.on('error', function(e) { throw e; });
});

gulp.task('unit', ['karma']);

gulp.task('protractor', function() {
	return gulp.src('./test/e2e/**/*.e2e.js')
		.pipe(protr({
			configFile: 'config/protractor.conf.js'
		}))
		.on('error', function(e) { throw e; });
});

gulp.task('func', ['protractor']);

gulp.task('default', ['browserify']);

