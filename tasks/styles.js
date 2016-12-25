import gulp from 'gulp';
import postcss from 'gulp-postcss';
import cssnext from 'postcss-cssnext';
import sourcemaps from 'gulp-sourcemaps';
import atImport from 'postcss-import';
import dir from './directories';

gulp.task('styles', () => {
  const processors = [
    atImport(),
    cssnext({browsers: ['last 2 version']})
  ];
  return gulp.src(dir.src + '/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(
      processors
    ))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dir.dest));
});
