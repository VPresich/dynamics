import { DEFAULT_FILTER } from './constants';
import getFiltersData from './get-filters-data';
import exerciseFiltersCreate from './exercise-filters-create';
import { createErrMsg, createOkMsg } from '../common/create-msg';
import getExercisesData from '../exercises-gallery/get-exercises-data';
import exercisesFiltersCreate from '../exercises-gallery/exercises-gallery-create';
import Pagination from '../common/pagination/pagination';

const filtersRef = document.querySelector('.filters-buttons');
let activeFilter = document.querySelector('button[data-filter="Muscles"]');
activeFilter.classList.add('filter-button-active');

const filtersListRef = document.querySelector('.exercise-filters-list');
const exercisesGalleryRef = document.querySelector('.exercises-gallery');

filtersRef.addEventListener('click', onFiltersBtnsClick);
filtersListRef.addEventListener('click', onFiltersListClick);

const pagination = new Pagination({
  galleryHandle: filtersHandler,
  dotsSelector: '.pagination-dots',
  dotDefaultClass: 'pagination-dot',
  dotActiveClass: 'active-pagination-dot',
});

function onFiltersBtnsClick(event) {
  if (event.target.tagName !== 'BUTTON') return;
  const filterValue = event.target.dataset.filter;
  filtersHandler(filterValue, 1);
  activeFilter.classList.remove('filter-button-active');
  activeFilter = event.target;
  activeFilter.classList.add('filter-button-active');
}

function filtersHandler(
  filterValue = DEFAULT_FILTER,
  pageNum = 1,
  perPage = 12
) {
  getFiltersData(filterValue, pageNum, perPage)
    .then(data => {
      const filters = data.results;
      if (!filters.length) {
        //TODO Default image
        console.log(
          'Sorry, there are no data matching your search query. Please, try again!'
        );
      }
      exerciseFiltersCreate(filtersListRef, filters);
      pagination.createDots(data.totalPages);
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
    const filterName = filterNameElem.textContent.toLowerCase();
    const filterType = filterTypeElem.textContent.toLowerCase();
    if (filterType === '') return;
    filter[filterType] = filterName;
  }
  getExercisesData(filter)
    .then(data => {
      exercisesFiltersCreate(exercisesGalleryRef, data.results);
    })
    .catch(error => console.log(error));
}

filtersHandler();
