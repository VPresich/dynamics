/*
https://energyflow.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=pull&page=1&limit=10  (приклад з переліком усіх можливих параметрів, кожен з яких можна прибрати за потреби)
*/
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
