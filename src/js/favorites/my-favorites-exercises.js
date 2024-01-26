import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const listExercises = document.querySelector('.list-exercises');
const butRemovExercises = document.querySelector('.favorites-button-remove');
const favoritesQuoteDayTitle = document.querySelector(
    '.favorites-quote-day-title'
);

const instance = axios.create({
    baseURL: 'https://energyflow.b.goit.study/api',
});

const quote = instance
    .get('/quote ')
    .then(resault => {
        favoritesQuoteDayTitle.insertAdjacentHTML(
            'beforeend',
            ` <p class="favorites-quote-day-text">
                ${resault.data.quote}
                </p>
                    <p class="favorites-quote-day-text-autor">${resault.data.author}</p>`
        );
    })
    .catch(error => console.log(error));

const returnsLocalStorage = [];

instance
    .get('/exercises/64f389465ae26083f39b17a4')
    .then(res => localStorage.setItem('settings', JSON.stringify(res.data)))
    .catch(error => console.log(error));

instance
    .get('/exercises/64f389465ae26083f39b17a7')
    .then(res => localStorage.setItem('set', JSON.stringify(res.data)))
    .catch(error => console.log(error));

if (localStorage.length) {
    try {
        returnsLocalStorage.push(JSON.parse(localStorage.getItem('settings')));
        returnsLocalStorage.push(JSON.parse(localStorage.getItem('set')));

        listExercises.addEventListener('click', event => {
            const deleteId = event.target.id;
            if (deleteId) {
                document
                    .querySelector(
                        `.list-exercises-favorites[data-listId="${deleteId}"]`
                    )
                    .remove();
            }
        });
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
            ` <li data-listId="${_id}" class="list-exercises-favorites">
            <div class="list-exercises-favorites-category">
                <div>
                    <p class="exercises-favorites-name-category">WORKOUT</p>
                    <button id="${_id}" class="favorites-button-remove" type="button">
                    <svg id="${_id}" class="icon icon-trash">
                    <use id="${_id}"
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
