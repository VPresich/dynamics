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

export default scrollingDown;
