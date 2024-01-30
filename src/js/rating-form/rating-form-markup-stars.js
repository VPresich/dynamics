import icon from '../../img/icons/symbols.svg';

function ratingFormMarkupStars(filters = {}) {
  const { exerciseRating } = filters;

  return `
  
  <p class="rating-number">${exerciseRating}.0</p>
  <button
    type="button"
    class="star-btn rating-form-btn"
    data-starnumber="1"
  >
    <svg
      class="star-btn-icon"
      width="24"
      height="24"
      aria-label="star icon"
    >
      <use href="${icon}#icon-star" fill="${
    exerciseRating >= 1 && '#EEA10C'
  }"></use>
    </svg>
  </button>
  <button
    type="button"
    class="star-btn rating-form-btn"
    data-starnumber="2"
  >
    <svg
      class="star-btn-icon"
      width="24"
      height="24"
      aria-label="star icon"
    >
      <use href="${icon}#icon-star"  fill="${
    exerciseRating >= 2 && '#EEA10C'
  }"></use>
    </svg>
  </button>
  <button
    type="button"
    class="star-btn rating-form-btn"
    data-starnumber="3"
  >
    <svg
      class="star-btn-icon"
      width="24"
      height="24"
      aria-label="star icon"
    >
      <use href="${icon}#icon-star"  fill="${
    exerciseRating >= 3 && '#EEA10C'
  }"></use>
    </svg>
  </button>
  <button
    type="button"
    class="star-btn rating-form-btn"
    data-starnumber="4"
  >
    <svg
      class="star-btn-icon"
      width="24"
      height="24"
      aria-label="star icon"
    >
      <use href="${icon}#icon-star" fill="${
    exerciseRating >= 4 && '#EEA10C'
  }"></use>
    </svg>
  </button>
  <button
    type="button"
    class="star-btn rating-form-btn"
    data-starnumber="5"
  >
    <svg
      class="star-btn-icon"
      width="24"
      height="24"
      aria-label="star icon"
    >
      <use href="${icon}#icon-star" fill="${
    exerciseRating >= 5 && '#EEA10C'
  }"></use>
    </svg>
  </button>
      `;
}

export default ratingFormMarkupStars;
