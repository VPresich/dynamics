import { createErrMsg, createOkMsg } from '../common/create-msg';

const footerForm = document.querySelector('.footer-subscription');
const footerInput = footerForm.querySelector('.input-footer');

footerForm.addEventListener('submit', handleSubscription);

function handleSubscription(event) {
  event.preventDefault();

  const footerEmailValue = footerInput.value.trim();
  const emailPattern = '[w-]+(.[w-]+)*@([w-]+.)+[a-zA-Z]{2,7}';
  if (!emailPattern) {
    createErrMsg('Please enter a valid email');
  }

  const options = {
    method: 'POST',
    body: JSON.stringify({ email: footerEmailValue }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  fetch('https://energyflow.b.goit.study/api/subscription', options)
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        createOkMsg(
          "We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being."
        );
      }
      if (response.status === 409) {
        createErrMsg('Subscription already exists');
      }
    })
    .catch(error => {
      console.log(error);
      createErrMsg('Sorry! Something is wrong');
    });
}
