console.log("main_register.js载入成功");

require.config({
	paths: {
		// 模块名字: 模块路径
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"register": "register",


	},
	shim: {
		//设置依赖关系
		"jquery-cookie": ["jquery"],
		"register": ["jquery"]
	}
})

require(["register"], function(register){
	console.log(register.main());
})
