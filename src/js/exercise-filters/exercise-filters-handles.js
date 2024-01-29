import { DEFAULT_FILTER } from './constants';
import getFiltersData from './get-filters-data';
import exerciseFiltersCreate from './exercise-filters-create';
import { createErrMsg, createOkMsg } from '../common/create-msg';
import getExercisesData from '../exercises-gallery/get-exercises-data';
import exercisesGalleryCreate from '../exercises-gallery/exercises-gallery-create';
import Pagination from '../common/pagination/pagination';
import galleryDelete from '../common/gallery-delete';
import galleryCreate from '../common/gallery-create';
import handleNoElements from '../exercises-gallery/exercises-gallery-noelements-markup';
import exercisesGalleryMarkup from '../exercises-gallery/exercises-gallery-markup';

const activeBtnClass = 'filter-button-active';
let activeBtn = {};

const title = document.querySelector('.exercise-filter-title');
const filtersRef = document.querySelector('.filters-buttons');

const filtersListRef = document.querySelector('.exercise-filters-list');
const galleryRef = document.querySelector('.exercises-gallery');

const formForSearching = document.querySelector('.form-for-searching-input');
const searchInput = document.querySelector('.searching-input');

filtersRef.addEventListener('click', onFiltersBtnsClick);
filtersListRef.addEventListener('click', onFiltersListClick);

formForSearching.addEventListener('submit', onSearchSubmit);

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
  formForSearching.classList.add('visually-hidden');
  pagination.reset(filtersHandler, filterValue, 1, 0);
  deleteChapter();
  filtersHandler({ filter: filterValue });
  changeBtnActive(event.target);
}

function filtersHandler(filterValue = { filter: DEFAULT_FILTER }) {
  getFiltersData(filterValue, pagination.currentPage)
    .then(data => {
      const filters = data.results;
      galleryDelete(galleryRef);
      exerciseFiltersCreate(filtersListRef, filters);
      const totalPages = data.totalPages ? data.totalPages : 0;
      pagination.init(filtersHandler, filterValue, totalPages);
    })
    .catch(error => {
      console.log(error.message);
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

  formForSearching.classList.remove('visually-hidden');

  if (filterTypeElem && filterTypeElem) {
    const filterName = filterNameElem.textContent.toLowerCase();
    const filterType = filterTypeElem.textContent.toLowerCase();
    if (filterType === '') return;
    filter[filterType] = filterName;
  }
  setChapter(filterNameElem.textContent);
  pagination.reset(exercisesHandler, filter, 1, 0);
  exercisesHandler(filter);
}

function exercisesHandler(filterParam) {
  getExercisesData(filterParam, pagination.currentPage)
    .then(data => {
      galleryDelete(filtersListRef);
      exercisesGalleryCreate(galleryRef, data.results);
      const totalPages = data.totalPages ? data.totalPages : 0;
      pagination.init(exercisesHandler, filterParam, totalPages);
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

function getFilter() {
  const filterType = document.querySelector('.filter-button-active');
  const filterName = document.querySelector('.chapter-text');
  const filter = {};
  filter[filterType.dataset.filter.toLowerCase()] =
    filterName.textContent.toLowerCase();
  return filter;
}

function getSearch() {
  const query = searchInput.value;
  return query.trim().toLowerCase();
}

function formReset() {
  searchInput.value = '';
}

function onSearchSubmit(event) {
  event.preventDefault();
  const searchQuery = getSearch();
  if (searchQuery === '')
  {
    createOkMsg(`Please fill in the search field`);
    return;
  };
  const filter = getFilter();
  pagination.reset(exercisesHandler, filter, 1, searchQuery, 0);
  searchHandler(filter, searchQuery);
}

function searchHandler(filterParam, searchQuery) {
  getExercisesData(filterParam, pagination.currentPage, searchQuery)
    .then(data => {
      if (data.results.length === 0) {
        galleryCreate([], galleryRef, handleNoElements);
      } else galleryCreate(data.results, galleryRef, exercisesGalleryMarkup);
      const totalPages = data.totalPages ? data.totalPages : 0;
      pagination.init(exercisesHandler, filterParam, totalPages);
    })

    .catch(error => {
      console.log(error.message);
    });
}

function deleteChapter() {
  if (title.textContent.indexOf('/') !== -1) {
    title.textContent = title.textContent.split('/')[0];
  }
}

function setChapter(chapter) {
  const strMarkup = ` / 
  <span class="chapter-text">${chapter}</span>`;
  title.insertAdjacentHTML('beforeend', strMarkup);
}

setActiveFilter();
filtersHandler();
