console.log("main_index.js载入成功");

require.config({
	paths: {
		// 模块名字: 模块路径
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"index": "index",
		"slide": "slide"//banner图滚动

	},
	shim: {
		//设置依赖关系
		"jquery-cookie": ["jquery"],
		"parabola": ["jquery"],
		"slide": ["jquery"]
	}
})

require(["index"], function(index){
	console.log(index.main());
})
require(["slide"], function(slide){
	console.log(slide.slide());
})
