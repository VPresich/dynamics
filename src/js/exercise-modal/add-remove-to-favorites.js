import { KEY_LOCALSTORAGE } from '../common/localstorage/constants';

import { REMOVEBTN_CAPTION, ADDBTN_CAPTION } from './constants';

import getInfoFromForm from './get-form-info';

function addOrRemoveFromFavorites(exerciseId, btn) {
  const exerciseInfo = getInfoFromForm(exerciseId);

  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const index = favorites.findIndex(item => item.name === exerciseInfo.name);

  if (index !== -1) {
    favorites.splice(index, 1);
    btn.textContent = ADDBTN_CAPTION;
  } else {
    favorites.push(exerciseInfo);
    btn.textContent = REMOVEBTN_CAPTION;
  }

  localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(favorites));
}

export default addOrRemoveFromFavorites;
