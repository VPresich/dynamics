import { getRatingPart } from '../exercises-gallery/exercise-markup-constant';
const galleryCreate = (data, galleryRef, markupFn) => {
  galleryRef.textContent = "";
  galleryRef.classList.add('visually-hidden');
  let strMarkup = '';
  if (!data.length) {
    strMarkup = markupFn(data, getRatingPart);
  }
  else {
    strMarkup = markupFn(data, getRatingPart);   
  }
  strMarkup = markupFn(data, getRatingPart);
  galleryRef.innerHTML = '';
  galleryRef.insertAdjacentHTML('beforeend', strMarkup);
  galleryRef.classList.remove('visually-hidden');
};

export default galleryCreate;
