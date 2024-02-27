var gulp = require("gulp"),
  sass = require("gulp-dart-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  cleanCSS = require("gulp-clean-css"),
  uglify = require("gulp-uglify"),
  rename = require("gulp-rename"),
  browserSync = require("browser-sync").create();

gulp.task("styles", function () {
  return gulp
    .src("./styles/styles.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(rename({ suffix: ".min" }))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./styles/min"))
    .pipe(browserSync.stream());
});

gulp.task("scripts", function () {
  return gulp
    .src("./scripts/scripts.js")
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./scripts/min"))
    .pipe(browserSync.stream());
});

gulp.task("serve", function () {
  browserSync.init();
});

gulp.task("watch", function () {
  gulp.watch("./styles/**/*.scss", gulp.series("styles"));
  gulp.watch("./scripts/*.js", gulp.series("scripts"));
  gulp.watch("./*.php").on("change", browserSync.reload);
});

gulp.task("default", gulp.parallel("styles", "scripts", "serve", "watch"));
