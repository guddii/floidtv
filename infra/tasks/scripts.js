import gulp       from 'gulp';
import browserify from 'browserify';
import babelify   from 'babelify';
import source     from 'vinyl-source-stream';
import gutil      from 'gulp-util';

import dir from '../shared/directories';

gulp.task('scripts', function () {
  browserify({debug: false})
    .transform(babelify)
    .require(dir.src + '/main.js', {entry: true})
    .bundle()
    .on('error', gutil.log)
    .pipe(source('main.js'))
    .pipe(gulp.dest(dir.dest + '/'));
});
