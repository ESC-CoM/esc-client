import { http } from '../core';

export const getFriendsList = async (): Promise<res.FriendList> => {
  const response = await http.get('api/friend');
  return response.data;
};

export const deleteFriend = async (id: number): Promise<res.DeleteFriend> => {
  const response = await http.delete(`api/friend/${id}`);
  return response.data;
};

export const getFriendRequests = async (): Promise<res.FriendRequestList> => {
  const response = await http.get('api/friend/request');
  return response.data;
};

export const sendFriendRequests = async (
  id: number
): Promise<res.DeleteFriend> => {
  const response = await http.get(`api/friend/request/${id}`);
  return response.data;
};

export const acceptFriendRequests = async (
  id: number
): Promise<res.DeleteFriend> => {
  const response = await http.get(`api/friend/accept/${id}`);
  return response.data;
};

export const rejectFriendRequests = async (
  id: number
): Promise<res.DeleteFriend> => {
  const response = await http.delete(`api/friend/reject/${id}`);
  return response.data;
};
