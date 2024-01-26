import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const listExercises = document.querySelector('.list-exercises');
const butRemovExercises = document.querySelector('.favorites-button-remove');
// const listExercises = document.querySelector('.list-exercises');

// console.log(axios);

const instance = axios.create({
    baseURL: 'https://energyflow.b.goit.study/api',
    params: {
        // filter: 'Equipment',
        // page: 1,
        // limit: 12,
        // id: '64f389465ae26083f39b17a4',
    },
});

const returnsLocalStorage = [];

instance
    .get('/exercises/64f389465ae26083f39b17a4')
    .then(res =>
        // localStorage.setItem('settings', JSON.stringify(arr))

        localStorage.setItem('settings', JSON.stringify(res.data))
    )
    .catch(error => console.log(error));

instance
    .get('/exercises/64f389465ae26083f39b17a7')
    .then(res =>
        // localStorage.setItem('settings', JSON.stringify(arr))

        localStorage.setItem('set', JSON.stringify(res.data))
    )
    .catch(error => console.log(error));

// console.log(localStorage.length);

if (localStorage.length) {
    // console.log(localStorage.length);
    try {
        returnsLocalStorage.push(JSON.parse(localStorage.getItem('settings')));
        returnsLocalStorage.push(JSON.parse(localStorage.getItem('set')));
        // console.log(returnsLocalStorage);
        // Array.from(form.elements).forEach(element => {
        //     const storageValue = returnsLocalStorage[element.name];
        //     if (storageValue) {
        //         element.value = storageValue;
        //     }
        // });
    } catch (error) {
        console.log('Parse form storage error');
    }
} else {
    iziToast.show({
        message:
            "It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.",
        messageColor: '#fafafb',
        messageSize: '16px',
        backgroundColor: '#82C43C',
        position: 'topRight',
        closeOnEscape: true,
        close: true,
        icon: 'Icomoon',
        iconUrl: `${iconOkUrl}`,
        iconColor: '#fafafb',
    });
}

listExercises.addEventListener('click', event => {
    console.log(event.target);
    // event.preventDefault();
    // if (email.value && message.value) {
    //     const savedForm = localStorage.getItem('feedback-form-state');
    //     console.log(JSON.parse(savedForm));
    //     localStorage.removeItem('feedback-form-state');
    //     form.reset();
    // } else {
    //     alert('Please fill in the form field');
    // }
});

// console.log(returnsLocalStorage);
// const parsedSettings = JSON.parse(localStorage.getItem('settings'));
// const parsSet = JSON.parse(localStorage.getItem('set'));
// console.log(parsSet);
// console.log(parsedSettings);
// arr.push(parsedSettings);
// returnsLocalStorage.push(parsSet);
// console.log(arr);

function renderElement(params) {
    const render = params.reduce(
        (
            html,
            {
                bodyPart,
                burnedCalories,
                equipment,
                description,
                gifUrl,
                name,
                popularity,
                rating,
                target,
                _id,
            }
        ) =>
            html +
            ` <li id="${_id}" class="list-exercises-favorites">
            <div class="list-exercises-favorites-category">
                <div>
                    <p class="exercises-favorites-name-category">
                        WORKOUT
                    </p>
                    <button id="${_id}" class="favorites-button-remove" type="button">
                    <svg class="icon icon-trash">
                    <use
                        xlink:href="./img/icons/symbols.svg#icon-trash"
                    ></use>
                </svg>
                    </button>
                </div>

                <button
                    type="submit"
                    class="exercises-favorites-but-start"
                >
                Start<svg class="icon icon-arrow">
                <use
                    xlink:href="./img/icons/symbols.svg#icon-arrow"
                ></use>
            </svg>
                </button>
            </div>
            <div class="list-exercises-favorites-name">
                <svg class="social-icon-run" width="24" height="24">
                <use
                href="./img/icons/symbols.svg#icon-run-exercises"
            ></use>
                </svg>
                <p class="exercises-favorites-name">${name}</p>
            </div>
            <div class="list-exercises-favorites-conteiner">
                <ul class="list-exercises-favorites-characteristic">
                    <li class="list-characteristic">
                        <span class="characteristic-criteria"
                            >Burned calories: </span
                        >${burnedCalories} / 3 min
                    </li>
                    <li class="list-characteristic">
                        <span class="characteristic-criteria"
                            >Body part: </span
                        >${bodyPart}
                    </li>
                    <li class="list-characteristic">
                        <span class="characteristic-criteria"
                            >Target: </span
                        >${target}
                    </li>
                </ul>
            </div>
        </li>`,
        ''
    );
    return render;
}

const galleryMarkup = renderElement(returnsLocalStorage);

listExercises.insertAdjacentHTML('beforeend', galleryMarkup);

// instance

//     .get('/exercises/64f389465ae26083f39b17a7')
//     .then(res => arr.push(res.data))
//     .catch(error => console.log(error));
// const responseData = response.data;
// responseData.then(res => arr.push(res)).catch(error => console.log(error));
// console.log(responseData);
// const mapArr = arr.map(resault => console.log(resault));
// console.log(arr);
// console.log(localStorage);
// return response.data;

// localStorage.getItem('settings', JSON.stringify(arr));

// https://energyflow.b.goit.study/api/exercises?filter=Equipment&page=1&limit=12&id=64f389465ae26083f39b17a4
// https://energyflow.b.goit.study/api/exercises/ exerciseID
