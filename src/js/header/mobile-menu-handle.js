const openBtn = document.querySelector('.js-open-menu-btn');
const mobileMenu = document.querySelector('.js-mobile-menu');
const closeBtn = document.querySelector('.js-mobile-menu-close-btn');

const openClass = 'is-open';

openBtn.addEventListener('click', () => {
    mobileMenu.classList.add(openClass);
})

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove(openClass);
})