import galleryDelete from '../common/gallery-delete.js';
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

let modalBackdrop = document.querySelector('.' + CLASS_BACKDROP);

if (!modalBackdrop) {
  createContainerForModal();
  modalBackdrop = document.querySelector('.' + CLASS_BACKDROP);
}

const galleryRef = document.querySelector(SELECTOR_GALLERY);
let closeBtn;

galleryRef.addEventListener('click', onGalleryClick);
modalBackdrop.addEventListener('click', onBackdropClick);

async function onGalleryClick(event) {
  const targetRef = event.target;
  console.log(targetRef);
  if (!targetRef.classList.contains(CLASS_GALLERYSTART)) return;

  event.preventDefault();
  console.log(targetRef.dataset.id);

  try {
    const formData = await getExerciseById(targetRef.dataset.id);
    if (formData) {
      exerciseModalCreate(formData, modalBackdrop);
      closeBtn = document.querySelector(SELECTOR_CLOSEBTN);
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
  galleryDelete(galleryRef);
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

function createContainerForModal() {
  const modalBackDrop = document.createElement('div');
  modalBackDrop.classList.add(CLASS_BACKDROP);
  document.body.appendChild(modalBackDrop);
  console.log(modalBackDrop);
}
