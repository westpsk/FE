$(function(){

	var speed = 600;//轮播速度
	var interval = 2000;//自轮播时间间隔
	
	var mainTitel = new Array();
	var subTitel = new Array();
	//***********获取主副标题并将title置空
	 mainTitel[0] = $(".slider_b").children("div:eq(0)").children("img").attr("title");
	 mainTitel[1] = $(".slider_b").children("div:eq(1)").children("img").attr("title");
	 mainTitel[2] = $(".slider_b").children("div:eq(2)").children("img").attr("title");

	var src1 = $(".slider_b").children("div:eq(0)").children("img").attr("src");
	var src3 = $(".slider_b").children("div:eq(2)").children("img").attr("src");

	 subTitel[0] = $(".slider_roll").children("div:eq(0)").children("img").attr("title");
	 subTitel[1] = $(".slider_roll").children("div:eq(1)").children("img").attr("title");
	 subTitel[2] = $(".slider_roll").children("div:eq(2)").children("img").attr("title");
	//console.log(subTitel1);
	//console.log(subTitel1);
	for (var i = 0; i < 3; i++) {
		$(".slider_b").children("div:eq("+i+")").children("img").attr("title",'');
		$(".slider_roll").children("div:eq("+i+")").children("img").attr("title",'');
	}

	//*************初始化程序
	for (var i = 1; i < 4; i++) {
		$(".slider_b").children("div:eq("+(i-1)+")").addClass("slider_img_"+i);
		$(".slider_roll").children("div:eq("+(i-1)+")").addClass("slider_roll_"+i);
		if(i == 1){
			continue;
		}else{
			$(".slider_roll").children("div:eq("+(i-1)+")").addClass("slider_roll_o");
		}
	};
	$(".slider_intro_p1").text(mainTitel[0]);
	$(".slider_intro_p2").text(subTitel[0]);
	$(".slider_b").append("<div class='slider_img_4'><img src='"+src1+"'/></div>");
	$(".slider_b").prepend("<div class='slider_img_0'><img src='"+src3+"'/></div>");

	//**************编写主逻辑

	var current = 1;//记录当前显示的序号

	//***************程序随时间响应
	var mouseOnSubImg = 0;
	$(".slider_roll").children("div").hover(function(){
		mouseOnSubImg = 1;
	}).mouseout(function(){
		mouseOnSubImg = 0;
	});

	var mouseOnMainImg = 0;
	$(".slider_b").children("div").hover(function(){
		mouseOnMainImg = 1;
	}).mouseout(function(){
		mouseOnMainImg = 0;
	});

	var mouseOnDxImg = 0;
	$(".slider_dx").hover(function(){
		mouseOnDxImg = 1;
	}).mouseout(function(){
		mouseOnDxImg = 0;
	});
	setInterval(function(){
		
		if( ! $(".slider_b").is(":animated") && mouseOnSubImg == 0 && mouseOnMainImg == 0 && mouseOnDxImg == 0){
			if(current == 3){
				$(".slider_b").stop().animate({ left : -404*(current+1)+"px" },speed,function(){
					$(".slider_b").css("left","-404px");
				});
				current = 1;
			}else{
				$(".slider_b").stop().animate({ left : -404*(current+1)+"px" },speed);	
				current +=1;
			}
		}
	},interval);

});
