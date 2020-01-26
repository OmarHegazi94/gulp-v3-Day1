const gulp = require('gulp');
const gulpLess = require('gulp-less');

    gulp.task('compile-less', () => {
        gulp.src('./assets/style/css/*.less')
        .pipe(gulpLess())
        .pipe(gulp.dest('./dist/style/css'))
    });

    