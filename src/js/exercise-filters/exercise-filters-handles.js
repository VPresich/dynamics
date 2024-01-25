import { DEFAULT_FILTER } from './constants';
import getFiltersData from './get-filters-data';
import exerciseFiltersCreate from './exercise-filters-create';
import { createErrMsg, createOkMsg } from '../common/create-msg';
import getExercisesData from '../exercises-gallery/get-exercises-data';
import exercisesGalleryCreate from '../exercises-gallery/exercises-gallery-create';
import Pagination from '../common/pagination/pagination';
import galleryDelete from '../common/gallery-delete';

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
  event.preventDefault();
  const filterValue = event.target.dataset.filter;

  pagination.reset(filtersHandler, filterValue, 1, 0);
  galleryDelete(exercisesGalleryRef);

  filtersHandler({ filter: filterValue });
  activeFilter.classList.remove('filter-button-active');
  activeFilter = event.target;
  activeFilter.classList.add('filter-button-active');
}

function filtersHandler(filterValue = { filter: DEFAULT_FILTER }) {
  getFiltersData(filterValue, pagination.currentPage)
    .then(data => {
      const filters = data.results;

      console.log(data.totalPages);
      console.log(filterValue);
      exerciseFiltersCreate(filtersListRef, filters);
      pagination.init(filtersHandler, filterValue, data.totalPages);
    })
    .catch(error => {
      console.log(error.message);
      // createErrMsg(`Error fetching images: ${error.message}`);
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
  pagination.reset(exercisesHandler, filter, 1, 0);
  exercisesHandler(filter);
}

function exercisesHandler(filterParam) {
  getExercisesData(filterParam, pagination.currentPage)
    .then(data => {
      galleryDelete(filtersListRef);
      exercisesGalleryCreate(exercisesGalleryRef, data.results);
      console.log(data.totalPages);
      console.log(filterParam);
      pagination.init(exercisesHandler, filterParam, data.totalPages);
    })
    .catch(error => {
      console.log(error.message);
      createErrMsg(`Error fetching images: ${error.message}`);
    });
}

filtersHandler();
