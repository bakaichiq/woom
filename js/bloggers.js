let modal__type = document.getElementById('modal__type');
let modal__typeOpen = document.getElementById('modal__typeOpen');
let modal__typeClose = document.getElementsByTagName('footer', 'header')[0];

modal__typeOpen.onclick = function() {
	modal__type.style.display = "block";
}

modal__typeClose.onclick = function() {
	modal__type.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modal__type) {
		modal__type.style.display = "none";
	}
}