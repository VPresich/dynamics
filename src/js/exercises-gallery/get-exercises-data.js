import { BASE_URL } from '../api/api-constants';
import DbApi from '../api/db-api';
import queryEndPoint from '../exercise-filters/query-endpoint';
import { QUERY_EXERCISES } from '../exercise-filters/constants';

async function getExercisesData(filters = {}, currentPage = 1, search = '') {
  const apiInst = new DbApi(BASE_URL);

  const endPoint = queryEndPoint(QUERY_EXERCISES, filters, currentPage, search);

  try {
    return await apiInst.objectGetRequest(endPoint);
  } catch (error) {}
}

export default getExercisesData;
