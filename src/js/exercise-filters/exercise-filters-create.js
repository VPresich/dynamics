import exerciseFiltersMarkup from './exercise-filters-markup';

const exerciseFiltersCreate = (filtersContainer, filters) => {
  const strMarkup = exerciseFiltersMarkup(filters, filtersContainer);
  filtersContainer.innerHTML = '';
  filtersContainer.insertAdjacentHTML('beforeend', strMarkup);
};

export default exerciseFiltersCreate;
