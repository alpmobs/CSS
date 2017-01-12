$(document).ready(function() {

	// parameter
	$('#navfirst').css({'color' : '#ffabce'});
	var navOffset 	= -120,
		fadeSpeed 	= 300,
		hoverSpeed 	= 200;	
		
	// top element, navigation is aligned to #content
	var minTop = $('#content').offset().top,
		maxTop = $('#content').height()+minTop-$('#navigation').height();		
	// place navigation
	var currentScroll = $(window).scrollTop();
	$('#navigation').css({'top' : minTop});
	// align navigation after loading
	if( currentScroll > minTop && currentScroll < maxTop ) {
		// while scrolling though the content
		$('#navigation').css({'top' : navOffset+'px'});		
	}
	if( currentScroll <= minTop ) {
		// adjust navigation top to content top
		$('#navigation').css({'top' : minTop-currentScroll});
	}
	if( currentScroll >= maxTop ) {
		// end of content
		$('#navigation').css({'top' : maxTop-currentScroll});
	}
	
	// get section positions
	var secondTop 	= Math.floor($('#second').offset().top),
		thirdTop 	= Math.floor($('#third').offset().top);
		fourthTop 	= Math.floor($('#fourth').offset().top);
		fifthTop 	= Math.floor($('#fifth').offset().top);
		sixthTop 	= Math.floor($('#sixth').offset().top);	
		seventhTop 	= Math.floor($('#seventh').offset().top);	
		eightTop 	= Math.floor($('#eight').offset().top);
		ninthTop 	= Math.floor($('#ninth').offset().top);
		tenthTop 	= Math.floor($('#tenth').offset().top);
	console.log(secondTop+" "+thirdTop+" "+fourthTop+" "+fifthTop+" "+sixthTop+" "+seventhTop+" "+eightTop+" "+ninthTop+" "+tenthTop);	
	// on scroll
	$(window).scroll(function() {
		// current scroll
		var winScroll = $(window).scrollTop();
		// align navigation to window scroll
		if( winScroll > minTop && winScroll < maxTop ) {
			// while scrolling though the content
			$('#navigation').css({'top' : navOffset+'px'});		
		}
		if( winScroll <= minTop ) {
			// adjust navigation top to content top
			$('#navigation').css({'top' : minTop-winScroll});
		}
		if( winScroll >= maxTop ) {
			// end of content
			$('#navigation').css({'top' : maxTop-winScroll});
		}

		// indicator for current position in the document
		if(	(winScroll + navOffset) < secondTop ) {
			// current section = first
			$('#navfirst').css({'color' : '#ffabce'});
			$('#navsecond').css({'color' : '#ffffff' , 'background' : '#8f288c'});
			$('#navthird').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navfour').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navfive').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navsix').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navseven').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#naveight').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navnine').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navten').css({'color' : '#ffabce' , 'background' : 'none'});
			// animate
			$('#navfirst').stop().stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navsecond').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navthird').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navfour').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navtop').stop().animate({ opacity: 1.0 }, fadeSpeed);
			// current
			$('#navsecond').addClass('current');
			$('#navfirst').removeClass('current');
			$('#navthird').removeClass('current');
			$('#navfour').removeClass('current');
			$('#navfive').removeClass('current');
			$('#navsix').removeClass('current');
			$('#navseven').removeClass('current');
			$('#naveight').removeClass('current');
			$('#navnine').removeClass('current');
			$('#navten').removeClass('current');

		} else if ( (winScroll + navOffset) < thirdTop ) {
			// current section = second
			$('#navfirst').css({'color' : '#ffabce'});
			$('#navsecond').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navthird').css({'color' : '#ffffff' , 'background' : '#8f288c'});
			$('#navfour').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navfive').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navsix').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navseven').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#naveight').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navnine').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navten').css({'color' : '#ffabce' , 'background' : 'none'});
			// animate
			$('#navfirst').stop().stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navsecond').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navthird').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navfour').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navtop').stop().animate({ opacity: 1.0 }, fadeSpeed);
			// current
			$('#navthird').addClass('current');
			$('#navfirst').removeClass('current');
			$('#navsecond').addClass('current');
			$('#navfour').removeClass('current');
			$('#navfive').removeClass('current');
			$('#navsix').removeClass('current');
			$('#navseven').removeClass('current');
			$('#naveight').removeClass('current');
			$('#navnine').removeClass('current');
			$('#navten').removeClass('current');

	} else if ( (winScroll + navOffset) < fourthTop ) {
			// current section = third
			$('#navfirst').css({'color' : '#ffabce'});
			$('#navsecond').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navthird').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navfour').css({'color' : '#ffffff' , 'background' : '#8f288c'});
			$('#navfive').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navsix').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navseven').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#naveight').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navnine').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navten').css({'color' : '#ffabce' , 'background' : 'none'});
			// animate
			$('#navfirst').stop().stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navsecond').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navthird').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navfour').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navtop').stop().animate({ opacity: 1.0 }, fadeSpeed);
			// current
			$('#navfour').addClass('current');
			$('#navfirst').removeClass('current');
			$('#navsecond').addClass('current');
			$('#navthird').removeClass('current');
			$('#navfive').removeClass('current');
			$('#navsix').removeClass('current');
			$('#navseven').removeClass('current');
			$('#naveight').removeClass('current');
			$('#navnine').removeClass('current');
			$('#navten').removeClass('current');

		} else if ( (winScroll + navOffset) < fifthTop ) {
			// current section = fourth
			$('#navfirst').css({'color' : '#ffabce'});
			$('#navsecond').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navthird').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navfour').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navfive').css({'color' : '#ffffff' , 'background' : '#8f288c'});
			$('#navsix').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navseven').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#naveight').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navnine').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navten').css({'color' : '#ffabce' , 'background' : 'none'});
			// animate
			$('#navfirst').stop().stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navsecond').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navthird').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navfour').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navtop').stop().animate({ opacity: 1.0 }, fadeSpeed);
			// current
			$('#navfive').addClass('current');
			$('#navfirst').removeClass('current');
			$('#navsecond').addClass('current');
			$('#navthird').removeClass('current');
			$('#navfour').removeClass('current');
			$('#navsix').removeClass('current');
			$('#navseven').removeClass('current');
			$('#naveight').removeClass('current');
			$('#navnine').removeClass('current');
			$('#navten').removeClass('current');
			
		} else if ( (winScroll + navOffset) < sixthTop ) {
			// current section = fifth
			$('#navfirst').css({'color' : '#ffabce'});
			$('#navsecond').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navthird').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navfour').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navfive').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navsix').css({'color' : '#ffffff' , 'background' : '#8f288c'});
			$('#navseven').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#naveight').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navnine').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navten').css({'color' : '#ffabce' , 'background' : 'none'});
			// animate
			$('#navfirst').stop().stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navsecond').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navthird').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navfour').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navtop').stop().animate({ opacity: 1.0 }, fadeSpeed);
			// current
			$('#navsix').addClass('current');
			$('#navfirst').removeClass('current');
			$('#navsecond').addClass('current');
			$('#navthird').removeClass('current');
			$('#navfour').removeClass('current');
			$('#navfive').removeClass('current');
			$('#navseven').removeClass('current');
			$('#naveight').removeClass('current');
			$('#navnine').removeClass('current');
			$('#navten').removeClass('current');

		} else if ( (winScroll + navOffset) < seventhTop ) {
			// current section = seventh
			$('#navfirst').css({'color' : '#ffabce'});
			$('#navsecond').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navthird').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navfour').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navfive').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navsix').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navseven').css({'color' : '#ffffff' , 'background' : '#8f288c'});
			$('#naveight').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navnine').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navten').css({'color' : '#ffabce' , 'background' : 'none'});
			// animate
			$('#navfirst').stop().stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navsecond').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navthird').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navfour').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navtop').stop().animate({ opacity: 1.0 }, fadeSpeed);
			// current
			$('#navseven').addClass('current');
			$('#navfirst').removeClass('current');
			$('#navsecond').addClass('current');
			$('#navthird').removeClass('current');
			$('#navfour').removeClass('current');
			$('#navfive').removeClass('current');
			$('#navsix').removeClass('current');
			$('#naveight').removeClass('current');
			$('#navnine').removeClass('current');
			$('#navten').removeClass('current');
								
		} else if ( (winScroll + navOffset) < eightTop ) {
			// current section = seventh
			$('#navfirst').css({'color' : '#ffabce'});
			$('#navsecond').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navthird').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navfour').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navfive').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navsix').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navseven').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#naveight').css({'color' : '#ffffff' , 'background' : '#8f288c'});
			$('#navnine').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navten').css({'color' : '#ffabce' , 'background' : 'none'});
			// animate
			$('#navfirst').stop().stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navsecond').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navthird').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navfour').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navtop').stop().animate({ opacity: 1.0 }, fadeSpeed);
			// current
			$('#naveight').addClass('current');
			$('#navfirst').removeClass('current');
			$('#navsecond').addClass('current');
			$('#navthird').removeClass('current');
			$('#navfour').removeClass('current');
			$('#navfive').removeClass('current');
			$('#navsix').removeClass('current');
			$('#navseven').removeClass('current');
			$('#navnine').removeClass('current');
			$('#navten').removeClass('current');
			
		} else if ( (winScroll + navOffset) < ninthTop ) {
			// current section = eight
			$('#navfirst').css({'color' : '#ffabce'});
			$('#navsecond').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navthird').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navfour').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navfive').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navsix').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navseven').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#naveight').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navnine').css({'color' : '#ffffff' , 'background' : '#8f288c'});
			$('#navten').css({'color' : '#ffabce' , 'background' : 'none'});
			// animate
			$('#navthird').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navsecond').stop().animate({ opacity: 1.0 }, fadeSpeed);			
			$('#navfirst').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navtop').stop().animate({ opacity: 1.0 }, fadeSpeed);
			// current
			$('#navnine').addClass('current');	
			$('#navfirst').removeClass('current');
			$('#navsecond').removeClass('current');
			$('#navthird').removeClass('current');
			$('#navfour').removeClass('current');
			$('#navfive').removeClass('current');
			$('#navsix').removeClass('current');
			$('#navseven').removeClass('current');
			$('#naveight').removeClass('current');
			$('#navten').removeClass('current');
			$('#navnine').css({'color' : '#ffffff' , 'background' : '#8f288c'});

		
} else if ( (winScroll + navOffset) < tenthTop && (winScroll <= maxTop) ) {
			// current section = eight
			$('#navfirst').css({'color' : '#ffabce'});
			$('#navsecond').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navthird').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navfour').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navfive').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navsix').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navseven').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#naveight').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navnine').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navten').css({'color' : '#ffffff' , 'background' : '#8f288c'});
			// animate
			$('#navthird').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navsecond').stop().animate({ opacity: 1.0 }, fadeSpeed);			
			$('#navfirst').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navtop').stop().animate({ opacity: 1.0 }, fadeSpeed);
			// current
			$('#navfirst').removeClass('current');
			$('#navsecond').removeClass('current');
			$('#navthird').removeClass('current');
			$('#navfour').removeClass('current');
			$('#navfive').removeClass('current');
			$('#navsix').removeClass('current');
			$('#navseven').removeClass('current');
			$('#naveight').removeClass('current');
			$('#navnine').removeClass('current');
			$('#navten').removeClass('current');
			
		} else {
		
			$('#navfirst').css({'color' : '#ffabce'});
			$('#navsecond').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navthird').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navfour').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navfive').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navsix').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navseven').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#naveight').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navnine').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navten').css({'color' : '#ffffff' , 'background' : '#8f288c'});
			// animate
			$('#navthird').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navsecond').stop().animate({ opacity: 1.0 }, fadeSpeed);			
			$('#navfirst').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navtop').stop().animate({ opacity: 1.0 }, fadeSpeed);
			// current
			$('#navten').addClass('current');	
			$('#navfirst').removeClass('current');
			$('#navsecond').removeClass('current');
			$('#navthird').removeClass('current');
			$('#navfour').removeClass('current');
			$('#navfive').removeClass('current');
			$('#navsix').removeClass('current');
			$('#navseven').removeClass('current');
			$('#naveight').removeClass('current');
			$('#navnine').removeClass('current');
			$('#navten').css({'color' : '#ffffff' , 'background' : '#8f288c'});
						
		}
		// current section = last section & if end of page is reached
		if ($('body').height() <= ($(window).height() + $(window).scrollTop())) {
			// current section = design
			$('#navfirst').css({'color' : '#ffabce'});
			$('#navsecond').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navthird').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navfour').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navfive').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navsix').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navseven').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#naveight').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navnine').css({'color' : '#ffabce' , 'background' : 'none'});
			$('#navten').css({'color' : '#ffffff' , 'background' : '#8f288c'});
			// animate
			$('#navthird').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navsecond').stop().animate({ opacity: 1.0 }, fadeSpeed);			
			$('#navfirst').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navtop').stop().animate({ opacity: 1.0 }, fadeSpeed);
			// current
			$('#navten').addClass('current');	
			$('#navfirst').removeClass('current');
			$('#navsecond').removeClass('current');
			$('#navthird').removeClass('current');
			$('#navfour').removeClass('current');
			$('#navfive').removeClass('current');
			$('#navsix').removeClass('current');
			$('#navseven').removeClass('current');
			$('#naveight').removeClass('current');
			$('#navnine').removeClass('current');
			$('#navten').css({'color' : '#ffffff' , 'background' : '#8f288c'});
		}		
	});

	//navigation click actions	
	$('#navsecond').click(function(event) {
		event.preventDefault();
		scrollToID('#second', 500);
	});
	$('#navthird').click(function(event) {
		event.preventDefault();
		scrollToID('#third', 500);
	});
	$('#navfour').click(function(event) {
		event.preventDefault();
		scrollToID('#fourth', 500);
	});
	$('#navfive').click(function(event) {
		event.preventDefault();
		scrollToID('#fifth', 500);
	});
	
	$('#navsix').click(function(event) {
		event.preventDefault();
		scrollToID('#sixth', 500);
	});
	$('#navseven').click(function(event) {
		event.preventDefault();
		scrollToID('#seventh', 500);
	});
	$('#naveight').click(function(event) {
		event.preventDefault();
		scrollToID('#eight', 500);
	});
	$('#navnine').click(function(event) {
		event.preventDefault();
		scrollToID('#ninth', 500);
	});
	
	$('#navten').click(function(event) {
		event.preventDefault();
		scrollToID('#tenth', 500);
	});
	
	
	
	$('#navfirst').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:0}, 'slow'); 		
	});

	// on hover
	$('#navigation a').hover(function(e) {
		$(this).hoverFlow(e.type, { opacity: 1.0 }, hoverSpeed);
	}, function(e) {
		if( $(this).hasClass('current') || $('html,body').is(':animated') ) return false;
		$(this).hoverFlow(e.type, { opacity: 1.0 }, hoverSpeed);
	});		
	
});
	
function scrollToID(id, speed){
	var offSet = 15;
	var targetOffset = $(id).offset().top-offSet;
	$('html,body').animate({scrollTop:targetOffset}, speed);
}