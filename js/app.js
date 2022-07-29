const nav = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('.burger-menu');

menuBtn.addEventListener('click' , () => {
    nav.classList.toggle('show-menu');
    menuBtn.classList.toggle('toggle');
});

