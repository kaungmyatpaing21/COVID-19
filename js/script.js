$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });
});

$(window).on("scroll load", function () {
  $("#menu").removeClass("fa-times");
  $(".navbar").removeClass("nav-toggle");

  if ($(window).scrollTop() > 0) {
    $(".scroll-top").show();
  } else {
    $(".scroll-top").hide();
  }
});
