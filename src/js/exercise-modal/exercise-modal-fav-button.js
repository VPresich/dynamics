function checkFavoriteStatus() {
    const _id = document.querySelector('.exercise-favorite-btn').dataset._id;
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
    const isFavorite = favorites.some(item => item._id === _id);
  
    const favoriteButton = document.querySelector('.exercise-favorite-btn');
  
    if (isFavorite) {
      favoriteButton.textContent = 'Remove from';
    } else {
      favoriteButton.textContent = 'Add to favorites';
    }
  }  