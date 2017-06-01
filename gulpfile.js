const gulp = require('gulp');

const src = [
  'client/dist/**/',
  'server/**/',
  'config/**/',
  'index.js',
  'package.json',
  'signature.js',
];
const build = './build';

gulp.task('move', () => {
  return gulp
    .src(src, {
      base: './',
    })
    .pipe(gulp.dest(build));
});

gulp.task('default', ['move'], () => {
  // place code for your default task here

});
