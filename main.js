//Navrbar responsive js
let navToggle = document.getElementById('js-nav-toggle'); // target js-toggle ID
let mainNav = document.getElementById('js-menu'); // target js-menu ID

// add event listner to navToggle(js-nav-toggle) variable, so when you click on it,
// the mainNav(js-menu) displays from none to block, using the .active class dynamically
// created in css - it is not on the HTML
navToggle.addEventListener('click', function(){
  mainNav.classList.toggle('active');
});

// Modal popup
let btn = document.getElementById("js-modal-button");// Get the button that opens the modal
let modal = document.getElementById("js-modal");// When the user clicks the button, open the modal
let x = document.getElementsByClassName("close")[0];// Get the x element that closes the modal, see notes for [0]

// When the user clicks on btn, open the modal
btn.addEventListener("click", function() {
 modal.style.display = "block";
})
// When the user clicks on (x), close the modal
x.addEventListener("click", function() {
  modal.style.display = "none";
})
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Notes:
//getElementsByClassName returns an array-like object.
//Array or array-like object items can be access using the index of the item which starts from 0, see example above.
