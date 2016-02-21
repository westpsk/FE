$(function(){
	var interval = 3000;
	var speed = 600;
	var src1 = $(".slide_b").children("div:eq(0)").children("img").attr("src");
	var src3 = $(".slide_b").children("div:eq(2)").children("img").attr("src");
	console.log(src1,src3);

	for(var i=1; i<4; i++){
		$(".slide_b").children("div:eq("+(i-1)+")").addClass("slider_img_"+i);
	}
	$(".slide_b").append("<div class='slider_img_4'><img src="+src1+"></div>");
	$(".slide_b").prepend("<div class='slider_img_0'><img src="+src3+"></div>");

	var mouseOnMainImg = 0;
	$(".slide_b").children("div").hover(function(){
		mouseOnMainImg = 1;
		console.log("onimg");
	}).mouseout(function(){
		mouseOnMainImg = 0;
	});

	var cur = 1;
	setInterval(function(){

		if( ! $(".slide_b").is(":animated") && mouseOnMainImg == 0){
			if(cur==3){
				$(".slide_b").animate({"left":-404*(cur+1)+"px"},speed,function(){
					$(".slide_b").css({"left":-404+"px"});
				});
				cur = 1;
			}else{
				$(".slide_b").animate({"left":-404*(cur+1)+"px"},speed);
				cur += 1;
			}
		}
	}, interval);

});