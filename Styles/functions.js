$(document).ready(function () {

    // parameter
    $('#navfirst').css({ 'color': '#FFFFFF' });
    var navOffset = 15,
		fadeSpeed = 300,
		hoverSpeed = 200;

    // top element, navigation is aligned to #content
    var minTop = $('.main').offset().top,
		maxTop = $('.main').height() + minTop - $('#navigation').height();
    // place navigation
    var currentScroll = $(window).scrollTop();
    $('#navigation').css({ 'top': minTop });
    // align navigation after loading
    if (currentScroll > minTop && currentScroll < maxTop) {
        // while scrolling though the content
        $('#navigation').css({ 'top': navOffset + 'px' });
    }
    if (currentScroll <= minTop) {
        // adjust navigation top to content top
        $('#navigation').css({ 'top': minTop - currentScroll });
    }
    if (currentScroll >= maxTop) {
        // end of content
        $('#navigation').css({ 'top': maxTop - currentScroll });
    }

    // get section positions
    var secondTop = Math.floor($('#second').offset().top),
		thirdTop = Math.floor($('#third').offset().top);
    fourthTop = Math.floor($('#fourth').offset().top);
    fifthTop = Math.floor($('#fifth').offset().top);
    sixthTop = Math.floor($('#sixth').offset().top);
    seventhTop = Math.floor($('#seventh').offset().top);
    eightTop = Math.floor($('#eight').offset().top);
    ninthTop = Math.floor($('#ninth').offset().top);
    tenthTop = Math.floor($('#tenth').offset().top);
    console.log(secondTop + " " + thirdTop + " " + fourthTop + " " + fifthTop + " " + sixthTop + " " + seventhTop + " " + eightTop + " " + ninthTop + " " + tenthTop);
    // on scroll
    $(window).scroll(function () {
        // current scroll
        var winScroll = $(window).scrollTop();
        // align navigation to window scroll
        if (winScroll > minTop && winScroll < maxTop) {
            // while scrolling though the content
            $('#navigation').css({ 'top': navOffset + 'px' });
        }
        if (winScroll <= minTop) {
            // adjust navigation top to content top
            $('#navigation').css({ 'top': minTop - winScroll });
        }
        if (winScroll >= maxTop) {
            // end of content
            $('#navigation').css({ 'top': maxTop - winScroll });
        }

        // indicator for current position in the document
        if ((winScroll + navOffset) < secondTop) {
            // current section = first
            $('#navfirst').css({ 'color': '#f3ab24' });
            $('#navsecond').css({ 'color': '#FFFFFF' });
            $('#navthird').css({ 'color': '#FFFFFF' });
            $('#navfour').css({ 'color': '#FFFFFF' });
            $('#navfive').css({ 'color': '#FFFFFF' });
            $('#navsix').css({ 'color': '#FFFFFF' });
            $('#navseven').css({ 'color': '#FFFFFF' });
            $('#naveight').css({ 'color': '#FFFFFF' });
            $('#navnine').css({ 'color': '#FFFFFF' });
            // animate
            $('#navfirst').stop().stop().animate({ opacity: 1.0 }, fadeSpeed);
            $('#navsecond').stop().animate({ opacity: 1.0 }, fadeSpeed);
            $('#navthird').stop().animate({ opacity: 1.0 }, fadeSpeed);
            $('#navfour').stop().animate({ opacity: 1.0 }, fadeSpeed);
            $('#navtop').stop().animate({ opacity: 1.0 }, fadeSpeed);
            // current
            $('#navfirst').addClass('current');
            $('#navsecond').removeClass('current');
            $('#navthird').removeClass('current');
            $('#navfour').removeClass('current');
            $('#navfive').removeClass('current');
            $('#navsix').removeClass('current');
            $('#navseven').removeClass('current');
            $('#naveight').removeClass('current');
            $('#navnine').removeClass('current');
        } else if ((winScroll + navOffset) < thirdTop) {
            // current section = second
            $('#navfirst').css({ 'color': '#FFFFFF' });
            $('#navsecond').css({ 'color': '#f3ab24' });
            $('#navthird').css({ 'color': '#FFFFFF' });
            $('#navfour').css({ 'color': '#FFFFFF' });
            $('#navfive').css({ 'color': '#FFFFFF' });
            $('#navsix').css({ 'color': '#FFFFFF' });
            $('#navseven').css({ 'color': '#FFFFFF' });
            $('#naveight').css({ 'color': '#FFFFFF' });
            $('#navnine').css({ 'color': '#FFFFFF' });
            // animate
            $('#navsecond').stop().animate({ opacity: 1.0 }, fadeSpeed);
            $('#navfirst').stop().animate({ opacity: 1.0 }, fadeSpeed);
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
        } else if ((winScroll + navOffset) < fourthTop) {
            // current section = third
            $('#navfirst').css({ 'color': '#FFFFFF' });
            $('#navsecond').css({ 'color': '#FFFFFF' });
            $('#navthird').css({ 'color': '#f3ab24' });
            $('#navfour').css({ 'color': '#FFFFFF' });
            $('#navfive').css({ 'color': '#FFFFFF' });
            $('#navsix').css({ 'color': '#FFFFFF' });
            $('#navseven').css({ 'color': '#FFFFFF' });
            $('#naveight').css({ 'color': '#FFFFFF' });
            $('#navnine').css({ 'color': '#FFFFFF' });
            // animate
            $('#navthird').stop().animate({ opacity: 1.0 }, fadeSpeed);
            $('#navfour').stop().animate({ opacity: 1.0 }, fadeSpeed);
            $('#navsecond').stop().animate({ opacity: 1.0 }, fadeSpeed);
            $('#navfirst').stop().animate({ opacity: 1.0 }, fadeSpeed);
            $('#navtop').stop().animate({ opacity: 1.0 }, fadeSpeed);
            // current
            $('#navthird').addClass('current');
            $('#navfirst').removeClass('current');
            $('#navsecond').removeClass('current');
            $('#navfour').removeClass('current');
            $('#navfive').removeClass('current');
            $('#navsix').removeClass('current');
            $('#navseven').removeClass('current');
            $('#naveight').removeClass('current');
            $('#navnine').removeClass('current');
        } else if ((winScroll + navOffset) < fifthTop) {
            // current section = fourth
            $('#navfirst').css({ 'color': '#FFFFFF' });
            $('#navsecond').css({ 'color': '#FFFFFF' });
            $('#navthird').css({ 'color': '#FFFFFF' });
            $('#navfour').css({ 'color': '#f3ab24' });
            $('#navfive').css({ 'color': '#FFFFFF' });
            $('#navsix').css({ 'color': '#FFFFFF' });
            $('#navseven').css({ 'color': '#FFFFFF' });
            $('#naveight').css({ 'color': '#FFFFFF' });
            $('#navnine').css({ 'color': '#FFFFFF' });
            // animate
            $('#navfour').stop().animate({ opacity: 1.0 }, fadeSpeed);
            $('#navthird').stop().animate({ opacity: 1.0 }, fadeSpeed);
            $('#navsecond').stop().animate({ opacity: 1.0 }, fadeSpeed);
            $('#navfirst').stop().animate({ opacity: 1.0 }, fadeSpeed);
            $('#navtop').stop().animate({ opacity: 1.0 }, fadeSpeed);
            // current
            $('#navfour').addClass('current');
            $('#navfirst').removeClass('current');
            $('#navsecond').removeClass('current');
            $('#navthird').removeClass('current');
            $('#navfive').removeClass('current');
            $('#navsix').removeClass('current');
            $('#navseven').removeClass('current');
            $('#naveight').removeClass('current');
            $('#navnine').removeClass('current');
        } else if ((winScroll + navOffset) < sixthTop) {
            // current section = fifth
            $('#navfirst').css({ 'color': '#FFFFFF' });
            $('#navsecond').css({ 'color': '#FFFFFF' });
            $('#navthird').css({ 'color': '#FFFFFF' });
            $('#navfour').css({ 'color': '#FFFFFF' });
            $('#navfive').css({ 'color': '#f3ab24' });
            $('#navsix').css({ 'color': '#FFFFFF' });
            $('#navseven').css({ 'color': '#FFFFFF' });
            $('#naveight').css({ 'color': '#FFFFFF' });
            $('#navnine').css({ 'color': '#FFFFFF' });
            // animate
            $('#navthird').stop().animate({ opacity: 1.0 }, fadeSpeed);
            $('#navsecond').stop().animate({ opacity: 1.0 }, fadeSpeed);
            $('#navfirst').stop().animate({ opacity: 1.0 }, fadeSpeed);
            $('#navtop').stop().animate({ opacity: 1.0 }, fadeSpeed);
            // current
            $('#navfive').addClass('current');
            $('#navfirst').removeClass('current');
            $('#navsecond').removeClass('current');
            $('#navthird').removeClass('current');
            $('#navfour').removeClass('current');
            $('#navsix').removeClass('current');
            $('#navseven').removeClass('current');
            $('#naveight').removeClass('current');
            $('#navnine').removeClass('current');
        } else if ((winScroll + navOffset) < seventhTop) {
            // current section = fifth
            $('#navfirst').css({ 'color': '#FFFFFF' });
            $('#navsecond').css({ 'color': '#FFFFFF' });
            $('#navthird').css({ 'color': '#FFFFFF' });
            $('#navfour').css({ 'color': '#FFFFFF' });
            $('#navfive').css({ 'color': '#FFFFFF' });
            $('#navsix').css({ 'color': '#f3ab24' });
            $('#navseven').css({ 'color': '#FFFFFF' });
            $('#naveight').css({ 'color': '#FFFFFF' });
            $('#navnine').css({ 'color': '#FFFFFF' });
            // animate
            $('#navthird').stop().animate({ opacity: 1.0 }, fadeSpeed);
            $('#navsecond').stop().animate({ opacity: 1.0 }, fadeSpeed);
            $('#navfirst').stop().animate({ opacity: 1.0 }, fadeSpeed);
            $('#navtop').stop().animate({ opacity: 1.0 }, fadeSpeed);
            // current
            $('#navsix').addClass('current');
            $('#navfirst').removeClass('current');
            $('#navsecond').removeClass('current');
            $('#navthird').removeClass('current');
            $('#navfour').removeClass('current');
            $('#navfive').removeClass('current');
            $('#navseven').removeClass('current');
            $('#naveight').removeClass('current');
            $('#navnine').removeClass('current');

        } else if ((winScroll + navOffset) < eightTop) {
            // current section = sixth
            $('#navfirst').css({ 'color': '#FFFFFF' });
            $('#navsecond').css({ 'color': '#FFFFFF' });
            $('#navthird').css({ 'color': '#FFFFFF' });
            $('#navfour').css({ 'color': '#FFFFFF' });
            $('#navfive').css({ 'color': '#FFFFFF' });
            $('#navsix').css({ 'color': '#FFFFFF' });
            $('#navseven').css({ 'color': '#f3ab24' });
            $('#naveight').css({ 'color': '#FFFFFF' });
            $('#navnine').css({ 'color': '#FFFFFF' });
            // animate
            $('#navthird').stop().animate({ opacity: 1.0 }, fadeSpeed);
            $('#navsecond').stop().animate({ opacity: 1.0 }, fadeSpeed);
            $('#navfirst').stop().animate({ opacity: 1.0 }, fadeSpeed);
            $('#navtop').stop().animate({ opacity: 1.0 }, fadeSpeed);
            // current
            $('#navseven').addClass('current');
            $('#navfirst').removeClass('current');
            $('#navsecond').removeClass('current');
            $('#navthird').removeClass('current');
            $('#navfour').removeClass('current');
            $('#navfive').removeClass('current');
            $('#navsix').removeClass('current');
            $('#naveight').removeClass('current');
            $('#navnine').removeClass('current');

        } else if ((winScroll + navOffset) < ninthTop && (winScroll <= maxTop)) {
            // current section = eight
            $('#navfirst').css({ 'color': '#FFFFFF' });
            $('#navsecond').css({ 'color': '#FFFFFF' });
            $('#navthird').css({ 'color': '#FFFFFF' });
            $('#navfour').css({ 'color': '#FFFFFFF' });
            $('#navfive').css({ 'color': '#FFFFFF' });
            $('#navsix').css({ 'color': '#FFFFFF' });
            $('#navseven').css({ 'color': '#FFFFFF' });
            $('#naveight').css({ 'color': '#f3ab24' });
            $('#navnine').css({ 'color': '#FFFFFF' });
            // animate
            $('#navthird').stop().animate({ opacity: 1.0 }, fadeSpeed);
            $('#navsecond').stop().animate({ opacity: 1.0 }, fadeSpeed);
            $('#navfirst').stop().animate({ opacity: 1.0 }, fadeSpeed);
            $('#navtop').stop().animate({ opacity: 1.0 }, fadeSpeed);
            // current
            $('#naveight').addClass('current');
            $('#navfirst').removeClass('current');
            $('#navsecond').removeClass('current');
            $('#navthird').removeClass('current');
            $('#navfour').removeClass('current');
            $('#navfive').removeClass('current');
            $('#navsix').removeClass('current');
            $('#navseven').removeClass('current');
            $('#navnine').removeClass('current');

        } else {
            // current section = ninth
            $('#navfirst').css({ 'color': '#FFFFFF' });
            $('#navsecond').css({ 'color': '#FFFFFF' });
            $('#navthird').css({ 'color': '#FFFFFF' });
            $('#navfour').css({ 'color': '#FFFFFFF' });
            $('#navfive').css({ 'color': '#FFFFFF' });
            $('#navsix').css({ 'color': '#FFFFFF' });
            $('#navseven').css({ 'color': '#FFFFFF' });
            $('#naveight').css({ 'color': '#FFFFFF' });
            $('#navnine').css({ 'color': '#f3ab24' });
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
            $('#navnine').css({ 'color': '#f3ab24' });

        }
        // current section = last section & if end of page is reached
        if ($('body').height() <= ($(window).height() + $(window).scrollTop())) {
            // current section = design
            $('#navfirst').css({ 'color': '#FFFFFF' });
            $('#navsecond').css({ 'color': '#FFFFFF' });
            $('#navthird').css({ 'color': '#FFFFFF' });
            $('#navfour').css({ 'color': '#FFFFFFF' });
            $('#navfive').css({ 'color': '#FFFFFF' });
            $('#navsix').css({ 'color': '#FFFFFF' });
            $('#navseven').css({ 'color': '#FFFFFF' });
            $('#naveight').css({ 'color': '#FFFFFF' });
            $('#navnine').css({ 'color': '#146283' });
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
            $('#navnine').css({ 'color': '#f3ab24' });
        }
    });

    function close() {
        var body = document.body,
		mask = document.createElement("div"),
		toggleSlideLeft = document.querySelector(".toggle-slide-left"),
		toggleSlideRight = document.querySelector(".toggle-slide-right"),
		toggleSlideTop = document.querySelector(".toggle-slide-top"),
		toggleSlideBottom = document.querySelector(".toggle-slide-bottom"),
		togglePushLeft = document.querySelector(".toggle-push-left"),
		togglePushRight = document.querySelector(".toggle-push-right"),
		togglePushTop = document.querySelector(".toggle-push-top"),
		togglePushBottom = document.querySelector(".toggle-push-bottom"),
		slideMenuLeft = document.querySelector(".slide-menu-left"),
		slideMenuRight = document.querySelector(".slide-menu-right"),
		slideMenuTop = document.querySelector(".slide-menu-top"),
		slideMenuBottom = document.querySelector(".slide-menu-bottom"),
		pushMenuLeft = document.querySelector(".push-menu-left"),
		pushMenuRight = document.querySelector(".push-menu-right"),
		pushMenuTop = document.querySelector(".push-menu-top"),
		pushMenuBottom = document.querySelector(".push-menu-bottom"),
		activeNav
	;
        mask.className = "mask";
        classie.remove(body, "pml-open");
        //activeNav = "";
        document.body.removeChild(mask);
    }

    //navigation click actions	
    $('#navfirst').click(function (event) {
        event.preventDefault();
        scrollToID('#first', 500);
        close();
    });
    $('#navsecond').click(function (event) {
        event.preventDefault();
        scrollToID('#second', 500);
        close();
    });
    $('#navthird').click(function (event) {
        event.preventDefault();
        scrollToID('#third', 500);
        close();
    });
    $('#navfour').click(function (event) {
        event.preventDefault();
        scrollToID('#fourth', 500);
        close();
    });
    $('#navfive').click(function (event) {
        event.preventDefault();
        scrollToID('#fifth', 500);
        close();
    });

    $('#navsix').click(function (event) {
        event.preventDefault();
        scrollToID('#sixth', 500);
        close();
    });
    $('#navseven').click(function (event) {
        event.preventDefault();
        scrollToID('#seventh', 500);
        close();
    });
    $('#naveight').click(function (event) {
        event.preventDefault();
        scrollToID('#eight', 500);
        close();
    });
    $('#navnine').click(function (event) {
        event.preventDefault();
        scrollToID('#ninth', 500);
        close();
    });
    $('#navten').click(function (event) {
        event.preventDefault();
        scrollToID('#tenth', 500);
        close();
    });
    $('#navtop').click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });

    // on hover
    $('#navigation a').hover(function (e) {
        $(this).hoverFlow(e.type, { opacity: 1.0 }, hoverSpeed);
    }, function (e) {
        if ($(this).hasClass('current') || $('html,body').is(':animated')) return false;
        $(this).hoverFlow(e.type, { opacity: 1.0 }, hoverSpeed);
    });

});
	
function scrollToID(id, speed){
	var offSet = 15;
	var targetOffset = $(id).offset().top-offSet;
	$('html,body').animate({scrollTop:targetOffset}, speed);
}