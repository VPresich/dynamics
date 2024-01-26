// const exercises = [
//   {
//     _id: '64f389465ae26083f39b17b3',
//     bodyPart: 'back',
//     equipment: 'barbell',
//     gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0022.gif',
//     name: 'barbell pullover to press',
//     target: 'lats',
//     description: 'These large back muscles are responsible for shoulder',
//     rating: 4.17,
//     burnedCalories: 33,
//     time: 3,
//     popularity: 168,
//   },
// ];

function modalWindowMarkup(filters = {}) {
  const {
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
    description,
  } = filters;

  return `
        <div class="exercise-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="28"
                height="28"
                aria-label="Close icon"
              >
                <use href="../img/icons/symbols.svg#icon-icon"></use>
              </svg>
            </button>
            <div class="exercise-image-wrapper">
              <img
                src="${gifUrl}"
                alt=""
              />
            </div>
            <div class="exercise-info-wrapper">
              <p class="exercise-name">${name}</p>
              <p class="modal-rating">${rating}</p>
              <ul class="exercise-params">
                <li class="exercise-params-card">
                  <p class="exercise-param-name">Target</p>
                  <p class="exercise-param-value">${target}</p>
                </li>
                <li class="exercise-params-card">
                  <p class="exercise-param-name">Body part</p>
                  <p class="exercise-param-value">${bodyPart}</p>
                </li>
                <li class="exercise-params-card">
                  <p class="exercise-param-name">Equipment</p>
                  <p class="exercise-param-value">${equipment}</p>
                </li>
                <li class="exercise-params-card">
                  <p class="exercise-param-name">Popular</p>
                  <p class="exercise-param-value">${popularity}</p>
                </li>
              </ul>
              <p class="exercise-calories">Burned calories</p>
              <p class="exercise-calories-value">${burnedCalories}/${time} m</p>
              <p class="exercise-description">${description}</p>
              <div class="exercise-buttons">
                <button
                  class="exercise-favorite-btn"
                  type="submit"
                  data="exercise-id"
                >
                  Add to favorites
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${_id}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>   

      `;
}

export default modalWindowMarkup;
