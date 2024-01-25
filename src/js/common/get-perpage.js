import { QUERY_FILTERS, QUERY_EXERCISES } from '../exercise-filters/constants';

const getElementPerPage = queryType => {
  let elemNums = 8;
  const viewportWidth = window.innerWidth;

  if (viewportWidth >= 1440) {
    elemNums = 12;
  } else if (viewportWidth >= 768) {
    switch (queryType) {
      case QUERY_FILTERS:
        elemNums = 12;
        break;
      case QUERY_EXERCISES:
        elemNums = 6;
        break;
      default:
        elemNums = 8;
        break;
    }
  }

  return elemNums;
};

export default getElementPerPage;
