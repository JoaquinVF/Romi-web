const winter = document.getElementById("winter");
const winterContainer = document.getElementById("winter-container");
const summer = document.getElementById("summer");
const summerContainer= document.getElementById("summer-container");

var slideIndex = [1,1];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}

function showSummer(){
  winter.style.color = "#8F7B7B";
  summer.style.color = "#be8496";
  summerContainer.style.display = "block";
  winterContainer.style.display= "none";
}

function showWinter(){
  summer.style.color = "#8F7B7B";
  winter.style.color = "#8b8bd6";
  summerContainer.style.display = "none";
  winterContainer.style.display= "block";
}