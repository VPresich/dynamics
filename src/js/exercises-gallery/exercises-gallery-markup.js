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
      <li class="exercise-card" data-id="${_id}">          
            <p class="exercise-name">${name}</p>
            <p class="body-part">${bodyPart}</p>
            <p class="body-equipment">${equipment}</p>
            <div class="exercise-param">
                <p class="exercise-burnedCalories">${burnedCalories}</p>
                <p class="exercise-time">${time}</p>  
                <p class="exercise-target">${target}</p>                  
            </div>
           <p class="exercise-rating">${rating}</p>  
           <p class="exercise-popularity">${popularity}</p>
      </li>
      `,
    ''
  );
}

export default exercisesGalleryMarkup;
