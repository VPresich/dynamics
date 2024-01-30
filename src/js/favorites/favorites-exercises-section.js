import exercisesGalleryMarkup from '../exercises-gallery/exercises-gallery-markup';
import iconURL from '../../img/icons/symbols.svg';
import getRemovButton from './favorites-button-remove';
import getFavortesNoExercises from './favorites-not-exercises';
import { KEY_LOCALSTORAGE } from '../common/localstorage/constants';
import removFavoritExsercises from './favorites-remove-exercises';

const favoriteslistExercises = document.querySelector(
  '.favorites-list-exercises-likes'
);

const newArrLocalStorage = [];

if (localStorage.length > 2) {
  try {
    newArrLocalStorage.push(JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE)));

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
      const classDelet = 'favorites-icon-trash';

      const attributeDelete = event.target;
      const deleteId = event.target.dataset.id;

      const srcClassDelete = attributeDelete.getAttribute('class');

      if (srcClassDelete === classDelet) {
        removFavoritExsercises(newArr, deleteId);
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
