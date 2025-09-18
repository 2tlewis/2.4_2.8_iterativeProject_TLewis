let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};


function scrollFunction(){
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		mybutton.style.display = "block";
	}	else {
		mybutton.tyle.display = "none";
	}
}


function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
