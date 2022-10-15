export const queryKey = {
  example: ['example'],
  exampleFunc: (example: string, hi: string) => {
    return ['arrayTypeQueryKey', { example, hi }];
  },
  checkEmailDuplicateFunc: (email: string) => {
    return ['checkEmailDuplicate', { email }];
  },
  checkNicknameDuplicateFunc: (nickname: string) => {
    return ['checkNicknameDuplicate', { nickname }];
  },
  registerFunc: (userInfo: req.UserInfo) => {
    return ['register', { ...userInfo }];
  },
  friendsList: ['friendsList'],
  friendsRequest: ['friendsRequest'],
  sendFriendRequest: (id: number) => {
    return ['sendFriendRequest', id];
  },
  acceptFriendRequest: (id: number) => {
    return ['acceptFriendRequest', id];
  },
};
