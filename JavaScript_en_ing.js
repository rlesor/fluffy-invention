function changeSwap(event){
		let targetSrc = event.target;
		if(targetSrc.tagName == "IMG"){
			document.getElementById("mainImg").src = targetSrc.getAttribute("src");
		}
	}
	
let slideIndex = 1;
function changeIndex(n, n2){
	slideIndex += n;
	if(slideIndex > 9){
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