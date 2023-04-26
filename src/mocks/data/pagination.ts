export const pagination: Partial<res.MeetingListPagination> = {
  pageNumber: 0,
  pageSize: 10,
};

export const paginating = <T>(searchParams: URLSearchParams, list: T[]) => {
  const size = parseInt(searchParams.get('size') || '10');
  const page = parseInt(searchParams.get('page') || '0');
  const startIdx = page * size;
  const lastIdx = startIdx + size;

  const sliced = list.slice(startIdx, lastIdx);
  const len = list.length;
  const last = len <= lastIdx;

  return {
    itemList: sliced,
    last,
    pageable: { pageNumber: page, pageSize: size },
  };
};
