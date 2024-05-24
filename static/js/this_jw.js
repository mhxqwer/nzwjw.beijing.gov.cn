//焦点图轮播效果

$(function() {
	var bannerSlider = new Slider($('#banner_tabs'), {
		time: 5000,
		delay: 400,
		event: 'hover',
		auto: true,
		mode: 'fade',
		controller: $('#bannerCtrl'),
		activeControllerCls: 'active'
	});
	$('#banner_tabs .flex-prev').click(function() {
		bannerSlider.prev()
	});
	$('#banner_tabs .flex-next').click(function() {
		bannerSlider.next()
	});

	//教育资讯鼠标滑动效果

	$("#new_zyly li").mouseover(function() {
		$(this).addClass("z-now").siblings().removeClass("z-now");
		$(".mt30 .edu_list .zg").eq($(this).index()).show().siblings().hide();
	});
	//权力清单切换
	$(".dh_ul_list li").mouseover(function(){
	    $(this).addClass("on").siblings().removeClass("on");
	    $(".announce_list>div").eq($(this).index()).show().siblings().hide();
	});
	//弹出微信二维码
	$(document).ready(function(){
	    $(".zmhd_weixin").on("click",function(){
	        $(".erweima_box").toggle();
	        $("em").toggle();
	    });
	    //return false;
	    //$(document).click(function(){
	    //    $(".erweima_box").hide();
	    //});
	
	    //���������΢�Ŷ�ά��
	    $(".zmhd_ewm").on("click",function(){
	        $(".zmhd_wx_erweima").toggle();
	    });
	
	});
	//非本网站域名跳出
	$("a").each(function(){
	    var htm=$(this).html();
	    $(this).click(function(){
			if(this.href!=""&&this.href.toLowerCase().indexOf("javascript")==-1&&this.href.toLowerCase().indexOf("jw.beijing.gov.cn")==-1&&this.href.toLowerCase().indexOf("mail.bjedu.gov.cn")==-1&&this.href.toLowerCase().indexOf("www.beijing.gov.cn/")==-1&&this.href.toLowerCase().indexOf("javascript:preVious")==-1&&this.href.toLowerCase().indexOf("javascript:next")==-1){
	
			document.getElementById('outUrl').innerText=this.href;
		          document.getElementById('hash').click();
			$(".alert-mengban").fadeIn(200);
			$(".alert-warning").delay(200).show().animate({top:"75px"}, 300);
			$("#closets,.fangqi,.alert-mengban").click(function() {
				$(".alert-warning").animate({top:"-400px"}, 200).hide(300);
				$(".alert-mengban").delay(300).fadeOut(300);
			});
			$(".continue").click(function(){			
			       $(".alert-warning").hide(200);
		                 $(".alert-mengban").delay(200).fadeOut(200);
			})
			
	
			return false;
	
			}
	        });
	    });
		
		//教育资源鼠标滑动效果
		
		    $(".edu_res_box1 li").each(function(e,ele){
		        $(this).find('img').attr('src','../images/'+'jw_syjyzy_'+(e+1)+'_0'+(1)+'.png');
		        var oldColor=$(this).find('a').css('color');
		        $(this).hover(function(){
		            $(this).find('a').css('color',"#bd1a2d");
		            $(this).find('img').attr('src','../images/'+'jw_syjyzy_'+(e+1)+'_0'+(1+2)+'.png');
		        },function(){
		            $(this).find('a').css('color',oldColor);
		            $(this).find('img').attr('src','../images/'+'jw_syjyzy_'+(e+1)+'_0'+(1)+'.png');
		        });
		    });
			
//导航下拉
	$(function(){
		$(".jw_nav-ulist>li").find("#jw_bighide").hide();
	 $(".jw_nav-ulist>li").hover(function(){
		 $(".jw_nav-ulist>li").find("#jw_bighide").hide();
		 $(this).find("#jw_bighide").show();
	 });         

	});

});
