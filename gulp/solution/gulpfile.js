// Load in Gulp and plugins
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyHtml = require('gulp-minify-html'),
    notify = require('gulp-notify'),
    del = require('del'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

// Concacenate and uglify JavaScript files
gulp.task('scripts', function () {
    return gulp.src('src/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(notify({
            message: 'Scripts task complete'
        }));
});

// Minifiyng HTML files
gulp.task('minify-html', function () {
    gulp.src('src/**/*.html')
        .pipe(minifyHtml())
        .pipe(gulp.dest('dist'));
});

// Clean up the dist folder
gulp.task('clean', function () {
    return del(['dist']);
});

// Watch html and JavaScript files and trigger specific task
gulp.task('watch', ['scripts', 'minify-html', 'serve'], function () {
    gulp.watch('src/**/*.html', ['minify-html']).on('change', reload);
    gulp.watch('src/**/*.js', ['scripts']).on('change', reload);
});

gulp.task('serve', function () {
    browserSync.init({
        server: './dist/'
    });
});

// Clean the dist folder and watch for changes
gulp.task('default', function () {
    runSequence('clean', 'watch')
});
