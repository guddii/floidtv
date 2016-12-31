import gulp from 'gulp';
import browserSync from 'browser-sync';
import dir from '../shared/directories';
import middleware from '../shared/middleware';
import mocks from '../shared/mocks';

gulp.task('styles-watch', ['styles'], (done) => {
  browserSync.reload();
  done();
});

gulp.task('scripts-watch', ['scripts'], (done) => {
  browserSync.reload();
  done();
});

gulp.task('assets-watch', ['assets'], (done) => {
  browserSync.reload();
  done();
});

gulp.task('serve', () => {

  browserSync.init({
    open: false,
    server: {
      baseDir: dir.dest
    },
    middleware: [middleware]
  }, function (err, bs) {
    let server = mocks();
    bs.app.use('/mocks', server);
  });

  gulp.watch([
    '*.css', '**/*.css'
  ], {cwd: dir.src}, ['styles-watch']);
  gulp.watch([
    '*.js', '**/*.js'
  ], {cwd: dir.src}, ['scripts-watch']);
  gulp.watch([
    '*', '**/*',
    '!*.css', '!**/*.css',
    '!*.js', '!**/*.js'
  ], {cwd: dir.src}, ['assets-watch']);
});
