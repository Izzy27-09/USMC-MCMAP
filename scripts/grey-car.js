$("#next").click(function() {
    console.log("nextclicked");
    nextSlide();
    console.log("nextclick");
  });
  $("#previous").click(function() {
    prevSlide();
  });

const SLIDES = $(".up-bod > .slides");
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
////////////////////////////////////END OF UPPER BODY STRIKES///////////////

/////////////////////////////START OF LOWER BODY STRIKES///////////////////
$("#next1").click(function() {
    nextSlide1();
  });
  $("#previous1").click(function() {
    prevSlide1();
  });

const SLIDES1 = $(".low-bod > .slides1");
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
//////////////////////END OF LOWER BODY STRIKES//////////////////////////////////
//////////////////////START OF COUNTERS TO CHOKES AND HOLDS//////////////////////
$("#next2").click(function() {
  nextSlide2();
});
$("#previous2").click(function() {
  prevSlide2();
});

const SLIDES2 = $(".cn-ch > .slides2");
/* See "show next slide snippet" to use */
function nextSlide2() {
let nextNum2 = SLIDES2.index($(".slides2:not(.accessible-hidden)")) + 1 + 1; /* +1 for 0-index array */
if (nextNum2 > SLIDES2.length) {
  nextNum2 = 1;
}
showSlide2(nextNum2);
}
/* See "show previous slide snippet" to use */
function prevSlide2() {

let prevNum2 = SLIDES2.index($(".slides2:not(.accessible-hidden)")) - 1 + 1; /* +1 for 0-index array */
if (prevNum2 <= 0) {
  prevNum2 = SLIDES2.length;
}
showSlide2(prevNum2);
}
/* See "show slide X snippet" to use */
function showSlide2(num2) {
let index2 = num2 - 1;
let currentSlide2 = SLIDES2.eq(index2);

SLIDES2.addClass("accessible-hidden");
currentSlide2.removeClass("accessible-hidden");
}
/////////////////////END OF COUNTERS TO CHOKES AND HOLDS////////////////////////////

////////////////////START OF ARMED MANIPULATIONS//////////////////////////////////
$("#next3").click(function() {
  nextSlide3();
});
$("#previous3").click(function() {
  prevSlide3();
});

const SLIDES3 = $(".ar-man > .slides3");
/* See "show next slide snippet" to use */
function nextSlide3() {
let nextNum3 = SLIDES3.index($(".slides3:not(.accessible-hidden)")) + 1 + 1; /* +1 for 0-index array */
if (nextNum3 > SLIDES3.length) {
  nextNum3 = 1;
}
showSlide3(nextNum3);
}
/* See "show previous slide snippet" to use */
function prevSlide3() {

let prevNum3 = SLIDES3.index($(".slides3:not(.accessible-hidden)")) - 1 + 1; /* +1 for 0-index array */
if (prevNum3 <= 0) {
  prevNum3 = SLIDES3.length;
}
showSlide3(prevNum3);
}
/* See "show slide X snippet" to use */
function showSlide3(num3) {
let index3 = num3 - 1;
let currentSlide3 = SLIDES3.eq(index3);

SLIDES3.addClass("accessible-hidden");
currentSlide3.removeClass("accessible-hidden");
}

//////////////////////END OF ARMED MANIPULATIONS/////////////////////////////////

/////////////////////START OF KNIFE TECHNIQUES//////////////////////////////////
$("#next4").click(function() {
  nextSlide4();
});
$("#previous4").click(function() {
  prevSlide4();
});

const SLIDES4 = $(".knife > .slides4");
/* See "show next slide snippet" to use */
function nextSlide4() {
let nextNum4 = SLIDES4.index($(".slides4:not(.accessible-hidden)")) + 1 + 1; /* +1 for 0-index array */
if (nextNum4 > SLIDES4.length) {
  nextNum4 = 1;
}
showSlide4(nextNum4);
}
/* See "show previous slide snippet" to use */
function prevSlide4() {

let prevNum4 = SLIDES4.index($(".slides4:not(.accessible-hidden)")) - 1 + 1; /* +1 for 0-index array */
if (prevNum4 <= 0) {
  prevNum4 = SLIDES4.length;
}
showSlide4(prevNum4);
}
/* See "show slide X snippet" to use */
function showSlide4(num4) {
let index4 = num4 - 1;
let currentSlide4 = SLIDES4.eq(index4);

SLIDES4.addClass("accessible-hidden");
currentSlide4.removeClass("accessible-hidden");
}


////////////////////END OF KNIFE TECHNIQUES////////////////////////////////////

/////////////////////START OF WEAPONS OF OPPORTUNITY/////////////////////////
$("#next5").click(function() {
  nextSlide5();
});
$("#previous5").click(function() {
  prevSlide5();
});

const SLIDES5 = $(".wep-op > .slides5");
/* See "show next slide snippet" to use */
function nextSlide5() {
let nextNum5 = SLIDES5.index($(".slides5:not(.accessible-hidden)")) + 1 + 1; /* +1 for 0-index array */
if (nextNum5 > SLIDES5.length) {
  nextNum5 = 1;
}
showSlide5(nextNum5);
}
/* See "show previous slide snippet" to use */
function prevSlide5() {

let prevNum5 = SLIDES5.index($(".slides5:not(.accessible-hidden)")) - 1 + 1; /* +1 for 0-index array */
if (prevNum5 <= 0) {
  prevNum5 = SLIDES5.length;
}
showSlide5(prevNum5);
}
/* See "show slide X snippet" to use */
function showSlide5(num5) {
let index5 = num5 - 1;
let currentSlide5 = SLIDES5.eq(index5);

SLIDES5.addClass("accessible-hidden");
currentSlide5.removeClass("accessible-hidden");
}


////////////////////END OF WEAPONS OF OPPORTUNITY/////////////////////////
