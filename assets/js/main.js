(function($) {
	// 'use strict';
	$(document).ready(function(){

	    // slicknav js
		$('#menu').slicknav();

		//loader js
		setTimeout(function () {
			$('#loader').toggle();
		}, 2000);

		// Main Slider JS
	    $('#slider-main').owlCarousel({
	        loop: true,
	        autoplay: true,
	        autoplayTimeout: 5000,
	        responsive: {
	          0: { items: 1 },
	          768: { items: 1 },
	          1170: { items: 1 }
	        }
	    });
	    // Solution Slider JS
	    $('#solution-slide').owlCarousel({
	        loop: true,
	        autoplay: true,
	        autoplayTimeout: 5000,
	        responsive: {
	          0: { items: 1 },
	          768: { items: 1 },
	          1170: { items: 3 }
	        }
	    });

	    $('.carousel').carousel({
			interval: 2000
		});


		// Client JS
	    $('#client-carousel').owlCarousel({
	        loop: true,
	        dots: false,
	        autoplay: true,
	        autoplayTimeout: 5000,
	        responsive: {
	          0: { items: 2 },
	          768: { items: 3 },
	          1170: { items: 6 }
	        }
	    });
	    $('#blog-slide').owlCarousel({
	        loop: true,
	        // dots: false,
	        autoplay: true,
	        autoplayTimeout: 5000,
	        responsive: {
	          0: { items: 2 },
	          768: { items: 3 },
	          1170: { items: 1 }
	        }
	    });

	    //MixiTup jQurey
        // var containerEl = document.querySelector('.cases-content');
        //   var mixer = mixitup(containerEl, {
        //      controls: {
        //         toggleLogic: 'and'
        //      },
        //      animation: {
        //         effects: 'fade',
        //         duration: 750,
        //         nudge: false,
        //         reverseOut: false
        //      }
        // });


        

		
	    $(window).on( 'load', function() {

	        // $('#loader').fadeOut();
	            
	       // // Isotope portfolio
	       //  var $container = $('.cases-content');
	        
	       //  $container.isotope({
	       //      filter: '*',
	       //      masonry: {
	       //          horizontalOrder: true
	       //      },
	       //      animationOptions: {
	       //          duration: 750,
	       //          easing: 'linear',
	       //          queue: false
	       //      }
	       //  });

	       //  $('.cases-nav a').on('click', function() {
	       //      $('.cases-nav .current').removeClass('current');
	       //      $(this).addClass('current');

	       //      var selector = $(this).attr('data-filter');
	       //      $container.isotope({
	       //          filter: selector,
	       //          percentPosition: true,
	       //          animationOptions: {
	       //              duration: 750,
	       //              easing: 'linear',
	       //              queue: false
	       //          }
	       //      });
	       //      return false;
	       //  });
	    }); //Window Load End

	    // datepicker JS
	    $('#calendar').datepicker({
	        inline: true
	    });

	    // AudioPlayer Js
	    $('audio').audioPlayer({
            classPrefix: 'audioplayer',
            strPlay: '',
            strPause: '',
            strVolume: ''
        });

        // MagnificPopup video view
        $('.video-link').magnificPopup({
            type: 'iframe',
            gallery: {
                enabled: true
            }
        });
    	




    

        
        

	});
})(jQuery);