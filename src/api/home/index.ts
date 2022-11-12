import { http } from 'src/api/core';

const getMeetingList = async (params?: req.Home): Promise<res.MeetingFeed> => {
  const response = await http.get('/api/board', { params });
  return response.data;
};

const getMeetingDetail = async (id: number): Promise<res.MeetingDetail> => {
  const response = await http.get(`/api/board/${id}`);
  return response.data;
};

const createMeeting = async (
  body: req.CreateMeeting
): Promise<res.MeetingFeed> => {
  console.log(body);
  const response = await http.post(`/api/board`, body);
  return response.data;
};

export { createMeeting, getMeetingDetail, getMeetingList };
