define(["jquery", "jquery-cookie"], function($){
	var main = function(){
		$(function(){
			//获取banner数据
			$.ajax({
				url: "../data/banner.json",
				type: "GET",
				success: function(res){
					var html = "";
					var htmlFirst = "";
					for(var i = 0; i < res.length; i++){
						html += `<li><a href="#"><img src="${res[i].img}" alt="" /></a></li>`;
						htmlFirst = `<li><a href="#"><img src="${res[0].img}" alt="" /></a></li>`;
					}
					html += htmlFirst;
					$("#banner ul").html(html);
				}
			})
			
			//获取brandship_list中的数据
			$.ajax({
				url: "../data/brandship_list.json",
				type: "GET",
				success: function(res){
					var html = "";
					for(var i = 0; i < res.length; i++){
						html += `<li>
											<a href="#">
												<img src="${res[i].img.show}" alt="" />
												<div>
													<div class="brand_hider">
														<img src="${res[i].img.brand}" alt="" />
														<p><span></span></p>
														<p>${res[i].name.English}</p>
														<p>${res[i].name.Chinese}</p>
													</div>
												</div>
											</a>
										</li>`;
					}
					$(".brandship_list").html(html);
				}
			})
			//brandship中标签上移/缩回
			$(".brandship_list").on("mouseenter", "li", function(){
				$(this).find(".brand_hider").stop().animate({top: 0}, 200);
			})
			$(".brandship_list").on("mouseleave", "li", function(){
				$(this).find(".brand_hider").stop().animate({top: 100}, 200);
			})
			
			//获取hotstore数据
			$.ajax({
				url: "../data/hotstore_list.json",
				type: "GET",
				success: function(res){
					var html = "";
					for(var i = 0; i < res.length; i++){
						html += `<li class="hotflag">
											<img src="${res[i].img}" alt="" />
											<div class="hotmiddle">
												<a href="#">
													<p>${res[i].name}</p>
													<div class="line"><span></span></div>
												</a>
											</div>
											<div class="topline"></div>
											<div class="rightline"></div>
											<div class="bottomline"></div>
											<div class="leftline"></div>
										</li>`;
					}
					$(".hotstore_list").find("ul").html(html);
				}
			})
			//hotstore中商标的动画
			$(".hotstore_list").on("mouseenter", "li", function(){
				$(this).find(".hotmiddle").stop().animate({opacity: 1}, 200);
				$(this).find(".topline").stop().animate({width: 166}, 200);
				$(this).find(".rightline").stop().animate({height: 85}, 200);
				$(this).find(".bottomline").stop().animate({width: 166}, 200);
				$(this).find(".leftline").stop().animate({height: 85}, 200);
			})
			$(".hotstore_list").on("mouseleave", "li", function(){
				$(this).find(".hotmiddle").stop().animate({opacity: 0}, 200);
				$(this).find(".topline").stop().animate({width: 0}, 200);
				$(this).find(".rightline").stop().animate({height: 0}, 200);
				$(this).find(".bottomline").stop().animate({width: 0}, 200);
				$(this).find(".leftline").stop().animate({height: 0}, 200);
			})
			
			//获取oversealife数据
			$.ajax({
				url: "../data/oversealife_list.json",
				type: "GET",
				success: function(res){
					var html = "";
					for(var i = 0; i < res.length; i++){
						html += `<li>
											<a href="#">
												<img src="${res[i].img}" alt="" />
												<i></i>
											</a>
										</li>`;
					}
					$(".oversealife_list").html(html);
				}
			})
			//oversealife中的高亮动画
			$(".oversealife_list").on("mouseenter", "li", function(){
				$(this).find("i").stop().animate({left: 402}, 500);
			})
			$(".oversealife_list").on("mouseleave", "li", function(){
				$(this).find("i").animate({left: -402}, 0);
			})
		
			//获取hotitems数据
			//hotitems中文字和图片的动画
			$(".hotitems_box").on("mouseenter", ".hotitems_top1", function(){
				$(this).find(".hotitems_toptext").stop().animate({left: -20}, 200);
			})
			$(".hotitems_box").on("mouseleave", ".hotitems_top1", function(){
				$(this).find(".hotitems_toptext").stop().animate({left: 0}, 200);
			})
			$(".hotitems_box").on("mouseenter", ".hotitems_top1", function(){
				$(this).find(".hotitems_toppic").stop().animate({left: 20}, 200);
			})
			$(".hotitems_box").on("mouseleave", ".hotitems_top1", function(){
				$(this).find(".hotitems_toppic").stop().animate({left: 0}, 200);
			})
			$(".hotitems_box").on("mouseenter", ".hotitems_bottom1", function(){
				$(this).find(".hotitems_bottomtext").stop().animate({left: -20}, 200);
			})
			$(".hotitems_box").on("mouseleave", ".hotitems_bottom1", function(){
				$(this).find(".hotitems_bottomtext").stop().animate({left: 0}, 200);
			})
			$(".hotitems_box").on("mouseenter", ".hotitems_bottom1", function(){
				$(this).find(".hotitems_bottompic").stop().animate({left: 20}, 200);
			})
			$(".hotitems_box").on("mouseleave", ".hotitems_bottom1", function(){
				$(this).find(".hotitems_bottompic").stop().animate({left: 0}, 200);
			})
			//左右滑动
			$(".hotitems_tab").on("mouseenter", "li", function(){
				$(".hotitems_tab").find("li").attr("class", "");
				$(this).attr("class", "active");
				$(".hotitems_box").stop().animate({left: -1210 * $(this).index()}, 200);
			})
		})
		return "index.js载入成功";
	}
	return {
		main: main
	}
})
