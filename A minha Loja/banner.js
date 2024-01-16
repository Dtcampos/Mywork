let time = 4000;
var currentImageIndex = 0;

var images = ["destaque-home.png", "destaque-home-2.png"];
var max= images.length;
var interval;



function nextImage() {
	
	document.getElementById("banner").src = images[currentImageIndex]; 
	
	currentImageIndex++;
	
	if(currentImageIndex >= max) {
		currentImageIndex = 0;
	}
}



function start() {
	console.log("window loaded");
	
	interval = setInterval(nextImage, time);
}


function stop (){
clearInterval(interval);

}

 window.addEventListener("load", start)