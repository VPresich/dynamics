import {
  KEY_CODE_ESC,
  CLASS_BACKDROP,
  SELECTOR_CLOSEBTN,
  SELECTOR_GALLERY,
  CLASS_GALLERYSTART,
  MODAL_VISIBILITY,
  SELECTOR_FAVORITS,
  SELECTOR_RATING,
  SELECTOR_RATING_STARS,
} from './constants.js';

import exerciseModalCreate from './exercise-modal-create';
import getExerciseById from './exercise-modal-get-id';
import checkFavoriteStatus from './check-button-status.js';
import addOrRemoveFromFavorites from './add-remove-to-favorites.js';
import renderRatingStars from './render-stars.js';
import { onRatingBtnClick } from '../rating-form/rating-form-handles.js';

let closeBtn;
let favoritsBtn;
let ratingBtn;
let exerciseId;

let modalBackdrop = document.querySelector('.' + CLASS_BACKDROP);
modalBackdrop && modalBackdrop.addEventListener('click', onBackdropClick);

const galleryRef = document.querySelector(SELECTOR_GALLERY);
galleryRef && galleryRef.addEventListener('click', onGalleryClick);

export async function onGalleryClick(event) {
  event.preventDefault();
  const targetRef = event.target;
  if (!targetRef.classList.contains(CLASS_GALLERYSTART)) return;
  if (targetRef.nodeName !== 'BUTTON') {
    let closestBtn = targetRef.closest('button');
    exerciseId = closestBtn.dataset.id;
  } else exerciseId = targetRef.dataset.id;
  if (!exerciseId) return;
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

export function onCloseBtn(event) {
  window.removeEventListener('keydown', onWindowKeydown);
  modalBackdrop.classList.remove(MODAL_VISIBILITY);
}

export function openModalWindow() {
  modalBackdrop.classList.add(MODAL_VISIBILITY);
  window.addEventListener('keydown', onWindowKeydown);
  closeBtn = document.querySelector(SELECTOR_CLOSEBTN);
  closeBtn && closeBtn.addEventListener('click', onCloseBtn);

  favoritsBtn = document.querySelector(SELECTOR_FAVORITS);
  favoritsBtn && favoritsBtn.addEventListener('click', onFavoritsBtn);
  checkFavoriteStatus(exerciseId, favoritsBtn);
  const ratingContRef = document.querySelector(SELECTOR_RATING_STARS);
  renderRatingStars(ratingContRef);

  ratingBtn = document.querySelector(SELECTOR_RATING);
  ratingBtn && ratingBtn.addEventListener('click', onRatingBtn);
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

function onRatingBtn(event) {
  onRatingBtnClick(event, exerciseId);
}
