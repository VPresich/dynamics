import ratingFormMarkupStars from './rating-form-markup-stars';

const ratingFormCreateStars = (data, starsContainer) => {
  const strMarkup = ratingFormMarkupStars(data);
  starsContainer.innerHTML = '';
  starsContainer.insertAdjacentHTML('beforeend', strMarkup);
};

export default ratingFormCreateStars;
