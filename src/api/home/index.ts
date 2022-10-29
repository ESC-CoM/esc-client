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
      size: '30',
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

const createMeeting = async (
  body: req.CreateMeeting
): Promise<res.MeetingFeed> => {
  console.log(body);
  const response = await http.post(`/api/board`, body);
  return response.data;
};

const getMeetingDetail = async (id: number): Promise<res.MeetingDetail> => {
  const response = await http.get(`/api/board/${id}`);
  return response.data;
};

const requestMeeting = async ({
  boardId,
  body,
}: req.RequestMeeting): Promise<res.MeetingDetail> => {
  console.log(body);
  const response = await http.post(`/api/board/${boardId}/request`, body);
  return response.data;
};

export {
  createMeeting,
  getInfiniteMeeting,
  getMeetingDetail,
  getMeetingList,
  requestMeeting,
};
