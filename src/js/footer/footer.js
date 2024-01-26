// import { BASE_URL } from '../api/api-constants';
// import { createErrMsg, createOkMsg } from '../common/create-msg';
// const emailForm = document.querySelector("footer-subscription");
// const inputEmail = form.querySelector("input-footer");
// const submitButton = form.querySelector("footer-button");
// const inputValueEmail = inputEmail.value.trim();
// const options = {
//   method: "POST",
//   body: JSON.stringify(inputValueEmail),
//   headers: {
//     "Content-Type": "application/json"
//   },
// };
// function makeSubscribtion(inputValueEmail) {
//     fetch(`${BASE_URL}subscription`, { options })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error, status: ${response.status}`);
//             } if (response.ok) {
//                 createOkMsg("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.")
//             } if (response.status === "409") {
//                 createErrMsg("Subscription already exists")
//             }
//             return response.json();
//         })
//         .catch(error => {
//             console.log(error.message);
//             createErrMsg("Sorry! Something is wrong");
//         });
// }
//     submitButton.addEventListener('submit', makeSubscribtion);

import { createErrMsg, createOkMsg } from '../common/create-msg';

const footerForm = document.querySelector('.footer-subscription');
const footerInput = footerForm.querySelector('.input-footer');

footerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const footerEmailValue = event.currentTarget.elements.footerInput.value.trim();

    const options = {
        method: "POST",
        body: JSON.stringify(footerEmailValue),
        headers: {
            "Content-Type": "application/json"
    },
};

    fetch('https://energyflow.b.goit.study/api/subscription', options)
    .then(response => {
        if (response.status >= 200 && response.status < 300) {
            createOkMsg("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.")
        }
    })
        .catch(error => {
            console.log(error);
        createErrMsg("Sorry! Something is wrong");
    });
}