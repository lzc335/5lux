const gulp = require("gulp");
const scss = require("gulp-sass-china");
const minify = require("gulp-minify-css");
const rename = require("gulp-rename");
const connect = require("gulp-connect");

//html
gulp.task("copy-html", () => {
	return gulp.src("html/*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})

//images
gulp.task("images", () => {
	return gulp.src("images/**/*")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})

//scss
gulp.task("scss-index", () => {
	return gulp.src("scss/index.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minify())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("scss-base", () => {
	return gulp.src("scss/base.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minify())
	.pipe(rename("base.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

//js
gulp.task("scripts", () => {
	return gulp.src("js/*.js")
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})

//data
gulp.task("data", () => {
	return gulp.src("data/*.json")
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})

//整理文件
gulp.task("build", ["copy-html", "images", "scripts", "data", "scss-index", "scss-base"], () => {
	console.log("编译成功");
})

//监听
gulp.task("watch", () => {
	gulp.watch("html/*.html", ["copy-html"]);
	gulp.watch("images/**/*", ["images"]);
	gulp.watch("js/*.js", ["scripts"]);
	gulp.watch("data/*.json", ["data"]);
	gulp.watch("scss/index.scss", ["scss-index"])
	gulp.watch("scss/base.scss", ["scss-base"])
	gulp.watch("scss/slide.scss", ["scss-slide"])
})

//服务器
gulp.task("server", () => {
	connect.server({
		root: "dist",
		port: 8888,
		livereload: true
	})
})

//默认
gulp.task("default", ["watch", "server"]);