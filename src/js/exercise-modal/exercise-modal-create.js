import modalWindowMarkup from './exercise-modal-markup';
import galleryCreate from '../common/gallery-create';

const exerciseModalCreate = (exercise, modalContainer) => {
  const strMarkup = modalWindowMarkup(exercise);
  console.log('strMarkup', strMarkup);
  modalContainer.innerHTML = '';
  modalContainer.insertAdjacentHTML('beforeend', strMarkup);
};

export default exerciseModalCreate;
