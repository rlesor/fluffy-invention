//Gallery

//This segment will create a gallery of images, where one can navigate the images using both buttons on a larger main image,
//aswell as the mouse cursor, on a gallery underneath.

let slideIndex = 1;              //The slideIndex decides which image that is shown as the main image
function changeIndex(n, n2){	 //the parameter n is +1 (clicking right button) or -1 (left button) n2 is the slideIndex. See HTML.
	slideIndex += n;
	if(slideIndex > 9){    	 //If slideIndex
		slideIndex = 1 ;
	}
	if(slideIndex < 1){
		slideIndex = 9;
	}
		
	if(n2 != 0){
		slideIndex = n2;
	}
		
	changeClick(slideIndex)
	console.log(slideIndex)
}


function changeClick(n){
	let bildeId = "bilde"+n.toString();
	let targetSrc = document.getElementById(bildeId);
	document.getElementById("mainImg").src = targetSrc.getAttribute("src")
}
//Navigation bar 

//this javascript places the navigation bar at the right place when the user is navigating the page
var y=0;         //variable that shows the where on the page the user is
var top_side=0;  //variable that represent where the top of the wrapper is
var div=0;       //variable that represent the div box around the nav bar
window.onload = function img_size() {                                    //this function calculates the correct value for top_side when the page lodes
  div = document.getElementById("nav_bar_div").getBoundingClientRect();  //gets the element bounds
  top_side = div.top;                                                    //set the value as div top value
}
function resize() {                                                      //this function puts the nav bar at the top of the div bar if the user resizes the window
  div = document.getElementById("nav_bar_div").getBoundingClientRect();
  top_side = div.top; 
}
window.onscroll = function nav_scroll() {                                //this function places the navbar under the logo if it's in frame, and at the top of the screen if the user scrolls down
  y = window.scrollY;                                                    //finds how many pixels down the user has scrolled
  top_side = div.top;                                                    //update top_side
  if (top_side<0){                                                       //bugfix: if the user reloads the page while scrolled down on the page top_side gets a negative value. this resets the navbar position. 
    window.scrollTo(0,0);
    div = document.getElementById("nav_bar_div").getBoundingClientRect();
    top_side = div.top;           
  }
  if (y>top_side){                                                       //checs if the user has scrolled past the div box where the nav bar is
    document.getElementById("navigation_bar").style.position = "fixed";  //places the nav bar at the top  
  }
  else{
    document.getElementById("navigation_bar").style.position = "absolute"; //places the nav bar under the logo/at the top of the wrapper.
  }
}

//endringer:
//endre position absolute fra fixed til absolute i css (#navigation_bar)
//laget en ny div med id tag, og laget css til den 
//css må skrives slik at div skalerer med navbar 

//Menu - show more information:

function display_content(id) {
  document.getElementById(id).style.display = "block";

}
function hide_content(id) {
  document.getElementById(id).style.display = "none";
}

// Slideshow:
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
// Inspired by this tutorial: http://www.w3schools.com/howto/howto_js_slideshow.asp

//Validation form
function validateForm()
{
var pers=document.forms["reservasjon"]["res_antPers"].value;
var tidspunkt = document.forms["reservasjon"]["res_tidspunkt"].value;
var navn=document.forms["reservasjon"]["res_navn"].value;
var tidspunkt=document.forms["reservasjon"]["res_tidspunkt"].value;
var varighet=document.forms["reservasjon"]["res_varighet_min"].value;
var telefonnummer=document.forms["reservasjon"]["res_telefonnummer"].value;
var epost=document.forms["reservasjon"]["res_epost"].value;

if (pers==null || pers=="" || pers>=12 || tidspunkt = "" || varighet == "Varighet" || navn==null || navn=="" || telefonnummer == null|| telefonnummer=="" || epost ==null || epost=="" ) 
  {
  alert("Please Fill All Required Field");
  return false;
  }
}
