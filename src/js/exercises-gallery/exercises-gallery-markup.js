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

function exercisesGalleryMarkup(filters = []) {
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
       <li class="exercise-card data-id="${_id}">
          <div class="exercice-card-top-line">
            <div class="ex-card-top-left-part">
              <p class="ex-card-workout exercise-param">workout</p>
              <div class="rating-container">
                <p class="ex-card-rating">${rating}</p>
                <svg
                  class="rating-star-icon"
                  width="18"
                  height="18"
                  aria-label="star icon"
                >
                  <use href="../img/icons/symbols.svg#icon-star"></use>
                </svg>
              </div>
            </div>
            <button type="button" class="ex-card-start-btn">
              Start
              <span class="arrow-icon-span">
                <svg
                  class="arrow-icon"
                  width="16"
                  height="16"
                  aria-label="arrow icon"
                  stroke="black"
                >
                  <use href="./img/icons/symbols.svg#icon-arrow"></use></svg
              ></span>
            </button>
          </div>

          <div class="ex-card-name-container">
            <div class="runner-icon-container">
              <svg class="runner-icon" width="24" height="24" aria-label="runner icon">
                <use href="./img/icons/symbols.svg#icon-running-man"></use>
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


      // <li class="exercise-card" data-id="${_id}">          
      //       <p class="exercise-name">${name}</p>
      //       <p class="body-part">${bodyPart}</p>
      //       <p class="body-equipment">${equipment}</p>
      //       <div class="exercise-param">
      //           <p class="exercise-burnedCalories">${burnedCalories}</p>
      //           <p class="exercise-time">${time}</p>  
      //           <p class="exercise-target">${target}</p>                  
      //       </div>
      //      <p class="exercise-rating">${rating}</p>  
      //      <p class="exercise-popularity">${popularity}</p>
      // </li>