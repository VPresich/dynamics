import exercisesGalleryMarkup from './exercises-gallery-markup';
import galleryCreate from '../common/gallery-create';

const exercisesGalleryCreate = (filtersContainer, exercises) => {
  filtersContainer.innerHTML = '<ul class="exercises-gallery"></ul>'
  const exercisesContainer = document.querySelector('.exercises-gallery')
  galleryCreate(exercises, exercisesContainer, exercisesGalleryMarkup);
}
export default exercisesGalleryCreate;
