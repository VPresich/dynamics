import { CLASS_BACKDROP, SELECTOR_GALLERY } from '../exercise-modal/constants';
import {
  SELECTOR_RATING_FORM_SEND_BTN,
  SELECTOR_RATING_FORM_STAR,
  SELECTOR_RATING_FORM_STARS_CONTAINER,
  SELECTOR_RATING_FORM_INPUT_EMAIL,
  SELECTOR_RATING_FORM_INPUT_COMMENT,
} from './constants';

import ratingFormCreate from './rating-form-create';
import ratingFormCreateStars from './rating-form-create-stars';
import patchExerciseRating from './patch-exercise-rating';

import { createErrMsg, createOkMsg } from '../common/create-msg';

let starsContainer;
let ratingFormSendBtn;
let inputEmailRef;
let inputCommentRef;
let exerciseId;
let exerciseRating = 0;
let email;
let comment;

let modalBackdrop = document.querySelector('.' + CLASS_BACKDROP);

const galleryRef = document.querySelector(SELECTOR_GALLERY);

export function onRatingBtnClick(event, id) {
  event.preventDefault();
  if (!id) return;
  exerciseId = id;
  ratingFormCreate({ exerciseRating }, modalBackdrop);
  starsContainer = document.querySelector(SELECTOR_RATING_FORM_STARS_CONTAINER);
  ratingFormCreateStars({ exerciseRating }, starsContainer);
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
    createErrMsg("Please select a rating");
    return
  }

  if (!email) {
    createErrMsg("Please enter a email");
    return
  } 

  if (!validateEmail(email)) {
    createErrMsg("please enter a valid email address");
    return
  } 

  let data = {
    id: exerciseId,
    rate: Number(exerciseRating),
    email,
  };
  patchExerciseRating(data)
    .then(res => {
      console.log(res);
      createOkMsg('Success');
    })
    .catch(error => {
      console.log(error);
      createErrMsg('err');
    });
  galleryRef &&
    galleryRef.querySelectorAll(`[data-id="${exerciseId}"]`)[0].click();
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
