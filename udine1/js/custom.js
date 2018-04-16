
$(document).ready(function() {
$('.search-query').blur(function() {
    $(this).closest('.form-search').removeClass('search-active');
  })
  .focus(function() {
    $(this).closest('.form-search').addClass('search-active');
  });
});

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop + 100;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

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
		//$('#count-container-1 .zero').append(0);
	} else if (99 < numberValue1 && numberValue1 < 1000 ){
		$('#count-container-1 .zero').append(0);
	} else if (numberValue1 < 10) {
		$('#count-container-1 .zero').append(0);
		//$('#count-container-1 .zero').append(0);
		//$('#count-container-1 .zero').append(0);
	}
	if (numberValue2 > 10 && numberValue2 < 100) {
		$('#count-container-2 .zero').append(0);
	//	$('#count-container-2 .zero').append(0);
	} else if (99 < numberValue2 && numberValue2 < 1000 ){
		$('#count-container-2 .zero').append(0);
	} else if (numberValue2 < 10) {
		$('#count-container-2 .zero').append(0);
		$('#count-container-2 .zero').append(0);
		//$('#count-container-2 .zero').append(0);
	}
	if (numberValue3 > 10 && numberValue3 < 100) {
		$('#count-container-3 .zero').append(0);
		$('#count-container-3 .zero').append(0);
	} else if (99 < numberValue3 && numberValue3 < 1000 ){
		$('#count-container-3 .zero').append(0);
	} else if (numberValue3 < 10) {
		$('#count-container-3 .zero').append(0);
		$('#count-container-3 .zero').append(0);
		//$('#count-container-3 .zero').append(0);
	}

});

// Aziende Block END


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

            // 2nd ngRepeat
            $scope.slides = [];
            addSlides($scope.slides, '', 4);
            // End to End swiping
            var slideImages = [];
            $scope.totalimg = slideImages.length;
            $scope.galleryNumber = 1;
        })

 //Angular Carousel END
