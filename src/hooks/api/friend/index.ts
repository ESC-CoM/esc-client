import { isAxiosError } from 'src/api/core';
import {
  acceptFriendRequests,
  deleteFriend,
  getFriendsList,
  rejectFriendRequests,
  sendFriendRequests,
} from 'src/api/friend';
import { getFriendRequests, getSearchedFriend } from 'src/api/friend/index';
import { queryKey } from 'src/constants/queryKey';
import { queryClient } from 'src/index';
import { toastError, toastSuccess } from 'src/utils/toaster';

import { useCoreMutation, useCoreQuery } from '../core';

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
      toastError({ message: '친구 삭제를 실패했습니다.' });
    },
  });
};

export const useFriendsRequests = () => {
  return useCoreQuery(queryKey.friendsRequest, () => getFriendRequests());
};

export const useSearchFriend = (user: string) => {
  return useCoreQuery(
    queryKey.searchedFriend(user),
    () => getSearchedFriend(user),
    {
      enabled: !!user,
    }
  );
};

export const useSendFriendsRequest = () => {
  return useCoreMutation(sendFriendRequests, {
    onSuccess: (res) => {
      const { message } = res;
      toastSuccess({ message });
      queryClient.invalidateQueries(queryKey.friendsRequest);
    },
    onError: (err) => {
      if (isAxiosError<res.Error>(err) && err.response) {
        const { message } = err.response.data;
        toastSuccess({ message });
      }
    },
  });
};

export const useAcceptFriendsRequest = () => {
  return useCoreMutation(acceptFriendRequests, {
    onSuccess: (res) => {
      const { message } = res;
      toastSuccess({ message });
      queryClient.invalidateQueries(queryKey.friendsList);
    },
    onError: () => {
      toastSuccess({ message: '친구 요청 수락을 실패했습니다.' });
    },
  });
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
