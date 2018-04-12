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
