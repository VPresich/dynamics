function addToFavorites() {

    const exerciseInfo = {
      name: document.querySelector('.exercise-name').textContent,
      rating: document.querySelector('.modal-rating').textContent,
      gifUrl: document.querySelector('.exercise-image-modal').src,
      target: document.querySelector('.exercise-param-target').textContent,
      bodyPart: document.querySelector('.exercise-param-bodypart').textContent,
      equipment: document.querySelector('.exercise-param-equipment').textContent,
      popularity: document.querySelector('.exercise-param-popularity').textContent,
      burnedCalories: document.querySelector('.exercise-calories-value').textContent.split('/')[0],
      timeWithM: document.querySelector('.exercise-calories-value').textContent.split('/')[1].trim(),
      description: document.querySelector('.exercise-description').textContent
    };
  
    exerciseInfo.time = exerciseInfo.timeWithM.replace('m', '');
    delete exerciseInfo.timeWithM;
  
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(exerciseInfo);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
  