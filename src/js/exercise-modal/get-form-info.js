function getInfoFromForm(exerciseId) {
  return {
    _id: exerciseId,
    name: document.querySelector('.exercise-name').textContent,
    bodyPart: document.querySelector('.exercise-param-bodypart').textContent,
    burnedCalories: document
      .querySelector('.exercise-calories-value')
      .textContent.split('/')[0],
    target: document.querySelector('.exercise-param-target').textContent,
  };
}
export default getInfoFromForm;
