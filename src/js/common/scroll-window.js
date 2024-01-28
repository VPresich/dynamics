async function scrollingDown(cardSelector, gallerySelector, offset) {
  const gallery = document.querySelectorAll(gallerySelector);
  const cards = document.querySelectorAll(cardSelector);
  alert('Scroll');
  if (cards.length === 0) return;
  try {
    targetElement.scrollIntoView({ behavior: 'smooth' });
    const cardHeight = gallery.firstChild.getBoundingClientRect().height;
    window.scrollBy({
      top: gallery.getBoundingClientRect().top + offset,
      behavior: 'smooth',
    });

    let targetPosition = gallery.getBoundingClientRect().top + offset;

    while (
      targetPosition <
      gallery.getBoundingClientRect().bottom - cardHeight - offset
    ) {
      targetPosition += cardHeight + offset;
      await new Promise(resolve => setTimeout(resolve, 1000));
      window.scrollBy({
        top: targetPosition,
        left: 0,
        behavior: 'smooth',
      });
    }
  } catch (error) {
    console.log(error);
  }
}

const returnToTheTopBtn = document.querySelector('.return-to-the-top-btn')
const returnToTheTopSmallBtn = document.querySelector('.return-to-the-top-small-btn');
const returnToTheTopBigBtn = document.querySelector('.return-to-the-top-big-btn');

function setButtonWidth() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 1440) {
    returnToTheTopSmallBtn.classList.remove('visually-hidden');
  } else {
    returnToTheTopBigBtn.classList.remove('visually-hidden');
  }
}

setButtonWidth();

returnToTheTopBtn.addEventListener("click", (event) => { 
  event.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})

export default scrollingDown;
