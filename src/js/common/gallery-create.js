import scrollingDown from './scroll-window';
import { getRatingPart } from '../exercises-gallery/exercise-markup-constant';
const galleryCreate = (data, galleryRef, markupFn) => {
  galleryRef.innerHTML = '';
  if (!data.length) {
    //TODO Default image
    console.log(
      'Sorry, there are no data matching your search query. Please, try again!'
    );
  }
  const strMarkup = markupFn(data, getRatingPart);
  galleryRef.innerHTML = '';
  galleryRef.insertAdjacentHTML('beforeend', strMarkup);
  galleryRef.classList.remove('visually-hidden');
  //   scrollingDown('.exercise-filters-list', '.filter-card', 40);
};

export default galleryCreate;
