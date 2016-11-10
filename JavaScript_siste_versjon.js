//Gallery

//This segment will create a gallery of images, where one can navigate the images using both buttons on a larger main image,
//aswell as the mouse cursor, on a gallery underneath.

let slideIndex_gallery = 1;              //The slideIndex decides which image that is shown as the main image
function changeIndex(n, n2){	 //the parameter n is +1 (clicking right button) or -1 (left button) n2 is the slideIndex. See HTML.
	slideIndex_gallery += n;
	if(slideIndex_gallery > 9){    	  //If slideIndex is larger than 9 (bilde9) the main image should be set to the first in the gallery
		slideIndex_gallery = 1 ;  //(bilde1) upon clicking the right button (slideIndex + 1)
	}
	if(slideIndex_gallery < 1){     //The same as above, only that bilde1 (the first image) becomes bilde9 (the last image)
		slideIndex_gallery = 9; //upon clicking the left button (-1)
	}
		
	if(n2 != 0){			 //When clicking the right and left buttons, n2 = 0 is sent to this function. However, if one
		slideIndex_gallery = n2; //clickes an image in the gallery it will. n2 has the value of the new slideIndex.
	}
		
	changeClick(slideIndex_gallery) //the slideIndex is sent into the changeClick function.
	
	
function changeClick(n){   //Function that changes the source of the main image
	let bildeId = "bilde"+n.toString();                   //bildeId becomes the id of the various images (bilde1, bilde2....bilde9)
	let targetSrc = document.getElementById(bildeId);     //Retrieves the source of bildeId
	document.getElementById("mainImg").src = targetSrc.getAttribute("src") //Changes the source of the main image to the source of
}									       //bildeId
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

function display_hide(id){			
    var div = document.getElementById(id);		// Gets the element by id in the html file, and saves it as "div"
    if (div.className === "foodinfo") {			// Checks with a strict comparison operator if the element is the same as "foodinfo" class
        div.className = "foodinfo active";			// The div becomes "foodinfo active" The information will now show because of the css (meny)
    } else {						
        div.className = "foodinfo";			// Else, the div becomes "foodinfo" and the information will be hidden because of the css. 
    }
}


// Slideshow:

let slideIndexSlideshow = 0;
Slidesshow(); 

function Slidesshow() { // Defines the function Slideshow
    let i;
    const pictures = document.getElementsByClassName("slides"); // Finds the pictures to include in the slideshow from the HTML-document
    const dots = document.getElementsByClassName("dot"); // Finds the dots from the HTML-document
    for (i = 0; i < pictures.length; i++) { 
       pictures[i].style.display = "none"; // Sets the display attribute of the pictures to "none"
    }
    slideIndexSlideshow++; 
    if (slideIndexSlideshow > pictures.length) {slideIndexSlideshow = 1} // If the slideIndexSlideshow is larger than the amount of pictures, slideIndexSlideshow is set back to 1
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // Iterates through the dots and replaces the class with "active"
    }
    pictures[slideIndexSlideshow-1].style.display = "block"; // Sets the picture with index=slideIndexSlideshow-1 to display = "block"
    dots[slideIndexSlideshow-1].className += " active";
    setTimeout(Slidesshow, 4000); // Change image every 4 seconds
}
// Inspired by this tutorial: http://www.w3schools.com/howto/howto_js_slideshow.asp
