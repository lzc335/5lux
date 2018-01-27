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

//PHP
gulp.task("php", () => {
	return gulp.src("php/*.php")
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
gulp.task("scss-foot", () => {
	return gulp.src("scss/foot.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minify())
	.pipe(rename("foot.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("scss-login", () => {
	return gulp.src("scss/login.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minify())
	.pipe(rename("login.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("scss-register", () => {
	return gulp.src("scss/register.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minify())
	.pipe(rename("register.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("scss-goodslist", () => {
	return gulp.src("scss/goodslist.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minify())
	.pipe(rename("goodslist.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("scss-detail", () => {
	return gulp.src("scss/detail.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minify())
	.pipe(rename("detail.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("scss-cart", () => {
	return gulp.src("scss/cart.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minify())
	.pipe(rename("cart.min.css"))
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
gulp.task("build", ["copy-html", "php", "images", "scripts", "data", "scss-index", "scss-base", "scss-foot", "scss-login", "scss-register", "scss-goodslist", "scss-detail", "scss-cart"], () => {
	console.log("编译成功");
})

//监听
gulp.task("watch", () => {
	gulp.watch("html/*.html", ["copy-html"]);
	gulp.watch("php/*.php", ["php"]);
	gulp.watch("images/**/*", ["images"]);
	gulp.watch("js/*.js", ["scripts"]);
	gulp.watch("data/*.json", ["data"]);
	gulp.watch("scss/index.scss", ["scss-index"]);
	gulp.watch("scss/base.scss", ["scss-base"]);
	gulp.watch("scss/foot.scss", ["scss-foot"]);
	gulp.watch("scss/login.scss", ["scss-login"]);
	gulp.watch("scss/register.scss", ["scss-register"]);
	gulp.watch("scss/goodslist.scss", ["scss-goodslist"]);
	gulp.watch("scss/detail.scss", ["scss-detail"]);
	gulp.watch("scss/cart.scss", ["scss-cart"]);
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