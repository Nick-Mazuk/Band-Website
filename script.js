window.addEventListener("load", function(){onload();});

var onload = function() {

	function setImg(){
		var numRand = Math.floor(Math.random()*(2)) + 1;
		document.getElementById("addimage").src = "Pictures/Sponsors/"+numRand+".png";

	}

	setInterval(setImg(),500);

};