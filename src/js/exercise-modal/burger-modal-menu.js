
// const buttonMenuRef = document.querySelector('[data-open-menu-btn]');
// const mobileMenuRef = document.querySelector('.js-mobile-menu');
// const buttonCloseMenuRef = document.querySelector('.js-mobile-menu-close-btn');
// 
// buttonMenuRef.addEventListener('click', () => {
//   mobileMenuRef.classList.add('is-open');
// });
// 
// buttonCloseMenuRef.addEventListener('click', () => {
//   mobileMenuRef.classList.remove('is-open');
// });

// const mobileMenu = document.querySelector('.mobile-menu');
// const closeButton = document.querySelector('.js-mobile-menu-close-btn');
// const openButton = document.querySelector('.button-home-menu');
// 

// openButton.addEventListener('click', () => {
//   mobileMenu.style.display = 'block';
// });
// 

// closeButton.addEventListener('click', () => {
//   mobileMenu.style.display = 'none';
// });
const buttonMenuRef = document.querySelector('.js-open-menu-btn');
const mobileMenuRef = document.querySelector('.js-mobile-menu');
const buttonCloseMenuRef = document.querySelector('.js-mobile-menu-close-btn');

buttonMenuRef.addEventListener('click', () => {
mobileMenuRef.classList.add('is-open');
});

buttonCloseMenuRef.addEventListener('click', () => {
mobileMenuRef.classList.remove('is-open');
});