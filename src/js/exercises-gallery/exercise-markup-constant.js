export function getRatingPart(rating, url) {
  return `<div class="rating-container">
                <p class="ex-card-rating">${rating}</p>
                <svg
                  class="rating-star-icon"
                  width="18"
                  height="18"
                  aria-label="star icon"
                  fill = "#EEA10C";
                >
                  <use href="${url}#icon-star"></use>
                </svg>
              </div>`
}