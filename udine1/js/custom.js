$(document).ready(function() {
$('.search-query').blur(function() {
    $(this).closest('.form-search').removeClass('search-active');
  })
  .focus(function() {
    $(this).closest('.form-search').addClass('search-active');
  });
});