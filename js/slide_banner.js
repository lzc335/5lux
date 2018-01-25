define(["jquery"], function($){
	var slide = function(){
		var aBtns = $("#banner").find("ol").find("li");
		var oUl = $("#banner").find("ul");
		var aLi = oUl.find("li");
		var oLeft = $("#banner").find(".templateleft");
		var oRight = $("#banner").find(".templateright")

		//设置iNow，代表当前显示的图片的下标
		var iNow = 0;
		var timer = null;
		var isRun = false;//记录是否正在滚动，当一次滚动完成后，再进行下一次滚动
		aBtns.mouseenter(function(){
			//移向按钮，将当前的iNow改成当前按钮的下标
			iNow = $(this).index();
			tab();
		})
		//点击向左，切换轮播图
		oLeft.click(function(){
			if(!isRun){
				if(iNow == 0){//当轮播图是第一个时，换到最后一个
					iNow = aBtns.size() - 1;
				}else{
					iNow = iNow - 1;
				}
				tab();
			}
		})
		//点击向右，切换轮播图
		oRight.click(function(){
			if(!isRun){
				iNow = iNow + 1;
				tab();
			}
		})


		function tab(){
			isRun = true;
			aBtns.attr("class", "");
			aLi.attr("style", "opacity: 0.5;");
			if(iNow == aBtns.size()){
				aBtns.eq(0).attr("class", "active");
			}else{
				aBtns.eq(iNow).attr("class", "active");
			}
			//让ul定时向左移动
			oUl.stop().animate({
				left: -1440 * iNow
			}, 500, function(){
				if(iNow == aBtns.size()){
					oUl.css("left", 0);
					iNow = 0; //重置
				}
				isRun = false;
			})
		}

		//我们需要启动定时器，设置让循环广告窗口自己滚动
		function timerInner(){
			iNow++;
			tab();
			//处理最后一张图片 是第一张图片 显示下标为0的按钮选中
			if(iNow == aBtns.size()){
				aBtns.eq(0).attr("class", "active");
			}

		}

		//启动定时器
		timer = setInterval(timerInner, 4000);

		//当鼠标再页面上是，停止滚动，离开时继续滚动
		oUl.hover(function(){
			clearInterval(timer);
		}, function(){
			timer = setInterval(timerInner, 4000);
		})
		aBtns.hover(function(){
			clearInterval(timer);
		}, function(){
			timer = setInterval(timerInner, 4000);
		})
		oLeft.hover(function(){
			clearInterval(timer);
		}, function(){
			timer = setInterval(timerInner, 4000);
		})
		oRight.hover(function(){
			clearInterval(timer);
		}, function(){
			timer = setInterval(timerInner, 4000);
		})
		
		
		return "slide_banner.js载入成功";
	}
	return{
		slide: slide
	}
})