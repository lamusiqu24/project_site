$(function(){
	$(".cont2_li li a").mouseenter(function(){
		$(this).addClass("on");
	});
	
	$(".cont2_li li a").mouseleave(function(){
		$(this).removeClass("on");
    });
});