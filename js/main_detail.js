console.log("main_detail.js载入成功");

require.config({
	paths: {
		// 模块名字: 模块路径
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"detail": "detail",
		"magnify": "magnify"


	},
	shim: {
		//设置依赖关系
		"jquery-cookie": ["jquery"],
		"detail": ["jquery"],
		"magnify": ["jquery"]
	}
})

require(["detail"], function(detail){
	console.log(detail.main());
})
require(["magnify"], function(magnify){
	console.log(magnify.main());
})
