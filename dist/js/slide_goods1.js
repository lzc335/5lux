define(["jquery"], function($){
	var slide = function(){
		var aBtns = $(".bx_pager").find(".bx_pager_item");
		var oUl = $(".sliderbox");
		var oLeft = $(".bx_prev");
		var oRight= $(".bx_next");
		var iNow = 0;//记录下标
		aBtns.click(function(){
			//点击按钮，将当前的iNow改成当前按钮的下标
			iNow = $(this).index();
			tab();
		})
		//左右移动轮播图
		oLeft.click(function(){
			iNow = iNow - 1;
			tab();
		})
		oRight.click(function(){
			iNow = iNow + 1;
			tab();
		})
		function tab(){
			aBtns.find("a").attr("class", "");
			if(iNow == 3){
				aBtns.eq(0).find("a").attr("class", "active");
			}else if(iNow == -1){
				aBtns.eq(2).find("a").attr("class", "active");
			}else{
				aBtns.eq(iNow).find("a").attr("class", "active");
			}
			//让ul向左移动
			oUl.stop().animate({
				left: -224 * (iNow + 1)
			}, 500, function(){
				if(iNow == 3){
					oUl.css("left", -224);
					iNow = 0; //重置
				}else if(iNow == -1){
					oUl.css("left", -672);
					iNow = 2; //重置
				}
			})
		}
		
		
		return "slide_goods1.js载入成功"
	}
	return{
		slide: slide
	}
})