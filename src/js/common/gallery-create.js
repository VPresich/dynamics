import scrollingDown from './scroll-window';
import { getRatingPart } from '../exercises-gallery/exercise-markup-constant';
const galleryCreate = (data, galleryRef, markupFn) => {
  galleryRef.textContent = "";
  console.log(`111`);
  galleryRef.classList.add('visually-hidden');
  let strMarkup = '';
  if (!data.length) {
    strMarkup = markupFn();
  }
  else {
    strMarkup = markupFn(data);   
  }
  const strMarkup = markupFn(data, getRatingPart);
  galleryRef.innerHTML = '';
  galleryRef.insertAdjacentHTML('beforeend', strMarkup);
  galleryRef.classList.remove('visually-hidden');
  //   scrollingDown('.exercise-filters-list', '.filter-card', 40);
};

export default galleryCreate;
