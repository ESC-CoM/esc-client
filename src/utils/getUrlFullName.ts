import { Location } from 'react-router-dom';

import getQueryStringObj from './getQueryStringObj';

function getUrlFullName(target: string, value: string, location: Location) {
  const queryStrObj = getQueryStringObj(location.search);
  const changedQuery = {
    ...queryStrObj,
    [target]: value,
  };
  const changedUrl = new URLSearchParams(changedQuery).toString();

  return `${location.pathname}?${changedUrl}`;
}

export default getUrlFullName;
