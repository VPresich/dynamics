import exercisesGalleryMarkup from './exercises-gallery-markup';
import galleryCreate from '../common/gallery-create';

const exercisesGalleryCreate = (exercisesContainer, exercises) =>
  galleryCreate(exercises, exercisesContainer, exercisesGalleryMarkup);

export default exercisesGalleryCreate;
