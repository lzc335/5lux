console.log("main_index.js载入成功");

require.config({
	paths: {
		// 模块名字: 模块路径
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"index": "index",
		"slide_banner": "slide_banner",//banner图滚动
		"slide_goods1": "slide_goods1"//goods1商标滚动

	},
	shim: {
		//设置依赖关系
		"jquery-cookie": ["jquery"],
		"index": ["jquery"],
		"slide_banner": ["jquery"],
		"slide_goods1": ["jquery"]
	}
})

require(["index"], function(index){
	console.log(index.main());
})
require(["slide_banner"], function(slide){
	console.log(slide.slide());
})
require(["slide_goods1"], function(slide){
	console.log(slide.slide());
})