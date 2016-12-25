import gulp from 'gulp';
import browserSync from 'browser-sync';
import dir from './directories';

gulp.task('styles-watch', ['styles'], (done) => {
  browserSync.reload();
  done();
});

gulp.task('scripts-watch', ['scripts'], (done) => {
  browserSync.reload();
  done();
});

gulp.task('assets-watch', ['scripts'], (done) => {
  browserSync.reload();
  done();
});

gulp.task('templates-watch', ['scripts'], (done) => {
  browserSync.reload();
  done();
});

gulp.task('serve', () => {
  browserSync({
    reloadThrottle: 5000,
    server: {
      baseDir: dir.dest
    }
  });

  gulp.watch([
    '*.css', '**/*.css'
  ], {cwd: dir.src}, ['styles-watch']);
  gulp.watch([
    '*.js', '**/*.js'
  ], {cwd: dir.src}, ['scripts-watch']);
  gulp.watch([
    '*.twig', '**/*.twig'
  ], {cwd: dir.src}, ['templates-watch']);
  gulp.watch([
    '*', '**/*',
    '!*.css', '!**/*.css',
    '!*.js', '!**/*.js',
    '!*.twig', '!**/*.twig'
  ], {cwd: dir.src}, ['assets-watch']);
});
