const returnToTheTopBtn = document.querySelector('.return-to-the-top-btn');
const returnToTheTopSmallBtn = document.querySelector(
  '.return-to-the-top-small-btn'
);
const returnToTheTopBigBtn = document.querySelector(
  '.return-to-the-top-big-btn'
);

function setButtonWidth() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 1440) {
    returnToTheTopSmallBtn.classList.remove('visually-hidden');
  } else {
    returnToTheTopBigBtn.classList.remove('visually-hidden');
  }
}

setButtonWidth();

returnToTheTopBtn.addEventListener('click', event => {
  event.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

export default scrollingDown;
