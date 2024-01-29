import { SELECTOR_RATING_STARS } from './constants';
import iconsUrl from '../../img/icons/symbols.svg';

function renderRatingStars(ratingElement) {
  for (let i = 0; i < 5; i++) {
    const starIcon = document.createElement('svg');
    starIcon.classList.add('exercise-star');
    starIcon.setAttribute('width', '18');
    starIcon.setAttribute('height', '18');
    starIcon.setAttribute('aria-label', 'Star icon');

    if (i < rating) {
      starIcon.innerHTML = `<use href="${iconsUrl}#icon-star"></use>`;
      starIcon.style.fill = '#eea10c';
    } else {
      starIcon.innerHTML = `<use href="${iconsUrl}#icon-star"></use>`;
      starIcon.style.fill = '#7e84';
    }

    ratingElement.appendChild(starIcon);
  }
}

export default renderRatingStars;
