import { CLASS_BACKDROP, KEY_CODE_ESC } from '../exercise-modal/constants';
import {
  SELECTOR_RATING_FORM_SEND_BTN,
  SELECTOR_RATING_FORM_STAR,
  SELECTOR_RATING_FORM_STARS_CONTAINER,
  SELECTOR_RATING_FORM_INPUT_EMAIL,
  SELECTOR_RATING_FORM_INPUT_COMMENT,
  SELECTOR_EXERCISE_CONTAINER,
  SELECTOR_RATING_FROM_CONTAINER,
  SELECTOR_RATING_FORM_CLOSE_BTN
} from './constants';

import { onWindowKeydown } from '../exercise-modal/exercise-modal-handles';

import ratingFormCreate from './rating-form-create';
import ratingFormCreateStars from './rating-form-create-stars';
import patchExerciseRating from './patch-exercise-rating';

import { createErrMsg, createOkMsg } from '../common/create-msg';

let starsContainer;
let ratingFormSendBtn;
let inputEmailRef;
let inputCommentRef;
let exerciseContainerRef;
let ratingFormContainerRef;
let exerciseId;
let exerciseRating = 0;
let email;
let comment;

let modalBackdrop = document.querySelector('.' + CLASS_BACKDROP);

export function onRatingBtnClick(event, id) {
  event.preventDefault();
  if (!id) return;
  exerciseId = id;
  exerciseContainerRef = document.querySelector(SELECTOR_EXERCISE_CONTAINER);

  toggleExerciseModalVisibility(false);
  ratingFormCreate({ exerciseRating }, modalBackdrop);
  starsContainer = document.querySelector(SELECTOR_RATING_FORM_STARS_CONTAINER);
  ratingFormContainerRef = document.querySelector(
    SELECTOR_RATING_FROM_CONTAINER
  );
  ratingFormCreateStars({ exerciseRating }, starsContainer);
  const closeBtnRef = document.querySelector(SELECTOR_RATING_FORM_CLOSE_BTN);
  ratingFormContainerRef.addEventListener('click', onBackdropClickRatingForm);
  closeBtnRef.addEventListener('click', () => toggleExerciseModalVisibility(true));
  
  window.removeEventListener('keydown', onWindowKeydown);
  window.addEventListener('keydown', onWindowKeydownRatingFrom);
  onRatingModalOpen();
}

function onRatingModalOpen() {
  ratingFormSendBtn = document.querySelector(SELECTOR_RATING_FORM_SEND_BTN);
  ratingFormSendBtn &&
    ratingFormSendBtn.addEventListener('click', onSendRating);
  inputEmailRef = document.querySelector(SELECTOR_RATING_FORM_INPUT_EMAIL);
  inputEmailRef && inputEmailRef.addEventListener('input', onInputEmail);
  inputCommentRef = document.querySelector(SELECTOR_RATING_FORM_INPUT_COMMENT);
  inputCommentRef && inputCommentRef.addEventListener('input', onInputComment);
  starsAddListeners();
}

function onRatingStarClick(button) {
  exerciseRating = button.getAttribute('data-starnumber');
  ratingFormCreateStars({ exerciseRating }, starsContainer);
  starsAddListeners();
}

function starsAddListeners() {
  const ratingStarBtnsRef = document.querySelectorAll(
    SELECTOR_RATING_FORM_STAR
  );
  ratingStarBtnsRef &&
    ratingStarBtnsRef.forEach(function (button) {
      button.addEventListener('click', () => {
        onRatingStarClick(button);
      });
    });
}

function onInputEmail(event) {
  inputEmailRef.textContent = event.target.value;
  email = event.target.value;
}

function onInputComment(event) {
  inputCommentRef.textContent = event.target.value;
  comment = event.target.value;
}

function onSendRating(event) {
  event.preventDefault();

  if (!exerciseRating) {
    createErrMsg('Please select a rating');
    return;
  }

  if (!email) {
    createErrMsg('Please enter a email');
    return;
  }

  if (!validateEmail(email)) {
    createErrMsg('please enter a valid email address');
    return;
  }

  let data = {
    id: exerciseId,
    rate: Number(exerciseRating),
    email,
  };

  patchExerciseRating(data)
    .then(res => {
      createOkMsg('Success');
      clearFormData();
      console.log(res);
      toggleExerciseModalVisibility(true);

    })
    .catch(error => {
      console.log(error);
      return createErrMsg('err');
    });
}

const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function clearFormData() {
  exerciseRating = 0;
  email = '';
  comment = '';
}

function toggleExerciseModalVisibility(boolean) {
  if (exerciseContainerRef && boolean && ratingFormContainerRef) {
    exerciseContainerRef.classList.remove('hide');
    ratingFormContainerRef.remove();
    window.removeEventListener('keydown', onWindowKeydownRatingFrom);
    window.addEventListener('keydown', onWindowKeydown);
  } else {
    exerciseContainerRef.classList.add('hide');
  }
}

export function onWindowKeydownRatingFrom(event) {
  if (event.code === KEY_CODE_ESC) {
    toggleExerciseModalVisibility(true)
  }
}

export function onBackdropClickRatingForm(event) {
  if (event.currentTarget === event.target) {
    toggleExerciseModalVisibility(true)
  }
}
