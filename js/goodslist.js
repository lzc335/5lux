define(["jquery", "jquery-cookie"], function($){
	var main = function(){
		$(function(){
			//加载商品列表数据
			$.ajax({
				url: "../data/goodslist.json",
				type: "GET",
				success: function(res){
					var html = "";
					for(var i = 0; i < res.length; i++){
						html += `<dd>
									<div class="pitem">
										<div class="inbox">
											<ul>
												<li>
													<a href="#"><img src="${res[i].img}" alt="" /></a>
												</li>
												<li><a href="#"></a></li>
												<li>
													<a href="#">${res[i].title}</a>
												</li>
												<li>${res[i].price}</li>
											</ul>
											<p class="classic"></p>
										</div>
									</div>
								</dd>`;
					}
					$(".shoplist dl").html(html);
				}
			})
			
			//下拉菜单
			$(".nav").on("mouseenter", "#menu_item1", function(){
				$(".leftmenu").attr("style", "display: block;");
			}).on("mouseleave", "#menu_item1", function(){
				$(".leftmenu").attr("style", "display: none;");
			})
			$(".leftmenu").on("mouseenter", ".group", function(){
				$(this).find(".menu_show").attr("style", "display: block;");
			}).on("mouseleave", ".group", function(){
				$(this).find(".menu_show").attr("style", "display: none;");
			})
			
			//获取nav中的数据
			$.ajax({
				url: "../data/nav.json",
				type: "GET",
				success: function(res){
					var html = "";
					for(var i = 0; i < res.length; i++){
						html += `<li>
									<div class="group">
										<span>${res[i].group}</span>
										<i></i>
										<div class="menu_show">
											<div class="showshop">
												<h2>
													<a href="#">${res[i].name}</a>
												</h2>
												<div class="show">
													<a href="#">${res[i].show}</a>
													<a href="#">${res[i].show}</a>
													<a href="#">${res[i].show}</a>
													<a href="#">${res[i].show}</a>
													<a href="#">${res[i].show}</a>
													<a href="#">${res[i].show}</a>
												</div>
											</div>
											<div class="showshop">
												<h2>
													<a href="#">${res[i].name}</a>
												</h2>
												<div class="show">
													<a href="#">${res[i].show}</a>
													<a href="#">${res[i].show}</a>
													<a href="#">${res[i].show}</a>
												</div>
											</div>
											<div class="showshop">
												<h2>
													<a href="#">${res[i].name}</a>
												</h2>
												<div class="show">
													<a href="#">${res[i].show}</a>
													<a href="#">${res[i].show}</a>
													<a href="#">${res[i].show}</a>
													<a href="#">${res[i].show}</a>
												</div>
											</div>
											<div class="showindex">
												<a href="#">进入所有品牌</a>
											</div>
										</div>
									</div>
								</li>`;
					}
					$(".leftmenu").find("ul").html(html);
				}
			})
		
		
		})
		return "goodlist.js载入成功";
	
	}
	return {
		main: main
	}
})
