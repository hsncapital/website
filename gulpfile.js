const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();
const eslint = require("gulp-eslint");
const concat = require('gulp-concat');
const sourceMaps = false;

const PATH = {
  BASE_DIR: '.',
  HTML: {
    SOURCE: '**/*.html'
  },
  SCSS: {
    SOURCE: 'scss/**/*.scss',
    DESTINATION: 'css'
  },
  JS: {
    BUNDLE_FILES: ['scripts/constant.js', 'scripts/header.js', 'scripts/contact.js', 'scripts/service.js', 'scripts/testimonial.js', 'scripts/footer.js', 'scripts/modals.js', 'scripts/app.js'],
    SINGULAR_FILES: [''],
    SOURCE: 'scripts/**/*.js',
    BUNDLE_FILE_NAME: 'default-bundle.js',
    DESTINATION: 'js'
  }
};

// Sass Task
function scssTask() {
  return src(PATH.SCSS.SOURCE, { sourcemaps: sourceMaps })
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([cssnano()]))
    .pipe(dest(PATH.SCSS.DESTINATION, { sourcemaps: '.' }));
}

// JavaScript Task
function jsTask() {
  return src(PATH.JS.SINGULAR_FILES, { sourcemaps: sourceMaps })
    .pipe(terser())
    .pipe(dest(PATH.JS.DESTINATION, { sourcemaps: '.' }));
}

function jsBundleTask() {
  return src(PATH.JS.BUNDLE_FILES, { sourcemaps: true })
      .pipe(concat(PATH.JS.BUNDLE_FILE_NAME))
      .pipe(terser())
      .pipe(dest(PATH.JS.DESTINATION, { sourcemaps: '.' }));
}

function runLinter(cb) {
  return src([PATH.JS.SOURCE, '!node_modules/**'])
      .pipe(eslint())
      .pipe(eslint.format()) 
      .pipe(eslint.failAfterError())
      .on('end', function(error) {
        console.log(error);
      });
}

// Browsersync Tasks
function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: PATH.BASE_DIR
    }
  });
  cb();
}

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask() {
  watch(PATH.HTML.SOURCE, browsersyncReload);
  watch([PATH.SCSS.SOURCE, PATH.JS.SOURCE], series(scssTask, jsBundleTask, runLinter, browsersyncReload));
}

// Default Gulp task
exports.default = series(
  scssTask,
  jsBundleTask,
  runLinter,
  browsersyncServe,
  watchTask
);
