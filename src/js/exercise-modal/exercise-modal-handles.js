import {
  KEY_CODE_ESC,
  CLASS_BACKDROP,
  SELECTOR_CLOSEBTN,
  SELECTOR_GALLERY,
  CLASS_GALLERYSTART,
  MODAL_VISIBILITY,
  SELECTOR_FAVORITS,
  SELECTOR_RATING,
} from './constants.js';

import exerciseModalCreate from './exercise-modal-create';
import getExerciseById from './exercise-modal-get-id';
import galleryDelete from '../common/gallery-delete.js';

let closeBtn;
let favoritsBtn;
let ratingBtn;

let modalBackdrop = document.querySelector('.' + CLASS_BACKDROP);
modalBackdrop && modalBackdrop.addEventListener('click', onBackdropClick);

const galleryRef = document.querySelector(SELECTOR_GALLERY);
galleryRef && galleryRef.addEventListener('click', onGalleryClick);

async function onGalleryClick(event) {
  event.preventDefault();
  const targetRef = event.target;
  if (!targetRef.classList.contains(CLASS_GALLERYSTART)) return;
  const exerciseId = targetRef.dataset.id;
  try {
    const formData = await getExerciseById(exerciseId);
    if (formData) {
      exerciseModalCreate(formData, modalBackdrop);
      closeBtnHandler();
      favoritsBtnHandle();
      ratingBtnHandle();

      openModalWindow();
    }
  } catch (error) {
    console.log(error.message);
  }
}

function closeBtnHandler() {
  closeBtn = document.querySelector(SELECTOR_CLOSEBTN);
  closeBtn && closeBtn.addEventListener('click', onCloseBtn);
}

function onCloseBtn(event) {
  window.removeEventListener('keydown', onWindowKeydown);
  modalBackdrop.classList.remove(MODAL_VISIBILITY);
}

function favoritsBtnHandle() {
  favoritsBtn = document.querySelector(SELECTOR_FAVORITS);
  favoritsBtn && favoritsBtn.addEventListener('click', onFavoritsBtn);
}

function ratingBtnHandle() {
  ratingBtn = document.querySelector(SELECTOR_RATING);
  ratingBtn && ratingBtn.addEventListener('click', onFavoritsBtn);
}

function openModalWindow() {
  modalBackdrop.classList.add(MODAL_VISIBILITY);
  window.addEventListener('keydown', onWindowKeydown);
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

function onFavoritsBtn(event) {}

function onRatingBtn(event) {}
