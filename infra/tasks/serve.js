import gulp from 'gulp';
import browserSync from 'browser-sync';
import dir from '../shared/directories';
import sequence   from 'run-sequence';

import middleware from '../shared/middleware';
import mocks from '../shared/mocks';

gulp.task('reload', [], (done) => {
  browserSync.reload();
  done();
});

gulp.task('styles-watch', [], (done) =>
  sequence('styles', 'reload', done)
);

gulp.task('scripts-watch', [], (done) =>
  sequence('scripts', 'reload', done)
);

gulp.task('assets-watch', [], (done) =>
  sequence('assets', 'reload', done)
);

gulp.task('serve', () => {

  browserSync.init({
    open: false,
    server: {
      baseDir: dir.dest
    },
    middleware: [middleware]
  }, function (err, bs) {
    let server = mocks();
    bs.app.use('/api', server);
  });

  gulp.watch([
    '*.css', '**/*.scss'
  ], {cwd: dir.src}, ['styles-watch']);

  gulp.watch([
    '*.js', '**/*.js'
  ], {cwd: dir.src}, ['scripts-watch']);

  gulp.watch([
    '*', '**/*',
    '!*.css', '!**/*.scss',
    '!*.js', '!**/*.js'
  ], {cwd: dir.src}, ['assets-watch']);

});
