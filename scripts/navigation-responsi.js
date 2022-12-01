'use strict';
// sticky nav bar
window.onscroll = function () { myFunction() };
var navbar = $(".nav");
var sticky = 50;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.addClass("sticky")
    } else {
        navbar.removeClass("sticky");
    }
}


///////////////////////////////////START OF RESPONSIVE DESIGN/////////////////////////////////////
$(window).resize(function() {
    if ($(window).width() < 500) {
      // TODO: snippet(s) to respond when the screen size is less than TODO_SCREEN_WIDTH
      $(".tin").removeClass("larger");
    } else {
      // TODO: snippet(s) to respond when the screen size greater than or equal to the TODO_SCREEN_WIDTH
      $(".tin").addClass("larger");
    }
  });
  //////////////////////////////////END OF RESPONSIVE DESIGN////////////////////////////

  $("#link1").hover(function() {
    // TODO: snippet(s) to respond to when the mouse enters the element.
    $(".links1").removeClass("accessible-hidden");
  }, function() {
    // TODO: snippet(s) to respond to when the mouse leaves the element.
    $(".links1").addClass("accessible-hidden");
  });

  $("#link2").hover(function() {
    // TODO: snippet(s) to respond to when the mouse enters the element.
    $(".links2").removeClass("accessible-hidden");
  }, function() {
    // TODO: snippet(s) to respond to when the mouse leaves the element.
    $(".links2").addClass("accessible-hidden");
  });

  $("#link3").hover(function() {
    // TODO: snippet(s) to respond to when the mouse enters the element.
    $(".links3").removeClass("accessible-hidden");
  }, function() {
    // TODO: snippet(s) to respond to when the mouse leaves the element.
    $(".links3").addClass("accessible-hidden");
  });

  $("#link4").hover(function() {
    // TODO: snippet(s) to respond to when the mouse enters the element.
    $(".links4").removeClass("accessible-hidden");
  }, function() {
    // TODO: snippet(s) to respond to when the mouse leaves the element.
    $(".links4").addClass("accessible-hidden");
  });
