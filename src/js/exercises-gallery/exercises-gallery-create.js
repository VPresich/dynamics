import exercisesGalleryMarkup from './exercises-gallery-markup';
import galleryCreate from '../common/gallery-create';

const exercisesGalleryCreate = (galleryContainer, galeryData) =>
  galleryCreate(galeryData, galleryContainer, exercisesGalleryMarkup);

export default exercisesGalleryCreate;
