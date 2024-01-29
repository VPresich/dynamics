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
import checkFavoriteStatus from './check-button-status.js';
import addOrRemoveFromFavorites from './add-remove-to-favorites.js';

let closeBtn;
let favoritsBtn;
let ratingBtn;
let exerciseId;

let modalBackdrop = document.querySelector('.' + CLASS_BACKDROP);
modalBackdrop && modalBackdrop.addEventListener('click', onBackdropClick);

const galleryRef = document.querySelector(SELECTOR_GALLERY);
galleryRef && galleryRef.addEventListener('click', onGalleryClick);

async function onGalleryClick(event) {
  event.preventDefault();
  const targetRef = event.target;
  if (!targetRef.classList.contains(CLASS_GALLERYSTART)) return;
  exerciseId = targetRef.dataset.id;
  try {
    const formData = await getExerciseById(exerciseId);
    if (formData) {
      exerciseModalCreate(formData, modalBackdrop);
      openModalWindow();
    }
  } catch (error) {
    console.log(error.message);
  }
}

function onCloseBtn(event) {
  window.removeEventListener('keydown', onWindowKeydown);
  modalBackdrop.classList.remove(MODAL_VISIBILITY);
}

function openModalWindow() {
  modalBackdrop.classList.add(MODAL_VISIBILITY);
  closeBtn = document.querySelector(SELECTOR_CLOSEBTN);
  closeBtn && closeBtn.addEventListener('click', onCloseBtn);

  favoritsBtn = document.querySelector(SELECTOR_FAVORITS);
  favoritsBtn && favoritsBtn.addEventListener('click', onFavoritsBtn);
  checkFavoriteStatus(exerciseId, favoritsBtn);

  ratingBtn = document.querySelector(SELECTOR_RATING);
  ratingBtn && ratingBtn.addEventListener('click', onFavoritsBtn);

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

function onFavoritsBtn(event) {
  addOrRemoveFromFavorites(exerciseId, favoritsBtn);
}

function onRatingBtn(event) {}
