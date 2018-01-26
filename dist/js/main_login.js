console.log("main_login.js载入成功");

require.config({
	paths: {
		// 模块名字: 模块路径
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"login": "login",


	},
	shim: {
		//设置依赖关系
		"jquery-cookie": ["jquery"],
		"login": ["jquery"]
	}
})

require(["login"], function(login){
	console.log(login.main());
})
