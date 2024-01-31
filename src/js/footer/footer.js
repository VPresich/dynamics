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

footerForm.addEventListener('submit', handleSubscription);

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
    });
}
