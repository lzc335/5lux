console.log("main_goodslist.js载入成功");

require.config({
	paths: {
		// 模块名字: 模块路径
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"goodslist": "goodslist",


	},
	shim: {
		//设置依赖关系
		"jquery-cookie": ["jquery"],
		"goodslist": ["jquery"]
	}
})

require(["goodslist"], function(goodslist){
	console.log(goodslist.main());
})
