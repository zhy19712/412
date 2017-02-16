$(function(){
	$("#header .second-house p").hover(function(){
		$("#header .second-house ul").removeClass("none")
	},function(){
		$("#header .second-house ul").addClass("none")
	})
	$("#header .second-house ul").hover(function(){
		$("#header .second-house ul").removeClass("none");
	},function(){
		$("#header .second-house ul").addClass("none");
	});
	$("#header .search-condition>li>ul>li").click(function(){		
		$(this).parents("li").children("span").text($(this).text());
		$(this).parent("ul").addClass("none");
	});
	$("#header .search-condition>li").hover(function(){
		$(this).children("ul").removeClass("none");
	},function(){
		$(this).children("ul").addClass("none");
	});
	$("#header .search-condition>li>.more>div>ol>li").click(function(){
		$(this).parents("div.more>div").children("span").text($(this).text());
		$(this).parent("ol").addClass("none");
	});
	$("#header .search-condition>li>.more>div").hover(function(){
		$(this).children("ol").removeClass("none");
	},function(){
		$(this).children("ol").addClass("none");
	});
	$("#header .search-condition>li:last-child").click(function(){
		$(this).parent("ul").find("span").text("不限");
		$(this).parent("ul").find("li:first-child>span").text("售价");
		$(this).parent("ul").find("li:nth-child(2)>span").text("面积");
		$(this).parent("ul").find("li:nth-child(3)>span").text("房型");
		$(this).parent("ul").find("div.more").parent("li").children("span").text("更多");
		$(this).parent("ul").find("span:last-child").text("清除全部条件");		
	});
	var x = 0; 
	for(i=0;i<myul.children.length;i++){
		myul.children[i].onmouseenter=function(){
			target=this.offsetTop;
		}
		myul.children[i].onmouseleave=function(){
			target=x;
		}
		myul.children[i].onclick=function(){
			x=this.offsetTop;
		}
	}
	var leader = 0, target = 0;
    setInterval(function(){
        leader = leader + (target - leader ) / 10;
        bg.style.top = leader + "px";
    },10);
    $("#left>.right>ul>li").click(function(){
    	$("#left>.right>ul>li").css({"background-color":"transparent","border-color":"transparent"});
    	$(this).css({"background-color":"#fff","border-left":"1px solid #bcbcbc","border-right":"1px solid #bcbcbc","border-bottom":"1px solid #fff"})
    })
})