import modalWindowMarkup from './exercise-modal-markup';

const exerciseModalCreate = (exercise, modalContainer) => {
  const strMarkup = modalWindowMarkup(exercise);
  modalContainer.innerHTML = '';
  modalContainer.insertAdjacentHTML('beforeend', strMarkup);
};

export default exerciseModalCreate;
