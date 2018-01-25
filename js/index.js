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
			//获取下拉菜单menuleft数据
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
			
			//购物车出现消失
			$(".mid").find(".cart").on("mouseenter", "dt", function(){
				$(".cart").find("dd").attr("style", "display: block;");
				$(".cart").find("b").attr("style", "display: block;");
			})
			$(".mid").find(".cart").on("mouseleave", "dt", function(){
				$(".cart").find("dd").attr("style", "display: none;");
				$(".cart").find("b").attr("style", "display: none;");
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
			$.ajax({
				url: "../data/hotitems_list.json",
				type: "GET",
				success: function(res){
					var html = "";
					var html3li = "";
					for(var i = 0; i < 2; i++){
						html += `<li>
											<div class="hotitems_left">
												<a href="#">
													<img src="${res[0].img}" alt="" />
												</a>
											</div>
											<div class="hotitems_right">
												<div class="hotitems_top">
													<div class="hotitems_top1">
														<div class="hotitems_toptext">
															<p>${res[1].ename}</p>
															<p>${res[1].cname}</p>
															<p>${res[1].price}</p>
														</div>
														<div class="hotitems_toppic">
															<a href="#">
																<img src="${res[1].img}" alt="" />
															</a>
														</div>
													</div>
													<div class="hotitems_top1 hotitems_top2">
														<div class="hotitems_toptext">
															<p>${res[2].ename}</p>
															<p>${res[2].cname}</p>
															<p>${res[2].price}</p>
														</div>
														<div class="hotitems_toppic">
															<a href="#">
																<img src="${res[2].img}" alt="" />
															</a>
														</div>
													</div>
													<div class="hotitems_top1">
														<div class="hotitems_toptext">
															<p>${res[3].ename}</p>
															<p>${res[3].cname}</p>
															<p>${res[3].price}</p>
														</div>
														<div class="hotitems_toppic">
															<a href="#">
																<img src="${res[3].img}" alt="" />
															</a>
														</div>
													</div>
												</div>
												<div class="hotitems_bottom">
													<div class="hotitems_bottom1">
														<div class="hotitems_toptext">
															<p>${res[4].ename}</p>
															<p>${res[4].cname}</p>
															<p>${res[4].price}</p>
														</div>
														<div class="hotitems_toppic">
															<a href="#">
																<img src="${res[4].img}" alt="" />
															</a>
														</div>
													</div>
													<div class="hotitems_bottom1">
														<div class="hotitems_toptext">
															<p>${res[5].ename}</p>
															<p>${res[5].cname}</p>
															<p>${res[5].price}</p>
														</div>
														<div class="hotitems_toppic">
															<a href="#">
																<img src="${res[5].img}" alt="" />
															</a>
														</div>
													</div>
													<div class="hotitems_bottom1">
														<div class="hotitems_toptext">
															<p>${res[6].ename}</p>
															<p>${res[6].cname}</p>
															<p>${res[6].price}</p>
														</div>
														<div class="hotitems_toppic">
															<a href="#">
																<img src="${res[6].img}" alt="" />
															</a>
														</div>
													</div>
												</div>
											</div>
										</li>`;
					}
					html3li = `<li>
										<div class="hotitems_3li">
											<div class="hotitems_3li_one hotitems_3li_img">
												<dl>
													<dd>
														<a href="#">
															<img src="${res[7].img}" alt="" />
														</a>
													</dd>
												</dl>
											</div>
										</div>
										<div class="hotitems_3li">
											<div class="hotitems_3li_two hotitems_3li_img">
												<dl>
													<dd>
														<a href="#">
															<img src="${res[8].img}" alt="" />
														</a>
													</dd>
												</dl>
											</div>
											<div class="hotitems_3li_two hotitems_3li_img">
												<dl>
													<dd>
														<a href="#">
															<img src="${res[9].img}" alt="" />
														</a>
													</dd>
												</dl>
											</div>
										</div>
										<div class="hotitems_3li">
											<div class="hotitems_3li_two hotitems_3li_img">
												<dl>
													<dd>
														<a href="#">
															<img src="${res[10].img}" alt="" />
														</a>
													</dd>
												</dl>
											</div>
											<div class="hotitems_3li_two hotitems_3li_img">
												<dl>
													<dd>
														<a href="#">
															<img src="${res[11].img}" alt="" />
														</a>
													</dd>
												</dl>
											</div>
										</div>
									</li>`;
					html += html3li;
					$(".hotitems_box").html(html);
				}
			})
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
				$(this).find(".hotitems_toptext").stop().animate({left: -20}, 200);
			})
			$(".hotitems_box").on("mouseleave", ".hotitems_bottom1", function(){
				$(this).find(".hotitems_toptext").stop().animate({left: 0}, 200);
			})
			$(".hotitems_box").on("mouseenter", ".hotitems_bottom1", function(){
				$(this).find(".hotitems_toppic").stop().animate({left: 20}, 200);
			})
			$(".hotitems_box").on("mouseleave", ".hotitems_bottom1", function(){
				$(this).find(".hotitems_toppic").stop().animate({left: 0}, 200);
			})
			//左右滑动
			$(".hotitems_tab").on("mouseenter", "li", function(){
				$(".hotitems_tab").find("li").attr("class", "");
				$(this).attr("class", "active");
				$(".hotitems_box").stop().animate({left: -1210 * $(this).index()}, 200);
			})
		
			//达成shoppingmall_list的上下滚动
			$(".shoppingmall_list").find("li").mouseenter(".shoppingmall_box", function(){
				$(this).stop().animate({top: -50}, 250);
			})
			$(".shoppingmall_list").find("li").mouseleave(".shoppingmall_box", function(){
				$(this).stop().animate({top: 0}, 250);
			})
			

			//获取goods数据
			$.ajax({
				url: "../data/goods.json",
				type: "GET",
				success: function(res){
					var html = "";
					var goods2 = "";
					var goods3 = "";
					for(var i = 0; i < res.length; i++){
						goods2 = `<a href="#"><img src="${res[i].showimg}" alt="" /></a>
								<div class="goods2_label">
									<dl>
										<dd>${res[i].name}</dd>
										<dd><b></b></dd>
										<dd>${res[i].desc1}</dd>
										<dt>${res[i].desc2}</dt>
									</dl>
								</div>`;
								
						goods3 = `<div class="goods3pic">
									<a href=""><img src="${res[i].img}" alt="" /></a>
								</div>
								<div class="goods3pic">
									<a href=""><img src="${res[i].img}" alt="" /></a>
								</div>
								<div class="goods3pic">
									<a href=""><img src="${res[i].img}" alt="" /></a>
								</div>
								<div class="goods3pic">
									<a href=""><img src="${res[i].img}" alt="" /></a>
								</div>`;
						$(".goods").eq(i).find(".goods2").html(goods2);
						$(".goods").eq(i).find(".goods3").html(goods3);
					}
				}
			})
			
			//获取promotion_box中的event数据
			$.ajax({
				url: "../data/event.json",
				type: "GET",
				success: function(res){
					var html = "";
					html = `<div class="promotion1">
								<div class="promotion1pic pro1pic1">
									<a href=""><img src="${res[0].img}" alt="" /></a>
								</div>
								<div class="promotion1pic pro1pic2">
									<a href=""><img src="${res[1].img}" alt="" /></a>
								</div>
								<div class="promotion1pic">
									<a href=""><img src="${res[2].img}" alt="" /></a>
								</div>
							</div>
							<div class="promotion2">
								<div class="promotion1pic pro1pic2">
									<a href=""><img src="${res[3].img}" alt="" /></a>
								</div>
								<div class="promotion1pic pro1pic2">
									<a href=""><img src="${res[4].img}" alt="" /></a>
								</div>
								<div class="promotion1pic">
									<a href=""><img src="${res[5].img}" alt="" /></a>
								</div>
							</div>
							<div class="promotion3">
								<div class="proleft">
									<div class="proleftpic">
										<div class="proleftpicbox">
											<a href="#"><img src="${res[6].img}" alt="" /></a>
											<div class="topline"></div>
											<div class="rightline"></div>
											<div class="bottomline"></div>
											<div class="leftline"></div>
										</div>
									</div>
									<div class="proleftpic">
										<div class="proleftpicbox">
											<a href="#"><img src="${res[6].img}" alt="" /></a>
											<div class="topline"></div>
											<div class="rightline"></div>
											<div class="bottomline"></div>
											<div class="leftline"></div>
										</div>
									</div>
									<div class="proleftpic">
										<div class="proleftpicbox">
											<a href="#"><img src="${res[6].img}" alt="" /></a>
											<div class="topline"></div>
											<div class="rightline"></div>
											<div class="bottomline"></div>
											<div class="leftline"></div>
										</div>
									</div>
									<div class="proleftpic">
										<div class="proleftpicbox">
											<a href="#"><img src="${res[6].img}" alt="" /></a>
											<div class="topline"></div>
											<div class="rightline"></div>
											<div class="bottomline"></div>
											<div class="leftline"></div>
										</div>
									</div>
									<div class="proleftpic">
										<div class="proleftpicbox">
											<a href="#"><img src="${res[6].img}" alt="" /></a>
											<div class="topline"></div>
											<div class="rightline"></div>
											<div class="bottomline"></div>
											<div class="leftline"></div>
										</div>
									</div>
									<div class="proleftpic">
										<div class="proleftpicbox">
											<a href="#"><img src="${res[6].img}" alt="" /></a>
											<div class="topline"></div>
											<div class="rightline"></div>
											<div class="bottomline"></div>
											<div class="leftline"></div>
										</div>
									</div>
								</div>
								<div class="proright">
									<a href="#"><img src="${res[7].img}" alt="" /></a>
								</div>
							</div>`;
					$(".promotion_box").html(html);
				}
			})
			//promotion_box左下角的动画效果
			$(".promotion_box").on("mouseenter", ".proleftpicbox", function(){
				$(this).find(".topline").stop().animate({width: 194}, 200);
				$(this).find(".rightline").stop().animate({height: 65}, 200);
				$(this).find(".bottomline").stop().animate({width: 194}, 200);
				$(this).find(".leftline").stop().animate({height: 65}, 200);
			})
			$(".promotion_box").on("mouseleave", ".proleftpicbox", function(){
				$(this).find(".topline").stop().animate({width: 0}, 200);
				$(this).find(".rightline").stop().animate({height: 0}, 200);
				$(this).find(".bottomline").stop().animate({width: 0}, 200);
				$(this).find(".leftline").stop().animate({height: 0}, 200);
			})
			
			//关闭popup弹窗
			$(".popup_close").click(".popup_close", function(){
				$(".popup").remove();
			})
			
		})
		return "index.js载入成功";
	}
	return {
		main: main
	}
})
