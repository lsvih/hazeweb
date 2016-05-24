//JSHint Validated Custom JS Code by Designova

/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

    
     //Detecting viewpot dimension and calculating the adjustments of components   
     var viewportHeight = $(window).height();
     //alert(viewportHeight);
     $('#header, .realm-heading').css('height',viewportHeight);




      //Setup Flickr Feed
  $('#flickr').jflickrfeed({
    limit: 12, //Number of images to be displayed
    qstrings: {
      id: ''//Change this to any Flickr Set ID as you prefer.
    },
    itemTemplate: '<div class="flickr-thumb flickr-photo"><a href="{{image_b}}" target="_blank"><img src="{{image_m}}" alt="{{title}}" /></a></div>'
  });


  //Parallax Init
    $(window).stellar({
        responsive: false,
        horizontalScrolling: false,
        parallaxBackgrounds: true,
        parallaxElements: true,
        hideDistantElements: true
    });


    //Scrolling Trigger
    $(".scroll-link").click(function() {
        var ScrollOffset = $(this).attr('data-soffset');
        //alert(ScrollOffset);
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top-ScrollOffset + "px"
        }, {
            duration: 1500,
            easing: "swing"
        });
        return false;
    });


     //Nav highlight
   
    $('.page').mouseenter(function(){
        var sectionId = $(this).attr('id');
        $('.nav ul li > a').removeClass('active');
        $('#'+sectionId+'-linker').addClass('active');
    });
    
    //News Section - Click n Scroll
    $('.nav ul li a').click(function(){
				$('.nav ul li a').removeClass('active');
				$(this).addClass('active');
			});

$('a.news-scroll-link').live('click',function() {
				$('html, body').animate({
					scrollTop: $($(this).attr('href')).offset().top-20 + 'px'
				},{
					duration: 1000
					
				});
				return false;
			});
//News Plugin
var title = $(".news-img-section .imgs:first-child a").data('title');
		var newstitle = $(".news-img-section .imgs:first-child a").data('newstitle');
		var txt = $(".news-img-section .imgs:first-child a").data('txt');
		var txt_color = $(".news-img-section .imgs:first-child a").data('color');
		var bg_color = $(".news-img-section .imgs:first-child a").data('bgcolor');
		var img = $(".news-img-section .imgs:first-child a img").attr('src');
		var href = $(".news-img-section .imgs:first-child a").data('href');
		

		$(".news-main-space h1").html(title);
		$(".news-main-space h3").html(newstitle);
		$(".news-main-space p").html(txt);
		$(".news-main-space").css("color",txt_color);
		$(".news-main-space").css("background-color",bg_color);
		$(".news-main-space img").attr('src', img);
		$(".news-main-space .news-main-learn-more a").attr('href',href);
		$(".news-main-space .news-main-learn-more").css("background-color",bg_color);

		$(".news-img-section .imgs a").click (function () {
			var title = $(this).data('title');
			var newstitle = $(this).data('newstitle');
			var txt = $(this).data('txt');
			var txt_color = $(this).data('color');
			var bg_color = $(this).data('bgcolor');
			var img = $(this).children('img').attr('src');
			var href = $(this).data('href');

			$(".news-main-space h1").html(title);
			$(".news-main-space h3").html(newstitle);
			$(".news-main-space p").html(txt);
			$(".news-main-space").css("color",txt_color);
			$(".news-main-space").css("background-color",bg_color);
			$(".news-main-space img").attr('src', img);
			$(".news-main-space .news-main-learn-more a").attr('href',href);
			$(".news-main-space .news-main-learn-more").css("background-color",bg_color);
			// return false;
		});

//Bootstrap Carousel
$('.carousel').carousel({
    interval: 3000,
    pause: "none"
    });




//Lightbox for portfolio
$(".portfolio a[data-gal^='prettyPhoto']").prettyPhoto({
				theme:'light_square', 
				autoplay_slideshow: false, 
				overlay_gallery: false, 
				show_title: true
			});

  var deviceAgent = navigator.userAgent.toLowerCase();

var isTouchDevice = Modernizr.touch || 
(deviceAgent.match(/(iphone|ipod|ipad)/) || 
  deviceAgent.match(/(android)/) || 
  deviceAgent.match(/(iemobile)/) || 
  deviceAgent.match(/iphone/i) ||
  deviceAgent.match(/ipad/i) || 
  deviceAgent.match(/ipod/i) || 
  deviceAgent.match(/blackberry/i) || 
  deviceAgent.match(/bada/i));

if (isTouchDevice) { 
  $('.portfolio .element').click(function(){
    $('.portfolio-visibility').css('visibility', 'hidden');
    $('.element-image img').removeClass('element-onhover');
    $(this).find('.element-image img').addClass('element-onhover');
    $(this).children('.portfolio-visibility').css('visibility', 'visible');
  });  

  //Portfolio Filter On Click
  $('.inner-link').find('a').click(function(){
    $('.inner-link').find('a').removeClass('.selected');
    $(this).addClass('.selected');
    $('.portfolio-visibility').css('visibility', 'hidden');
    $('.element-image img').removeClass('element-onhover');
  });

 /* $('.portfolio-visibility').css('visibility', 'visible');
  $('.element .element-image img').css('opacity','0.3');*/
} 
else { 

  $('.portfolio .element').mouseenter(function(){
    $('.portfolio-visibility').css('visibility', 'hidden');
    $('.element-image img').removeClass('element-onhover');
    $(this).find('.element-image img').addClass('element-onhover');
    $(this).children('.portfolio-visibility').css('visibility', 'visible');
  });

  $('.portfolio .element').mouseleave(function(){
    $('.element-image img').removeClass('element-onhover');
    $(this).children('.portfolio-visibility').css('visibility', 'hidden');
  });

  //Portfolio Filter On Click
$('.inner-link').find('a').click(function(){
        $('.inner-link').find('a').removeClass('.selected');
        $(this).addClass('.selected');
      });

}


	
});


})();








	

