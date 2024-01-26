import modalWindowMarkup from './exercise-modal-markup';
import galleryCreate from '../common/gallery-create';

const exerciseModalCreate = (modalContainer, modalData) => {
  const strMarkup = modalWindowMarkup(modalData);

  modalContainer.innerHTML = '';
  print(modalContainer);
  modalContainer.insertAdjacentHTML('beforeend', strMarkup);
};

export default exerciseModalCreate;
