define(["jquery", "jquery-cookie"], function($){
	var main = function(){
		$(function(){
			var isRight1 = false;
			var isRight2 = false;
			var isRight3 = false;
			var isRight4 = false;
			$(".name").blur(function(){
				var oValue = $(".name").val();
				if(!oValue.length){
					$("#tip-text").html("用户名不能为空");
					isRight1 = false;
				}else{
					$("#tip-text").html("");
					isRight1 = true;
				}
			})
			$(".phone").blur(function(){
				var oValue = $(".phone").val();
				if(!oValue.length){
					$("#tip-text").html("手机号不能为空");
					isRight2 = false;
				}else if(oValue.length > 11 || oValue.length < 11 || ! /\d/.test(oValue[0])){
					$("#tip-text").html("手机号应为11个数字");
					isRight2 = false;
				}else{
					$("#tip-text").html("");
					isRight2 = true;
				}
			})
			var passwordString = null;
			$(".password").blur(function(){
				var oValue = $(".password").val();
				if(!oValue.length){
					$("#tip-text").html("密码不能为空");
					isRight3 = false;
				}else if(oValue.length > 18 || oValue.length < 6){
					$("#tip-text").html("长度应为6~18个字符");
					isRight3 = false;
				}else{
					$("#tip-text").html("");
					isRight3 = true;
					passwordString = $(".password").val();
				}
			})
			$(".check").blur(function(){
				var oValue = $(".check").val();
				if(oValue != passwordString){
					$("#tip-text").html("与上个密码不相等");
					isRight4 = false;
				}else{
					$("#tip-text").html("");
					isRight4 = true;
				}
			})
			$(document).click(function(){
				if(isRight1 && isRight2 && isRight3 && isRight4){
					$("#tip-text").attr("class", "correct")
					$("#tip-text").html("可以注册");
				}
			})
		
		
		})
		return "register.js载入成功";
	
	}
	return {
		main: main
	}
})
