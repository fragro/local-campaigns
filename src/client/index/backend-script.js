
prepBackend = function(){

/*
Template Name: Nominee- HTML template for candidate
Author: TrendyTheme
Version: 1.0
*/

jQuery(function ($) {

    'use strict';

    /* ======= Preloader ======= */
    
    $('#status').fadeOut();
    $('#preloader').delay(200).fadeOut('slow');


    /* ======= sticky menu ======= */

    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("sticky");
        } else {
        	if(!$(".navbar").hasClass("keep-sticky")){
            	$(".navbar-fixed-top").removeClass("sticky");
        	}
        }
    });


    /* === jQuery for page scrolling feature - requires jQuery Easing plugin === */
    
    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        //event.preventDefault();
    });
    


    /* ======= Full Screen Background ======= */
    
    $(".tt-fullHeight").height($(window).height());
    $(window).resize(function(){
        $(".tt-fullHeight").height($(window).height());
    });



    /* === Counter === */

    $('.fact-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });



    /* === Social Counter === */

    $('.social-counter').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });



    /* === Progress Bar === */

    $('.tab-content').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'),function(){
                $(this).css('width', $(this).attr('aria-valuenow')+'%');
            });
            $(this).off('inview');
        }
    });



    /* === Tab to Collapse === */
    
    if ($('#abilitiesTab').length > 0) { 
       $('#abilitiesTab').tabCollapse();
    }




    /* === Twitter Feed  === */

    /**
     * ### HOW TO CREATE A VALID ID TO USE: ###
     * Go to www.twitter.com and sign in as normal, go to your settings page.
     * Go to "Widgets" on the left hand side.
     * Create a new widget for what you need eg "user time line" or "search" etc.
     * Feel free to check "exclude replies" if you don't want replies in results.
     * Now go back to settings page, and then go back to widgets page and
     * you should see the widget you just created. Click edit.
     * Look at the URL in your web browser, you will see a long number like this:
     * 345735908357048478
     * Use this as your ID below instead!
     */

   /* 
    (function () {
        
        var twitterWidgetConfig = {
            id: "613424231099953152", //put your Widget ID here
            domId: "trendyTwitterFeed",
            maxTweets: 3,
            enableLinks: true,
            showUser: false,
            showTime: true,
            showInteraction: false,
            customCallback: handleTweets
        };

        twitterFetcher.fetch(twitterWidgetConfig);

        function handleTweets(tweets) {
            var x = tweets.length;
            var n = 0;
            var html = "";
            while (n < x) {
                html += '<div class="item">' + tweets[n] +
                    "</div>";
                n++
            }
            $(".twitter-widget").html(html);
            $(".twitter_retweet_icon").html(
                '<i class="fa fa-retweet"></i>');
            $(".twitter_reply_icon").html(
                '<i class="fa fa-reply"></i>');
            $(".twitter_fav_icon").html(
                '<i class="fa fa-star"></i>');
            $(".twitter-widget").owlCarousel({
                items: 1,
                loop: true,
                autoplay: true
            });
        }

    }());*/



    /* ======= Magnific Popup ======= */
    
/*    $('.image-link').magnificPopup({

        gallery: {
          enabled: true
        },
        removalDelay: 300, // Delay in milliseconds before popup is removed
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below
        type:'image'

    });
*/

    /* ======= Team Carousel ======= */
    (function () {

        $('.team-carousel').owlCarousel({
            loop:true,
            margin:30,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        })

    }());



    /* ======= Client Carousel ======= */
    (function () {

        $('.client-carousel').owlCarousel({
            autoplay:true,
            loop:true,
            margin:30,
            dots: false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:6
                }
            }
        })

    }());




    /* ======= Countdown ======= */    
    
    $("#countdown").countdown({
        date: "28 June 2016 12:00:00",
        format: "on"
    });

    /* === Detect IE version === */
    (function () {
        
        function getIEVersion() {
            var match = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
            return match ? parseInt(match[1], 10) : false;
        }

        if( getIEVersion() ){
            $('html').addClass('ie'+getIEVersion());
        }

    }());




    /* === Mail Chimp subscription form settings === */
    (function () {
  
        $('.mailchimp').ajaxChimp({
            callback: mailchimpCallback,
            //replace bellow url with your own mailchimp form post url inside the url: "---".
            //to learn how to get your own URL, please check documentation file.
            url: "http://trendytheme.us9.list-manage.com/subscribe/post?u=85ba3666ffb519396fbe64dc5&amp;id=c335e5ec53" 
        }); 
        function mailchimpCallback(resp) {
             if (resp.result === 'success') {
                $('.subscription-success').html('<i class="fa fa-check"></i>' + resp.msg).fadeIn(1000);
                $('.subscription-error').fadeOut(500);
                
            } else if(resp.result === 'error') {
                $('.subscription-error').html('<i class="fa fa-times"></i>' + resp.msg).fadeIn(1000);
            }  
        }

    }());   




    /* ======= Back to Top ======= */
    (function(){

        $('body').append('<div id="toTop"><i class="fa fa-angle-up"></i></div>');

        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        }); 

        $('#toTop').on('click',function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    }());
}); 

    $(window).load(function() {

        "use strict";
        /* ======= Stellar for background scrolling ======= */
/*        (function () {

            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
             
            } else {
                $(window).stellar({
                    horizontalScrolling: false,
                    responsive: true
                });
            }

        }());*/
    });
}
Template.footer.rendered = function(){
    prepBackend();
}