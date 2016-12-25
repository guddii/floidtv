import gulp from 'gulp';
import dir from './directories';

gulp.task('assets', () =>
  gulp.src([dir.src + '/*.*', dir.src + '/**/*.*'])
    .pipe(gulp.dest(dir.dest))
);
