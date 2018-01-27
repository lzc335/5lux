define(["jquery", "jquery-cookie"], function($){
	var main = function(){
		$(function(){
			//计算购物车数字
			function sc_car(){
				var sc_str = $.cookie("goods");
				if(sc_str){ //如果cookie存在
					var arr = eval(sc_str);
					var sum = 0; //用于累加的和
					for(var i in arr){
						sum += arr[i].num;
					}

					$("#cart_number").html(sum);
				}else{
					$("#cart_number").html(0);
				}
			}
			sc_car();
			//购物车出现消失
			$(".mid").find(".cart").on("mouseenter", "dt", function(){
				sc_msg();
				$(".cart").find("dd").attr("style", "display: block;");
				$(".cart").find("b").attr("style", "display: block;");
			})
			$(".mid").find(".cart").on("mouseleave", "dt", function(){
				$(".cart").find("dd").attr("style", "display: none;");
				$(".cart").find("b").attr("style", "display: none;");
			})
			//加载购物车中的数据
			function sc_msg(){
				$.ajax({
					url: "../data/goodslist.json",
					type: "get",
					success: function(res){
						//a:找出所有cookie数据

						if(!$.cookie("goods")){
							//要将购物车内的商品清空
							$(".cart dd").html("购物袋暂时没有商品，<br/>赶紧选择心爱的商品吧！");
							return;
						}

						var arr = eval($.cookie("goods"));
						var html = '';
						for(var i = 0; i < arr.length; i++){
							//用id当做下标取出数据${res[arr[i].id].img}
							html += `<div class="cart_goods">
										<img src="${res[arr[i].id].img}" alt="" />
										<div class="cg_right">
											<p>价格：${res[arr[i].id].price}</p>
											<p>数量：${arr[i].num}</p>
										</div>
									</div>
									<div class="cart_foot">
										<div class="sum">总价：${res[arr[i].id].price * arr[i].num}</div>
									</div>`
						}
						$(".cart dd").html(html);
					}
				})
			}
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
													<a href="detail.html"><img src="${res[i].img}" alt="" /></a>
												</li>
												<li><a href="detail.html"></a></li>
												<li>
													<a href="detail.html">${res[i].title}</a>
												</li>
												<li>${"￥" + res[i].price}</li>
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
													<a href="goodslist.html">${res[i].name}</a>
												</h2>
												<div class="show">
													<a href="goodslist.html">${res[i].show}</a>
													<a href="goodslist.html">${res[i].show}</a>
													<a href="goodslist.html">${res[i].show}</a>
													<a href="goodslist.html">${res[i].show}</a>
													<a href="goodslist.html">${res[i].show}</a>
													<a href="goodslist.html">${res[i].show}</a>
												</div>
											</div>
											<div class="showshop">
												<h2>
													<a href="goodslist.html">${res[i].name}</a>
												</h2>
												<div class="show">
													<a href="goodslist.html">${res[i].show}</a>
													<a href="goodslist.html">${res[i].show}</a>
													<a href="goodslist.html">${res[i].show}</a>
												</div>
											</div>
											<div class="showshop">
												<h2>
													<a href="goodslist.html">${res[i].name}</a>
												</h2>
												<div class="show">
													<a href="goodslist.html">${res[i].show}</a>
													<a href="goodslist.html">${res[i].show}</a>
													<a href="goodslist.html">${res[i].show}</a>
													<a href="goodslist.html">${res[i].show}</a>
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
