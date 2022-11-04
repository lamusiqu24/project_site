$(function(){
	$(".skip_nav a").focus(function(){ 
                $(this).parent().css({"position":"static","top":0});
            }).blur(function(){ 
                $(this).parent().css({"position":"absolute","top":-61});
            }); 
	
	$("#gnb li.m").on("mouseenter focusin",function(){
	$(this).children("ul").stop().slideDown();
	$(this).siblings().children("ul").hide();

	$(this).addClass("on").siblings().removeClass("on");

	}).mouseleave(function(){
	$("#gnb li.m ul").hide();
	$(this).removeClass("on");
	});

	$(":not(#gnb a)").focus(function(){
	$("#gnb li.m ul").hide();
	$("#gnb li.m").removeClass("on");
	});
    
});
	
	

	/*menu-slide 640px*/
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector("#menuicon").addEventListener("click", function(e){
        if ( document.querySelector('.menuwrap').classList.contains('on') ){
            //메뉴닫힘
            document.querySelector('.menuwrap').classList.remove('on'); document.querySelector('#menuicon').classList.remove('input[id="menuicon"]:checked') ;document.querySelector('#menuicon').classList.add('input[id="menuicon"]');
            $(".gnb_wrap h1").css("display","block");

   
        } else {
            //메뉴펼침
            document.querySelector('.menuwrap').classList.add('on'); document.querySelector('#menuicon').classList.remove('input[id="menuicon"]'); document.querySelector('#menuicon').classList.add('input[id="menuicon"]:checked');
            $(".gnb_wrap h1").css("display","none");
        }
    });
});