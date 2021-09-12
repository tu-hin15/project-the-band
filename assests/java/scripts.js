//auto slide, change every 4s
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i=0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 4000);
}

//close modal
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

//menu mobile
var x = document.getElementById('navbarMenu');
var y = document.getElementById('mobileMenu');

y.onclick = function() {
    var isClosed = x.clientHeight === 48;
    if (isClosed) {
       x.style.height = 'auto'
    } else {
        x.style.height = '48px'
    }
}
//auto close menu
var menuItems = document.querySelectorAll('.btn-container a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function() {
        x.style.height = '48px'
    }
}

//sortdown btn
function myFunction() {
    var x = document.getElementById('subnavItem')
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none"
    }
}