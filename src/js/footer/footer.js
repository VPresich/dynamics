// import DbApi from '../api/db-api';
// import { BASE_URL } from '../api/api-constants';
import { createErrMsg, createOkMsg } from '../common/create-msg';


// import axios from 'axios';

// const footerform = document.querySelector('.footer-subscription');
// const footerInput = document.querySelector('.input-footer');

// const baseURL = 'https://energyflow.b.goit.study/api/subscription';

// footerform.addEventListener("submit", handleSubmit);

// async function handleSubmit(event) {
//     event.preventDefault();
    
//     const footerEmailValue = footerInput.value.trim();
//     if (!validateEmail(footerEmailValue)) {
//         return createErrMsg("Please enter a valid email!");
//     }; 

//     try {
//         const response = await axios.post(baseURL, {
//             email: footerEmailValue
//         });

//         if (response.status >= 200 && response.status < 300) {
//             createOkMsg("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.")
            
//         } else {
//             throw new Error();
//         }

//     } catch (error) {
//         createErrMsg("Sorry! Something is wrong")
//     } finally {
//         footerInput.value = ''
//     }
// }

// const validateEmail = (email) => {
//     const pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
//     return pattern.test(email);
// }

// const messageValidEmail = () => {
//     iziToast.info({
//         title: '',
//         message: "Please give us a valid email.",
//         color: 'white',
//         position: 'center'
//     });
// }

// const footerForm = document.querySelector('.footer-subscription');
// const footerInput = footerForm.querySelector('.input-footer');
// const emailPattern = '[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}';

// footerForm.addEventListener("submit", handleSubscription);


// async function handleSubscription(event) {
//     event.preventDefault();
//     const myRequest = new DbApi(BASE_URL);
//     const footerEmailValue = footerInput.value.trim();

//     const options = {
//         method: "POST",
//         body: JSON.stringify({email: footerEmailValue}),
//         headers: {
//             "Content-Type": "application/json"
//     },
// };

//     try {
//         const request = await myRequest.objectCreateRequest('subscription', { email: footerEmailValue });
//          if (request.status >= 200 && request.status < 300) {
//             createOkMsg("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.")
//         }
        
//    }
//     catch (error) {
//         console.log(error);
//         createErrMsg("Sorry! Something is wrong");
//         if (error.status === 409) {
//             createErrMsg("Subscription already exists");
//         }
//     }
    // .then(response => {
    //     if (response.status >= 200 && response.status < 300) {
    //         createOkMsg("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.")
    //     }
    // })
    //     .catch(error => {
    //         console.log(error);
    //     createErrMsg("Sorry! Something is wrong");
    // });
// }

const footerForm = document.querySelector('.footer-subscription');
const footerInput = footerForm.querySelector('.input-footer');

footerForm.addEventListener("submit", handleSubscription);

function handleSubscription(event) {
    event.preventDefault();

    const footerEmailValue = footerInput.value.trim();
    const emailPattern = '[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}';
    if (!emailPattern) {
        createErrMsg("Please enter a valid email");
    }

    const options = {
        method: "POST",
        body: JSON.stringify({email: footerEmailValue}),
        headers: {
            "Content-Type": "application/json"
    },
};

    fetch('https://energyflow.b.goit.study/api/subscription', options)
        .then(response => {
        if (response.status >= 200 && response.status < 300) {
            createOkMsg("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.")
        }
        if (response.status === 409) {
            createErrMsg("Subscription already exists");
     }
    })
        .catch(error => {
            console.log(error);
            createErrMsg("Sorry! Something is wrong");
            
    });
}