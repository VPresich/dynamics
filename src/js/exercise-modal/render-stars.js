import { SELECTOR_RATING_STARS } from './constants';
import iconsUrl from '../../img/icons/symbols.svg';

const getStarColor = (ind, rating) => {
  return ind < rating ? `#EEA10C` : `#7E847F`;
};

const renderRatingStars = ratingElement => {
  const rating = parseInt(ratingElement.textContent);

  let strMarkup = '';
  for (let ind = 0; ind < 5; ind++) {
    strMarkup += `
      <svg
        class="exercise-star"
        width="18"
        height="18"
        aria-label="Star icon"
        fill="${getStarColor(ind, rating)}"
      >
        <use href="${iconsUrl}#icon-star"></use>
      </svg>`;
  }
  ratingElement.insertAdjacentHTML('beforeend', strMarkup);
};

export default renderRatingStars;
