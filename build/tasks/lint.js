var paths  = require("../paths");
var gulp   = require("gulp");
var eslint = require("gulp-eslint");

gulp.task("lint", function () {
    return gulp.src(["gulpfile.js", "src/**/*.js", "test/**/*.js"])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});