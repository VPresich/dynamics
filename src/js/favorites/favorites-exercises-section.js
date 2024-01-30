import exercisesGalleryMarkup from '../exercises-gallery/exercises-gallery-markup';
import iconURL from '../../img/icons/symbols.svg';
import getRemovButton from './favorites-button-remove';
import getFavortesNoExercises from './favorites-not-exercises';

const favoriteslistExercises = document.querySelector(
  '.favorites-list-exercises-likes'
);

const newArrLocalStorage = [];

if (localStorage.length > 2) {
  try {
    newArrLocalStorage.push(JSON.parse(localStorage.getItem('favorites')));

    const newArr = newArrLocalStorage.flatMap(res => res);

    const renderListFavoriteExercises = exercisesGalleryMarkup(
      newArr,
      getRemovButton
    );

    favoriteslistExercises.insertAdjacentHTML(
      'beforeend',
      renderListFavoriteExercises
    );

    favoriteslistExercises.addEventListener('click', event => {
      if (event.target.classList.contains('gallery-start')) return;
      // if (!event.target.classList.contains('favorites-button-remove')) return;
      const deleteId = event.target.dataset.id;

      if (deleteId) {
        document
          .querySelector(`.exercise-card[data-id="${deleteId}"]`)
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
                getFavortesNoExercises()
              );
            }
          }
        });
      }
    });
  } catch (error) {
    console.log(error.message);
  }
} else {
  favoriteslistExercises.insertAdjacentHTML(
    'beforeend',
    getFavortesNoExercises()
  );
}

// const buttonMenuRef = document.querySelector('.js-open-menu-btn');
// const mobileMenuRef = document.querySelector('.js-mobile-menu');
// const buttonCloseMenuRef = document.querySelector('.js-mobile-menu-close-btn');

// buttonMenuRef.addEventListener('click', () => {
//   mobileMenuRef.classList.add('is-open');
// });

// buttonCloseMenuRef.addEventListener('click', () => {
//   mobileMenuRef.classList.remove('is-open');
// });

// function renderElement(params) {
//   const render = params.reduce(
//     (html, { bodyPart, burnedCalories, name, target, _id }) =>
//       html +
//       ` <li data-listId="${_id}" class="list-exercises-favorites">
//             <div class="list-exercises-favorites-category">
//                 <div>
//                     <p class="exercises-favorites-name-category">WORKOUT</p>
//                     <button id="${_id}" class="favorites-button-remove" type="button">
//                     <svg id="${_id}" class="favorites-icon-trash">
//                     <use id="${_id}"
//                         xlink:href="./img/icons/symbols.svg#icon-trash-favotites"
//                     ></use>
//                 </svg>
//                     </button>
//                 </div>

//                 <button
//                     type="submit"
//                     class="exercises-favorites-but-start"
//                 >
//                 Start<svg class="favorites-icon-arrow">
//                 <use
//                     xlink:href="./img/icons/symbols.svg#icon-arrow"
//                 ></use>
//             </svg>
//                 </button>
//             </div>
//             <div class="list-exercises-favorites-name">
//                 <svg class="favorites-social-icon-run" width="24" height="24">
//                 <use
//                 href="./img/icons/symbols.svg#favorites=icon-run-exercises"
//             ></use>
//                 </svg>
//                 <p class="exercises-favorites-name">${name}</p>
//             </div>
//             <div class="list-exercises-favorites-conteiner">
//                 <ul class="list-exercises-favorites-characteristic">
//                     <li class="favorites-list-characteristic">
//                         <span class="favorites-characteristic-criteria"
//                             >Burned calories: </span
//                         >${burnedCalories} / 3 min
//                     </li>
//                     <li class="favorites-list-characteristic">
//                         <span class="favorites-characteristic-criteria"
//                             >Body part: </span
//                         >${bodyPart}
//                     </li>
//                     <li class="favorites-list-characteristic">
//                         <span class="favorites-characteristic-criteria"
//                             >Target: </span
//                         >${target}
//                     </li>
//                 </ul>
//             </div>
//         </li>`,
//     ''
//   );
//   return render;
// }

// const renderListFavoriteExercises = exercisesGalleryMarkup((filters = [], getRemovButton));

// listExercises.insertAdjacentHTML('beforeend', renderListFavoriteExercises);
