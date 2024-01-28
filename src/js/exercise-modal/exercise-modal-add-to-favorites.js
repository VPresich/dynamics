function addOrRemoveFromFavorites() {
  const exerciseInfo = {
    name: document.querySelector('.exercise-name').textContent,
    rating: document.querySelector('.modal-rating').textContent,
    gifUrl: document.querySelector('.exercise-image-modal').src,
    target: document.querySelector('.exercise-param-target').textContent,
    bodyPart: document.querySelector('.exercise-param-bodypart').textContent,
    equipment: document.querySelector('.exercise-param-equipment').textContent,
    popularity: document.querySelector('.exercise-param-popularity').textContent,
    burnedCalories: document.querySelector('.exercise-calories-value').textContent.split('/')[0],
    time: document.querySelector('.exercise-calories-value').textContent.split('/')[1].trim(),
    description: document.querySelector('.exercise-description').textContent
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
