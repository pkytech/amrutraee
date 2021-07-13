// Get the modal
var modal = document.getElementById("terms-conditions");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var propertyGalleryClose = document.getElementById("pgclose");
var guestGalleryClose = document.getElementById("ggclose");
var pGalleryModal = document.getElementById("pgallery");
var gGalleryModal = document.getElementById("ggallery");

function showTermsAndCondition() {
	modal.style.display = "block";
}
function showPropertyPhotos() {
	pGalleryModal.style.display = "block";
}
function showGuestPhotos() {
  console.log("Show Guest photos called");
	gGalleryModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
propertyGalleryClose.onclick = function() {
  pGalleryModal.style.display = "none";
}
guestGalleryClose.onclick = function() {
  gGalleryModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
     modal.style.display = "none";
  }
  if (event.target == pGalleryModal) {
	   pGalleryModal.style.display = "none";
  }
  if (event.target == gGalleryModal) {
    gGalleryModal.style.display = "none";
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
