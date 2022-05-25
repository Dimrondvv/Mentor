const body = document.querySelector('body');
const hamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');


hamburger.addEventListener('click', function(){
    console.log("Dziala?");

    if(header.classList.contains('open')){ // Close hamburger menu
        header.classList.remove('open');
        body.classList.remove('noScroll');
        fadeElements.forEach(function(element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
    else { // Open 
        header.classList.add('open');
        body.classList.add('noScroll');
        fadeElements.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
    }
});