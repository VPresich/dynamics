/*
https://energyflow.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=pull&page=1&limit=10  (приклад з переліком усіх можливих параметрів, кожен з яких можна прибрати за потреби)
*/
import { BASE_URL } from '../api/api-constants';
import DbApi from '../api/db-api';

async function getExercisesData(filters = {}, searchExample = '') {
  const apiInst = new DbApi(BASE_URL);
  const requestParam = {
    ...filters,
    page: 1,
    limit: 12,
  };

  const endPoint = `exercises?${new URLSearchParams(requestParam).toString()}`;
  console.log(endPoint);

  try {
    return await apiInst.objectGetRequest(endPoint);
  } catch (error) {}
}

export default getExercisesData;
