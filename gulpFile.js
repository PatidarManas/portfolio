const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const minifyCss = require("gulp-minify-css");
const sourcemaps = require("gulp-sourcemaps");

sass.compiler = require("node-sass");

gulp.task("scss", async () => {
  gulp
    .src("./styles/scss/**/*.scss")
    .pipe(
      sass().on("error", err => {
        console.log(err);
        this.emit("end");
      })
    )
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("."))
    .pipe(minifyCss())
    .pipe(gulp.dest("./styles/css"));
});

gulp.task("default", () => {
  gulp.watch("./styles/**/*.scss", gulp.series("scss"));
});
