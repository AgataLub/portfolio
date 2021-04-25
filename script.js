"use strict";

window.addEventListener("load", launchEffects);

let sentence;
let childrenLetters;
let id;
let paragraph;
let showBurger = false;
let i = 0;

function launchEffects() {
  let menuitems = document.querySelectorAll(".menuitem");

  for (var i = 0; i < menuitems.length; i++) {
    menuitems[i].addEventListener("mousemove", getText);
  }

  document.querySelector(".burger").addEventListener("click", toggleBurger);

  window.onresize = function () {
    console.log("resize window");
    var sidebar = document.querySelector(".sidebar");
    if (window.innerWidth >= 961) sidebar.style.display = "";
  };
}

function getText() {
  i++;
  console.log("getText" + i);
  sentence = this.textContent;
  id = sentence;
  sentence = sentence.split("");
  console.log("getText: " + sentence);

  paragraph = document.getElementById(id);
  paragraph.innerHTML = "";

  sentence.map(createSeparateLetter);
  addDelay();
}

function createSeparateLetter(letter) {
  console.log("createSeparateLetter " + letter);

  paragraph.innerHTML += "<span class=letter>" + letter + "</span>";
}

function addDelay() {
  let children = paragraph.childNodes;

  for (var i = 0; i < children.length; i++) {
    console.log("paragraph " + i);
    children[i].style.setProperty("animation-delay", i * 0.05 + "s");
  }
}

function toggleBurger() {
  console.log("toggleBurger");

  if (showBurger === false) {
    showBurger = true;
    document.querySelector(".sidebar").style.display = "block";
  } else {
    document.querySelector(".sidebar").style.display = "none";
    showBurger = false;
  }
}

$(document).mousemove(function (event) {
  let windowWidth = $(window).width();
  let windowHeight = $(window).height();

  let mouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
  let mouseYpercentage = Math.round((event.pageY / windowHeight) * 100);

  $(".radial-gradient").css("background", "radial-gradient(at " + mouseXpercentage + "% " + mouseYpercentage + "%, #FF8C42, #FF338B)");
});
