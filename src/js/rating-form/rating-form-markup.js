import iconURL from '../../img/icons/symbols.svg';

function ratingFormMarkup(filters = {}) {
  const { exerciseRating } = filters;

  return `
  <div class="rating-form-container">
  <div class="rating-form-content">
  <button type="button" class="close-rating-form-btn rating-form-btn">
    <svg
      class="close-rating-form-icon"
      width="24"
      height="24"
      aria-label="close icon"
      stroke="rgba(27, 27, 27, 1)"
      fill="rgba(27, 27, 27, 1)"
    >
      <use href="${iconURL}#icon-x"></use>
    </svg>
  </button>
  <div class="rating-stars-container">
    <p class="rating-label">Rating</p>
    <div class="stars-container">
     
    </div>
  </div>
  <form class="give-rating-form">
    <input
      type="email"
      class="rating-form-email-input"
      name="email-input"
      placeholder="Email"
    />
    <textarea
      name="comment"
      id="comment-textarea"
      class="rating-form-comment"
      placeholder="Your comment"
    ></textarea>
    <button class="rating-form-send-btn">Send</button>
  </form>
</div>
</div>
      `;
}

export default ratingFormMarkup;
