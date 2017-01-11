import gulp from 'gulp';
import postcss from 'gulp-postcss';
import cssnext from 'postcss-cssnext';
import sass from 'gulp-sass';
import dir from '../shared/directories';

gulp.task('styles', () => {
  const processors = [
    cssnext({browsers: ['last 2 version']})
  ];
  return gulp.src(dir.src + '/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      postcss(
        processors
      )
    )
    .pipe(gulp.dest(dir.dest));
});
