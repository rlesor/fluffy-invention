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