import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const favoriteslistExercises = document.querySelector(
  '.favorites-list-exercises-likes'
);

const instance = axios.create({
  baseURL: 'https://energyflow.b.goit.study/api',
});

const newArrLocalStorage = [];

if (localStorage.length > 2) {
  try {
    newArrLocalStorage.push(JSON.parse(localStorage.getItem('favorites')));

    const newArr = newArrLocalStorage.flatMap(res => res);

    const renderListFavoriteExercises = renderElement(newArr);
    favoriteslistExercises.insertAdjacentHTML(
      'beforeend',
      renderListFavoriteExercises
    );

    newArr.map(res => console.log(res._id));

    favoriteslistExercises.addEventListener('click', event => {
      const deleteId = event.target.id;

      if (deleteId) {
        document
          .querySelector(`.list-exercises-favorites[data-listId="${deleteId}"]`)
          .remove();
        newArr.map(res => {
          if (res._id === deleteId) {
            const csdvs = newArr.indexOf(res);

            newArr.splice(csdvs, 1);

            localStorage.setItem('favorites', JSON.stringify(newArr));

            if (!newArr.length) {
              localStorage.removeItem('favorites');

              favoriteslistExercises.insertAdjacentHTML(
                'beforeend',
                `<div class="favortes-no-exercises-found">
                <img
                  class="favortes-no-exercises-found-img"
                  src="./img/favorite/dumbbell-desktop@1x.jpg"
                  alt="dumbbell-desktop"
                />
                <p class="favortes-no-exercises-found-text">
                  It appears that you haven't added any exercises to your favorites
                  yet. To get started, you can add exercises that you like to your
                  favorites for easier access in the future.
                </p>
              </div>`
              );
            }
          }
        });
      }
    });
  } catch (error) {
    console.log('Parse form storage error');
  }
} else {
  favoriteslistExercises.insertAdjacentHTML(
    'beforeend',
    `<div class="favortes-no-exercises-found">
    <img
      class="favortes-no-exercises-found-img"
      src="./img/favorite/dumbbell-desktop@1x.jpg"
      alt="dumbbell-desktop"
    />
    <p class="favortes-no-exercises-found-text">
      It appears that you haven't added any exercises to your favorites
      yet. To get started, you can add exercises that you like to your
      favorites for easier access in the future.
    </p>
  </div>`
  );
}

function renderElement(params) {
  const render = params.reduce(
    (html, { bodyPart, burnedCalories, name, target, _id }) =>
      html +
      ` <li data-listId="${_id}" class="list-exercises-favorites">
            <div class="list-exercises-favorites-category">
                <div>
                    <p class="exercises-favorites-name-category">WORKOUT</p>
                    <button id="${_id}" class="favorites-button-remove" type="button">
                    <svg id="${_id}" class="favorites-icon-trash">
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
                Start<svg class="favorites-icon-arrow">
                <use
                    xlink:href="./img/icons/symbols.svg#icon-arrow"
                ></use>
            </svg>
                </button>
            </div>
            <div class="list-exercises-favorites-name">
                <svg class="favorites-social-icon-run" width="24" height="24">
                <use
                href="./img/icons/symbols.svg#favorites=icon-run-exercises"
            ></use>
                </svg>
                <p class="exercises-favorites-name">${name}</p>
            </div>
            <div class="list-exercises-favorites-conteiner">
                <ul class="list-exercises-favorites-characteristic">
                    <li class="favorites-list-characteristic">
                        <span class="favorites-characteristic-criteria"
                            >Burned calories: </span
                        >${burnedCalories} / 3 min
                    </li>
                    <li class="favorites-list-characteristic">
                        <span class="favorites-characteristic-criteria"
                            >Body part: </span
                        >${bodyPart}
                    </li>
                    <li class="favorites-list-characteristic">
                        <span class="favorites-characteristic-criteria"
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

// const renderListFavoriteExercises = renderElement(newArr);

// listExercises.insertAdjacentHTML('beforeend', renderListFavoriteExercises);
