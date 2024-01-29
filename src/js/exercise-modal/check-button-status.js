import { ADDBTN_CAPTION, REMOVEBTN_CAPTION } from './constants';

function checkFavoriteStatus(exerciseId, btn) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  const isFavorite = favorites.some(item => item._id === exerciseId);

  if (isFavorite) {
    btn.textContent = REMOVEBTN_CAPTION;
  } else {
    btn.textContent = ADDBTN_CAPTION;
  }
}

export default checkFavoriteStatus;
