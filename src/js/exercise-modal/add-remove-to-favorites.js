import { KEY_LOCALSTORAGE } from '../common/localstorage/constants';

import { REMOVEBTN_CAPTION, ADDBTN_CAPTION } from './constants';

import getInfoFromForm from './get-form-info';
import changeCaption from './change-caption';

function addOrRemoveFromFavorites(exerciseId, btn) {
  const exerciseInfo = getInfoFromForm(exerciseId);

  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const index = favorites.findIndex(item => item.name === exerciseInfo.name);

  if (index !== -1) {
    favorites.splice(index, 1);
    changeCaption(ADDBTN_CAPTION, btn);
  } else {
    favorites.push(exerciseInfo);
    changeCaption(REMOVEBTN_CAPTION, btn);
  }

  localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(favorites));
}

export default addOrRemoveFromFavorites;
