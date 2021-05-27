
const navlinks = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const navlinksLi = document.querySelectorAll('.nav-links li a');


const navSlide = () => {
    
    burger.addEventListener('click', () => {
        navlinks.classList.toggle('nav-active')
    });
};
const navClose = () => {
    navlinksLi.forEach((item) => {
        item.addEventListener('click', () => {
            navlinks.classList.toggle('nav-active')
        });
    });
};



navSlide();
navClose();

