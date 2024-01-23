import { DEFAULT_FILTER } from './constants';
import getFiltersData from './get-filters-data';
import exerciseFiltersCreate from './exercise-filters-create';
import { createErrMsg, createOkMsg } from '../common/create-msg';
import getExercisesData from '../exercises-gallery/get-exercises-data';
import exercisesFiltersCreate from '../exercises-gallery/exercises-gallery-create';

const filtersRef = document.querySelector('.filters-buttons');
const filtersListRef = document.querySelector('.exercise-filters-list');
const exercisesGalleryRef = document.querySelector('.exercises-gallery');

filtersRef.addEventListener('click', onFiltersBtnsClick);
filtersListRef.addEventListener('click', onFiltersListClick);

function onFiltersBtnsClick(event) {
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
      createErrMsg(`Error fetching images: ${error.message}`);
    });
}

function onFiltersListClick(event) {
  event.preventDefault();
  const targetRef = event.target;
  const closestLi = event.target.closest('li');
  if (!closestLi) return;

  const filter = {};

  const filterNameElem = closestLi.querySelector('.filter-name');
  const filterTypeElem = closestLi.querySelector('.filter-type');

  if (filterTypeElem && filterTypeElem) {
    const filterName = filterNameElem.textContent;
    const filterType = filterTypeElem.textContent;
    if (filterType === '') return;
    filter[filterType] = filterName;
  }
  //TODO
  console.log(filter);
  //TODO
  getExercisesData(filter)
    .then(data => {
      console.log(data.results);

      exercisesFiltersCreate(exercisesGalleryRef, data.results);
    })
    .catch(error => console.log(error));
}

filtersHandler();
