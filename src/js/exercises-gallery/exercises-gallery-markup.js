import iconURL from '../../img/icons/symbols.svg';

function exercisesGalleryMarkup(filters = [], yourPart) {
  return filters.reduce(
    (
      strMarkup,
      {
        _id,
        bodyPart,
        equipment,
        time,
        target,
        burnedCalories,
        gifUrl,
        name,
        filter,
        popularity,
        rating,
      }
    ) =>
      strMarkup +
      `
       <li class="exercise-card" data-id="${_id}">
          <div class="exercice-card-top-line">
            <div class="ex-card-top-left-part">
              <p class="ex-card-workout exercise-param">workout</p>
              ${yourPart(rating, iconURL, _id)}
            </div>
            <button type="submit" class="ex-card-start-btn gallery-start" data-id="${_id}">
              Start
              <span class="arrow-icon-span gallery-start">
                <svg
                  class="arrow-icon gallery-start"
                  width="16"
                  height="16"
                  aria-label="arrow icon"
                  stroke="black"
                >
                  <use href="${iconURL}#icon-arrow" class="gallery-start"></use></svg
              ></span>
            </button>
          </div>

          <div class="ex-card-name-container">
            <div class="runner-icon-container">
              <svg class="runner-icon" width="24" height="24" aria-label="runner icon">
                <use href="${iconURL}#icon-running-man"></use>
              </svg>
            </div>
            <h3 class="ex-card-name exercise-param">${name}</h3>
          </div>

          <div class="ex-card-details">
            <ul class="ex-card-details-list">
              <li class="ex-card-details-item">
                <p class="ex-card-details-text exercise-param">
                  Burned calories:
                  <span class="ex-card-text-part">${burnedCalories}</span>
                </p>
              </li>
              <li class="ex-card-details-item exercise-param">
                <p class="ex-card-details-text">
                  Body part:
                  <span class="ex-card-text-part">${bodyPart}</span>
                </p>
              </li>
              <li class="ex-card-details-item exercise-param">
                <p class="ex-card-details-text">
                  Target:
                  <span class="ex-card-text-part">${target}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
      `,
    ''
  );
}

export default exercisesGalleryMarkup;