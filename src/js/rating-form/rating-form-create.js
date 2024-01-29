import ratingFormMarkup from './rating-form-markup';


const ratingFormCreate = (exercise, modalContainer) => {
  const strMarkup = ratingFormMarkup(exercise);
  modalContainer.innerHTML = '';
  modalContainer.insertAdjacentHTML('beforeend', strMarkup);
};

export default ratingFormCreate;
