import { http } from 'src/api/core';
import getQueryString from 'src/utils/getQueryString';

const getMeetingList = async (
  queryString: string
): Promise<res.MeetingFeed> => {
  const response = await http.get(
    `/api/board?${decodeURIComponent(queryString)}`
  );
  return response.data;
};

const getInfiniteMeeting =
  (
    queryStringObj: req.Home,
    apiFunc: (queryString: string) => ReturnType<typeof getMeetingList>
  ) =>
  async ({ pageParam = 0 }) => {
    const queryString = getQueryString({
      ...queryStringObj,
      page: `${pageParam}`,
      size: '50',
      ownerId: '',
      headCount: '',
      university: '',
      gender: '',
      meetingStatus: '',
    });

    const {
      data: { pagination, items },
    } = await apiFunc(queryString);
    return {
      pagination: {
        ...pagination,
        pageNumber: pageParam,
      },
      items,
    };
  };

export { getInfiniteMeeting, getMeetingList };
