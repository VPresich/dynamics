import getElementPerPage from '../common/get-perpage';
import { QUERY_FILTERS, QUERY_EXERCISES } from './constants';

const queryEndPoint = (
  queryType,
  params = {},
  currentPage = 1,
  searchStr = ''
) => {
  let requestParam = {};
  if (params) {
    requestParam = {
      ...params,
    };
  }
  if (queryType === QUERY_EXERCISES && searchStr) {
    requestParam = {
      ...requestParam,
      keyword: searchStr,
    };
  }
  requestParam = {
    ...requestParam,
    page: currentPage,
    limit: getElementPerPage(QUERY_FILTERS),
  };

  const endPoint = `${queryType}?${new URLSearchParams(
    requestParam
  ).toString()}`;

  return endPoint;
};

export default queryEndPoint;
