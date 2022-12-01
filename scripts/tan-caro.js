

//////////\\\\\\\\\\////////////////////// START OF CAROUSEL TAN BElt Punches  //////////////////////////////\\\\\\\\\\\\/////////////
$("#next").click(function() {
    console.log("nextclicked");
    nextSlide();
    console.log("nextclick");
  });
  $("#previous").click(function() {
    prevSlide();
  });

const SLIDES = $(".punches > .slide");
/* See "show next slide snippet" to use */
function nextSlide() {
  let nextNum = SLIDES.index($(".slide:not(.accessible-hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
}
/* See "show previous slide snippet" to use */
function prevSlide() {

  let prevNum = SLIDES.index($(".slide:not(.accessible-hidden)")) - 1 + 1; /* +1 for 0-index array */
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
//////////////\\\\\\\\\\\\\\//////////// END OF PUNCHES CAROUSAL ///////////////////\\\\\\\\\\\////////////

///////////////////////////////////////START OF FALLS CAROUSAL////////////////////////////////////////////
const SLIDES1 = $(".falls > .slides");
$("#next1").click(function() {
  console.log("nextclicked1");
  nextSlide1();
  console.log("nextclick1");
});
$("#previous1").click(function() {
  prevSlide1();
});

function nextSlide1() {
  let nextNum1 = SLIDES1.index($(".slides:not(.accessible-hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum1 > SLIDES1.length) {
    nextNum1 = 1;
  }
  showSlide1(nextNum1);
}
/* See "show previous slide snippet" to use */
function prevSlide1() {

  let prevNum1 = SLIDES1.index($(".slides:not(.accessible-hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum1 <= 0) {
    prevNum1 = SLIDES1.length;
  }
  showSlide1(prevNum1);
}
/* See "show slide X snippet" to use */
function showSlide1(num) {
  let index1 = num - 1;
  let currentSlide1 = SLIDES1.eq(index1);

  SLIDES1.addClass("accessible-hidden");
  currentSlide1.removeClass("accessible-hidden");
}
//////////////////////////////////////END OF FALLS CAROUSEL////////////////////////////////

/////////////////////////////////////Start of Bayonent Techniques////////////////////////

const SLIDES2 = $(".bayonet-images > .slides1");
$("#next2").click(function() {
  nextSlide2();
});
$("#previous2").click(function() {
  prevSlide2();
});

function nextSlide2() {
  console.log("Next");
  let nextNum2 = SLIDES2.index($(".slides1:not(.accessible-hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum2 > SLIDES2.length) {
    nextNum2 = 1;
  }
  showSlide2(nextNum2);
}
/* See "show previous slide snippet" to use */
function prevSlide2() {
  console.log("previous");

  let prevNum2 = SLIDES2.index($(".slides1:not(.accessible-hidden)")) - 1 + 1; /* +1 for 0-index array */
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
  currentSlide2.removeClass("accessible-hidden");}

/////////////////////////////END OF BAYONET TECHNIQUES/////////////////////

////////////////////////////START OF UPPER BODY STRIKE TECHNIQUES//////////
const SLIDES3 = $(".up-bod > .slides2");
$("#next3").click(function() {
  nextSlide3();
});
$("#previous3").click(function() {
  prevSlide3();
});

function nextSlide3() {
  let nextNum3 = SLIDES3.index($(".slides2:not(.accessible-hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum3 > SLIDES3.length) {
    nextNum3 = 1;
  }
  showSlide3(nextNum3);
}
/* See "show previous slide snippet" to use */
function prevSlide3() {

  let prevNum3 = SLIDES3.index($(".slides2:not(.accessible-hidden)")) - 1 + 1; /* +1 for 0-index array */
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
  currentSlide3.removeClass("accessible-hidden");}

///////////////////////////END OF UPPER BODY STRIKES/////////////////////////////

//////////////////////////START OF LOWER BODY STRIKE////////////////////////////

const SLIDES4 = $(".low-bod > .slides3");
$("#next4").click(function() {
  nextSlide4();
});
$("#previous4").click(function() {
  prevSlide4();
});

function nextSlide4() {
  let nextNum4 = SLIDES4.index($(".slides3:not(.accessible-hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum4 > SLIDES4.length) {
    nextNum4 = 1;
  }
  showSlide4(nextNum4);
}
/* See "show previous slide snippet" to use */
function prevSlide4() {

  let prevNum4 = SLIDES4.index($(".slides3:not(.accessible-hidden)")) - 1 + 1; /* +1 for 0-index array */
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
  currentSlide4.removeClass("accessible-hidden");}
///////////////////////////////END OF LOWER STRIKE//////////////////////////////
//////////////////////////////START OF CHOKES//////////////////////////////////
const SLIDES5 = $(".choke > .slides4");
$("#next5").click(function() {
  nextSlide5();
});
$("#previous5").click(function() {
  prevSlide5();
});

function nextSlide5() {
  let nextNum5 = SLIDES5.index($(".slides4:not(.accessible-hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum5 > SLIDES5.length) {
    nextNum5 = 1;
  }
  showSlide5(nextNum5);
}
/* See "show previous slide snippet" to use */
function prevSlide5() {

  let prevNum5 = SLIDES5.index($(".slides4:not(.accessible-hidden)")) - 1 + 1; /* +1 for 0-index array */
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
  currentSlide5.removeClass("accessible-hidden");}
  ///////////////////////////END OF CHOKES//////////////////////////////

  /////////////////////////START OF COUNTER TO CHOKES AND HOLDS/////////
  const SLIDES6 = $(".cn-choke > .slides5");
$("#next6").click(function() {
  nextSlide6();
});
$("#previous6").click(function() {
  prevSlide6();
});

function nextSlide6() {
  let nextNum6 = SLIDES6.index($(".slides5:not(.accessible-hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum6 > SLIDES6.length) {
    nextNum6 = 1;
  }
  showSlide6(nextNum6);
}
/* See "show previous slide snippet" to use */
function prevSlide6() {

  let prevNum6 = SLIDES6.index($(".slides5:not(.accessible-hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum6 <= 0) {
    prevNum6 = SLIDES6.length;
  }
  showSlide6(prevNum6);
}
/* See "show slide X snippet" to use */
function showSlide6(num6) {
  let index6 = num6 - 1;
  let currentSlide6 = SLIDES6.eq(index6);

  SLIDES6.addClass("accessible-hidden");
  currentSlide6.removeClass("accessible-hidden");}
  ////////////////////////////////END OF COUNTER TO CHOKES AND HOLDS//////////

  ///////////////////////////////START OF UNARMED MANIPULATIONS/////////////////
  const SLIDES7 = $(".un-arm > .slides6");
$("#next7").click(function() {
  nextSlide7();
});
$("#previous7").click(function() {
  prevSlide7();
});

function nextSlide7() {
  let nextNum7 = SLIDES7.index($(".slides6:not(.accessible-hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum7 > SLIDES7.length) {
    nextNum7 = 1;
  }
  showSlide7(nextNum7);
}
/* See "show previous slide snippet" to use */
function prevSlide7() {

  let prevNum7 = SLIDES7.index($(".slides6:not(.accessible-hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum7 <= 0) {
    prevNum7 = SLIDES7.length;
  }
  showSlide7(prevNum7);
}
/* See "show slide X snippet" to use */
function showSlide7(num7) {
  let index7 = num7 - 1;
  let currentSlide7 = SLIDES7.eq(index7);

  SLIDES7.addClass("accessible-hidden");
  currentSlide7.removeClass("accessible-hidden");}
/////////////////////////END OF UNARMED MANIPULATION/////////////////////

////////////////////////START OF ARMED MANIPULATIONS////////////////////
const SLIDES8 = $(".arm > .slide7");
$("#next8").click(function() {
  nextSlide8();
});
$("#previous8").click(function() {
  prevSlide8();
});

function nextSlide8() {
  let nextNum8 = SLIDES8.index($(".slide7:not(.accessible-hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum8 > SLIDES8.length) {
    nextNum8 = 1;
  }
  showSlide8(nextNum8);
}
/* See "show previous slide snippet" to use */
function prevSlide8() {

  let prevNum8 = SLIDES8.index($(".slide7:not(.accessible-hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum8 <= 0) {
    prevNum8 = SLIDES8.length;
  }
  showSlide8(prevNum8);
}
/* See "show slide X snippet" to use */
function showSlide8(num8) {
  let index8 = num8 - 1;
  let currentSlide8 = SLIDES8.eq(index8);

  SLIDES8.addClass("accessible-hidden");
  currentSlide8.removeClass("accessible-hidden");}
  /////////////////////END OF ARMED MANIPULATIONS////////////////////
