// Framgia Develop
// @TODO: https://www.browsersync.io/docs/gulp, 
// Includes gulp
var gulp = require('gulp-param')(require('gulp'), process.argv); // Use param for multi project: Example: gulp watch --project=haru-circle

// Include Our Plugins
var plumber     = require('gulp-plumber');
// var concat      = require('gulp-concat'); // Nối nội dung file
var sass        = require('gulp-sass'); // Build SASS
var path        = require('path');
var cssbeautify = require('gulp-cssbeautify'); // CSS Beautiful

// Live Reload
var livereload = require('gulp-livereload');

// Build SASS
gulp.task('sass', function (project) {
    return gulp.src('./assets/sass/style.scss')
    .pipe(plumber({
        errorHandler: function (err) {
            console.log(err);
            this.emit('end');
        }
    }))
    .pipe(sass({
        paths: [ path.join(__dirname, 'sass', 'includes') ]
    }))
    .pipe(cssbeautify())
    .pipe(gulp.dest('./'))
    .pipe(livereload());
});

// Watch Files for Changes
gulp.task('watch', function (project) {
    livereload.listen();
    gulp.watch( './assets/sass/**/*.scss', ['sass']);
});

// Default task
gulp.task('default', ['sass', 'watch']);