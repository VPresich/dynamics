import { KEY_LOCALSTORAGE } from '../common/localstorage/constants';
import getFavortesNoExercises from './favorites-not-exercises';
import { favoriteslistExercises } from './favorites-exercises-section';

function removFavoritExsercises(newArr, deleteId) {
  document.querySelector(`.exercise-card[data-id="${deleteId}"]`).remove();
  newArr.map(res => {
    if (res._id === deleteId) {
      const csdvs = newArr.indexOf(res);

      newArr.splice(csdvs, 1);

      localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(newArr));

      if (!newArr.length) {
        localStorage.removeItem(KEY_LOCALSTORAGE);

        favoriteslistExercises.insertAdjacentHTML(
          'beforeend',
          getFavortesNoExercises()
        );
      }
    }
  });
}

export default removFavoritExsercises;
