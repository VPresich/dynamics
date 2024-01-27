

const buttonMenuRef = document.querySelector('.js-open-menu-btn');
const mobileMenuRef = document.querySelector('.js-mobile-menu');
const buttonCloseMenuRef = document.querySelector('.js-mobile-menu-close-btn');

buttonMenuRef.addEventListener('click', () => {
mobileMenuRef.classList.add('is-open');
});

buttonCloseMenuRef.addEventListener('click', () => {
mobileMenuRef.classList.remove('is-open');
});
