import { http } from '../core';

export const getFriendsList = async (): Promise<res.FriendList> => {
  const response = await http.get('api/friend');
  return response.data;
};

export const deleteFriend = async (id: string): Promise<res.DeleteFriend> => {
  const response = await http.delete(`api/friend/${id}`);
  return response.data;
};

export const getFriendRequests = async (): Promise<res.FriendRequestList> => {
  const response = await http.get('api/friend/request');
  return response.data;
};

export const getSearchedFriend = async (
  user: string
): Promise<res.SearchedFriend> => {
  const response = await http.get(`api/friend/search?value=${user}`);
  return response.data;
};

export const sendFriendRequests = async (
  id: string
): Promise<res.DeleteFriend> => {
  const response = await http.post(`api/friend/request/${id}`);
  return response.data;
};

export const acceptFriendRequests = async (
  id: string
): Promise<res.DeleteFriend> => {
  const response = await http.patch(`api/friend/request/accept/${id}`);
  return response.data;
};

export const rejectFriendRequests = async (
  id: string
): Promise<res.DeleteFriend> => {
  const response = await http.patch(`api/friend/reject/${id}`);
  return response.data;
};
