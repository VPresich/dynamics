import { DEFAULT_FILTER } from './constants';
import getFiltersData from './get-filters-data';
import exerciseFiltersCreate from './exercise-filters-create';
import { createErrMsg, createOkMsg } from '../common/create-msg';
import getExercisesData from '../exercises-gallery/get-exercises-data';
import exercisesGalleryCreate from '../exercises-gallery/exercises-gallery-create';
import Pagination from '../common/pagination/pagination';
import galleryDelete from '../common/gallery-delete';

const activeBtnClass = 'filter-button-active';
let activeBtn = {};

const filtersRef = document.querySelector('.filters-buttons');

const filtersListRef = document.querySelector('.exercise-filters-list');
const galleryRef = document.querySelector('.exercises-gallery');

const formForSearching = document.querySelector('.form-for-searching-input');

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

  formForSearching.classList.add("visually-hidden");

  pagination.reset(filtersHandler, filterValue, 1, 0);
  filtersHandler({ filter: filterValue });

  changeBtnActive(event.target);
}

function filtersHandler(filterValue = { filter: DEFAULT_FILTER }) {
  getFiltersData(filterValue, pagination.currentPage)
    .then(data => {
      const filters = data.results;
      galleryDelete(galleryRef);
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

  formForSearching.classList.remove("visually-hidden");

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
      exercisesGalleryCreate(galleryRef, data.results);
      pagination.init(exercisesHandler, filterParam, data.totalPages);
    })
    .catch(error => {
      console.log(error.message);
      createErrMsg(`Error fetching images: ${error.message}`);
    });
}

function setActiveFilter() {
  activeBtn = filtersRef.querySelector('BUTTON');
  activeBtn && activeBtn.classList.add(activeBtnClass);
}

function changeBtnActive(btn) {
  activeBtn && activeBtn.classList.remove(activeBtnClass);
  btn && btn.classList.add(activeBtnClass);
  activeBtn = btn;
}

setActiveFilter();
filtersHandler();
