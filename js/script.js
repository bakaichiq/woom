// this is form 

let modal = document.getElementById('modal');
let modalOpen = document.getElementById('modal-form__open');
let modalClose = document.getElementsByTagName('main', 'footer')[0];

modalOpen.onclick = function() {
 	modal.style.display = "block";
}

modalClose.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target ==! modal) {
		modal.style.display = "none";
	}
}
