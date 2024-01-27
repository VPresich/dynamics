// import getExerciseById from `./exercise-modal-get-id`;

// async function displayExerciseModal(exerciseId) {
  
//   try {
//     const exerciseData = await getExerciseById(exerciseId);

//     const modalContent = `
//       <div class="modal-backdrop">
//         <div class="exercise-window">
//           <div class="exercise-container">
//             <button class="exercise-close-btn" type="button">
//               <svg
//                 class="exercise-close-icon"
//                 width="28"
//                 height="28"
//                 aria-label="Close icon"
//               >
//                 <use href="../img/icons/symbols.svg#icon-icon"></use>
//               </svg>
//             </button>
//             <div class="exercise-image-wrapper">
//               <img
//                 src="${exerciseData.gifUrl}"
//                 alt="${exerciseData.name}"
//               />
//             </div>
//             <div class="exercise-info-wrapper">
//               <p class="exercise-name">${exerciseData.name}</p>
//               <p class="modal-rating">Rating: ${exerciseData.rating}</p>
//               <ul class="exercise-params">
//                 <li class="exercise-params-card">
//                   <p class="exercise-param-name">Target</p>
//                   <p class="exercise-param-value">${exerciseData.target}</p>
//                 </li>
//                 <li class="exercise-params-card">
//                   <p class="exercise-param-name">Body part</p>
//                   <p class="exercise-param-value">${exerciseData.bodyPart}</p>
//                 </li>
//                 <li class="exercise-params-card">
//                   <p class="exercise-param-name">Equipment</p>
//                   <p class="exercise-param-value">${exerciseData.equipment}</p>
//                 </li>
//                 <li class="exercise-params-card">
//                   <p class="exercise-param-name">Popular</p>
//                   <p class="exercise-param-value">${exerciseData.popularity}</p>
//                 </li>
//               </ul>
//               <p class="exercise-calories">Burned calories</p>
//               <p class="exercise-calories-value">${exerciseData.burnedCalories}</p>
//               <p class="exercise-description">${exerciseData.description}</p>
//               <div class="exercise-buttons">
//                 <button
//                   class="exercise-favorite-btn"
//                   type="submit"
//                   data="${exerciseData._id}"
//                 >
//                   Add to favorites
//                 </button>
//                 <button class="exercise-rating-btn" type="submit" data="">
//                   Give a rating
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     `;

//     document.body.innerHTML += modalContent;

//     const closeButton = document.querySelector('.exercise-close-btn');
//     closeButton.addEventListener('click', () => {
//       const modalBackdrop = document.querySelector('.modal-backdrop');
//       modalBackdrop.remove();
//     });
//   } catch (error) {
//     console.error('Error displaying exercise modal:', error);
//   }
// }
