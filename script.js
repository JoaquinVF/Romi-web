const winter = document.getElementById("winter")
const summer = document.getElementById("summer")

function openMenu(){
  element = document.getElementById("catalogo");
  menu = document.getElementsByClassName("catalogo-menu");
  if (element.click){
    menu.style.display="flex";
  }
  else{
    menu.style.display="none";
  }
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function showSummer(){
  winter.style.color = "#5e4f4f";
  summer.style.color = "#be8496";
}

function showWinter(){
  summer.style.color = "#5e4f4f";
  winter.style.color = "#8b8bd6";
}