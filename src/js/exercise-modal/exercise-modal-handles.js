import {
  KEY_CODE_ESC,
  SELECTOR_BACKDROP,
  SELECTOR_CLOSEBTN,
  SELECTOR_GALLERY,
  CLASS_GALLERYSTART,
} from './constants.js';

const modalBackdrop = document.querySelector(SELECTOR_BACKDROP);

const closeBtn = document.querySelector(SELECTOR_CLOSEBTN);
const galleryRef = document.querySelector(SELECTOR_GALLERY);

galleryRef.addEventListener('click', onGalleryClick);
closeBtn.addEventListener('click', onCloseBtn);
modalBackdrop.addEventListener('click', onBackdropClick);

function onGalleryClick(event) {
  const targetRef = event.target;
  console.log(targetRef);
  if (!targetRef.classList.contains(CLASS_GALLERYSTART)) return;

  event.preventDefault();
  // console.log(targetRef.dataset.id);
  openModalWindow();
}

function openModalWindow() {
  modalBackdrop.classList.add('is-open');
  window.addEventListener('keydown', onWindowKeydown);
}

function onCloseBtn(event) {
  window.removeEventListener('keydown', onWindowKeydown);
  modalBackdrop.classList.remove('is-open');
  modalWindowSlider.destroy();
}

function onWindowKeydown(event) {
  if (event.code === KEY_CODE_ESC) {
    onCloseBtn(event);
  }
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseBtn(event);
  }
}
