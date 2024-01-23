import getFiltersData from './get-filters-data';
import exerciseFiltersCreate from './exercise-filters-create';
import { DEFAULT_FILTER } from './constants';

const filtersRef = document.querySelector('.filters-buttons');
const filtersListRef = document.querySelector('.exercise-filters-list');

filtersRef.addEventListener('click', onFiltersBtnClick);

function onFiltersBtnClick(event) {
  if (event.target.tagName !== 'BUTTON') return;
  const filterValue = event.target.dataset.filter;
  filtersHandler(filterValue);
}

function filtersHandler(filterValue = DEFAULT_FILTER) {
  getFiltersData(filterValue)
    .then(data => {
      const filters = data.results;
      if (!filters.length) {
        console.log(
          'Sorry, there are no data matching your search query. Please, try again!'
        );
      }
      const pagesNum = data.totalPages;
      const filtersPerPage = data.perPage;
      exerciseFiltersCreate(filtersListRef, filters);
    })
    .catch(error => {
      reject(`Error fetching images: ${error.message}`);
    });
}

filtersHandler();
