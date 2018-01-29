define(["jquery", "jquery-cookie"], function($){
	var main = function(){
		$(function(){
			
			//加载商品详情数据
			$.ajax({
				url: "../data/goodslist.json",
				type: "GET",
				success: function(res){
					var html = "";
	                var search = location.search;
	                var start = search.indexOf("id");
	                if(start == -1){
	                    return null;
	                }else{
	                    var end = search.indexOf("&", start);
	                    if(end == -1){
	                        end = search.length;
	                    }
	                }
	                var subStr = search.substring(start, end);
	                var arr = subStr.split("=");
	                var id = arr[1];

					html = `<div class="main_left"><img src="${res[id].show}" alt="" /><div class="floatbox"></div></div>
							<div class="main_right">
								<ul class="mr_ul">
									<li class="mr_top">
										<dl>
											<dd><a href="#">${res[id].brand}</a></dd>
											<dd><a href="#">${res[id].title}</a></dd>
											<dd>${"货号: " + res[id].label}</dd>
										</dl>
									</li>
									<li class="mr_price">
										<span>${"￥" + res[id].price}</span>
										<div>
											<span>红卡会员价</span>
										</div>
									</li>
									<li class="mr_event">
										<table>
											<thead>
												<tr>
													<th>
														<span>活动</span>
													</th>
													<th>
														<span>订单满9999元送价值1199元时尚管家服务</span>
													</th>
												</tr>
											</thead>
										</table>
									</li>
									<li class="mr_color">
										<div class="mrc_l">
											<span>颜色</span>
										</div>
										<div class="mrc_r">
											<div><a href="">${res[id].color}</a></div>
										</div>
									</li>
									<li class="mr_desc">
										<dl>
											<dt>发货门店</dt>
											<dd>此货品将由第五大道奢侈品网为您发货</dd>
										</dl>
										<dl>
											<dt>发货时效</dt>
											<dd>预计6-15个工作日发货，延迟发货慢必赔！</dd>
										</dl>
										<dl>
											<dt>温馨提示</dt>
											<dd>本商品 有质量问题支持7天退换货</dd>
										</dl>
										<dl>
											<dt>包邮政策</dt>
											<dd>白金钻石顺丰包邮，注册用户满99元免邮</dd>
										</dl>
									</li>
									<li class="mr_btn" id="${res[id].id}">
										<div>
											<span>加入购物袋</span>
											<b></b>
										</div>
									</li>
								</ul>
								<div class="detail_bottom"><img src="images/detail_bottom.png" alt="" /></div>
							</div>`;
					$(".main").html(html);
					$(".floatpic").html(`<img class="hideimg" src="${res[id].show}" alt="" />`)
				}
			})
			//添加到购物车
			$(".main").on("click", ".mr_btn", function(){

				//a:取出当前按钮对应的商品的id
				var id = this.id;
				//b:判断是否是第一次添加该商品
				var first = $.cookie("goods") == null ? true : false;

				if(first){ //第一次添加
					//设置cookie  [{id:id,num:1}]
					$.cookie("goods", "[{id:" + id + ",num:1}]", {
						expires: 7
					});
				}else{
					//c:判断之前是否有添加过该商品
					var str = $.cookie("goods");
					var arr = eval(str);
					var same = false; //代表是否有相同商品


					//b:遍历所有的对象，判断id是否有相同的，如果有num++
					for(var i in arr){
						if(arr[i].id == id){
							arr[i].num++;

							var cookieStr = JSON.stringify(arr);
							$.cookie("goods", cookieStr, {
								expires: 7
							})
							same = true;
							break;
						}
					}

					//e:是否有相同的商品 新增商品 数量是1
					if(!same){
						var obj = {id: id, num: 1};
						arr.push(obj);
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr, {
							expires: 7
						});
					}
				}
				// alert($.cookie("goods"));
				sc_car();
				singleton();
				//为了阻止冒泡
				return false;
			})
			//弹出窗口
			var singleton = (function(){
				var oDiv = null; 

				var createDiv = function(){
					if(!oDiv){
						var sc_str = $.cookie("goods");
						if(sc_str){ //如果cookie存在
							var arr = eval(sc_str);
							var sum = 0; //用于累加的和
							for(var i in arr){
								sum += arr[i].num;
							}
						}
						oDiv = document.createElement("div");
						oDiv.id = "alertdiv";
						oDiv.innerHTML = `成功加入购物袋<br />当前购物袋内的商品数量为
										<span>${sum}</span>
										<div>X&nbsp;</div>`;
					
						document.body.appendChild(oDiv);
					}
				}
				
				return createDiv;
			})();
			$(document).on("click", "#alertdiv div", function(){
				$("#alertdiv").remove();
			})
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
			$(".mid").on("mouseenter", ".cart", function(){
				sc_msg();
				$(".cart").find("dd").attr("style", "display: block;");
				$(".cart").find("b").attr("style", "display: block;");
			})
			$(".mid").on("mouseleave", ".cart", function(){
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
						var sum = 0;
						var htmlLast = '';
						for(var i = 0; i < arr.length; i++){
							//用id当做下标取出数据${res[arr[i].id].img}
							html += `<div class="cart_goods">
										<img src="${res[arr[i].id].img}" alt="" />
										<div class="cg_right">
											<p>价格：${res[arr[i].id].price}</p>
											<p>数量：${arr[i].num}</p>
										</div>
									</div>`
							sum += res[arr[i].id].price * arr[i].num;
						}
						htmlLast = `<div class="cart_foot">
										<div class="sum">总价：${"￥" + sum}</div>
										<a href="cart.html">
											<div class="entercart">进入购物车</div>
										</a>
									</div>`
						html += htmlLast;
						$(".cart dd").html(html);
					}
				})
			}
			
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
		return "detail.js载入成功";
	
	}
	return {
		main: main
	}
})
