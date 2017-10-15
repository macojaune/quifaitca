var gulp = require('gulp'),
	pug = require('gulp-pug2'),
	browserSync = require('browser-sync');

gulp.task('pug', function () {
	gulp.src('./pug/*.pug').pipe(pug({
		pretty: true
	}))
		.pipe(gulp.dest('./'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('browserSync', function () {
	browserSync({
		server: {
			baseDir: './'
		}
	});
});

gulp.task('watch', ['browserSync'], function () {
	gulp.watch('./pug/*.pug', ['pug']);
	gulp.watch('./css/*.css', browserSync.reload);
	gulp.watch('./js/*.js', browserSync.reload);
});

gulp.task('default', ['pug', 'watch']);
