import { BASE_URL } from '../api/api-constants';
import DbApi from '../api/db-api';
import queryEndPoint from './query-endpoint';

async function getFiltersData(filter, page) {
  const apiInst = new DbApi(BASE_URL);
  const endPoint = queryEndPoint('filters', filter, page);
  try {
    return await apiInst.objectGetRequest(endPoint);
  } catch (error) {}
}

export default getFiltersData;
