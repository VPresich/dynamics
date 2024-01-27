function renderRatingStars(ratingElement) { //сюди треба подавати .modal-rating
    const rating = parseInt(ratingElement.textContent);
  
    for (let i = 0; i < 5; i++) {
      const starIcon = document.createElement('svg');
      starIcon.classList.add('exercise-star');
      starIcon.setAttribute('width', '18');
      starIcon.setAttribute('height', '18');
      starIcon.setAttribute('aria-label', 'Star icon');
  
      if (i < rating) {
        starIcon.innerHTML = '<use href="../img/icons/symbols.svg#icon-star"></use>';
        starIcon.style.fill = 'yellow';
      } else {
        starIcon.innerHTML = '<use href="../img/icons/symbols.svg#icon-star"></use>';
        starIcon.style.fill = 'grey';
      }
  
      ratingElement.appendChild(starIcon);
    }
  }
//   window.onload = function() {
//     const ratingElement = document.querySelector('.modal-rating');
//     renderRatingStars(ratingElement);
//   };
  