import DbApi from '../api/db-api';
import { BASE_URL } from '../api/api-constants';

async function getExerciseById(exerciseId) {
  const apiInst = new DbApi(BASE_URL);

  try {
    const exerciseData = await apiInst.objectGetRequest(
      `exercises/${exerciseId}`
    );
    return exerciseData;
  } catch (error) {
    console.log('Error fetching exercise data:', error.message);
  }
}

export default getExerciseById;
