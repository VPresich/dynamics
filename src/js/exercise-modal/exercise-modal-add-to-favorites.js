function addOrRemoveFromFavorites() {
  const _id = document.querySelector('.exercise-favorite-btn').dataset._id;
  const exerciseInfo = {
    _id: _id,
    name: document.querySelector('.exercise-name').textContent,
    bodyPart: document.querySelector('.exercise-param-bodypart').textContent,
    burnedCalories: document.querySelector('.exercise-calories-value').textContent.split('/')[0],
    target: document.querySelector('.exercise-param-target').textContent
  };

  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const index = favorites.findIndex(item => item.name === exerciseInfo.name);
  
  if (index !== -1) {
    favorites.splice(index, 1);
    document.querySelector('.exercise-favorite-btn').textContent = 'Add to favorites';
  } else {
    favorites.push(exerciseInfo);
    document.querySelector('.exercise-favorite-btn').textContent = 'Remove from';
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
}


// document.querySelector('.exercise-favorite-btn').onclick = addOrRemoveFromFavorites;
