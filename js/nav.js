$(function(){
	var li = $('.nav ul .m');
	li.eq(0).find('a').eq(0).hover(function(){
		$(this).html('HOME');
	},function(){
		$(this).html('首页');
	});

	li.eq(1).find('a').eq(0).hover(function(){
		$(this).html('MUSIC');
	},function(){
		$(this).html('我的音乐');
	});
	
	li.eq(2).find('a').eq(0).hover(function(){
		$(this).html('Ranking');
	},function(){
		$(this).html('排行榜');
	});
	
	li.eq(3).find('a').eq(0).hover(function(){
		$(this).html('New songs');
	},function(){
		$(this).html('新歌首发');
	});
	
	li.eq(4).find('a').eq(0).hover(function(){
		$(this).html('sheet');
	},function(){
		$(this).html('歌单');
	});
	
	li.eq(5).find('a').eq(0).hover(function(){
		$(this).html('player');
	},function(){
		$(this).html('播放器');
	});
	
	li.eq(6).find('a').eq(0).hover(function(){
		$(this).html('Login / registration');
	},function(){
		$(this).html('登录/注册');
	});

	li.eq(7).find('a').eq(0).hover(function(){
		$(this).html('JOIN');
	},function(){
		$(this).html('联系我们');
	});
	
	
	
	//根据网站目录结构对应导航高亮显示（可忽略）
	
	var url = window.location.href.toLowerCase();
	//alert(url);
	if (url.indexOf("/website/case/") > -1) {
		$(".aa4").attr("id", "sel");
	} else if (url.indexOf("/news/") > -1||url.indexOf("/marketing/knowledge/") > -1||url.indexOf("/about/news/") > -1||url.indexOf("/website/newweb/") > -1||url.indexOf("/marketing/seo/") > -1) {
		$(".aa5").attr("id", "sel");
	} else if (url.indexOf("/service/contact") > -1) {
		$(".aa7").attr("id", "sel");
	} else if (url.indexOf("/about/") > -1||url.indexOf("/service/") > -1) {
		$(".aa2").attr("id", "sel");
	} else if (url.indexOf("/mobile/") > -1||url.indexOf("/wangzhanjianshe/") > -1) {
		$(".aa6").attr("id", "sel");
	} else if (url.indexOf("/website/") > -1) {
		$(".aa3").attr("id", "sel");
	} else if (url.indexOf("/solutions/") > -1) {
		$(".aa8").attr("id", "sel");
	} else if (url.indexOf("www.yibaixun.com/index.html") > -1) {
		$(".aa1").attr("id", "sel");
	} else {
		$(".aa1").attr("id", "sel");
	}
	
});