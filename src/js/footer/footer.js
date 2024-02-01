import { createErrMsg, createOkMsg } from '../common/create-msg';
import validateEmail from '../api/validate-email';
import { BASE_URL } from '../api/api-constants';
import {
  ERROR409_MSG,
  ERROR_FETCH,
  SUCCESS_MSG,
  WRONG_EMAIL,
} from './messages';

const footerForm = document.querySelector('.footer-subscription');
const footerInput = footerForm.querySelector('.input-footer');
const footerBtn = document.querySelector('.footer-button');

footerForm && footerForm.addEventListener('submit', handleSubscription);
footerInput && footerInput.addEventListener('input', changeBtnStatus);

function handleSubscription(event) {
  event.preventDefault();

  const footerEmailValue = footerInput.value.trim();
  if (!footerEmailValue) {
    createErrMsg(NO_EMAIL);
    return;
  }

  if (!validateEmail(footerEmailValue)) {
    createErrMsg(WRONG_EMAIL);
    footerForm.reset();
    changeBtnStatus();
    return;
  }

  const options = {
    method: 'POST',
    body: JSON.stringify({ email: footerEmailValue }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  fetch(`${BASE_URL}subscription`, options)
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        createOkMsg(SUCCESS_MSG);
      }
      if (response.status === 409) {
        createErrMsg(ERROR409_MSG);
      }
    })
    .catch(error => {
      console.log(error);
      createErrMsg(ERROR_FETCH);
    })
    .finally(() => {
      footerForm.reset();
      changeBtnStatus();
    });
}

function changeBtnStatus(event) {
  footerBtn.disabled = !footerInput.value.trim();
}

changeBtnStatus();
