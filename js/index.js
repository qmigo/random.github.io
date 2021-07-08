burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.navlist');
rightNav = document.querySelector('.right-nav');

burger.addEventListener('click', ()=>{
    navlist.classList.toggle('v-resp');
    rightNav.classList.toggle('v-resp');
    navbar.classList.toggle('h-nav-resp');
});


