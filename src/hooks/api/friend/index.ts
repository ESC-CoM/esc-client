import {
  acceptFriendRequests,
  deleteFriend,
  getFriendsList,
  rejectFriendRequests,
  sendFriendRequests,
} from 'src/api/friend';
import { queryKey } from 'src/constants/queryKey';
import { queryClient } from 'src/index';
import { toastSuccess } from 'src/utils/toaster';

import { useCoreMutation, useCoreQuery } from '../core';
import { getFriendRequests } from './../../../api/friend/index';

export const useFriendsList = () => {
  return useCoreQuery(queryKey.friendsList, () => getFriendsList());
};

export const useDeleteFriend = () => {
  return useCoreMutation(deleteFriend, {
    onSuccess: (res) => {
      const { message } = res;
      toastSuccess({ message });
      queryClient.invalidateQueries(queryKey.friendsList);
    },
    onError: () => {
      toastSuccess({ message: '친구 삭제를 실패했습니다.' });
    },
  });
};

export const useFriendsRequests = () => {
  return useCoreQuery(queryKey.friendsRequest, () => getFriendRequests());
};

export const useSendFriendsRequest = (id: number) => {
  return useCoreQuery(queryKey.sendFriendRequest(id), () =>
    sendFriendRequests(id)
  );
};

export const useAcceptFriendsRequest = (id: number) => {
  return useCoreQuery(queryKey.acceptFriendRequest(id), () =>
    acceptFriendRequests(id)
  );
};

export const useRejectFriendsRequest = () => {
  return useCoreMutation(rejectFriendRequests, {
    onSuccess: (res) => {
      const { message } = res;
      toastSuccess({ message });
      queryClient.invalidateQueries(queryKey.friendsRequest);
    },
    onError: () => {
      toastSuccess({ message: '친구 요청 거절을 실패했습니다.' });
    },
  });
};