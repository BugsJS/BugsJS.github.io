$(document).ready(function() {
  navigate();
});

$(".nav-text").on("click", function() {
  $('.top-nav > ul').toggleClass('show-menu');
});

function navigate() {
  let hash = window.location.hash.slice(5);
  if (!hash) {
  	hash = "home";
  }
  $(".content-div").hide();
  $("#"+hash).show();
  $('.top-nav > ul').removeClass('show-menu');
  $(window).scrollTop(0);
}

$(window).on('hashchange', function() {
  navigate();
});