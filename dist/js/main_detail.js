console.log("main_detail.js载入成功");

require.config({
	paths: {
		// 模块名字: 模块路径
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"detail": "detail",


	},
	shim: {
		//设置依赖关系
		"jquery-cookie": ["jquery"],
		"detail": ["jquery"]
	}
})

require(["detail"], function(detail){
	console.log(detail.main());
})
