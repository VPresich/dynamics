import { BASE_URL } from '../api/api-constants';
import DbApi from '../api/db-api';

const apiInst = new DbApi(BASE_URL);

async function getFiltersData(filter, numPage, perPages) {
  const requestParam = {
    filter: filter,
    page: numPage,
    limit: perPages,
  };

  const endPoint = `filters?${new URLSearchParams(requestParam).toString()}`;

  try {
    return await apiInst.objectGetRequest(endPoint);
  } catch (error) {}
}

export default getFiltersData;
