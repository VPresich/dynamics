import { BASE_URL } from '../api/api-constants';
import DbApi from '../api/db-api';

const apiInst = new DbApi(BASE_URL);

async function getFiltersData(filter) {
  const requestParam = {
    filter: filter,
    page: 1,
    per_page: 12,
  };

  const endPoint = `filters?${new URLSearchParams(requestParam).toString()}`;
  console.log();

  try {
    return await apiInst.objectGetRequest(endPoint);
  } catch (error) {}
}

export default getFiltersData;
