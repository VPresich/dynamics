import {
  KEY_CODE_ESC,
  CLASS_BACKDROP,
  SELECTOR_CLOSEBTN,
  SELECTOR_GALLERY,
  CLASS_GALLERYSTART,
  MODAL_VISIBILITY,
} from './constants.js';

import exerciseModalCreate from './exercise-modal-create';
import getExerciseById from './exercise-modal-get-id';
import galleryDelete from '../common/gallery-delete.js';

let modalBackdrop = document.querySelector('.' + CLASS_BACKDROP);
modalBackdrop && modalBackdrop.addEventListener('click', onBackdropClick);

const galleryRef = document.querySelector(SELECTOR_GALLERY);
let closeBtn;

galleryRef.addEventListener('click', onGalleryClick);

async function onGalleryClick(event) {
  const targetRef = event.target;
  console.log(targetRef.dataset);
  if (!targetRef.classList.contains(CLASS_GALLERYSTART)) return;

  event.preventDefault();
  console.log(targetRef.dataset.id);

  try {
    const formData = await getExerciseById(targetRef.dataset.id);
    if (formData) {
      exerciseModalCreate(formData, modalBackdrop);
      closeBtn = document.querySelector(SELECTOR_CLOSEBTN);
      closeBtn.addEventListener('click', onCloseBtn);
      openModalWindow();
    }
  } catch (error) {
    console.log(error.message);
  }
}

function openModalWindow() {
  modalBackdrop.classList.add(MODAL_VISIBILITY);
  window.addEventListener('keydown', onWindowKeydown);
}

function onCloseBtn(event) {
  window.removeEventListener('keydown', onWindowKeydown);
  modalBackdrop.classList.remove(MODAL_VISIBILITY);
  galleryDelete(modalBackdrop);
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

function createConainer() {
  modalBackdrop = document.createElement('div');
  modalBackdrop && modalBackdrop.classList.add(CLASS_BACKDROP);
  document.body.appendChild(modalBackdrop);
  modalBackdrop.addEventListener('click', onBackdropClick);
}

if (!modalBackdrop) createConainer();
