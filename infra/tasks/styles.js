import gulp from 'gulp';
import postcss from 'gulp-postcss';
import cssnext from 'postcss-cssnext';
import sourcemaps from 'gulp-sourcemaps';
import atImport from 'postcss-import';
import syntax from 'postcss-scss';
import scss from 'node-sass';
import dir from '../shared/directories';

gulp.task('styles', () => {
  const processors = [
    atImport(),
    cssnext({browsers: ['last 2 version']})
  ];
  return gulp.src(dir.src + '/*.scss')
    .pipe(sourcemaps.init())
    .pipe(
      postcss(
        processors
      ).process(
        scss, {syntax: syntax}
      )
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dir.dest));
});
