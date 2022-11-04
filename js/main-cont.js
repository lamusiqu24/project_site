$(function(){
    
    //swipe
    var swiper1 = new Swiper('.mv .swiper-container', {
				direction: 'vertical',
				slidesPerView: 1,
				spaceBetween: 30,
				mousewheel: true,
				pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
				spaceBetween: 30,
				centeredSlides: true,
				autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
    });
    
    
    //what' new poster
    var swiper2 = new Swiper('.what_new .swiper-container', {
				slidesPerView: 1,
				spaceBetween: 30,
				mousewheel: true,
				pagination: {
				clickable: true,
            },
              spaceBetween: 30,
				centeredSlides: true,
				autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},   
    });
    
    //dropdown
    $(".drop-down .sel1 a").click(function() {
    $(".drop-down .opt1 ul").slideDown(".on");
	$(".drop-down .opt2 ul").hide(".on");
    });

    //SELECT OPTIONS AND HIDE OPTION AFTER SELECTION
    $(".drop-down .opt1 ul li a").click(function() {
        var text = $(this).html();
        $(".drop-down .sel1 a span").html(text);
        $(".drop-down .opt1 ul").hide();
    }); 


    //HIDE OPTIONS IF CLICKED ANYWHERE ELSE ON PAGE
    $(document).bind("click", function(e) {
        var $clicked = $(e.target);
        if (! $clicked.parents().hasClass("drop-down"))
            $(".drop-down .opt1 ul").hide();
    });




    $(".drop-down .sel2 a").click(function() {
        $(".drop-down .opt2 ul").slideDown(".on");
        $(".drop-down .opt1 ul").hide(".on");
    });

    //SELECT OPTIONS AND HIDE OPTION AFTER SELECTION
    $(".drop-down .opt2 ul li a").click(function() {
        var text = $(this).html();
        $(".drop-down .sel2 a span").html(text);
        $(".drop-down .opt2 ul").hide();
    }); 


    //HIDE OPTIONS IF CLICKED ANYWHERE ELSE ON PAGE
    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (! $clicked.parents().hasClass("drop-down"))
            $(".drop-down .opt2 ul").hide();
    });
	
	//what's new hover
	$(".new_box li").mouseenter(function(){
		$(this).addClass("on");
	});
	
	$(".new_box li").mouseleave(function(){
		$(this).removeClass("on");
	});
	
    //alert
    $(".input_box button").click(function(){
        alert("내용이 입력되지 않았습니다.");
        window.onload();
    });
    
	
	
    //review_wheel
    $(function ($) {
            $.fn.hScroll = function (amount) {
                amount = amount || 120;
                $(this).bind("DOMMouseScroll mousewheel", function (event) {
                    var oEvent = event.originalEvent, 
                        direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
                        position = $(this).scrollLeft();
                    position += direction > 0 ? -amount : amount;
                    $(this).scrollLeft(position);
                    event.preventDefault();
                })
            };
        });

    $(document).ready(function() {
                $(".review .scroll__container").hScroll(60); // You can pass (optionally) scrolling amount
    });
    
	//review hover
    function reviewHover(){
        if($(window).width() > 640){
            $(".scroll__element").mouseenter(function(){
              $(this).addClass("on");
                $(".review .inner").css("height","100%");
            });

            $(".scroll__element").mouseleave(function(){
                $(this).removeClass("on");
            });
        }else{
            $(".scroll__element").mouseenter(function(){
                $(this).removeClass("on");
            });
        }
    }
    
    reviewHover();
    
	$(window).resize(function(){
        reviewHover();
    });
    
    
    
    
    //poster_slide
    var totalNum = $(".what_new .swiper-slide").length;
    var currentNum = 1;
						
    $(".next").click(function(){
        currentNum++;
        if(currentNum > totalNum){ 
           currentNum = 1; 
           }

        $(".what_new .swiper-slide:first").insertAfter(".swiper-slide:last");
    });


    $(".prev").click(function(){
        currentNum--; 
        if(currentNum < 1){
           currentNum = totalNum;
       }

        $(".what_new .swiper-slide:last").insertBefore(".what_new .swiper-slide:first");
    });
    
    //popup
    $("#popup button").click(function(){
        $("#popup").hide()
    });
    
    
    //top btn
    $(window).scroll(function() {
				if ($(this).scrollTop() > 800) {
					$('#top_btn').fadeIn(),
					$('#top_btn').animate({bottom:10},1000).animate({bottom:0})
				} else {
					$('#top_btn').fadeOut();
				}
			});

			$("#top_btn").click(function() {
				$('html, body').animate({
					scrollTop : 0
				}, 400);
				return false;
			});
});