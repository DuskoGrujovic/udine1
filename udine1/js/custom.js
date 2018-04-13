$(document).ready(function() {
$('.search-query').blur(function() {
    $(this).closest('.form-search').removeClass('search-active');
  })
  .focus(function() {
    $(this).closest('.form-search').addClass('search-active');
  });
});

//Angular Carousel

angular.module('BtApp', [
            'angular-carousel'
        ])

        .controller('CarouselAngCtrl', function($scope) {


            function getSlide(target, style) {
                var i = target.length;
                return {
                    id: (i + 1),
                    label: 'slide #' + (i + 1),
                    img: 'img/slides' + '/' + ((i + 1) % 10)+ '.jpg' ,
                    color: "#fff",
                    odd: (i % 2 === 0),
                };
            }

            function addSlide(target, style) {
                target.push(getSlide(target, style));
            };


            $scope.carouselIndex2 = 0;



            function addSlides(target, style, qty) {
                for (var i=0; i < qty; i++) {
                    addSlide(target, style);
                }
            }



            // 2nd ngRepeat demo
            $scope.slides = [];
            addSlides($scope.slides, '', 4);


            // End to End swiping
            // load 130 images in main javascript container
            var slideImages = [];
            $scope.totalimg = slideImages.length;
            $scope.galleryNumber = 1;
        })

 //Angular Carousel END


/*global jQuery:false */
jQuery(document).ready(function($) {
  "use strict"

  (function() {

    var $menu = $('.navigation nav'),
      optionsList = '<option value="" selected>Go to..</option>';

    $menu.find('li').each(function() {
        var $this = $(this),
          $anchor = $this.children('a'),
          depth = $this.parents('ul').length - 1,
          indent = '';

        if (depth) {
          while (depth > 0) {
            indent += ' - ';
            depth--;
          }

        }
        $(".nav li").parent().addClass("bold");

        optionsList += '<option value="' + $anchor.attr('href') + '">' + indent + ' ' + $anchor.text() + '</option>';
      }).end()
      .after('<select class="selectmenu">' + optionsList + '</select>');

    $('select.selectmenu').on('change', function() {
      window.location = $(this).val();
    });

  })();


  $('.toggle-link').each(function() {
    $(this).click(function() {
      var state = 'open'; //assume target is closed & needs opening
      var target = $(this).attr('data-target');
      var targetState = $(this).attr('data-target-state');

      //allows trigger link to say target is open & should be closed
      if (typeof targetState !== 'undefined' && targetState !== false) {
        state = targetState;
      }

      if (state == 'undefined') {
        state = 'open';
      }

      $(target).toggleClass('toggle-link-' + state);
      $(this).toggleClass(state);
    });
  });

  //add some elements with animate effect

  $(".big-cta").hover(
    function() {
      $('.cta a').addClass("animated shake");
    },
    function() {
      $('.cta a').removeClass("animated shake");
    }
  );
  $(".box").hover(
    function() {
      $(this).find('.icon').addClass("animated pulse");
      $(this).find('.text').addClass("animated fadeInUp");
      $(this).find('.image').addClass("animated fadeInDown");
    },
    function() {
      $(this).find('.icon').removeClass("animated pulse");
      $(this).find('.text').removeClass("animated fadeInUp");
      $(this).find('.image').removeClass("animated fadeInDown");
    }
  );


  $('.accordion').on('show', function(e) {

    $(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('active');
    $(e.target).prev('.accordion-heading').find('.accordion-toggle i').removeClass('icon-plus');
    $(e.target).prev('.accordion-heading').find('.accordion-toggle i').addClass('icon-minus');
  });

  $('.accordion').on('hide', function(e) {
    $(this).find('.accordion-toggle').not($(e.target)).removeClass('active');
    $(this).find('.accordion-toggle i').not($(e.target)).removeClass('icon-minus');
    $(this).find('.accordion-toggle i').not($(e.target)).addClass('icon-plus');
  });



  //Navi hover
  $('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
  });

  // tooltip
  $('.social-network li a, .options_box .color a').tooltip();

  // fancybox
  $(".fancybox").fancybox({
    padding: 0,
    autoResize: true,
    beforeShow: function() {
      this.title = $(this.element).attr('title');
      this.title = '<h4>' + this.title + '</h4>' + '<p>' + $(this.element).parent().find('img').attr('alt') + '</p>';
    },
    helpers: {
      title: {
        type: 'inside'
      },
    }
  });


  //scroll to top
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });
  $('.scrollup').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });

  $('#mycarousel').jcarousel();
  $('#mycarousel1').jcarousel();

  //flexslider
  $('.flexslider').flexslider();

  //nivo slider
  $('.nivo-slider').nivoSlider({
    effect: 'random', // Specify sets like: 'fold,fade,sliceDown'
    slices: 15, // For slice animations
    boxCols: 8, // For box animations
    boxRows: 4, // For box animations
    animSpeed: 500, // Slide transition speed
    pauseTime: 5000, // How long each slide will show
    startSlide: 0, // Set starting Slide (0 index)
    directionNav: true, // Next & Prev navigation
    controlNav: false, // 1,2,3... navigation
    controlNavThumbs: false, // Use thumbnails for Control Nav
    pauseOnHover: true, // Stop animation while hovering
    manualAdvance: false, // Force manual transitions
    prevText: '', // Prev directionNav text
    nextText: '', // Next directionNav text
    randomStart: false, // Start on a random slide
    beforeChange: function() {}, // Triggers before a slide transition
    afterChange: function() {}, // Triggers after a slide transition
    slideshowEnd: function() {}, // Triggers after all slides have been shown
    lastSlide: function() {}, // Triggers when last slide is shown
    afterLoad: function() {} // Triggers when slider has loaded
  });

  // Da Sliders
  if ($('#da-slider').length) {
    $('#da-slider').cslider();
  }

  //slitslider
  var Page = (function() {

    var $nav = $('#nav-dots > span'),
      slitslider = $('#slider').slitslider({
        onBeforeChange: function(slide, pos) {
          $nav.removeClass('nav-dot-current');
          $nav.eq(pos).addClass('nav-dot-current');
        }
      }),

      init = function() {
        initEvents();
      },
      initEvents = function() {
        $nav.each(function(i) {
          $(this).on('click', function() {
            var $dot = $(this);

            if (!slitslider.isActive()) {
              $nav.removeClass('nav-dot-current');
              $dot.addClass('nav-dot-current');
            }

            slitslider.jump(i + 1);
            return false;

          });

        });

      };

    return {
      init: init
    };
  })();

  Page.init();

  //Google Map
  if ($('#google-map').length) {
    var get_latitude = $('#google-map').data('latitude');
    var get_longitude = $('#google-map').data('longitude');

    function initialize_google_map() {
      var myLatlng = new google.maps.LatLng(get_latitude, get_longitude);
      var mapOptions = {
        zoom: 14,
        scrollwheel: false,
        center: myLatlng
      };
      var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map
      });
    }
    google.maps.event.addDomListener(window, 'load', initialize_google_map);
  }

});

// Azienda counter 
$('.count-this').each(function () {

	// Start the counting from a specified number - in this case, 0!
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
    	// Speed of counter in ms, default animation style
        duration: 2000,
        easing: 'swing',
		format:9999,
        step: function (now) {
        	// Round up the number
            $(this).text(Math.ceil(now));
        }
    });
});
$(document).ready(function() {
	
    var numberValue1 = $('#count-1').val();
	var numberValue2 = $('#count-2').val();
	var numberValue3 = $('#count-3').val();
	if (numberValue1 > 10 && numberValue1 < 100) {
		$('#count-container-1 .zero').append(0);
		$('#count-container-1 .zero').append(0);
	} else if (99 < numberValue1 && numberValue1 < 1000 ){
		$('#count-container-1 .zero').append(0);
	} else if (numberValue1 < 10) {
		$('#count-container-1 .zero').append(0);
		$('#count-container-1 .zero').append(0);
		$('#count-container-1 .zero').append(0);
	}
	if (numberValue2 > 10 && numberValue2 < 100) {
		$('#count-container-2 .zero').append(0);
		$('#count-container-2 .zero').append(0);
	} else if (99 < numberValue2 && numberValue2 < 1000 ){
		$('#count-container-2 .zero').append(0);
	} else if (numberValue2 < 10) {
		$('#count-container-2 .zero').append(0);
		$('#count-container-2 .zero').append(0);
		$('#count-container-2 .zero').append(0);
	}
	if (numberValue3 > 10 && numberValue3 < 100) {
		$('#count-container-3 .zero').append(0);
		$('#count-container-3 .zero').append(0);
	} else if (99 < numberValue3 && numberValue3 < 1000 ){
		$('#count-container-3 .zero').append(0);
	} else if (numberValue3 < 10) {
		$('#count-container-3 .zero').append(0);
		$('#count-container-3 .zero').append(0);
		$('#count-container-3 .zero').append(0);
	}
	
});
