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
  phoneFunc: (phone: string, btnClickcount: number) => {
    return ['phone', { phone, btnClickcount }];
  },
  authNumFunc: (code: number) => {
    return ['authNum', { code }];
  },
  meetingItemList: ['meetingItemList'],
  meetingItemDetailFunc: (id: number) => {
    return ['meetingItemDetail', id];
  },
  friendsList: ['friendsList'],
  friendsRequest: ['friendsRequest'],
  sendFriendRequest: (id: number) => {
    return ['sendFriendRequest', id];
  },
  acceptFriendRequest: (id: number) => {
    return ['acceptFriendRequest', id];
  },
  searchedFriend: (user: string) => {
    return ['searchedFriend', user];
  },
  userValidationId: ['userValidationId'],
  detailUserInformationFunc: (id: number) => ['detailUserInformation', { id }],
  meetingListRegisteredByMe: ['meetingListRegisteredByMe'],
  myInfo: ['myInfo'],
};
