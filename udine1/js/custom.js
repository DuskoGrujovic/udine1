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