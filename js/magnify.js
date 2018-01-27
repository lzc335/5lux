define(["jquery", "jquery-cookie"], function($){
	var main = function(){
		$(function(){
			$(".main").on("mouseenter",".main_left",function(){
                $(".floatbox").css("display","block");
                $(".floatpic").css("display","block");
            })
            $(".main").on("mouseleave",".main_left",function(){
                $(".floatbox").css("display","none");
                $(".floatpic").css("display","none");
            })
            
            $(".main").on("mousemove",".main_left",function(e){
                var l = e.pageX - /*$(".main_left img").offset().left - */$(".floatbox").width() / 2;
                var t = e.pageY - /*$(".main_left img").offset().top - */$(".floatbox").height() / 2;

                $(".floatbox").css("left", l).css("top", t - 200);

                var percentX = l / ($(".main_left").width() - $(".floatbox").width());
                var percentY = t / ($(".main_left").height() - $(".floatbox").height());

				$(".hideimg").css("left", -percentX * ($(".hideimg").width() - $(".floatpic").width())).css("top", -percentY * ($(".hideimg").height() - $(".floatpic").height() - 200));
            })
		
		
		})
		return "magnify.js载入成功";
	
	}
	return {
		main: main
	}
})