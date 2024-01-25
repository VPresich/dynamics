import exercisesGalleryMarkup from './exercises-gallery-markup';

const exercisesGalleryCreate = (galleryContainer, exercises) => {
  const strMarkup = exercisesGalleryMarkup(exercises, galleryContainer);
  galleryContainer.innerHTML = '';
  galleryContainer.insertAdjacentHTML('beforeend', strMarkup);
};

export default exercisesGalleryCreate;
