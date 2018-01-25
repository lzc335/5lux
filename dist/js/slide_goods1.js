define(["jquery"], function($){
	var slide = function(){
		for(let i = 0; i < 5; i++){
			var aBtns = $(".goods").eq(i).find(".bx_pager").find(".bx_pager_item");
			var oLeft = $(".goods").eq(i).find(".bx_prev");
			var oRight = $(".goods").eq(i).find(".bx_next");
	
			//bug：当函数添加完毕后，运行时间，此时i已经是5了，所以移动的ul是最后一个,因此要确定ul
			var iNow = 0;//记录下标
			var iGoods = 0;//记录触发事件的对象的父元素goods下标19 22 25 28 31
			var isRun = false;//记录是否正在滚动，当一次滚动完成后，再进行下一次滚动
			aBtns.click(function(){
				//点击按钮，将当前的iNow改成当前按钮的下标
				iGoods = ($(this).closest(".goods").index() - 19) / 3;//建立数学联系
				iNow = $(this).index();
				tab();
			})
			//左右移动轮播图
			oLeft.click(function(){
				if(!isRun){
					iGoods = ($(this).closest(".goods").index() - 19) / 3;
					iNow = iNow - 1;
					tab();
				}
			})
			oRight.click(function(){
				if(!isRun){
					iGoods = ($(this).closest(".goods").index() - 19) / 3;
					iNow = iNow + 1;
					tab();
				}
			})
			function tab(){
				isRun = true;
				var oUl = $(".goods").eq(iGoods).find(".sliderbox");
				var aBtns = $(".goods").eq(iGoods).find(".bx_pager").find(".bx_pager_item");
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
					isRun = false;
				})
			}
		}

		
		return "slide_goods1.js载入成功"
	}
	return{
		slide: slide
	}
})