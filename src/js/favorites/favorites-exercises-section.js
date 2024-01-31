import exercisesGalleryMarkup from '../exercises-gallery/exercises-gallery-markup';
import iconURL from '../../img/icons/symbols.svg';
import getRemovButton from './favorites-button-remove';
import getFavortesNoExercises from './favorites-not-exercises';
import { KEY_LOCALSTORAGE } from '../common/localstorage/constants';
import removFavoritExsercises from './favorites-remove-exercises';
import { onGalleryClick } from '../exercise-modal/exercise-modal-handles';

export const favoriteslistExercises = document.querySelector(
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
      if (event.target.classList.contains('gallery-start')) {
        onGalleryClick(event);
        return;
      }

      const deleteId = event.target.dataset.id;

      if (event.target.classList.contains('favorites-icon-trash')) {
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
