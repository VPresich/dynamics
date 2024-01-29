import { ADDBTN_CAPTION, REMOVEBTN_CAPTION } from './constants';
import changeCaption from './change-caption';

function checkFavoriteStatus(exerciseId, btn) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  const isFavorite = favorites.some(item => item._id === exerciseId);

  if (isFavorite) {
    changeCaption(REMOVEBTN_CAPTION, btn);
  } else {
    changeCaption(ADDBTN_CAPTION, btn);
  }
}

export default checkFavoriteStatus;
