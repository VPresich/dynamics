import { BASE_URL } from '../api/api-constants';
import DbApi from '../api/db-api';
import { PATCH_ENDPOINT } from './constants';

async function patchExerciseRating(data) {
  const apiInst = new DbApi(BASE_URL);
  try {
    return await apiInst.objectPatchRequest(PATCH_ENDPOINT,data);
  } catch (error) {
    throw error
  }
}

export default patchExerciseRating;
