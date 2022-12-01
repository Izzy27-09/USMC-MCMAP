///////////////////////START OF UNARMED MANIPULATIONS////////////////////////////////////////
$("#next").click(function() {
    console.log("nextclicked");
    nextSlide();
    console.log("nextclick");
  });
  $("#previous").click(function() {
    prevSlide();
  });

const SLIDES = $(".unarm > .slides");
/* See "show next slide snippet" to use */
function nextSlide() {
  let nextNum = SLIDES.index($(".slides:not(.accessible-hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
}
/* See "show previous slide snippet" to use */
function prevSlide() {

  let prevNum = SLIDES.index($(".slides:not(.accessible-hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}
/* See "show slide X snippet" to use */
function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);

  SLIDES.addClass("accessible-hidden");
  currentSlide.removeClass("accessible-hidden");
}
/////////////////////////////////END OF UNARMED MANIPULATIONS//////////////////////

$("#next1").click(function() {
    nextSlide1();
  });
  $("#previous1").click(function() {
    prevSlide1();
  });

const SLIDES1 = $(".wep > .slides1");
/* See "show next slide snippet" to use */
function nextSlide1() {
  let nextNum1 = SLIDES1.index($(".slides1:not(.accessible-hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum1 > SLIDES1.length) {
    nextNum1 = 1;
  }
  showSlide1(nextNum1);
}
/* See "show previous slide snippet" to use */
function prevSlide1() {

  let prevNum1 = SLIDES1.index($(".slides1:not(.accessible-hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum1 <= 0) {
    prevNum1 = SLIDES1.length;
  }
  showSlide1(prevNum1);
}
/* See "show slide X snippet" to use */
function showSlide1(num1) {
  let index1 = num1 - 1;
  let currentSlide1 = SLIDES1.eq(index1);

  SLIDES1.addClass("accessible-hidden");
  currentSlide1.removeClass("accessible-hidden");
}
