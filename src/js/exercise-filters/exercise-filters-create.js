import exerciseFiltersMarkup from './exercise-filters-markup';
import galleryCreate from '../common/gallery-create';

const exerciseFiltersCreate = (filtersContainer, filters) =>
  galleryCreate(filters, filtersContainer, exerciseFiltersMarkup);

export default exerciseFiltersCreate;
