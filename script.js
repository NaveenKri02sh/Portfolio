//Typing Annimation
var typed = new Typed(".typing", {
    strings: ["Software Enigneer","Developer", "Traveller"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing2", {
    strings: ["Software Enigneer","Developer", "Traveller"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Sticky nav bar
window.onscroll = function() {stickyBar()};
var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;

function stickyBar(){
    if (window.pageYOffset >= sticky+20) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
