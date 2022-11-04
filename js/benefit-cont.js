$(function(){
 
    //hover
    $(".cont_box a").mouseenter(function(){
		$(this).addClass("on");
	});
	
	$(".cont_box a").mouseleave(function(){
		$(this).removeClass("on");
	});
    

});