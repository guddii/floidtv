import gulp       from 'gulp';
import clean from 'gulp-clean';
import dir from '../shared/directories';

gulp.task('clean', () =>
  gulp.src(dir.dest, {read: false})
    .pipe(clean({force: true}))
);
