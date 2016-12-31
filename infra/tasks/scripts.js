import gulp         from 'gulp';
import babel        from 'gulp-babel';
import browserify   from 'browserify';
import source       from 'vinyl-source-stream';
import buffer       from 'vinyl-buffer';
import gutil        from 'gulp-util';
import uglify       from 'gulp-uglify';
import sourcemaps   from 'gulp-sourcemaps';

import sequence   from 'run-sequence';

import dir from '../shared/directories';

gulp.task('scripts-transpile', () => {
  gulp.src([dir.src + '/*.js', dir.src + '/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dir.dest));
});

gulp.task('scripts-bundle', () => {
  const b = browserify({
    entries: dir.dest + '/main.js',
    debug: false,
  });

  return b.bundle()
    .pipe(source(dir.dest + '/main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./'));
});

gulp.task('scripts', (done) =>
  sequence('scripts-transpile', 'scripts-bundle', done)
);
