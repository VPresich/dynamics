import scrollingDown from './scroll-window';
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
  galleryRef.insertAdjacentHTML('beforeend', strMarkup);
  galleryRef.classList.remove('visually-hidden');
  //   scrollingDown('.exercise-filters-list', '.filter-card', 40);
};

export default galleryCreate;
