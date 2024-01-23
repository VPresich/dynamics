import exercisesGalleryMarkup from './exercises-gallery-markup';

const exercisesFiltersCreate = (galleryContainer, exercises) => {
  const strMarkup = exercisesGalleryMarkup(exercises, galleryContainer);
  galleryContainer.innerHTML = '';
  galleryContainer.insertAdjacentHTML('beforeend', strMarkup);
};

export default exercisesFiltersCreate;
