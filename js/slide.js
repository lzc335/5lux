define(["jquery"], function($){
	var slide = function(){
		var aBtns = $("#banner").find("ol").find("li");
		var oUl = $("#banner").find("ul");
		var aLi = oUl.find("li");
		var oLeft = $("#banner").find(".templateleft");
		var oRight = $("#banner").find(".templateright")

		//a:设置iNow，代表当前显示的图片的下标
		var iNow = 0;
		var timer = null;

		aBtns.mouseenter(function(){
			//b:点击按钮，将当前的iNow改成当前按钮的下标
			iNow = $(this).index();
			tab();
		})
		oLeft.click(function(){
			if(iNow == 0){
				iNow = aBtns.size() - 1;
			}else{
				iNow = iNow - 1;
			}
			tab();
		})
		oRight.click(function(){
			iNow = iNow + 1;
			tab();
		})


		function tab(){
			aBtns.attr("class", "");
			aLi.attr("style", "opacity: 0.5;");
			if(iNow == aBtns.size()){
				aBtns.eq(0).attr("class", "active");
			}else{
				aBtns.eq(iNow).attr("class", "active");
			}
			//让ul去动
			oUl.stop().animate({
				left: -1440 * iNow
			}, 500, function(){
				if(iNow == aBtns.size()){
					oUl.css("left", 0);
					iNow = 0; //重置
				}
			})
		}

		//c:我们需要启动定时器，设置让循环广告窗口自己滚动
		function timerInner(){
			iNow++;
			tab();
			//处理最后一张图片 是第一张图片 显示下标为0的按钮选中
			if(iNow == aBtns.size()){
				aBtns.eq(0).attr("class", "active");
			}

		}

		//d: 启动定时器
		timer = setInterval(timerInner, 4000);

		//e:添加移入移出事件
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
		
		
		return "slide.js载入成功";
	}
	return{
		slide: slide
	}
})