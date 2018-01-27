console.log("main_cart.js载入成功");

require.config({
	paths: {
		// 模块名字: 模块路径
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"cart": "cart",


	},
	shim: {
		//设置依赖关系
		"jquery-cookie": ["jquery"],
		"cart": ["jquery"]
	}
})

require(["cart"], function(cart){
	console.log(cart.main());
})
