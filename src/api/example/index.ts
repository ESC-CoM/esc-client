import { http } from 'src/api/core';

const getExample = async (): Promise<res.meetingDetail> => {
  const response = await http.get(`/health-check`);
  return response.data;
};

export { getExample };
