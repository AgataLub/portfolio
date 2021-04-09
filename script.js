"use strict";

$(document).mousemove(function (event) {
  let windowWidth = $(window).width();
  let windowHeight = $(window).height();

  let mouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
  let mouseYpercentage = Math.round((event.pageY / windowHeight) * 100);

  $(".radial-gradient").css("background", "radial-gradient(at " + mouseXpercentage + "% " + mouseYpercentage + "%, #FF8C42, #FF338B)");
});
