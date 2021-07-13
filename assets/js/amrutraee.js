// Get the modal
var modal = document.getElementById("terms-conditions");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var propertyGalleryClose = document.getElementById("pgclose");
var pgGalleryModal = document.getElementById("pgallery");
function showTermsAndCondition() {
	modal.style.display = "block";
}
function showPropertyPhotos() {
	pgGalleryModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
propertyGalleryClose.onclick = function() {
  pgGalleryModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
     modal.style.display = "none";
  }
  if (event.target == pgGalleryModal) {
	 pgGalleryModal.style.display = "none";
  }
}
function showMenu() {
  var menu = document.getElementById("m-menu");
  if (menu.style.display == "" || menu.style.display == "none") {
    menu.style.display = "block"
  } else {
    menu.style.display = "none"
  }
}
function hideMenu() {
  document.getElementById("m-menu").style.display = "none";
}
